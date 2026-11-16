import { ContactForm } from './ContactForm'
import './Contact.css'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-intro">
          <p className="contact-kicker">Contact</p>
          <h2 id="contact-title">Have something in mind? <span>Let’s talk.</span></h2>
          <p>For roles, projects, or technical conversations, send me a note and let’s start talking.</p>
          <div className="contact-direct">
            <span className="contact-direct-icon" aria-hidden="true">✉</span>
            <div>
              <a href="mailto:ayushsinghmy7080@gmail.com">ayushsinghmy7080@gmail.com <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
