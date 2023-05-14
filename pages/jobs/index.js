import React, { useEffect, useState } from 'react';
import { JobListing, Filters } from '../../components/';
export default function index() {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const results = await fetch('/api/jobs')
      .then((res) => res.json())
      .then((result) => result.jobs);

    return setJobs(
      // results &&
      //   results.filter((item) => {
      //     return item.id == id;
      //   })
      results
    );
  };
  useEffect(() => {
    fetchJobs();
  });
  return (
    <div className="page">
      <Filters />
      <JobListing jobs={jobs} />
    </div>
  );
}
