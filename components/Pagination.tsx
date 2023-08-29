'use client';
import React, {useEffect } from 'react'
import styles from '../styles/Page.module.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination  ({ count, limit, offset, total }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const first = offset + 1;
    const last = offset + count;
    const paginationCount = `${first} - ${last} of ${total}`;
    const prevDisabled = offset - limit < 0 ? styles.disabled : '';
    const nextDisabled = offset + limit > total ? styles.disabled : '';

    return (
        <section className={styles.paginationWrapper}>
            <button 
                className={`${styles.button} ${styles.prev} ${prevDisabled}`}
                onClick={(e) => {
                    if (offset - limit < 0) { return; }
                    offset = (offset - limit);
                    const current = new URLSearchParams(Array.from(searchParams.entries())); 
                    current.set('offset', (offset).toString());
                    const search = current.toString();
                    const query = search ? `?${search}` : "";
                    router.push(`/${query}`, undefined, { shallow: true });
                }}
            >
                <i className={`${styles.icon} fas fa-angle-left`}></i>
            </button>

            <span className={styles.span}>{paginationCount}</span>

            <button 
                className={`${styles.button} ${styles.next} ${nextDisabled}`}
                onClick={(e) => {
                    if (offset + limit > total) { return }
                    offset = (offset + limit);
                    const current = new URLSearchParams(Array.from(searchParams.entries())); 
                    current.set('offset', (offset).toString());
                    const search = current.toString();
                    const query = search ? `?${search}` : "";
                    router.push(`/${query}`, undefined, { shallow: true });
                }}
            >
                <i className={`${styles.icon} fas fa-angle-right`}></i>
            </button>
        </section>
    )
}