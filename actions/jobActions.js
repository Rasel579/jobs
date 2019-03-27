import axios from "axios";
import qs from "qs";
 
import { FETCH_JOBS, LIKED_JOB } from "./types";
import locationify from "./tools/locationify";
 
const GITHUB_ADDRESS = "https://authenticjobs.com/api/?";
 
const JOB_QUERY_PARAMS = {
  api_key: "e9a8fa8109bf3e0a6ef582bd81b6e176",
  method: "aj.jobs.search",
  perpage: "10",
  format: "json",
  keywords: "javascript"
};
 
const buildJobsUrl = () => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS });
  return `${GITHUB_ADDRESS}${query}`;
};
 
export const fetchJobs = (region, distance = 10) => async dispatch => {    
  try {
    const url = buildJobsUrl();
    let job_list = await axios.get(url);
    job_list = locationify(
      region,
      job_list.data.listings.listing,
      distance,
      (obj, coords) => {
        obj.company.location = { ...obj.company.location, ...coords };
        return obj;
      }
    );
    console.log(job_list);
    dispatch({
      type: FETCH_JOBS,
      payload: job_list
    });
  } catch (e) {
    console.log("fetchJobs ACTION ERROR:", e.message);
  }
};

export const likedJob = (job) => {
    return {
       payload: job,
       type: LIKED_JOB
    };
};