import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/contact.png" alt="" fill></Image>
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="text" placeholder="Name and Surname" className={styles.input}/>
                    <input type="text" placeholder="Email Address" className={styles.input}/>
                    <input type="text" placeholder="Phone Number (Optional)" className={styles.input}/>

                    <textarea placeholder="Your Message" className={styles.textarea}></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>

        </div>
    );
};
export default ContactPage;