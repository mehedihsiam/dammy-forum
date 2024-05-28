import { Skeleton } from "keep-react";

export default function CommentSkeleton() {
  return (
    <Skeleton className="w-full space-y-2.5 xl:max-w-md my-5">
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
    </Skeleton>
  );
}
