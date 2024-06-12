import { Skeleton } from "@nextui-org/react";

export default function TodosFallback() {
  return (
    <div className="flex flex-col gap-4 container max-w-sm">
      <div className="align-middle h-9 shadow-sm">
        <Skeleton className="w-full h-full rounded-md"/>
      </div>
      <div className="align-middle h-9 shadow-sm">
        <Skeleton className="w-full h-full rounded-md"/>
      </div>
      <div className="align-middle h-9 shadow-sm">
        <Skeleton className="w-full h-full rounded-md"/>
      </div>
      <div className="align-middle h-9 shadow-sm">
        <Skeleton className="w-full h-full rounded-md"/>
      </div>
    </div>
  );
}
