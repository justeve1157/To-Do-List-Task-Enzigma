import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headline}>
        <h1>To Do List</h1>
        <h3>See your goals clearly, Achieve them easily!</h3>
      </div>
      <div className={styles.links}>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
        <Link href="/login">
          <button>LogIn</button>
        </Link>
      </div>
    </main>
  );
}
