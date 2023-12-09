"use client"

import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css'
import {
    MdDashboard,
    MdShoppingBag,
    MdAttachMoney,
    MdPeople,
    MdOutlineSettings,
} from "react-icons/md";




const menuItems = [
    {
        title: "Dashboard",
        list: [
            {
                title: "Dashboard",
                path: "/home",
                icon: <MdDashboard />,
            },
        ]
    },
    {
        title: "Warehouse",
        list: [
            {
                title: "Persediaan",
                path: "/home/warehouse/stock",
                icon: <MdShoppingBag />,
            },
            {
                title: "Pembelian",
                path: "/home/warehouse/purchase",
                icon: <MdShoppingBag />,
            },
            {
                title: "Penjualan",
                path: "/home/warehouse/sale",
                icon: <MdShoppingBag />,
            },
            {
                title: "Aset Tetap",
                path: "/home/warehouse/assets",
                icon: <MdShoppingBag />,
            },
            {
                title: "Laporan",
                path: "/home/warehouse/report",
                icon: <MdShoppingBag />,
            },
        ]
    },
    {
        title: "Administration",
        list: [
            {
                title: "Request for Quotation",
                path: "/home/administration/rfq",
                icon: <MdAttachMoney />,
            },
            {
                title: "Quotation",
                path: "/home/administration/quotation",
                icon: <MdAttachMoney />,
            },
            {
                title: "Invoice",
                path: "/home/administration/invoice",
                icon: <MdAttachMoney />,
            },
            {
                title: "Order",
                path: "/home/administration/order",
                icon: <MdAttachMoney />,
            },
            {
                title: "Buku Besar",
                path: "/home/administration/ledger",
                icon: <MdAttachMoney />,
            },
            {
                title: "Kas Bank",
                path: "/home/administration/cash",
                icon: <MdAttachMoney />,
            },
        ]
    },
    {
        title: "Employee",
        list: [
            {
                title: "Your Staff",
                path: "/home/employee",
                icon: <MdPeople />,
            },
        ]
    },
    {
        title: "Settings",
        list: [
            {
                title: "Profile",
                path: "/home/settings/profile",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Company",
                path: "/home/settings/company",
                icon: <MdOutlineSettings />,
            },

        ]
    },
]



const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.companyLogo} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.companyName}>Gemilang Abadi Sashana</span>
                    <span className={styles.userName}>Manager</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((category) => (
                    <li key={category.title}>
                        <div className={styles.incontainer}> <span className={styles.category}>{category.title}</span></div>
                        {category.list.map((item) => (<MenuLink item={item} key={item.title} />))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;