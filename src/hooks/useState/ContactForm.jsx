// import './index.css';
import { useState } from 'react';

export const ContactForm = () => {

    const [user , setUser] = useState({
        username: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        // setUser((prev) => {
        //     return {
        //         ...prev,
        //         [name]: value   
        //     }
        // })
        setUser((prev) =>({
            ...prev, 
            [name]: value
        }))
    
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    }

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[20vw] flex flex-col justify-center items-center gap-4">    
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={user.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};