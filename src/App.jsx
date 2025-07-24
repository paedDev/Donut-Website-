import Donut from "./components/Donut";
import donut1 from "/images/donut1.png";
import donut2 from "/images/donut2.png";
import gsap from "gsap";
const App = () => {
  return (
    <>
      <section className="relative h-screen section-1 py-20 w-full">
        <div className="absolute top-0 left-[37%] bg-no-repeat w-full h-full bg-image"></div>
        <div className="flex-center h-full">
          <div className="text-white flex text-[20vh] uppercase tracking-widest">
            <h1>DOU</h1>
            <h1 className="z-10">Nuts</h1>
          </div>
          <div className="bg-donut1 absolute bg-cover bg-center h-96 w-96 -translate-x-10 "></div>
        </div>
      </section>

      <section className="h-screen relative w-full">
        <div className="h-full flex  items-center justify-center ">
          <div className="flex-1/2">
            <div className="absolute top-1/2 left-1/12 -translate-y-1/2 h-72 w-72 bg-yellow-200"></div>
          </div>
          <div className="flex-1/2 space-y-4">
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

      <section className="relative flex-center min-h-screen p-20 w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-6 place-content-center">
          <Donut img={donut1} />
          <Donut img={donut2} />
          <Donut img={donut1} />
          <Donut img={donut2} />
          <Donut img={donut1} />
          <Donut img={donut2} />
        </div>
      </section>
    </>
  );
};

export default App;
