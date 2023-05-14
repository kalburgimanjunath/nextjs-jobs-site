import React, { useState, useEffect } from 'react';
import Link from 'next/link';
export default function JobListing({ jobs }) {
  const JobsTemplate = ({ item }) => {
    return (
      <div className="list-item">
        <Link href={`/id:${item.id}`}>
          <div>
            <h6>{item.job_title}</h6> at {item.company_name}
          </div>
          <div>{item.company_address}</div>
          <div>{item.location}</div>
          <div>{item.notice_period}</div>
          <div>{item.salary_range}</div>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <h3>Latest jobs</h3>
      {jobs &&
        jobs.map((item) => {
          return (
            <div className="listview">
              <JobsTemplate item={item} />
            </div>
          );
        })}
    </div>
  );
}
