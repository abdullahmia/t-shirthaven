import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";

export default function Loading() {
  return (
    <div className="pt-10">
      <GenerateBreadcrumb variant="" />
      <div className="container responsive">
        {/* Prudct container */}
        <div className="mt-8">
          <div class="flex flex-col lg:flex-row lg:gap-32 gap-10">
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-100 w-full lg:w-[514px] animate-pulse h-[440px]"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-100 h-14 w-full animate-pulse"></div>
              <div className="mt-4 flex items-center gap-3">
                <div className="bg-gray-100 h-8 w-48 animate-pulse"></div>
                <div className="bg-gray-100 h-8 w-28 animate-pulse"></div>
              </div>
              <div className="bg-gray-100 h-8 w-32 animate-pulse mt-8"></div>

              <div className="mt-10">
                <div className="bg-gray-100 h-5 w-20 animate-pulse"></div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="bg-gray-100 h-12 w-12 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-12 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-24 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-16 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-12 animate-pulse"></div>
                </div>
              </div>

              <div className="mt-10">
                <div className="bg-gray-100 h-5 w-20 animate-pulse"></div>
                <div className="flex items-center justify-start flex-wrap gap-2 mt-5">
                  <div className="bg-gray-100 h-12 w-20 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-12 animate-pulse"></div>
                  <div className="bg-gray-100 h-12 w-20 animate-pulse"></div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="bg-gray-100 h-11 border w-64 animate-pulse"></div>
                <div className="bg-gray-100 h-11 border w-12 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16">
          <div class="animate-pulse space-y-4">
            <div class="space-y-2">
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-11/12"></div>
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-10/12"></div>
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-9/12"></div>
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-11/12"></div>
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-10/12"></div>
              <div class="h-4 bg-gray-100 rounded w-full"></div>
              <div class="h-4 bg-gray-100 rounded w-9/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
