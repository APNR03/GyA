import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { MapPin, Phone } from "lucide-react";

const queryClient = new QueryClient();

const desserts = [
  { name: "Picarones", image: "https://www.peru.travel/Contenido/General/Imagen/es/301/1.1/picarones.jpg" },
  { name: "Mazamorra Morada", image: "https://cdn0.recetasgratis.net/es/posts/1/9/6/mazamorra_morada_facil_16691_orig.jpg" },
  { name: "Arroz con leche", image: "https://www.bekiacocina.com/images/cocina/0000/96-h.jpg" },
  { name: "Leche Asada", image: "https://buenazo.cronosmedia.glr.pe/original/2023/03/01/63ffd9dbdbd65011a7281b73.jpg" },
  { name: "Papa Rellena", image: "https://peru.info/archivos/publicacion/145-imagen-1951391982020.jpg" }
];

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans dark overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-bold text-primary">G&A</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#postres" className="text-foreground/80 hover:text-primary transition-colors">Postres</a>
            <a href="#ubicacion" className="text-foreground/80 hover:text-primary transition-colors">Ubicacion</a>
            <a href="#delivery" className="text-foreground/80 hover:text-primary transition-colors">Delivery</a>
          </div>
          <a href="#delivery" className="md:hidden text-primary border border-primary/30 px-4 py-2 rounded-full text-sm">Pedir</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto z-10 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight">
            Picarones <span className="text-primary italic">G&A</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            El sabor autentico de las noches peruanas. Dulces tradicionales, preparados con amor y servidos con calidez.
          </p>
        </div>
      </header>

      {/* Postres */}
      <section id="postres" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Postres</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="w-full overflow-hidden flex relative py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
          <div className="flex gap-8 w-max animate-scroll">
            {[...desserts, ...desserts].map((dessert, i) => (
              <div key={i} className="group relative flex-none w-64 md:w-80 rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={dessert.image} alt={dessert.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white">{dessert.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section id="ubicacion" className="py-24 px-6 bg-card/50 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Ubicacion</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl font-serif text-primary/90 italic mb-2">Nos encontramos en la Plazuela Victor Raul Haya de la Torre!</p>
            <p className="text-foreground/60 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Presiona el mapa para la ubicacion
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 group relative h-[400px] md:h-[500px]">
            <a href="https://maps.app.goo.gl/yrLfYVpbVTdoh1qd8" target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
              <div className="absolute inset-0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Abrir en Google Maps
                </div>
              </div>
            </a>
            <iframe src="https://maps.google.com/maps?q=-11.1059078,-77.5998269&z=18&output=embed" className="w-full h-full border-0" allowFullScreen loading="lazy" title="Mapa de Ubicacion" />
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">Contactanos!</h2>
          <p className="text-xl text-foreground/80 mb-12 font-light">Haz tu pedido o consultanos. Estamos para endulzar tu noche.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full shadow-lg">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-2xl font-mono tracking-wider font-semibold text-white">952341731</span>
            </div>
            <a href="https://wa.me/51952341731" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 font-medium text-lg">
              <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
              Escribenos
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6 text-center text-foreground/40 text-sm">
        <p>© {new Date().getFullYear()} Picarones G&A. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
