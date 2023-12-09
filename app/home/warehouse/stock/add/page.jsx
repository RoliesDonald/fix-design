import styles from '@/app/ui/dashboard/warehouse/addProduct/addProduct.module.css'
const AddNewProductPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='title' name='title' required />
                <select name="category" id="category">
                    <option value="default">Choose a Category</option>
                    <option value="oils">Oils</option>
                    <option value="filter">Filters</option>
                    <option value="brakesytem">Brake System</option>
                </select>
                <input type="number" placeholder='Price' name='price' />
                <input type="text" placeholder='Part No' name='part_no' />
                <input type="number" placeholder='Stock' name='stock' />
                <input type="text" placeholder='Color' name='color' />
                <textarea
                    name="desc"
                    id="desc"
                    rows="10"
                    placeholder='Descriptions'>
                </textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddNewProductPage