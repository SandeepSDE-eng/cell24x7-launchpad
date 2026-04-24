import { Phone, Mic, MicOff, PhoneOff } from "lucide-react";

export function VoiceBotPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Call Status */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center">
            <Phone className="w-8 h-8 text-white" />
          </div>
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-brand-cyan animate-ping opacity-50" />
        </div>
        
        <div className="text-white font-semibold mb-1">AI VoiceBot</div>
        <div className="text-green-400 text-sm mb-4">Connected • 02:34</div>
        
        {/* Waveform */}
        <div className="flex items-end justify-center gap-1 h-8 mb-4">
          {[3, 5, 8, 5, 7, 4, 6, 8, 5, 4, 6, 3].map((h, i) => (
            <div 
              key={i}
              className="w-1 bg-brand-cyan rounded-full animate-pulse"
              style={{ 
                height: `${h * 3}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Transcript */}
        <div className="bg-white/10 rounded-xl p-3 w-full text-left mb-4">
          <div className="text-[10px] text-brand-cyan mb-1">AI:</div>
          <div className="text-xs text-white/90">
            "I found your reservation for February 5th. Would you like me to reschedule it?"
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 p-4 bg-gray-900/50">
        <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <MicOff className="w-5 h-5 text-white" />
        </button>
        <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
          <PhoneOff className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
