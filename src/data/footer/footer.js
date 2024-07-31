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
        { label: "About Us", url: "/aboutus" },
        { label: "Services", url: "/service" },
        { label: "Visas", url: "/abroad" },
        { label: "Study Abroad", url: "/abroad" },
        { label: " Contact", url: "/contact" },
        
      ],
    },
    {
      category: "Contact Us",
      items: [
        { label: "New South Wales 2145 Australia,Westmead", url: "https://maps.app.goo.gl/NG2F6eChijiLgUEA8" },
        { label: "info@bisu.com.au", url: "#" },
        
      ],
    },
    {
      category: "Resource Links",
      items: [
        { label: "University Courses in Australia", url: "https://www.universitycourses.com.au/" },
        { label: "Seek Australia", url: "https://www.seek.com.au/" },
        { label: "Jobs and Skills in Australia", url: "https://www.jobsandskills.gov.au/" },
        { label: "Indeed Australia", url: "https://au.indeed.com/" },
        { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au/" },
        { label: "Training Australia", url: "https://training.gov.au/" },
        { label: "ASQA", url: "https://www.asqa.gov.au/" },
        { label: "Australian Career Guide", url: "https://www.jobsandskills.gov.au/" },
        { label: "Transport for NSW", url: "https://www.transport.nsw.gov.au/" },
        { label: "Gumtree", url: "https://www.gumtree.com.au/" },



      ],
    },
    {
      category: "Important Links",
      items: [
        { label: "Bank Account Open", url: "https://bisu-consultancy.verhttps://www.commbank.com.au/moving-to-australia.html?agentid=A5991&ocid=mfs-A5991" },
        { label: "IMMI", url: "https://immi.homeaffairs.gov.au/help-support/departmental-forms/pdf-forms" },
        { label: "Tax File Number Application", url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application" },
        { label: "Migration Agents", url: "https://portal.mara.gov.au/search-the-register-of-migration-agents/" },
        { label: "Accomodation", url: "https://www.studyinaustralia.gov.au/english/live-in-australia/accommodation" },
        { label: "Unique Student Identifier", url: "https://www.usi.gov.au/" },
        { label: "CRICOS", url: "https://cricos.education.gov.au/Course/CourseSearch.aspx" },
        { label: "Book Medical", url: "https://bmvs.onlineappointmentscheduling.net.au/oasis/" },
        { label: "Australian Federal Police (AFP)", url: "https://afpnationalpolicechecks.converga.com.au/" },


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