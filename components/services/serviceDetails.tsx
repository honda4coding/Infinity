// components/Sidebar.js

import React from "react";
import styles from "../../src/styles/pages/services.module.scss";
import Link from "next/link";

interface SidebarProps {
  handleServiceSelect: (serviceName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleServiceSelect }) => {
  return (
    <aside className={styles.sidebar}>
      <h2>Navigation</h2>
      <ul>
        <li onClick={() => handleServiceSelect("Annual Safety Inspections")}>
          <Link href="#Annual Safety Inspections">
            <div>Annual Safety Inspections</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("Ship registration services")}>
          <Link href="#Ship registration services">
            <div>Ship registration services</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("New ships designs")}>
          <Link href="#New ships designs">
            <div>New ships designs</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect("Ballast Water Management Solutions")
          }
        >
          <Link href="#Ballast Water Management Solutions">
            <div>Ballast Water Management Solutions</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("CFD Finite Element Analysis")}>
          <Link href="#CFD Finite Element Analysis">
            <div>CFD Finite Element Analysis</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect("Class and statutory certification")
          }
        >
          <Link href="#Class and statutory certification">
            <div>Class and statutory certification</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect("Seafarers endorsements and certification")
          }
        >
          <Link href="#Seafarers endorsements and certification">
            <div>Seafarers endorsements and certification</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("Corporations")}>
          <Link href="#Corporations">
            <div>Corporations</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect("Insurance Cover, conditions surveys")
          }
        >
          <Link href="#Insurance Cover, conditions surveys">
            <div>Insurance Cover, conditions surveys</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect("ISM and ISPS training and consultancy")
          }
        >
          <Link href="#ISM and ISPS training and consultancy">
            <div>ISM and ISPS training and consultancy</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("Non-destructive tests")}>
          <Link href="#Non-destructive tests">
            <div>Non-destructive tests</div>
          </Link>
        </li>
        <li onClick={() => handleServiceSelect("On demand surveys")}>
          <Link href="#On demand surveys">
            <div>On demand surveys</div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect(
              "Recreation of existing ships drawings, calculations, manuals & plans"
            )
          }
        >
          <Link href="#Recreation of existing ships drawings, calculations, manuals & plans">
            <div>
              Recreation of existing ships drawings, calculations, manuals &
              plans
            </div>
          </Link>
        </li>
        <li
          onClick={() =>
            handleServiceSelect(
              "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation"
            )
          }
        >
          <Link href="#EEXI / CII / EPL / OMM / SEEMP PART III – Consultation">
            <div>EEXI / CII / EPL / OMM / SEEMP PART III – Consultation</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
