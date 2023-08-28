'use client';
import useSWR from 'swr';
import styles from '@/styles/Page.module.css';
import  Item from '@/components/Item';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const address = '/api';
	const { data, error, isLoading } = useSWR(address, fetcher);
	if (error) return <div className={styles.status}>Failed to load </div>
	if (isLoading) return <div className={styles.status}>Loading...</div>
	if (!data) return null

	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h1>Exercise 4</h1>
			</div>

			<ul className={styles.grid}>
				{ data.map((item) => (
					<Item 
						key={item.id} 
						data={item} 
					/> 
				)) }
			</ul>
		</main>
	)
}
