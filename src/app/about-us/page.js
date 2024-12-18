import Image from "next/image";
import styles from "./page.module.css";
import AboutUsImage from "/public/images/main_2529_image4.png"

export const metadata = {
    title: "About us",
    description: "Information about us",
};

export default function AboutUs() {
    return (
        <div className={styles.aboutUsPage}>
            <h1>About us</h1>
            <div className={styles.firstPara}>
                <p>
                    Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education 
                    they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the 
                    opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading 
                    researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your 
                    ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.
                </p>
                <Image 
                    src={AboutUsImage}
                    className={styles.aboutUsImage}
                    alt="The interior of Cantor College"
                    width="550"
                    height="auto"
                />
            </div>
            <h1>How to find us</h1>
            <div>
                <ul className={styles.findUsList}>
                    <li>Cantor College</li>
                    <li>Main Street</li>
                    <li>Sheffield</li>
                    <li>SC4 2BB</li>
                    <li>Tel: (01321) 2340 235</li>
                    <li>Fax: (01321) 2340 236</li>
                    <li>Email: info@cantorcollege.ac.uk</li>
                </ul>
            </div>
        </div>
    );
};