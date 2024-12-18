import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "Contact us",
    description: "A form to contact us",
};

export default function ContactUs() {
    return (
        <div className={styles.contactUsPage}>
            <h1>Contact us</h1>
            <div>
                <p>Ready to explore how Cantor College can help your business grow? Contact our Business Services 
                    team today to discuss your needs and learn more about our offerings. We look forward to working 
                    with you to achieve your business goals.
                </p>
            </div>
            <div className={styles.form}>
                <form method="post">
                    <label forhtml="name">Name</label>
                    <input type="text" id="name" name="name" aria-label="Name" required></input>
                    <label forhtml="request">Contact Request</label>
                    <input type="text" id="request" name="request" aria-label="Contact request" required></input>
                    <label forhtml="email">Email</label>
                    <input type="email" id="email" name="email" aria-label="Email" required></input>
                    <label forhtml="phoneNumber">Phone Number</label>
                    <input type="phoneNumber" id="phoneNumber" name="phoneNumber" aria-label="Phone Number" required></input>

                    <input type="submit" value="submit" className={styles.button}></input>
                    <input type="reset" value="reset" className={styles.button}></input>
                </form>
            </div>
        </div>
    );
}