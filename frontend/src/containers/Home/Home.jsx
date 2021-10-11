import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import { ExpandLess } from '@mui/icons-material';
import Banner from '../../components/Banner/Banner';
import Devices from '../Devices/Devices';

export default function Home() {
	const scrollToPageTop = useRef();
	const handleScroll = () => {
		if (window.scrollY >= 800) {
			scrollToPageTop.current.style.width = '60px';
			scrollToPageTop.current.style.height = '60px';
		} else {
			scrollToPageTop.current.style.width = '0px';
			scrollToPageTop.current.style.height = '0px';
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div>
			<div className={styles.mainHeading}>
				<h1>Play the latest Games</h1>
				<h3>Book a PC Now.</h3>
			</div>
			<Banner />
			<span id={styles.homeDashboardHeading}>Dashboard</span>
			<Devices />
			<div
				ref={scrollToPageTop}
				id={styles.scrollToPageTop}
				onClick={() => window.scrollTo(0, 0)}
			>
				<ExpandLess style={{ fontSize: 30, color: '#fff' }} />
			</div>
		</div>
	);
}
