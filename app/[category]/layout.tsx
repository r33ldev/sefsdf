import { Qparams } from "@/types";
import { Metadata } from "next";
import { getCategory } from "./utils/data";
import NotFoundPage from "../404";

interface TestLayoutProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export async function generateMetadata({
  params,
}: TestLayoutProps): Promise<Metadata> {
  const category = getCategory(params.category);
  if (!category) return { title: "404" };
  return {
    title: category.name,
    description: category.description,
    keywords: category?.keywords,
  };
}

export default async function CategoryLayout({
  params,
  children,
}: TestLayoutProps) {
  if (!params.category) return <NotFoundPage />;
  return <div>{children}</div>;
}
