import React from 'react';

export const Input = ({ onChange }) => (
  <input placeholder="Please type your city" onChange={e => onChange(e.target.value)} />
);
