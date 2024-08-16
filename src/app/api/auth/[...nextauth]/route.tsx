import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

// Route Handlers Providers

const handler = NextAuth ({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              console.log(credentials)
              return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
          })
    ]
})

export { handler as GET, handler as POST }