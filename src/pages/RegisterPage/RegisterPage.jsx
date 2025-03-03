import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
// change to @ later

import AnimatedCat from "./components/AnimatedCat/AnimatedCat";
import Question from "./components/Question/Question";

import styles from "./register-page.module.css";

const RegisterPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />

            <div className={styles.contentContainer}> 
                <div className={styles.animatedCatContainer}> 
                    <AnimatedCat />
                </div>
                <div className={styles.questionContainer}>
                    <Question />
                </div>
            </div> 
    
            <Footer />
        </div>
    );
};

export default RegisterPage;
