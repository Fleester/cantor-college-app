import Image from "next/image";
import styles from "./page.module.css";
import ComputerImage from "/public/images/ACES-036-Computing-Playstation-Lab-2.jpg";

export const metadata = {
    title: "Facilities",
    description: "The facilities we provide",
};

export default function Facilities() {
    return (
        <div className={styles.facilitesPage}>
            <h1>Facilities</h1>
            <div className={styles.topFlex}>
                <p>The College is located in the attractive and pleasantly refurbished Building. 
                    The building houses computing laboratories, and lecture/tutorial rooms. 
                    It has its own catering facilities and student work areas. <br /> <br />
                    There is also a car park to the back of the building. Our building has space of 9500m², 
                    houses over 240 staff and provides teaching space for more than 1600 students.
                </p>
                <Image 
                    src={ComputerImage}
                    className={styles.facilitiesImage}
                    alt="Our computer lab"
                    width="550"
                    height="auto"
                />
            </div>
            <div className={styles.facilitesList}>
                <h2>Facilities include:</h2>
                <li>Wi-fi technology</li>
                <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li>Specialist faculty facilities</li>
                <li>A double height lecture theatre at first and second floor level</li>
                <li>Dramatic three-storey glass open atrium</li>
                <li>Meeting rooms</li>
                <li>Office accommodation</li>
                <li>Specialist IT facilities</li>
                <li>Reception desk area</li>
                <li>Catering outlet</li>
                <li>Parking for disabled badge holders</li>
                <li>Cycle racks</li>
                <li>Gallery</li>
            </div>
        </div>
    );
}