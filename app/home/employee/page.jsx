import { fectUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/component/pagination/pagination"
import Search from "@/app/ui/component/search/search"
import styles from "@/app/ui/dashboard/user/users.module.css"
import Image from "next/image"
import Link from "next/link"



const UserPage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fectUsers(q, page);


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
                        <td>Name</td>
                        <td>Email</td>
                        <td>User Name</td>
                        <td>Phone</td>
                        <td>Type User</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>

                            <td>
                                <div className={styles.user}>
                                    <Image alt="" className={styles.userImage} src={user.img || "/noavatar.png"} width={40} height={40} />
                                    {user.firstname + " " + user.lastname}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>Merchant</td>
                            <td>{user.isAdmin ? "Admin" : "Staff"}</td>
                            <td>{user.isActive ? "Active" : "Disabled"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="/home/employee/${user.id}">
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
};
export default UserPage;