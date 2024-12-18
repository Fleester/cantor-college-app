import styles from "/src/app/courses/page.module.css"
import { fetchCourseDetails } from "@/app/lib/db";

export const metadata = {
    title: "Course",
    description: "Information about this course",
};

const CourseDetails = async ({params}) => {
    const {UcasCode} = await params;
    console.log(UcasCode);
    const courseDetails = await fetchCourseDetails(UcasCode);

    if (!courseDetails) {
        return (
            <div>
                <p>Course not found</p>
            </div>
        )
    }

    return (
        <div className={styles.courseInfo}>
            <h2>{courseDetails.CourseTitle}</h2>
            <ul>
                <li>Course type:{courseDetails.CourseType}</li> 
                <li>Course award name: {courseDetails.CourseAwardName}</li>
                <li>Ucas code: {courseDetails.UcasCode}</li>
                <li>Ucas points required: {courseDetails.UcasPoints}</li>
                <li>Year of entry: {courseDetails.YearOfEntry}</li>
                <li>Mode of attendance: {courseDetails.ModeOfAttendance}</li>
                <li>Study length: {courseDetails.StudyLength}</li>
                <li>Course subject: {courseDetails.CourseSubject}</li>
                <li>Course summary: {courseDetails.CourseSummary}</li>
            </ul>
        </div>
    );
};

export default CourseDetails;