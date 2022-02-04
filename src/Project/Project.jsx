import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Project = ({ project, description, img, route, git }) => {
  return (
    <div className="w-full rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-slate-800 dark:border-slate-700">
      <div>
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-t-lg"
        />
        <div className="">
          <div className="text-base font-semibold text-slate-900 my-2 dark:text-slate-200">
            {project}
          </div>
          <p className="mb-4 text-slate-900 dark:text-slate-200">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between py-3 px-5 border-t border-slate-200 dark:border-slate-700">
          <a
            className="flex items-center text-slate-600 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-500"
            href={git}
            target="_blank"
          >
            <span className="mr-1">
              <AiOutlineGithub />
            </span>
            Go to GitHub
          </a>
          <a
            className="flex items-center text-slate-600 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-500"
            href={route}
            target="_blank"
          >
            Watch Project
            <span className="">
              <AiOutlineArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
