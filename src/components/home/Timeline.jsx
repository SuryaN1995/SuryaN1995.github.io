import React from 'react';
import { Jumbotron } from './migration';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const Timeline = ({ experiences }) => {
    return (
        <Jumbotron className="bg-white">
            <h2 className="display-4 mb-5 text-center">
                {experiences.heading}
            </h2>
            <VerticalTimeline
                lineColor={'#10444444'}>
                {experiences.data.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#EFEFEF', color: '#222' }}
                        contentArrowStyle={{ borderRight: '7px solid  #EEEEEE' }}
                        date={exp.date}
                        iconStyle={{ background: '#111111', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <img
                            src={exp.companylogo}
                            alt={`${exp.company} Logo`}
                            style={{  marginBottom: '10px' }}
                        />
                        <h3 className="vertical-timeline-element-title">{exp.role}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                        <p>{exp.workDesc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Jumbotron>
    );
};

export default Timeline;
