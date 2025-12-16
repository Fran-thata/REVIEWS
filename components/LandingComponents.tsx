import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Layout,
  CreditCard,
  Settings,
  Users,
  Briefcase,
  Zap,
  Key,
  Shield,
  X,
  Eye,
  EyeOff,
  Smartphone,
  QrCode,
  ArrowRight
} from 'lucide-react';

// --- Custom Animations Style Component ---
const AnimationStyles = () => (
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes whatsapp-wiggle {
      0%, 85% { transform: rotate(0deg) scale(1); }
      87% { transform: rotate(-12deg) scale(1.15); }
      89% { transform: rotate(12deg) scale(1.15); }
      91% { transform: rotate(-12deg) scale(1.15); }
      93% { transform: rotate(12deg) scale(1.15); }
      95% { transform: rotate(0deg) scale(1); }
      100% { transform: rotate(0deg) scale(1); }
    }
    /* Slower animation: 80s for even smoother flow */
    .animate-marquee {
      animation: marquee 80s linear infinite;
    }
    .animate-whatsapp {
      animation: whatsapp-wiggle 4s ease-in-out infinite;
      transform-origin: center;
    }
    /* Pause animation on hover for better UX */
    .animate-marquee:hover {
      animation-play-state: paused;
    }
    /* Mask for marquee fade effect */
    .mask-fade-sides {
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }
  `}</style>
);

// --- Shared UI Components ---

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.374-5.03c0-5.445 4.431-9.878 9.878-9.878 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.444-4.435 9.878-9.88 9.878m0-11.423a1.542 1.542 0 11.002 3.084 1.542 1.542 0 01-.002-3.084" />
  </svg>
);

const SectionTitle = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 text-center leading-tight tracking-tight text-white ${className}`}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <p className={`text-lg md:text-xl max-w-3xl mx-auto text-center mb-16 font-medium leading-relaxed text-brand-100/80 ${className}`}>
    {children}
  </p>
);

