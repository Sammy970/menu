import MenuSection from "@/app/sections/MenuSection";
import Nav from "@/components/Nav";
import Table from "@/app/sections/Table";

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
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
