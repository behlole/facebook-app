import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,

        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: true
}

export default NextAuth(authOptions)
