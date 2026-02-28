import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.parentName || !formData.email || !formData.phone || !formData.program) {
      setError("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (EmailJS integration would go here)
    try {
      // In a real implementation, you would use EmailJS SDK:
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        program: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl">
            Get in touch with us for inquiries, admissions, or any questions.
          </p>
        </div>
      </section> */}

      {/* Contact Info & Form */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <MapPin size={32} />,
              title: "Address",
              content: "Bangalore, India",
            },
            {
              icon: <Phone size={32} />,
              title: "Phone",
              content: "+91-9999999999",
            },
            {
              icon: <Mail size={32} />,
              title: "Email",
              content: "info@chigurukids.com",
            },
          ].map((info, idx) => (
            <div key={idx} className="card-child text-center">
              <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-xl font-bold font-bold text-primary mb-2">
                {info.title}
              </h3>
              <p className="text-foreground">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold font-bold text-primary mb-8">
              Enrollment Inquiry Form
            </h2>
            {/* <form onSubmit={handleSubmit} className="space-y-6">
            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Parent Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="+91-9999999999"
                  required
                />
              </div>

            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Child Name
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="Child's name"
                />
              </div>

           
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Child Age
                </label>
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  placeholder="e.g., 2.5 years"
                />
              </div>

            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Program Interested *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                >
                  <option value="">Select a program</option>
                  <option value="playgroup">Playgroup (1.5 - 2.5 years)</option>
                  <option value="nursery">Nursery (2.5 - 3.5 years)</option>
                  <option value="lkg">LKG (3.5 - 4.5 years)</option>
                  <option value="ukg">UKG (4.5 - 5 years)</option>
                  <option value="daycare">Daycare</option>
                </select>
              </div>

            
              <div>
                <label className="block text-foreground font-bold font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground h-32 resize-none"
                  placeholder="Any additional information..."
                ></textarea>
              </div>

           
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

             
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! We will contact you soon.
                </div>
              )}

            
              <button
                type="submit"
                className="btn-primary w-full text-center"
              >
                Submit Inquiry
              </button>
            </form> */}
            <form
            action="https://formsubmit.co/surendrav9494@gmail.com"
            method="POST"
            className="space-y-5 bg-white p-6 rounded-xl shadow-lg"
          >
            {/* FormSubmit Settings */}
            <input type="hidden" name="_subject" value="New Admission Inquiry - Chiguru Kids" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://chigurukids.com/thank-you" />

            {/* Parent Name */}
            <div>
              <label className="font-semibold">Parent Name *</label>
              <input
                type="text"
                name="Parent Name"
                required
                placeholder="Parent name"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email *</label>
              <input
                type="email"
                name="Email"
                required
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-semibold">Phone *</label>
              <input
                type="tel"
                name="Phone"
                required
                 placeholder="+91"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Child Name */}
            <div>
              <label className="font-semibold">Child Name</label>
              <input
                type="text"
                name="Child Name"
                 placeholder="Child name"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Child Age */}
            <div>
              <label className="font-semibold">Child Age</label>
              <input
                type="text"
                name="Child Age"
                 placeholder="1-10"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Program */}
            <div>
              <label className="font-semibold">Program *</label>
              <select
                name="Program"
                required
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Select Program</option>
                <option>Playgroup (1.5 – 2.5 yrs)</option>
                <option>Nursery (2.5 – 3.5 yrs)</option>
                <option>LKG (3.5 – 4.5 yrs)</option>
                <option>UKG (4.5 – 5 yrs)</option>
                <option>Daycare</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="font-semibold">Message</label>
              <textarea
                name="Message"
                rows="4"
                className="w-full border p-3 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white w-full py-3 rounded-lg font-bold hover:opacity-90"
            >
              Submit Inquiry
            </button>
          </form>
          </div>

          {/* Contact Info & Hours */}
          <div className="animate-slide-up space-y-8">
            <div className="card-child">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Office Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-foreground font-semibold">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-child">
              <h3 className="text-2xl font-bold font-bold text-primary mb-6">
                Why Enroll?
              </h3>
              <ul className="space-y-3">
                {[
                  "Expert and caring teachers",
                  "Safe and hygienic environment",
                  "Play-based learning approach",
                  "Modern facilities",
                  "Individual attention",
                  "Flexible scheduling options",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps Embed */}
            <div className="card-child">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Location
              </h3>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7592066056893!2d77.5945627!3d12.9352403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x3f0d3c8b3e8e8e8e!2sChiguru%20KIDS%20Preschool!5e0!3m2!1sen!2sin!4v1234567890"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold text-foreground mb-2">Location: Chiguru KIDS Preschool</p>
                <p className="text-sm text-muted-foreground">Bangalore, India</p>
                <p className="text-sm text-muted-foreground mt-2">Click the map to open in Google Maps for directions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What is the admission process?",
                a: "Parents can fill the enrollment form, schedule a campus visit, and complete the admission formalities.",
              },
              {
                q: "What is the fee structure?",
                a: "Fees vary by program. Please contact us for detailed fee information and payment options.",
              },
              {
                q: "Do you provide transportation?",
                a: "We can provide transportation assistance. Please inquire during your campus visit.",
              },
              {
                q: "What is the teacher-to-student ratio?",
                a: "We maintain a low ratio of 1:8 to ensure individual attention to each child.",
              },
              {
                q: "Do you provide meals?",
                a: "Yes, we provide nutritious meals and snacks prepared in-house following health standards.",
              },
              {
                q: "Can parents visit anytime?",
                a: "Yes, parents are welcome to visit during designated hours. We maintain an open-door policy.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold font-bold text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
