"use client";
4;
import React, { useState, useEffect } from "react";
import styles from "../../styles/pages/contact.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import 'aos/dist/aos.css';

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
         duration: 3000,
         once: true,
       })
 }, [])
  return (
    <div>
      <div  className={styles.container}>
        <Image
          className={styles.img}
          src="/resize-170386058519758890772.jpg" // Replace with your image URL
          alt="Description"
          objectFit="cover"
          width={100}
          height={100}
        />

        <div data-aos="fade-down" className={styles.conect}>
          <h2> {`contact us`} </h2>
          <h2> {`contact us`} </h2>
        </div>
      </div>

      <div className={styles.info_container}>
        <div data-aos="fade-right" className={styles.info_address}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p> {`25 Reda Street, ADAM Bldg. 4th Floor, Ismailia-Egypt`} </p>

          <iframe
            id="map-canvas"
            className="map_part"
            frameBorder="0"
            width="100%"
            height="530"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=25 Reda Street, ADAM Bldg. 4th Floor, Ismailia-Egypt&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div data-aos="fade" className={styles.info_one}>
          <h2> {`Contact Us`} </h2>
          <div className={styles.info}>
            <div className={styles.info_plus}>
              <FontAwesomeIcon icon={faPhone} />
              <h3> {`Dr. Eng. Waleed Yehia`}</h3>
              <p>{`Chairman and Chief Executive Officer`}</p>

              <p>{` Cell: +201033050011`}</p>
              <p>{`Tel: +20643135910`}</p>
              <p> {`E-mail:tech@infinity-marine.org`}</p>
            </div>
            <div className={styles.info_email}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>{`Registration , Seafarer Dept.`}</p>
              <p>{` E-mail:reg@infinity-marine.org`}</p>

              <p>{`Ship's Managements, Operation`}</p>
              <p> {`E-mail:info@infinity-marine.org`}</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.form}>
          <h2>{` have a message ? send it now `}</h2>
          <form
            className={styles.form_plus}
            action="mailto:tech@infinity-marine.org"
            method="post"
            acceptCharset="UTF-8"
            encType="text/plain"
          >
            <input required type="text" placeholder="Name" />
            <input required type="email" placeholder="Email" />
            <input required type="text" placeholder="Subject" />
            <textarea required name=" " placeholder="Message" />
            <button type="submit">{`SEND`}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
