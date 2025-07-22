const Eye = (props: { className?: string }) => {
  const { className } = props;
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
        d="M2.5 10.8333C5.5 4.16665 14.5 4.16665 17.5 10.8333"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.1667C8.61929 14.1667 7.5 13.0474 7.5 11.6667C7.5 10.286 8.61929 9.16669 10 9.16669C11.3807 9.16669 12.5 10.286 12.5 11.6667C12.5 13.0474 11.3807 14.1667 10 14.1667Z"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Eye;
