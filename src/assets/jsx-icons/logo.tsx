const Logo = (props: { className?: string }) => {
  const { className } = props;
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.57141"
        y="13.7144"
        width="22.8571"
        height="13.7143"
        rx="2"
        fill="#5842B6"
      />
      <rect
        x="4.57141"
        y="4.57153"
        width="22.8571"
        height="5.71429"
        rx="2"
        fill="#5842B6"
      />
    </svg>
  );
};

export default Logo;
