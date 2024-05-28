import { Skeleton } from "keep-react";

export default function PostSkeleton() {
  return (
    <Skeleton className="w-full space-y-2.5 xl:max-w-md my-10">
      <Skeleton.Line className="h-10 w-full" />
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-3/5" />

      <div className="flex gap-3 mt-3">
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-4 w-4/5" />
      </div>
    </Skeleton>
  );
}
