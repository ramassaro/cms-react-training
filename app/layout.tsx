'use client';
import styles from '@/styles/Layout.module.css';
import Header from '@/components/Header';
import Favorites from '@/components/Favorites';
import {FavoriteType} from '@/components/Favorites';
import React, { useState, useEffect, createContext, useContext } from 'react'

export const metadata = {title: 'Final',	description: 'Wicked Good Fun with Comics!'}

export interface FavoriteProps {
	favorites?: FavoriteType[],
	setFavorites: (favorites:FavoriteType[]) => void
  }
  
export const FavoritesContext = createContext<FavoriteProps>(null);
export const useFavorites = () => useContext(FavoritesContext);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [favorites, setFavorites] = useState<FavoriteType[]>([]);
	const FavoriteValue : FavoriteProps = { favorites, setFavorites };

	useEffect(() => {
		const localStorageFavorites = localStorage.getItem('favorites');
		if (localStorageFavorites && localStorageFavorites.length > 0) { setFavorites(JSON.parse(localStorageFavorites)); }
	}, []);

	return (
		<html lang="en">
			<head>
				<script src="https://kit.fontawesome.com/cab80c4382.js" crossOrigin="anonymous"></script>
				<link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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
				<FavoritesContext.Provider value={FavoriteValue}>
					<section className={styles.content}>
						{children}
						<Favorites/>
					</section>
				</FavoritesContext.Provider>
				<footer className={styles.footer}>
					<span>footer</span>
				</footer>
			</body>
		</html>
	)
}
