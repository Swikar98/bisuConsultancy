import React, { useState } from "react";

const ContactForm = () => {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <section className="container border-4 rounded-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border bg-white border-blue-900 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border bg-white  border-blue-900 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border bg-white  border-blue-900 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
