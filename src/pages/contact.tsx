import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import styles from './contact.module.css';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const upcomingEvents = [
    {
      title: 'Coffee Tasting Experience',
      date: 'March 15, 2024',
      description:
        'Join us for an exclusive coffee tasting session featuring our finest single-origin beans. Learn about different roasting techniques and brewing methods.',
    },
    {
      title: 'Barista Workshop',
      date: 'April 20, 2024',
      description:
        'Master the art of coffee making with our expert baristas. Perfect your latte art and learn professional brewing techniques.',
    },
    {
      title: 'Live Music & Coffee Night',
      date: 'May 5, 2024',
      description:
        'Enjoy an evening of acoustic performances while sipping on your favorite coffee blend. Special menu items available.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Contact')}</title>
      </Helmet>
      <main className={styles.contactContainer}>
        <section className={`${styles.heroSection} ${styles.animate}`}>
          <AnimatedTextReveal
            as="h1"
            scrollTrigger={false}
            className={styles.title}
          >
            Let's Connect Over Coffee
          </AnimatedTextReveal>
          <AnimatedTextReveal
            as="p"
            scrollTrigger={false}
            className={styles.subtitle}
          >
            Have a question or just want to chat? We'd love to hear from you.
            Drop us a message or visit us at our café.
          </AnimatedTextReveal>
        </section>

        <div className={styles.contentGrid}>
          <div
            className={`${styles.contactInfo} ${styles.animate}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2>Visit Us</h2>
            <p>
              123 Coffee Street
              <br />
              Seattle, WA 98101
            </p>
            <h3>Hours</h3>
            <p>
              Monday - Friday: 7am - 7pm
              <br />
              Saturday - Sunday: 8am - 6pm
            </p>
            <h3>Contact</h3>
            <p>
              Phone: (206) 555-0123
              <br />
              Email: hello@latitude48.cafe
            </p>
          </div>

          <form
            className={`${styles.contactForm} ${styles.animate}`}
            style={{ animationDelay: '0.4s' }}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input className={styles.input} type="text" id="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea className={styles.textarea} id="message" required />
            </div>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting'
                ? 'Sending...'
                : formStatus === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
            </button>
          </form>
        </div>

        <section
          className={`${styles.eventsSection} ${styles.animate}`}
          style={{ animationDelay: '0.6s' }}
        >
          <h2>Upcoming Events</h2>
          <ul className={styles.eventsList}>
            {upcomingEvents.map((event, index) => (
              <li key={index} className={styles.eventCard}>
                <span className={styles.eventDate}>{event.date}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Contact;
