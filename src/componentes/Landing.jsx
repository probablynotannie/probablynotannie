import Skills from "./landing/Skills";
import Header from "./Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
function Landing() {
  const skillsRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <>
      <Header homeRef={homeRef} skillsRef={skillsRef} />
      <section ref={homeRef}>
        <Descripcion />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
    </>
  );
}

export default Landing;
