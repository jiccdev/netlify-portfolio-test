import rocketHero from '../img/rocketHero.png';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-1 py-10">
      <div className="grid content-center">
        <p className="order-0 text-sm font-semibold tracking-wide uppercase mb-4 dark:text-slate-300">
          Computer Engineer and Software Developer
        </p>
        <h1 className="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight text-slate-800 mb-4 dark:text-slate-100">
          <span className="text-cyan-500">Beautiful UI components,</span>{' '}
          crafted with Tailwind CSS
        </h1>
        <p className="order-2 leading-relaxed mb-4 dark:text-slate-400">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content. Get started by checking out our
          free preview components, or browsing
        </p>
        <div className="order-4 mt-4">
          <a
            href=""
            className="p-3  rounded-lg shadow-md  bg-slate-700 text-slate-100 sm:block sm:text-center sm:my-2"
          >
            Download Curriculum
          </a>
          <a
            href=""
            className="p-3 ml-5 rounded-lg shadow-md sm:block sm:text-center sm:ml-0 sm:my-2 dark:bg-slate-100"
          >
            Other Action
          </a>
        </div>
      </div>
      <div className="grid content-center">
        <img src={rocketHero} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
