import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_CLIENT,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        })

    ],
}

export default NextAuth(authOptions)
