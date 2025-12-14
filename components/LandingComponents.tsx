import React, { useState } from 'react';
import { 
  Star, 
  Smartphone, 
  MapPin, 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Zap,
  ChevronDown,
  ChevronUp,
  Award,
  Phone,
  Clock,
  ThumbsUp,
  AlertTriangle
} from 'lucide-react';

// --- Shared Components ---

const SectionTitle = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center leading-tight ${className}`}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12 ${className}`}>
    {children}
  </p>
);

const WhatsappButton = ({ text = "Ver mi caso por WhatsApp", className = "", variant = "primary" }: { text?: string, className?: string, variant?: 'primary' | 'outline' | 'white' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-green-200",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
    white: "bg-white text-brand-900 hover:bg-gray-100"
  };

  return (
    <a 
      href="https://wa.me/34600000000" // Replace with real number
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={24} />
      {text}
    </a>
  );
};

// --- Sections ---

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-brand-950 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/445/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-brand-200 text-lg mb-4 font-medium leading-relaxed">
              Si lo haces fácil y justo al terminar el servicio, las reseñas empiezan a salir solas. 
              La mayoría de clientes quiere valorar, solo necesita que sea sencillo y en el momento adecuado.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Placa para reseñas de Google que hace que tu negocio <span className="text-brand-400">destaque desde el primer día</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Expositor físico con placa NFC y código QR para que tus clientes dejen reseñas en Google en segundos, 
              sin buscarte en el móvil, sin configuraciones raras y sin cuotas mensuales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsappButton />
            </div>
            {/* Video Placeholder/Icon */}
             <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
               <div className="flex text-yellow-400">
                 {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <span>+500 negocios ya lo usan</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             {/* Product Visualization */}
            <div className="relative mx-auto w-full max-w-md aspect-square">
               <div className="absolute inset-0 bg-brand-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
               <img 
                 src="https://picsum.photos/id/3/800/800" 
                 alt="Expositor de Reseñas Google y cliente escaneando" 
                 className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500"
               />
               <div className="absolute -bottom-6 -right-6 bg-white text-brand-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">5 Estrellas</p>
                    <p className="text-xs text-gray-500">En 5 segundos</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>
          Tus clientes ya comparan en Google... <br/>
          <span className="text-brand-600">La cuestión es si entran en tu negocio o en el de al lado</span>
        </SectionTitle>
        <SectionSubtitle>
          Seguramente das un buen servicio y tus clientes salen contentos. 
          El problema es que, si eso no se refleja en tus reseñas de Google, para muchos clientes nuevos simplemente no existes.
          Hoy en día, antes de entrar en cualquier negocio local, la mayoría mira Google Maps y compara opiniones.
        </SectionSubtitle>

        {/* Comparativa */}
        <h3 className="text-2xl font-bold text-center mb-8">Comparativa entre negocios que trabajan sus reseñas y los que no</h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Bad Scenario */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-red-500 relative overflow-hidden group hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">✖</span>
              Negocio que NO trabaja sus reseñas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1"><XCircle size={18} /></span>
                <p className="text-gray-600">Tiene clientes, pero su ficha de Google apenas se mueve.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1"><XCircle size={18} /></span>
                <p className="text-gray-600">Pocas reseñas nuevas.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1"><XCircle size={18} /></span>
                <p className="text-gray-600">Puntuación normal.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1"><XCircle size={18} /></span>
                <p className="text-gray-600">El cliente duda antes de entrar.</p>
              </li>
            </ul>
          </div>

          {/* Good Scenario */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-green-500 relative overflow-hidden group hover:shadow-xl transition-all transform md:-translate-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✔</span>
              Negocio que SÍ trabaja sus reseñas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                <p className="text-gray-600 font-medium">Reseñas nuevas de forma constante.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                <p className="text-gray-600 font-medium">Mejor puntuación.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                <p className="text-gray-600 font-medium">Aparece más arriba en Google Maps.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1"><CheckCircle size={18} /></span>
                <p className="text-gray-600 font-medium">Más clientes entran con más confianza.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Consecuencias */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">Consecuencias reales de no trabajar las reseñas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-red-50 rounded-xl">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={28} />
              <p className="text-sm font-medium">Menos visibilidad en Google</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={28} />
              <p className="text-sm font-medium">Menos confianza a primera vista</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={28} />
              <p className="text-sm font-medium">Más dudas antes de elegir tu negocio</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={28} />
              <p className="text-sm font-medium">Clientes que ni siquiera llegan a verte</p>
            </div>
          </div>
        </div>

        {/* La Buena Noticia */}
        <div className="bg-brand-50 p-8 rounded-2xl text-center max-w-4xl mx-auto border border-brand-100">
           <h3 className="text-2xl font-bold text-brand-900 mb-4">La buena noticia</h3>
           <p className="text-lg text-brand-800">
             Hoy existen sistemas físicos como la placa para reseñas de Google o el expositor con QR que facilitan que tus propios clientes dejen su opinión en el momento justo, 
             de forma natural, sin tener que insistirles ni perseguirlos después.
           </p>
        </div>

      </div>
    </section>
  );
};

