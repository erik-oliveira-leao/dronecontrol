import { Play, Pause, Radio, RotateCcw } from 'lucide-react';
import useDroneFlight from '@/hooks/useDroneFlight';
import DroneView from '@/components/drone/DroneView';
import Telemetry from '@/components/drone/Telemetry';
import ControlPad from '@/components/drone/ControlPad';

export default function Home() {
    const { flying, setFlying, telemetry, command } = useDroneFlight();
    return (
        <main className="min-h-screen bg-[#06090b] px-4 py-5 text-white sm:px-7 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <header className="mb-5 flex items-center justify-between">
                    <div><div className="flex items-center gap-2 text-lime-300"><Radio className="h-4 w-4" /><span className="text-xs font-semibold tracking-[0.25em]">SKY PILOT</span></div><h1 className="mt-1 text-xl font-semibold sm:text-2xl">Central de voo</h1></div>
                    <div className="text-right font-mono text-[10px] text-slate-500"><p>DRONE · SP-01</p><p className="text-emerald-400">SINAL FORTE</p></div>
                </header>
                <DroneView flying={flying} />
                <div className="relative z-10 -mt-3 px-3 sm:px-8"><Telemetry data={telemetry} /></div>
                <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.025] p-5">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <ControlPad command={command} />
                        <div className="text-center md:text-right"><p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-slate-500">Setas: movimento · W/S: altitude</p><div className="flex gap-2"><button onClick={() => window.location.reload()} className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:text-white"><RotateCcw className="h-5 w-5" /></button><button onClick={() => setFlying(!flying)} className="flex min-w-40 items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200 active:scale-95">{flying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{flying ? 'PAUSAR VOO' : 'INICIAR VOO'}</button></div></div>
                    </div>
                </section>
            </div>
        </main>
    );
}