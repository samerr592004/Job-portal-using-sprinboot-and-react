import { Carousel } from '@mantine/carousel';
import {jobCategory} from '../../Data/Data';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center text-mine-shaft-100 mb-3">
        Browse <span className="text-bright-sun-400 font-semibold">Job</span> Categories
      </div>
      <div className="mt-2 mx-auto mb-10 text-lg text-center text-mine-shaft-300 w-1/2">Explore diverse job opportunities tailored to your skills.
        Start your career journey today!</div>
         <Carousel
  className='focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-100 [&_button]:opacity-0 hover:[&_button]:!opacity-70  '
  nextControlIcon={<IconArrowRight className='h-8 w-8' />}
  previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
  slideSize="22%"
  slideGap="md"
  emblaOptions={{
    loop: true,
    dragFree: true,
    align: 'center'
  }}
>

      {
        jobCategory.map((category,index) => <Carousel.Slide>
            <div className=" flex flex-col items-center w-64 gap-2 border border-bright-sun-400 rounded-xl p-5 my-5 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out !shadow-bright-sun-300" key={index}>
        <div className="p-2 bg-bright-sun-300 rounded-full">
          <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name} />
        </div>
        <div className="text-mine-shaft-200 text-xl font-semibold">
          {category.name}
        </div>
        <div className="text-sm text-center text-mine-shaft-300">
          {category.desc}
        </div>
        <div className="text-bright-sun-300">
          {category.jobs}+ new jobs posted
        </div>
      </div>

        </Carousel.Slide>)
      }
    </Carousel>
    
    </div>

  );
};

export default JobCategory;
