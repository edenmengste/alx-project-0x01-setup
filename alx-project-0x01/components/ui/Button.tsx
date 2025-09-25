// components/ui/Button.tsx
interface ButtonProps {
  title: string;
  styles: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 text-white ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
