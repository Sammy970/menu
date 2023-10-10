import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <nav className="flex sticky top-0 left-0 z-50 right-0 flex-1 justify-between items-center bg-[#EEF2E3] p-4 py-3 max-container m-auto rounded-b-[23px]">
        <Skeleton className="h-4 w-[200px] bg-black" />
      </nav>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </>
  );
};

export default loading;
