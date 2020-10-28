// import React from 'react';
// import 'components/InterviewerListItem.scss';
// const classnames = require('classnames');

// export default function InterviewerListItem(props) {
//   const interviewerClass = classnames('interviewers__item', props.className, {
//     'interviewers__itmem--selected': props.selected
//   });
//   return (
//     <li className={interviewerClass} onClick={props.setInterviewer}>
//       <img
//         className="interviewers__item-image"
//         src={props.avatar}
//         alt={props.name}
//       />
//       {props.name && props.name}
//     </li>
//   );
// }


import React from "react";
import "components/InterviewerListItem.scss";
const classnames = require("classnames");

export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item", props.className, {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}



    // return (
    //   <li
    //     className={interviewerClass}
    //     onClick={() => {
    //       return props.setInterviewer(props.id);
    //     }}
    //   >
    //     <img
    //       className="interviewers__item-image"
    //       src={props.avatar}
    //       alt={props.name}
    //     />
    //     {props.selected && props.name}
    //   </li>
    // );