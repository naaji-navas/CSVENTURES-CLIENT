import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Instagram from "@/components/Instagram/Instagram";
import PrivacyPolicy from "@/components/Privacy-Policy/PrivacyPolicy";
import FooterThree from "@/components/Footer/Footer-Three";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHead title="Privacy Policy - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Cart />

          <PrivacyPolicy />
          <Instagram />

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default PrivacyPolicyPage;
