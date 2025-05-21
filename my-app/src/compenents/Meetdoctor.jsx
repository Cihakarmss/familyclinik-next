import React from "react";
import Image from "next/image";

function Meetdoctor() {
  return (
    <>
      <div className="meetdoctor">
        <h1>Meet Our Doctors</h1>

        <div className="doctor-card">
          <Image
            src="/familiyclinicdoctor.jpeg"
            alt="doctor"
            width={400}
            height={175}
          />
          <div className="doctorAbout">
            <div className="doctorTitle">
              <h2>Kiruthika Asokan</h2>
              <p>Dental Surgeon</p>
            </div>
            <div className="PhoneNumberDoctor">
              <p>
                Phone +91-9171333368{" "}
                <span>___________________________</span>
              </p>
            </div>
            <div className="doctor-description">
              <p>
                Dr. Kiruthika Asokan completed her BDS from the prestigious SRM
                Medical University in 2004. Subsequently, she pursued her
                certified course in Rotary Root Canal Treatment in 2013. Her
                skill and commitment in dentistry create trust and confidence in
                every smile she works on. Based in Karambakkam, Porur, Chennai
                she has more than 19 years of experience and is practicing as a
                full-time Dentist in a Family Clinic. In 2017, her outstanding
                skills and strong dedication placed her on the prestigious "Top
                10 Dentists" list recognized by Business Review Today. She is
                also valued member of the respected Indian Dental Association.
              </p>
            </div>
            <div className="doctorButtons">
              <button>Read More</button>
              <button>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meetdoctor;
