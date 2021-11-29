import styles from "../styles/Radio.module.css"

export default function Radio({ name, value, checked }) {
    return (
        <label className={styles.radio} htmlFor={value}>
            <span className={styles.label}>{value}</span>
            <input className={styles.input} id={value} name={name} type="radio" value={value} checked={checked} />
            <span className={styles.checkmark} />

        </label>
    )
}