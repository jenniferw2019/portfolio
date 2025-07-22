import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import img1 from '../assets/images/thermo_logo.jpeg'
import img2 from '../assets/images/datamine_logo.jpeg'
import img3 from '../assets/images/umpqua_logo.jpeg'
import img4 from '../assets/images/htf_logo.jpeg'
import img5 from '../assets/images/nll_logo.jpeg'

function AppExperiences() {
  return (
    <section id="experiences" className="block experiences-block">
      <div className="title-holder">
          <h2>Experience</h2>
      </div>
      <VerticalTimeline lineColor="#6f42c1">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b18fd8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #b18fd8' }}
          date="May 2025 - present"
          iconStyle={{ background: '#6f42c1', color: '#fff' }}
          icon={
            <img
              src={img1}
              alt="Meta logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          }
          dateClassName="custom-date"
        >
          <h3 className="vertical-timeline-element-title">Thermo Fisher Scientific Inc</h3>
          <h6 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>
            Software Development Intern</h6>
          <p>- Contributed to the development of a SaaS-based cloud analytics environment, 
            leveraging AWS services to support scalable data processing.</p>
          <p>- Designed and implemented a responsive React interface with integrated backend services, 
            enabling real-time event streaming via Amazon Kinesis.</p>
          <p>- Structured and depolyed a DynamoDB schema with S3 integration for asset storage, and
            built a Lambda function to automate data flow into QuickSight.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b18fd8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #b18fd8' }}
          date="Aug 2024 - May 2025"
          iconStyle={{ background: '#6f42c1', color: '#fff' }}
          icon={
            <img
              src={img2}
              alt="Meta logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          }
          dateClassName="custom-date"
        >
          <h3 className="vertical-timeline-element-title">Purdue Data Mine</h3>
          <h6 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>
            Undergraduate Researcher</h6>
          <p>- Developed an automation pipeline using Python, GeoPandas, and Shapely to detect overlaps of 
            geospatial field boundaries.</p>
          <p>- Used Matplotlib to visualize data before and after merging process.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b18fd8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #b18fd8' }}
          date="May 2024 - Aug 2024"
          iconStyle={{ background: '#6f42c1', color: '#fff' }}
          icon={
            <img
              src={img3}
              alt="Meta logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          }
          dateClassName="custom-date"
        >
          <h3 className="vertical-timeline-element-title">Umpqua Bank</h3>
          <h6 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>
            Software Development Intern</h6>
          <p>- Configured multiple non-production Salesforce environments,  and  automated the 
            generation of release notes</p>
          <p>- Utilized Azure DevOps to manage sprint planning and support CI/CD processes 
            with AutoRABIT for version control.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b18fd8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #b18fd8' }}
          date="Oct 2023 - May 2024"
          iconStyle={{ background: '#6f42c1', color: '#fff' }}
          icon={
            <img
              src={img4}
              alt="Meta logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          }
          dateClassName="custom-date"
        >
          <h3 className="vertical-timeline-element-title">Hack the Future</h3>
          <h6 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>
            Backend Developer</h6>
          <p>- Engineered the backend of a shared kitchen reservation system using Node.js, Express, and MongoDB.</p>
          <p>- Implemented robust RESTful APIs to handle booking requests and time slot management.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b18fd8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #b18fd8' }}
          date="Aug 2023 - May 2024"
          iconStyle={{ background: '#6f42c1', color: '#fff' }}
          icon={
            <img
              src={img5}
              alt="Meta logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          }
          dateClassName="custom-date"
        >
          <h3 className="vertical-timeline-element-title">No limit Living</h3>
          <h6 className="vertical-timeline-element-subtitle" style={{ fontStyle: 'italic' }}>
            Web Developer</h6>
          <p>- Built modular, reusable UI components such as cards and navbars using React and Bootstrap’s grid system.</p>
          <p>- Integrated third-party data visualizations with responsive design and interactive elements to 
            enhance user experience.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default AppExperiences;