const WhatsappButton = ({ text = "Quiero mi Pack por WhatsApp", className = "", variant = "primary" }: { text?: string, className?: string, variant?: 'primary' | 'outline' | 'white' | 'brand' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl group";
  
  const variants = {
    primary: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-green-900/50",
    brand: "bg-brand-600 hover:bg-brand-500 text-white shadow-brand-900/50",
    outline: "border-2 border-brand-400 text-brand-400 hover:bg-brand-900/50 bg-transparent",
    white: "bg-white text-brand-950 hover:bg-brand-50 shadow-lg"
  };

  return (
    <a 
      href="https://wa.me/34600000000"
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className={`w-4 h-4 ${variant !== 'outline' ? 'animate-whatsapp' : 'group-hover:animate-whatsapp'}`} />
      {text}
    </a>
  );
};

export const Hero: React.FC<{ onCtaClick: () => void }> = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 pt-12 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <AnimationStyles />
      <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="lg:w-1/2 text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-white tracking-tight drop-shadow-lg break-words">
              Multiplica tus reseñas en Google y conviértelas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">más clientes</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-brand-100 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90 font-medium">
              Las malas reseñas llegan solas. Las buenas se piden en el momento exacto.
            </p>
            
            <ul className="space-y-4 mb-10 text-left max-w-xl mx-auto lg:mx-0">
               <li className="flex items-start gap-3">
                 <span className="text-xl shrink-0">⚡</span>
                 <span className="text-brand-100 text-sm sm:text-base leading-tight mt-0.5"><strong className="text-white block sm:inline">Instantáneo:</strong> Acerca el móvil al expositor y valora en 1 segundo.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-xl shrink-0">🔑</span>
                 <span className="text-brand-100 text-sm sm:text-base leading-tight mt-0.5"><strong className="text-white block sm:inline">Llave en Mano:</strong> Llega configurado y listo para tu mostrador.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-xl shrink-0">🛡️</span>
                 <span className="text-brand-100 text-sm sm:text-base leading-tight mt-0.5"><strong className="text-white block sm:inline">Sin Ataduras:</strong> Pago único de por vida. Sin cuotas.</span>
               </li>
            </ul>
            
            <div className="mb-12 flex flex-col items-center lg:items-start gap-4 w-full">
              <div className="w-full max-w-[calc(100vw-2rem)] md:max-w-xl relative py-4 mask-fade-sides overflow-hidden">
                   <div className="flex gap-6 md:gap-12 animate-marquee w-max">
                       {[...Array(12)].map((_, i) => (
                           <React.Fragment key={i}>
                               <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                   <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-lg p-1 md:p-1.5">
                                       <GoogleLogo />
                                   </div>
                                   <span className="text-white font-bold text-base md:text-lg tracking-tight">Google</span>
                               </div>

                               <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                   <div className="flex gap-0.5">
                                       {[1,2,3,4,5].map(star => (
                                           <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                                       ))}
                                   </div>
                                   <span className="text-brand-100 font-medium text-xs md:text-sm">Reseñas 5 estrellas</span>
                               </div>
                           </React.Fragment>
                       ))}
                   </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <WhatsappButton text="Quiero mis RESEÑAS ahora" className="w-full sm:w-auto px-10 py-4 text-base md:text-lg md:px-14 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all hover:scale-105" />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center w-full">
             <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-brand-500/30 rounded-full blur-[80px] opacity-50"></div>
                <div className="relative bg-gradient-to-b from-white/10 to-white/5 p-2 rounded-[2.5rem] shadow-2xl ring-1 ring-white/10 backdrop-blur-sm transform transition-transform">
                    <div className="aspect-[9/16] w-full relative rounded-[2rem] overflow-hidden bg-brand-900/50">
                       <video 
                        src="https://res.cloudinary.com/ddpujsrsg/video/upload/v1765736203/WhatsApp_Video_2025-12-07_at_18.01.16-vmake_yfhwvd.mp4" 
                        className="w-full h-full object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      />
                    </div>
                    
                    <div className="absolute -bottom-6 -right-6 md:-right-8 bg-brand-900 p-4 rounded-xl shadow-2xl border border-white/20 animate-bounce z-20 min-w-[200px]" style={{ animationDuration: '4s' }}>
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2.5 shadow-lg shrink-0">
                             <GoogleLogo />
                         </div>
                         <div className="flex flex-col justify-center">
                           <p className="font-extrabold text-white text-sm leading-tight whitespace-nowrap">
                             Nueva Reseña
                           </p>
                           <p className="text-brand-200 text-xs font-medium leading-tight whitespace-nowrap mt-0.5">
                             Recibida hace un momento
                           </p>
                         </div>
                      </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-950 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>En Google solo existen dos tipos de negocio:</SectionTitle>
        <SectionSubtitle className="text-xl md:text-2xl">
          Unos pasan desapercibidos. Otros inspiran confianza. <span className="text-white font-extrabold">¿Cuál es el tuyo?</span>
        </SectionSubtitle>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-brand-900 p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-xl flex flex-col">
            <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-brand-950 rounded-full flex items-center justify-center shadow-lg border border-white/10">
                  <EyeOff className="text-brand-200" size={48} />
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-left">
               El negocio que <br/> pasa desapercibido
            </h3>

            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start gap-3 text-brand-100/80 font-medium leading-relaxed">
                  <span className="text-white mt-1.5 text-[8px]">●</span>
                  <span>Pocas reseñas, desactualizadas o incoherentes.</span>
               </li>
               <li className="flex items-start gap-3 text-brand-100/80 font-medium leading-relaxed">
                  <span className="text-white mt-1.5 text-[8px]">●</span>
                  <span>Das buen servicio, pero Google solo muestra reseñas antiguas.</span>
               </li>
            </ul>

            <div className="p-6 bg-brand-950/50 rounded-2xl border border-white/5">
              <p className="text-brand-200 text-sm font-medium leading-relaxed">
                <strong className="text-white/90 block mb-1">Consecuencia:</strong>
                Elige otro local y tú ni te enteras, pierdes la venta sin saber por qué
              </p>
            </div>
          </div>

          <div className="bg-brand-900 p-8 md:p-10 rounded-[2.5rem] border border-brand-400/30 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
            <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Star className="text-brand-900 fill-brand-900" size={32} />
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 text-left">
               El negocio que <br/> inspira confianza
            </h3>

            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start gap-3 text-white font-medium leading-relaxed">
                  <span className="text-white/70 mt-1.5 text-[8px]">●</span>
                  <span>Reseñas nuevas cada semana</span>
               </li>
               <li className="flex items-start gap-3 text-white font-medium leading-relaxed">
                  <span className="text-white/70 mt-1.5 text-[8px]">●</span>
                  <span>Ficha activa que trabaja 24/7 por ti</span>
               </li>
               <li className="flex items-start gap-3 text-white font-medium leading-relaxed">
                  <span className="text-white/70 mt-1.5 text-[8px]">●</span>
                  <span>El cliente piensa: “Buen servicio = buenas reseñas = aquí acierto”</span>
               </li>
            </ul>

            <div className="p-6 bg-brand-950/50 rounded-2xl border border-white/5">
               <p className="text-brand-200 text-sm font-medium leading-relaxed">
                 <strong className="text-white/90 block mb-1">Consecuencia:</strong>
                 Entra decidido, compra convencido, ganas ventas sin esfuerzo extra
               </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
           <p className="text-xl md:text-2xl font-bold text-white/90">La diferencia no es tu servicio, es lo visible que lo haces en Google.</p>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Cómo funciona en 3 pasos</SectionTitle>
        <SectionSubtitle>
          Olvídate de apps o configuraciones raras. En tres pasos ya estás generando reseñas.
        </SectionSubtitle>

        {/* Updated Steps Layout: Circles outside the card */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto mb-24">
           {[
             { num: "1", title: "Pides tu pack", desc: "Rellenas un formulario rápido: en menos de 1 minuto." },
             { num: "2", title: "Lo dejamos perfecto", desc: "Todo configurado y enlazado a tu ficha de Google. No tocas nada." },
             { num: "3", title: "Empieza a trabajar", desc: "Lo colocas en tu mostrador, y ese mismo día ya puedes ganar visibilidad." }
           ].map((step, idx) => (
             <div key={idx} className="flex items-center gap-6 md:gap-8">
                 {/* Number Circle - Separate Element */}
                 <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-600 flex items-center justify-center text-4xl md:text-5xl font-extrabold text-white shadow-xl z-10 border-4 border-brand-800">
                    {step.num}
                 </div>
                 {/* Text Content - Separate Card */}
                 <div className="bg-brand-600 p-8 rounded-[2rem] flex-grow shadow-xl border border-brand-500/30 text-left hover:bg-brand-500/20 transition-colors">
                    <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-brand-100 font-medium leading-relaxed text-lg">{step.desc}</p>
                 </div>
             </div>
           ))}
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* Expositor - Updated to match vertical card with golden stars */}
          <div className="bg-brand-800 rounded-[2.5rem] p-8 md:p-14 border border-white/5 flex flex-col items-center shadow-2xl relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            {/* Top Visual: The White Card */}
            <div className="relative z-10 mb-8">
               <img 
                 src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1765908680/WhatsApp_Image_2025-12-16_at_19.07.00_ilgwu2.jpg" 
                 alt="Expositor Google Reviews" 
                 className="w-64 md:w-72 h-auto rounded-3xl shadow-2xl mx-auto border-4 border-white transform hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* Text Content */}
            <div className="relative z-10 w-full max-w-2xl">
               <h3 className="text-3xl font-extrabold text-white mb-8">
                 EL EXPOSITOR (Tu imán silencioso)
               </h3>
               <ul className="space-y-4 mb-8 text-left max-w-lg mx-auto">
                 {[
                   "Perfecto para el mostrador.",
                   "Funciona solo, sin hablar por ti.",
                   "Convierte el momento de pago en una reseña natural.",
                   "Siempre visible. Siempre activo."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 text-brand-100 font-medium text-lg">
                     <div className="shrink-0 mt-1">
                        <CheckCircle size={20} className="text-yellow-400" />
                     </div>
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="flex items-center justify-center gap-2 text-lg font-bold text-white mt-8">
                 <span>Cliente satisfecho</span>
                 <ArrowRight className="w-5 h-5 text-yellow-400" />
                 <span>Reseña asegurada</span>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* TARJETA PROFESIONAL - UPDATED DESIGN */}
            <div className="bg-brand-800 rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-lg flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-500/30 transition-all">
               {/* Image from URL */}
               <div className="mb-8 relative z-10">
                  <img 
                     src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1765909419/WhatsApp_Image_2025-12-16_at_19.22.57_cevarx.jpg" 
                     alt="Tarjeta Profesional" 
                     className="w-48 md:w-56 h-auto rounded-2xl shadow-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                  />
               </div>
               
               <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-tight leading-none">
                 TARJETA<br/>PROFESIONAL
               </h3>
               <p className="text-sm font-bold text-amber-400 mb-8 uppercase tracking-[0.2em]">
                 CONFIANZA + RESEÑAS
               </p>

               <ul className="space-y-6 mb-8 text-left w-full max-w-sm mx-auto">
                  <li className="flex items-start gap-4">
                     <div className="shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-amber-400" />
                     </div>
                     <p className="text-brand-100 font-medium text-lg leading-snug">
                       Pensada para profesionales por cita: <span className="text-white font-semibold block mt-1">Salud, bienestar, imagen y servicios 1 a 1.</span>
                     </p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-amber-400" />
                     </div>
                     <p className="text-brand-100 font-medium text-lg leading-snug">
                       Al final de la sesión, <span className="text-white font-semibold block mt-1">el cliente satisfecho deja una reseña de calidad.</span>
                     </p>
                  </li>
               </ul>

               <div className="mt-auto pt-6 w-full">
                   <p className="text-lg font-bold text-white flex items-center justify-center gap-2">
                     Trato 1 a 1 <ArrowRight className="w-5 h-5 text-amber-400"/> Reseña premium
                   </p>
               </div>
            </div>

            {/* TARJETA DE EQUIPO - UPDATED DESIGN */}
            <div className="bg-brand-800 rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-lg flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-500/30 transition-all">
               {/* Image from URL */}
               <div className="mb-8 relative z-10">
                  <img 
                     src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1765910543/WhatsApp_Image_2025-12-16_at_19.22.57_1_fer35y.jpg" 
                     alt="Tarjeta de Equipo" 
                     className="w-48 md:w-56 h-auto rounded-2xl shadow-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                  />
               </div>
               
               <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-tight leading-none">
                 TARJETA<br/>DE EQUIPO
               </h3>
               <p className="text-sm font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">
                 TU GENERADOR AL INSTANTE
               </p>

               <ul className="space-y-6 mb-8 text-left w-full max-w-sm mx-auto">
                  <li className="flex items-start gap-4">
                     <div className="shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-amber-400" />
                     </div>
                     <p className="text-brand-100 font-medium text-lg leading-snug">
                       Pensada para camareros, repartidores y personal de atención directa.
                     </p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-amber-400" />
                     </div>
                     <p className="text-brand-100 font-medium text-lg leading-snug">
                       Se pide en el momento perfecto: mesa, barra o entrega del servicio.
                     </p>
                  </li>
               </ul>

               <div className="mt-auto pt-6 w-full">
                   <p className="text-lg font-bold text-white flex items-center justify-center gap-2">
                     Trato cercano <ArrowRight className="w-5 h-5 text-amber-400"/> Reseña al momento
                   </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
// ... (SocialProof, ServiceIncluded, Pricing, FAQ, FinalCTA, Footer remain same)
export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionTitle>No importa lo que decimos nosotros, importa lo que consiguen ellos.</SectionTitle>
        <SectionSubtitle>
           Negocios distintos. Problemas diferentes. Un mismo resultado: reseñas que por fin llegan.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
           <div className="bg-brand-900 p-10 rounded-[2rem] border border-white/5 shadow-lg hover:bg-brand-800 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-900">R</div>
                 <h3 className="text-xl font-bold text-white">Restaurante/local físico</h3>
              </div>
              <div className="space-y-6">
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wide">El problema</span>
                    <span className="text-slate-300 font-medium">Clientes contentos, 16 reseñas en 2 años.</span>
                 </div>
                 <div className="w-full h-px bg-white/10"></div>
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wide">El cambio</span>
                    <span className="text-slate-300 font-medium">Expositor colocado en el mostrador.</span>
                 </div>
                 <div className="p-4 bg-green-900/20 rounded-xl border border-green-500/20">
                    <span className="block text-xs font-bold text-green-400 uppercase tracking-wide mb-1">El resultado</span>
                    <span className="text-white font-bold text-lg">50+ reseñas el primer mes. Nº1 del barrio en google.</span>
                 </div>
              </div>
           </div>

           <div className="bg-brand-900 p-10 rounded-[2rem] border border-white/5 shadow-lg hover:bg-brand-800 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-900">C</div>
                 <h3 className="text-xl font-bold text-white">Clínica/servicio</h3>
              </div>
              <div className="space-y-6">
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wide">El problema</span>
                    <span className="text-slate-300 font-medium">Vergüenza al pedir reseñas. Momento incómodo tras la sesión.</span>
                 </div>
                 <div className="w-full h-px bg-white/10"></div>
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wide">El cambio</span>
                    <span className="text-slate-300 font-medium">Tarjeta profesional al terminar cada sesión.</span>
                 </div>
                 <div className="p-4 bg-green-900/20 rounded-xl border border-green-500/20">
                    <span className="block text-xs font-bold text-green-400 uppercase tracking-wide mb-1">El resultado</span>
                    <span className="text-white font-bold text-lg">90% valoraciones al instante. Sin forzar. Sin incomodar.</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceIncluded: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600 rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              No compras un expositor. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Contratas un servicio llave en mano</span>
            </h2>
            <p className="text-xl text-brand-100/90 font-light">
              Todo está pensado para que funcione desde el primer día y tú no tengas que pelearte con nada.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Configuración lista", desc: "Llega enlazada a tu ficha de Google. Sin tocar nada técnico." },
              { icon: Users, title: "Formación adaptada", desc: "Te enseñamos a pedir reseñas de forma natural. Online o presencial." },
              { icon: Briefcase, title: "Acompañamiento", desc: "La primera semana revisamos contigo cómo usarlo. No te dejamos solo." },
              { icon: ShieldCheck, title: "Prevención", desc: "Aprendes a detectar y resolver la insatisfacción antes de la reseña." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <item.icon className="text-brand-400 mb-6" size={32}/>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
         </div>
         
         <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-brand-800/50 border border-white/10 px-8 py-4 rounded-full text-brand-100 font-medium text-sm backdrop-blur-md">
               <Star className="text-yellow-400 fill-yellow-400" size={16}/>
               Material de apoyo: Guías claras, ejemplos reales y soporte humano. No bots.
            </div>
         </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-900 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionTitle>Elige cómo multiplicar tus reseñas</SectionTitle>
        <SectionSubtitle>
          Pagas una sola vez. Es tuyo para siempre.
        </SectionSubtitle>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          
          <div className="bg-brand-950 rounded-[2rem] p-8 border border-white/10 shadow-lg hover:border-brand-500/50 transition-all flex flex-col group">
             <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">Tarjeta Profesional</h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl font-extrabold text-white">50 €</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-white/10 text-brand-200 text-xs font-bold rounded-full uppercase tracking-wide">Pago Único</div>
             </div>
             <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
               Tarjeta premium con acabado mate negro. Pensada para profesionales por cita: salud, bienestar, imagen y servicios 1 a 1.
             </p>
             <WhatsappButton text="Elegir Tarjeta" className="w-full text-base py-4 border border-white/20" variant="white" />
          </div>

          <div className="bg-brand-950 rounded-[2rem] p-8 border border-white/10 shadow-lg hover:border-brand-500/50 transition-all flex flex-col group">
             <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">Expositor Mostrador</h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl font-extrabold text-white">50 €</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-white/10 text-brand-200 text-xs font-bold rounded-full uppercase tracking-wide">Pago Único</div>
             </div>
             <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
               Expositor listo para usar. Ideal si tienes un punto de cobro fijo o atención al cliente en mostrador.
             </p>
             <WhatsappButton text="Elegir Expositor" className="w-full text-base py-4 border border-white/20" variant="white" />
          </div>

          <div className="bg-gradient-to-b from-brand-600 to-brand-800 text-white rounded-[2rem] p-8 border-4 border-brand-400/30 shadow-[0_0_40px_rgba(37,99,235,0.3)] relative flex flex-col transform md:-translate-y-6">
             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-300 via-white to-brand-300 opacity-50"></div>
             <div className="absolute top-6 right-6 bg-white text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
               Más Vendido
             </div>
             <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-white">Pack Completo</h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-5xl font-extrabold text-white">150 €</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-brand-900/50 text-brand-100 text-xs font-bold rounded-full uppercase tracking-wide border border-white/10">Pago Único</div>
             </div>
             <p className="text-brand-50 mb-8 flex-grow leading-relaxed opacity-90">
               Un expositor + dos tarjetas para tu equipo. Ideal si tienes varios empleados o atención directa variada.
             </p>
             <WhatsappButton text="Elegir Pack Completo" className="w-full text-base py-4" variant="primary" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 bg-brand-950/50 p-10 rounded-[2rem] border border-white/5 backdrop-blur-sm">
           <h3 className="text-2xl font-bold text-center mb-8 text-white">Todo incluido en el precio</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-sm text-brand-100 font-medium">
              {[
                "Configurado y enlazado", "Listo para usar", "Formación incluida", "Acompañamiento inicial",
                "Estrategia diaria", "Material de apoyo"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-400 shrink-0"/> {feature}
                </div>
              ))}
              <div className="col-span-2 md:col-span-2 flex items-center gap-2 font-bold text-white bg-white/10 p-3 rounded-xl justify-center border border-white/5">
                 <CreditCard size={18}/> Pago único. Sin cuotas.
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Me da vergüenza pedir reseñas",
      a: "Te enseñamos frases naturales sin presión. El cliente lo hace en segundos y sin incomodidad."
    },
    {
      q: "¿Y si mis clientes no dejan reseñas?",
      a: "El problema no es el cliente, es el método. Aquí pides la reseña en el momento perfecto y con herramientas que facilitan. Pasa de una reseña al mes, a varias cada semana."
    },
    {
      q: "¿Funcionará en mi sector?",
      a: "Funciona en cualquier negocio con trato directo. Restaurantes, clínicas, peluquerías, estética, servicios a domicilio…"
    },
    {
      q: "¿Y si recibo una reseña negativa?",
      a: "Aprendes a detectar clientes no satisfechos antes de que escriban nada, resolviendo el problema en el momento."
    },
    {
      q: "¿Es complicado o me roba tiempo?",
      a: "Nada. Todo llega configurado. Solo colocas el expositor o muestras la tarjeta."
    },
    {
      q: "¿Hay suscripciones?",
      a: "No. Pago único."
    },
    {
      q: "¿Funciona con todos los móviles?",
      a: "Sí: NFC + QR = compatibilidad total."
    },
    {
      q: "¿Cuándo llega?",
      a: "En 24–48h tras la configuración."
    },
    {
      q: "¿Cuándo envío mis datos?",
      a: "Tras confirmar la compra. Formulario rápido de 2 minutos."
    }
  ];

  return (
    <section className="py-24 bg-brand-950 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle>Preguntas frecuentes</SectionTitle>
        <div className="space-y-4 mt-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-brand-900/50 rounded-3xl border border-white/5 overflow-hidden shadow-sm hover:bg-brand-900 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-start gap-6 p-6 text-left focus:outline-none"
              >
                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors border ${openIndex === idx ? 'bg-brand-500 border-brand-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-brand-800 border-white/10 text-brand-300'}`}>
                   {openIndex === idx ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}
                </div>
                
                <div className="flex-grow pt-2">
                  <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-white' : 'text-brand-100'}`}>
                    {faq.q}
                  </span>
                  
                  {openIndex === idx && (
                    <div className="text-slate-300 leading-relaxed mt-4 animate-fadeIn border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-950 to-black text-white relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
         <h2 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
           Si ya das un buen servicio, <br/>el problema no es tu cliente. <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Es tu visibilidad en Google.</span>
         </h2>
         <p className="text-xl text-brand-200/70 mb-12 max-w-2xl mx-auto font-light">
           Cada día nuevos clientes comparan reseñas antes de decidir. 
           Si tu ficha no refleja lo bien que trabajas, se irán al local de al lado.
         </p>
         
         <div className="flex flex-wrap justify-center gap-4 mb-16 text-brand-100 font-medium">
            <span className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle size={18} className="text-brand-400"/> Pago único</span>
            <span className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle size={18} className="text-brand-400"/> Sin tocar nada técnico</span>
            <span className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle size={18} className="text-brand-400"/> Estrategia incluida</span>
         </div>

         <WhatsappButton text="Hablar por WhatsApp y pedir mi pack" variant="primary" className="text-xl px-12 py-6 shadow-[0_0_30px_rgba(37,211,102,0.3)] border border-green-500/30" />
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
             <div className="w-8 h-8 bg-white/10 rounded-lg text-white flex items-center justify-center font-bold text-sm border border-white/10">G</div>
             <span className="font-bold text-gray-300 text-lg">GoogleBoost</span>
          </div>
          <p>© {new Date().getFullYear()} GoogleBoost. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
      </div>
    </footer>
  );
};