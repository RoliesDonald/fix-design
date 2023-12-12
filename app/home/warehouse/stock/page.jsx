import { fectParts } from "@/app/lib/data"
import Pagination from "@/app/ui/component/pagination/pagination"
import Search from "@/app/ui/component/search/search"
import styles from "@/app/ui/dashboard/warehouse/warehouse.module.css"
import Link from "next/link"



const StockPage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, part } = await fectParts(q, page);

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
                    {part.map(parts => (
                        <tr key={parts.id}>
                            <td>
                                {parts.partName}
                            </td>
                            <td>{parts.partNum}</td>
                            <td>{parts.stockPart}</td>
                            <td>{parts.minStock}</td>
                            <td>{parts.unit}</td>
                            <td>{parts.salePrice}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/home/warehouse/stock/${parts._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>Detail</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.tambah}`}>Tambah</button>
                                    <button className={`${styles.button} ${styles.delete}`}>Hapus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default StockPage