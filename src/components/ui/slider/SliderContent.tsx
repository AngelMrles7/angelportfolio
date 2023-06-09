import { FC } from "react";
import { ProjectInterface } from "../../../interface/TranslationsInterface";

export const SliderContent: FC<ProjectInterface> = ({
  title,
  description,
  imgLink,
  projectLink,
  linkText,
}) => {
  return (
    <>
      <img src={imgLink} alt={description} />
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
