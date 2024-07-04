import React from 'react';

interface IProps {
  page: number;
  total: number;
  isLoading: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Paginator: React.FC<IProps> = ({
  isLoading,
  onClickNext,
  onClickPrev,
  page,
  total,
}) => {
  return (
    <div className="flex items-center justify-center mt-8  md:w-auto md:m-auto">
    <div className="flex items-center gap-4 ">
        <button
          className={`px-4 py-2 rounded-md ${
            page === 1 || isLoading
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
          disabled={page === 1 || isLoading}
          onClick={onClickPrev}
        >
          <svg
            className="w-5 h-5 inline-block align-middle mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Prev
        </button>
        <p className="text-lg font-semibold text-gray-800 text-center">
          Page <span className="text-primary">{page}</span> of{' '}
          <span className="text-primary">{total}</span>
        </p>
        <button
          className={`px-4 py-2 rounded-md ${
            page === total || isLoading
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
          disabled={page === total || isLoading}
          onClick={onClickNext}
        >
          Next
          <svg
            className="w-5 h-5 inline-block align-middle ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginator;
