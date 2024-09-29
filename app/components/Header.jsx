// components/Header.jsx
export default function Header() { 
  return ( 
    <header 
      className="fixed top-0 left-5 w-full h-16 bg-white flex justify-between items-center py-4 shadow-sm" 
    > 
      <div className="flex items-center ml-10">
        <span className="w-4 h-4 border border-black rounded-full"></span>
        <span className="text-black ml-2 mr-2">Simple</span>
        <span className="w-7 h-4 border border-black rounded-full mr-2"></span>
        <span className="w-4 h-4 border border-black rounded-full"></span>
      </div>
      <nav className="flex items-center mr-12">
        <ul className="flex items-center">
          <li>
            <a href="#" className="text-black">О нас</a>
          </li>
          <li>
            <a href="#" className="text-black ml-4">Услуги</a>
          </li>
          <li>
            <a href="#" className="text-black ml-4">Документы</a>
          </li>
          <li>
            <a href="#" className="text-black ml-4">Контакты</a>
          </li>
        </ul>
        <div className="flex items-center ml-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </nav>
    </header> 
  ); 
}