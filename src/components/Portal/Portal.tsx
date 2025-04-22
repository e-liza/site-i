// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';

// import { rootElement } from '../..';

// interface IPortalProps {
//   containerElement?: HTMLElement;
// }

// const Portal: React.FC<IPortalProps> = ({ children, containerElement = rootElement }) => {
//   useEffect(() => {
//     const modalEl = document.createElement('div');
//     containerElement?.appendChild(modalEl);

//     return () => {
//       containerElement?.removeChild(modalEl);
//     };
//   }, [containerElement]);

//   return containerElement ? ReactDOM.createPortal(children, containerElement) : null;
// };

// export default Portal;
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  containerElement?: HTMLElement;
  children: React.ReactNode; // Ensure that children is typed properly
}

const Portal: React.FC<IPortalProps> = ({ children, containerElement }) => {
  useEffect(() => {
    const modalEl = document.createElement('div');
    containerElement?.appendChild(modalEl);

    return () => {
      containerElement?.removeChild(modalEl);
    };
  }, [containerElement]);

  return containerElement ? ReactDOM.createPortal(children, containerElement) : null;
};

export default Portal;
