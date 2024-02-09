import { Provider } from "react-redux";
import Store from "@/redux/store";
import PageHead from "../Head";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderTopBar from "@/components/Header/HeaderTopBar/HeaderTopBar";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import ClassicLms from "@/components/05-classic-lms/05-ClassicLms";
import FooterThree from "@/components/Footer/Footer-Three";

const ClassicLmsLayout = () => {
  return (
    <>
      <PageHead title="Home Classic Lms - Online Courses Sikho Kamana" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderTopBar />
          <HeaderStyleNine headerType="" />
          <ClassicLms />
          <Cart />

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default ClassicLmsLayout;
