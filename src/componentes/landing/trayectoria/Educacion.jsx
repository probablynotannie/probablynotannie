import Idiomas from "./educacion/Idiomas";
import EducacionComponent from "./educacion/Educacion";
import { FaCode, FaFlag, FaGithub, FaSchool } from "react-icons/fa";
function Educacion() {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none ">
        <span className="orb absolute left-20 bottom-[20%] animate-[float_10s_ease-in-out_infinite_alternate] [animation-delay:2s]">
          <FaCode className="text-pink-500 text-[16rem] blur-[17px] opacity-20" />
        </span>
        <span className="orb absolute right-[10%] top-[40%] animate-[float_10s_ease-in-out_infinite_alternate] [animation-delay:5s]">
          <FaFlag className="text-blue-300 text-[12rem] blur-[17px] opacity-20" />
        </span>
        <span className="orb absolute left-[40%] -top-[15%] animate-[float_10s_ease-in-out_infinite_alternate] [animation-delay:7s]">
          <FaSchool className="text-blue-200 text-[16rem] blur-[17px] opacity-20" />
        </span>
        <span className="orb absolute right-[50%] -bottom-[35%] animate-[float_10s_ease-in-out_infinite_alternate] [animation-delay:7s]">
          <FaGithub className="text-orange-800 text-[16rem] blur-[17px] opacity-20" />
        </span>
      </div>

      <EducacionComponent />
      <Idiomas />
      <style jsx>{`
        .orb {
          animation: float 10s infinite ease-in-out alternate;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-35px) translateX(25px) scale(1.06);
            opacity: 0.35; /* softer fade 
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.25;
          }
        }

      .delay-200 {
  animation-delay: 2s; /* not 20s */
}
.delay-500 {
  animation-delay: 5s;
}
.delay-700 {
  animation-delay: 7s;
}

      `}</style>
    </div>
  );
}

export default Educacion;
