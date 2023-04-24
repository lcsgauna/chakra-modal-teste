import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import MyModal from './ModalDrawer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <MyModal/>
    </ChakraProvider>
  );
}

export default App;
