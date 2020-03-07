import React from "react";

const Loading = ({ loading }) => {
  return <div id="loading" className={`${!loading ? "hidden" : ""}`}></div>;
};

export default Loading;
