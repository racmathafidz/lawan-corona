/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Lottie from 'react-lottie';

import MencuciTangan from 'assets/lotties/mencuciTangan.json';

export default function LottieMencuciTangan() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MencuciTangan,
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
        Mencuci Tangan
      </h2>
      <p className="text-lg text-gray-400 text-center font-light mt-1 mb-4">
        Mencuci tangan menggunakan sabun/antiseptik menurunkan risiko penularan COVID-19 sebesar 35 persen.
      </p>
    </div>
  );
}
