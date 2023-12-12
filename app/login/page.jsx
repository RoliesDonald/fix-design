import styles from "@/app/ui/login/login.module.css"
import Link from "next/link"
const LoginPage = () => {
    return (<div className={styles.container}>
        <form action="" className={styles.form}>
            <h3>Selamat Datang di </h3>
            <h2>Power Apps Bung Mekanik</h2>
            <input type="text" placeholder="username or email" />
            <input type="password" placeholder="password" />
            <Link href='/home'>
                <button >LOGIN</button>
            </Link>
        </form>
    </div>)
}

export default LoginPage