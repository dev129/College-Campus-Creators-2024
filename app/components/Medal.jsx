"use server";
import React from "react";

const Medal = ({ Medal }) => {
  let medal;
  if (Medal === "Gold") {
    medal = (
      <svg viewBox="0 0 71.693 122.881" width={50} height={50}>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FAB62D"
            d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"
          />
        </g>
      </svg>
    );
  } else if (Medal === "Silver") {
    medal = (
      <svg viewBox="0 0 71.693 122.881" width={50} height={50}>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#C0C0C0"
            d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"
          />
        </g>
      </svg>
    );
  } else {
    medal = (
      <svg viewBox="0 0 71.693 122.881" width={50} height={50}>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#EB934C"
            d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"
          />
        </g>
      </svg>
    );
  }

  return <>{medal}</>;
};

export default Medal;
