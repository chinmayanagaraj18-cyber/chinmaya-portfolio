import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Message must be at least 10 characters.");
      return;
    }

    setStatus("Sending...");

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setStatus("✅ Message sent!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (
    <section id="contact" className="contact-section">

      <h2>Get in Touch</h2>

      <p className="contact-intro">
        Have a project in mind? Let's connect!
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Your Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

        </div>

        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          >

            <option value="">
              Select a topic
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collab">
              I want to collaborate
            </option>

            <option value="others">
              Others
            </option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
          />

        </div>

        <button type="submit">
          Send Message 🚀
        </button>

        {status && (
          <p className="form-status">
            {status}
          </p>
        )}

      </form>

    </section>
  );
}

export default Contact;