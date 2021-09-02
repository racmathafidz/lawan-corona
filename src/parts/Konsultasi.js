/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Konsultasi() {
  return (
    <Fade bottom>
      <section>
        <div className="border border-red-400 rounded-2xl shadow-xl sm:shadow-2xl py-14 mx-4 sm:mx-2 lg:mx-4 xl:mx-40">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center mb-1 px-3 sm:px-0">
            Konsultasikan Jika Mengalami Gejala.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-light text-justify sm:text-center px-4 xl:px-14">
            Bantu program ini dengan cara konsultasi apabila mengalami gejala, sayangilah keluarga dan saudara anda.
          </p>
          <Button
            type="link"
            href="tel:119"
            className="flex mx-auto w-44 h-14 px-8 mt-16 text-xl bg-white font-semibold text-red-600 text-center items-center rounded-full border-2 border-red-600 shadow-lg transform transition duration-500 hover:bg-red-600 hover:text-white"
            isExternal
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-semibold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hotline
          </Button>
        </div>
      </section>
    </Fade>
  );
}
