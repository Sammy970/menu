import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const TableCard = () => {
  return (
    <Card className="bg-[#C8F169] w-[60%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full border-none m-auto z-10">
      <CardHeader className="p-5 pb-0">
        <CardTitle className="font-hind text-2xl tracking-[0.1rem]">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full items-center justify-around">
        <p className="text-center text-4xl max-lg:text-3xl max-sm:text-2xl leading-[5rem] font-hind selection tracking-[0.2rem]">
          You are <br />
          <span className="text-6xl max-lg:text-5xl max-sm:text-3xl font-khand">
            Table 10
          </span>
        </p>
        <div className="max-sm:w-[150px] max-sm:h-[150px]">
          <Image
            src="/Assets/eating.svg"
            alt="eating"
            width={250}
            height={250}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TableCard;
