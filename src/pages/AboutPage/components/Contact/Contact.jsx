import styles from "./contact.module.css";
import textSmallScreen from "@assets/text-s.png";
import textLargeScreen from "@assets/text-l.png";

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>ABOUT GAME JAM</h1>
            <div className={styles.textContainer}>
            <picture>
                <source media="(max-width: 900px)" srcSet={textSmallScreen} />
                <img src={textLargeScreen} alt="background rectangle" className={styles.contactImage} />
            </picture>
            </div>
        </div>  
    );
};

export default Contact;
