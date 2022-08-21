import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="page-container">
      <Navbar />

      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <style jsx>
          {`
            h3{
              text-align: center;
            }
          `}
        </style>
        <h3>This is a news aggregator service application developed in Next.js</h3>
        <Image className="imghover"src="https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" width={250} height={300}/>
      </div>
          
    </div>
  );
}