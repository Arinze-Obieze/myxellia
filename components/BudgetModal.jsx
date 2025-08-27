import { VscSettings } from "react-icons/vsc";

export default function BudgetModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center"
      onClick={onClose} // Close modal when overlay is clicked
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md relative mx-2"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Removed Close button */}

        <div className="relative rounded-t-xl h-48 pt-8 bg-[#0f2342] flex justify-center items-center">
          <img
            src="/icons/budget-overlay.svg"
            alt="Calculator Background"
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
          />
        </div>

        {/* Features */}
        <div className="px-6 py-4 space-y-6">
          <div className="flex items-start gap-2">
            <div className="text-xl pt-4 text-gray-600">
             <VscSettings/>
            </div>
            <div>
              <div className="font-bold text-base">Set up annual budgets by account category</div>
              <div className="text-gray-500 text-sm">
                Allocate funds across income and expense lines with full visibility.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img src="/icons/trend-up.svg" alt="Track-icon" />
            <div>
              <div className="font-bold text-base">Track actuals vs budget in real time</div>
              <div className="text-gray-500 text-sm">
                See how your community is performing against plan, month by month.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img src="/icons/barchart.svg" alt="Adjust-icon" />
            <div>
              <div className="font-bold text-base">Adjust figures and forecast with ease</div>
              <div className="text-gray-500 text-sm">
                Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="px-6 pb-6">
          <button className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold mt-3 shadow hover:bg-gray-900">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
}
