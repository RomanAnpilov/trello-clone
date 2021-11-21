import React from "react";
import { Panel } from "../components";
import { connect } from "react-redux";

const Panels = ({ items }) => (
  <>
    {items.map((item, index) => (
      <Panel key={index} {...item} />
    ))}

    <Panel />
  </>
);

export default connect(({ panels }) => panels)(Panels);
