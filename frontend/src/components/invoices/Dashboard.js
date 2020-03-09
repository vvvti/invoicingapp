import React, { Fragment } from "react";
import Form from "./Form";
import Invoices from "./Invoices";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Invoices />
    </Fragment>
  );
}
