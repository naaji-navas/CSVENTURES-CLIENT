import Image from "next/image";
import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import img from "../../../public/images/others/header.png";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import FooterThree from "@/components/Footer/Footer-Three";

const HeaderPage = () => {
  return (
    <>
      <PageHead title="Header - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Header" text="Header" />

          <main className="main-wrapper">
            <div className="header-thumbnail">
              <Image className="w-100" src={img} alt="header" />
            </div>
          </main>

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default HeaderPage;
