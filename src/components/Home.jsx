import React, { useContext } from "react";

import AuthContext from "./../auth/context";
import Navbar from "./NavBar";

import Logo from "../images/logo.jpg"

/* import DatePicker from './../Material-ui-components/DatePicker';
import BookingCard from "./../Material-ui-components/BookingCard"; */
import "../css/home.css";

function Home() {
  const authContext = useContext(AuthContext);
  /* 
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const timeSlot = ["09:00am-11:00am", "11:00am-01:00pm", "02:00pm-04:00pm", "04:00pm-06:00pm"];


  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  }; */

  return (
    <div>
      <Navbar user={authContext.User}></Navbar>
      <div
        className="home-main"
        style={{ width: authContext.Width.homeWidth }}
      >
        <div className="home-clg-history">
          <h3>History (IIITM)</h3>
          <p className="home-history-p">
            Indian Institute of Information Technology and Management (IIITM) in Gwalior, Madhya Pradesh is an autonomous institute set by Government of India, MHRD (Presently Ministry of Education, Govt. of India) in 1997. It is an effort by MHRD (Presently Ministry of Education, Govt. of India) towards creating professionals in areas of management and information technology from the same institute. This institute was created for facilitating higher education, research, and consultancy in areas of information technology (IT) and business management. Initially started as IIITM, this institute was prefixed with ABV in 2002 to honour the then Prime Minister Atal Behari Vajpayee.
          </p>

          <span className="home-span">The Beginning</span>
          <p className="home-history-p">
            The beginning of IIITM could be traced back to 1992, when MHRD (Presently Ministry of Education, Govt. of India) under Dr. P. G. Reddy contemplated setting up of advanced information systems in the likes of IIMs and IITs in different locations of India. Subsequently in 1995, Government of India based on a report prepared by AICTE (All India Council for Technical Education) comprising eminent academicians, policy makers, and professionals decided on establishing national centres focussed on IT and management training.
          </p>
          <p className="home-history-p">
            PGDMIT (Post Graduate Diploma in Management and Information Technology) was the maiden course initiated in 1998 with thirty students, followed by PGDIT (Post Graduate Diploma in Information Technology) in 1999, and Ph. D and 5-year Dual Post Graduate programs in 2000.
          </p>

          <span className="home-span">Committee</span>
          <p className="home-history-p">
            This essentially was the committee set up by MHRD (Presently Ministry of Education, Govt. of India) under Dr. P. G. Reddy to study the comprehensive situation of software education and its utilization in India. With the demand for skilled information technology and management professionals reaching several thousands, it became necessary to establish specialised management and IT institutes similar to IIMs and IITs to bridge the gap between manpower demand and supply.
          </p>

          <span className="home-span">Policy</span>
          <p className="home-history-p">
            All pervasive growth of IT in India was triggered by Software Policy in 1986, Electronic Policy in 1985, and Computer Policy in 1984. These three policies in unison led to extensive use of computerised methods across different sectors of business, industries, and public administration thereby necessitating the need for competent professionals at different levels. Infrastructures like Internet, INDONET, NICNET, ERNET, and INFLIBNET were established for supporting this demand for widespread usage of computerised processes.
          </p>

        </div>
        <div>
          <img src={Logo}
            alt="College Logo"
            className="home-background-image" />
        </div>
        {/* <div className="home-lab-main">
          <h2 className="home-h2">{authContext.LabName}</h2>
        </div>
        <DatePicker selectedDate={selectedDate}
          handleDateChange={handleDateChange} />
        <div className="home-booking-div">
          {timeSlot.map((item, index) => {
            return <BookingCard key={index} time={item} />
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Home;
