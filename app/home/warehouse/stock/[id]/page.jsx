import styles from "@/app/ui/dashboard/user/detailUser/detailUser.module.css"
import Image from "next/image"

const DetailPartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoListContainer}>
                <div className={styles.imgContainer}>
                    <Image alt="" src="/noavatar.png" fill />
                </div>
                Rolies Donald
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>

                    <label>Username</label>
                    <input type="text" name="username" placeholder="Rolies Donald" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="donald@mail.cc" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="+62 8698 ....." />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="...." />
                    <label>Is Admin ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active ?</label>
                    <select name="isActive" id="isActive">
                        <option value={false}>Yes</option>
                        <option value={true}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default DetailPartPage