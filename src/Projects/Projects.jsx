import React from 'react';
import Project from '../Project/Project';

import iReactjs from '../img/project-icons/iReactjs.svg';
import iNodeJs from '../img/project-icons/iNodeJs.svg';
import iTypescript from '../img/project-icons/iTypescript.svg';

const Projects = () => {
  const projects = [
    {
      id: 'about',
      project: 'ReactJs and NodeJs',
      description: 'This is a Litle Bit Proyects 1',
      img: iReactjs,
      route: 'https://www.netlify.com/',
      git: 'https://github.com/',
    },
    {
      id: 'projects',
      project: 'Node an Mongo Db',
      description: 'This is a Litle Bit Proyects 2',
      img: iNodeJs,
      route: 'https://www.netlify.com/',
      git: 'https://github.com/',
    },
    {
      id: 'contact',
      project: 'Clone Instagram',
      description: 'This is a Litle Bit Proyects 1',
      img: iTypescript,
      route: 'https://www.netlify.com/',
      git: 'https://github.com/',
    },
  ];

  return (
    <section
      id="projects"
      className="p-5  my-6 rounded-lg border dark:shadow-md dark:bg-slate-800 dark:border-slate-700"
    >
      <div className="p-3 sm:p-2">
        <h2 className="w-full text-2xl font-extrabold text-slate-900 dark:text-slate-200">
          Projects
        </h2>
        <p className="w-full flex-none text-sm mt-2 text-slate-600 dark:text-slate-400">
          Landing page heroes, feature sections, newsletter
        </p>
        <div className="w-full mt-2 border-t border-slate-200 dark:border-slate-700"></div>
      </div>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-1 xl:grid-cols-2 p-3 sm:p-2 content-center justify-items-center text-center">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project.project}
            description={project.description}
            img={project.img}
            route={project.route}
            git={project.git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
