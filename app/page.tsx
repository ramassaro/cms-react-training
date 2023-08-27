'use client';
import useSWR from 'swr'
import styles from '@/styles/Page.module.css'
import  Comic from '@/components/Comic'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
	const address = '/api';
	const { data, error, isLoading } = useSWR(address, fetcher);

	if (error) return <div>Failed to load </div>
	if (isLoading) return <div>Loading...</div>
	if (!data) return null

	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h1>Exercise 2</h1>
			</div>

			<ul className={styles.grid}>
				{ data.map((comic) => (
					<Comic 
						key={comic.id} 
						comic={comic} 
					/> 
				)) }
			</ul>
		</main>
	)
}
