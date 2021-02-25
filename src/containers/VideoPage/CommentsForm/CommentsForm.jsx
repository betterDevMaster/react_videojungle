import React from 'react';
// import { TextField } from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles";

import './commentsform.scss';

// const useStyles = makeStyles({
//   root: {
//     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#eceff0"
//     },
//     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#eceff0"
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#eceff0",
//     }
//   }
// });

export const CommentsForm = ({
  commentsForm: {
    avatar,
    countComments,
    link,
  }
}) => {
  // const classes = useStyles();
  return (
  <div className="comments-form">
    <div className="comments-header">
      <i className="cv cvicon-cv-comment comments-header-icon"></i>
      <span className="comments-header-count">
        {countComments}
      </span>
      <span className="comments-header-text">
        Comments
      </span>
    </div>
    <div className="comments-form-container">
      <div className="comments-avatar-container">
        <a
          href={link}
          className="comment-avatar"
        >
          <img
            className="comment-avatar-img"
            src={avatar}
          />
        </a>
      </div>
      <div className="comments-form-block">
        <textarea
          placeholder="Share what you think?"
          className="comments-form-textarea"
        />
        {/* <TextField
          variant="outlined"
          placeholder="Share what you think?"
          className={classes.root}
          rows="3"
          multiline
        /> */}
        <button
          type="submit"
          className="comments-send-btn"
        >
          <i className="cv cvicon-cv-add-comment"></i>
        </button>
      </div>
    </div>
  </div>
)}