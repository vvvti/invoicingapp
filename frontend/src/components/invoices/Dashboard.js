import React, { Fragment } from "react";
import Form from "./Form";
import Invoices from "./Invoices";
import Contractors from "./Contractors";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Invoices />
      <Contractors />
    </Fragment>
  );
}
