import Business from "./components/Business/Business";
import Cards from "./components/Cards/Cards";
import Control from "./components/Control";
import Footer from "./components/Footer/Footer";
import PaymentMethod from "./components/Payment/PaymentMethod";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner from "./components/banner";
import Header from "./components/header/header";
import Stats from "./components/stats/stats";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Stats />
      <Business />
      <Cards />
      <Control />
      <Testimonials />
      <PaymentMethod />
      <Footer />
    </>
  );
};

export default page;
