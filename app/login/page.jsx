import styles from "@/app/ui/login/login.module.css"
const LoginPage = () => {
    return (<div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="username or email" />
            <input type="password" placeholder="password" />
            <button>LOGIN</button>
        </form>
    </div>)
}

export default LoginPage