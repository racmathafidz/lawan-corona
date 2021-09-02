/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button type="link" href="/">
      <h1 className="text-gray-800 text-3xl font-semibold tracking-tight leading-none">Lawan</h1>
      <h1 className="text-red-600 text-3xl font-semibold tracking-tight leading-none">Corona</h1>
    </Button>
  );
}
