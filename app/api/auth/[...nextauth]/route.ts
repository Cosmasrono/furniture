import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
    
        if (!credentials?.email || !credentials?.password) {
          return null;
        } 

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user) {
          // For now, assume password is correct if user exists.
          // This needs to be replaced with actual password verification.
          return user;
        } else {
          // Create a new user if not found (for testing purposes)
          const newUser = await prisma.user.create({
            data: {
              email: credentials.email,
              name: "New User", // You might want to get this from a signup form
            },
          });
          return newUser;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  }
});

export { handler as GET, handler as POST };
