import React from "react";
import 'components/InterviewerList.scss';
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from 'prop-types';
const classnames = require("classnames");

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    interviewer: PropTypes.number,
    setInterviewer: PropTypes.func.isRequired 
  };
  const interviewerClass = classnames("", props.className, {
    interviewers__header: props.header,
    interviewers__list: props.list
  });

  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
      className={interviewerClass}
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        id={interviewer.id}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      ></InterviewerListItem>
    );
  });
  return (
    <div className={interviewerClass}>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </div>
  );
}




    // const interviewer = props.interviewers.map((interviewer, index) => (
    //   <InterviewerListItem
    //     className={interviewerClass}
    //     key={index}
    //     name={interviewer.name}
    //     avatar={interviewer.avatar}
    //     selected={props.interviewer && interviewer.id === 3}
    //     setInterviewer={props.setInterviewer}
    //   >
    //     <h4 className="interviewers__header text--light">interviewer</h4>
    //     <ul className="interviewers__list"></ul>
    //   </InterviewerListItem>
    // ));
    // return <ul>{interviewer}</ul>;