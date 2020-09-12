import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1233211"
            title="The lean startup"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
          />
          <Product
            id="1233212"
            title="Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="http://images.esellerpro.com/3493/I/756/0/KEN-PCR-KMX51G-R.jpg"
            rating={4}
          />
          <Product
            id="1233213"
            title="UGREEN USB C Hub HDMI 6-in-1 USB C Adapter Docking Station USB-C Hub with 4K HDMI USB 3.0 SD Card Reader Compatible with MacBook Pro 2020, Dell XPS 13, iPad Pro 2020, Surface Pro 7, Surface Go 2 etc."
            price={23.99}
            image="https://i5.walmartimages.com/asr/79fee715-47c2-4ff0-a6f6-0cad9b3002f7_1.da1d4bab9777341d1de80a8db68947f7.jpeg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1233214"
            title="Willful Smartwatch - Pedometer, Sleep Monitor & Stopwatch for Women & Men"
            price={39.99}
            image="https://cdn.couponmatrix.uk/posts/wp-content/uploads/2019/12/61Mr1jwUmOL.jpg"
            rating={4}
          />

          <Product
            id="1233215"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261_sd.jpg"
            rating={5}
          />

          <Product
            id="1233216"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) -Silver (4th Generation)"
            price={598.99}
            image="https://www.bhphotovideo.com/images/images2500x2500/apple_mlym2ll_a_9_7_ipad_pro_256gb_1241362.jpg"
            rating={4}
          />
          <Product
            id="1233217"
            title="Lenovo Yoga C640 Laptop"
            price={1198.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/uk-electronics/product_content/lenovo/Yoga_13_angles_L.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1233218"
            title="Samsung LC49RG90SSUXEN 49-inch Curved LED Gaming Monitor"
            price={599.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6346/6346832_sd.jpg"
            rating={3}
          />

          <Product
            id="1233219"
            title="Sony Alpha 6400 E-Mount System Camera (24 Megapixels, 4K Video, 180° Flip Display, 0.02 Seconds Real-time Auto-focus With 425 Contrast AF-Points, XGA OLED Viewfinder, Black"
            price={999.99}
            image="https://blog.bestbuy.ca/wp-content/uploads/2019/01/Sony-Alpha-6400-header.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
