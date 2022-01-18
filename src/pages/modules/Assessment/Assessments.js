import DataGridPage from "../../tables/DataGrid";
import React from "react";
import { SCHEMAS, DUMMY_ASSESSMENTS } from "./constants";
import { useState } from "react";
import AssessmentPage from "./Assessment";
const items = {
  rows: DUMMY_ASSESSMENTS,
  columns: SCHEMAS.ASSESSMENTS,
};
function AssessmentsList(props) {
  const [state, setState] = useState(true);
  const [assessmentId, setAssessmentId] = useState("");
  return (
    <React.Fragment>
      <div hidden={state}>
        <DataGridPage
          desp={"All of your assessments are listed below. 👇"}
          items={items}
          setState={setState}
          setAssessmentId={setAssessmentId}
        />
      </div>
      <AssessmentPage hidden={!state} id={assessmentId} />
    </React.Fragment>
  );
}

export default AssessmentsList;
