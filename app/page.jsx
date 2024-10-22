import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Image from 'next/image'; 

export default function Home() { 
    const descriptions = [
        "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
        "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
        "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
        "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."
      ];

      const name = [
        "Кейсы",
        "Пакеты",
        "Упаковки",
        "Другие изделия"
      ];
  return (  
    <div className="grid items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">   
      <header>   
        <Header />   
      </header>   
      <div className="flex flex-col h-[560px]"> 
        <div className="flex justify-between mb-10 gap-x-28">  
          <div className="flex justify-center flex-col text-left max-w-md">    
            <span className="text-6xl text-gray-600 font-light mb-4">Простые вещи <br /> Из бумаги</span>    
            <span style={{ color: '#85859B', maxWidth: '375px' }}>    
              Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.    
            </span>    
            <button className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:border-white py-6 px-4 mt-8 transition duration-300 ease-in-out">    
              Каталог    
            </button>    
          </div>    
          <div className="flex-shrink-0">   
            <Image src='/list.png' width={540} height={560} alt="Описание изображения"/>        
          </div>  
        </div> 
      </div> 

      <div className="w-full bg-gray-200 p-10 pl-36 pr-36">
        <div className="flex justify-between">  
          <div className="flex items-center">  
            <Image src='/image1.png' width={150} height={150} alt="Картинка 1" />  
            <div className="ml-4">  
              <span className="block text-2xl">V.1</span> 
              <span className="block text-gray-800">Результат вашего обучения</span> 
            </div> 
          </div>  
          <div className="flex items-center">  
            <Image src='/image2.png' width={150} height={150} alt="Картинка 2" />  
            <div className="ml-4">  
              <span className="block text-2xl ">V.2</span> 
              <span className="block text-gray-800">Результат вашего обучения</span> 
            </div> 
          </div>  
          <div className="flex items-center">  
            <Image src='/image3.png' width={150} height={150} alt="Картинка 3" />  
            <div className="ml-4">  
              <span className="block text-2xl">V.3</span> 
              <span className="block text-gray-800">Результат вашего обучения</span> 
            </div> 
          </div> 
        </div>
        <div className="flex mt-10">
          <div className="w-1/2">
            <Image src='/large-image.png' width={730} height={560} alt="Большая картинка" />
          </div>
          <div className="w-1/2 flex items-center pl-10">
          
            <p className="text-xl text-gray-800">
            <span className="text-6xl text-gray-600 font-light mb-4">Максимальная белизна</span>    <br /><br />
            Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
            <br /><br />
            Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.           </p>
          </div>
        </div>
      </div> 
      <div className="flex mt-10 mb-10">
            <div className="flex flex-col items-center mt-10">
                <div className="flex justify-center space-x-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex flex-col items-baseline">
                    <Image src={`/services${index + 1}.png`} width={255} height={180} alt={`Картинка ${index + 1}`} />
                    <p className="text-2xl text-gray-600 mt-2 max-w-[255px]">{name[index]}</p>
                    <p className="text-sm text-gray-600 mt-2 max-w-[255px]">{descriptions[index]}</p>
                    
                    <button className="bg-blue-800 text-white py-2 px-4 mt-3 transition duration-300 ease-in-out hover:bg-blue-600">
                        Подробнее
                    </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="w-full bg-gray-200 p-10 pl-36 pr-36 mt-8 flex flex-wrap justify-center gap-4">
    {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="transition duration-500 ease-in-out hover:scale-105 cursor-pointer">
            <Image src={`/partners${index + 1}.png`} width={255} height={180} alt={`Картинка ${index + 1}`} />
        </div>
    ))}
</div> 
<div className="flex flex-col h-[560px]"> 
    <div className="flex justify-between mt-20 gap-x-28 flex-grow">  
        <div className="flex-shrink-0">   
            <Image src='/book.png' width={730} height={410} alt="Описание изображения"/>        
        </div>  
        <div className="flex justify-center flex-col text-left max-w-md">    
            <span className="text-6xl text-gray-600 font-light mb-4">Простые вещи <br /> Из бумаги</span>    
            <span style={{ color: '#85859B', maxWidth: '375px' }}>    
                Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.    
            </span>    
            <button className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:border-white py-6 px-4 mt-8 transition duration-300 ease-in-out">    
                Купить    
            </button>    
        </div>    
    </div> 
    <footer>
        <Footer />
    </footer>
</div>

    </div>

  ); 
}