import { CATEGORIES } from '../../utilities/constants';

type Props = {
  title: string;
  images: string[];
  colors: string[];
  categoriesCount: number[];
};

export const ShopByCategory: React.FC<Props> = ({
  title,
  categoriesCount,
  images,
  colors,
}) => {
  return (
    <section className="mx-auto w-fit">
      <h2 className="h2 mb-6">{title}</h2>
      <article className="flex flex-col gap-8 md:flex-row md:gap-4">
        {CATEGORIES.map((category, categoryIndex) => {
          return (
            <div
              className=""
              key={category}
            >
              <div
                className={`w-[288px] h-72 overflow-hidden mb-6 md:w-[187px] md:h-[187px] lg:w-[368px] lg:h-[368px] bg-[${colors[categoryIndex]}]`}
              >
                <img
                  src={images[categoryIndex]}
                  alt=""
                  className="translate-x-[60px] translate-y-[60px] md:translate-x-[45px] md:translate-y-[45px] lg:translate-x-20 lg:translate-y-20"
                />
              </div>
              <h4 className="h4 mb-1">{category}</h4>
              <div className="body-text">{`${categoriesCount[categoryIndex]} models`}</div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
