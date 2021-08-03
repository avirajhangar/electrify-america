import { Fragment } from "react";
import Banner from "../components/banner/banner";
import Posts from "../components/posts/posts";
import AbousUsSection from "../components/about-us/about-us";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <Posts />
      <AbousUsSection />
    </Fragment>
  );
}
