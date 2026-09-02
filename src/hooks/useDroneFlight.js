import { useEffect, useState } from 'react';

export default function useDroneFlight() {
    const [flying, setFlying] = useState(false);
    const [telemetry, setTelemetry] = useState({ altitude: 42, speed: 0, battery: 94, heading: 18 });

    const command = (action) => setTelemetry((value) => {
        const changes = {
            up: { altitude: Math.min(120, value.altitude + 3) }, down: { altitude: Math.max(2, value.altitude - 3) },
            forward: { speed: Math.min(68, value.speed + 4) }, back: { speed: Math.max(0, value.speed - 4) },
            left: { heading: (value.heading + 355) % 360 }, right: { heading: (value.heading + 5) % 360 },
        };
        return { ...value, ...changes[action] };
    });

    useEffect(() => {
        const keys = { ArrowUp: 'forward', ArrowDown: 'back', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right' };
        const onKey = (event) => keys[event.key] && command(keys[event.key]);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (!flying) return;
        const timer = setInterval(() => setTelemetry((v) => ({ ...v, battery: Math.max(0, +(v.battery - 0.1).toFixed(1)) })), 1800);
        return () => clearInterval(timer);
    }, [flying]);

    return { flying, setFlying, telemetry, command };
}