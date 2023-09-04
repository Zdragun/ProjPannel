
import '../src/css/App.css';
import { useState } from 'react';
import man1 from './images/good-looking-young-coach-taking-notes-about-new-routine-he-s-about-assign1.png'
import man2 from './images/muscular-guy-green-sportswear-isolated-grey1.png'
import man3 from './images/sportive-man-black-shirt-closing-his-arm-muscles1.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
function App() {

  const images = [
    { src: man3, class: 'red-bg' },
    { src: man1, class: ''},
    { src: man2, class: '' },
    { src: man3, class: 'red-bg' },
    { src: man1, class: ''},
    { src: man2, class: '' },
    { src: man3, class: 'red-bg' },
  ];
  const imageTexts = [
    "Marvin McKinney",
    "Benjamin Harrison",
    "Jackson Turner",
    "Marvin McKinney",
    "Benjamin Harrison",
    "Jackson Turner",
    "Marvin McKinney",
    
  ];
  const maxVisibleItems = 4;

  const [startIdx, setStartIdx] = useState(0);

  const handlePrevClick = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - 1);
    }
  };

  const handleNextClick = () => {
    if (startIdx < images.length - maxVisibleItems) {
      setStartIdx(startIdx + 1);
    }
  };

  return (


    <div className="template">
      <header className='header'>
        <div className='container'>
          <div className='header_inner'>
            <a className='logo' href='#'>
              <h2 className='logo-text'>Logo</h2>
            </a>
            <nav className='navbar'>
              <ul className='menu'>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Services</a>
                </li>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Plans</a>
                </li>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Trainers</a>
                </li>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Appointments</a>
                </li>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Venues</a>
                </li>
                <li className='menu_item'>
                  <a className='menu_item_link' href='#'>Shop</a>
                </li>
              </ul>
            </nav>
            <a className='btn' href='#' >Login</a>
          </div>
        </div>
      </header>
      <main className='body_menu'>
        <div className='container'>
          <div className='body_container'>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
            <div className="item"><p>Pilates</p></div>
            <div className="item"><p>Yoga</p></div>
            <div className="item"><p>Pilates&<br />Yoga</p></div>
          </div>
        </div>
      </main>
      
      <div className="carousel-container">
      <div className="carousel">
        {images.slice(startIdx, startIdx + maxVisibleItems).map((image, index) => (
          <div className='item-carousel'  key={index}>
             <p className='ss'>{imageTexts[startIdx + index]}</p>
            <img src={image.src} alt={`Image ${index + 1}`} className={image.class} />
         </div>
        ))}
      </div>
      <button className="carousel-button prev-button" onClick={handlePrevClick} disabled={startIdx === 0}><IoIosArrowBack  fontSize={35}/></button>
      <button className="carousel-button next-button" onClick={handleNextClick} disabled={startIdx === images.length - maxVisibleItems}><IoIosArrowForward fontSize={35}/></button>
    </div>
      
      </div>

  );
}

export default App;
