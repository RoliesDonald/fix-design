import styles from '@/app/ui/dashboard/user/add/AddNewUserPage.module.css'
const AddNewUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='username' name='username' required />
                <input type="email" placeholder='email' name='email' required />
                <input type="password" placeholder='password' name='password' required />
                <input type="phone" placeholder='phone' name='phone' required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin ?</option>
                    <option value={false}>Yes</option>
                    <option value={true}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true} selected>Is Active ?</option>
                    <option value={false}>Yes</option>
                    <option value={true}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="10"
                    placeholder='Address'>
                </textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddNewUserPage