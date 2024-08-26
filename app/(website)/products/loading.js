import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";

export default function Loading() {
  return (
    <div>
      <GenerateBreadcrumb />
      <div className="container grid grid-cols-12 gap-7 mt-10 responsive">
        {/* Sidebar Sekeleton */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="w-full border rounded p-3">
            <div className="bg-gray-100 h-8 w-full animate-pulse"></div>

            <div className="space-y-2 mt-5">
              <div className="bg-gray-100 h-4 w-1/3 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-1/4 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-1/2 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-2/3 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-2/4 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-1/3 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-3/4 animate-pulse"></div>
              <div className="bg-gray-100 h-4 w-1/2 animate-pulse"></div>
            </div>

            <div className="mt-10">
              <div className="bg-gray-100 h-8 w-full animate-pulse"></div>
              <div className="flex items-center flex-wrap gap-2 mt-5">
                <div className="bg-gray-100 h-10 w-10 animate-pulse rounded"></div>
                <div className="bg-gray-100 h-10 w-14 animate-pulse rounded"></div>
                <div className="bg-gray-100 h-10 w-20 animate-pulse rounded"></div>
                <div className="bg-gray-100 h-10 w-10 animate-pulse rounded"></div>
                <div className="bg-gray-100 h-10 w-24 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Products skeleton */}
        <div className="lg:col-span-9 col-span-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {/* Proudct skeleton */}
            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full bg-gray-100 animate-pulse"></div>
              <div className="mt-5">
                <div className="w-14 h-4 bg-gray-100 animate-pulse"></div>
                <div className="w-full h-9 bg-gray-100 animate-pulse mt-3"></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-24 h-9 border rounded-md bg-gray-100 animate-pulse"></div>
                  <div className="w-16 h-6 bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
