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

export const Tracker = ({ page = 1 }) => {
  const steps = ["Service", "Professional", "Date", "Payment"];

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCurrent = page === stepNumber;

        return (
          <div key={index} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center text-[13px] min-w-[60px]">
              <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
                {isCurrent ? "Beep" : stepNumber}
              </div>
              <span className="font-normal mt-2 text-center">{label}</span>
            </div>

            {/* Dashed Line */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-px border-t border-dashed border-[#A4A4A4] mx-2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const DateTracker = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {/* Step 1 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            1
          </div>
          <span className="font-normal mt-2 text-center">Service</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            2
          </div>
          <span className="font-normal mt-2 text-center">Professional</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            3
          </div>
          <span className="font-normal mt-2 text-center">Date</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 4 (last step, no line after) */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Payment</span>
        </div>
      </div>
    </div>
  );
};

export const ProfessionalTracker = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {/* Step 1 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            1
          </div>
          <span className="font-normal mt-2 text-center">Service</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            2
          </div>
          <span className="font-normal mt-2 text-center">Professional</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Date</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 4 (last step, no line after) */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Payment</span>
        </div>
      </div>
    </div>
  );
};

export const ServiceTracker = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {/* Step 1 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <div className="h-8 w-8 text-white bg-[var(--orange)] font-semibold flex justify-center items-center rounded-full">
            1
          </div>

          <span className="font-normal mt-2 text-center">Service</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Professional</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Date</span>
        </div>
        <div className="flex-1 h-px border-t mb-6 border-dashed border-[#A4A4A4] mx-2"></div>
      </div>

      {/* Step 4 (last step, no line after) */}
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-center text-[13px] min-w-[60px]">
          <span
            className={`w-15 h-15 rounded-full border-2 p-0.5 flex justify-center items-center
           border-[var(--orange)]`}
          >
            <span
              className={`block w-8 h-8 rounded-full  p-3
               bg-[#ff6b00]`}
            ></span>
          </span>
          <span className="font-normal mt-2 text-center">Payment</span>
        </div>
      </div>
    </div>
  );
};
