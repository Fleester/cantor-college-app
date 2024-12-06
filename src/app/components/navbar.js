import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <li><Link className="link" href='/'>Home</Link></li>
            <li><Link className="link" href='/'>About us</Link></li>
            <li><Link className="link" href='/'>Courses</Link></li>
            <li><Link className="link" href='/'>Facilities</Link></li>
            <li><Link className="link" href='/'>Information</Link></li>
            <li><Link className="link" href='/'>Contact us</Link></li>
        </nav>
    );
}