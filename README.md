# CodeAnt AI

A dynamic and responsive web application built using Next.js, TypeScript, TailwindCSS, Shadcn, Prisma, and PostgreSQL, designed for a seamless user experience and robust functionality.

## Live Demo

Check out the live application [here](https://dashboard-codeantai-akash.vercel.app/).

## Features

- **User Authentication**: Implemented with NextAuth.js, using the GitHub provider for secure login.
- **Protected Routes**: Middleware ensures only authenticated users can access certain pages.
- **Dynamic Forms**: Forms created with React Hook Form and validated with Zod for a smooth user experience.
- **Responsive Design**: Pixel-perfect implementation from Figma designs, ensuring usability across devices.
- **State Management**: Utilized Zustand for efficient and scalable state management.
- **Database Integration**: Managed with Prisma ORM and backed by a PostgreSQL database.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) and [Shadcn](https://shadcn.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/akash0708/dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dashboard
   ```

3. Install dependencies using pnpm (preferred):

   ```bash
   pnpm install
   ```

4. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=your_postgresql_database_url
   NEXTAUTH_SECRET=your_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

5. Run database migrations:

   ```bash
   pnpm dlx prisma migrate dev
   ```

6. Generate prisma client:

   ```bash
   pnpm dlx generate
   ```

7. Start the development server:

   ```bash
   pnpm dev
   ```

8. Look into the database

   ```bash
   pnpm dlx prisma studio
   ```

## Usage

1. **Authentication**: Log in using your GitHub account.
2. **Protected Pages**: Access routes guarded by middleware after authentication.
3. **Dynamic Forms**: Use forms with real-time validation.
4. **Responsive Design**: Enjoy a seamless experience across devices.

## Roadmap

- Add more authentication providers.
- Enhance error handling and validation.
- Integrate additional features like notifications.
