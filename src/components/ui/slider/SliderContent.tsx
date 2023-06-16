import { FC } from "react";
import { ProjectInterface } from "../../../interface/TranslationsInterface";

interface SliderContentProps {
  projectsInfo: ProjectInterface;
  projectData: {
    projectLink?: string;
    projectImage: string;
  };
}

export const SliderContent: FC<SliderContentProps> = ({
  projectData,
  projectsInfo,
}) => {
  const { title, description, linkText } = projectsInfo;
  const { projectImage, projectLink } = projectData;

  return (
    <>
      <img src={projectImage} alt={description} />
      <div className="swiper-slide__content">
        <h4 className="swiper-slide__content__title">{title}</h4>
        <p className="swiper-slide__content__description">{description}</p>

        {projectLink && (
          <a
            href={projectLink}
            className="swiper-slide__content__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        )}
      </div>
    </>
  );
};
