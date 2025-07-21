const Hospital = (props: { className?: string; stroke?: string }) => {
  const { className, stroke = '#ACACAC' } = props;
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
        d="M5.23333 6.66667C5.5647 6.66667 5.83333 6.39804 5.83333 6.06667V3.1C5.83333 2.76863 6.10196 2.5 6.43333 2.5H13.5667C13.898 2.5 14.1667 2.76863 14.1667 3.1V6.06667C14.1667 6.39804 14.4353 6.66667 14.7667 6.66667H16.0667C16.398 6.66667 16.6667 6.9353 16.6667 7.26667V16.9C16.6667 17.2314 16.398 17.5 16.0667 17.5H3.93333C3.60196 17.5 3.33333 17.2314 3.33333 16.9V7.26667C3.33333 6.9353 3.60196 6.66667 3.93333 6.66667H5.23333Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M8.32683 6.66667H9.99349M11.6602 6.66667H9.99349M9.99349 6.66667V5M9.99349 6.66667V8.33333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 14.175L13.3417 14.1658"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 10.8416L13.3417 10.8324"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.8416L10.0083 10.8324"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 10.8416L6.67501 10.8324"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 14.175L6.67501 14.1658"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.175L10.0083 14.1658"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Hospital;
