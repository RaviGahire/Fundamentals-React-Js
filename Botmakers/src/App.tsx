import { About } from "./components/About";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import { AppRoutes } from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;

export const AllComponents = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
};
