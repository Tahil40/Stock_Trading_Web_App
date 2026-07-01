import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LeftSection
        image_url={"/public/assets/media/images/kite.png"}
        product_name={"Kite"}
        product_description={
          "klwjlwejklwjfklwmlkfwjfnfjnrkjfnekjfnekjnfkjnekjfnjkerfnek"
        }
        try_demo={"Try Demo"}
        learn_more={"Learn More"}
        google_play={""}
        app_store={""}
      />
      <RightSection
        image_url={"/public/assets/media/images/console.png"}
        product_name={"Console"}
        product_description={
          "jkenjwen fhwuirhfiubfijerbfifbiwoi;few iofjoie iowjo jfoijwoifjoeirjfrjen ej"
        }
        learn_more={"Learn More"}
      />
      <LeftSection
        image_url={"/public/assets/media/images/coin.png"}
        product_name={"Coin"}
        product_description={
          "klwjlwejklwjfklwmlkfwjfnfjnrkjfnekjfnekjnfkjnekjfnjkerfnek"
        }
        try_demo={"Try Demo"}
        learn_more={"Learn More"}
        google_play={""}
        app_store={""}
      />
      <RightSection
        image_url={"/public/assets/media/images/kiteconnect.png"}
        product_name={"Kite Connect API"}
        product_description={
          "jknwn uwdiwl wlfiufiuenfiuhfoiw;d9wuf9wj i fj;iorjfioejfoe"
        }
        learn_more={"Learn More"}
      />
      <LeftSection
        image_url={"/public/assets/media/images/varsity.png"}
        product_name={"Varsity"}
        product_description={
          "klwjlwejklwjfklwmlkfwjfnfjnrkjfnekjfnekjnfkjnekjfnjkerfnek"
        }
        try_demo={"Try Demo"}
        learn_more={"Learn More"}
        google_play={""}
        app_store={""}
      />
      <Universe />
      <Footer />
    </>
  );
};

export default ProductLayout;