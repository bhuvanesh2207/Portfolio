import axios from 'axios';
import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload

    axios
      .post("http://localhost:8080/contact", {
        email: email,
        message: message
      })
      .then(res => {
        alert("Mail sent successfully...");
        setEmail("");
        setMessage("");
      })
      .catch(err => {
        alert("Error Occurred: " + err);
        console.log(err);
      });
  };

  return (
    <section className="contact-section slide-up-on-load">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Your message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message here..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}