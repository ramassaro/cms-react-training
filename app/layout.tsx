import styles from '@/styles/Page.module.css';
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
			<body>
				<header className={styles.header}>
					<h1>Final</h1>
				</header>
				{children}
				<header className={styles.footer}>
					<span>footer</span>
				</header>
			</body>
		</html>
	)
}
