import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import router from "next/router";
import data from "../../public/data/data.json";
import Image from "next/dist/client/image";

const AbousUsSection = () => {
  const [aboutUs, setbanneraboutUs] = useState([]);

  useEffect(() => {
    if (data.aboutSection) {
      setbanneraboutUs(data.aboutSection);
    }
  }, []);

  return (
    <Container>
      {aboutUs.length > 0 && (
        <Fragment>
          <ImageDiv>
            <picture>
              <source media="(min-width:1130px)" srcSet={aboutUs[0].image} />
              <source media="(min-width:750px)" srcSet={aboutUs[0].imageTab} />
              <img src={aboutUs[0].imageMob} alt="Flowers" />
            </picture>
          </ImageDiv>
          <TextDiv
            onClick={() => {
              router.push(aboutUs[0].url);
            }}
          >
            <LinkDiv>
              <Link href={aboutUs[0].url}>{aboutUs[0].title}</Link>
              <Image src="/images/arrow1.svg" width={9} height={9} />
            </LinkDiv>
            <SubTitle>{aboutUs[0].subTitle}</SubTitle>
            <Description>{aboutUs[0].text}</Description>
          </TextDiv>
        </Fragment>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 60px 0 0 0;
  padding: 0 20px 30px 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TextDiv = styled.div`
  margin: 0 20px 50px 20px;
  display: flex;
  flex-direction: column;

  a {
    color: #011352;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const SubTitle = styled.div`
  font-size: 40px;
  line-height: 50px;
  color: #011352;
  letter-spacing: 0.05em;
  margin-top: 10px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin-top: 24px;
`;

const LinkDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export default AbousUsSection;
