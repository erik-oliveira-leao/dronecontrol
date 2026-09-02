import { useEffect, useRef, useState } from 'react';
import { Crosshair } from 'lucide-react';

const VIDEO_URL = 'https://videos.pexels.com/video-files/34793791/14751770_1920_1080_30fps.mp4';
const VIDEO_URL2 = 'https://videos.pexels.com/video-files/38924182/16553949_3840_2160_30fps.mp4';
const VIDEO_URL3 = 'https://videos.pexels.com/video-files/38767194/16471856_3840_2160_25fps.mp4';
const VIDEO_URL4 = 'https://videos.pexels.com/video-files/37275421/15791219_3840_2160_30fps.mp4';

export default function DroneView({ flying }) {
    const [videoUrl, setVideoUrl] = useState(VIDEO_URL);
    const video = useRef(null);
    useEffect(() => { flying ? video.current?.play() : video.current?.pause(); }, [flying, videoUrl]);

    return (
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/60">
            <video ref={video} src={videoUrl} muted loop playsInline className="h-full w-full object-cover opacity-90" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
            <Crosshair className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-lime-300/70" strokeWidth={1} />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 font-mono text-[10px] tracking-widest text-white backdrop-blur">
                <span className={`h-2 w-2 rounded-full ${flying ? 'animate-pulse bg-red-500' : 'bg-slate-500'}`} /> {flying ? 'AO VIVO' : 'EM ESPERA'}
            </div>
            {!flying && <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/20"><p className="rounded-full bg-black/60 px-4 py-2 text-xs tracking-[0.2em] text-slate-200 backdrop-blur">INICIE O VOO</p></div>}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
                {[
                    { id: 1, url: VIDEO_URL, name: 'Drone 1' },
                    { id: 2, url: VIDEO_URL2, name: 'Drone 2' },
                    { id: 3, url: VIDEO_URL3, name: 'Drone 3' },
                    { id: 4, url: VIDEO_URL4, name: 'Drone 4' }
                ].map((drone) => (
                    <button
                        key={drone.id}
                        onClick={() => setVideoUrl(drone.url)}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur transition-all ${videoUrl === drone.url
                            ? 'bg-white/90 text-black shadow-lg shadow-white/20'
                            : 'bg-black/50 text-white hover:bg-white/30'
                            }`}
                    >
                        {drone.name}
                    </button>
                ))}
            </div>
        </div>
    );
}