import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Gallery from "@/components/Gallery/Gallery";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterThree from "@/components/Footer/Footer-Three";

const GalleryPage = () => {
  return (
    <>
      <PageHead title="Gallery - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Gallery" text="Gallery" />

          <Gallery />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default GalleryPage;
