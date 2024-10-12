import Head from "next/head";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import FilterToolBar from "@/components/FilterToolbar/FilterToolbar";


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Discover a wide range of products." />
      </Head>
      <Header />
      <HeroSection />
      <FilterToolBar />
    </>
  );
};

export default HomePage;
