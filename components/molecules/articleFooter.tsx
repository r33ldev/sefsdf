'use client'

import React, { useState } from 'react'
import styled from 'styled-components';
import Flex from '../atoms/flex';
import Image from 'next/image';
import CheckinLogo from '../icons/checkinLogo';
import Text from '../atoms/text';
import { ThumbsDownIcon, ThumbsUpIcon } from '../icons/thumbs';
import { Divider } from '../atoms/divider';

interface articleFooterProps {
}

const FooterWrapper = styled.div`
    margin-top: 5rem;
    width: 80%;
`
const ThumbsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
    padding: 0 1rem;
    border-radius: 2.4rem;
    border: 1px solid #DEDEE3;
    height: 3.6rem;
    & > svg {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    };

    & > div {
        height: 100%;
        width: 0.1rem;
        background: #DEDEE3;
    }
`

export const ArticleFooter: React.FC<articleFooterProps> = ({ }) => {
    const [liked, setLiked] = useState(-1)
    return (
        <FooterWrapper>
            <Flex justify='space-between'>
                <section style={{ width: '100%' }}>
                    <Flex align='center'>
                        <CheckinLogo />
                        <section>
                            <Text size="1.6rem" type="p" text="Checkin" weight={200} />
                            <Text size="1.4rem" type="p" text="23 May 2023" weight={200} />
                        </section>
                    </Flex>
                </section>
                <Flex gap='1rem' align='center'>
                    <ThumbsWrapper>
                        <ThumbsUpIcon fill={liked === 1 ? '#1B76AF' : '#707070'} onClick={() => {
                            if (liked === 1) return setLiked(0)
                            setLiked(1)
                        }} />
                        <Divider />
                        <ThumbsDownIcon fill={liked === 2 ? '#1B76AF' : '#707070'} onClick={() => {
                            if (liked === 2) return setLiked(0)
                            setLiked(2)

                        }} />
                    </ThumbsWrapper>
                    <Text size="1.4rem" type="p" text="Was this helpful?" weight={200} />
                </Flex>
            </Flex>

            <Divider margin='5rem 0 3rem'/>
        </FooterWrapper>
    );
}
export default ArticleFooter