import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import PageHead from "@/pages/Head";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import EventHead from "@/components/Events/EventHead";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-One";
import EventGrid from "@/components/Events/Events";
import BackToTop from "@/pages/backToTop";

import EventData from "../../../data/events.json";

const EventGridPage = () => {
  return (
    <>
      <PageHead title="Event Grid - Online Courses Sikho Kamana" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Cart />

          <EventHead />
          <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <EventGrid
                isPagination={true}
                parentClass="event-grid-card"
                childClass="col-lg-4 col-md-6 col-12"
                getEvents={EventData}
              />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default EventGridPage;
