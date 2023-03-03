const ShootingStar = () => {
  return (
    <svg
      width="225"
      height="187"
      viewBox="0 0 225 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_89_1147)">
        <circle
          cx="183"
          cy="145"
          r="12"
          fill="url(#paint0_radial_89_1147)"
          fillOpacity="0.5"
        />
      </g>
      <line
        x1="0.61714"
        y1="1.21315"
        x2="183.176"
        y2="144.396"
        stroke="url(#paint1_linear_89_1147)"
        strokeWidth="2"
      />
      <path
        d="M183 119L183.276 144.448L196 145L183.276 145.552L183 171L182.724 145.552L170 145L182.724 144.448L183 119Z"
        fill="white"
        fillOpacity="0.5"
      />
      <g filter="url(#filter1_f_89_1147)">
        <circle
          cx="183"
          cy="145"
          r="6"
          fill="url(#paint2_radial_89_1147)"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_89_1147"
          x="141"
          y="103"
          width="84"
          height="84"
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
            stdDeviation="15"
            result="effect1_foregroundBlur_89_1147"
          />
        </filter>
        <filter
          id="filter1_f_89_1147"
          x="175"
          y="137"
          width="16"
          height="16"
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
            stdDeviation="1"
            result="effect1_foregroundBlur_89_1147"
          />
        </filter>
        <radialGradient
          id="paint0_radial_89_1147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(183 145) rotate(90) scale(12)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_89_1147"
          x1="182.558"
          y1="145.183"
          x2="0"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B5BAEA" />
          <stop offset="1" stopColor="#B5BAEA" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_89_1147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(183 145) rotate(90) scale(6)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ShootingStar;
