import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputChange, FormSubmit } from '../../utils/TypeScript'
import { register } from '../../redux/actions/authAction'


const RegisterForm = () => {

  const initialState = { 
    name: '', account: '', password: '', cf_password: '' 
  }
  const [userRegister, setUserRegister] = useState(initialState)
  const { name, account, password, cf_password } = userRegister

  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)

  const dispatch = useDispatch()

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserRegister({...userRegister, [name]:value})
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(register(userRegister))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name</label>

        <input type="text" className="form-control border-2 border-secondary" id="name"
        name="name" value={name} onChange={handleChangeInput}
        placeholder="Your name is up to 20 chars." />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="account" className="form-label">
          Account
        </label>

        <input type="text" className="form-control border-2 border-secondary" id="account"
        name="account" value={account} onChange={handleChangeInput}
        placeholder="Example@gmail.com/+84374481936" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">Password</label>

        <div className="pass">
          <input type={typePass ? "text" : "password"} 
          className="form-control border-2 border-secondary" 
          id="password"
          name="password" value={password} 
          onChange={handleChangeInput} 
          placeholder="Password must be at least 6 chars."
          />

          {/* {typePass ? (<i className="bi bi-eye-fill"></i>):(<i className="bi bi-eye-fill"></i>)} */}
          <small onClick={() => setTypePass(!typePass)} className="mx-1">
            {typePass ? (<i className="fs-6 bi bi-eye-slash-fill"/>) : (<i className="bi bi-eye-fill fs-6"/>)}
          </small>
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">
          Confirm Password
        </label>

        <div className="pass">
          <input type={typeCfPass ? "text" : "password"} 
          className="form-control border-2 border-secondary" 
          id="cf_password"
          name="cf_password" value={cf_password} 
          onChange={handleChangeInput} 
          placeholder="Your confirm password."
          />

          <small onClick={() => setTypeCfPass(!typeCfPass)} className="mx-1">
            {typeCfPass ? (<i className="fs-6 bi bi-eye-slash-fill"/>) : (<i className="bi bi-eye-fill fs-6"/>)}
          </small>
        </div>
      </div>

      <button type="submit" className="btn btn-dark w-100 my-1">
        Register
      </button>
    </form>
  )
}

export default RegisterForm
