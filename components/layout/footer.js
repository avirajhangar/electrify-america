import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import router from "next/router";
import data from "../../public/data/data.json";
import Image from "next/dist/client/image";

const Footer = () => {
  const [footerDetails, setFooterDetails] = useState([]);

  useEffect(() => {
    if (data.charging) {
      setFooterDetails(data.footer);
    }
  }, []);
  console.log(footerDetails);
  return (
    <FooterContainer>
      {footerDetails.length > 0 && (
        <Fragment>
          <LogoContainer></LogoContainer>
        </Fragment>
      )}
    </FooterContainer>
  );
};

const FooterContainer = styled.footer``;

const LogoContainer = styled.footer``;

export default Footer;
