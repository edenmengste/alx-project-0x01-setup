
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">© 2025 Tsegawbeza</p>
      <div className="mt-2">
        <Link href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link>
        <Link href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</Link>
      </div>
    </footer>
  );
}   
export default Footer;
