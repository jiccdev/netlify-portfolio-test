import { tecnologies } from './data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="grid grid-cols-2 sm:grid-cols-1 rounded-lg shadow-md dark:bg-slate-800 dark:border dark:border-slate-700 bg-white"
    >
      <div className="grid content-center justify-items-center text-center p-5">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-200">
          Skills
        </h2>
        <p className="text-slate-800 dark:text-slate-300">
          Examples you can drop into your Tailwind projects and customize.
        </p>
        <p className="text-slate-800 font-semibold">
          Front End - Backend - Data Bases
        </p>
      </div>

      <div className="grid content-center justify-items-between bg-slate-100 p-5 rounded-r-md sm:rounded-b-lg dark:bg-slate-900 ">
        <div className="flex items-center justify-between text-center border-b border-slate-300 mx-10 p-3 dark:border-slate-700">
          {tecnologies.map((tecnologie) =>
            tecnologie.id <= 6 ? (
              <a
                key={tecnologie.id}
                href={tecnologie.url}
                className="flex flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-300 sm:text-2xl"
                target="_blank"
              >
                {tecnologie.icon}
                <span className="sm:hidden">{tecnologie.text}</span>
              </a>
            ) : null
          )}
        </div>

        <div className="flex items-center justify-center text-center border-b border-slate-300 mx-10 p-3 dark:border-slate-700">
          {tecnologies.map((tecnologie) =>
            tecnologie.id > 6 && tecnologie.id <= 9 ? (
              <a
                key={tecnologie.id}
                href={tecnologie.url}
                className="flex flex-col items-center justify-center mx-4 text-sm text-slate-500 dark:text-slate-300 sm:text-2xl border-slate-200 dark:border-slate-700"
                target="_blank"
              >
                {tecnologie.icon}
                <span className="sm:hidden">{tecnologie.text}</span>
              </a>
            ) : null
          )}
        </div>

        <div className="flex items-center justify-center text-center border-slate-300 mx-10 p-3">
          {tecnologies.map((tecnologie) =>
            tecnologie.id > 9 ? (
              <a
                key={tecnologie.id}
                href={tecnologie.url}
                className="flex flex-col items-center justify-center mx-4 text-sm text-slate-500 dark:text-slate-300 sm:text-2xl"
                target="_blank"
              >
                {tecnologie.icon}
                <span className="sm:hidden">{tecnologie.text}</span>
              </a>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
