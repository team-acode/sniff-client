import React, { useState } from 'react';

interface OnelineCommentProps {
  onChange: (comment: string) => void;
}

const OnelineComment = ({ onChange }: OnelineCommentProps) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
    onChange(newComment);
  };

  return (
    <div className="text-acodeblack">
      <div className="flex flex-row mx-4 justify-between">
        <div className="review-2  mb-5">한줄 리뷰</div>
        <div className="body2 text-right text-acodegray-400">
          {comment.length}/25
        </div>
      </div>
      <div className="flex mx-4 justify-center items-center">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          className="body2 font-medium w-full h-10 pl-2.5 bg-acodegray-50 placeholder:text-acodegray-300"
          placeholder="한줄 리뷰는 공백 포함 최대 25자 쓸 수 있어요"
          maxLength={25}
        />
      </div>
    </div>
  );
};

export default OnelineComment;
