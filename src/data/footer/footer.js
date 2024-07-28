import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Logo from "../../image/logo.png"

const footerData = {
  logo: {
    src: Logo, 
    alt: "logo",
  },
  links: [
    {
      category: "Quick Links",
      items: [
        { label: "About Us", url: "https://bisu-consultancy.vercel.app/aboutus" },
        { label: "Scholarships", url: "#" },
        { label: "Visas", url: "#" },
        { label: "Countries", url: "#" },
        { label: "Australian Universities", url: "#" },
        
      ],
    },
    {
      category: "Resource Links",
      items: [
        { label: "University Courses in Australia", url: "https://www.universitycourses.com.au/" },
        { label: "Seek Australia", url: "https://www.seek.com.au/" },
        { label: "Jobs and Skills in Australia", url: "https://www.jobsandskills.gov.au/" },
        { label: "Countries", url: "#" },
        { label: "Australian Universities", url: "#" },
      ],
    },
    {
      category: "Important Links",
      items: [
        { label: "About Us", url: "https://bisu-consultancy.vercel.app/aboutus" },
        { label: "Scholarships", url: "#" },
        { label: "Visas", url: "#" },
        { label: "Countries", url: "#" },
        { label: "Australian Universities", url: "#" },
      ],
    },
    {
      category: "Support",
      items: [
        { label: "Chat Support", url: "#" },
        { label: "Help Center", url: "#" },
        { label: "Report Bug", url: "#" },
      ],
    },
  ],
  social: [
    { icon: FaFacebook, url: "https://facebook.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaLinkedin, url: "https://linkedin.com" },
    { icon: BsTwitterX, url: "https://twitter.com" },
  ],
};

export default footerData;
