import React from "react";
import "./JoinTheTeam.css";
import { jobData } from './JobData';

const JoinTheTeam = () => {

  const renderJobs = (job) => {
    return (
      <tr>
        <th scope="row">{job.position}</th>
        <td>{job.category}</td>
        <td>{job.description}</td>
        {/* <td>N/A</td> */}
        <td>{job.contactEmail}</td>
      </tr>
    );
  }

  const renderNoJobs = () => {
    return (
      <div>
        <h2>There are no job openings</h2>
        <h5>There aren't any jobs available right now</h5>
        <p>We will update this page as soon as new jobs are available.</p>
        <p>Please email lauriobotics@gmail.com if you have any questions</p>
      </div>
    );
  }
  return (
    <>
      <div className="content">
        {jobData.length > 0 &&
          <>
            <p>Even if you don't meet the qualifications feel free to apply.</p>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Position</th>
                  <th scope="col">Job Category</th>
                  <th scope="col">Qualifications</th>
                  {/*<th scope="col">Description</th>*/}
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {jobData.map(renderJobs)}
              </tbody>
            </table>
            <p>Feel free to Email the address in the "EMAIL" column if you are interested in any of the positions available. If there are no positions listed, we still welcome you to reach out to us at
          <a href="mailto:lauriobotics@gmail.com">
                {' '}lauriobotics@gmail.com
          </a>.
          </p>
            <p>Everyone, of different colours, regions, beliefs, and genders are welcome.</p>
          </>
        }
        {jobData.length === 0 && renderNoJobs()}
      </div>
    </>
  );
}

export default JoinTheTeam;
