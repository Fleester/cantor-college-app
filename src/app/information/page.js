import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "Information",
    description: "Important information for students, staff and potential business partners",
};

export default function Information() {
    return (
        <div className={styles.informationPage}>
            <h1>Information</h1>
            <div>
                <h2>Students</h2>
                <p>At Cantor College, we are committed to providing our students with the best possible environment to learn, 
                    create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help 
                    you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers 
                    everything you need to excel.
                </p>
            </div>
            <div>
                <h2>Staff</h2>
                <p>staff information here</p>
            </div>
            <div>
                <h2>Businesses</h2>
                <p>business information here</p>
            </div>
        </div>
    );
}