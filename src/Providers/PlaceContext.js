import {createContext, useState, useContext} from 'react';

const PlaceProvider = createContext();

const PlaceContext = ({children}) => {
  const [selectedCity, setSelectedCity] = useState('');
  return (
    <PlaceProvider.Provider value={{selectedCity, setSelectedCity}}>
      {children}
    </PlaceProvider.Provider>
  );
};
export const usePlaceContext = () => useContext(PlaceProvider);
export default PlaceContext;
