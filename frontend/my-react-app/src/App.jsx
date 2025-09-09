import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default App
