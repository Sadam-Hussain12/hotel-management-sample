import React from "react";
import { palette } from "src/components/foundation/palette";

const SailboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.38477 20.4692C3.01046 21.1468 3.87599 21.5534 4.79699 21.6022C5.71799 21.6511 6.62167 21.3384 7.31554 20.7308C7.95767 21.3017 8.78704 21.6171 9.64631 21.6171C10.5056 21.6171 11.3349 21.3017 11.9771 20.7308C12.6192 21.3017 13.4486 21.6171 14.3078 21.6171C15.1671 21.6171 15.9965 21.3017 16.6386 20.7308C17.2807 21.3017 18.1101 21.6171 18.9694 21.6171C19.8286 21.6171 20.658 21.3017 21.3001 20.7308C21.9999 21.3385 22.9082 21.6508 23.8337 21.602C24.7592 21.5532 25.6297 21.1471 26.2617 20.4692"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3693 17.223L6.60007 18.2383C6.56669 18.2412 6.5342 18.2507 6.5045 18.2662C6.47479 18.2817 6.44846 18.303 6.427 18.3287C6.40555 18.3545 6.38941 18.3842 6.3795 18.4162C6.3696 18.4482 6.36613 18.4819 6.3693 18.5153C6.37275 18.552 6.38418 18.5876 6.40278 18.6195C6.42138 18.6513 6.4467 18.6788 6.47699 18.6999C7.61546 19.5691 10.9847 19.8229 14.8462 19.246C18.7078 18.6691 21.8539 17.423 22.6847 16.2691C22.7086 16.2455 22.7277 16.2173 22.7407 16.1863C22.7536 16.1553 22.7603 16.122 22.7603 16.0883C22.7603 16.0547 22.7536 16.0214 22.7407 15.9904C22.7277 15.9593 22.7086 15.9312 22.6847 15.9076C22.6534 15.8779 22.6151 15.8567 22.5734 15.8459C22.5317 15.8352 22.4879 15.8352 22.4462 15.846L14.8693 16.9999"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9385 2.36133C14.2487 2.62703 14.5392 2.91497 14.8077 3.22287C16.4769 5.11518 19.5769 10.0075 15.1154 16.9306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1535 15.1153L9.79199 14.2384L12.8535 4.16148L14.8074 3.24609"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0926 10.3536C18.0926 10.3536 13.7541 11.0459 10.2695 9.36133"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SailboardIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default SailboardIcon;
