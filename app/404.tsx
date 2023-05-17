"use client";

import Text from "@/components/atoms/text";
import SectionLayout from "@/components/molecules/sectionLayout";
import { useRouter } from "next/navigation";
function NotFoundPage() {
  const router = useRouter();
  return (
    <SectionLayout>
      <div style={{ textAlign: "center" }}>
        <Text text="Resource not found" type="h1" size="2.6rem" />

        <div onClick={() => router.back()} style={{ paddingTop: "2rem", cursor:'pointer' }}>
          <Text text="Go back" type="p" size="1.5rem" color="#0e689d" />
        </div>
      </div>
    </SectionLayout>
  );
}

export default NotFoundPage;
