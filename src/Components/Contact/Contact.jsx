import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'
import "../../App.css"; // Make sure to import the custom CSS file

const Contact = () => {
  // State to control Snackbar visibility
  const [open, setOpen] = useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then(
        (result) => {
          setOpen(true) // Open Snackbar upon successful email send
          form.current.reset() // Reset form
        },
        (error) => {
          console.log(error.text) // Log error if email send fails
        }
      )
  }

  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-heading">Contact</div>
        <div className="contact-subheading">
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-title">Email Me 🚀</div>
          
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            className="form-input"
          />
          
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className="form-input"
          />
          
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="form-input"
          />
          
          <textarea
            placeholder="Message"
            rows="4"
            name="message"
            className="form-textarea"
          />
          
          <input
            type="submit"
            value="Send"
            className="form-submit"
          />
        </form>

        {/* Snackbar component for feedback after successful email submission */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  )
}

export default Contact
