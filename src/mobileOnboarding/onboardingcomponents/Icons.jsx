import React from "react";

export const ArrowLeftIcon = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export const FingerprintIcon = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4C8.13 4 5 7.13 5 11M12 2C7.03 2 3 6.03 3 11M16.5 11C16.5 8.51 14.49 6.5 12 6.5C9.51 6.5 7.5 8.51 7.5 11M14.5 11C14.5 9.62 13.38 8.5 12 8.5C10.62 8.5 9.5 9.62 9.5 11M12 11.5C11.17 11.5 10.5 12.17 10.5 13V18C10.5 18.83 11.17 19.5 12 19.5C12.83 19.5 13.5 18.83 13.5 18V13C13.5 12.17 12.83 11.5 12 11.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14C16 15.1 15.1 16 14 16H13M8 14C8 15.1 8.9 16 10 16H11M18.5 11C18.5 7.41 15.59 4.5 12 4.5C8.41 4.5 5.5 7.41 5.5 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 21H13M10 21C10 21.55 10.45 22 11 22H13C13.55 22 14 21.55 14 21M9 20H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = ({
  className = "w-4 h-4",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
