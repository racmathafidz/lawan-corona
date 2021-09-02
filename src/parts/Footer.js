/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="flex-col text-center mt-7 px-3">
        <p className="text-lg text-gray-400 font-light">
          May the corona disappear quickly - Lawan Corona
        </p>
        <div className="flex-row">
          <p className="inline-block text-lg text-gray-400 font-light">
            Made with &#x2764; by&nbsp;
          </p>
          <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="text-lg text-red-700 font-light" isExternal>
            Racmat Hafidz Fadli
          </Button>
        </div>
      </div>
    </div>
  );
}
