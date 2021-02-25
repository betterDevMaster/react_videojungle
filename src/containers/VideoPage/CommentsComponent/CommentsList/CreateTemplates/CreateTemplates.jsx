import React from 'react';
import { CommentItem } from '../CommentItem';

export const CreateTemplates = ({
  data,
  handleShowReplies,
}) => {
  return data && (
    data.map(item => (
      <div className="comment-wrapper">
        <CommentItem
          comments={ item }
          handleShowReplies={handleShowReplies}
        />
        {
          (item.showReplies && item.replies.length > 0) && (
            <div className="comment-replies-container">
              {item.replies.map(item => (
                <CommentItem comments={ item } />
              ))}
            </div>
          )
        }
        {
          (!item.showReplies && item.replies.length > 0) && (
            <div className="comment-replies-container">
              <CommentItem comments={ item.replies[0] } />
            </div>
          )
        }
      </div>
    ))
  )
}