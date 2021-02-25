import React from 'react';
import { CommentsList } from './CommentsList';

export const CommentsComponent = ({
  comments,
}) => {

  return (
    <CommentsList comments={comments} />
  )
}