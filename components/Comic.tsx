import Image from 'next/image'

import Favorite from '@/components/Favorite'
import styles from '@/styles/Comic.module.css'
import moment from 'moment/moment'

export default function Comic({ comic }) {
    return (
        <div className={styles.comic}>
            <Image 
                src={comic.thumbnail.path+'.'+comic.thumbnail.extension}
                alt={comic.title}
                width={400}
                height={600}
            />
 
            <div className={styles.info}>
                <Favorite />
                <div className={styles.infoInner}>
                    <h3 className={styles.title}>{comic.title}</h3>
           
                    <div>
                        <ul className={styles.infoDetail}>
                            <li>
                                <span className={styles.label}>Issue:</span> {comic.issueNumber}
                            </li>
                            <li>
                                <span className={styles.label}>Published:</span> {moment(comic.publishDate).format('LL')}
                            </li>
                            <li>
                                <span className={styles.label}>Creators:</span> {comic?.creators?.items.length ? comic.creators.items.slice(0,3).map((creator) => creator.name).join(', ') : ""}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}