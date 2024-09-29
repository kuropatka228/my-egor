// components/Mainscreen.jsx
import React from 'react';
import listImage from '../assets/list.png';


export default function Mainscreen() {
    return (
        <div className="h-screen w-full flex justify-start">
            <div className="flex flex-col text-left">
                <span className="text-5xl text-gray-600 font-semibold mb-4">Простые вещи <br /> Из бумаги</span>
                <span style={{ color: '#85859B', maxWidth: '375px' }}>
                    Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.
                </span>
                <button className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:border-white py-6 px-4 mt-8 transition duration-300 ease-in-out">
                    Каталог
                </button>
            </div>
            <img src={listImage} alt="Картинка" className="w-1/2 h-auto object-cover" />    
        </div>
      );
}