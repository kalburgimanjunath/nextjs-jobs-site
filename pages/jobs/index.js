import React, { useEffect, useState } from 'react';
import { JobListing, Filters } from '../../components/';
export default function index() {
  const [jobs, setJobs] = useState([]);
  const [filteredjobs, setFilteredJobs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortText, setSortText] = useState();

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
  const fetchJobsearch = async () => {
    const results = await fetch('/api/jobs')
      .then((res) => res.json())
      .then((result) => result.jobs);

    return setFilteredJobs(
      results &&
        results.filter((item) => item['job_title'].includes(searchText))
    );
  };
  useEffect(() => {
    if (searchText == '' && sortText == '') {
      fetchJobs();
    } else if (sortText !== '') {
      console.log('fetch sort');
      let sortArray;
      fetchJobs();
      if (sortText === 'title') {
        sortArray = jobs.sort((a, b) =>
          a.job_title.toLowerCase() > b.job_title.toLowerCase() ? 1 : -1
        );
      }
      console.log(sortArray);
      setJobs(sortArray);
    } else {
      fetchJobsearch();
      // console.log(filteredjobs);
    }
  }, [searchText, sortText]);
  return (
    <div className="page">
      <Filters setSearchText={setSearchText} setSortText={setSortText} />
      {sortText}
      {searchText == '' ? (
        <JobListing jobs={jobs} />
      ) : (
        <JobListing jobs={filteredjobs} />
      )}
    </div>
  );
}
