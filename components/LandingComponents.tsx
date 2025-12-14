import React, { useState } from 'react';
import { 
  Star, 
  Smartphone, 
  CheckCircle, 
  XCircle, 
  MessageCircle, 
  ShieldCheck, 
  Zap,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Briefcase,
  Settings,
  HelpCircle,
  Layout,
  CreditCard,
  MapPin
} from 'lucide-react';

// --- Shared UI Components ---

const SectionTitle = ({ children, className = "", dark = false }: { children?: React.ReactNode, className?: string, dark?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 text-center leading-tight ${dark ? 'text-white' : 'text-brand-900'} ${className}`}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className = "", dark = false }: { children?: React.ReactNode, className?: string, dark?: boolean }) => (
  <p className={`text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 font-medium ${dark ? 'text-brand-100' : 'text-gray-600'} ${className}`}>
    {children}
  </p>
);

const WhatsappButton = ({ text = "Quiero mi Pack por WhatsApp", className = "", variant = "primary" }: { text?: string, className?: string, variant?: 'primary' | 'outline' | 'white' | 'brand' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-green-200/50",
    brand: "bg-brand-600 hover:bg-brand-500 text-white shadow-brand-200/50",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 bg-white",
    white: "bg-white text-brand-900 hover:bg-gray-100 shadow-lg"
  };

  return (
    <a 
      href="https://wa.me/34600000000" // Replace with real number
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={24} className={variant === 'white' ? 'text-green-500' : 'text-white'} />
      {text}
    </a>
  );
};

// --- Sections ---

export const Hero: React.FC<{ onCtaClick: () => void }> = () => {
  return (
    <section className="relative bg-brand-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Multiplica tus reseñas en Google y conviértelas en <span className="text-brand-400">más clientes</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Las malas reseñas llegan solas. Las buenas se piden en el momento exacto.
              Nuestra Placa para reseñas hace que el cliente valore en segundos, sin pensarlo, justo cuando está más satisfecho.
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0 bg-brand-800/30 p-6 rounded-2xl border border-brand-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400 shrink-0" size={20} />
                <span className="font-semibold text-brand-50">Instantáneo: Acerca el móvil y valora en 1 segundo.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400 shrink-0" size={20} />
                <span className="font-semibold text-brand-50">Llave en Mano: Llega configurado y listo.</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-300 shrink-0" size={20} />
                <span className="font-semibold text-brand-50">Sin Ataduras: Pago único de por vida.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsappButton />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center">
             {/* Product Visualization - Cleaner Look */}
             <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-blue-400 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cliente usando NFC en expositor" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-brand-700/50 object-cover aspect-square"
                />
                
                {/* Float Card */}
                <div className="absolute -bottom-6 -left-6 bg-white text-brand-900 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                   <div className="bg-green-100 p-3 rounded-full">
                     <Star className="text-green-600 fill-green-600" size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Reseña Verificada</p>
                     <p className="text-xs text-gray-500">Recibida hace 2 min</p>
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>En Google solo existen dos tipos de negocio:</SectionTitle>
        <SectionSubtitle>
          Unos pasan desapercibidos. Otros inspiran confianza. ¿Cuál es el tuyo?
        </SectionSubtitle>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {/* Negative Scenario */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border-2 border-red-100 hover:border-red-200 transition-colors">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <XCircle className="text-red-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🛑 El negocio que pasa desapercibido</h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="flex gap-3"><span className="text-red-400 font-bold">•</span> Pocas reseñas, desactualizadas o incoherentes.</p>
              <p className="flex gap-3"><span className="text-red-400 font-bold">•</span> Das buen servicio, pero Google solo muestra reseñas antiguas.</p>
              <p className="flex gap-3"><span className="text-red-400 font-bold">•</span> El cliente piensa: “Si nadie comenta… por algo será.”</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-800 font-semibold text-sm">
                Consecuencia: elige otro local y tú ni te enteras, pierdes la venta sin saber por qué.
              </p>
            </div>
          </div>

          {/* Positive Scenario */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-green-500 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
              El objetivo
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🟢 El negocio que inspira confianza</h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="flex gap-3"><span className="text-green-500 font-bold">•</span> Reseñas nuevas cada semana.</p>
              <p className="flex gap-3"><span className="text-green-500 font-bold">•</span> Ficha activa que trabaja 24/7 por ti.</p>
              <p className="flex gap-3"><span className="text-green-500 font-bold">•</span> El cliente piensa: “Buen servicio + buenas reseñas = aquí acierto.”</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-green-800 font-semibold text-sm">
                Consecuencia: entra decidido, confía antes de conocerte, ganas ventas sin esfuerzo extra.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
           <p className="text-xl font-bold text-brand-800">La diferencia no es tu servicio, es lo visible que lo haces en Google.</p>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-brand-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Cómo funciona en 3 pasos</SectionTitle>
        <SectionSubtitle>
          Olvídate de apps o configuraciones raras. En tres pasos ya estás generando reseñas.
        </SectionSubtitle>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
           {[
             { num: "1", title: "Pides tu pack", desc: "Rellenas un formulario rápido: en menos de 1 minuto." },
             { num: "2", title: "Lo dejamos perfecto", desc: "Todo configurado y enlazado a tu ficha de Google. No tocas nada." },
             { num: "3", title: "Empieza a trabajar", desc: "Lo colocas en tu mostrador, y ese mismo día ya puedes ganar visibilidad." }
           ].map((step, idx) => (
             <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-600 text-white rounded-lg font-bold flex items-center justify-center text-lg shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-brand-900 mb-3 mt-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
             </div>
           ))}
        </div>

        {/* Products Showcase */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* Expositor */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-10 border-l-8 border-green-500">
            <div className="md:w-1/3 flex justify-center">
               <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  {/* Placeholder for Product Image */}
                  <Layout size={64} className="text-brand-200" />
               </div>
            </div>
            <div className="md:w-2/3">
               <h3 className="text-2xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-green-500"></span>
                 EL EXPOSITOR (Tu imán silencioso)
               </h3>
               <ul className="space-y-3 mb-6">
                 <li className="flex gap-3 text-gray-700"><CheckCircle size={20} className="text-brand-500 shrink-0"/> Perfecto para el mostrador.</li>
                 <li className="flex gap-3 text-gray-700"><CheckCircle size={20} className="text-brand-500 shrink-0"/> Funciona solo, sin hablar por ti.</li>
                 <li className="flex gap-3 text-gray-700"><CheckCircle size={20} className="text-brand-500 shrink-0"/> Convierte el momento de pago en una reseña natural.</li>
                 <li className="flex gap-3 text-gray-700"><CheckCircle size={20} className="text-brand-500 shrink-0"/> Siempre visible. Siempre activo.</li>
               </ul>
               <p className="font-bold text-brand-700">Cliente satisfecho = Reseña asegurada</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tarjeta Profesional */}
            <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-yellow-400">
               <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                 TARJETA PROFESIONAL
               </h3>
               <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Confianza + reseñas</p>
               <p className="text-gray-600 mb-4">
                 Pensada para profesionales por cita: salud, bienestar, imagen y servicios 1 a 1. 
                 Al final de la sesión, cuando el cliente está satisfecho, consigues una reseña de calidad.
               </p>
               <p className="font-bold text-brand-700 mt-auto">Trato 1 a 1 = Reseña premium</p>
            </div>

            {/* Tarjeta Equipo */}
            <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-blue-500">
               <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                 TARJETA DE EQUIPO
               </h3>
               <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Tu generador en caliente</p>
               <p className="text-gray-600 mb-4">
                 Pensada para camareros, repartidores y personal de atención directa. 
                 Se pide en el momento perfecto: mesa, barra o entrega del servicio.
               </p>
               <p className="font-bold text-brand-700 mt-auto">Trato cercano = Reseña al momento</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>No importa lo que decimos nosotros, importa lo que consiguen ellos.</SectionTitle>
        <SectionSubtitle>
           Negocios distintos. Problemas diferentes. Un mismo resultado: reseñas que por fin llegan.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
           {/* Case 1 */}
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">R</div>
                 <h3 className="text-xl font-bold text-brand-900">CASO 1 — Restaurante/local físico</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex gap-3">
                    <span className="font-bold text-red-500 min-w-[100px]">El problema:</span>
                    <span className="text-gray-600">Clientes contentos, 16 reseñas en 2 años.</span>
                 </div>
                 <div className="flex gap-3">
                    <span className="font-bold text-blue-500 min-w-[100px]">El cambio:</span>
                    <span className="text-gray-600">Expositor colocado en el mostrador.</span>
                 </div>
                 <div className="flex gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <span className="font-bold text-green-600 min-w-[100px]">El resultado:</span>
                    <span className="text-gray-800 font-medium">50+ reseñas el primer mes. Nº1 del barrio en google.</span>
                 </div>
              </div>
           </div>

           {/* Case 2 */}
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
                 <h3 className="text-xl font-bold text-brand-900">CASO 2 — Clínica/servicio</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex gap-3">
                    <span className="font-bold text-red-500 min-w-[100px]">El problema:</span>
                    <span className="text-gray-600">Vergüenza al pedir reseñas. Momento incómodo tras la sesión.</span>
                 </div>
                 <div className="flex gap-3">
                    <span className="font-bold text-blue-500 min-w-[100px]">El cambio:</span>
                    <span className="text-gray-600">Tarjeta profesional al terminar cada sesión.</span>
                 </div>
                 <div className="flex gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <span className="font-bold text-green-600 min-w-[100px]">El resultado:</span>
                    <span className="text-gray-800 font-medium">90% valoraciones al instante. Sin forzar. Sin incomodar.</span>
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
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-800 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              No compras un expositor. <br/>
              <span className="text-brand-400">Contratas un servicio llave en mano</span>
            </h2>
            <p className="text-xl text-brand-100">
              Todo está pensado para que funcione desde el primer día y tú no tengas que pelearte con nada.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700 backdrop-blur-sm">
                <Settings className="text-brand-400 mb-4" size={32}/>
                <h3 className="font-bold text-lg mb-2">Configuración lista para usar</h3>
                <p className="text-brand-200 text-sm">Llega enlazada a tu ficha de Google. Sin tocar nada técnico.</p>
            </div>
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700 backdrop-blur-sm">
                <Users className="text-brand-400 mb-4" size={32}/>
                <h3 className="font-bold text-lg mb-2">Formación adaptada</h3>
                <p className="text-brand-200 text-sm">Te enseñamos a pedir reseñas de forma natural, sin incomodar. Online o presencial en Valencia.</p>
            </div>
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700 backdrop-blur-sm">
                <Briefcase className="text-brand-400 mb-4" size={32}/>
                <h3 className="font-bold text-lg mb-2">Acompañamiento inicial</h3>
                <p className="text-brand-200 text-sm">La primera semana revisamos contigo cómo usarlo e integrarlo en la rutina. No te dejamos solo.</p>
            </div>
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700 backdrop-blur-sm">
                <ShieldCheck className="text-brand-400 mb-4" size={32}/>
                <h3 className="font-bold text-lg mb-2">Prevención de negativas</h3>
                <p className="text-brand-200 text-sm">Aprendes a detectar y resolver la insatisfacción antes de que se convierta en una reseña negativa.</p>
            </div>
         </div>
         
         <div className="mt-12 text-center">
            <div className="inline-block bg-brand-700 px-6 py-3 rounded-full text-brand-100 font-semibold text-sm">
               ➕ Material de apoyo: Guías claras, ejemplos reales y soporte humano. No bots.
            </div>
         </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Elige cómo multiplicar tus reseñas</SectionTitle>
        <SectionSubtitle>
          Pagas una sola vez. Es tuyo para siempre.
        </SectionSubtitle>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col">
             <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Tarjeta Profesional</h3>
                <div className="text-3xl font-extrabold text-brand-600 mt-2">50 €</div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Pago Único</p>
             </div>
             <p className="text-gray-600 mb-6 flex-grow">
               Tarjeta premium con acabado mate negro. Pensada para profesionales por cita: salud, bienestar, imagen y servicios 1 a 1.
             </p>
             <WhatsappButton text="Elegir Tarjeta" className="w-full text-base py-3" variant="outline" />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col">
             <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Expositor Mostrador</h3>
                <div className="text-3xl font-extrabold text-brand-600 mt-2">50 €</div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Pago Único</p>
             </div>
             <p className="text-gray-600 mb-6 flex-grow">
               Expositor listo para usar. Ideal si tienes un punto de cobro fijo o atención al cliente en mostrador.
             </p>
             <WhatsappButton text="Elegir Expositor" className="w-full text-base py-3" variant="outline" />
          </div>

          {/* Card 3 (Pack) */}
          <div className="bg-brand-900 text-white rounded-3xl p-8 border-4 border-brand-500 shadow-2xl relative flex flex-col transform md:-translate-y-4">
             <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
               Más Vendido
             </div>
             <div className="mb-4">
                <h3 className="text-xl font-bold">Pack Completo</h3>
                <div className="text-3xl font-extrabold text-white mt-2">150 €</div>
                <p className="text-xs text-brand-300 uppercase tracking-wider font-semibold">Pago Único</p>
             </div>
             <p className="text-brand-100 mb-6 flex-grow">
               Un expositor + dos tarjetas para tu equipo. Ideal si tienes varios empleados o atención directa variada.
             </p>
             <WhatsappButton text="Elegir Pack Completo" className="w-full text-base py-3" variant="primary" />
          </div>
        </div>

        {/* All Included */}
        <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-2xl border border-brand-100 shadow-sm">
           <h3 className="text-xl font-bold text-center mb-6 text-brand-900">Todo incluido en el precio</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Configurado y enlazado</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Listo para usar</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Formación incluida</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Acompañamiento inicial</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Estrategia diaria</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500"/> Material de apoyo</div>
              <div className="col-span-2 md:col-span-2 flex items-center gap-2 font-bold text-brand-700 bg-brand-50 p-2 rounded justify-center">
                 <CreditCard size={16}/> Pago único. Sin cuotas.
              </div>
           </div>
           <div className="mt-8 text-center">
             <WhatsappButton text="Preguntar duda por WhatsApp" variant="white" className="text-sm py-3 px-6 shadow-none border border-gray-200" />
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle>Preguntas frecuentes</SectionTitle>
        <div className="space-y-4 mt-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-600 shrink-0"/> : <ChevronDown className="text-gray-400 shrink-0"/>}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200/50 pt-4 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 text-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
         <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
           Si ya das un buen servicio, el problema no es tu cliente. <br/>
           <span className="text-brand-400">Es tu visibilidad en Google.</span>
         </h2>
         <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
           Cada día nuevos clientes comparan reseñas antes de decidir. 
           Si tu ficha no refleja lo bien que trabajas, se irán al local de al lado.
         </p>
         
         <div className="flex flex-wrap justify-center gap-4 mb-12 text-brand-200 font-medium">
            <span className="flex items-center gap-2 bg-brand-900 px-4 py-2 rounded-full border border-brand-800"><CheckCircle size={18} className="text-brand-400"/> Pago único</span>
            <span className="flex items-center gap-2 bg-brand-900 px-4 py-2 rounded-full border border-brand-800"><CheckCircle size={18} className="text-brand-400"/> Sin tocar nada técnico</span>
            <span className="flex items-center gap-2 bg-brand-900 px-4 py-2 rounded-full border border-brand-800"><CheckCircle size={18} className="text-brand-400"/> Estrategia y soporte incluidos</span>
         </div>

         <WhatsappButton text="Hablar por WhatsApp y pedir mi pack" variant="primary" className="text-xl px-10 py-5" />
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-6 h-6 bg-brand-600 rounded text-white flex items-center justify-center font-bold text-xs">G</div>
             <span className="font-bold text-gray-900">GoogleBoost</span>
          </div>
          <p>© {new Date().getFullYear()} GoogleBoost. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-600">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-600">Aviso Legal</a>
          </div>
      </div>
    </footer>
  );
};

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <a 
        href="https://wa.me/34600000000" 
        className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-2xl animate-pulse"
      >
        <MessageCircle size={20} />
        Pedir Pack por WhatsApp
      </a>
    </div>
  );
};