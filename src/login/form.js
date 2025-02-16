import React from 'react'

const Form = () => {
  return (
    <div>

<div className="form-group">
    
    <label>Password <span className="errmsg">*</span></label>
    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
    </div>

    </div>
  )
}

export default Form
