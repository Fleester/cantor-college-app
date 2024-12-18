import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {fetchCourses} from "@/app/lib/db";

export const metadata = {
    title: "Courses",
    description: "The courses we provide",
};

const Courses = async () => {
    const courses = await fetchCourses();

    return (
        <div className={styles.coursesPage}>
            <h1>Our Courses</h1>
            <div>
                <h2>Computing Courses</h2>
                <p>The College offers a range of courses to suit applicants with varying backgrounds 
                    and educational abilities. At undergraduate level, there are single BSc Honours 
                    Degree courses in Computing, Computer Networks, Software Engineering and Cyber 
                    Security with Forensics amongst others. <br /> <br />
                    The College teaches undergraduate and postgraduate courses in a wide range of specialisms, 
                    including computer science, software development, information systems, networking and software 
                    engineering. It is at the heart of a passionate computing community, including student 
                    societies devoted to games development, digital forensics and programming. <br /> <br />
                    The courses are British Computer Society accredited and are highly relevant to modern industry. 
                    They are designed to prepare students for professional occupations in Computing and related 
                    fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
                </p>
                <h2>Design Courses</h2>
                <p>The College is an internationally connected creative community of diverse disciplines housed under 
                    one roof. We shape our students' futures, preparing them to shape the world through applied 
                    knowledge and creativity. <br /> <br />
                    The College's art and design courses don't just train you, they promote alternative ways of thinking, 
                    making and communicating; they provide you with space, tools and inspiration to develop your 
                    creative practice and a clear career path. You'll get expert teaching from active practitioners 
                    and researchers who will encourage you to adopt innovative and resourceful approaches that both 
                    perceive and create opportunities for better lives. <br /> <br />
                    You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, 
                    making and digital workshops. At the same time, you'll learn professional skills by working on 
                    applied briefs facilitated through our links with commercial clients, cultural institutions, 
                    businesses and organisations.
                </p>
            </div>
            <div className={styles.courseList}>
                <h2>Courses</h2>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>
                            <Link className={styles.courseLink} href={`./courses/${course.UcasCode}`}>{course.CourseTitle}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Courses;