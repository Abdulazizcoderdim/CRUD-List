import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!name) {
      setError('Please enter your name')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!password) {
      setError('Please enter your password')
      return
    }

    setError('')

    // Perform sign up logic
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="min-w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id='name'
              placeholder="Name"
              className="input-box"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id='email'
              placeholder="Email"
              className="input-box"
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button className="btn-primary" type="submit">
              Create Account
            </button>
            <p className="text-sm text-clip mt-4">
              Already have an account?{' '}
              <Link className="font-medium text-primary underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
