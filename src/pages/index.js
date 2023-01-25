import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum
        repellendus sapiente asperiores ab fuga earum veniam quae. Saepe
        recusandae dolor error vel totam aliquam tempora tenetur commodi modi
        repellat!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum
        repellendus sapiente asperiores ab fuga earum veniam quae. Saepe
        recusandae dolor error vel totam aliquam tempora tenetur commodi modi
        repellat!
      </p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </>
  );
}
