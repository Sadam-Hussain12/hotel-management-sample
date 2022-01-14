import React from "react";
import { palette } from "src/components/foundation/palette";

const AirConditioningIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path d="M21.6 11.608H19.944L20.344 11.208C20.386 11.1732 20.4202 11.13 20.4445 11.0812C20.4688 11.0323 20.4827 10.979 20.4852 10.9245C20.4877 10.87 20.4789 10.8156 20.4592 10.7648C20.4395 10.7139 20.4094 10.6678 20.3708 10.6292C20.3322 10.5906 20.2861 10.5606 20.2352 10.5409C20.1844 10.5212 20.13 10.5123 20.0755 10.5148C20.021 10.5173 19.9677 10.5312 19.9188 10.5555C19.87 10.5798 19.8268 10.614 19.792 10.656L18.832 11.608H17.12L18.304 10.424C18.3768 10.3506 18.4176 10.2514 18.4176 10.148C18.4176 10.0446 18.3768 9.94541 18.304 9.872C18.2292 9.79871 18.1287 9.75765 18.024 9.75765C17.9193 9.75765 17.8188 9.79871 17.744 9.872L16 11.608H12.936L15.104 9.44H17.6C17.7061 9.44 17.8078 9.39785 17.8828 9.32284C17.9579 9.24783 18 9.14609 18 9.04C18 8.93392 17.9579 8.83217 17.8828 8.75715C17.8078 8.68214 17.7061 8.64 17.6 8.64H15.928L17.136 7.43199H19.592C19.6981 7.43199 19.7998 7.38986 19.8749 7.31484C19.9499 7.23983 19.992 7.13808 19.992 7.03199C19.992 6.92591 19.9499 6.82417 19.8749 6.74916C19.7998 6.67414 19.6981 6.63199 19.592 6.63199H17.92L19.096 5.464C19.1328 5.42723 19.1619 5.38358 19.1818 5.33553C19.2017 5.28749 19.212 5.236 19.212 5.184C19.212 5.132 19.2017 5.08051 19.1818 5.03247C19.1619 4.98443 19.1328 4.94077 19.096 4.904C19.0592 4.86723 19.0156 4.83806 18.9675 4.81816C18.9195 4.79826 18.868 4.78802 18.816 4.78802C18.764 4.78802 18.7125 4.79826 18.6645 4.81816C18.6164 4.83806 18.5728 4.86723 18.536 4.904L17.368 6.08001V4.392C17.368 4.28592 17.3259 4.18417 17.2509 4.10916C17.1758 4.03414 17.0741 3.992 16.968 3.992C16.8619 3.992 16.7602 4.03414 16.6852 4.10916C16.6101 4.18417 16.568 4.28592 16.568 4.392V6.848L15.36 8.064V6.4C15.36 6.29391 15.3179 6.19218 15.2428 6.11716C15.1678 6.04215 15.0661 6 14.96 6C14.8539 6 14.7522 6.04215 14.6771 6.11716C14.6021 6.19218 14.56 6.29391 14.56 6.4V8.85601L12.384 11.04V8L14.12 6.264C14.1933 6.18923 14.2344 6.0887 14.2344 5.984C14.2344 5.8793 14.1933 5.77878 14.12 5.704C14.0466 5.63121 13.9474 5.59037 13.844 5.59037C13.7406 5.59037 13.6414 5.63121 13.568 5.704L12.384 6.888V5.176L14.12 3.44C14.1933 3.36523 14.2344 3.2647 14.2344 3.16C14.2344 3.0553 14.1933 2.95478 14.12 2.88C14.0466 2.80721 13.9474 2.76637 13.844 2.76637C13.7406 2.76637 13.6414 2.80721 13.568 2.88L12.384 4.064V2.4C12.384 2.29391 12.3419 2.19218 12.2668 2.11716C12.1918 2.04215 12.0901 2 11.984 2C11.8779 2 11.7762 2.04215 11.7012 2.11716C11.6261 2.19218 11.584 2.29391 11.584 2.4V4.05601L10.4 2.864C10.3248 2.8016 10.2291 2.76952 10.1315 2.77404C10.0339 2.77855 9.9415 2.81935 9.87242 2.88843C9.80334 2.95751 9.76255 3.0499 9.75803 3.14749C9.75351 3.24508 9.7856 3.34084 9.848 3.416L11.584 5.16V6.872L10.4 5.688C10.3266 5.61521 10.2274 5.57437 10.124 5.57437C10.0206 5.57437 9.92141 5.61521 9.848 5.688C9.77471 5.76277 9.73365 5.8633 9.73365 5.96801C9.73365 6.07271 9.77471 6.17323 9.848 6.248L11.584 7.984V11.056L9.416 8.88V6.4C9.416 6.29391 9.37386 6.19218 9.29884 6.11716C9.22383 6.04215 9.12209 6 9.016 6C8.90992 6 8.80817 6.04215 8.73315 6.11716C8.65814 6.19218 8.616 6.29391 8.616 6.4V8.08001L7.408 6.864V4.4C7.408 4.29391 7.36586 4.19218 7.29084 4.11716C7.21583 4.04215 7.11408 4 7.008 4C6.90191 4 6.80017 4.04215 6.72516 4.11716C6.65014 4.19218 6.608 4.29391 6.608 4.4V6.08001L5.44 4.904C5.40323 4.86723 5.35958 4.83806 5.31154 4.81816C5.26349 4.79826 5.212 4.78802 5.16 4.78802C5.108 4.78802 5.0565 4.79826 5.00846 4.81816C4.96042 4.83806 4.91677 4.86723 4.88 4.904C4.84323 4.94077 4.81406 4.98443 4.79417 5.03247C4.77427 5.08051 4.76403 5.132 4.76403 5.184C4.76403 5.236 4.77427 5.28749 4.79417 5.33553C4.81406 5.38358 4.84323 5.42723 4.88 5.464L6.05601 6.63199H4.36801C4.26192 6.63199 4.16017 6.67414 4.08516 6.74916C4.01014 6.82417 3.96801 6.92591 3.96801 7.03199C3.96801 7.13808 4.01014 7.23983 4.08516 7.31484C4.16017 7.38986 4.26192 7.43199 4.36801 7.43199H6.824L8.04 8.64H6.4C6.29391 8.64 6.19218 8.68214 6.11716 8.75715C6.04215 8.83217 6 8.93392 6 9.04C6 9.14609 6.04215 9.24783 6.11716 9.32284C6.19218 9.39785 6.29391 9.44 6.4 9.44H8.85601L11.032 11.608H8L6.264 9.872C6.18923 9.79871 6.0887 9.75765 5.984 9.75765C5.8793 9.75765 5.77878 9.79871 5.704 9.872C5.63121 9.94541 5.59037 10.0446 5.59037 10.148C5.59037 10.2514 5.63121 10.3506 5.704 10.424L6.888 11.608H5.184L3.448 9.872C3.37323 9.79871 3.27271 9.75765 3.16801 9.75765C3.0633 9.75765 2.96277 9.79871 2.888 9.872C2.81521 9.94541 2.77437 10.0446 2.77437 10.148C2.77437 10.2514 2.81521 10.3506 2.888 10.424L4.072 11.616H2.4C2.29391 11.616 2.19218 11.6581 2.11716 11.7332C2.04215 11.8082 2 11.9099 2 12.016C2 12.1221 2.04215 12.2238 2.11716 12.2989C2.19218 12.3739 2.29391 12.416 2.4 12.416H4.05601L2.864 13.6C2.79121 13.6734 2.75037 13.7726 2.75037 13.876C2.75037 13.9794 2.79121 14.0786 2.864 14.152C2.90042 14.189 2.9441 14.218 2.99229 14.2373C3.04047 14.2566 3.09212 14.2657 3.14399 14.264C3.24543 14.2618 3.34242 14.2219 3.416 14.152L5.16 12.416H6.872L5.688 13.6C5.61521 13.6734 5.57437 13.7726 5.57437 13.876C5.57437 13.9794 5.61521 14.0786 5.688 14.152C5.72441 14.189 5.7681 14.218 5.81628 14.2373C5.86447 14.2566 5.91613 14.2657 5.96801 14.264C6.07206 14.263 6.17196 14.223 6.248 14.152L7.984 12.416H11.056L8.88 14.584H6.4C6.29391 14.584 6.19218 14.6261 6.11716 14.7011C6.04215 14.7762 6 14.8779 6 14.984C6 15.0901 6.04215 15.1918 6.11716 15.2668C6.19218 15.3419 6.29391 15.384 6.4 15.384H8.08001L6.864 16.592H4.4C4.29391 16.592 4.19218 16.6341 4.11716 16.7092C4.04215 16.7842 4 16.8859 4 16.992C4 17.0981 4.04215 17.1998 4.11716 17.2749C4.19218 17.3499 4.29391 17.392 4.4 17.392H6.08001L4.904 18.56C4.83071 18.6348 4.78966 18.7353 4.78966 18.84C4.78966 18.9447 4.83071 19.0452 4.904 19.12C4.94042 19.157 4.98409 19.186 5.03228 19.2053C5.08046 19.2246 5.13212 19.2337 5.184 19.232C5.28805 19.231 5.38796 19.191 5.464 19.12L6.63199 17.944V19.624C6.63199 19.7301 6.67414 19.8318 6.74916 19.9068C6.82417 19.9819 6.92591 20.024 7.03199 20.024C7.13808 20.024 7.23983 19.9819 7.31484 19.9068C7.38986 19.8318 7.43199 19.7301 7.43199 19.624V17.168L8.64 15.952V17.6C8.64 17.7061 8.68214 17.8078 8.75715 17.8828C8.83217 17.9579 8.93392 18 9.04 18C9.14609 18 9.24783 17.9579 9.32284 17.8828C9.39785 17.8078 9.44 17.7061 9.44 17.6V15.12L11.608 12.944V16L9.872 17.736C9.79871 17.8108 9.75765 17.9113 9.75765 18.016C9.75765 18.1207 9.79871 18.2212 9.872 18.296C9.94541 18.3688 10.0446 18.4096 10.148 18.4096C10.2514 18.4096 10.3506 18.3688 10.424 18.296L11.608 17.112V18.824L9.872 20.56C9.79871 20.6348 9.75765 20.7353 9.75765 20.84C9.75765 20.9447 9.79871 21.0452 9.872 21.12C9.94541 21.1928 10.0446 21.2336 10.148 21.2336C10.2514 21.2336 10.3506 21.1928 10.424 21.12L11.608 19.936V21.6C11.608 21.7061 11.6501 21.8078 11.7252 21.8828C11.8002 21.9579 11.9019 22 12.008 22C12.1141 22 12.2158 21.9579 12.2908 21.8828C12.3659 21.8078 12.408 21.7061 12.408 21.6V19.944L13.592 21.128C13.6275 21.164 13.6699 21.1925 13.7166 21.2117C13.7633 21.2309 13.8135 21.2406 13.864 21.24C13.968 21.239 14.068 21.199 14.144 21.128C14.2168 21.0546 14.2576 20.9554 14.2576 20.852C14.2576 20.7486 14.2168 20.6494 14.144 20.576L12.416 18.832V17.12L13.6 18.304C13.6736 18.3739 13.7706 18.4138 13.872 18.416C13.9761 18.415 14.076 18.375 14.152 18.304C14.2253 18.2292 14.2663 18.1287 14.2663 18.024C14.2663 17.9193 14.2253 17.8188 14.152 17.744L12.392 16V12.936L14.56 15.104V17.6C14.56 17.7061 14.6021 17.8078 14.6771 17.8828C14.7522 17.9579 14.8539 18 14.96 18C15.0661 18 15.1678 17.9579 15.2428 17.8828C15.3179 17.8078 15.36 17.7061 15.36 17.6V15.928L16.568 17.136V19.592C16.568 19.6981 16.6101 19.7998 16.6852 19.8749C16.7602 19.9499 16.8619 19.992 16.968 19.992C17.0741 19.992 17.1758 19.9499 17.2509 19.8749C17.3259 19.7998 17.368 19.6981 17.368 19.592V17.92L18.536 19.096C18.5724 19.133 18.6161 19.162 18.6643 19.1813C18.7125 19.2006 18.7641 19.2097 18.816 19.208C18.92 19.207 19.02 19.167 19.096 19.096C19.1693 19.0212 19.2104 18.9207 19.2104 18.816C19.2104 18.7113 19.1693 18.6108 19.096 18.536L17.92 17.368H19.6C19.7061 17.368 19.8078 17.3259 19.8828 17.2509C19.9579 17.1758 20 17.0741 20 16.968C20 16.8619 19.9579 16.7602 19.8828 16.6852C19.8078 16.6101 19.7061 16.568 19.6 16.568H17.144L15.928 15.36H17.6C17.7061 15.36 17.8078 15.3179 17.8828 15.2428C17.9579 15.1678 18 15.0661 18 14.96C18 14.8539 17.9579 14.7522 17.8828 14.6771C17.8078 14.6021 17.7061 14.56 17.6 14.56H15.12L12.944 12.384H16L17.736 14.12C17.7724 14.157 17.8161 14.186 17.8643 14.2053C17.9125 14.2246 17.9641 14.2337 18.016 14.232C18.12 14.231 18.22 14.191 18.296 14.12C18.3688 14.0466 18.4096 13.9474 18.4096 13.844C18.4096 13.7406 18.3688 13.6414 18.296 13.568L17.112 12.384H18.824L20.568 14.12C20.6035 14.156 20.6459 14.1845 20.6926 14.2037C20.7393 14.223 20.7895 14.2326 20.84 14.232C20.944 14.231 21.044 14.191 21.12 14.12C21.1928 14.0466 21.2336 13.9474 21.2336 13.844C21.2336 13.7406 21.1928 13.6414 21.12 13.568L19.936 12.384H21.6C21.7061 12.384 21.8078 12.3419 21.8828 12.2668C21.9579 12.1918 22 12.0901 22 11.984C22 11.8779 21.9579 11.7762 21.8828 11.7012C21.8078 11.6261 21.7061 11.584 21.6 11.584V11.608Z" />
      </mask>
      <path
        d="M21.6 11.608H19.944L20.344 11.208C20.386 11.1732 20.4202 11.13 20.4445 11.0812C20.4688 11.0323 20.4827 10.979 20.4852 10.9245C20.4877 10.87 20.4789 10.8156 20.4592 10.7648C20.4395 10.7139 20.4094 10.6678 20.3708 10.6292C20.3322 10.5906 20.2861 10.5606 20.2352 10.5409C20.1844 10.5212 20.13 10.5123 20.0755 10.5148C20.021 10.5173 19.9677 10.5312 19.9188 10.5555C19.87 10.5798 19.8268 10.614 19.792 10.656L18.832 11.608H17.12L18.304 10.424C18.3768 10.3506 18.4176 10.2514 18.4176 10.148C18.4176 10.0446 18.3768 9.94541 18.304 9.872C18.2292 9.79871 18.1287 9.75765 18.024 9.75765C17.9193 9.75765 17.8188 9.79871 17.744 9.872L16 11.608H12.936L15.104 9.44H17.6C17.7061 9.44 17.8078 9.39785 17.8828 9.32284C17.9579 9.24783 18 9.14609 18 9.04C18 8.93392 17.9579 8.83217 17.8828 8.75715C17.8078 8.68214 17.7061 8.64 17.6 8.64H15.928L17.136 7.43199H19.592C19.6981 7.43199 19.7998 7.38986 19.8749 7.31484C19.9499 7.23983 19.992 7.13808 19.992 7.03199C19.992 6.92591 19.9499 6.82417 19.8749 6.74916C19.7998 6.67414 19.6981 6.63199 19.592 6.63199H17.92L19.096 5.464C19.1328 5.42723 19.1619 5.38358 19.1818 5.33553C19.2017 5.28749 19.212 5.236 19.212 5.184C19.212 5.132 19.2017 5.08051 19.1818 5.03247C19.1619 4.98443 19.1328 4.94077 19.096 4.904C19.0592 4.86723 19.0156 4.83806 18.9675 4.81816C18.9195 4.79826 18.868 4.78802 18.816 4.78802C18.764 4.78802 18.7125 4.79826 18.6645 4.81816C18.6164 4.83806 18.5728 4.86723 18.536 4.904L17.368 6.08001V4.392C17.368 4.28592 17.3259 4.18417 17.2509 4.10916C17.1758 4.03414 17.0741 3.992 16.968 3.992C16.8619 3.992 16.7602 4.03414 16.6852 4.10916C16.6101 4.18417 16.568 4.28592 16.568 4.392V6.848L15.36 8.064V6.4C15.36 6.29391 15.3179 6.19218 15.2428 6.11716C15.1678 6.04215 15.0661 6 14.96 6C14.8539 6 14.7522 6.04215 14.6771 6.11716C14.6021 6.19218 14.56 6.29391 14.56 6.4V8.85601L12.384 11.04V8L14.12 6.264C14.1933 6.18923 14.2344 6.0887 14.2344 5.984C14.2344 5.8793 14.1933 5.77878 14.12 5.704C14.0466 5.63121 13.9474 5.59037 13.844 5.59037C13.7406 5.59037 13.6414 5.63121 13.568 5.704L12.384 6.888V5.176L14.12 3.44C14.1933 3.36523 14.2344 3.2647 14.2344 3.16C14.2344 3.0553 14.1933 2.95478 14.12 2.88C14.0466 2.80721 13.9474 2.76637 13.844 2.76637C13.7406 2.76637 13.6414 2.80721 13.568 2.88L12.384 4.064V2.4C12.384 2.29391 12.3419 2.19218 12.2668 2.11716C12.1918 2.04215 12.0901 2 11.984 2C11.8779 2 11.7762 2.04215 11.7012 2.11716C11.6261 2.19218 11.584 2.29391 11.584 2.4V4.05601L10.4 2.864C10.3248 2.8016 10.2291 2.76952 10.1315 2.77404C10.0339 2.77855 9.9415 2.81935 9.87242 2.88843C9.80334 2.95751 9.76255 3.0499 9.75803 3.14749C9.75351 3.24508 9.7856 3.34084 9.848 3.416L11.584 5.16V6.872L10.4 5.688C10.3266 5.61521 10.2274 5.57437 10.124 5.57437C10.0206 5.57437 9.92141 5.61521 9.848 5.688C9.77471 5.76277 9.73365 5.8633 9.73365 5.96801C9.73365 6.07271 9.77471 6.17323 9.848 6.248L11.584 7.984V11.056L9.416 8.88V6.4C9.416 6.29391 9.37386 6.19218 9.29884 6.11716C9.22383 6.04215 9.12209 6 9.016 6C8.90992 6 8.80817 6.04215 8.73315 6.11716C8.65814 6.19218 8.616 6.29391 8.616 6.4V8.08001L7.408 6.864V4.4C7.408 4.29391 7.36586 4.19218 7.29084 4.11716C7.21583 4.04215 7.11408 4 7.008 4C6.90191 4 6.80017 4.04215 6.72516 4.11716C6.65014 4.19218 6.608 4.29391 6.608 4.4V6.08001L5.44 4.904C5.40323 4.86723 5.35958 4.83806 5.31154 4.81816C5.26349 4.79826 5.212 4.78802 5.16 4.78802C5.108 4.78802 5.0565 4.79826 5.00846 4.81816C4.96042 4.83806 4.91677 4.86723 4.88 4.904C4.84323 4.94077 4.81406 4.98443 4.79417 5.03247C4.77427 5.08051 4.76403 5.132 4.76403 5.184C4.76403 5.236 4.77427 5.28749 4.79417 5.33553C4.81406 5.38358 4.84323 5.42723 4.88 5.464L6.05601 6.63199H4.36801C4.26192 6.63199 4.16017 6.67414 4.08516 6.74916C4.01014 6.82417 3.96801 6.92591 3.96801 7.03199C3.96801 7.13808 4.01014 7.23983 4.08516 7.31484C4.16017 7.38986 4.26192 7.43199 4.36801 7.43199H6.824L8.04 8.64H6.4C6.29391 8.64 6.19218 8.68214 6.11716 8.75715C6.04215 8.83217 6 8.93392 6 9.04C6 9.14609 6.04215 9.24783 6.11716 9.32284C6.19218 9.39785 6.29391 9.44 6.4 9.44H8.85601L11.032 11.608H8L6.264 9.872C6.18923 9.79871 6.0887 9.75765 5.984 9.75765C5.8793 9.75765 5.77878 9.79871 5.704 9.872C5.63121 9.94541 5.59037 10.0446 5.59037 10.148C5.59037 10.2514 5.63121 10.3506 5.704 10.424L6.888 11.608H5.184L3.448 9.872C3.37323 9.79871 3.27271 9.75765 3.16801 9.75765C3.0633 9.75765 2.96277 9.79871 2.888 9.872C2.81521 9.94541 2.77437 10.0446 2.77437 10.148C2.77437 10.2514 2.81521 10.3506 2.888 10.424L4.072 11.616H2.4C2.29391 11.616 2.19218 11.6581 2.11716 11.7332C2.04215 11.8082 2 11.9099 2 12.016C2 12.1221 2.04215 12.2238 2.11716 12.2989C2.19218 12.3739 2.29391 12.416 2.4 12.416H4.05601L2.864 13.6C2.79121 13.6734 2.75037 13.7726 2.75037 13.876C2.75037 13.9794 2.79121 14.0786 2.864 14.152C2.90042 14.189 2.9441 14.218 2.99229 14.2373C3.04047 14.2566 3.09212 14.2657 3.14399 14.264C3.24543 14.2618 3.34242 14.2219 3.416 14.152L5.16 12.416H6.872L5.688 13.6C5.61521 13.6734 5.57437 13.7726 5.57437 13.876C5.57437 13.9794 5.61521 14.0786 5.688 14.152C5.72441 14.189 5.7681 14.218 5.81628 14.2373C5.86447 14.2566 5.91613 14.2657 5.96801 14.264C6.07206 14.263 6.17196 14.223 6.248 14.152L7.984 12.416H11.056L8.88 14.584H6.4C6.29391 14.584 6.19218 14.6261 6.11716 14.7011C6.04215 14.7762 6 14.8779 6 14.984C6 15.0901 6.04215 15.1918 6.11716 15.2668C6.19218 15.3419 6.29391 15.384 6.4 15.384H8.08001L6.864 16.592H4.4C4.29391 16.592 4.19218 16.6341 4.11716 16.7092C4.04215 16.7842 4 16.8859 4 16.992C4 17.0981 4.04215 17.1998 4.11716 17.2749C4.19218 17.3499 4.29391 17.392 4.4 17.392H6.08001L4.904 18.56C4.83071 18.6348 4.78966 18.7353 4.78966 18.84C4.78966 18.9447 4.83071 19.0452 4.904 19.12C4.94042 19.157 4.98409 19.186 5.03228 19.2053C5.08046 19.2246 5.13212 19.2337 5.184 19.232C5.28805 19.231 5.38796 19.191 5.464 19.12L6.63199 17.944V19.624C6.63199 19.7301 6.67414 19.8318 6.74916 19.9068C6.82417 19.9819 6.92591 20.024 7.03199 20.024C7.13808 20.024 7.23983 19.9819 7.31484 19.9068C7.38986 19.8318 7.43199 19.7301 7.43199 19.624V17.168L8.64 15.952V17.6C8.64 17.7061 8.68214 17.8078 8.75715 17.8828C8.83217 17.9579 8.93392 18 9.04 18C9.14609 18 9.24783 17.9579 9.32284 17.8828C9.39785 17.8078 9.44 17.7061 9.44 17.6V15.12L11.608 12.944V16L9.872 17.736C9.79871 17.8108 9.75765 17.9113 9.75765 18.016C9.75765 18.1207 9.79871 18.2212 9.872 18.296C9.94541 18.3688 10.0446 18.4096 10.148 18.4096C10.2514 18.4096 10.3506 18.3688 10.424 18.296L11.608 17.112V18.824L9.872 20.56C9.79871 20.6348 9.75765 20.7353 9.75765 20.84C9.75765 20.9447 9.79871 21.0452 9.872 21.12C9.94541 21.1928 10.0446 21.2336 10.148 21.2336C10.2514 21.2336 10.3506 21.1928 10.424 21.12L11.608 19.936V21.6C11.608 21.7061 11.6501 21.8078 11.7252 21.8828C11.8002 21.9579 11.9019 22 12.008 22C12.1141 22 12.2158 21.9579 12.2908 21.8828C12.3659 21.8078 12.408 21.7061 12.408 21.6V19.944L13.592 21.128C13.6275 21.164 13.6699 21.1925 13.7166 21.2117C13.7633 21.2309 13.8135 21.2406 13.864 21.24C13.968 21.239 14.068 21.199 14.144 21.128C14.2168 21.0546 14.2576 20.9554 14.2576 20.852C14.2576 20.7486 14.2168 20.6494 14.144 20.576L12.416 18.832V17.12L13.6 18.304C13.6736 18.3739 13.7706 18.4138 13.872 18.416C13.9761 18.415 14.076 18.375 14.152 18.304C14.2253 18.2292 14.2663 18.1287 14.2663 18.024C14.2663 17.9193 14.2253 17.8188 14.152 17.744L12.392 16V12.936L14.56 15.104V17.6C14.56 17.7061 14.6021 17.8078 14.6771 17.8828C14.7522 17.9579 14.8539 18 14.96 18C15.0661 18 15.1678 17.9579 15.2428 17.8828C15.3179 17.8078 15.36 17.7061 15.36 17.6V15.928L16.568 17.136V19.592C16.568 19.6981 16.6101 19.7998 16.6852 19.8749C16.7602 19.9499 16.8619 19.992 16.968 19.992C17.0741 19.992 17.1758 19.9499 17.2509 19.8749C17.3259 19.7998 17.368 19.6981 17.368 19.592V17.92L18.536 19.096C18.5724 19.133 18.6161 19.162 18.6643 19.1813C18.7125 19.2006 18.7641 19.2097 18.816 19.208C18.92 19.207 19.02 19.167 19.096 19.096C19.1693 19.0212 19.2104 18.9207 19.2104 18.816C19.2104 18.7113 19.1693 18.6108 19.096 18.536L17.92 17.368H19.6C19.7061 17.368 19.8078 17.3259 19.8828 17.2509C19.9579 17.1758 20 17.0741 20 16.968C20 16.8619 19.9579 16.7602 19.8828 16.6852C19.8078 16.6101 19.7061 16.568 19.6 16.568H17.144L15.928 15.36H17.6C17.7061 15.36 17.8078 15.3179 17.8828 15.2428C17.9579 15.1678 18 15.0661 18 14.96C18 14.8539 17.9579 14.7522 17.8828 14.6771C17.8078 14.6021 17.7061 14.56 17.6 14.56H15.12L12.944 12.384H16L17.736 14.12C17.7724 14.157 17.8161 14.186 17.8643 14.2053C17.9125 14.2246 17.9641 14.2337 18.016 14.232C18.12 14.231 18.22 14.191 18.296 14.12C18.3688 14.0466 18.4096 13.9474 18.4096 13.844C18.4096 13.7406 18.3688 13.6414 18.296 13.568L17.112 12.384H18.824L20.568 14.12C20.6035 14.156 20.6459 14.1845 20.6926 14.2037C20.7393 14.223 20.7895 14.2326 20.84 14.232C20.944 14.231 21.044 14.191 21.12 14.12C21.1928 14.0466 21.2336 13.9474 21.2336 13.844C21.2336 13.7406 21.1928 13.6414 21.12 13.568L19.936 12.384H21.6C21.7061 12.384 21.8078 12.3419 21.8828 12.2668C21.9579 12.1918 22 12.0901 22 11.984C22 11.8779 21.9579 11.7762 21.8828 11.7012C21.8078 11.6261 21.7061 11.584 21.6 11.584V11.608Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

AirConditioningIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
};

export default AirConditioningIcon;