export const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            La forma más fácil de conseguir reseñas en Google sin complicarte
          </h2>
          <p className="text-lg text-brand-100">
            No se trata de pedir reseñas de forma incómoda ni mandar enlaces por WhatsApp o email esperando que el cliente se acuerde días después. 
            La solución es ponérselo fácil en el momento justo: cuando está en tu negocio y sale contento.
          </p>
          <div className="mt-8 p-6 bg-brand-800 rounded-xl border border-brand-600 inline-block">
             <p className="text-brand-50 italic">
               "Para eso usamos un expositor físico de mostrador y tarjetas del tamaño de una tarjeta de crédito con acceso directo a tus reseñas de Google mediante QR y NFC. 
               El cliente acerca el móvil, entra en tu ficha y deja su opinión en segundos, sin apps, sin formularios y sin complicaciones."
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <img 
               src="https://picsum.photos/id/6/800/600" 
               alt="Sistema Expositor y Tarjetas" 
               className="rounded-lg shadow-2xl border-4 border-brand-700"
             />
           </div>
           
           <div className="space-y-10">
              {/* Qué es */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Qué es exactamente este sistema</h3>
                <p className="text-brand-100 mb-4">Es un sistema físico muy sencillo pensado para pedir reseñas en el momento:</p>
                <ul className="space-y-2 text-brand-100">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-400 rounded-full"/> Un expositor de mostrador para reseñas de Google.</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-400 rounded-full"/> Tarjetas del tamaño de una tarjeta de crédito para tu equipo.</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-400 rounded-full"/> Acceso directo a tu ficha de Google mediante código QR y tecnología NFC.</li>
                </ul>
              </div>

              {/* Por qué funciona */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Por qué funciona mejor que enviar enlaces</h3>
                <p className="text-brand-100">
                  Porque no depende de que el cliente se acuerde después ni de mensajes que se pierden entre notificaciones. 
                  Funciona en el momento exacto en el que el cliente está satisfecho con tu servicio, cuando es más fácil que deje su opinión y más probable que lo haga.
                </p>
              </div>

              {/* No técnico */}
              <div className="p-6 bg-brand-800/50 rounded-xl border-l-4 border-brand-400">
                <h3 className="text-xl font-bold text-white mb-2">Tú no tienes que hacer nada técnico</h3>
                <p className="text-brand-200 text-sm">
                  Nosotros te entregamos el sistema ya preparado y enlazado a tu ficha de Google. 
                  Tú solo tienes que colocar el expositor en el mostrador o usar las tarjetas al terminar el servicio. 
                  Sin configuraciones, sin tocar nada en Google y sin mantenimiento complicado.
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MapPin size={32} />,
      title: "Paso 1: Coloca el expositor o usa la tarjeta",
      desc: "El expositor para reseñas de Google se coloca en un punto visible del mostrador. La tarjeta NFC con QR la usas al terminar el servicio, cuando la experiencia aún es positiva. En ese momento le pides al cliente que deje su reseña."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Paso 2: El cliente acerca su móvil",
      desc: "El cliente solo tiene que acercar su móvil al expositor o a la tarjeta NFC, o escanear el código QR. No tiene que buscar tu negocio en Google, escribir tu nombre ni recordar ningún enlace."
    },
    {
      icon: <Star size={32} />,
      title: "Paso 3: Se abre directamente tu ficha de Google",
      desc: "En segundos se abre tu ficha en Google Maps con la opción de escribir la reseña. El cliente deja su opinión cuando todavía tiene fresca la experiencia contigo."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Paso 4: Tus reseñas empiezan a crecer",
      desc: "Cada vez que repites este proceso, tu ficha va sumando nuevas reseñas. Con el tiempo, mejora tu reputación, tu visibilidad en Google y la confianza frente a otros negocios de tu zona."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Cómo funciona el sistema para conseguir reseñas en Google</SectionTitle>
        <SectionSubtitle>
          Funciona de forma muy sencilla: colocas el expositor en el mostrador o usas la tarjeta al terminar el servicio, 
          el cliente acerca el móvil y deja su reseña en menos de un minuto.
        </SectionSubtitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-sm shrink-0">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Lo que gana tu negocio cuando tus reseñas de Google crecen de forma sencilla</SectionTitle>
        <SectionSubtitle>
          Más visibilidad, más confianza y más facilidad para que te elijan en tu zona. 
          Cuando las reseñas crecen de forma natural, tu negocio se ve mejor en Google sin que tengas que complicarte.
        </SectionSubtitle>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
           <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <TrendingUp className="text-brand-500" /> Más visibilidad en Google y Google Maps
              </h3>
              <p className="text-gray-600">
                Cuando alguien busca un negocio como el tuyo en tu zona, tener más reseñas hace que tu ficha se vea antes y destaque más. Es una de las formas más rápidas de ganar visibilidad sin pagar anuncios.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <ShieldCheck className="text-brand-500" /> Más confianza antes de que el cliente llegue
              </h3>
              <p className="text-gray-600">
                Antes de entrar, la mayoría mira las opiniones. Ver buenas reseñas hace que el cliente llegue con más seguridad y menos dudas, mucho más predispuesto a elegirte.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Star className="text-brand-500" /> Tu reputación empieza a jugar a tu favor
              </h3>
              <p className="text-gray-600">
                Cuando tus reseñas aumentan, tu negocio transmite una imagen más profesional y fiable. No tienes que convencer a nadie: son las propias opiniones de tus clientes las que hablan por ti.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-500 md:col-span-1.5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Award className="text-brand-500" /> Te diferencias de tu competencia sin hacer anuncios
              </h3>
              <p className="text-gray-600">
                Mientras otros dependen de publicidad o redes sociales, tú destacas solo con tus reseñas. Es una forma simple y constante de marcar la diferencia en tu zona.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-500 md:col-span-1.5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Clock className="text-brand-500" /> Reseñas constantes, no solo de vez en cuando
              </h3>
              <p className="text-gray-600">
                No dependes de que un cliente se acuerde días después. El sistema facilita que las reseñas lleguen de forma regular, semana tras semana, sin perseguir a nadie.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Differentiator: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              No compras un expositor: contratas un servicio <span className="text-brand-400">llave en mano</span> para tus reseñas en Google
            </h2>
            <p className="text-xl text-brand-100 mb-12">
              Aquí no se trata solo de venderte una placa, un expositor con QR o una tarjeta NFC. Se trata de que todo funcione desde el primer día. 
              Te lo dejamos configurado, te enseñamos cómo usarlo bien y te acompañamos hasta que tus reseñas en Google empiecen a crecer de forma natural.
            </p>
         </div>

         <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700">
                <h3 className="font-bold text-xl mb-2 text-white">Configuración lista para usar, sin líos técnicos</h3>
                <p className="text-brand-100">Te entregamos el expositor para reseñas de Google y las tarjetas NFC/QR ya configurados y enlazados a tu ficha de Google Maps. No tienes que tocar nada técnico: solo colocarlos en su sitio y empezar a usarlos.</p>
            </div>

            <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700">
                <h3 className="font-bold text-xl mb-2 text-white">Formación adaptada a tu negocio (online y, si hace falta, presencial)</h3>
                <p className="text-brand-100">Te enseñamos a ti y a tu equipo cómo pedir reseñas de forma natural, sin presionar al cliente. La formación se hace por videollamada para que sea rápida y fácil de encajar en tu día a día. En algunos casos también puede ser presencial en Valencia si se necesita.</p>
            </div>

            <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700">
                <h3 className="font-bold text-xl mb-2 text-white">Acompañamiento en los primeros días</h3>
                <p className="text-brand-100">No te soltamos el primer día. Durante la primera semana estamos pendientes de ti para resolver dudas, corregir detalles y asegurarnos de que el sistema se está usando bien. Revisamos contigo cómo estás ahora en Google, dónde colocar el expositor, cuándo usar las tarjetas y cómo integrarlo en la rutina.</p>
            </div>

            <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700">
                <h3 className="font-bold text-xl mb-2 text-white">Prevenir una reseña negativa antes de que se publique</h3>
                <p className="text-brand-100">Te enseñamos una forma práctica de detectar cuándo un cliente no ha quedado del todo satisfecho antes de que deje su opinión. Así puedes actuar a tiempo, mejorar la experiencia y evitar que una mala impresión termine en una reseña negativa en Google.</p>
            </div>

            <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700">
                <h3 className="font-bold text-xl mb-2 text-white">Material de apoyo y trato directo contigo</h3>
                <p className="text-brand-100">Te llevas material de apoyo claro y práctico (en PDF o físico) con ejemplos, frases y recomendaciones para pedir reseñas sin incomodar. Y si tienes una duda, hablas directamente con una persona que conoce tu caso: sin bots, ni intermediarios.</p>
            </div>
         </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Elige cómo quieres conseguir reseñas de Google en tu negocio</SectionTitle>
        <SectionSubtitle>
          Elige entre un expositor en el mostrador o tarjetas personales para tu equipo. 
          Dos formas sencillas de conseguir más reseñas de Google, sin cuotas y con pago único.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          
          {/* Option 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-gray-900">Expositor para mostrador</h3>
               <p className="text-gray-500 mt-2">
                 Incluye 1 expositor físico para reseñas de Google, listo para colocar en tu mostrador y empezar a recibir reseñas desde el primer día. Ideal para negocios pequeños o para empezar con algo sencillo.
               </p>
             </div>
             <div className="text-4xl font-extrabold text-brand-600 mb-6">50 € <span className="text-lg text-gray-400 font-normal">/ Pago único</span></div>
             <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wide">Sin cuotas mensuales</p>
             <WhatsappButton text="Elegir Expositor" className="w-full text-base" variant="outline" />
          </div>

          {/* Option 2 (Featured) */}
          <div className="bg-brand-900 text-white rounded-3xl shadow-xl p-8 border-4 border-brand-600 relative flex flex-col transform md:-translate-y-4">
             <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
               Recomendado
             </div>
             <div className="mb-6">
               <h3 className="text-2xl font-bold">Pack completo: expositor + 2 tarjetas</h3>
               <p className="text-brand-200 mt-2">
                 Incluye 1 expositor para el mostrador y 2 tarjetas NFC con QR, del tamaño de una tarjeta de crédito, para que tu equipo pueda pedir reseñas en Google justo al terminar el servicio. 
                 Es la opción ideal para negocios con varios empleados o con atención directa al cliente.
               </p>
             </div>
             <div className="text-4xl font-extrabold text-white mb-6">150 € <span className="text-lg text-brand-300 font-normal">/ Pago único</span></div>
             <p className="text-sm text-brand-300 mb-6 font-semibold uppercase tracking-wide">Sin cuotas mensuales</p>
             <WhatsappButton text="Elegir Pack Completo" className="w-full text-base" variant="primary" />
          </div>
        </div>

        {/* All Included Block */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
           <h3 className="text-2xl font-bold text-center mb-6">Todo incluido en el precio, sin sorpresas</h3>
           <p className="text-center text-gray-600 mb-8">En ambos casos te llevas un servicio llave en mano:</p>
           <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Configuración lista para usar.</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Formación adaptada (online y presencial en Valencia).</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Acompañamiento durante la primera semana.</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Orientación inicial según tu tipo de negocio.</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Material de apoyo para ti y tu equipo.</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="text-green-500 shrink-0"/> <span className="text-gray-700">Pagas una sola vez: sin cuotas ni mantenimiento.</span></div>
           </div>
        </div>
        
        <div className="mt-12 text-center bg-brand-50 p-8 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-brand-900 mb-2">¿Lo vemos en tu caso en 5 minutos?</h3>
          <p className="text-brand-800 mb-6">
            Si tienes dudas o quieres saber qué opción encaja mejor con tu negocio, escríbenos por WhatsApp y lo vemos contigo en un momento, sin compromiso. 
            Te diremos si te conviene solo el expositor o el pack completo para empezar a conseguir más reseñas en Google cuanto antes.
          </p>
          <p className="text-sm font-semibold mb-4 text-brand-600">Si quieres empezar a mejorar tus reseñas de Google ya mismo, este es el punto de partida.</p>
          <WhatsappButton />
          <p className="text-xs text-gray-500 mt-4">Valencia y alrededores · Atención directa · Respuesta rápida</p>
        </div>
      </div>
    </section>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Lo que dicen negocios como el tuyo sobre este sistema de reseñas en Google</SectionTitle>
        <SectionSubtitle>
          Antes de decidir, es normal querer ver si esto funciona también en negocios como el tuyo. 
          Aquí puedes ver resultados y opiniones reales de dueños de negocios que ya están usando el expositor y las tarjetas para pedir reseñas de Google de forma sencilla y natural.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 mb-16">
           {/* Testimonio 1 */}
           <div className="p-8 bg-gray-50 rounded-2xl italic relative border border-gray-100">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">RE</div>
                <div>
                   <p className="font-bold text-gray-900 not-italic">Restaurante El Puerto</p>
                   <p className="text-xs text-gray-500 not-italic">Hostelería · Valencia</p>
                </div>
             </div>
             <p className="text-gray-700 mb-4">
               "Antes teníamos 3 reseñas al mes con suerte. Desde que pusimos el expositor, los clientes lo hacen solos mientras pagan. Hemos subido a 4.9 en dos meses y se nota que entra más gente nueva."
             </p>
             <div className="flex text-yellow-400">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
             </div>
           </div>

           {/* Testimonio 2 */}
           <div className="p-8 bg-gray-50 rounded-2xl italic relative border border-gray-100">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">SV</div>
                <div>
                   <p className="font-bold text-gray-900 not-italic">Clínica Salud Vital</p>
                   <p className="text-xs text-gray-500 not-italic">Fisioterapia · Madrid</p>
                </div>
             </div>
             <p className="text-gray-700 mb-4">
               "El pack con tarjetas es brutal para mis fisios. Terminan la sesión, pasan la tarjeta y el paciente deja la reseña encantado. Simple y efectivo. Ahora aparecemos los primeros en la zona."
             </p>
             <div className="flex text-yellow-400">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
             </div>
           </div>
        </div>

        {/* Antes y Después */}
        <div className="max-w-4xl mx-auto bg-brand-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Antes y después en reseñas y visibilidad</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-red-500 mb-2">Antes</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex gap-2"><XCircle size={16} className="text-red-400 mt-1"/> Pocas reseñas.</li>
                        <li className="flex gap-2"><XCircle size={16} className="text-red-400 mt-1"/> Menor visibilidad en Google.</li>
                        <li className="flex gap-2"><XCircle size={16} className="text-red-400 mt-1"/> Más dudas por parte de los clientes.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-green-500 mb-2">Después</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 mt-1"/> Más opiniones.</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 mt-1"/> Mejor puntuación.</li>
                        <li className="flex gap-2"><CheckCircle size={16} className="text-green-400 mt-1"/> Más confianza a la hora de entrar y elegir su negocio.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Sectors: React.FC = () => {
  const sectors = [
    { title: "Bares, cafeterías y restaurantes", desc: "Perfecto para locales con mucho movimiento de clientes. El expositor se queda visible en el mostrador y las tarjetas permiten a los camareros pedir reseñas justo al terminar el servicio." },
    { title: "Clínicas privadas, fisioterapeutas y salud", desc: "Perfecto para profesionales que trabajan con citas y trato cercano. La tarjeta permite pedir la reseña justo al terminar la sesión, cuando el cliente está más satisfecho con el servicio." },
    { title: "Gimnasios y entrenadores personales", desc: "Ideal para pedir reseñas tras una clase, una sesión de entrenamiento o al finalizar un programa, cuando el cliente ya ha vivido la experiencia." },
    { title: "Estética, peluquerías y centros de belleza", desc: "El momento ideal para pedir una reseña es justo después del servicio, cuando el cliente se ve bien y está satisfecho. Las reseñas aquí influyen muchísimo en nuevas reservas." },
    { title: "Hoteles, hostales y apartamentos", desc: "Las reseñas son clave para que te elijan entre cientos de opciones. Este sistema te permite pedir valoraciones justo tras el check-out o al final de la estancia. Más confianza, mejor posición y más reservas." },
    { title: "Talleres mecánicos y automoción", desc: "Los clientes buscan talleres con buenas valoraciones antes de confiar su coche. Pedir la reseña justo después de una reparación es el mejor momento: el cliente ya ha visto el resultado y está satisfecho." }
  ];

  return (
    <section className="py-16 bg-brand-900 text-brand-100 border-t border-brand-800">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-white">El sistema ideal para negocios con trato directo</SectionTitle>
        <SectionSubtitle className="text-brand-200">
          Pide la reseña justo al terminar el servicio, cuando el cliente aún está satisfecho. 
          Evita seguir perdiendo clientes por falta de valoraciones en Google. Más reseñas visibles generan más confianza, más llamadas y más trabajo cada día.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-brand-800/50 p-6 rounded-xl border border-brand-700 hover:bg-brand-800 transition-colors">
              <h4 className="font-bold text-white mb-3 text-lg">{sector.title}</h4>
              <p className="text-sm text-brand-200 leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Objections: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "“Mis clientes no dejan reseñas” / “Aquí esto no funciona”",
      a: "No es tu cliente, es el método. Si lo haces fácil y justo al terminar el servicio, las reseñas empiezan a salir solas. La mayoría de clientes quiere valorar, solo necesita que sea sencillo y en el momento adecuado."
    },
    {
      q: "“Ya tengo bastantes reseñas, no lo necesito”",
      a: "Hoy pueden bastar, mañana no. Si no sigues sumando valoraciones, tu posición y tu imagen caen, y la competencia toma ventaja. Mantener el ritmo es la única manera de proteger tu reputación."
    },
    {
      q: "“Ahora no es buen momento”",
      a: "Siempre hay algo que atender antes… pero mientras esperas, otros suman reseñas, confianza, visibilidad y más clientes. No decidir también es decidir… y suele salir muy caro."
    },
    {
      q: "“Prefiero algo más barato”",
      a: "Lo barato no tiene seguimiento, ni información, ni garantía de que funcione desde el primer día. Con nuestro servicio completo, te aseguras de que el expositor funciona, que el sistema está monitorizado y que tus reseñas empiezan a salir sin sorpresas."
    },
    {
      q: "“Lo miraré más adelante”",
      a: "Posponer significa perder ventaja. Mientras esperas, tu competencia aparece primero y tus clientes comparan por estrellas, no por calidad real. Empezar hoy te permite ganar confianza y captar más clientes desde el primer día."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle>Si dudas en implantarlo, es por una de estas razones</SectionTitle>
        <SectionSubtitle>Antes de decidir, todos tenemos las mismas dudas. Algunas son reales, otras simples frenos mentales. Aquí las verás claras para poder decidir hoy</SectionSubtitle>
        <div className="space-y-4 mt-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-600 shrink-0"/> : <ChevronDown className="text-gray-400 shrink-0"/>}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 bg-gray-50/50 leading-relaxed border-t border-gray-100 pt-4">
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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu negocio ya hace un buen trabajo. Ahora toca que también se vea en Google
            </h2>
            <p className="text-xl text-gray-600 mb-8">
            No necesitas más teorías ni más vueltas. Si tus clientes salen contentos, ya tienes lo más difícil hecho. Ahora solo falta algo: ponerles fácil que lo digan en Google. 
            Cada día que pasa sin hacerlo es un día más de ventaja para tu competencia. Aquí tienes un sistema sencillo, real y acompañado para empezar ya, sin complicarte y sin depender de nadie técnico.
            </p>

            {/* Bloque de refuerzo */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-semibold text-brand-700 bg-brand-50 p-6 rounded-xl inline-flex">
                <span className="flex items-center gap-2"><CheckCircle size={16}/> Servicio llave en mano</span>
                <span className="flex items-center gap-2"><CheckCircle size={16}/> Sin cuotas</span>
                <span className="flex items-center gap-2"><CheckCircle size={16}/> Sin mantenimiento</span>
                <span className="flex items-center gap-2"><CheckCircle size={16}/> Con formación y acompañamiento</span>
                <span className="flex items-center gap-2"><CheckCircle size={16}/> Con protección de tu reputación</span>
            </div>

            <h3 className="text-2xl font-bold text-brand-900 mb-4">¿Lo vemos en tu caso ahora mismo?</h3>
            <p className="text-gray-600 mb-8">
                Escríbenos por WhatsApp y en unos minutos te decimos qué opción encaja mejor con tu negocio: expositor solo o pack completo.
            </p>
            <WhatsappButton />
            <div className="mt-4 flex flex-col items-center gap-2">
                 <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500" defaultChecked />
                    He leído y acepto la Política de privacidad
                 </label>
                 <p className="text-xs text-gray-400">Valencia y alrededores · Atención directa · Respuesta rápida · Sin compromiso</p>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GoogleBoost. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-600">Política de Privacidad</a>
          </div>
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
        Ver mi caso por WhatsApp
      </a>
    </div>
  );
};