import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import IdeasReality from "@/components/ideas-reality/IdeasReality";
import TemplateSection from "@/components/template-section/TemplateSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <TemplateSection />
      <IdeasReality />
      <Footer />
    </div>
  );
};

export default page;
