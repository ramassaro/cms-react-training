'use client';
import styles from '@/styles/Item.module.css'
import { useState, useEffect } from 'react';
import {FavoriteType} from '@/components/Favorites';
import { useFavorites } from '@/app/layout';

export default function FavoriteButton({data}) {
    const {favorites, setFavorites} = useFavorites();
    const [isActive, setIsActive] = useState(false);
    const favData:FavoriteType[] = data;
   
   useEffect(() => {
        var isActive = favorites.map(val => val.id).includes(favData.id);
        setIsActive(isActive);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])


    const favoritesHandler = () => {
        if (favorites.length < 10) {
            var inFavs = favorites.map(val => val.id).includes(favData.id);
            if (inFavs) {
                console.log('remove')
                const newList = favorites.filter((val) => val.id !== favData.id);
                setFavorites(newList)
                
            } else {
                console.log('add')
                setFavorites([...favorites, favData]);
            }
        }
    }    
    

    return (
        <button
            data-id = {favData.id}
            className={`${isActive ? styles.favoriteButtonActive : ''} ${styles.favoriteButton}`}
            onClick={(e) => {
                setIsActive(!isActive);
                favoritesHandler();
            }}
        >
            <span><i className="fa fa-bolt"></i></span>
        </button>
    )
}