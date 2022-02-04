import { MdOutlineArrowForward } from 'react-icons/md';
import { linkContact } from '../Navbar/data';

const Extra = () => {
  return (
    <div className="">
      <a
        href={linkContact[0].url}
        className="flex items-center font-semibold whitespace-pre text-cyan-500 hover:text-cyan-600"
      >
        {linkContact[0].text}
        <span>
          <MdOutlineArrowForward />
        </span>
      </a>
    </div>
  );
};

export default Extra;
