import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { auth, signIn, signOut,handlers } = NextAuth({

    //Tells NextAuth that GitHub is our only login method.
    providers:[GitHubProvider({
        clientId: process.env.AUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
    })]
})