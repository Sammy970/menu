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
        <div className="grid grid-cols-2 gap-3 mb-10 mt-6">
          <div>
            <p className="mt-4 max-sm:grid-cols-1 text-gray-50">Dining out just got better</p>
          </div>
          <div>2</div>
          <div>3</div>
          <div>5</div>
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
