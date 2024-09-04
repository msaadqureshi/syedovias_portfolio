/* eslint-disable react/require-default-props */
import { Project } from '@/lib/types';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

type Props = {
  project: Project;
  filter?: {
    key: string;
    value: string | boolean;
  };
};
const ProjectCardTiltImage = ({ project, filter }: Props): JSX.Element => {
  const show = true;

  return (
    show && (
      <>
        <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
          <div
            className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl"
          >
            {/* <Link href={`/project/${project.slug}`}> */}
            <Image
              src={project.img}
              alt={project.name}
              className="rounded-2xl w-full h-auto lg:w-[400px] lg:h-[300px]"
            />
            {/* </Link> */}
          </div>
        </Tilt>
      </>
    )
  );
};

export default ProjectCardTiltImage;
