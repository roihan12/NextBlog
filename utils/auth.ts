import { env } from "@/env.mjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import {
  getServerSession,
  type Awaitable,
  type NextAuthOptions,
  type User,
} from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import type { Adapter } from "next-auth/adapters";
import { prisma } from "./prisma";
const {
  NEXT_PUBLIC_GOOGLE_ID,
  NEXT_PUBLIC_GOOGLE_SECRET,
  NEXTAUTH_SECRET,
  EMAIL_NAME,
} = env;

export const options: NextAuthOptions = {
  theme: {
    colorScheme: "auto",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // GithubProvider({
    //   profile(profile: GithubProfile): Awaitable<User> {
    //     return {
    //       ...profile,
    //       role:
    //         profile.login === NEXT_PUBLIC_GITHUB_USERNAME ? "admin" : "guest",
    //       name: profile.name,
    //       id: profile.id.toString(),
    //       image: profile.avatar_url,
    //     };
    //   },
    //   clientId: NEXT_PUBLIC_GITHUB_ID,
    //   clientSecret: NEXT_PUBLIC_GITHUB_SECRET,
    // }),
    GoogleProvider({
      profile(profile: GoogleProfile): Awaitable<User> {
        return {
          ...profile,
          role: profile.email === EMAIL_NAME ? "admin" : "guest",
          name: profile.name,
          id: profile.sub,
          image: profile.picture,
        };
      },
      clientId: NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(options);
