import { useState } from "react"
import styles from './dropdown.module.css'

export const DropdownActions = ({ menu, defaultDisplayName }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={handleOpen}>
                <div className={styles.dropdownText}>
                    <div>{defaultDisplayName}</div>
                    <div
                        className="material-icons"
                        style={{
                            transform: `rotate(x${open ? 180 : 0}deg)`,
                            transition: "all 0.25s",
                        }}
                    >

                    </div>
                </div>
            </button>
            {open ? (
                <ul className={styles.menu}>
                    {menu.map((menuItem, index) => (
                        <li key={index} className={styles.menuItem}>
                            <button
                                onClick={() => {
                                    handleOpen();
                                    menuItem();
                                }}
                            >
                                Menu {index}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

