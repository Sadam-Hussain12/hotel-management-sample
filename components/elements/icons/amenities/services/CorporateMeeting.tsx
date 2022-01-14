import React from "react";
import { palette } from "src/components/foundation/palette";

const CorporateMeetingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6H5.28714V7.28714H4V6Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6H7.28714V7.28714H6V6Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8H5.28714V9.28714H4V8Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0323 15.2258C21.5658 15.2258 22 14.7916 22 14.2581V9.29099C22 8.65291 21.5235 8.10383 20.8922 8.01358L19.7419 7.84929V7.30966C20.1368 6.95511 20.3871 6.44257 20.3871 5.87097V5.22581C20.3871 4.15836 19.5191 3.29032 18.4516 3.29032C17.3842 3.29032 16.5161 4.15836 16.5161 5.22581V5.87097C16.5161 6.44226 16.7664 6.95479 17.1613 7.30966V7.84929L15.3536 8.10777L14.2433 6.83871H14.2581V5.22581H14.9032V3.29032H11.4884L10.1981 2H6.70515L5.41483 3.29032H2.00001V5.22581H2.64517V12.9677H2.00001V14.9032H5.22581V15.8103L3.06965 21.3548H2V22H22V21.3548H20.7097V15.1664C20.811 15.2027 20.9187 15.2258 21.0323 15.2258L21.0323 15.2258ZM18.757 11.2384L18.4516 11.5438L18.1462 11.2384L18.4141 9.09452C18.4267 9.09484 18.4387 9.09673 18.4516 9.09673C18.4645 9.09673 18.4765 9.09484 18.4891 9.09452L18.757 11.2384ZM17.1612 5.22583C17.1612 4.5142 17.7399 3.93551 18.4516 3.93551C19.1632 3.93551 19.7419 4.5142 19.7419 5.22583V5.87099C19.7419 6.58262 19.1632 7.16131 18.4516 7.16131C17.7399 7.16131 17.1612 6.58262 17.1612 5.87099V5.22583ZM18.4516 7.80633C18.6781 7.80633 18.8945 7.76506 19.0967 7.6934V8.04023C19.0167 8.16372 18.7945 8.45149 18.4516 8.45149C18.108 8.45149 17.8855 8.16246 17.8064 8.04023V7.6934C18.0087 7.76506 18.2251 7.80633 18.4516 7.80633ZM17.3247 8.47721C17.4225 8.60904 17.5761 8.77947 17.787 8.90784L17.4666 11.471L18.4515 12.4559L19.4364 11.471L19.116 8.90784C19.3273 8.77915 19.4808 8.60904 19.5783 8.47721L20.8009 8.65173C21.1167 8.69693 21.3547 8.97163 21.3547 9.29043V14.2578C21.3547 14.4355 21.2098 14.5804 21.0321 14.5804C20.8545 14.5804 20.7096 14.4355 20.7096 14.2578V9.7417H20.0644V12.9675H16.8386V9.7417H14.8905C14.7921 9.7417 14.7002 9.69744 14.6387 9.62073L12.3976 6.81941C12.3492 6.75877 12.3225 6.68269 12.3225 6.60488V6.53621C12.3225 6.34719 12.4764 6.1933 12.6654 6.1933C12.7644 6.1933 12.8586 6.23583 12.9237 6.31033L15.098 8.79521L17.3247 8.47721ZM7.48376 16.1938V21.355H5.05212L7.05927 16.1938H7.48376ZM8.12914 16.1938H8.7743V21.355H8.12914V16.1938ZM9.41948 16.1938H9.84397L11.8511 21.355H9.41948V16.1938ZM10.5361 16.1938H11.1341L13.1413 21.355H12.5432L10.5361 16.1938ZM11.6773 15.8102V14.903H14.9031V12.9676H14.2579V10.1466C14.4328 10.2989 14.6541 10.3869 14.8905 10.3869H16.1934V21.3547H13.8334L11.6773 15.8102ZM16.8387 13.6131H18.129V21.355H16.8387V13.6131ZM2.64518 3.93549H5.68198L6.9723 2.64517H9.93097L11.2213 3.93549H14.2581V4.58065H2.64518L2.64518 3.93549ZM3.29036 5.22585H13.6129V6.11846L13.4094 5.88582C13.2217 5.67129 12.9506 5.54843 12.6655 5.54843C12.121 5.54843 11.6775 5.99198 11.6775 6.53649V6.60517C11.6775 6.82836 11.7542 7.04777 11.8939 7.2226L13.6129 9.37136V12.9678H3.29036V5.22585ZM2.64519 13.6131H14.2581V14.2582H2.64519V13.6131ZM11.0323 14.9034V15.5486H5.87104V14.9034H11.0323ZM5.76893 16.1938H6.36699L4.35984 21.355H3.76178L5.76893 16.1938ZM18.7742 21.355V13.6131H20.0645V21.355H18.7742Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0322 8.45117C9.96472 8.45117 9.09668 9.31921 9.09668 10.3867C9.09668 11.4541 9.96472 12.3221 11.0322 12.3221C12.0996 12.3221 12.9676 11.4541 12.9676 10.3867C12.9676 9.31921 12.0996 8.45117 11.0322 8.45117ZM10.7095 9.14207V10.064H9.78758C9.90493 9.61271 10.2582 9.25941 10.7095 9.14207ZM9.78758 10.709H10.7095V11.6309C10.2582 11.5135 9.90493 11.1602 9.78758 10.709ZM11.3548 11.631V9.14207C11.9097 9.28618 12.3225 9.78723 12.3225 10.3866C12.3225 10.9859 11.9097 11.4869 11.3548 11.631V11.631Z"
        fill={fill}
      />
    </svg>
  );
};

CorporateMeetingIcon.defaultProps = {
  fill: palette.grey?.[500],
};

export default CorporateMeetingIcon;
