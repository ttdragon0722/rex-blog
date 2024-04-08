"use client"
import React, { createContext, useContext, useState } from "react";

interface LanguageOutput {
    lang: languageType;
    setLang: React.Dispatch<React.SetStateAction<languageType>>;
}

type languageType = "ch-TW" | "en-us"

const languageContext = createContext<LanguageOutput>({lang:'ch-TW',setLang:()=>{}});
export const useLanguageContext = () => {
    return useContext<LanguageOutput>(languageContext);
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang,setLang] = useState<languageType>("ch-TW");

    const values: LanguageOutput = {
        lang,setLang
    }
    return <languageContext.Provider value={values}>
        {children}
    </languageContext.Provider>
}