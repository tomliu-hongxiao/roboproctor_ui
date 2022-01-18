import axios from "axios";
import { DUMMY_ASSESSMENT_DATA } from "../pages/modules/Assessment/constants";
const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BASE_URL,
  // timeout: 1000,
  // headers: {'Access-Control-Allow-Origin': '*'}
});

export function getAssessments(userId) {
  console.log(process.env.REACT_APP_LOCAL_BASE_URL);
  instance
    .get("/assess")
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getAssessment = (assessment_id) => {
  // instance.get('/assess')
  // .then((resp) => {
  //   console.log(resp);
  //   return resp;
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
  return DUMMY_ASSESSMENT_DATA;
};

// export function getAssessments(userId) {
//   console.log(process.env.REACT_APP_LOCAL_BASE_URL);
//   instance.get('/assess')
//     .then((resp) => {
//       console.log(resp);
//       return resp;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }

export default instance;
