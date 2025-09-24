import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm p-6 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
