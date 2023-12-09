"use client"

import { usePathname } from "next/navigation"
import styles from "./navbar.module.css"
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";
import DropdownMenu from "../dropdown/dropdown";


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search......" className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat className={styles.iconsBtn} size={20} />
                    <MdNotifications className={styles.iconsBtn} size={20} />
                    <MdPublic className={styles.iconsBtn} size={20} />
                </div>
                <div className={styles.accountBtn}>
                    <DropdownMenu />
                </div>


            </div>
        </div>
    )
}

export default Navbar