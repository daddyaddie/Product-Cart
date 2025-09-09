import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-600 text-gray-300">
        <div className="w-4/5">
          <div className="text-2xl md:text-3xl font-bold mb-4">
            <span style={{ color: 'rgba(38, 242, 172, 0.96)' }}>Sh</span>
            <span className="text-white">opiee</span>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Company</h2>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a className="hover:text-gray-300 hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:text-gray-300 hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:text-gray-300 hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:text-gray-300 hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-400">
              <p>+1-234-567-890</p>
              <p>addiee@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-400 bg-black">
        Copyright 2025 © Addiee All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;