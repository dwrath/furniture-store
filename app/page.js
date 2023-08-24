import React from 'react'
import Image from "next/image";
import desktop1 from '../public/images/desktop-image-hero-1.jpg'
import logo from '../public/images/logo.svg'
import shop_arrow from '../public/images/icon-arrow.svg'
import left_arrow from '../public/images/icon-angle-left.svg'
import right_arrow from '../public/images/icon-angle-right.svg'
import about_dark from '../public/images/image-about-dark.jpg'
import about_light from '../public/images/image-about-light.jpg'


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row no-gap no-padding full-width">
          <div className="column header-image">
            <Image src="/images/desktop-image-hero-1.jpg" alt="chair" className="header-img" width={1000} height={600}/>
              <div className="logo-wrapper">
                <Image src={logo} alt="room logo"/>
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
                  <Image src={shop_arrow} alt="Arrow" className="shop-arrow"/>
                </div>
              </div>
            </div>
            <div className="row arrow-row arrow-box gap-30">
              <div className="column justify-center shrink">
                <div className="arrow-wrapper">
                  <Image src={left_arrow} alt="arrow" className="left-arrow"/>
                </div>
              </div>
              <div className="column justify-center shrink">
                <div className="arrow-wrapper">
                  <Image src={right_arrow} alt="arrow" className="right-arrow"/>
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
              <Image src={about_dark} alt="chair"/>
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
              <Image src={about_light} alt="chair"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
