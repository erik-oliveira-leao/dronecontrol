import { BatteryMedium, Gauge, MoveUp, Navigation } from 'lucide-react';

export default function Telemetry({ data }) {
    const items = [
        { icon: MoveUp, label: 'ALTITUDE', value: `${data.altitude} m` },
        { icon: Gauge, label: 'VELOCIDADE', value: `${data.speed} km/h` },
        { icon: Navigation, label: 'DIREÇÃO', value: `${data.heading}°` },
        { icon: BatteryMedium, label: 'BATERIA', value: `${data.battery}%` },
    ];
    return (
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {items.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 bg-[#0a1014]/95 px-4 py-3">
                    <Icon className="h-4 w-4 text-lime-300" />
                    <div><p className="text-[9px] tracking-[0.18em] text-slate-500">{label}</p><p className="font-mono text-sm text-slate-100">{value}</p></div>
                </div>
            ))}
        </div>
    );
}