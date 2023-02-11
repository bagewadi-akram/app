import React from 'react'
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Track({heading,total,percentage,overview}) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h5>{heading}</h5>
      <h3>
        <strong>{total}</strong>
      </h3>
      <p className="d-flex align-items-end">
        <strong>
          {overview === "up" ? (
            <strong className="text-success">
              <BarChartIcon />
              <TrendingUpIcon />
            </strong>
          ) : (
            <strong className="text-danger">
              <BarChartIcon />
              <TrendingDownIcon />
            </strong>
          )}
        </strong>
        {percentage} (30 days)
      </p>
    </div>
  );
}

export default Track