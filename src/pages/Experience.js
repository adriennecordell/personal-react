import React from 'react';
import {VerticalTimeline, 
       VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
    return (
    
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
       <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
       icon={<SchoolIcon /> }>
        <h3 className="vertical-timeline-element-title"> Shorewood High School, Shoreline, WA </h3>
        <p>High School Diploma</p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
       icon={<SchoolIcon /> }>
        <h3 className="vertical-timeline-element-title"> Shoreline Community College, Shoreline, WA </h3>
        <p>Associates Degree</p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
       icon={<SchoolIcon /> }>
        <h3 className="vertical-timeline-element-title"> Western Washington University, Bellingham WA </h3>
        <p> Bachelors Degree In Political Scrience </p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2022 - 2023"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
       icon={<SchoolIcon /> }>
        <h3 className="vertical-timeline-element-title"> Full -Stack Coding Bootcamp, University of Wisconsin, WI </h3>
        <p> Certificate </p>
       </VerticalTimelineElement>

       <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="2021 - present"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
       icon={<WorkIcon /> }>
        <h3 className="vertical-timeline-element-title"> The Great Dane Pub, Madison, WI </h3>
        <p> Bartender / Shift Manager </p>
       </VerticalTimelineElement>
    </VerticalTimeline>
</div>

);
}

export default Experience