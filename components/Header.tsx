import Image from 'next/image'
import styles from '@/styles/Layout.module.css';

export default function Header({ src, alt, title }) {
    return (
        <header className={styles.header}>
            // nav 
            <section className={styles.slideshow} >
                <Image  src='/hero-photo.png' alt='Comic Closet' width={1440} height={650} />
                <div className={styles.halftone}></div>
                <div className={styles.title}> Comic Closet</div>
            </section>
        </header>
    )
}
