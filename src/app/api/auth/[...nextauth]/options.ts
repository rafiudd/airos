import { UserType } from '@/types/user'
import { randomBytes } from 'crypto'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const fakeUsers: UserType[] = [
  {
    id: '1',
    email: 'user@demo.com',
    username: 'demo_user',
    password: '123456',
    firstName: 'Demo',
    lastName: 'User',
    role: 'Admin',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZWNoemFhIiwiYXVkIjoiaHR0cHM6Ly90ZWNoemFhLmdldGFwcHVpLmNvbS8iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVjaHphYSIsIkVtYWlsIjoidGVjaHphYXN0dWRpb0BnbWFpbC5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.ud4LnFZ-mqhHEYiPf2wCLM7KvLGoAxhXTBSymRIZEFLleFkO119AXd8p3OfPCpdUWSyeZl8-pZyElANc_KHj5w',
  },
]

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials):Promise<any> {
        const filteredUser =  fakeUsers.find((user) => {
          return user.email === credentials?.email && user.password === credentials?.password
        })
        if (filteredUser) {
          return filteredUser
        } else {
          // throw new Error('Email or Password is not valid')
          return null
        }
      },
    }),
  ],
  secret: 'kvwLrfri/MBznUCofIoRH9+NvGu6GqvVdqO3mor1GuA=',
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    async signIn({ }) {
      return true
    },
    session: ({ session }) => {
      session.user = {
        email: 'user@demo.com',
        name: 'Test User',
      }
      return Promise.resolve(session)
    },
  },
  session: {
    maxAge: 24 * 60 * 60 * 1000,
    generateSessionToken: () => {
      return randomBytes(32).toString('hex')
    },
  },
}
