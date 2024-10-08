import PageHead from "./Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import NotFound from "@/components/NotFound/NotFound";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Page not found - Online Courses Sikho Kamana" />


        <NotFound />

        <Separator />
        <FooterThree />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
