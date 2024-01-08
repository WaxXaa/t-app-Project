import React from 'react';
import { Button } from 'keep-react'
import CategoryCarousel from '../categories/Categories';
import '../../App.css'
function NavBar() {
  return (
    <>
      <nav className='nav-main'>
        <Button
          className='child'
          size="xl"
          id='nav-btn' type="outlineGray"
          pill={true}>
          Default
        </Button>
        <Button
          circle={true}
          size="xl"
          className='child' type="outlineGray"
          pill={true}>
          <span className="material-symbols-outlined">
            tune
          </span>
        </Button>

        <div className='container-img-profile'>
          {/* <img src="" alt="foto de perfil" /> */}

        </div>
      </nav>
      <div className='categories-carusel'>
        <CategoryCarousel />
      </div>
    </>
  );
}

export default NavBar;