'use client';
import useSWR from 'swr';
import {useSearchParams} from "next/navigation";
import styles from '@/styles/Page.module.css';
import Item from '@/components/Item';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	
	const searchParams = useSearchParams();
	const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
	const characters = current.get("characters");
	const creators = current.get("creators");
   	const search = current.toString();

	const address = `/api?${search}`;
	const { data, error, isLoading } = useSWR(address, fetcher);
	if (error) return <div className={styles.failedStatus}>Failed to load </div>
	if (isLoading) return <div className={styles.loadingStatus}></div>
	if (!data) return null;

	const { count, limit, offset, results, total } = data;

	return (
		<main className={styles.main}>
			<Filters characters={characters} creators={creators}/>
			<ul className={styles.grid}>
				{ data.results.map((item) => (
					<Item 
						key={item.id} 
						data={item} 
					/> 
				)) }
			</ul>
			<Pagination count={count} limit={limit} offset={offset} total={total}/>
		</main>
	)
}
