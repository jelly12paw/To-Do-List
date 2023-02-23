import { createContext, useContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext();

export function DarkmodeProvider({children}) {
    const [darkmode, setDarkmode] = useState(false);
    const toggleDarkmode = () => {
        setDarkmode(!darkmode);
        updateDarkmode(!darkmode);
    };

    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && 
            window.matchMedia('(prefers-color-scheme: dark').matches);
            // 리액트 내부 스테이트에 먼저 다크모드
            setDarkmode(isDark);
            // html 다크 클래스 
            updateDarkmode(isDark);
    // 실행은 딱 한 번만
    }, []);

    return <DarkmodeContext.Provider value={{darkmode, toggleDarkmode}}>{children}</DarkmodeContext.Provider>
}

export const useDarkmode = () => useContext(DarkmodeContext);

function updateDarkmode(darkmode) {
    if (darkmode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}