# Database Setup Guide

This guide will help you set up PostgreSQL and initialize the database for American Pen House.

## Prerequisites

- PostgreSQL installed on your system
- Node.js and npm installed

## Step 1: Install PostgreSQL

### On Windows:
1. Download PostgreSQL from https://www.postgresql.org/download/windows/
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user
4. Keep the default port (5432)

### On Mac:
```bash
brew install postgresql@15
brew services start postgresql@15
```

### On Linux (Ubuntu/Debian):
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

## Step 2: Create Database and User

Open PostgreSQL command line or pgAdmin:

```sql
-- Create database
CREATE DATABASE american_pen_house;

-- Create user (optional - you can use default postgres)
CREATE USER pen_house_user WITH PASSWORD 'your_secure_password';

-- Grant privileges
ALTER ROLE pen_house_user WITH CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE american_pen_house TO pen_house_user;
```

## Step 3: Configure Environment

Update `.env.local` in your project root:

```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/american_pen_house"
```

Replace:
- `postgres` - database user (or your custom username)
- `your_password` - the password you set
- `american_pen_house` - database name (if different)

## Step 4: Initialize Prisma

```bash
# Generate Prisma client
npm install

# Create database tables
npx prisma db push

# Seed database with sample data (optional)
npm run db:seed
```

## Step 5: Verify Setup

Check that migrations ran successfully:

```bash
npx prisma studio
```

This opens a visual database editor at http://localhost:5555

## Step 6: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 and navigate to `/admin` to test the admin panel.

## Admin Panel Features

**URL:** http://localhost:3000/admin

### Add Books
1. Fill in book details (Title, Author, Description, Cover Image URL, Price)
2. Click "Add Book"
3. Books appear in Portfolio Section on homepage

### View Published Books
- See all published books in the right panel
- Books are automatically fetched from database
- Portfolio carousel auto-advances every 8 seconds

## API Endpoints

### Books
- `GET /api/books` - Get all published books
- `POST /api/books` - Create new book

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service

### Contact Form
- `POST /api/contact` - Submit contact form

## Troubleshooting

### "Database connection refused"
- Check PostgreSQL is running
- Verify DATABASE_URL in .env.local
- Check port 5432 is accessible

### "No schema in database"
```bash
npx prisma db push
```

### "Books not showing in portfolio"
1. Check admin panel for books
2. Verify books have `status: PUBLISHED`
3. Check browser console for errors
4. Refresh page

### Reset Database
```bash
npx prisma db reset
npm run db:seed
```

## Database Schema

### Book
- `id` (String) - Unique identifier
- `title` (String) - Book title
- `author` (String) - Author name
- `description` (String) - Book description
- `coverImage` (String) - URL to cover image
- `price` (Float) - Book price
- `status` (BookStatus) - DRAFT, PUBLISHED, ARCHIVED
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

### Testimonial
- `id` (String) - Unique identifier
- `author` (String) - Testimonial author name
- `content` (String) - Testimonial text
- `image` (String) - Optional author image URL
- `rating` (Int) - 1-5 stars
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

### Service
- `id` (String) - Unique identifier
- `name` (String) - Service name
- `description` (String) - Service description
- `icon` (String) - Optional icon name
- `image` (String) - Optional service image URL
- `features` (Array) - List of features
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## Next Steps

1. Add sample books via admin panel
2. Customize content in service and about pages
3. Deploy to Vercel with PostgreSQL connection
4. Set up email service for contact form
