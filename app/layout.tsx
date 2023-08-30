import styles from '@/styles/Layout.module.css';
import Header from '@/components/Header';

export const metadata = {
	title: 'Exercise 4',
	description: 'Your First Test',
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<script src="https://kit.fontawesome.com/cab80c4382.js" crossOrigin="anonymous"></script>
			</head>
			<body className={styles.app}>
				<Header  
					src="/hero-photo.png"
					alt="Header Image of Multiple Comic Books"
					title="Comic Closet"
				/>
				<section className={styles.intro}>
					<h2 className={styles.introTitle}>Coming Out Daily</h2>
					<span className={styles.introSubtitle}>New Comics!</span> 
					<p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				</section>
				<section className={styles.content}>
					{children}
				</section>
				<footer className={styles.footer}>
					<span>footer</span>
				</footer>
			</body>
		</html>
	)
}
