// import { FaGraduationCap } from 'react-icons/fa';

import aboutMeImg from '../img/AboutMe/aboutMeImg.png';

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-2 place-items-center justify-items-start text-start sm:grid-cols-1 p-5 rounded-lg shadow-md bg-white dark:bg-slate-800 dark:border dark:border-slate-700"
    >
      <div className="grid content-center justify-items-center p-3 sm:p-2 ">
        <h2 className="w-full text-2xl font-extrabold text-slate-900 dark:text-slate-200">
          About and Studies
        </h2>
        <p className="w-full flex-none text-sm mt-2 text-slate-600 dark:text-slate-400">
          Landing page heroes, feature sections, newsletter sign up forms
          everything you need.
        </p>
        <div className="w-full mt-2 border-t border-slate-200 dark:border-slate-700"></div>
        <p className="text-slate-800 mt-2 dark:text-slate-300">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize.
        </p>
        <ul className="w-full list-disc pl-7 my-3 dark:text-slate-300">
          <li>Component examples you can drop into</li>
          <li>Component examples you can drop into your Tailw customize.</li>
          <li>
            Component examples you can drop into your Tailwind p customize.
          </li>
        </ul>
        <p className="w-full text-slate-800 font-semibold dark:text-slate-300">
          <span className=""></span> Over 500+ professionally designed, fully
          responsive, expertly crafted component examples you can drop into your
          Tailwind projects and customize.
        </p>
      </div>
      <div className="grid content-center justify-items-center p-3">
        <img src={aboutMeImg} className="" />
      </div>
    </section>
  );
};

export default About;
