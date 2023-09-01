import Image from 'next/image'
import FavoriteButton from '@/components/FavoriteButton'
import styles from '@/styles/Item.module.css'
import moment from 'moment/moment'

export default function Item({ data }) {
    return (
        <div className={styles.item}>
            <Image 
                crossOrigin="anonymous"
                src={data.thumbnail.path+'.'+data.thumbnail.extension}
                alt={data.title}
                width={183}
                height={276}
            />
 
            <div className={styles.info}>
                <FavoriteButton data={data} />
                <div className={styles.infoInner}>
                    <h3 className={styles.title} data-testid="title">{data.title}</h3>
                    <div>
                        <ul className={styles.infoDetail}>
                            <li><span className={styles.label} data-testid="issue">Issue:</span> {data.issueNumber}</li>
                            <li><span className={styles.label} data-testid="published">Published:</span> {moment(data.publishDate).format('LL')}</li>
                            <li><span className={styles.label} data-testid="creators">Creators:</span> {data?.creators?.items.length ? data.creators.items.slice(0,3).map((creator) => creator.name).join(', ') : ""}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}