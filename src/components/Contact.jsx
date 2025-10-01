import { useState } from 'react';

// Example uses Formspree (free tier available)
// Replace FORM_ID with your Formspree form ID
const FORMSPREE_ID = 'mldwydng';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    setStatus('sending');
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: form,
    });
    console.log("form",form)
    setStatus('sent');
    // if (res.ok) setStatus('sent');
    // else setStatus('error');
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-black"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h2>
        <h6 className="font-semibold mb-6 text-center">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </h6>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="name" placeholder="Name" required className="p-3 border rounded" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-3 border rounded"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="p-3 border rounded"
          />
          <button
            type="submit"
            className="inline-block px-6 py-3 text-white bg-black dark:text-white dark:bg-transparent border border-slate-200 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Send Message
          </button>
          {status === 'sending' && <p>Sending...</p>}
          {status === 'sent' && <p className="text-green-500">Message sent — thank you!</p>}
          {status === 'error' && (
            <p className="text-red-500">Something went wrong. Try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
}