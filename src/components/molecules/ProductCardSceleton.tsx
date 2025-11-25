export const ProductCardSkeleton = () => {
  return (
    <div
      className="
        w-full
        p-7
        bg-white-card
        border border-element
        rounded-none
        animate-pulse
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="h-[200px] flex items-center justify-center mb-6">
        <div className="w-full h-full bg-gray-200 rounded-md" />
      </div>

      {/* TITLE + PRICE BLOCK */}
      <div className="mb-4 grow space-y-3">
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded w-3/5"></div>

        <div className="flex items-center gap-3 mt-4">
          <div className="h-6 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      </div>

      {/* SPECS BLOCK */}
      <div className="border-t border-element pt-4 mb-6 space-y-2">
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-300 rounded w-12"></div>
        </div>

        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
          <div className="h-3 bg-gray-300 rounded w-14"></div>
        </div>

        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-12"></div>
          <div className="h-3 bg-gray-300 rounded w-10"></div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center gap-4 justify-between mt-auto">
        <div className="grow">
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>

        <div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};