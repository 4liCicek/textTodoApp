import React from 'react';

const TodoStatus = ({count}) => {
  return (
    <p>{count} {count > 1 ? "jobs" : "job"} left comments</p>
  )
}

export default TodoStatus;
