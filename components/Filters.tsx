'use client';
import React, {useEffect } from 'react'
import styles from '../styles/Page.module.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters  ({ characters, creators }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    return (
        <section className={styles.filtersWrapper}>
            <span className={styles.filtersLabel}>Filter By:</span>
            <div className={styles.filters}>
                <select className={styles.filtersSelect}
                    value={characters}
                    onChange={(e) => {
                        const current = new URLSearchParams(Array.from(searchParams.entries())); 
                        current.set('characters', e.target.value);
                        current.set('offset', '0');
                        const search = current.toString();
                        const query = search ? `?${search}` : "";
                        router.push(`/${query}`, undefined, { shallow: true });
                    }}
                >
                    <option value="">Character</option>
                    <option value="1009368">Iron Man</option>
                    <option value="1009220">Captain America</option>
                    <option value="1009664">Thor</option>
                    <option value="1009610">Spider Man</option>
                    <option value="1009268">Deadpool</option>
                    <option value="1009562">Scarlet Witch</option>
                    <option value="1009189">Black Widow</option>
                    <option value="1009707">Wasp</option>
                    <option value="1010763">Gamora</option>
                    <option value="1009384">Kang</option>
                    <option value="1009262">Daredevil</option>
                    <option value="1009313">Gambit</option>
                    <option value="1009180">Beta-Ray Bill</option>
                    <option value="1010744">Rocket Raccoon</option>
                    <option value="1010743">Groot</option>
                </select>
            </div>
            <div className={styles.filters}>
                <select className={styles.filtersSelect}
                    value={creators}
                    onChange={(e) => {
                        const current = new URLSearchParams(Array.from(searchParams.entries())); 
                        current.set('creators', e.target.value);
                        current.set('offset', '0');
                        const search = current.toString();
                        const query = search ? `?${search}` : "";
                        router.push(`/${query}`, undefined, { shallow: true });
                    }}
                >
                    <option value="">Creator</option>
                    <option value="12787">Kate Leth</option>
                    <option value="24">Brian Michael Bendis</option>
                    <option value="30">Stan Lee</option>
                    <option value="32">Steve Ditko</option>
                    <option value="196">Jack Kirby</option>

                </select>
            </div>
        </section>
    )
}
