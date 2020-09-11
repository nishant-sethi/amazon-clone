import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828640_.jpg"
          alt="amazon_banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 Oct. 2011"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="2"
            title="Fossil Women's Touchscreen Connected Smartwatch"
            image="https://images-na.ssl-images-amazon.com/images/I/815UVp28QGL._AC_UX679_.jpg"
            price={249.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Levi's Men's Barstow Western Casual Shirt"
            image="https://images-eu.ssl-images-amazon.com/images/I/41MGG72lmCL._AC_UL501_SR385,501_FMwebp_QL65_.jpg"
            price={22.33}
            rating={3}
          />
          <Product
            id="4"
            title="Kindle Paperwhite | Waterproof"
            image="https://images-na.ssl-images-amazon.com/images/I/61kgtwNslLL._AC_SY300_.jpg"
            price={199.99}
            rating={3}
          />
          <Product
            id="5"
            title="Xbox Live £10 Credit [Xbox Live Online Code]
"
            image="https://images-na.ssl-images-amazon.com/images/I/61rKZIxWb7L._AC_SL1465_.jpg"
            price={10}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Sony PlayStation DualShock 4 Controller - Black"
            image="https://images-na.ssl-images-amazon.com/images/I/71PYDxGDUiL._AC_SX679_.jpg"
            price={44.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
