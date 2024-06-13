import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { useState } from 'react'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if(!password) {
      setError("Please enter your password")
      return
    }

    setError("")

    // Perform login logic
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="min-w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              id="email"
              value={email}
              type="text"
              placeholder="Email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button className="btn-primary" type="submit">
              Login
            </button>
            <p className="text-sm text-clip mt-4">
              Not registered yet?{' '}
              <Link className="font-medium text-primary underline" to="/signup">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
