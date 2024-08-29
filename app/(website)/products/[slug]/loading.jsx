import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';

export default function Loading() {
  return (
    <div className="pt-10">
      <GenerateBreadcrumb variant="" />
      <div className="responsive container">
        {/* Prudct container */}
        <div className="mt-8">
          <div class="flex flex-col gap-10 lg:flex-row lg:gap-32">
            <div className="w-full lg:w-1/2">
              <div className="h-[440px] w-full animate-pulse bg-gray-100 lg:w-[514px]"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-14 w-full animate-pulse bg-gray-100"></div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-48 animate-pulse bg-gray-100"></div>
                <div className="h-8 w-28 animate-pulse bg-gray-100"></div>
              </div>
              <div className="mt-8 h-8 w-32 animate-pulse bg-gray-100"></div>

              <div className="mt-10">
                <div className="h-5 w-20 animate-pulse bg-gray-100"></div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-12 w-12 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-24 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-16 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-100"></div>
                </div>
              </div>

              <div className="mt-10">
                <div className="h-5 w-20 animate-pulse bg-gray-100"></div>
                <div className="mt-5 flex flex-wrap items-center justify-start gap-2">
                  <div className="h-12 w-20 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-100"></div>
                  <div className="h-12 w-20 animate-pulse bg-gray-100"></div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-11 w-64 animate-pulse border bg-gray-100"></div>
                <div className="h-11 w-12 animate-pulse border bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16">
          <div class="animate-pulse space-y-4">
            <div class="space-y-2">
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-11/12 rounded bg-gray-100"></div>
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-10/12 rounded bg-gray-100"></div>
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-9/12 rounded bg-gray-100"></div>
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-11/12 rounded bg-gray-100"></div>
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-10/12 rounded bg-gray-100"></div>
              <div class="h-4 w-full rounded bg-gray-100"></div>
              <div class="h-4 w-9/12 rounded bg-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
