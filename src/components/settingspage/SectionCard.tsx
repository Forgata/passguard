import { ChevronRight, type LucideProps } from "lucide-react";
import { Link } from "react-router";

interface SectionCardProps {
  heading: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  chevron?: boolean;
  link?: boolean;
  url?: string;
}

function SectionCard({
  heading,
  description,
  Icon,
  chevron = true,
  link = false,
  url,
}: SectionCardProps) {
  if (link && url) {
    return (
      <Link
        to={url}
        draggable={false}
        className="flex w-full cursor-pointer items-center rounded-md bg-white p-3"
      >
        <div className="flex flex-1 items-center justify-start gap-1">
          <div className="flex aspect-square h-12 items-center justify-center">
            <Icon />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-semibold capitalize">{heading}</h1>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        {chevron && <ChevronRight />}
      </Link>
    );
  }

  return (
    <div className="flex w-full cursor-pointer items-center rounded-md bg-white p-3">
      <div className="flex flex-1 items-center justify-start gap-1">
        <div className="flex aspect-square h-12 items-center justify-center">
          <Icon />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-semibold capitalize">{heading}</h1>
          <p className="max-w-11/12 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {chevron && <ChevronRight />}
    </div>
  );
}

export default SectionCard;
