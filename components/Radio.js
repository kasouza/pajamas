import styles from "../styles/Radio.module.css"

export default function Radio({ name, value, defaultChecked, onChange }) {
    return (
        <label className={styles.radio} htmlFor={value}>
            <span className={styles.label}>{value}</span>
            <input className={styles.input} id={value} onChange={() => onChange(value)} name={name} type="radio" value={value} defaultChecked={defaultChecked} />
            <span className={styles.checkmark} />

        </label>
    )
}