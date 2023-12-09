import styles from "@/app/ui/dashboard/user/users.module.css"
import Search from "@/app/ui/component/search/search.module.css"
const users = () => {
    return (
        <div className="styiles.container">
            <div className={styles.top}>
                <Search placeholder="search usernya" />
            </div>
        </div>
    )
}

export default users