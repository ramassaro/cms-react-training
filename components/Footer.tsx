import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Layout.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerLogo} >
                <Link href="/">
                    <Image 
                        className={styles.logo}
                        src="/logo.png"
                        alt="Comic Closet Logo"
                        width={106}
                        height={106}
                    />
                </Link>
            </section>
            <section className={styles.footerLinks} >
            </section>
            <section className={styles.footerCopy} >
                <span>Copyright 2022. Comic Closet, LLC. All rights reserved.</span>
            </section>
        </footer>
    )
}
