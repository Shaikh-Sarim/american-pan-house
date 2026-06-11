import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators/contact';
import { sendEmail, getContactConfirmationEmail, getAdminNotificationEmail } from '@/lib/email';
import { prisma } from '@/lib/prisma';
import { APIResponse } from '@/types';
import { z } from 'zod';

export async function POST(
  request: NextRequest,
): Promise<NextResponse<APIResponse>> {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the data using Zod
    const validatedData = contactFormSchema.parse(body);

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        status: 'new',
      },
    });

    // Send confirmation email to user
    const confirmationEmail = getContactConfirmationEmail(
      validatedData.name,
      validatedData.message,
    );

    const confirmationResult = await sendEmail({
      to: validatedData.email,
      ...confirmationEmail,
    });

    // Send notification email to admin
    const adminEmail = getAdminNotificationEmail(
      validatedData.name,
      validatedData.email,
      validatedData.message,
    );

    const adminNotificationResult = await sendEmail({
      to: process.env.SMTP_USER || 'admin@americanpenhouse.com',
      ...adminEmail,
    });

    if (!confirmationResult.success || !adminNotificationResult.success) {
      console.error('Email sending failed', {
        confirmationResult,
        adminNotificationResult,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! We will get back to you shortly.',
      },
      { status: 200 },
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      for (const [key, value] of Object.entries(
        error.flatten().fieldErrors,
      )) {
        errors[key] = (value as string[] | undefined) || [];
      }
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 },
      );
    }

    // Handle other errors
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request.',
      },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
