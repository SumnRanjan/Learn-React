// RegistrationReact.jsx
import { useState } from "react";

export const RegistrationFormReact = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",       
        email: "",
        password: "",
        phoneNumber: "",
    });
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        console.log("Form submitted successfully!");
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={user.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={ user.lastName}
            onChange={handleChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={ user.email}
            onChange={handleChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={user.password}
            onChange={handleChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phoneNumber"
            placeholder="9876543211"
            required
            value={user.phoneNumber}
            onChange={handleChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            { user.firstName} { user.lastName}
          </span>
          . My email address is <span>{ user.email}</span> and my phone number is
          <span>{  user.phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};