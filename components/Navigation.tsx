import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css'
import { useFavorites } from '@/app/layout';

export const Navigation = () => {
    const {favorites, setFavorites} = useFavorites();
    return (
        <section className={styles.navigationWrapper}>
            <div className={`${styles.navigation}`}>
                <Link href="/">
                <Image 
                    className={styles.logo}
                    src="/logo.png"
                    alt="Comic Closet Logo"
                    width={106}
                    height={106}
                />
                </Link>
                <div className={styles.links}>
                    <Link href="/#Favorites">
                        <i className="fas fa-bolt" aria-hidden></i> <span className={styles.linkName}>My Favorites</span> <span className={styles.count}>{`(${favorites.length})`}</span>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}