import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";
const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.pexels.com/photos/8755970/pexels-photo-8755970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill></Image>
            </div>
            <span className={styles.date}>03.22.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quos.</p>
            <Link href="/blog/single" className={styles.link}>Read More</Link>
        </div>

    </div>;
};
export default PostCard