import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MenuItemCard = ({ name, price, desc }) => {
  return (
    <Card className="h-auto cursor-pointer rounded-lg ring-0 border-0 shadow-md bg-[#EEF2E3]">
      <CardHeader className="p-4 pb-1">
        <CardTitle>
          <p className="font-khand text-xl leading-5 tracking-[0.15rem]">
            {name}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex flex-1 flex-row gap-3 text-lg max-sm:text-sm font-semibold text-gray-800">
        <p className="font-hind text-gray-800 tracking-[0.06rem]">{desc}</p>
      </CardContent>
      <div className="flex flex-1 items-center justify-between relative">
        <p className="bg-red-300 rounded-tr-lg font-bold p-2 w-24 font-hind text-gray-900 tracking-[0.06rem]">
          ₹ {price}
        </p>
        <button className="rounded-tl-lg bg-[#C8F169]  font-hind text-gray-900 tracking-[0.06rem] font-bold ring-0 border-0 p-2">
          Add to Card
        </button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
