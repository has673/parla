// components/ProgressSteps.jsx
"use client";
import clsx from "clsx";

const steps = ["Service", "Professional", "Date", "Payment"];

export default function Progresstracker({ page }) {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto px-4">
      {steps.map((label, index) => {
        const isCompleted = index < page;
        const isCurrent = index === page;

        return (
          <div key={label} className="flex-1 flex items-center">
            {/* Line */}
            {index > 0 && (
              <div className="flex-1 h-px border-dashed border-t-2 border-gray-400" />
            )}

            {/* Step Circle & Label */}
            <div className="flex flex-col items-center">
              <div
                className={clsx(
                  "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                  isCurrent
                    ? "bg-orange-500"
                    : "bg-white border-2 border-orange-500"
                )}
              >
                {index + 1}
              </div>
              <p
                className={clsx(
                  "mt-2 text-sm",
                  isCurrent
                    ? "text-orange-500 font-medium"
                    : isCompleted
                    ? "text-orange-500"
                    : "text-gray-500"
                )}
              >
                {label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
