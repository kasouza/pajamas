import styles from '../styles/Footer.module.css'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <address>
                <Link href="https://github.com/kasouza">
                    <a>&copy;kasouza</a>
                </Link>
            </address>
        </footer>
    )
}