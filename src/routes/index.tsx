import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  Compass,
  PenTool,
  Rocket,
  Mail,
  Linkedin,
  Instagram,
  Heading4,
} from "lucide-react";
import pizza from "@/assets/pizza.jpg";
import restaurante from "@/assets/restaurante.jpg";
import FotoHero from "@/assets/FotoHero.jpg";
import blog from "@/assets/blog.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import landing from "@/assets/landing.jpg";


import { MessageCircle, Phone } from "lucide-react";

export function WhatsAppButton() {
  // Seu número com código do país (+55) e DDD, sem traços ou espaços
  const phoneNumber = "5521984095221"; 
  
  // Mensagem inicial opcional que já vem preenchida
  const message = encodeURIComponent("Olá! Gostaria de mais informações.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      
        <MessageCircle className="w-8 h-8" />
        <Phone className="w-4 h-4 absolute fill-white text-white -mt-0.5 -ml-0.5" />
    </a>
  );
}

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Processo", href: "#processo" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Contato", href: "#contato" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Work />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="px-3 h-7 rounded-md bg-primary text-primary-foreground grid place-items-center text-sm font-medium">
            Fábio Lacerda
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5"
        >
          <a href="#contato">Agende uma chamada</a>
        </Button>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 80% 20%, oklch(0.65 0.13 140 / 0.18), transparent 60%), radial-gradient(800px 400px at 10% 80%, oklch(0.5 0.1 250 / 0.25), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> Disponível para novos projetos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl text-white font-semibold">
            Desenvolvo sites e sistemas para impulsionar empresas e autônomos de forma simples e intuitiva.
          </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6"
            >
              <a href="#contato">
                Agende uma chamada <ArrowRight className="ml-1" />
              </a>
            </Button>
            <a
              href="#trabalhos"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              Ver trabalhos
            </a>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-primary/90" />
            <img
              src={FotoHero}
              alt="Retrato do designer"
              className="absolute inset-2 rounded-full object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)] grayscale-[15%]"
            />
            {/* doodles */}
            <Sparkles className="absolute -top-4 -right-2 size-6 text-primary" />
            <svg
              className="absolute -left-10 top-10 size-16 text-primary/70"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path d="M2 32 C 16 6, 48 6, 62 32" stroke="currentColor" strokeWidth="2" />
            </svg>
            <svg
              className="absolute -bottom-6 right-6 size-10 text-foreground/40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Problem (clarity) ---------------- */
function Problem() {
  const items = [
    "Não representam com clareza a sua empresa.",
    "São criados copiando modelos em vez de uma estratégia clara.",
    "Não convertem visitantes em clientes.",
    "Não conseguem atrair leads de alta qualidade.",
    "Não te posicionam como referência no mercado.",
  ];
  return (
    <section className="bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest">O problema</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              A maioria dos sites gera mais confusão do que clareza.
            </h2>
            <p className="mt-6 text-muted-foreground/90 text-card-foreground/70 max-w-md">
              Eu prometo, não precisa ser assim. Com a abordagem certa, seu site se torna seu melhor
              vendedor — trabalhando por você 24/7.
            </p>
          </div>
          <ul className="space-y-3">
            {items.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-background/0 px-5 py-4"
                style={{ background: "oklch(0.96 0.005 95)" }}
              >
                <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-foreground/10 text-foreground">
                  <X className="size-3.5" />
                </span>
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const points = [
    "Sites que facilitam a atração de clientes.",
    "Processo simplificado para colocar seu site no ar a tempo",
    "Suporte pós-lançamento para garantir que seu site funcione para você",
  ];
  return (
    <section id="processo" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl bg-surface p-10 border border-border">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">O processo</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Um processo simples e agradável que traz resultados.
          </h2>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/90">
                <Check className="size-5 text-primary mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
            <div className="mt-8">
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-5">
              <a href="#contato">Agende uma chamada</a>
              </Button>
            </div>
        </div>
        <div className="rounded-3xl bg-surface p-10 border border-border">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Não espere para ter um site que pode{" "}
            <span className="italic text-primary">transformar</span> o seu negócio.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
              <a href="#contato">
                Agende uma chamada <ArrowRight className="ml-1" />
              </a>
            </Button>
          </div>  
        </div>
        
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */
function Work() {
  return (
    <section id="trabalhos" className="bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Trabalhos selecionados
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Crie um site que cause uma impressão duradoura.
            </h2>
          </div>
          <p className="max-w-md text-card-foreground/70">
            Você entende a importância das palavras no seu site, mas quer um processo tranquilo de
            quem realmente sabe como ele se traduz em clientes.
          </p>
        </div>

        <div className="mt-12 flex justify-center bg-surface rounded-lg p-8">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <img
                    src={pizza}
                    alt="Pizza"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <img
                    src={restaurante}
                    alt=""
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <img
                    src={blog}
                    alt="blog"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <img
                    src={ecommerce}
                    alt="ecommerce"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <img
                    src={landing}
                    alt="landing"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contato" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-surface border border-border p-10 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Meu nome é Fábio Lacerda. Construo sites, landing pages, e-commerces e sistemas para empresas e autônomos que estão perdendo oportunidades por não estarem na era digital atual.
              <br />
              <br />fabiocorpti@gmail.com
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#trabalhos"
                className="self-center text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                Ver trabalhos
              </a>
            </div>
          </div>
          <div className="relative justify-self-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-primary/90" />
              <img
                src={FotoHero}
                alt="Foto do designer"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-center text-xs text-muted-foreground">
          Cnpj: 42.300.136/0001-67
        </div>
        
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <a href="#" aria-label="Email" className="hover:text-foreground">
            <Mail className="size-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="size-4" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-foreground">
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
      
      <div className="text-center text-xs text-muted-foreground pb-8">
        © 2026 Fábio Lacerda — Feito com cuidado
      </div>
    </footer>
  );
}
