import { useState, useEffect } from "react";

const barData = [420, 380, 460, 300, 490, 410, 350, 440, 370, 480, 320, 400];

const tasks = [
  {
    type: "Bin Collection",
    vehicle: "Compactor",
    location: "DHA Phase 3",
    collection: "80 Bins",
    completion: 90,
    barColor: "bg-green-500",
    textColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400",
  },
  {
    type: "Bin Collection",
    vehicle: "Compactor",
    location: "Johar Town",
    collection: "60 Bins",
    completion: 70,
    barColor: "bg-green-500",
    textColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400",
  },
  {
    type: "Bin Collection",
    vehicle: "Compactor",
    location: "Model Town",
    collection: "30 Bins",
    completion: 100,
    barColor: "bg-green-500",
    textColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400",
  },
  {
    type: "Bin Collection",
    vehicle: "Compactor",
    location: "Iqbal Town",
    collection: "20 Bins",
    completion: 100,
    barColor: "bg-green-500",
    textColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400",
  },
  {
    type: "Waste Water Removal",
    vehicle: "Sewage Tank",
    location: "Ravi Road",
    collection: "100 Gallon",
    completion: 25,
    barColor: "bg-yellow-500",
    textColor: "text-yellow-400",
    tagColor: "bg-yellow-500/10 text-yellow-400",
  },
  {
    type: "Bin Collection",
    vehicle: "Compactor",
    location: "Gulshan Ravi",
    collection: "40 Bins",
    completion: 60,
    barColor: "bg-green-500",
    textColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-400",
  },
];

const alerts = [
  {
    label: "Vehicle Idle",
    time: "23 DEC 12:19 AM",
    dotColor: "bg-green-500",
    shadow: "shadow-[0_0_6px_#22c55e]",
  },
  {
    label: "Vehicle Stopped",
    time: "11 DEC 11:31 PM",
    dotColor: "bg-red-500",
    shadow: "shadow-[0_0_6px_#ef4444]",
  },
  {
    label: "Vehicle Enter in False Zone",
    time: "11 DEC 8:19 PM",
    dotColor: "bg-red-500",
    shadow: "shadow-[0_0_6px_#ef4444]",
  },
  {
    label: "Bin Full",
    time: "29 DEC 9:50 PM",
    dotColor: "bg-green-500",
    shadow: "shadow-[0_0_6px_#22c55e]",
  },
  {
    label: "Employee Absent",
    time: "14 DEC 11:30 PM",
    dotColor: "bg-yellow-500",
    shadow: "shadow-[0_0_6px_#f59e0b]",
  },
  {
    label: "Bin Overflow",
    time: "18 DEC 4:41 PM",
    dotColor: "bg-red-500",
    shadow: "shadow-[0_0_6px_#ef4444]",
  },
];

const employeeStats = [
  { label: "Active", value: "4000", dot: "bg-green-500", bar: "bg-green-500" },
  { label: "Non-Active", value: "500", dot: "bg-blue-500", bar: "bg-blue-500" },
  { label: "Absent", value: "200", dot: "bg-yellow-500", bar: "bg-yellow-500" },
  { label: "Resigned", value: "100", dot: "bg-red-500", bar: "bg-red-500" },
];

