import Image from "next/image";
import styles from "./rightbar.module.css";


const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.notifText}>
                        Available Now
                    </span>
                    <h3 className={styles.title}>How To Use New dashboard?</h3>
                    <span className={styles.subTitle}>4 menit doang biar ngarti</span>
                    <p className={styles.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>
                    <button className={styles.button}> watch</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.notifText}>
                        Next Feature
                    </span>
                    <h3 className={styles.title}>How To Use New Feature?</h3>
                    <span className={styles.subTitle}>4 menit doang biar ngarti</span>
                    <p className={styles.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>
                    <button className={styles.button}> watch</button>
                </div>
            </div>
        </div>
    )
}

export default RightBar