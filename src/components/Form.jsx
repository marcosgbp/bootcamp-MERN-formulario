import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="mt-5">
      <div className="row mb-3">
        <label htmlFor="firstName" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="firstName"
          />
          {(inputs.firstName.length < 2 && inputs.firstName !== "") 
          ?<p className="text-danger">Nombre debe de tener más de 2 caracteres</p>
          : null}
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="lastName" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="lastName"
          />
          {(inputs.lastName.length < 2 && inputs.lastName !== "") 
          ?<p className="text-danger">Apellidos debe de tener más de 2 caracteres</p>
          : null}
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="email"
          />
          {(inputs.email.length < 5 && inputs.email !== "") 
          ?<p className="text-danger">Email debe de tener más de 5 caracteres</p>
          : null}
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="password"
          />
          {(inputs.password.length < 8 && inputs.password !== "") 
          ?<p className="text-danger">Password debe de tener más de 8 caracteres</p>
          : null}
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="confirmPassword"
          />
          {(inputs.confirmPassword!==inputs.password) 
          ?<p className="text-danger">No coicide tu contraseña, verifica por favor</p>
          : null}
        </div>
      </div>
    </form>
  );
};

export default Form;
