/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Lottie from 'react-lottie';

import MenjagaJarak from 'assets/lotties/menjagaJarak.json';

export default function LottieMenjagaJarak() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MenjagaJarak,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="p-3 sm:p-2 lg:p-3 border border-red-200 rounded-xl shadow-xl transform transition duration-500 hover:-translate-y-3">
      <Lottie
        options={defaultOptions}
        height={225}
        width={225}
      />

      <h2 className="text-2xl text-gray-800 font-medium text-center mt-1">
        Menjaga Jarak
      </h2>
      <p className="text-lg text-gray-400 text-center font-light mt-1 mb-4">
        Menjaga jarak dengan jarak minimal 1 meter menurunkan risiko penularan COVID-19 sebesar 85 persen.
      </p>
    </div>
  );
}
