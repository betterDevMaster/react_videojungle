import React from "react";
import { Button } from "@material-ui/core";

export default function ChannelsTypebar(props) {
  return (
    <div className="container d-flex flex-row justify-content-between mt-3">
      <h2 style={{ fontSize: "16px", color: "#2e2e2e" }}>{props.data.title}</h2>
      <Button style={{ fontSize: "12px", color: "#001655" }}>View More</Button>
    </div>
  );
}
