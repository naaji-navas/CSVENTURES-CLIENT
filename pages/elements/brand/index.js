import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BrandOne from "@/components/Brand/Brand-One";
import BrandThree from "@/components/Brand/Brand-Three";
import BrandTwo from "@/components/Brand/Brand-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import FooterThree from "@/components/Footer/Footer-Three";

const BrandPage = () => {
  return (
    <>
      <PageHead title="Brand - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Brand" text="Brand" />

          <div className="rbt-brand-area bg-color-white rbt-section-gap">
            <div className="container">
              <BrandOne />
            </div>
          </div>

          <div className="rbt-brand-area bg-color-extra2 rbt-section-gap">
            <BrandTwo />
          </div>

          <div className="rbt-brand-area bg-color-white rbt-section-gap">
            <BrandThree />
          </div>

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default BrandPage;
