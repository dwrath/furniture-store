import React from 'react'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row no-gap no-padding full-width">
          <div className="column header-image">
            <img src="./images/desktop-image-hero-1.jpg" alt="chair" className="header-img"/>
              <div className="logo-wrapper">
                <img src="./images/logo.svg" alt="logo"/>
              </div>
              <div className="row">
                <nav className="nav-row">
                  <ul className="nav-links">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                  </ul>
                </nav>
              </div>
          </div>
          <div className="column">
            <div className="column justify-center align-center header-padding">
              <div className="column justify-center align-center shrink">
                <div className="row shrink header-row">
                  <h1 className="header-text">Discover innovative ways to decorate</h1>
                </div>
                <div className="row shrink paragraph-row">
                  <p className="paragraph-text">
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                  </p>
                </div>
              </div>
              <div className="row">
                <a className="shop-btn">SHOP NOW</a>
                <div className="shop-arrow-wrapper">
                  <img src="images/icon-arrow.svg" className="shop-arrow"/>
                </div>
              </div>
            </div>
            <div className="row arrow-row arrow-box gap-30">
              <div className="column justify-center shrink">
                <div className="arrow-wrapper">
                  <img src="./images/icon-angle-left.svg" className="left-arrow"/>
                </div>
              </div>
              <div className="column justify-center shrink">
                <div class="arrow-wrapper">
                  <img src="./images/icon-angle-right.svg" class="right-arrow"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row full-width no-padding">
          <div className="column left-col">
            <div className="left-image-wrapper">
              <img src="./images/image-about-dark.jpg" alt="chair"/>
            </div>
          </div>
          <div className="column middle-col justify-center gap-20">
            <div className="row middle-col-title">
              <p>ABOUT OUR FURNITURE</p>
            </div>
            <div className="row">
              <p className="about-furniture-text">
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
              </p>
            </div>
          </div>
          <div className="column right-col">
            <div className="right-image-wrapper">
              <img src="images/image-about-light.jpg" alt="chair"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
