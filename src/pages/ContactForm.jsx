import React, { useState } from "react";
import Header from "../components/header";
import {
  Input,
  Textarea,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://qmail-server.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send");

      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        designation: "",
        organisation: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Typography variant="h4" className="mb-6">
          Drop Us a Line –{" "}
          <span className="text-primary-light">
            Let’s Build Intelligence Together
          </span>
        </Typography>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left - Form and Locations */}
          <div className="lg:w-3/4 w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Input
                    label="Name *"
                    name="name"
                    variant="standard"
                    value={formData.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <Typography color="red" className="text-sm mt-1">
                      {errors.name}
                    </Typography>
                  )}
                </div>
                <Input
                  label="Designation"
                  name="designation"
                  variant="standard"
                  value={formData.designation}
                  onChange={handleChange}
                />
                <Input
                  label="Organisation"
                  name="organisation"
                  variant="standard"
                  value={formData.organisation}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    variant="standard"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <Typography color="red" className="text-sm mt-1">
                      {errors.email}
                    </Typography>
                  )}
                </div>
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  variant="standard"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Textarea
                  label="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  variant="outlined"
                />
                {errors.message && (
                  <Typography color="red" className="text-sm mt-1">
                    {errors.message}
                  </Typography>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  label="I agree to be contacted by Quberneu through the information provided."
                  crossOrigin={undefined}
                />
              </div>
              {errors.agree && (
                <Typography color="#eb262a" className="text-sm mt-1">
                  {errors.agree}
                </Typography>
              )}

              <Button
                type="submit"
                className="bg-primary-light text-white rounded-md flex items-center gap-2"
                disabled={loading}
              >
                {loading && <Spinner className="h-4 w-4" />}
                Send
              </Button>

              {status && (
                <Typography className="text-sm mt-2">{status}</Typography>
              )}
            </form>
          </div>

          {/* Right - Email Message */}
          <div className="lg:w-1/4 w-full flex justify-center lg:border-l lg:border-gray-300 lg:pl-6">
            <div className="text-center p-6 h-fit">
              <Typography variant="h6" className="text-xl text-gray-800 mb-2">
                Write to us at
              </Typography>
              <Typography className="text-primary-light text-xl font-medium break-words">
                <a href="mailto:hello@quberneu.com" className="underline">
                  hello@quberneu.com
                </a>
              </Typography>
            </div>
          </div>
        </div>
        <hr className="mt-14 mb-7 border-t border-gray-300" />
        <div>
          <Typography variant="h5" className="mb-6">
            Locations
          </Typography>
          <div className="grid md:grid-cols-2 gap-10 text-gray-800">
            <div>
              <Typography variant="h6" className="mb-2 font-semibold">
                London
              </Typography>
              <Typography className="text-base">
                SUITE 3, 1st floor,
                <br />
                34-35 Hatton Garden,
                <br />
                London EC1N 8DX
                <br />
                United Kingdom
              </Typography>
            </div>
            <div>
              <Typography variant="h6" className="mb-2 font-semibold">
                Chennai
              </Typography>
              <Typography className="text-base">
                55, Rajiv Gandhi Salai,
                <br />
                Karapakkam, Chennai
                <br />
                600097
                <br />
                India
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
