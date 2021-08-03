import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import router, { useRouter } from "next/router";
import data from "../../public/data/data.json";
import Image from "next/dist/client/image";

const Posts = () => {
  const [postsDetails, setPostsDetails] = useState([]);

  useEffect(() => {
    if (data.charging) {
      setPostsDetails(data.charging);
    }
  }, []);

  function redirectOnClick(url) {
    // router.push(url);
    alert(url);
  }

  return (
    <PostsContainer>
      {postsDetails.length > 0 && (
        <Fragment>
          <PostsHeader>
            {postsDetails[0].title}
            <br></br>
            {postsDetails[0].title1}
          </PostsHeader>
          <PostsDiv>
            {postsDetails[0].postLists.map((post) => {
              return (
                <div
                  key={post.id}
                  onClick={() => {
                    router.push(post.url);
                  }}
                >
                  <picture>
                    <source media="(min-width:1130px)" srcSet={post.image} />
                    <source
                      media="(min-width:750px)"
                      srcSet={post.imageTablet}
                    />
                    <img src={post.imageMobile} alt="Flowers" />
                  </picture>
                  <PostContent>
                    <Link href={post.url}>{post.title}</Link>
                    <Image src="/images/arrow1.svg" width={9} height={9} />
                    <PostDescription>{post.description}</PostDescription>
                  </PostContent>
                </div>
              );
            })}
          </PostsDiv>
        </Fragment>
      )}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  margin: 60px 0 0 0;
  padding: 0 20px 30px 20px;
`;

const PostsHeader = styled.div`
  font-size: 20px;
  margin-bottom: 34px;
  margin-left: 0;
  line-height: 34px;
  font-weight: 600;
  max-width: 504px;
`;

const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

const PostContent = styled.div`
  margin-bottom: 20px;
  margin-top: 24px;
  margin-left: 15px;

  a {
    font-size: 16px;
    margin-left: 0;
    line-height: 17px;
    margin-bottom: 16px;
    margin-top: 16px;
    letter-spacing: 0.05em;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const PostDescription = styled.div`
  padding-top: 12px;
  font-size: 16px;
`;

export default Posts;
