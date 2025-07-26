import Donut from "./components/Donut";
import donut1 from "/images/donut1.png";
import donut2 from "/images/donut2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

const App = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText);

    gsap.context(() => {
      const secondState = Flip.getState(".second");
      const thirdState = Flip.getState(".third");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-1 ",
          start: "center 20%",
          endTrigger: ".third",
          end: "center center ",
          scrub: 1,
          ease: "none",
        },
      });
      const flipConfig = {
        rotate: -360,
        ease: "none",
        duration: 1,
      };

      timeline.add(Flip.fit(".donut", secondState, flipConfig), 0);
      timeline.add(Flip.fit(".donut", thirdState, flipConfig), 1);

      const introTimeline = gsap.timeline();
      introTimeline.fromTo(
        ".bg-image",
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: "power1.inOut",
        }
      );
      introTimeline.fromTo(
        ".bg-donut1",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
      let split = SplitText.create(".split", {
        type: "chars",
      });
      introTimeline.fromTo(
        split.chars,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          stagger: 0.03,
          ease: "back.inOut",
        },
        "-=0.5"
      );
    });
  }, []);
  return (
    <>
      <section className="relative h-screen section-1 py-20 w-full">
        <div className="absolute top-0 left-[37%] bg-no-repeat w-full h-full bg-image z-50"></div>
        <div className="flex-center h-full">
          <div className="text-white flex text-[20vh] uppercase tracking-widest">
            <h1 className="z-50 split">DONuts</h1>
          </div>
          <div className="donut bg-donut1 absolute bg-cover bg-center h-96 w-96 -translate-x-10 z-30 "></div>
        </div>
      </section>

      <section className="h-screen relative w-full">
        <div className="h-full flex  items-center justify-center ">
          <div className="flex-1">
            <div className=" second absolute top-1/2 left-1/12 -translate-y-1/2 h-72 w-72   z-30 "></div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">
              Where Every Bite is Worth <br /> the Calories
            </h2>
            <p className="leading-7 opacity-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              doloribus neque? Optio hic, rerum aliquid eum ducimus magnam
              nostrum ex in tenetur corrupti porro! Quod officia quidem quos
              temporibus saepe?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-200 relative flex-center h-screen p-20 w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 place-content-center">
          <Donut img={donut1} indx="1" />
          <Donut img={donut2} indx="2" />
          <Donut img={donut1} indx="3" />
          <Donut img={donut2} indx="4" />
          <Donut img={donut1} indx="5" />
          <Donut img={donut2} indx="6" />
        </div>
      </section>
    </>
  );
};

export default App;
