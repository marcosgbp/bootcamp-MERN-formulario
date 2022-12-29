import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form className="mt-5">
      <div className="row mb-3">
        <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input onChange={onChange} type="text" className="form-control" name="firstName" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input onChange={onChange} type="text" className="form-control" name="lastName" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input onChange={onChange} type="text" className="form-control" name="email" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input onChange={onChange} type="text" className="form-control" name="password" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
        <div className="col-sm-10">
          <input onChange={onChange} type="text" className="form-control" name="confirmPassword" />
        </div>
      </div>
    </form>
  );
};


export default Form;