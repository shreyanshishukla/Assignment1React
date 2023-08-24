import { useState } from "react";

export default ({ students }) => {
  return (
    <div className="stu">
      {students.map((s) => (
        <div className="student">{s}</div>
      ))}
    </div>
  );
};
