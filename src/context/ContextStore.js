/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { ContextProvider } from './Context';

export const initContext = {};

// eslint-disable-next-line react/prop-types
export default ({ children = null }) => {
  const [context, setContext] = useState(initContext);
  return <ContextProvider value={{ context, setContext }}>{children}</ContextProvider>;
};
