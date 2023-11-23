import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  return {
    title: "About page",
    description: "About description",
  };
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About NexusHub</h1>
          <p className={styles.desc}>
            Welcome to Nexushub, a dynamic agency at the forefront of
            cutting-edge digital solutions. At Nexushub, we specialize in a
            diverse range of services, seamlessly blending creativity with
            technology to bring your visions to life. Our talented team excels
            in crafting captivating illustrations that tell your unique story,
            while our expertise extends to the development of CMS websites that
            not only showcase your brand but also provide an intuitive user
            experience.
            <br />
            But that is not all – Nexushub is your go-to destination for the
            development of web and mobile applications, desktop applications,
            and the integration of innovative technologies such as Augmented
            Reality and Artificial Intelligence. We believe in pushing
            boundaries, and our commitment to staying ahead of the curve ensures
            that we deliver solutions that are not just current but
            future-proof. Our comprehensive suite of services goes beyond
            development.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We are also your partners in Digital Marketing, strategizing and
            executing campaigns that drive engagement, boost visibility, and
            elevate your brand in the digital landscape. At Nexushub, we thrive
            on challenges, transforming ideas into realities, and empowering
            businesses to thrive in the ever-evolving digital realm. Discover
            the synergy of creativity, technology, and innovation at Nexushub –
            where we do not just create solutions; we shape digital experiences
            that leave a lasting impact.
            <br />
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
