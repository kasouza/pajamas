import styles from '../styles/Footer.module.css'

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>Icons made by <a href="https://www.flaticon.com/authors/kmg-design" title="kmg design">kmg design</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <a href="https://www.pexels.com/pt-br/@eileenlamb">Foto de Eileen lamb no Pexels</a>
            <a href="https://www.pexels.com/pt-br/@cottonbro">Foto de cottonbro no Pexels</a>
            <address>
                <a href="https://github.com/kasouza/pajamas">
                    <Image width={16} height={16} src="/images/GitHub-Mark-32px.png" />
                    <span>kasouza</span>
                </a>
            </address>
        </footer>
    )
}