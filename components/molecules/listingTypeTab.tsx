'use client'

import { useState } from 'react'
import styled from 'styled-components'
import SectionLayout from './sectionLayout'

const TabWrapper = styled.div`
    display: flex;
    gap: 2rem;
`

const TabItem = styled.div<{ active: boolean }>`
    background: ${({ active }) => active ? '#F6F6F6' : '#fff'};
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 500;
`


export default function ListingTypeTab({ }) {
    const tabs = [
        'All',
        'Apartment',
        'Cars',
        'Adventure'
    ]
    const [activeTab, setActiveTab] = useState(tabs[0])
    return (
        <SectionLayout margin='0 auto'>
            <TabWrapper>
                {tabs.map((tab, i) => (
                    <TabItem key={i} active={tab === activeTab} onClick={() => setActiveTab(tab)} >{tab}</TabItem>
                ))}
            </TabWrapper>
        </SectionLayout>
    )
}
