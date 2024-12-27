// CREATING 404 ERROR PAGE FOR FIGMA EMPTY PAGES :

/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
/* eslint-enable @typescript-eslint/no-unused-vars */

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center   min-h-screen bg-gray-100 px-6">
      <h1 className="text-8xl font-bold text-red-500 mb-4 ">404</h1>
      <h2 className="text-2xl text-gray-700 mb-8 text-center">Oops! The page you are looking for does not exist.</h2>
         <Link href={"./"}>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg overflow-x-hidden sm:px-6 sm:py-3 md:px-7 md:py-3 sm:text-lg md:text-wrap hover:bg-blue-700 transition duration-300 ease-in-out">Back to Homepage</button>
        </Link>
    </div>
  );
};

export default Custom404;
