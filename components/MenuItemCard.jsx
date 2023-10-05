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
    <Card className="cursor-pointer rounded-lg ring-0 border-0 shadow-md bg-[#EEF2E3]">
      <CardHeader className="p-4 pb-1">
        <CardTitle>
          <p className="font-khand text-xl leading-5 tracking-[0.15rem]">
            {name}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex flex-1 flex-col gap-3 text-lg max-sm:text-sm font-semibold text-gray-800">
        <p className="font-hind text-gray-800 tracking-[0.06rem]">{desc}</p>
        <p>₹ {price}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
