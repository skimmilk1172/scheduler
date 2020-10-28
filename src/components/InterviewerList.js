import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import 'components/InterviewerList.scss';
const classnames = require("classnames");

export default function InterviewerList(props) {
  const interviewerClass = classnames("", props.className, {
    interviewers__header: props.header,
    interviewers__list: props.list
  });

  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
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