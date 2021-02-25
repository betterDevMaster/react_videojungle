import React, { useEffect, useState } from 'react';
import { CreateTemplates } from './CreateTemplates';

import './commentlist.scss';

export const CommentsList = ({
  comments,
}) => {

  const [commentsList, setCommentsList] = useState(null);

  useEffect(() => {
    const newComments = comments.map(item => {
      return item.replies.length > 1 ? { ...item, showReplies: false } : item;
    })
    setCommentsList(newComments);
  }, [])

  const onShowReplies = id => {
    const index = commentsList.findIndex(item => item.id === id);
    const newCommentsList = [...commentsList];
    newCommentsList[index].showReplies = true;
    setCommentsList(newCommentsList);
  }

  return (
    <div className="comments-list">
      <CreateTemplates
        handleShowReplies={onShowReplies} 
        data={commentsList}
      /> 
      {
        <div className="comments-loadmore-container">
          <button className="loadmore-btn hidden-xs">
            Load more Comments
          </button>
          <button className="loadmore-mobile-btn">
            <i className="cv cvicon-cv-next loadmore-icon"></i>
          </button>
        </div>
      }
    </div>
  )
}
