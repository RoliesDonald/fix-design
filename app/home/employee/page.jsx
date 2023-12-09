import Pagination from "@/app/ui/component/pagination/pagination"
import Search from "@/app/ui/component/search/search"
import styles from "@/app/ui/dashboard/user/users.module.css"
import Image from "next/image"
import Link from "next/link"

const UserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search Users" />
                <Link href="/home/employee/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>User Name</td>
                        <td>Type User</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>13</td>
                        <td>
                            <div className={styles.user}>
                                <Image alt="" className={styles.userImage} src="/noavatar.png" width={40} height={40} />
                                Rolies Donald
                            </div>
                        </td>
                        <td>rolies.donald@gmail.com</td>
                        <td>roliesdonald</td>
                        <td>Merchant</td>
                        <td>PIC</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/home/employee/iduser">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UserPage