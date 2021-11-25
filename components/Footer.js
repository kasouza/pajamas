import styles from '../styles/Footer.module.css'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>Icons made by <a href="https://www.flaticon.com/authors/kmg-design" title="kmg design">kmg design</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <address>
                <Link href="https://github.com/kasouza">
                    <a>&copy;kasouza</a>
                </Link>
            </address>
        </footer>
    )
}