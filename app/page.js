"use client"
import React, {useState} from 'react'
import Image from "next/image";
import desktop1 from '../public/images/desktop-image-hero-1.jpg'
import logo from '../public/images/logo.svg'
import shop_arrow from '../public/images/icon-arrow.svg'
import left_arrow from '../public/images/icon-angle-left.svg'
import right_arrow from '../public/images/icon-angle-right.svg'
import about_dark from '../public/images/image-about-dark.jpg'
import about_light from '../public/images/image-about-light.jpg'


export default function Home() {
  let data = [{img:'/images/desktop-image-hero-1.jpg', header: 'Discover innovative ways to decorate', paragraph:'We provide unmatched quality, comfort, and style for property owners across the country.\n' +
        '                Our experts combine form and function in bringing your vision to life. Create a room in your\n' +
        '                own style with our collection and make your property a reflection of you and what you love.'},{img:'/images/desktop-image-hero-2.jpg', header: ' We are available all across the globe', paragraph:'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. \n' +
        '  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our \n' +
        '  store locator. Any questions? Don\'t hesitate to contact us today.'},{img:'/images/desktop-image-hero-3.jpg', header: 'Manufactured with the best materials', paragraph:' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \n' +
        '  to ensure that every product is made as perfect and as consistent as possible. With three decades of \n' +
        '  experience in this industry, we understand what customers want for their home and office.'}]
  const [info, setInfo] = useState();
  let image = data[0].img
  let header = data[0].header
  let paragraph = data[0].paragraph
  function handleClick(){
    setInfo()
  }
  return (
    <>
      <div className="container">
        <div className="row no-gap no-padding full-width">
          <div className="column header-image">
            <Image src={image} alt="chair" className="header-img" width={1000} height={600}/>
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
                  <h1 className="header-text">{header}</h1>
                </div>
                <div className="row shrink paragraph-row">
                  <p className="paragraph-text">{paragraph}</p>
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
                  <Image src={left_arrow} alt="arrow" className="left-arrow" onClick={handleClick}/>
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
