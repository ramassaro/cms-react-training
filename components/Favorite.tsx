'use client';
import styles from '@/styles/Comic.module.css'
import { useState } from 'react'

export default function Favorite() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${isActive ? styles.favoriteActive : ''} ${styles.favorite}`}
            onClick={(e) => setIsActive(!isActive)}
        >
            <span><i class="fa fa-bolt"></i></span>
        </button>
    )
}