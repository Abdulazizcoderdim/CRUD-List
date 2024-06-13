import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  return (
    <div className="flex items-center bg-transparent border-b-[2px] focus:border-b-blue-600 px-5 mb-3">
      <input
        value={value}
        id='password'
        onChange={onChange}
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder || 'Password'}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-primary cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  )
}

export default PasswordInput
