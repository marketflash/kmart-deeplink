import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Test Deeplink K-Mart</h1>
      <div className={styles.button}>
        <Link href={'kmart://product/245'}>Test Produk</Link>
      </div>
    </div>
  )
}
