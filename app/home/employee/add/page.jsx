import { addUser } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/user/add/AddNewUserPage.module.css';
const AddNewUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="firstname" name="firstname" required />
                <input type="text" placeholder="lastname" name="lastname" required />
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <input type="id" placeholder="id" name="id" />
                <div className={styles.selectSmall}> <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin ?</option>
                    <option value={false}>Yes</option>
                    <option value={true}>No</option>
                </select>
                    <select name="isActive" id="isActive">
                        <option value={true} >Is Active ?</option>
                        <option value={false}>Yes</option>
                        <option value={true}>No</option>
                    </select></div>
                <textarea
                    name="address"
                    id="address"
                    rows="10"
                    placeholder="Address">
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewUserPage;