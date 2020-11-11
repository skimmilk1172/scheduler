import React, { useEffect } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(student, interviewer) {
    const interview = {
      student,
      interviewer
    };
    transition(SAVING);

    //This will return a promise
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE));
  }
  function delete1() {
    transition(DELETE, true);
    //This will return a promise
    props
      .deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  }

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
      transition(EMPTY);
    }
  }, [props.interview, transition, mode]);
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          allInterviewers={props.allInterviewers}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {/* Creating form */}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {/* Saving and Confirming message, and delete confirm message */}
      {mode === SAVING && <Status message="Saving..."></Status>}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={delete1}
          onCancel={() => back()}
        ></Confirm>
      )}
      {/* Deleting Status  */}
      {mode === DELETE && <Status message="Deleting..."></Status>}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          name={props.interview.student}
          interviewer={props.interview.interviewer}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {/* Error Message for booking error and deleting error */}
      {mode === ERROR_SAVE && (
        <Error
          message="Unable to book appointment, please try again later."
          onClose={() => back()}
        ></Error>
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="Unable to delete appointment, please try again later."
          onClose={() => back()}
        ></Error>
      )}
    </article>
  );
}