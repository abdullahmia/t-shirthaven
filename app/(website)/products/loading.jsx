import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';

export default function Loading() {
  return (
    <div>
      <GenerateBreadcrumb />
      <div className="responsive container mt-10 grid grid-cols-12 gap-7">
        {/* Sidebar Sekeleton */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="w-full rounded border p-3">
            <div className="h-8 w-full animate-pulse bg-gray-100"></div>

            <div className="mt-5 space-y-2">
              <div className="h-4 w-1/3 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-1/4 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-1/2 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-2/3 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-2/4 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-1/3 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-3/4 animate-pulse bg-gray-100"></div>
              <div className="h-4 w-1/2 animate-pulse bg-gray-100"></div>
            </div>

            <div className="mt-10">
              <div className="h-8 w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <div className="h-10 w-10 animate-pulse rounded bg-gray-100"></div>
                <div className="h-10 w-14 animate-pulse rounded bg-gray-100"></div>
                <div className="h-10 w-20 animate-pulse rounded bg-gray-100"></div>
                <div className="h-10 w-10 animate-pulse rounded bg-gray-100"></div>
                <div className="h-10 w-24 animate-pulse rounded bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Products skeleton */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* Proudct skeleton */}
            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>

            <div className="w-full rounded">
              <div className="h-[312px] w-full animate-pulse bg-gray-100"></div>
              <div className="mt-5">
                <div className="h-4 w-14 animate-pulse bg-gray-100"></div>
                <div className="mt-3 h-9 w-full animate-pulse bg-gray-100"></div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md border bg-gray-100"></div>
                  <div className="h-6 w-16 animate-pulse bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
