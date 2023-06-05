'use client'

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  & .prose {
    max-width: unset;
  }

  & .prose p,
  .prose li,
  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4,
  .prose h5,
  .prose h6,
  .prose blockquote,
  .prose pre,
  .prose table,
  .prose dl,
  .prose ol,
  .prose ul,
  .prose figure,
  .prose hr {
    font-size: 1.7rem;
  }
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  & a {
    color: #0645ad;
    text-decoration: none;
  }
`;

function Article({ children }: { children: React.ReactNode }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default Article