import { MessageCircle, Mail, Phone, Smartphone, MessageSquare, Bot } from "lucide-react";

const channels = [
  { icon: Mail, color: "from-[#EF4444] to-[#DC2626]", name: "Email", position: -55 },
  { icon: Phone, color: "from-[#F97316] to-[#EA580C]", name: "Voice", position: 5 },
  { icon: Bot, color: "from-[#06B6D4] to-[#0891B2]", name: "AI Bot", position: 55 },
  { icon: MessageCircle, color: "from-[#25D366] to-[#128C7E]", name: "WhatsApp", position: 125 },
  { icon: MessageSquare, color: "from-[#3B82F6] to-[#1D4ED8]", name: "SMS", position: 180 },
  { icon: Smartphone, color: "from-[#8B5CF6] to-[#6D28D9]", name: "RCS", position: 235 },
];

export function HeroPhoneVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center">
      {/* Soft radial background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 via-brand-magenta/5 to-transparent rounded-full" />
      
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple/15 via-brand-magenta/10 to-brand-cyan/15 blur-3xl" />
      
      {/* Orbit paths with gradient stroke */}
      <div className="absolute inset-4 rounded-full border border-dashed border-brand-purple/20" 
           style={{ borderWidth: '1.5px' }} />
      <div className="absolute inset-16 rounded-full border border-dashed border-brand-magenta/15" 
           style={{ borderWidth: '1px' }} />
      
      {/* Curved connection lines with animation */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
        <defs>
          {/* Gradient definitions for each channel line */}
          {channels.map((channel, i) => (
            <linearGradient key={`grad-${i}`} id={`lineGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(271, 91%, 65%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(291, 64%, 42%)" stopOpacity="0.1" />
            </linearGradient>
          ))}
          
          {/* Animated dot marker */}
          <circle id="pulseCircle" r="4" fill="url(#dotGrad)">
            <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          <radialGradient id="dotGrad">
            <stop offset="0%" stopColor="hsl(271, 91%, 65%)" />
            <stop offset="100%" stopColor="hsl(291, 64%, 42%)" />
          </radialGradient>
        </defs>
        
        {channels.map((channel, i) => {
          const angle = (channel.position * Math.PI) / 180;
          const outerRadius = 190;
          const innerRadius = 75;
          const cx = 250;
          const cy = 250;
          const x1 = cx + Math.cos(angle) * outerRadius;
          const y1 = cy + Math.sin(angle) * outerRadius;
          const x2 = cx + Math.cos(angle) * innerRadius;
          const y2 = cy + Math.sin(angle) * innerRadius;
          
          // Control points for curve
          const midX = (x1 + x2) / 2 + Math.cos(angle + Math.PI / 2) * 20;
          const midY = (y1 + y2) / 2 + Math.sin(angle + Math.PI / 2) * 20;
          
          return (
            <g key={i}>
              {/* Curved path */}
              <path
                d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                stroke={`url(#lineGrad-${i})`}
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
              />
              
              {/* Traveling pulse dot */}
              <circle r="3" fill="hsl(271, 91%, 65%)" opacity="0.8">
                <animateMotion
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                  path={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                />
                <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Channel icons orbiting with labels */}
      {channels.map((channel, index) => {
        const Icon = channel.icon;
        const angle = channel.position;
        const radius = 42;
        const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${index * 0.4}s`,
            }}
          >
            {/* Icon container with depth shadow */}
            <div className="relative group cursor-pointer">
              {/* Shadow layer */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${channel.color} blur-xl opacity-40 translate-y-2`}
              />
              
              {/* Icon tile */}
              <div 
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${channel.color} shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}
                style={{
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
              </div>
            </div>
            
            {/* Label */}
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground whitespace-nowrap">
              {channel.name}
            </span>
          </div>
        );
      })}

      {/* Center Phone - Bigger & Colorful Design */}
      <div className="relative z-10 w-36 h-64 md:w-44 md:h-80">
        {/* Phone shadow - warm tint */}
        <div 
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-orange-400/20 to-brand-magenta/20 blur-2xl"
          style={{ transform: 'translateY(16px) scale(0.85)' }}
        />
        
        {/* Outer glow - orange/purple gradient */}
        <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/25 via-brand-magenta/20 to-brand-purple/25 rounded-[3rem] blur-2xl" />
        
        {/* Phone body with orange gradient frame */}
        <div 
          className="relative w-full h-full rounded-[2.5rem] p-[3px] bg-gradient-to-br from-orange-400 via-brand-magenta to-brand-purple"
          style={{
            boxShadow: '0px 20px 50px rgba(249, 115, 22, 0.25), 0px 10px 30px rgba(168, 85, 247, 0.15)'
          }}
        >
          {/* Inner white bezel */}
          <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative shadow-inner">
            {/* Notch - subtle gray */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-100 rounded-full flex items-center justify-center gap-2 z-20 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 ring-1 ring-gray-200" />
            </div>
            
            {/* Screen */}
            <div className="absolute inset-[3px] top-1 bg-gradient-to-b from-gray-50 to-white rounded-[2.1rem] overflow-hidden">
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none z-10" />
              
              {/* Status bar */}
              <div className="h-9 pt-2 px-5 flex items-center justify-between text-[8px] font-semibold text-gray-700">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-[2px]">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-[3px] rounded-sm bg-gray-600" style={{ height: `${5 + i * 2}px` }} />
                    ))}
                  </div>
                  <span className="ml-1 text-[7px]">5G</span>
                  <div className="w-5 h-2.5 rounded-sm bg-gray-600 ml-1" />
                </div>
              </div>
              
              {/* App header with branding */}
              <div className="h-10 bg-gradient-to-r from-orange-500 via-brand-magenta to-brand-purple flex items-center justify-center gap-1.5 shadow-md">
                <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Cell24×7</span>
              </div>
              
              {/* Chat messages */}
              <div className="p-3 space-y-2.5 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
                {/* WhatsApp message */}
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageCircle className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-md border border-gray-100">
                    <p className="text-[8px] text-gray-700 leading-tight font-medium">Hi! How can I help?</p>
                    <p className="text-[6px] text-green-600 mt-0.5 font-medium">WhatsApp</p>
                  </div>
                </div>
                
                {/* User reply */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-orange-500 to-brand-magenta rounded-2xl rounded-tr-sm px-3 py-2 shadow-md">
                    <p className="text-[8px] text-white leading-tight font-medium">Track order #4521</p>
                  </div>
                </div>
                
                {/* SMS message */}
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageSquare className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-md border border-gray-100">
                    <p className="text-[8px] text-gray-700 leading-tight font-medium">📦 Out for delivery!</p>
                    <p className="text-[6px] text-blue-600 mt-0.5 font-medium">SMS</p>
                  </div>
                </div>
                
                {/* Email notification */}
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-md border border-gray-100">
                    <p className="text-[8px] text-gray-700 leading-tight font-medium">Invoice ready 📎</p>
                    <p className="text-[6px] text-red-500 mt-0.5 font-medium">Email</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom nav */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/98 backdrop-blur-sm border-t border-gray-100 flex items-center justify-around px-4 shadow-inner">
                {[
                  { icon: MessageCircle, active: true },
                  { icon: Mail, active: false },
                  { icon: Phone, active: false }
                ].map((item, i) => (
                  <div key={i} className={`p-2 rounded-xl transition-all ${item.active ? 'bg-gradient-to-br from-orange-100 to-purple-100' : ''}`}>
                    <item.icon className={`w-5 h-5 ${item.active ? 'text-brand-magenta' : 'text-gray-400'}`} strokeWidth={2} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Radial light source glow from center */}
      <div className="absolute inset-1/4 bg-gradient-radial from-brand-purple/8 via-transparent to-transparent rounded-full blur-xl pointer-events-none" />
    </div>
  );
}