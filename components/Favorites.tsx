'use client';
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import { useState, useEffect } from 'react';
import { useFavorites } from '@/app/layout';

export type FavoriteType = {
    id: string,
    title: string,
    thumbnail?: {
        path: string,
        extension: string
    },
    issueNumber: string,
    publishDate?: string
}

export default function Favorites() {
    const {favorites, setFavorites} = useFavorites();
    console.log("favorites list area", favorites);
    useEffect(() => {
        console.log("fav list area effect");
        
    }, [favorites]);
	return (
		<section id="Favorites" className={styles.favorites}>
			<h3 data-id = '2' className={styles.heading}>{`Favorites `}</h3>
			{ favorites.length > 0 && 
				favorites.map((comic) => {
					return (
						<div className={styles.item} key={comic.id}>
                            <div className={styles.thumbnail}>
                                <Image 
                                    className={styles.img}
                                    src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
                                    alt={comic.title}
                                    width={50}
                                    height={75}
                                />
                                <button 
                                    className={styles.remove}
                                    title="Remove Favorite"
                                    onClick={() => setFavorites(favorites.filter((val) => val.id !== comic.id)) }
                                >
                                    <i className={`${styles.buttonIcon} fas fa-times`}></i>
                                </button>
                            </div>
                            <div className={styles.favInfo}>
                                <div className={styles.title}>{comic.title}</div>
                                <div className={styles.label}>{`Issue: ${comic.issueNumber}`}</div>
                            </div>
                        </div>
					)
				})
			}
		</section>
	)


}
