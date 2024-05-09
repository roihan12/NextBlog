import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex flex-row gap-[50px]">
        <CardList page={currentPage} />
        <Menu />
      </div>
    </div>
  );
}
