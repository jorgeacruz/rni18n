# Internaciolization App
Using this simple library "i18next react-i18next", you can apply in your app following steps bellow.

## Create your app
````
npx create-expo-app {nameapp}
````

## Install Library
````
npm install i18next react-i18next
`````
## Configure i18next
Inside the folder utils, create an file to set language:<br/>
Ex: i18n.json
`````
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// Importing translation files
import pt from "./pt.json";
import en from "./en.json";
import sp from "./spain.json";

// Initializing i18next with the translation files
i18next.use(initReactI18next).init({
  // Debugging options
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    pt: pt,
    en: en,
    sp: sp,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
`````


## Configure your languages
<p>Create files responsible language you need translate (english, spanish, portuguese)<br>
Ex: pt.json (portugue) / en.json (english)...etc.

`````
{
"translations": 
    {
        "Translate this":"Traduza isso",
        "Translate new word":"Traduzir nova palavra"
    }
}
`````
