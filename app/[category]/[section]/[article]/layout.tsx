
import SectionLayout from '@/components/molecules/sectionLayout';
import { Qparams } from '@/types';
import Image from 'next/image';
import React from 'react'
import articleBanner from '../../../../assets/image/articleBanner.png';
import BreadCrumb from '@/components/molecules/breadcrumb';
import ArticleFooter from '@/components/molecules/articleFooter';
import RelatedArticle from '@/components/molecules/relatedArticle';
import { capitalized } from '@/utils/utils';

interface pageProps {
  params: Qparams["params"];
  children: React.ReactNode;
}

export async function generateMetadata({ params }: pageProps) {
  const article = params?.article?.replace(/-/g, ' ') || '';
  const category = params?.category || '';
  return {
    title: `${capitalized(article)} - ${capitalized(category)} - Checkin Inc`,
  }
}

export default function layout({ children }: pageProps) {
  return (
    <main>
      <Image src={articleBanner.src} width={1920} height={400} alt='' />
      <SectionLayout>
        <BreadCrumb />
        {children}
        <ArticleFooter />
        <RelatedArticle />
      </SectionLayout>
    </main>
  )
}