function BarChart() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimated(true), 150);
  }, []);
  const max = Math.max(...barData);

  return (
    <div className="flex items-end gap-1.5 h-20 pt-2">
      {barData.map((v, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t transition-all duration-700 ease-out ${i === 4 ? "bg-green-500" : "bg-white/20"}`}
          style={{
            height: animated ? `${(v / max) * 68}px` : "0px",
            transitionDelay: `${i * 45}ms`,
          }}
        />
      ))}
    </div>
  );
}

function AreaChart() {
  return (
    <svg viewBox="0 0 480 75" className="w-full h-24 block">
      <defs>
        <linearGradient id="aG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0,52 L40,40 L80,48 L120,25 L160,18 L200,30 L240,12 L280,22 L320,36 L360,18 L400,28 L440,44 L480,40 L480,75 L0,75 Z"
        fill="url(#aG)"
      />
      <path
        d="M0,52 L40,40 L80,48 L120,25 L160,18 L200,30 L240,12 L280,22 L320,36 L360,18 L400,28 L440,44 L480,40"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <g transform="translate(160,14)">
        <rect x="-36" y="-12" width="72" height="21" rx="10" fill="#22c55e" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="8"
          fontWeight="700"
        >
          100% Collected
        </text>
      </g>
      <g transform="translate(320,12)">
        <rect x="-30" y="-12" width="62" height="21" rx="10" fill="#22c55e" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="8"
          fontWeight="700"
        >
          273ms Left
        </text>
      </g>
    </svg>
  );
}

export default function Dashboard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 60);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-slate-200 p-5 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-4">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-[15px] tracking-tight text-green-500">
            WasteOps <span className="text-green-400">Dashboard</span>
          </span>
        </div>
        <span className="text-xs text-slate-500">
          ● Live · Updated just now
        </span>
      </div>

      {/* Grid */}
      <div
        className={`grid grid-cols-2 gap-4 max-w-5xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Card 1 — Bar Chart + Employee */}
        <div className="bg-[#162030] border border-[#1e2e40] rounded-2xl p-4">
          <BarChart />
          <div className="mt-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-sm">Employee</span>
              <span className="text-[10px] bg-green-500/15 text-green-400 rounded-full px-2 py-0.5">
                +23 this month
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {employeeStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <div className={`w-2.5 h-2.5 rounded-sm ${s.dot}`} />
                    <span className="text-[10px] text-slate-500">
                      {s.label}
                    </span>
                  </div>
                  <span className="text-lg font-bold tracking-tight">
                    {s.value}
                  </span>
                  <div className={`h-0.5 w-9 rounded-full ${s.bar}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 — Bin Collection */}
        <div className="bg-[#162030] border border-[#1e2e40] rounded-2xl p-4">
          <div className="font-bold text-sm mb-0.5">Bin Collection</div>
          <div className="text-[10px] text-green-400 mb-1">
            +6% more in last three days
          </div>
          <AreaChart />
          <div className="flex justify-between mt-1">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
              (m) => (
                <span key={m} className="text-[9px] text-slate-500">
                  {m}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Card 3 — Tasks Table */}
        <div className="bg-[#162030] border border-[#1e2e40] rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-sm">Tasks</span>
            <span className="text-[10px] text-green-400">
              ● 30 done this month
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="text-slate-500 text-left">
                  {[
                    "Tasks",
                    "Vehicle",
                    "Location",
                    "Collection",
                    "Completion",
                  ].map((h) => (
                    <th
                      key={h}
                      className="pb-2 px-1.5 font-medium whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#1e2e40] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <span className="mr-1">🗑️</span>
                      {t.type}
                    </td>
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] rounded px-1.5 py-0.5 ${t.tagColor}`}
                      >
                        🚛 {t.vehicle}
                      </span>
                    </td>
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      <span className="text-green-400 mr-1">📍</span>
                      {t.location}
                    </td>
                    <td className="py-2 px-1.5 whitespace-nowrap">
                      {t.collection}
                    </td>
                    <td className="py-2 px-1.5">
                      <div className="flex items-center gap-1.5 min-w-[72px]">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${t.barColor}`}
                            style={{ width: `${t.completion}%` }}
                          />
                        </div>
                        <span
                          className={`text-[10px] min-w-[28px] ${t.textColor}`}
                        >
                          {t.completion}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card 4 — Alarms & Alerts */}
        <div className="bg-[#162030] border border-[#1e2e40] rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-sm">Alarms &amp; Alerts</span>
            <span className="text-[10px] bg-red-500/10 text-red-400 rounded-full px-2 py-0.5">
              20 Alarms · 17 min ago
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {alerts.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${a.dotColor} ${a.shadow}`}
                />
                <div>
                  <div className="text-xs font-medium">{a.label}</div>
                  <div className="text-[10px] text-slate-500">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
