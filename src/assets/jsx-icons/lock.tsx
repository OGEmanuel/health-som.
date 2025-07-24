const Lock = (props: { stroke?: string; className?: string }) => {
  const { stroke = '#ACACAC', className } = props;
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 9.99992H14.4C14.7314 9.99992 15 10.2685 15 10.5999V16.0666C15 16.398 14.7314 16.6666 14.4 16.6666H5.6C5.26863 16.6666 5 16.398 5 16.0666V10.5999C5 10.2685 5.26863 9.99992 5.6 9.99992H6.66667M13.3333 9.99992V6.66659C13.3333 5.55547 12.6667 3.33325 10 3.33325C7.33333 3.33325 6.66667 5.55547 6.66667 6.66659V9.99992M13.3333 9.99992H6.66667"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock;
