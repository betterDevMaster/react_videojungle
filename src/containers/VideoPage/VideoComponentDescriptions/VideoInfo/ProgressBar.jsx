import React from 'react';

export const ProgressBar = ({
  progressPercent,
}) => (
  <div className="video-views-progress">
    <div
      className="video-views-progress-bar"
      style={{width: `${progressPercent}%`}}
    />
  </div>
)