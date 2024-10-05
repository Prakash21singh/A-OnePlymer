import { useState } from "react";
import { Card } from "../ui/card";

export default function MakerCard({
  img,
  className,
  text,
}: {
  img: string;
  className?: string;
  text: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="cursor-pointer
      overflow-hidden rounded-none border-none shadow border hover:-translate-y-1 transition relative flex flex-col justify-between p-4
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`absolute inset-0 bg-yellow-2/50 transition-all duration-300 ease-in-out origin-top-left ${
          isHovered ? "scale-100 opacity-30" : "scale-0 opacity-0"
        }`}
      />
      <img
        src={img}
        alt="Hot Press"
        className={` object-cover h-[80%] rounded-sm ${className}`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-black text-center p-4">
        <h2 className="text-xl font-bold">{text}</h2>
      </div>
    </Card>
  );
}
