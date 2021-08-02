import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { Fragment } from "react";

import data from "../../public/data/data.json";
import Image from "next/dist/client/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSearch, setMenuSearch] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (data.nav) {
      setMenuItems(data.nav);
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setMenuSearch(!menuSearch);
  };

  return (
    <HeaderContainer>
      <LeftNav>
        <Link href="/">Home</Link>
        <Image src="/images/icon.svg" width={116} height={50} />
        {width < 1131 ? (
          <Fragment>
            {menuOpen && <PageMask onClick={toggleMenu} />}
            <NavMenu open={menuOpen}>
              <ul>
                {menuItems &&
                  menuItems.map((item) => {
                    return (
                      <MenuLi key={item.id} focused={item.focused}>
                        <Link href={item.url}>{item.title}</Link>
                      </MenuLi>
                    );
                  })}
              </ul>
            </NavMenu>
          </Fragment>
        ) : (
          ""
        )}
      </LeftNav>
      <RightNav>
        {!menuSearch && (
          <Fragment>
            <SearchContainer onClick={toggleSearch}>
              <Image src="/images/search.svg" width={20} height={20} />
            </SearchContainer>
            <HamburgerContainer>
              <Hamburger onClick={toggleMenu}>
                <Line open={menuOpen} one />
                <Line open={menuOpen} two />
                <Line open={menuOpen} three />
              </Hamburger>
            </HamburgerContainer>
          </Fragment>
        )}
        {menuSearch && (
          <Fragment>
            <SearchInputContainer>
              <input type="text" size="15" placeholder="SEARCH" />
            </SearchInputContainer>
            <SearchContainer onClick={toggleSearch}>
              <Image src="/images/close.svg" width={20} height={20} />
            </SearchContainer>
          </Fragment>
        )}
      </RightNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #0b0f4d;
  z-index: 100;
  color: #fff;
`;

const LeftNav = styled.div`
  a {
    position: absolute;
    z-index: 2;
    color: transparent;
    width: 116px;
    height: 50px;
  }

  img {
    padding: 0 10px;
  }
`;

const MenuOpen = (props) => {
  if (props.open) return DisplayNav;
  if (!props.open) return HideNav;
};

const FocusedLink = (props) => {
  if (props.focused) return Focus;
};

const NavMenu = styled.nav`
  position: fixed;
  z-index: 30;
  color: black;
  transition: all 0.25s linear;
  right: -80%;
  background-color: #001252;
  height: 100%;
  top: 0;
  width: 80%;

  ul {
    display: flex;
    color: white;
    z-index: 50;
    width: 80%;
    flex-direction: column;
    padding: 24px 0 100px 40px;
  }

  ${MenuOpen}
`;

const MenuLi = styled.li`
  height: 51px;
  padding: 15px 15px 15px 0px;

  a {
    position: relative;
    font-size: 14px;
    z-index: 51;
    font-weight: 500;
    font-family: Omnes, Arial, sans-serif;
    color: white;
    text-transform: uppercase;

    ${FocusedLink}
  }
`;

const PageMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SearchContainer = styled.div`
  padding: 0 15px;
  cursur: pointer;
`;

const Hamburger = styled.div`
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  padding: 13px 10px;
  display: grid;
  float: right;
`;

const getLineNumber = (props) => {
  if (props.one) return LineOne;
  if (props.two) return LineTwo;
  if (props.three) return LineThree;
};

const LineOne = css`
  width: 30px;
`;

const LineTwo = css`
  width: 30px;
  transform: translateY(8px);
`;

const LineThree = css`
  width: 18px;
  transform: translateY(16px);
`;

const Line = styled.div`
  height: 2px;
  position: absolute;
  background-color: white;

  ${getLineNumber}
`;

const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HideNav = css`
  right: -80%;
`;

const DisplayNav = css`
  right: 0;
`;

const Focus = css`
  font-weight: 800;
`;

const SearchInputContainer = styled.div`
  width: 65%;

  input[type="text"] {
    background: #0b0f4d;
    border: none;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
    color: white;
    padding: 0 0 10px 15px;
  }
`;
