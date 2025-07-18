import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Newsletter from "../components/Newsletter";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <main>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <Newsletter />
    </main>
  );
};

export default Home;
