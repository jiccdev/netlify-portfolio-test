// react-icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

import { SiCsharp } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

export const tecnologies = [
  {
    id: 1,
    text: 'Html',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
    icon: <AiFillHtml5 />,
  },
  {
    id: 2,
    text: 'Css3',
    url: 'https://developer.mozilla.org/es/docs/Web/css',
    icon: <DiCss3 />,
  },
  {
    id: 3,
    text: 'Javascript',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    icon: <SiJavascript />,
  },
  {
    id: 4,
    text: 'React Js',
    url: 'https://es.reactjs.org/',
    icon: <FaReact />,
  },
  {
    id: 5,
    text: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    icon: <BsFillBootstrapFill />,
  },
  {
    id: 6,
    text: 'Tailwind',
    url: 'https://tailwindcss.com/',
    icon: <SiTailwindcss />,
  },
  { id: 7, text: 'Node Js', url: 'https://nodejs.org/es/', icon: <FaNodeJs /> },
  {
    id: 8,
    text: 'Express Js',
    url: 'https://expressjs.com/es/',
    icon: <SiExpress />,
  },
  {
    id: 9,
    text: 'C#',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    icon: <SiCsharp />,
  },
  {
    id: 10,
    text: 'SQL Server',
    url: 'https://www.microsoft.com/es-es/sql-server/',
    icon: <SiMicrosoftsqlserver />,
  },
  {
    id: 11,
    text: 'Mongo DB',
    url: 'https://www.mongodb.com/',
    icon: <SiMongodb />,
  },
];
