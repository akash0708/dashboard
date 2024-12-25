import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.githubId = profile.id;
        token.githubUsername = profile.login;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.githubId) {
        session.githubId = token.githubId as string;
        session.githubUsername = token.githubUsername as string;
      }
      return session;
    },
  },
};
