import MenuSection from "@/app/sections/MenuSection";
import Nav from "@/components/Nav";
import Table from "@/app/sections/Table";
import Footer from "@/app/sections/Footer";

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
      <section>
        <Footer />
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
