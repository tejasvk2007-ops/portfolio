"use client";

import { useState } from "react";
import Button from "../../components/Button";

// Client-side form with validation only.
// There is no backend — submitting shows a success message
// and does NOT send an email.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (message.trim().length < 10) {
      nextErrors.message = "Please write a message of at least 10 characters.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <strong>Thanks, {name.trim()}!</strong> Your message was received in this demo form.
        Since there is no backend yet, please email me directly at{" "}
        <a href="mailto:tejasvk2007@gmail.com">tejasvk2007@gmail.com</a> to reach me.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Hi Tejas, ..." />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </label>
      <div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
