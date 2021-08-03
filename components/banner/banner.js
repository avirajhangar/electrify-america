import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import data from "../../public/data/data.json";

const Banner = () => {
  const [bannerDetails, setbannerDetails] = useState([]);

  useEffect(() => {
    if (data.banner) {
      setbannerDetails(data.banner);
    }
  }, []);

  return (
    <Fragment>
      {bannerDetails.length > 0 && (
        <BannerContainer>
          <BackgroundDiv>
            <picture>
              <source
                media="(min-width:750px)"
                srcSet={bannerDetails[0].background}
              />
              <img src={bannerDetails[0].backgroundMobile} alt="Flowers" />
            </picture>
            <TextContainer>
              <HeaderDiv>
                {bannerDetails[0].subTitle}
                <br></br>
                <span>{bannerDetails[0].subTitle2}</span>
              </HeaderDiv>
              <Description>{bannerDetails[0].description}</Description>
              <form>
                <input placeholder="ENTER CITY OR ZIP"></input>
                <svg
                  data-v-1dec9b0e=""
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-1dec9b0e=""
                    d="M.785.556c-.309.309-.309.81 0 1.12l5.038 5.037-5.262 5.262a.792.792 0 001.12 1.12L7.356 7.42a1 1 0 000-1.414L1.905.556a.792.792 0 00-1.12 0z"
                    fill="#EFEFEF"
                  ></path>
                </svg>
                <Round />
              </form>
            </TextContainer>
          </BackgroundDiv>
          <BackgroundGradient />
        </BannerContainer>
      )}
    </Fragment>
  );
};

const BannerContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 80px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 5.26%,
    rgba(0, 0, 0, 0.8) 71.78%,
    rgba(0, 0, 0, 0.9)
  );
  transform: rotate(-180deg);
  top: -4px;
  opacity: 0.6;
`;

const BackgroundDiv = styled.div`
  width: 100%;

  img {
    position: relative;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 40px;
  left: 0;
  width: 100%;
  top: auto;
  color: white;

  form {
    margin-left: 24px;
    margin-right: 24px;
    width: 327px;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 100px;
    height: 55px;
    position: relative;

    input {
      position: absolute;
      top: 16px;
      left: 20px;
      height: 26px;
      color: #424b56;
      border: none;
      font-family: Omnes;
      font-weight: 500;
      font-size: 13px;
      width: 200px;
    }

    svg {
      width: 8px;
      position: absolute;
      right: 25px;
      top: 22px;
      cursor: pointer;
      z-index: 5;
    }
  }
`;

const Round = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  border-radius: 100px;
  background-color: #29b5d0;
  top: 8px;
  cursor: pointer;
`;

const HeaderDiv = styled.div`
  margin-left: 24px;
  font-size: 40px;

  span {
    font-style: italic;
    font-weight: 500;
  }
`;

const Description = styled.div`
  margin: 24px 24px 32px 24px;
  max-width: 100%;
`;

export default Banner;
