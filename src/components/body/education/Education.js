import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Seprator from "../../common/Seprator";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import "./Education.css"

function Education() {
  return (
    <div>
    <Seprator />
      <label className="section-title">Education</label>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2019 - Present"
        dateClassName="dateClss"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h1 className="vertical-timeline-element-title">B Tech, Mechanical Engineering</h1>
        <h4 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>National Institute of Technology Patna</h4>
        <p>
          CGPA: 8.11
        </p>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "#33BBFF"}}
        date="2017 - 2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h1 className="vertical-timeline-element-title" >Senior Secondary, Science (CBSE)</h1>
        <h4 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>
          Nandan Kids HSS
        </h4>
        <p>
          Percentage: 81.6
        </p>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2016"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GiSchoolBag />}
      >
        <h1 className="vertical-timeline-element-title">Secondary (CBSE)</h1>
        <h4 className="vertical-timeline-element-subtitle" style={{marginTop:"10px"}}>Nandan Kids HSS</h4>
        <p>Percentage: 91.3</p>
        
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </div>
  );
}

export default Education;
