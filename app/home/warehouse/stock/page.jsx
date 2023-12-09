import Pagination from "@/app/ui/component/pagination/pagination"
import Search from "@/app/ui/component/search/search"
import styles from "@/app/ui/dashboard/warehouse/warehouse.module.css"
import Link from "next/link"

const StockPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search Users" />
                <Link href="/home/warehouse/stock/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nama Barang</td>
                        <td>Kode Barang</td>
                        <td>Stok</td>
                        <td>Min Stok</td>
                        <td>Satuan</td>
                        <td>Harga Jual</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>13</td>
                        <td>
                            Filter Solar
                        </td>
                        <td>ME013307</td>
                        <td>150</td>
                        <td>15</td>
                        <td>pcs</td>
                        <td>115.000</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>Detail</button>
                                </Link>
                                <button className={`${styles.button} ${styles.tambah}`}>Tambah</button>
                                <button className={`${styles.button} ${styles.delete}`}>Hapus</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default StockPage