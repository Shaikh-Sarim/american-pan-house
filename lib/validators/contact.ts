import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(5000, { message: 'Message must not exceed 5000 characters' }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
