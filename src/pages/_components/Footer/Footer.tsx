import type { Path } from '../../../router';
import { Link } from '../../../router';
import { AnimatedTextReveal } from '../AnimatedTextReveal';
import React from 'react';

import styles from './footer.module.css';

import bean from '../../../assets/bean01.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    email: 'hi@latitudecoffee.com',
    address: {
      street: '1 St. Champs Elysées',
      zip: '75000',
      city: 'Paris',
      country: 'France',
    },
  };

  const menuItems: { label: string; path: Path }[] = [
    { label: 'Coffees', path: '/menu/coffees' },
    { label: 'Cold Drinks', path: '/menu' },
    { label: 'Food', path: '/menu/food/cookies' },
  ];

  const infosItems: { label: string; path: Path }[] = [
    { label: 'About', path: '/about' },
    { label: 'Merch', path: '/merch' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className={styles['site-footer']}>
      <section className={styles['footer-content']}>
        <article className={styles['contact-infos']}>
          <AnimatedTextReveal as="h1" delay={0.2}>
            Contact
          </AnimatedTextReveal>
          <div>
            <AnimatedTextReveal as="address" delay={0.4}>
              {contactInfo.address.street}
              <br />
              {contactInfo.address.zip} {contactInfo.address.city}
              <br />
              {contactInfo.address.country}
            </AnimatedTextReveal>
            <AnimatedTextReveal as="p" delay={0.5}>
              <a
                href={`mailto:${contactInfo.email}`}
                className={styles['email']}
              >
                {contactInfo.email}
              </a>
            </AnimatedTextReveal>
          </div>
        </article>
        <div className={styles['get-coffee']}>
          <AnimatedTextReveal as="h1" className={styles['title']} delay={0.3}>
            Get Some Coffee
          </AnimatedTextReveal>
          <div className={styles['menu_items']}>
            {menuItems.map((item, index) => (
              <React.Fragment key={`${item.path}-${index}`}>
                <AnimatedTextReveal
                  as="div"
                  className={styles['menu_item']}
                  delay={0.5 + index * 0.1}
                >
                  <Link to={item.path}>{item.label}</Link>
                </AnimatedTextReveal>
                {index < menuItems.length - 1 && (
                  <AnimatedTextReveal
                    as="div"
                    className={styles['menu_separator']}
                    delay={0.6 + index * 0.1}
                  >
                    <span className={styles['dot']}></span>
                  </AnimatedTextReveal>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <article className={styles['infos']}>
          <AnimatedTextReveal as="h1" delay={0.4}>
            Infos
          </AnimatedTextReveal>
          <AnimatedTextReveal
            as="ul"
            className={styles['infos-list']}
            delay={0.6}
          >
            {infosItems.map((item, index) => (
              <li key={`${item.path}-${index}`}>
                <Link to={item.path} className={styles['info-item']}>
                  {item.label}
                </Link>
              </li>
            ))}
          </AnimatedTextReveal>
        </article>
      </section>
      <section className={styles['footer-legal']}>
        <h1 className={styles['title']}>LATITUDE48</h1>
        <div>
          <p className={styles['copy']}>
            © Copyright {currentYear}. All rights reserved.
          </p>
          <p className={styles['made']}>
            <span className={styles['made-with']}>Made with ☕️ and 🤎️</span>{' '}
            <span className={styles['made-by']}>by Kaiji x Sirius</span>
          </p>
        </div>
      </section>
      <div className={styles['bean']}>
        <img src={bean} alt="Coffee bean" className={styles['bean-image']} />
      </div>
    </footer>
  );
}

export default Footer;
