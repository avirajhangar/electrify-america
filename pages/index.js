import { Fragment } from "react";
import Banner from "../components/banner/banner";
import Posts from "../components/posts/posts";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <Posts />
    </Fragment>
  );
}
