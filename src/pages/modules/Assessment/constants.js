export const SCHEMAS = {
  ASSESSMENTS: [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "Title",
      width: 400,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      valueGetter: (params) => {
        return params.value ? STATUS.AVAILABLE : STATUS.UNAVAILABLE;
      },
      editable: false,
    },
    {
      field: "grade",
      headerName: "Grade",
      width: 150,
      editable: false,
    },
    {
      field: "attempts",
      headerName: "Attempts",
      width: 200,
    },
  ],
};

export const DUMMY_ASSESSMENTS = [
  { id: 1, title: "Test 1", status: true, grade: "N/A", attempts: "0/1" },
  { id: 2, title: "Test 2", status: true, grade: "N/A", attempts: "0/1" },
  { id: 3, title: "Test 3", status: false, grade: 83, attempts: "1/1" },
];

export const DUMMY_ASSESSMENT_DATA = {
  id: 1,
  title: "Intro to Physics II",
  questions: {
    1: {
      type: "MC",
      text: "On a six-sided die, each side has a number between 1 and 6. What is the probability of throwing a 3 or a 4?",
      choices: ["1 in 6", "1 in 3", "1 in 2", "1 in 4"],
      image_path: "",
    },
    2: {
      type: "MC",
      text: `Calculate the ideal mechanical advantage of the lever shown, given the following distances:

      Distance between B to A is 2 meters
      Distance between A to C is 1 meter`,
      choices: ["0.5", "1.0", "1.5", "2.0"],
      image_path: "../images/test.png",
    },
    3: {
      type: "SA",
      text: [
        `The velocity-time graph shows part of the journey of a train.
      The gradient of the line gives the acceleration of the train. The area under the line gives the distance travelled by the train.`,
        "a) Calculate the initial acceleration of the train. [2 marks]",
        "b) Calculate the total distance travelled by the train. [2 marks]",
      ],
      image_path: "../images/test.png",
    },
  },
  timeAllowed: "15",
};

export const Q_TYPE = {
  MC: "MC",
  SA: "SA",
};
export const DUMMY_PREVIEW_DATA = {
  title: "Intro to Physics II",
  period: "Available on Jan 10, 2022 9:00 AM until Jan 20, 2022 9:00 PM",
  timeAllowed: 15,
  attempts: "Allowed - 1, Completed - 0",
  instructions: [
    `Before you submit the quiz, you will have the opportunity to return to questions that you may have missed or have not yet answered.
  Once the allocated time period that was set for this quiz expires, you are required to submit your quiz responses.`,
    `Note: Any responses entered after the time limit expires will not be submitted.`,
  ],
};
const STATUS = {
  AVAILABLE: "Available",
  UNAVAILABLE: "Unavailable",
};
export default NaN;

// Examples
// const columns = [
//     { field: "id", headerName: "ID", width: 150 },
//     {
//       field: "firstName",
//       headerName: "First name",
//       width: 200,
//       editable: true,
//     },
//     {
//       field: "lastName",
//       headerName: "Last name",
//       width: 200,
//       editable: true,
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 250,
//       valueGetter: (params) =>
//         `${params.getValue(params.id, "firstName") || ""} ${
//           params.getValue(params.id, "lastName") || ""
//         }`,
//     },
//   ];
