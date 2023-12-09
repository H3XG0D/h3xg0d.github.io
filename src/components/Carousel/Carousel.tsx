import { FC, Fragment, useCallback, useState } from "react";
import { motion, AnimatePresence, DragHandlers } from "framer-motion";
import { sliderAnimation } from "../../animations";
import data from "../../data/works.json";
import { IWorkItem } from "../../models/WorksModel";
import IconArrow from "../../icons/Arrow";
import { socialIcons } from "../../constants/socials";

interface DragOffset {
  x: number;
  y: number;
}

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },
};

const Carousel: FC = (): JSX.Element => {
  const works = data as IWorkItem[];
  const [[page, dir], setPage] = useState<[number, number]>([0, 0]);
  const [pos, setPos] = useState<boolean>(true);

  const changePage = useCallback(
    (newDir: number) => {
      const numOfPages = works.length;
      const nextPage = (page + newDir + numOfPages) % numOfPages;
      setPage([nextPage, newDir]);
      setPos((prevPos) => !prevPos);
    },
    [page, works.length]
  );

  const handlePrevPage = useCallback(() => {
    changePage(-1);
  }, [changePage]);

  const handleNextPage = useCallback(() => {
    changePage(+1);
  }, [changePage]);

  const handleDragEnd: DragHandlers["onDragEnd"] = useCallback(
    (
      _: unknown,
      { offset, velocity }: { offset: DragOffset; velocity: DragOffset }
    ) => {
      const swipe = swipePower(offset.x, velocity.x);
      swipe < -swipeConfidenceThreshold
        ? handleNextPage()
        : swipe > swipeConfidenceThreshold && handlePrevPage();
    },
    [handleNextPage, handlePrevPage]
  );

  const changePageBullet = useCallback(
    (index: number) => {
      if (index !== page && index >= 0 && index < works.length) {
        const direction = index < page ? -1 : 1;
        setPage([index, direction]);
        setPos((prevPos) => !prevPos);
      }
    },
    [page, works.length]
  );

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter initial={false} custom={dir}>
        <motion.div
          className="works__main"
          key={works[page].name}
          custom={dir}
          variants={sliderAnimation}
          initial="sliderEnter"
          animate="sliderCenter"
          exit="sliderExit"
          transition={transition}
          onDragEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        >
          <div
            className="works__main__container"
            style={{ alignSelf: pos === true ? "flex-start" : "flex-end" }}
          >
            <div
              className="works__main__container__title"
              style={{
                justifyContent: pos === true ? "flex-start" : "flex-end",
              }}
            >
              {`${works[page].id}. ${works[page].name}`}
            </div>
            <div
              className="works__main__container__category"
              style={{
                justifyContent: pos === true ? "flex-start" : "flex-end",
              }}
            >
              {works[page].categ}
            </div>
            <div
              className="works__main__container__descr"
              style={{ textAlign: pos === true ? "start" : "end" }}
            >
              {works[page].descr}
            </div>
            <div className="works__main__container__tags">
              <ul
                style={{
                  justifyContent: pos === true ? "flex-start" : "flex-end",
                }}
              >
                {works[page].tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div
              className="works__main__container__links"
              style={{
                justifyContent: pos === true ? "flex-start" : "flex-end",
              }}
            >
              {works[page].links.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    href={link.src}
                    key={link.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon width={20} height={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className="works__main__img"
            style={{ alignSelf: pos === true ? "flex-end" : "flex-start" }}
          >
            <img src={works[page].img} draggable="false" alt="works main img" />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="works__arrows">
        <IconArrow
          direction="left"
          className="works__arrows__left"
          onClick={handlePrevPage}
        />
        <IconArrow
          direction="right"
          className="works__arrows__right"
          onClick={handleNextPage}
        />
      </div>
      <div className="works__pages">
        {works.map((item, index) => {
          return (
            <div
              className="works__pages__item"
              id={`page${index}`}
              key={item.name}
              style={{ background: page === index ? "white" : "#1b1b1b" }}
              onClick={() => changePageBullet(index)}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Carousel;
