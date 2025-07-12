import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Rethinkenergy from '../components/Rethinkenergy';
import Advantage from '../components/Advantage';
import Inquery from '../components/Inquery';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Ourservice from '../components/Ourservice';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const { t } = useTranslation('en', { useSuspense: false });
  useEffect(() => {
    AOS.init({
      once: true
    });

  }, [])
  return (
    <div className="sectionData">
    <h1 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "24px" }}>
      Welcome to Renevatec — Powered by Anurag 🚀
    </h1>
      <Slider />
      {/*<Ourservice />*/}
      <Rethinkenergy />
      <Advantage />
      <Inquery />
      <Footer />
    </div >
  )
}
