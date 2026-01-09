// const ClipPath = () => {
//   return (
//     <svg
//       width="0"
//       height="0"
//       style={{ position: "absolute" }}
//       aria-hidden
//     >
//       <defs>
//         <mask
//           id="projects-mask"
//           maskUnits="userSpaceOnUse"
//           x="0"
//           y="0"
//           width="100%"
//           height="100%"
//         >
//           {/* VISIBLE AREA */}
//           <rect x="0" y="0" width="100%" height="100%" fill="white" />

//           {/* CUT SHAPE */}
//           <path
//             fill="black"
//             d="
//               M20 0
//               H calc(100% - 40px)
//               Q calc(100% - 20px) 0 100% 20
//               V calc(100% - 20px)
//               Q 100% 100% calc(100% - 20px) 100%
//               H 20
//               Q 0 100% 0 calc(100% - 20px)
//               V 20
//               Q 0 0 20 0
//               Z
//             "
//           />
//         </mask>
//       </defs>
//     </svg>
//   );
// };

// export default ClipPath;

const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

export default ClipPath;
