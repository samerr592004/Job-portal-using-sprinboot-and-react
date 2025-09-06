import Marquee from 'react-fast-marquee';
import { companies } from '../../Data/Data';

const Company = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center text-mine-shaft-100 mb-10">
        Trusted by over <span className="text-bright-sun-400 font-semibold">1,000+</span> companies worldwide
      </div>

    <Marquee >
  {companies.map((company) => (
    <div
      key={company}
      className="group mx-10 my-5 items-center justify-center p-3 rounded-xl
                 hover:bg-mine-shaft-900 hover:shadow-lg "
    >
      <img
        src={`/Companies/${company}.png`}
        alt={company}
        className="h-14  transition-transform duration-300 transform-gpu group-hover:scale-105"
      />
    </div>
  ))}
</Marquee>

    </div>
  );
};

export default Company;
