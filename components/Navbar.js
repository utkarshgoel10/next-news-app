import Link from 'next/link';
import styles from '../styles/toolbar.module.css';

export default function Navbar() {
  return (
    <>
    <div className={styles.main}>
      <div><Link href='/'>Home</Link></div>
      <div><Link href='/feed/1'>Feed</Link></div>
      <div><Link href='/eom'>Instructor</Link></div>
      <div><Link href='https://twitter.com/'>Twitter</Link></div>
    </div>
    </>
  )
}

