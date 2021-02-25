import React from 'react';

export const CommentItem = ({
  comments: {
    id,
    link,
    avatar,
    author,
    date,
    text,
    likes,
    dislikes,
    replies,
    showReplies,
    flag,
  },
  handleShowReplies,
}) => (
  <div className="comment-block">
    <div className="comment-avatar-container">
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
    <div className="comment-info-container">
      <div className="comment-info">
        {
          flag && (<div className="comment-flag">
            <a href="#" className="flag-link">
              <i className="cv cvicon-cv-flag" />
            </a>
          </div>)
        }
        <a href="#" className="comment-person">
          {author}
        </a>
        <span className="comment-date">{`. ${date}`}</span>
      </div>
      <div className="comment-text">
        { text }
      </div>
      <div className="comment-short-info">
        <a className="comment-estimate comment-like">
          <span className="comment-circle"></span>
          <span>{likes}</span>
        </a>
        <a className="comment-estimate comment-dislike">
          <span className="comment-circle"></span>
          <span>{dislikes}</span>
        </a>
        <a className="comment-reply-btn">
          Reply
        </a>
      </div>
      {
        (replies && replies.length > 1 && !showReplies) && (
          <div className="comment-view-replies">
            <a 
              className="comment-view-btn"
              onClick={() => handleShowReplies(id)}
            >
              { `View all ${replies.length} replies` }
            </a>
          </div>
        )
      }
    </div>
  </div>
)
  
