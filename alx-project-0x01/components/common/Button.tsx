import React from 'react';
import Link from 'next/link';
interface ButtonProps {
  href: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      {children}
    </Link>
    );
}
export default Button;