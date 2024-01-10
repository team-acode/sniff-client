import React, { useState } from 'react';

interface TextReviewProps {
  onChange: (text: string) => void;
}

const TextReview = ({ onChange }: TextReviewProps) => {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    onChange(newText);
  };
  return (
    <div>
      <div className="review-2">텍스트 리뷰</div>
      <div className="bg-acodegray-50 rounded justify-center item-center">
        <textarea
          value={text}
          onChange={handleTextChange}
          maxLength={1000}
          className="w-full bg-acodegray-50 p-2 mt-2 body2"
        ></textarea>
        <div className="text-right caption1 mr-2 text-acodegray-700">
          {text.length}/<span className="text-acodegray-300">1000</span>
        </div>
      </div>
    </div>
  );
};

export default TextReview;