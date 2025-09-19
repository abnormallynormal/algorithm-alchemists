import SpotlightCard from "./SpotlightCard";
interface HorizontalCarouselProps {
  className?: string;
  items: {
    name: string;
    title: string;
    description?: string;
    image: string;
  }[];
}


export default function HorizontalCarousel(props: HorizontalCarouselProps) {
  return (
    <div className="flex gap-4 overflow-hidden pb-4">
      {props.items.map((item, index) => (
        <SpotlightCard
          key={`${item.name}-first-${index}`}
          className="flex flex-col w-64 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0"
        >
          <div className="text-center text-2xl font-semibold mb-4">
            {item.name}
          </div>
          <img src={item.image} alt={item.title} className="rounded-lg w-48" />
          <div className="text-center text-md font-medium mt-2">
            {item.title}
          </div>
          <div className="text-center text-sm text-gray-400 mt-2">
            {item.description}
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
