import { Qparams } from "@/types";

interface pageProps {
  children: React.ReactNode;
  params: Qparams["params"];
}

export const metadata = {
  title: {
    default: "Quality Updates",
    template: "%s - Quality Updates",
  },
  description: "Learn about quality Updates on Checkin",
};

export default async function UpateLayout({ children }: pageProps) {
    
  return <div>{children}</div>;
}
