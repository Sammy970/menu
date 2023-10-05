import MenuSection from "@/sections/MenuSection";
import Nav from "@/components/Nav";
import Table from "@/sections/Table";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="mt-10">
        <Table />
      </section>
      <section className="mt-10">
        <MenuSection />
        <div className="grid grid-cols-4 gap-3 mb-10 mt-6">
          <div>
            <h1 className="text-white font-khand">Explore our menu</h1>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
