"use client"
import { useState } from 'react';

const ReadMore = ({ text = '', maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const displayText = showFullText ? text : text.slice(0, maxLength);

  return (
    <div>
      <p className="mb-4">{displayText}</p>
      {text.length > maxLength && (
        <button
          className="text-blue-500 underline cursor-pointer focus:outline-none"
          onClick={toggleReadMore}
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;