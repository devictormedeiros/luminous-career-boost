import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check,
  Sparkles,
  Instagram,
  Mail,
  ShieldCheck,
  Clock,
  Flame,
  Star,
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
} from "lucide-react";
import heroImg from "@/assets/nivalda-hero.jpg";

const HOTMART_URL = "https://pay.hotmart.com/SEUCODIGO";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nivalda Soares — Mentoria de Estética | Agenda cheia e autoridade" },
      {
        name: "description",
        content:
          "Mentoria da Nivalda Soares para esteticistas que querem sair do amadorismo, encher a agenda, cobrar o que valem e virar autoridade. Vagas limitadas.",
      },
      { property: "og:title", content: "Nivalda Soares — Mentoria de Estética" },
      { property: "og:description", content: "Do amadorismo à autoridade: agenda cheia, ticket alto, clientes fiéis." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nivalda Soares",
          jobTitle: "Esteticista e Mentora",
          url: "/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Mentoria de Estética Nivalda Soares",
          description: "Mentoria completa para esteticistas escalarem faturamento e autoridade.",
          provider: { "@type": "Person", name: "Nivalda Soares" },
        }),
      },
    ],
  }),
  component: LandingPage,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className={`btn-cta ${className}`}>
      {children} <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function LandingPage() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#mentoria", label: "Mentoria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-black tracking-tight">
            Nivalda <span className="text-pink">Soares</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-pink transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm !py-2.5 !px-5">
              Quero minha vaga
            </a>
          </div>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background px-5 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium">
                {n.label}
              </a>
            ))}
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm">
              Quero minha vaga
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="blob bg-pink w-[520px] h-[520px] -top-32 -left-40" />
        <div className="blob bg-champagne w-[400px] h-[400px] top-40 -right-24" />
        <div className="mx-auto max-w-7xl px-5 relative grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-soft text-pink-hot px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Mentoria para esteticistas
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-black leading-[0.95]">
              De <span className="italic text-pink">invisível</span> a{" "}
              <span className="italic text-pink-hot">desejada</span>: a esteticista que a cidade quer marcar.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              O método que já transformou centenas de esteticistas em referência: agenda cheia,
              ticket alto e clientes que voltam sempre — sem depender de indicação nem de sorte.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA>Quero minha vaga agora</CTA>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#FF2D78", "#E91E63", "#F8B4C8", "#C9A84C"].map((c) => (
                    <div key={c} className="w-9 h-9 rounded-full border-2 border-background" style={{ background: c }} />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">+800 alunas formadas</div>
                  <div className="flex items-center gap-1 text-champagne">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="text-muted-foreground ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink to-champagne rounded-[2rem] rotate-3 opacity-40 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImg}
                alt="Nivalda Soares, esteticista e mentora, em seu studio de estética"
                width={1024}
                height={1280}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl rotate-[-4deg] hidden md:block">
              <div className="text-3xl font-display font-black text-pink">+R$ 20k</div>
              <div className="text-xs text-muted-foreground">faturamento médio das alunas</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-ink text-white rounded-2xl px-4 py-3 shadow-xl rotate-[6deg] hidden md:flex items-center gap-2">
              <Flame className="h-4 w-4 text-pink" />
              <span className="text-sm font-semibold">Turma abrindo</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="relative py-20 bg-pink-cream">
        <div className="mx-auto max-w-5xl px-5">
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-black">
              Você se <span className="text-pink italic">reconhece</span> nisso?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Se pelo menos 3 destas frases são a sua realidade hoje, essa mentoria foi feita para você.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {[
              "Sua agenda tem buracos e você depende de indicação para sobreviver.",
              "Você cobra menos do que merece com medo de perder cliente.",
              "Sabe fazer o procedimento, mas trava na hora de vender.",
              "Vê concorrente pior tecnicamente lotada — e não entende o motivo.",
              "Posta no Instagram e ninguém engaja, muito menos agenda.",
              "Trabalha muito, ganha pouco e sente que está estagnada.",
            ].map((t, i) => (
              <div
                key={i}
                className="reveal bg-card border border-border rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-pink-soft text-pink-hot grid place-items-center font-bold">
                  {i + 1}
                </div>
                <p className="text-foreground/90">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24">
        <div className="blob bg-pink-soft w-[500px] h-[500px] top-20 -right-40" />
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-5 gap-12 items-center relative">
          <div className="reveal md:col-span-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src={heroImg}
                alt="Retrato de Nivalda Soares"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="reveal md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Quem é Nivalda</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              A mentora que já ajudou <span className="text-pink">+800 esteticistas</span> a virarem autoridade.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Sou Nivalda Soares. Comecei do zero, sem indicação, sem estrutura, cobrando pouco.
              Em poucos anos construí um studio disputado, formei uma comunidade e desenvolvi
              o método que hoje é a base da minha mentoria — o mesmo que quero entregar pra você.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "10+", l: "anos de estética" },
                { n: "800+", l: "alunas formadas" },
                { n: "R$ 20k+", l: "faturamento médio" },
              ].map((s) => (
                <div key={s.l} className="bg-pink-cream rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl font-black text-pink-hot">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENTORIA / MÓDULOS */}
      <section id="mentoria" className="relative py-24 bg-ink text-white overflow-hidden">
        <div className="blob bg-pink w-[500px] h-[500px] -top-32 left-1/3 opacity-30" />
        <div className="mx-auto max-w-6xl px-5 relative">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">O que você vai aprender</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Um método completo. <span className="text-pink italic">Do zero à autoridade.</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              6 pilares que resolvem, na ordem certa, tudo o que te impede de crescer hoje.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { t: "Posicionamento", d: "Encontre seu nicho, sua identidade e pare de brigar por preço." },
              { t: "Precificação", d: "Aprenda a cobrar o que vale — sem culpa, sem medo de perder cliente." },
              { t: "Instagram que vende", d: "Conteúdo, reels e stories que realmente enchem a agenda." },
              { t: "Vendas & Fechamento", d: "Scripts prontos para converter avaliação em pacote fechado." },
              { t: "Fidelização", d: "Transforme cliente única em cliente recorrente por meses." },
              { t: "Escala & Gestão", d: "Organize agenda, financeiro e escale sem sair da cadeira." },
            ].map((m, i) => (
              <div
                key={m.t}
                className="reveal group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-pink/60 hover:-translate-y-1 transition-all"
              >
                <div className="text-pink font-display text-5xl font-black opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold">{m.t}</h3>
                <p className="mt-2 text-white/70">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="relative py-24 bg-pink-cream">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Não é sobre conteúdo. <br />
              É sobre <span className="text-pink italic">resultado</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Você não sai da mentoria com uma pasta cheia de PDFs. Você sai com agenda
              organizada, novos clientes e um faturamento que finalmente combina com o
              seu esforço.
            </p>
            <CTA className="mt-8">Começar minha transformação</CTA>
          </div>
          <div className="reveal grid gap-4">
            {[
              "Agenda cheia em até 60 dias, sem depender de indicação.",
              "Ticket médio multiplicado por 2 a 5 vezes.",
              "Instagram que atrai o cliente certo — o que paga bem.",
              "Rotina organizada: menos ansiedade, mais controle.",
              "Autoridade real na sua cidade e no digital.",
              "Comunidade viva de esteticistas que crescem junto com você.",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-sm">
                <div className="shrink-0 w-8 h-8 rounded-full bg-pink text-white grid place-items-center">
                  <Check className="h-4 w-4" />
                </div>
                <p className="font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Quem já viveu</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Resultados <span className="text-pink italic">reais</span> de alunas reais.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Camila R.",
                c: "Esteticista, Curitiba",
                t: "Em 3 meses dobrei o ticket médio e minha agenda finalmente parou de ter buraco. A Nivalda mudou minha forma de ver o negócio.",
              },
              {
                n: "Aline M.",
                c: "Studio próprio, SP",
                t: "Eu vivia comparando com concorrentes. Depois da mentoria parei de brigar por preço e virei referência no meu bairro.",
              },
              {
                n: "Priscila F.",
                c: "Esteticista, BH",
                t: "Fechei 12 pacotes no primeiro mês aplicando o script de vendas. É outro nível de segurança pra atender.",
              },
            ].map((d, i) => (
              <div
                key={d.n}
                className="reveal bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
                style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -1 : 1}deg)` }}
              >
                <div className="flex text-champagne mb-3">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/90 italic">"{d.t}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink to-pink-hot" />
                  <div>
                    <div className="font-bold">{d.n}</div>
                    <div className="text-xs text-muted-foreground">{d.c}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA / PLANOS */}
      <section id="planos" className="relative py-24 bg-gradient-to-b from-pink-cream to-background">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Escolha seu plano</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Duas formas de <span className="text-pink italic">virar autoridade</span>.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano 1 */}
            <div className="reveal bg-card border border-border rounded-3xl p-8 shadow-lg flex flex-col">
              <h3 className="font-display text-2xl font-black">Mentoria Essencial</h3>
              <p className="text-muted-foreground text-sm mt-1">Para quem quer começar a virar o jogo agora.</p>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground">12x de</div>
                <div className="font-display text-5xl font-black">R$ 399</div>
                <div className="text-sm text-muted-foreground">ou R$ 1.997 à vista</div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Acesso completo aos 6 módulos",
                  "Comunidade de alunas no WhatsApp",
                  "Templates de posts e stories",
                  "Scripts de vendas prontos",
                  "6 meses de acesso",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-pink shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 w-full">
                Garantir Essencial
              </a>
            </div>

            {/* Plano 2 - Destaque */}
            <div className="reveal relative bg-ink text-white rounded-3xl p-8 shadow-2xl md:scale-105 border-2 border-pink flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Mais escolhido
              </div>
              <h3 className="font-display text-2xl font-black">Mentoria VIP</h3>
              <p className="text-white/70 text-sm mt-1">Acompanhamento próximo com a Nivalda.</p>
              <div className="mt-6">
                <div className="text-sm text-white/60">12x de</div>
                <div className="font-display text-5xl font-black text-pink">R$ 397</div>
                <div className="text-sm text-white/60">ou R$ 3.997 à vista</div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Tudo do plano Essencial",
                  "Encontros ao vivo semanais com Nivalda",
                  "Análise personalizada do seu Instagram",
                  "Mentoria de precificação 1:1",
                  "Bônus: Kit de contratos e formulários",
                  "12 meses de acesso + grupo VIP",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-pink shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 w-full">
                Quero ser VIP
              </a>
            </div>
          </div>

          {/* Garantia */}
          <div className="reveal mt-16 max-w-2xl mx-auto bg-card border-2 border-dashed border-pink/50 rounded-3xl p-6 flex items-center gap-5">
            <div className="shrink-0 w-16 h-16 rounded-full bg-pink-soft grid place-items-center">
              <ShieldCheck className="h-8 w-8 text-pink-hot" />
            </div>
            <div>
              <div className="font-display text-xl font-black">Garantia incondicional de 7 dias</div>
              <p className="text-muted-foreground text-sm">
                Entre, veja tudo por dentro. Se não sentir que é pra você, devolvemos 100% do valor.
                Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="relative py-16 bg-pink text-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 text-center relative">
          <Clock className="h-10 w-10 mx-auto opacity-90" />
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-black">
            Últimas vagas desta turma.
          </h3>
          <p className="mt-2 text-white/90 max-w-xl mx-auto">
            Para garantir acompanhamento próximo, cada turma tem número limitado de alunas.
            Ao fechar, a próxima só abre em meses — e com valor reajustado.
          </p>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 items-center gap-2 bg-white text-pink-hot font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform"
          >
            Garantir meu lugar agora <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="reveal text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-pink">Perguntas frequentes</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Tirando suas <span className="text-pink italic">dúvidas</span>.
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {[
              {
                q: "Preciso já ter experiência em estética?",
                a: "Não. A mentoria atende desde quem está começando até profissionais que já atendem e querem escalar. O método se adapta ao seu momento.",
              },
              {
                q: "Quanto tempo por semana preciso dedicar?",
                a: "De 2 a 4 horas por semana já são suficientes para aplicar e ver resultado. As aulas são objetivas e ficam gravadas.",
              },
              {
                q: "Como funciona o pagamento?",
                a: "O pagamento é 100% seguro pela Hotmart. Pode ser em cartão em até 12x, Pix ou boleto.",
              },
              {
                q: "Tem suporte direto com a Nivalda?",
                a: "Sim. No plano VIP você tem encontros semanais ao vivo e grupo próximo. No Essencial, tem comunidade e tira-dúvidas.",
              },
              {
                q: "E se eu não gostar?",
                a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do valor.",
              },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 bg-gradient-to-br from-pink-hot via-pink to-pink-hot text-white overflow-hidden">
        <div className="blob bg-champagne w-[400px] h-[400px] -top-20 -left-20" />
        <div className="blob bg-white w-[400px] h-[400px] -bottom-20 -right-20 opacity-20" />
        <div className="mx-auto max-w-4xl px-5 text-center relative">
          <h2 className="reveal font-display text-4xl md:text-6xl font-black leading-[0.95]">
            A sua próxima versão profissional <span className="italic">já existe</span>.
            <br />
            Falta só você dar o passo.
          </h2>
          <p className="reveal mt-6 text-white/90 text-lg max-w-2xl mx-auto">
            Você pode continuar do mesmo jeito daqui a 6 meses — ou pode entrar agora
            e olhar pra trás em pouco tempo sem reconhecer sua própria carreira.
          </p>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 items-center gap-2 bg-white text-pink-hot font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Quero entrar para a mentoria <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-white/80 text-sm">7 dias de garantia · Vagas limitadas</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/80 py-14">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl font-black text-white">
              Nivalda <span className="text-pink">Soares</span>
            </div>
            <p className="mt-3 text-sm text-white/60 max-w-xs">
              Mentoria de estética que transforma profissionais em autoridade.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-pink mb-3">Contato</div>
            <a href="mailto:contato@nivaldasoares.com.br" className="flex items-center gap-2 text-sm hover:text-pink">
              <Mail className="h-4 w-4" /> contato@nivaldasoares.com.br
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-sm hover:text-pink"
            >
              <Instagram className="h-4 w-4" /> @nivaldasoares
            </a>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-pink mb-3">Legal</div>
            <a href="#" className="block text-sm hover:text-pink">Política de privacidade</a>
            <a href="#" className="block text-sm hover:text-pink mt-2">Termos de uso</a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Nivalda Soares. Todos os direitos reservados.</div>
          <div>Feito com carinho para transformar carreiras.</div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal bg-card border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-pink-cream/60 transition-colors"
      >
        <span>{q}</span>
        {open ? <Minus className="h-5 w-5 text-pink shrink-0" /> : <Plus className="h-5 w-5 text-pink shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground">{a}</div>}
    </div>
  );
}
