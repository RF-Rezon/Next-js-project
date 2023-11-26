"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.home}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button onClick={()=> router.push("/portfolio") } url="/portfolio" style={{width: "50%", padding: "15px 20px", borderRadius: "5px", cursor:"pointer", background:"#59bce4", fontWeight:"600"}}>
          <p style={{fontSize: "16px"}}>See Our Works</p>
        </button>
      </div>
      <div className={styles.item}>
        <img src="/hero.svg" alt="" className={styles.img} />
      </div>
    </div>
  )
}
