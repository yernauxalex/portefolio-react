import { LanguageContext } from './Utils/LanguageContext';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [languageState, setLanguageState] = useState({ lang: 'en-GB' });
    useEffect(() => {
        const langUser = window.navigator.language;
        setLanguageState({ lang: langUser });
    }, []);
    return (
        <LanguageContext.Provider value={{ languageState, setLanguageState }}>
            <div className="App">
                <Header />
                <Home />
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
