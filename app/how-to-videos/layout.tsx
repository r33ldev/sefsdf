
interface videoLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "How-To Videos",
};

export default async function VideoLayout({ children }: videoLayoutProps) {
  return <>{children}</>;
}
