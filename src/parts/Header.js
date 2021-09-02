/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Transition } from '@headlessui/react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Header(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { pathname } = props.location;
  const [isCollapse, setIsCollapse] = useState(false);
  const isActive = (href) => (href === pathname ? 'active-link ' : '');

  return (
    <div className="container flex flex-col sm:flex-row mx-auto py-5 sm:px-5 sm:pt-8 lg:px-10 items-center justify-between">
      <Fade>
        <div className="flex justify-between w-full px-5 sm:px-0 sm:w-1/3">
          <BrandIcon />

          <Button type="button" className="block text-gray-700 sm:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className={`${isCollapse ? 'hidden ' : 'block '}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path className={`${isCollapse ? 'block ' : 'hidden '}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        <div className="hidden sm:flex sm:w-2/3 justify-between items-center">
          <ul className="flex text-gray-700 sm:-ml-5 lg:ml-8">
            <li
              className="px-4"
            >
              <Button
                type="link"
                href="/"
                className={`${isActive('/')}text-lg font-medium hover:text-red-600`}
              >
                Beranda
              </Button>
            </li>
            <li
              className="px-4"
            >
              <Button
                type="link"
                href="/statistik"
                className={`${isActive('/statistik')}text-lg font-medium hover:text-red-600`}
              >
                Statistik
              </Button>
            </li>
            <li
              className="px-4"
            >
              <Button
                type="link"
                href="/faq"
                className={`${isActive('/faq')}text-lg font-medium hover:text-red-600`}
              >
                F.A.Q
              </Button>
            </li>
          </ul>

          <Button
            type="link"
            href="tel:119"
            className="flex w-42 h-14 px-8 text-xl font-semibold text-red-600 text-center items-center rounded-full border-2 border-red-600 shadow-lg transform transition duration-500 hover:bg-red-600 hover:text-white hover:-translate-y-1"
            isExternal
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-semibold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hotline
          </Button>
        </div>
      </Fade>

      <div className="w-full sm:hidden">
        <Transition
          show={isCollapse}
          enter="transition-opacity duration-400"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Fade>

            <div className="z-50 flex flex-col w-full absolute bg-white text-center justify-items-center border-b border-red-300 sm:hidden">
              <ul className="flex flex-col text-gray-700 mt-10 mb-9">
                <li
                  className="py-2"
                >
                  <Button
                    type="link"
                    href="/"
                    className={`${isActive('/')}text-lg font-medium hover:text-red-600`}
                  >
                    Beranda
                  </Button>
                </li>
                <li
                  className="py-2"
                >
                  <Button
                    type="link"
                    href="/statistik"
                    className={`${isActive('/statistik')}text-lg font-medium hover:text-red-600`}
                  >
                    Statistik
                  </Button>
                </li>
                <li
                  className="py-2"
                >
                  <Button
                    type="link"
                    href="/faq"
                    className={`${isActive('/faq')}text-lg font-medium hover:text-red-600`}
                  >
                    F.A.Q
                  </Button>
                </li>
                <li
                  className="py-2 mt-8 mx-auto"
                >
                  <Button
                    type="link"
                    href="tel:119"
                    className="flex w-44 h-14 px-8 text-xl font-semibold text-red-600 text-center items-center rounded-full border-2 border-red-600 shadow-lg transform transition duration-500 hover:bg-red-600 hover:text-white hover:-translate-y-1"
                    isExternal
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-semibold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hotline
                  </Button>
                </li>
              </ul>
            </div>
          </Fade>
        </Transition>
      </div>
    </div>
  );
}
