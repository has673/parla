export const PaymentTracker = () => {
  const steps = ["Service", "Professional", "Date", "Payment"];

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center flex-1">
          {/* Step */}
          <div className="flex flex-col items-center text-[13px] min-w-[60px]">
            <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
              {index + 1}
            </div>
            <span className="font-normal mt-2 text-center">{label}</span>
          </div>

          {/* Line (not after last step) */}
          {index !== steps.length - 1 && (
            <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};
