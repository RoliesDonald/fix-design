import Navbar from "../ui/component/navbar/navbar"
import Sidebar from "../ui/component/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/component/footer/footer"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout