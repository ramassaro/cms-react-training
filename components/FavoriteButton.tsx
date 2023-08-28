'use client';
import styles from '@/styles/Item.module.css'
import { useState } from 'react'

export default function FavoriteButton() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${isActive ? styles.favoriteButtonActive : ''} ${styles.favoriteButton}`}
            onClick={(e) => setIsActive(!isActive)}
        >
            <span><i className="fa fa-bolt"></i></span>
        </button>
    )
}