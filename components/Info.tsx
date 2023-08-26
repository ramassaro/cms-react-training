import styles from '@/styles/Comic.module.css'
export default function Info({ issue, publishDate, creators }) {
    return (
        <div>
            <ul className={styles.infoDetail}>
                <li>
                    <span className={styles.label}>Issue:</span> {issue}
                </li>
                <li>
                    <span className={styles.label}>Published:</span> {publishDate}
                </li>
                <li>
                    <span className={styles.label}>Creators:</span> {creators.map((creator) => creator.name).join(', ')}
                </li>
            </ul>
        </div>
    )
}