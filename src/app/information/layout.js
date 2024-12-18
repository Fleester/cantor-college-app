import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Information",
    description: "Important information for students, staff and potential business partners",
};

export default function InfoLayout({ children }) {
    return (
        <div className={styles.informationPage}>
            <h1>Information</h1>
            <br />
            <div>
                <ul className={styles.LinkList}>
                    <li><Link className={styles.infoLink} href="/information">Students</Link></li>
                    <li><Link className={styles.infoLink} href="/information/staff">Staff</Link></li>
                    <li><Link className={styles.infoLink} href="/information/businesses">Businesses</Link></li>
                </ul>
            </div>
            {children}
        </div>
    );
}