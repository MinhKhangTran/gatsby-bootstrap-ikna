import * as React from "react";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Feat from "../components/Feat";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <h1 className="bg-orange-100 text-white">Hi Bootstrap and Gatsby</h1>
      <Hero />
      <Feat />
      <Testimonials />
      <FAQ />
      <CTA />
      <Team />
    </Layout>
  );
};

export default IndexPage;
