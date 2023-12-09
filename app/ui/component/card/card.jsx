import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';
const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.text}>
                <span className={styles.title}>Total User</span>
                <span className={styles.number}>10.234</span>
                <span className={styles.detail}><span className={styles.negative}>12%</span> more than last week</span>
            </div>
        </div>
    )
}

export default Card