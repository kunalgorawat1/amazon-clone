import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81pXJW9qztL._QL85_V1_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          title="The divine comedy"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg"
          rating={5}
        />
        <Product
          title="Thinkpad P15"
          price={1000.99}
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSapNraRdW0I_fUo3_aqCzb9RAkPEXHszHZeD8CNK2C-WIkntMKkaptk4qpn139MUxcyYtGKKylmbg&usqp=CAc"
          rating={5}
        />
        {/* Product */}
      </div>

      <div className="home__row">
        <Product
          title="Kindle paperwhite 5"
          price={600.99}
          image="https://media.wired.com/photos/5b284969ba2c1651eb8928d5/master/pass/oasis-TA.jpg"
          rating={4}
        />
        <Product
          title='Samsung 24" monitor'
          price={400.89}
          image="https://images.samsung.com/is/image/samsung/p6pim/levant/lf24t350fhmxzn/gallery/levant-t35f-lf24t350fhmxzn-435095436?$720_576_PNG$"
          rating={5}
        />
        <Product 
        title="Samsung galaxy S10"
        price={700.68}
        image="https://m.media-amazon.com/images/I/61HQVLTKt7L._AC_SS450_.jpg"
        rating={4}
        />
        {/* Product */}
        {/* Product */}
      </div>

      <div className="home__row">
        <Product 
        title="BMW M8"
        price="TOO MUCH"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPMzweMeZhxVzWyEHq-QNQIZIX8-SF1Ic6g&usqp=CAU"
        rating={10}
        />
      </div>
    </div>
  );
}

export default Home;
