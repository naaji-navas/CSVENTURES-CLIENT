import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Button from "@/components/Button/Button";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterThree from "@/components/Footer/Footer-Three";

const Page = () => {
  return (
    <>
      <PageHead title="Button - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Welcome to Sikho Kamana Button" text="Button" />

          <Button />

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default Page;
