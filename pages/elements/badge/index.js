import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Badge from "@/components/Badge/Badge";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import FooterThree from "@/components/Footer/Footer-Three";

const BadgePage = () => {
  return (
    <>
      <PageHead title="Badge - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Welcome to Sikho Kamana Badge" text="Badge" />

          <div className="rbt-badge-area rbt-section-gap bg-color-white position-relative">
            <Badge />
          </div>

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default BadgePage;
