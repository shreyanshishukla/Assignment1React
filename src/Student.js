import { useState } from "react";

export default ({ students }) => {
  return (
    <>
      {students.map((s) => (
        <div className="student">{s}</div>
      ))}
    </>
  );
};
