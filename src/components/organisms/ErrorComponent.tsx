export const ErrorComponent = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center pt-20">
      <img
        src={`${import.meta.env.BASE_URL}gadgets/img/product-not-found.png`}
        alt="Service unavailable"
        className="w-[320px]"
      />
      <p className="mt-10 text-xl">Oops... Something went wrong</p>
    </div>
  );
};
