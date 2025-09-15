import { useState } from 'react';

// Example uses Formspree (free tier available)
// Replace FORM_ID with your Formspree form ID
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    setStatus('sending');
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: form,
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-xl grid gap-4">
        <input name="name" placeholder="Naveen K" required className="p-3 border rounded" />
        <input
          name="email"
          type="email"
          placeholder="Your email"
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
        <button type="submit" className="px-5 py-3 bg-brand text-white rounded">
          Send
        </button>
        {status === 'sending' && <p>Sending...</p>}
        {status === 'sent' && <p className="text-green-500">Message sent — thank you!</p>}
        {status === 'error' && (
          <p className="text-red-500">Something went wrong. Try again later.</p>
        )}
      </form>
      <div className="mt-8">
        <p>Or reach me on:</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/your" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}