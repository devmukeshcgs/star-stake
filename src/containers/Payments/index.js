import React, { Component } from "react";
import { connect } from "react-redux";
import PaymentsAction from "../../redux/payments/actions";
import PaymentsWrapper, {
  Section1,
  Section2,
  PaymnetForm,
  PaymnetTbl,
} from "./payments.style";
import Cards from "../../componants/Cards";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { FieldWrapper, SecTitle } from "../../theme/GlobalStyles";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "./../../componants/DatePickerField";
import PaymentTable from "./PaymentTbl";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";

const {
  changeTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
  viewChange,
} = PaymentsAction;

const SignupSchema = yup.object().shape({
  user: yup.string().required("Required"),
  currency: yup.string().required("Required"),
  amount: yup.number().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  memo: yup.string().required("Required"),
  date: yup.string().required("Required"),
});
class Payments extends Component {
  render() {
    return (
      <PaymentsWrapper>
        <Cards />

        <Section1>
          <PaymnetForm>
            <SecTitle>Send & Recive Payments</SecTitle>
            <IconContext.Provider
              value={{ color: "white", className: "bigIcon" }}
            >
              <button type="submit">
                <FiArrowDownLeft />
                Recive Payment
              </button>
              <button type="submit">
                <FiArrowUpRight />
                Send Payment
              </button>
            </IconContext.Provider>
            <Formik
              initialValues={{
                user: "",
                email: "",
                currency: "",
                amount: "",
                memo: "",
                date: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <FieldWrapper>
                    <label htmlFor="user">
                      Who do you want to request payment?
                    </label>
                    <Field
                      name="user"
                      as="select"
                      className={errors.user && touched.user ? "err" : null}
                    >
                      <option value="">User type</option>
                      <option value="coinlock">coinlock</option>
                      <option value="non-coinlock">non-coinlock</option>
                    </Field>
                    {/* {errors.user && touched.user ? (
                      <span>{errors.user}</span>
                    ) : null} */}
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="user">Enter the sender email id</label>

                    <Field
                      name="email"
                      type="email"
                      className={errors.email && touched.email ? "err" : null}
                    />
                    {/* {errors.email && touched.email ? (
                      <span>{errors.email}</span>
                    ) : null} */}
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="user">Select payment type?</label>

                    <Field
                      name="currency"
                      as="select"
                      className={
                        errors.currency && touched.currency ? "err" : null
                      }
                    >
                      <option value="">Currency</option>
                      <option value="BTC">BTC</option>
                      <option value="USD">USD</option>
                    </Field>
                    {/* {errors.currency && touched.currency ? (
                      <span>{errors.currency}</span>
                    ) : null} */}
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="user">Amount</label>

                    <Field
                      name="amount"
                      className={errors.amount && touched.amount ? "err" : null}
                    />
                    {/* {errors.amount && touched.amount ? (
                      <span>{errors.amount}</span>
                    ) : null} */}
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="user">Payment memo</label>

                    <Field
                      as="textarea"
                      name="memo"
                      className={errors.memo && touched.memo ? "err" : null}
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="user">Due Date</label>

                    <DatePickerField
                      name="date"
                      className={errors.date && touched.date ? "err" : null}
                    />
                  </FieldWrapper>
                  <button type="submit">Request Payment</button>
                </Form>
              )}
            </Formik>
          </PaymnetForm>
          <PaymnetTbl>
            <SecTitle> Payments list</SecTitle>
            <PaymentTable />
          </PaymnetTbl>
        </Section1>
      </PaymentsWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(Payments);
