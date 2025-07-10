import React, { useState } from 'react';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold text-lg">{title}</h4>
        <button>
          {isOpen ? (
            <RiSubtractFill className="text-xl text-accent" />
          ) : (
            <RiAddFill className="text-xl text-accent" />
          )}
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-sm text-secondary">{description}</p>
      )}
    </div>
  );
};

export default FaqItem;
