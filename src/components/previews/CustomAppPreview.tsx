import { Code, Terminal, Check, Copy } from "lucide-react";

export function CustomAppPreview() {
  return (
    <div className="w-full h-full bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-border/50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400">api-example.js</span>
        </div>
        <Copy className="w-3 h-3 text-gray-400" />
      </div>
      
      {/* Code Editor */}
      <div className="flex-1 p-3 font-mono text-[10px] leading-relaxed overflow-hidden">
        <div className="text-gray-500">// Send WhatsApp message</div>
        <div>
          <span className="text-purple-400">const</span>
          <span className="text-white"> response = </span>
          <span className="text-purple-400">await</span>
          <span className="text-yellow-300"> fetch</span>
          <span className="text-white">(</span>
        </div>
        <div className="pl-2">
          <span className="text-green-400">'https://api.cell24x7.com'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-2 text-white">{"{"}</div>
        <div className="pl-4">
          <span className="text-blue-300">method</span>
          <span className="text-white">: </span>
          <span className="text-green-400">'POST'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-4">
          <span className="text-blue-300">body</span>
          <span className="text-white">: </span>
          <span className="text-yellow-300">JSON</span>
          <span className="text-white">.stringify({"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-blue-300">to</span>
          <span className="text-white">: </span>
          <span className="text-green-400">'+1234567890'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-6">
          <span className="text-blue-300">message</span>
          <span className="text-white">: </span>
          <span className="text-green-400">'Hello!'</span>
        </div>
        <div className="pl-4 text-white">{"})"}</div>
        <div className="pl-2 text-white">{"}"}</div>
        <div className="text-white">);</div>
      </div>

      {/* Terminal Output */}
      <div className="bg-gray-950 p-3 border-t border-gray-700">
        <div className="flex items-center gap-2 mb-1">
          <Terminal className="w-3 h-3 text-green-400" />
          <span className="text-[10px] text-gray-400">Response</span>
        </div>
        <div className="text-[10px] text-green-400 flex items-center gap-1">
          <Check className="w-3 h-3" />
          {"{ status: 'sent', id: 'msg_abc123' }"}
        </div>
      </div>
    </div>
  );
}
