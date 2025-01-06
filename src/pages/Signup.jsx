import React, { useState } from "react";

export default function Signup() {
  const [formValues, setFormValues] = useState({ //make state to trigger form values
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: null,
    nameError: null,
    usernameError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target is the input field that triggered the event (onChange)

    // Update the field value
    setFormValues({
      ...formValues,
      [name]: value, // Update the field value in the state, if the field name is "email", it will update the email field in the state
    });

    // Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({
        ...formErrors,
        emailError: !value
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email format"
          : null,
      });
    }

    if (name === "name") {
      setFormErrors({
        ...formErrors,
        nameError: !value ? "Name is required" : null,
      });
    }

    if (name === "username") {
      const usernameRegex = /^\S+$/; // No spaces allowed
      setFormErrors({
        ...formErrors,
        usernameError: !value
          ? "Username is required"
          : !usernameRegex.test(value)
          ? "Username cannot contain spaces"
          : null,
      });
    }

    if (name === "password") {
      const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

      setFormErrors({
        ...formErrors,
        passwordError: !value
          ? "Password is required"
          : !passwordRegex.test(value)
          ? "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character"
          : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //To prevent the default form submission behavior (refreshing the page)

    if (
      // Check if all form errors are null and all form values are not empty, Object refers to the object that contains the formErrors and formValues
      Object.values(formErrors).every((error) => error === null) &&
      Object.values(formValues).every((value) => value)
    ) {
      alert("Form submitted successfully:\n" + JSON.stringify(formValues, null, 2));
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Register</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${
              formErrors.emailError ? "border-danger" : ""
            }`}
            value={formValues.email} //Bind value to the state
            onChange={handleChange}
          />
          {formErrors.emailError && (
            <div className="form-text text-danger">{formErrors.emailError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${
              formErrors.nameError ? "border-danger" : ""
            }`}
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.nameError && (
            <div className="form-text text-danger">{formErrors.nameError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className={`form-control ${
              formErrors.usernameError ? "border-danger" : ""
            }`}
            value={formValues.username}
            onChange={handleChange}
          />
          {formErrors.usernameError && (
            <div className="form-text text-danger">{formErrors.usernameError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${
              formErrors.passwordError ? "border-danger" : ""
            }`}
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.passwordError && (
            <div className="form-text text-danger">{formErrors.passwordError}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}
