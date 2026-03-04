import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const translations = {
    si: {
        logo_name: "මඟ දිගේ", tagline: "සෑම ගමනකටම සහකරුවෙක්",
        nav_home: "මුල් පිටුව", nav_map: "සිතියම", nav_contact: "සම්බන්ධ වන්න",
        find_btn: "සිතියම විවෘත කරන්න", hero_title: "මඟ දිගේ ගවේෂණය කරන්න",
        hero_sub: "අඩු මුදලට හොඳම සේවාවන් මෙතැනින්.",
        budget_eats: "අඩු මුදලට කෑම", garage: "ගරාජ්", budget_stays: "නවාතැන්", grocery: "කඩ",
        gallery_title: "සංචාරක මතකයන්", reviews_title: "සංචාරකයින්ගේ අදහස්",
        contact_title: "සංවර්ධකයා හා සම්බන්ධ වන්න", locate_me: "මගේ ස්ථානය"
    },
    en: {
        logo_name: "Maga Dige", tagline: "Partner for every journey",
        nav_home: "Home", nav_map: "Map", nav_contact: "Contact",
        find_btn: "Open Map", hero_title: "Explore Sri Lanka",
        hero_sub: "Find best local services and budget spots.",
        budget_eats: "Budget Eats", garage: "Garage", budget_stays: "Budget Stays", grocery: "Grocery",
        gallery_title: "Gallery", reviews_title: "Top Reviews",
        contact_title: "Contact Developer", locate_me: "Locate Me"
    },
    ta: {
        logo_name: "மக திகே", tagline: "ஒவ்வொரு பயணத்திற்கும் ஒரு துணை",
        nav_home: "முகப்பு", nav_map: "வரைபடம்", nav_contact: "தொடர்பு",
        find_btn: "வரைபடத்தைத் திறக்கவும்", hero_title: "மக திகே உடன் பயணம்",
        hero_sub: "சிறந்த உள்ளூர் சேவைகள் மற்றும் மலிவு இடங்கள்.",
        budget_eats: "மலிவு உணவு", garage: "கராஜ்", budget_stays: "தங்குமிடம்", grocery: "மளிகை",
        gallery_title: "தொகுப்பு", reviews_title: "கருத்துக்கள்",
        contact_title: "தொடர்பு கொள்ளவும்", locate_me: "என்னை கண்டுபிடி"
    }
};

export function AppProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [lang, setLang] = useState(localStorage.getItem('preferred_lang') || 'si');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('preferred_lang', lang);
    }, [lang]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const t = (key) => translations[lang][key] || key;

    return (
        <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
            {children}
        </AppContext.Provider>
    );
}