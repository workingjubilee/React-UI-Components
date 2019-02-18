import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
  return (
    <header>
      <ImageThumbnail />
      <div className="headerText">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
}

export default HeaderContainer;
