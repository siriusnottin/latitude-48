import { Helmet } from 'react-helmet';
import { getPageTitle } from '../utils/pageTitle';
import { AnimatedTextReveal } from './_components/AnimatedTextReveal';
import styles from '../styles/events.module.css';

import heroImage from '../assets/images/_DSC2978.webp?width=1920';
import eventImage1 from '../assets/images/_DSC3076.webp?width=800';
import eventImage2 from '../assets/images/_DSC2914.webp?width=800';
import eventImage3 from '../assets/images/_DSC2808.webp?width=800';
import atmosphereImage1 from '../assets/images/_DSC2868.webp?width=600';
import atmosphereImage2 from '../assets/images/_DSC3189.webp?width=600';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Coffee Tasting Experience',
      date: 'March 15, 2024',
      time: '6:00 PM - 8:00 PM',
      description: 'Join us for an exclusive coffee tasting session featuring our finest single-origin beans. Learn about different roasting techniques and brewing methods.',
      image: eventImage1,
      price: '$45',
      spots: '12 spots available'
    },
    {
      title: 'Barista Workshop',
      date: 'April 20, 2024',
      time: '2:00 PM - 5:00 PM',
      description: 'Master the art of coffee making with our expert baristas. Perfect your latte art and learn professional brewing techniques.',
      image: eventImage2,
      price: '$75',
      spots: '8 spots available'
    },
    {
      title: 'Live Music & Coffee Night',
      date: 'May 5, 2024',
      time: '7:00 PM - 10:00 PM',
      description: 'Enjoy an evening of acoustic performances while sipping on your favorite coffee blend. Special menu items available.',
      image: eventImage3,
      price: '$25',
      spots: '30 spots available'
    }
  ];

  const regularEvents = [
    {
      title: 'Open Mic Nights',
      schedule: 'Every Thursday',
      time: '7:00 PM - 9:00 PM',
      description: 'Share your talent with our welcoming community. Poetry, music, and spoken word welcome.',
      image: atmosphereImage1
    },
    {
      title: 'Coffee & Conversations',
      schedule: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      description: 'Join our weekly discussion group covering topics from coffee culture to current events.',
      image: atmosphereImage2
    }
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Events')}</title>
      </Helmet>
      <main className={styles.eventsContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroImage}>
            <img src={heroImage} alt="Latitude 48 events space" />
          </div>
          <AnimatedTextReveal as="h1" scrollTrigger={false} className={styles.title}>
            Upcoming Events
          </AnimatedTextReveal>
          <AnimatedTextReveal as="p" scrollTrigger={false} className={styles.subtitle}>
            Join us for special events, workshops, and community gatherings
          </AnimatedTextReveal>
        </section>

        <section className={styles.featuredEvents}>
          <h2>Special Events</h2>
          <div className={styles.eventGrid}>
            {upcomingEvents.map((event, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventImage}>
                  <img src={event.image} alt={event.title} />
                </div>
                <div className={styles.eventContent}>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventDate}>{event.date}</span>
                    <span className={styles.eventTime}>{event.time}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className={styles.eventDetails}>
                    <span className={styles.eventPrice}>{event.price}</span>
                    <span className={styles.eventSpots}>{event.spots}</span>
                  </div>
                  <button className={styles.registerButton}>Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.regularEvents}>
          <h2>Regular Events</h2>
          <div className={styles.regularEventGrid}>
            {regularEvents.map((event, index) => (
              <div key={index} className={styles.regularEventCard}>
                <div className={styles.regularEventImage}>
                  <img src={event.image} alt={event.title} />
                </div>
                <div className={styles.regularEventContent}>
                  <h3>{event.title}</h3>
                  <div className={styles.regularEventSchedule}>
                    <span>{event.schedule}</span>
                    <span>{event.time}</span>
                  </div>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.callToAction}>
          <h2>Host Your Event</h2>
          <p>Looking for a unique venue? Our space is available for private events and gatherings.</p>
          
          <form className={styles.hostingForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="eventType">Event Type</label>
                <input className={styles.input} type="text" id="eventType" placeholder="Corporate, Wedding, Birthday..." />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="guestCount">Expected Guests</label>
                <input className={styles.input} type="number" id="guestCount" placeholder="Number of guests" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="eventDate">Preferred Date</label>
                <input className={styles.input} type="date" id="eventDate" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="budget">Budget Range</label>
                <select className={styles.input} id="budget">
                  <option value="">Select a range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000+">$2,000+</option>
                </select>
              </div>
              <div className={styles.inputGroup + ' ' + styles.fullWidth}>
                <label className={styles.label} htmlFor="message">Tell us about your event</label>
                <textarea 
                  className={styles.textarea} 
                  id="message" 
                  placeholder="Share your vision and requirements..."
                  rows={4}
                />
              </div>
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Send Inquiry
              </button>
              <span className={styles.formNote}>
                We'll get back to you within 24 hours
              </span>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Events;
