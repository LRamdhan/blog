import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOption = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }