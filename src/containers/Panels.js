import React from "react";
import { Panel } from "../components";
import { connect } from "react-redux";

import panelsAction from "../actions/panels"

const Panels = ({ items }) => (
  <>
    {items.map((item, index) => (
      <Panel key={index} {...item} />
    ))}

    <Panel />
  </>
);

export default connect(({ panels }) => panels,panelsAction)(Panels);
