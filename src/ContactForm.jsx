import React, { useState } from 'react';

export function createEmailDraft(recipient, values) {
  const subject = values.subject.trim() || `Portfolio enquiry from ${values.name.trim()}`;
  const body = `Hello Hlaing Min Htun,\n\n${values.message.trim()}\n\nBest regards,\n${values.name.trim()}\nReply to: ${values.email.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm({ recipient }) {
  const [notice, setNotice] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    window.location.href = createEmailDraft(recipient, values);
    setNotice('Your email app should open with your draft. Review the message and send it there.');
  }
  return <div className="contact-compose"><div className="compose-intro"><span className="compose-icon" aria-hidden="true">✉</span><h3>A good conversation<br/>starts with a hello.</h3><p>Tell me a little about your idea, collaboration, or opportunity. I’d love to hear from you.</p><p className="compose-note" id="mail-help">This form opens your email app with a draft. You’ll send the message from there.</p><a href={`mailto:${recipient}`}>Prefer to email directly? <span aria-hidden="true">↗</span></a></div><form className="contact-form" onSubmit={handleSubmit} aria-label="Compose an email to Hlaing Min Htun" aria-describedby="mail-help"><div className="form-row"><label htmlFor="contact-name">Your name<input id="contact-name" name="name" type="text" placeholder="How should I call you?" autoComplete="name" maxLength="100" required/></label><label htmlFor="contact-email">Your email<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength="254" required/></label></div><label htmlFor="contact-subject">Subject <span className="optional-label">(optional)</span><input id="contact-subject" name="subject" type="text" placeholder="An opportunity, a collaboration, an idea…" maxLength="150"/></label><label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" placeholder="Hi Hlaing, I’d love to talk about…" rows="5" maxLength="3000" required/></label><div className="form-submit"><p>No account needed. Just a little hello.</p><button type="submit">Prepare email <span aria-hidden="true">↗</span></button></div><p className="form-notice" role="status">{notice}</p></form></div>;
}
