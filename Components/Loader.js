export const Loader = () => {
  return (
    <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div
        className="md:w-12 md:h-12 w-10 h-10 border-4 border-[var(--orange)] border-dashed rounded-full animate-spin"
        role="status"
      />
    </div>
  );
};
