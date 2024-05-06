import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />  
      </div>
    </div>
  );
}
