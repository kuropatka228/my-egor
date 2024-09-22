// components/Header.jsx
import logoUrl from '../image/logo.png'; 

export default function Header() { 
    return ( 
      <header 
        className="fixed top-0 left-0 w-full h-16 bg-blue-500 flex justify-between items-center py-4" 
      > 
        <div className="logo text-white"> 
          <span>ЗАБЭКО</span> 
        </div> 
        <nav> 
          <ul className="flex items-center"> 
            {['О нас', 'Услуги', 'Документы', 'Контакты'].map((item) => (
              <li key={item}> 
                <a 
                  href="#" 
                  className="text-white transition duration-300 ease-in-out relative group" 
                > 
                  {item}
                  <span className="block h-0.5 w-full bg-white transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute bottom-0 left-0" style={{ borderBottom: '1px solid #FFFFFF' }}></span> 
                </a> 
              </li>
            ))}
          </ul> 
        </nav> 
      </header> 
    ); 
}
