import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

const AuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT!,
          clientSecret: process.env.GOOGLE_SECRET!
      })
    ],
    session: {
        strategy: 'jwt'
    }
}

export default AuthOptions;