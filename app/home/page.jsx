import Card from "../ui/component/card/card"
import Chart from "../ui/component/chart/chart"
import RightBar from "../ui/component/rightbar/rightbar"
import styles from "../ui/dashboard/dashboard.module.css"
import Transactions from "../ui/dashboard/transactions/transaction"




const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.rightSide}>
                <RightBar />
            </div>
        </div>
    )
}

export default Dashboard