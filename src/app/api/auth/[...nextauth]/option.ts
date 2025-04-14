import { db } from "@/config/db";
import { NEXTAUTH_SECRET } from "@/lib/constants";
import bcrypt from "bcryptjs";
import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import 'next-auth'

declare module "next-auth" {
    interface User {
        _id?: string
        username?: string
        email?: string
    }
    interface Session {
        user: {
            _id?: string
            username?: string
            email?: string
        } & DefaultSession["user"]
    }
    interface JWT {
        id?: string
        username?: string
        email?: string
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: any): Promise<any> {
                await db()
                try {
                    //@ts-ignore
                    const user = await User.findOne({
                        username: credentials?.username,
                    })
                    if (!user) { 
                        throw new Error("User not found. Please create an account.") 
                    }

                    // if (!user.isVerified) {
                    //     return 'Please verify your email address'
                    // }

                    const IsPasswordCorrect = await bcrypt.compare(credentials?.password, user.password)
                    if (IsPasswordCorrect) {
                        return user
                    } else {
                        return 'Invalid credentials'
                    };
                } catch (error) {
                    console.log("Error in authorize function", error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id?.toString()
                token.username = user.username
                token.email = user.email
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token.id as string
                session.user.username = token.username as string
                session.user.email = token.email as string
            }
            return session
        },
    },
    pages: {
        signIn: '/sign-in'
    },
    session: {
        strategy: "jwt"
    },
    secret: NEXTAUTH_SECRET
}