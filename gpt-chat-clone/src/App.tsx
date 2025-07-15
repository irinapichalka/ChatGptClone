import AppRouter from './AppRouter';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
