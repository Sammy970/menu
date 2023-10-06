import MenuSection from "@/app/sections/MenuSection";
import Nav from "@/components/Nav";
import Table from "@/app/sections/Table";
import Footer from "@/app/sections/Footer";
import CartItems from "./sections/CartItems";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="mt-10">
        <Table />
      </section>
      <section className="mt-10">
        <MenuSection />
      </section>
      <section className="mt-10">
        <CartItems />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
