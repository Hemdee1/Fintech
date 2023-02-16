const ShieldIconHover = () => {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_30_249)">
        <g clip-path="url(#clip0_30_249)">
          <rect
            width="88"
            height="88"
            rx="16"
            fill="#1B2A95"
            fill-opacity="0.1"
          />
          <g filter="url(#filter1_f_30_249)">
            <circle
              cx="43.5"
              cy="2.5"
              r="28.5"
              fill="url(#paint0_radial_30_249)"
            />
          </g>
          <path
            opacity="0.4"
            d="M41.9201 24.1199L30.9201 28.2399C28.8201 29.0399 27.1001 31.5199 27.1001 33.7799V49.9799C27.1001 51.5999 28.1601 53.7399 29.4601 54.6999L40.4601 62.9199C42.4001 64.3799 45.5801 64.3799 47.5201 62.9199L58.5201 54.6999C59.8201 53.7199 60.8801 51.5999 60.8801 49.9799V33.7799C60.8801 31.5399 59.1601 29.0399 57.0601 28.2599L46.0601 24.1399C44.9401 23.6999 43.0601 23.6999 41.9201 24.1199Z"
            fill="#6F7FEF"
          />
          <path
            d="M41.32 48.46C40.94 48.46 40.56 48.32 40.26 48.02L37.04 44.8C36.46 44.22 36.46 43.26 37.04 42.68C37.62 42.1 38.58 42.1 39.16 42.68L41.32 44.84L48.86 37.3C49.44 36.72 50.4 36.72 50.98 37.3C51.56 37.88 51.56 38.84 50.98 39.42L42.38 48.02C42.08 48.32 41.7 48.46 41.32 48.46Z"
            fill="#6F7FEF"
          />
        </g>
        <rect
          x="0.5"
          y="0.5"
          width="87"
          height="87"
          rx="15.5"
          stroke="url(#paint1_linear_30_249)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_30_249"
          x="-8"
          y="-8"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_30_249"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_30_249"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_30_249"
          x="-65"
          y="-106"
          width="217"
          height="217"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40"
            result="effect1_foregroundBlur_30_249"
          />
        </filter>
        <radialGradient
          id="paint0_radial_30_249"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(43.5 2.5) rotate(90) scale(28.5)"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_30_249"
          x1="0"
          y1="0"
          x2="88"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BBBEE1" />
          <stop offset="1" stopColor="#BBBEE1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_30_249">
          <rect width="88" height="88" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShieldIconHover;
