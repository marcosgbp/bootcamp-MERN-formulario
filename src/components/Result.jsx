import React from 'react'

function Result(props) {
    const {firstName, lastName, email, password, confirmPassword} = props.data;
  return (
    <div>
        <br />
        <h2>Results</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default Result;