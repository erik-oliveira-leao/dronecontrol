import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ChevronsDown, ChevronsUp } from 'lucide-react';

const Button = ({ label, onClick, children, className = '' }) => (
    <button onClick={onClick} aria-label={label} className={`grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition active:scale-90 active:border-lime-300 active:text-lime-300 ${className}`}>{children}</button>
);

export default function ControlPad({ command }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-7">
            <div className="grid grid-cols-3 gap-2">
                <Button label="Subir" onClick={() => command('up')} className="col-start-2"><ChevronsUp /></Button>
                <Button label="Girar à esquerda" onClick={() => command('left')}><ArrowLeft /></Button>
                <Button label="Descer" onClick={() => command('down')}><ChevronsDown /></Button>
                <Button label="Girar à direita" onClick={() => command('right')}><ArrowRight /></Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Button label="Avançar" onClick={() => command('forward')} className="col-start-2"><ArrowUp /></Button>
                <Button label="Recuar" onClick={() => command('back')} className="col-start-2"><ArrowDown /></Button>
            </div>
        </div>
    );
}