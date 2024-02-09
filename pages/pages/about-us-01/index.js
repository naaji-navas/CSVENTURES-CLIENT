import Context from "@/context/Context";
import Link from "next/link";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import Banner from "@/components/About-Us-01/Banner";
import Teacher from "@/components/About-Us-01/Teacher";
import About from "@/components/Abouts/About";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import SplitTwo from "@/components/Split/Split-Two";
import PageHead from "@/pages/Head";
import BackToTop from "@/pages/backToTop";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";

const AboutUsPage = () => {
  return (
    <>
      <PageHead title="About Us 01 - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          
          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
            <About />
          </div>

          <FooterThree/>
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
