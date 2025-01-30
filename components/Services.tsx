import { projects } from "@/data";
import { ServicesList } from "./ui/card-hover-effect";

const Services = () => {
  return (
    <section className="container py-10 " id="services">
      <div className="container">
        <h2 className="font-bold md:text-lg lg:text-2xl xl:text-4xl text-center ">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
            خداماتنا
          </span>
        </h2>
        <ServicesList items={projects} />
      </div>
    </section>
  );
};

export default Services;
