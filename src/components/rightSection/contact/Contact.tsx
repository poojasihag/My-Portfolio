import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmition] = useForm("xeoaaoyn");
  if (state.succeeded) {
    return (
      <div className="h-auto w-full  overflow-auto z-0  bg-white ">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-5xl font-bold text-gray-700 mb-[5rem] mt-[5rem]  text-center ">
            Contact Me:
          </h4>
          <div className="bg-white pb-[5rem] pt-[2rem]  shadow-sky-900 rounded-lg shadow-md">
            <p className="inline- justify-center items-center text-5xl mt-[2rem] ml-[14rem] w-[20vw]  bg-white    text-sky-600 ">
              Thanks for joining!
            </p>
          </div>
          <div className=" m-8 text-center text-gray-700">
            <a href="mailto:notifypoojasihag@gmail.com">
              📧 Email: notifypoojasihag@gmail.com
            </a>
            <p>📍 Location: Fatehabad, Haryana</p>
          </div>
        </div>
      </div>
    );
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="h-auto w-full  overflow-auto z-0  bg-white  "
    >
      <div className="max-w-4xl mx-auto">
        <h4 className="text-5xl font-bold text-gray-700 mb-[5rem] mt-[5rem]  text-center ">
          Contact Me:
        </h4>

        <div className="bg-white p-8  shadow-sky-900 rounded-lg shadow-md">
          <form
            onSubmit={handleSubmition}
            className="space-y-6 "
            action="https://formspree.io/f/xeoaaoyn"
            method="POST"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className=" m-8 text-center text-gray-700">
          <a href="mailto:notifypoojasihag@gmail.com">
            📧 Email: notifypoojasihag@gmail.com
          </a>
          <p>📍 Location: Fatehabad, Haryana</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
