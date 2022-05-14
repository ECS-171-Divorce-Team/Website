import styles from './styles/MemberDesc.module.css'
import Image from 'next/image'

export default function MemberDesc ({ name, desc, profileURL }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image src={profileURL} layout='fill' />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}