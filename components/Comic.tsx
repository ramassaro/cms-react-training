import Image from 'next/image'
import Info from '@/components/Info'
import Favorite from '@/components/Favorite'
import styles from '@/styles/Comic.module.css'
import moment from 'moment/moment'

export default function Comic({ comic }) {
    return (
        <div className={styles.comic}>
            <Image 
                src={comic.thumbnail}
                alt={comic.title}
                width={400}
                height={600}
            />
 
            <div className={styles.info}>
                <Favorite />
                <div className={styles.infoInner}>
                    <h3 className={styles.title}>{comic.title}</h3>
                    <Info issue={comic.issueNumber} publishDate={moment(comic.publishDate).format('LL')} creators={comic.creators}/>
                </div>
            </div>
        </div>
    )
}