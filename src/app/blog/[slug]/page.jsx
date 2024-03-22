import styles from "./single-post.module.css";
import Image from "next/image";
const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.pexels.com/photos/8755970/pexels-photo-8755970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.pexels.com/photos/8755970/pexels-photo-8755970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50}></Image>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Hoang Mai</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>03.22.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.contentText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                        voluptates, voluptatum voluptatibus voluptatem necessitatibus </p>
                </div>
            </div>

        </div>
    );
};
export default SinglePostPage;