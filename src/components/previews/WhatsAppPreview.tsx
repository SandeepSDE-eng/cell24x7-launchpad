import { Check, CheckCheck } from "lucide-react";

export function WhatsAppPreview() {
  return (
    <div className="w-full h-full bg-[#e5ddd5] rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-[#075e54] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-bold">
            CS
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-1">
              Cell24x7 Support <Check className="w-3 h-3 bg-[#25D366] text-white rounded-full p-0.5" />
            </div>
            <div className="text-[10px] text-white/70">Online</div>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-3 space-y-2">
        {/* Template Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-[#dcf8c6] rounded-lg rounded-br-sm p-2 shadow-sm">
            <div className="text-xs text-gray-800">
              🎉 <strong>Order Confirmed!</strong><br/>
              <br/>
              Order: #ORD-4521<br/>
              Amount: $129.99<br/>
              <br/>
              Track your order anytime!
            </div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[9px] text-gray-500">10:30 AM</span>
              <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[80%] bg-white rounded-lg rounded-bl-sm p-2 shadow-sm">
            <div className="text-xs text-gray-800">Thanks! Can you send shipping updates? 📦</div>
            <div className="text-[9px] text-gray-500 text-right mt-1">10:32 AM</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[80%] bg-[#dcf8c6] rounded-lg rounded-br-sm p-2 shadow-sm">
            <div className="text-xs text-gray-800">Absolutely! You'll receive automatic updates at each stage. 🚚</div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[9px] text-gray-500">10:33 AM</span>
              <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
