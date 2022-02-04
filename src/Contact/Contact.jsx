import { Fragment } from 'react';

// react-icons
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <Fragment>
      <div
        id="contact"
        className="grid grid-cols-3 content-center justify-items-center py-5 my-5"
      >
        <div className="flex items-center justify-end w-full">
          <a
            href="https://www.linkedin.com/in/ji-ccdev/"
            target="_blank"
            className="rounded-full p-4 bg-slate-200 shadow-md  text-slate-600    hover:bg-slate-800  hover:text-slate-200 dark:hover:text-slate-200"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
        </div>
        <div className="flex items-center justify-center text-center w-full">
          <a
            href="https://github.com/jiccdev"
            target="_blank"
            className="rounded-full p-4 bg-slate-200 shadow-md  text-slate-600    hover:bg-slate-800  hover:text-slate-200 dark:hover:text-slate-200 "
          >
            <AiFillGithub className="text-2xl" />
          </a>
        </div>
        <div className="flex items-center justify-start w-full">
          <a
            href="mailto:ji.ccdev@outlook.com"
            target="_blank"
            className="rounded-full p-4 bg-slate-200 shadow-md  text-slate-600    hover:bg-slate-800  hover:text-slate-200 dark:hover:text-slate-200 "
          >
            <FiMail className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="border-md ">
        <h3 className="text-center text-sm text-slate-600 dark:text-slate-200 mx-20">
          Contact to me and lets work...
        </h3>
      </div>
    </Fragment>
  );
};

export default Contact;
