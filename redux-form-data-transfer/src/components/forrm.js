import React from "react";
import { reduxForm, Field } from "redux-form";

function Form(props) {
  const { handleSubmit, pristine, submitting } = props;
  // console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense / Income</label>
        <div>
          <Field
            name="Expense"
            component="input"
            type="text"
            placeholder="Expense/Income Name.."
          ></Field>
        </div>
      </div>
      <div>
        <label>Enter Amount</label>
        <div>
          <Field
            name="Amount"
            component="input"
            type="integer"
            placeholder="amount in Rs"
          ></Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Add New Transaction
        </button>
      </div>
    </form>
  );
}
export default reduxForm({
  form: "Form", // a unique identifier for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Form);
