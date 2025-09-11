import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'
import GetTokenButton from './GetTokenButton.jsx'
function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton>Sign In
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
          <GetTokenButton />
      </SignedIn>
    </header>
  )
}

export default App
