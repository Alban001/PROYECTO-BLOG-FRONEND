import React, { createContext, useState, useContext, useCallback } from 'react';
import Cookies from 'js-cookie';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
    Cookies.set('modalShown', 'true', { expires: 0.04 }); // Set cookie to expire in 1 day (0.04 represents one hour)
  }, []);

  const hideModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
