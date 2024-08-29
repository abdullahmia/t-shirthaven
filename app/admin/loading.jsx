import Loader from '@/components/loader';

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader size={70} />
    </div>
  );
}
