import './App.css';
import ThemeToggle from './Component/ThemeToggle';
import { ContextProvider } from './Context/ThemeContext';

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeToggle />
      </ContextProvider>
    </>
  )
}

export default App