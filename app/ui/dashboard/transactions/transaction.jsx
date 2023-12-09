import Image from "next/image";
import styles from "./transaction.module.css";

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    alt=""
                                    src="/noavatar.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Tukang Siomay
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>10-Nov-2023</td>
                        <td>Rp. 20.000</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    alt=""
                                    src="/noavatar.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Tukang Siomay
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>10-Nov-2023</td>
                        <td>Rp. 20.000</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    alt=""
                                    src="/noavatar.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Tukang Siomay
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${styles.cancelled}`}>Cancel</span></td>
                        <td>10-Nov-2023</td>
                        <td>Rp. 1.850.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions