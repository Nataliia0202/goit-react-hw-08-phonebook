import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
