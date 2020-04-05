import React from "react";
import { reduxForm, Field } from "redux-form";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { addNewSurvey } from "../actions";
import { withRouter } from "react-router-dom";

const fields = [
  { name: "subject", label: "Subject" },
  { name: "title", label: "Title" },
  { name: "body", label: "Body" },
  { name: "recipients", label: "Recipients List" },
];

const emailsValidator = (emailsCommaSeperated) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const invalidEmails = emailsCommaSeperated
    ?.split(",")
    ?.map((email) => email.trim())
    ?.filter((email) => !emailRegex.test(email));

  if (invalidEmails?.length) {
    return `The following recipients are wrong: ${invalidEmails?.join(", ")}`;
  }
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    {...custom}
    {...input}
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
  />
);

function NewSurvey({
  handleSubmit,
  pristine,
  reset,
  submitting,
  addNewSurvey,
  history,
}) {
  const renderField = (passedFields) => {
    return passedFields.map((field) => (
      <div style={{ margin: 15 }} key={field.name}>
        <Field
          {...field}
          style={{ width: "60%" }}
          component={renderTextField}
        />
      </div>
    ));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
          addNewSurvey(values, history);
        })}
      >
        {renderField(fields)}
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </Button>

          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            variant="contained"
            color="secondary"
            style={{ marginLeft: 15 }}
          >
            Clear Values
          </Button>
        </div>
      </form>
    </div>
  );
}

const validate = (values) => {
  const errors = {};

  fields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `Please provide a value for ${name}`;
    }

    const emailsWrong = emailsValidator(values["recipients"]);
    if (emailsWrong) {
      errors.recipients = emailsWrong;
    }
  });

  return errors;
};

const mapStateToProps = (state) => ({
  formValues: state.form,
});

export default connect(mapStateToProps, { addNewSurvey })(
  reduxForm({
    form: "surveyForm",
    validate,
  })(withRouter(NewSurvey))
);
