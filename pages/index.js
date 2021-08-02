import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Banner from "../components/banner/banner";

export default function Home() {
  return (
    <Fragment>
      <Banner />
    </Fragment>
  );
}
