/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import StopCovid from 'assets/images/stop-covid.png';

export default function Hero() {
  return (
    <Fade bottom>
      <section className="container flex flex-col lg:flex-row mx-0 lg:mx-auto pl-7 pr-7 sm:pl-20 sm:pr-24 items-center -mt-4">
        <div className="w-full lg:w-1/2 xl:pr-4 xl:mr-10">
          <h1 className="flex text-4.5xl lg:text-4.5xl sm:text-5.5xl xl:text-5.5xl font-bold text-gray-800 sm:tracking-wide">
            Berjuang Bersama
          </h1>
          <h1 className="flex text-4.5xl lg:text-4.5xl sm:text-5.5xl xl:text-5.5xl font-bold text-red-600 sm:tracking-wide sm:-mt-4">
            Lawan Corona
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-light sm:text-justify tracking-wide leading-snug mt-4">
            Sayangi dan Lindungi Keluarga dengan Tidak Menyebarkan Virus Corona. Mari Kita Stop Virus Corona Bersama.
          </p>

          <Button href="/statistik" type="link" className="flex w-72 h-18 items-center px-14 py-5 text-white text-xl font-medium bg-red-500 mt-16 rounded-lg shadow-2xl transition duration-500 hover:bg-red-700">
            Lihat Statistik
            <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
        <div className="w-full lg:w-1/2 order-first lg:order-last">
          <img src={StopCovid} alt="Stop Covid" />
        </div>
      </section>
    </Fade>
  );
}
