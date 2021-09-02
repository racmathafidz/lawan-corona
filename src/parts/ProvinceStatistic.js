/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';

import formatDate from 'utils/formatDate';
import formatNumber from 'utils/formatNumber';

export default function ProvinceStatistic({ data, date }) {
  return (
    <Fade bottom>
      <section>
        <div className="border rounded-lg shadow-xl py-9 mx-4 xl:mx-40">
          <div className="flex flex-col lg:flex-row justify-center px-2 sm:px-3 lg:px-1">
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
              Statistik Kasus&nbsp;
            </h1>
            <h1 className="text-4xl sm:text-5xl font-medium text-red-600 text-center">
              Corona&nbsp;
            </h1>
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
              per Provinsi
            </h1>
          </div>
          <p className="text-gray-400 text-center text-lg sm:text-xl font-light mb-1 px-2 sm:px-3 lg:px-1">
            Berikut detail statistik kasus corona per provinsi di Indonesia per
            {' '}
            {formatDate(date.lastUpdate)}
            {' '}
            :
          </p>

          <div className="overflow-x-auto sm:overflow-hidden border-b border-gray-200 rounded-xl my-6 xl:mx-16">
            <table className="w-full divide-y divide-gray-200 xl:mr-10">
              <thead className="bg-gray-50 ">
                <tr className="text-sm sm:text-base text-gray-500">
                  <th className="px-6 py-3">
                    No.
                  </th>
                  <th className="px-6 py-3">
                    Provinsi
                  </th>
                  <th className="px-6 py-3">
                    Positif
                  </th>
                  <th className="px-6 py-3">
                    Sembuh
                  </th>
                  <th className="px-6 py-3">
                    Meninggal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                                    data
                                      .filter((item, index) => index <= 33)
                                      .map((item, index) => (
                                        <tr className="text-sm sm:text-base text-gray-500">
                                          <td className="text-center py-4">
                                            {`${index + 1}.`}
                                          </td>
                                          <td className="py-4">
                                            {item.provinsi}
                                          </td>
                                          <td className="text-center py-4">
                                            {formatNumber(item.kasusPosi)}
                                          </td>
                                          <td className="text-center py-4">
                                            {formatNumber(item.kasusSemb)}
                                          </td>
                                          <td className="text-center">
                                            {formatNumber(item.kasusMeni)}
                                          </td>
                                        </tr>
                                      ))
                                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fade>
  );
}
