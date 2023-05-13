import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        [
            Facebook({
                clientId: process.env.FACEBOOK_ID,
                clientSecret: process.env.FACEBOOK_SECRET
            })
        ]
    ],
}

export default NextAuth(authOptions)
