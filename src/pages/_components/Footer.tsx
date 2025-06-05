import type {Path} from '../../router';
import {Link} from '../../router';
import {getSiteTitle} from '../../utils/siteTitle';
import TextReveal from './TextReveal';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import styles from './footer.module.css';

import bean from '../../assets/bean01.svg';

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

	// Use only allowed route string literals for the path property
	const menuItems: {label: string; path: Path}[] = [
		{label: 'Coffees', path: '/menu'},
		{label: 'Cold Drinks', path: '/menu'},
		{label: 'Food', path: '/menu/food/cookies'},
	];

	const infosItems: {label: string; path: Path}[] = [
		{label: 'About', path: '/about'},
		{label: 'Merch', path: '/merch'},
		{label: 'Events', path: '/events'},
		{label: 'Contact', path: '/contact'},
	];

	return (
		<footer className={styles['site-footer']}>
			<section className={styles['footer-content']}>
				<article className={styles['contact-infos']}>
					<TextReveal as="h1" delay={0.2}>Contact</TextReveal>
					<div>
						<TextReveal as="address" delay={0.4}>
							{contactInfo.address.street}
							<br />
							{contactInfo.address.zip} {contactInfo.address.city}
							<br />
							{contactInfo.address.country}
						</TextReveal>
						<TextReveal as="p" delay={0.5}>
							<a
								href={`mailto:${contactInfo.email}`}
								className={styles['email']}
							>
								{contactInfo.email}
							</a>
						</TextReveal>
					</div>
				</article>
				<div className={styles['get-coffee']}>
					<TextReveal as="h1" className={styles['title']} delay={0.3}>Get Some Coffee</TextReveal>
					<TextReveal as="ul" className={styles['menu_items']} delay={0.5}>
						{menuItems.map((item, index) => (
							<li key={`${item.path}-${index}`} className={styles['menu_item']}>
								<Link to={item.path}>{item.label}</Link>
							</li>
						))}
					</TextReveal>
				</div>
				<article className={styles['infos']}>
					<TextReveal as="h1" delay={0.4}>Infos</TextReveal>
					<TextReveal as="ul" className={styles['infos-list']} delay={0.6}>
						{infosItems.map((item, index) => (
							<li key={`${item.path}-${index}`}>
								<Link to={item.path} className={styles['info-item']}>
									{item.label}
								</Link>
							</li>
						))}
					</TextReveal>
				</article>
			</section>
			<section className={styles['footer-legal']}>
				<h1 className={styles['title']}>
					{getSiteTitle()}
				</h1>
				<div>
					<p className={styles['copyright']}>
						&copy; Copyright {currentYear}. All rights reserved.
					</p>
					<div className={styles['made']}>
						<span className={styles['made-with']}>
							Made with ☕️ and 🤎
						</span>
						<span className={styles['made-by']}>
							by <b>Kaiji</b> x <b>Sirius</b>
						</span>
					</div>
				</div>
			</section>
			<div className={styles['bean']}>
				<img src={bean} alt="Coffee bean" className={styles['bean-image']} />
			</div>
		</footer>
	);
}

export default Footer;
