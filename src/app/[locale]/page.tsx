// src/app/page.tsx
import Homepage from "@/components/template/Homepage";
import { IParams } from "@/types/props";

const Home = async ({ params }: IParams) => {
  const { locale } = await params;
  return (
    <div>
      <Homepage locale={locale} />
    </div>
  );
};

export default Home;
