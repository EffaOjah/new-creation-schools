import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal mt-12">
          <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-slate-50 py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">Contact Us</span>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Info & Map */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">We'd Love to Hear From You</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you have a question about admissions, tuition, or simply want to schedule a campus tour, our team is ready to assist you.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Address (HQ)</h4>
                  <p className="text-slate-600">4 Uwanse Close, Calabar South, Nigeria.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">+234 816 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600">ncgos01@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded overflow-hidden shadow-sm border border-slate-100 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.19565538392!2d8.3288289!3d4.9538356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10678631b64ff03d%3A0xcda8d757270e5b38!2sUwanse%20St%2C%20Calabar%20540242%2C%20Cross%20River%2C%20Nigeria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="reveal delay-100">
            <div className="bg-slate-50 rounded p-8 md:p-10 shadow-sm border border-slate-100 sticky top-40">

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded resize-none"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 rounded"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
