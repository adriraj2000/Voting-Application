import React, { Fragment } from "react";
import { connect } from "react-redux";

const ErrorMessage = ({ error }) => (
  <Fragment>
    {error.message && (
      	<div className="alert error">
        <input type="checkbox" id="alert1"/>
        <label className="close" title="close" for="alert1">
          <i class="icon-remove"></i>
        </label>
        <p className="inner">
          <strong>{error.message.message}</strong>
        </p>
      </div>
    )}
  </Fragment>
);

export default connect((store) => ({ error: store.error }))(ErrorMessage);
