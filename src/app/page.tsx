"use client";

import { About } from '@/components/About';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import  Header  from '../components/Header/Header';
import { JoinCommunity } from '@/components/JoinCommunity';
import  Properties  from '../components/Properties/Properties';
import { Services } from '@/components/Services';
import  TransitionPage  from '../components/TransitionPage/TransitionPage';
import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import('../components/Location').then(mod => mod.Location),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <TransitionPage />
      <Header />
      <main>
        <Banner />
        <Properties />
        <div className="max-w-6xl mx-auto">
          <Services />
          <LocationMap />
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>
  );
};

export default Home;