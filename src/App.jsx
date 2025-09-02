import React from "react";
import { motion } from "framer-motion";
import { Play, Info, ExternalLink, Music2, Tv2, Users, Camera, ArrowRight, Github } from "lucide-react";

// Single-file React fan site for MTV's Downtown (1999)
// - Uses TailwindCSS for styling
// - No backend required; just static data below
// - Feel free to replace image URLs with your own assets
// - You can deploy this as a static page (Vite, Next.js, etc.)

const characters = [
  {
    name: "Alex",
    role: "Protagonist / Copy Shop Clerk",
    blurb:
      "Um cara tímido e observador tentando entender a vida adulta no East Village de NY.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chaka",
    role: "Irmã mais nova de Alex",
    blurb:
      "Espírito livre, sarcástica e sempre pronta pra uma boa história de noite na cidade.",
    img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Goat",
    role: "Amigo desbocado",
    blurb:
      "Energia caótica, humor ácido e teorias improváveis. Ícone cult instantâneo.",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mecca",
    role: "Amiga confidente",
    blurb:
      "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
];

const episodes = [
  {
    id: 1,
    title: "Before and After",
    synopsis:
      "Um recorte de relacionamentos e expectativas que rendeu à série uma indicação ao Emmy.",
    links: [
      { label: "YouTube (fan upload)", url: "https://www.youtube.com/results?search_query=mtv+downtown+before+and+after" },
    ],
  },
  {
    id: 2,
    title: "Graffiti",
    synopsis:
      "A crew encara arte de rua, propriedade e expressão no coração de Manhattan.",
    links: [
      { label: "Clipes e extras", url: "https://www.youtube.com/results?search_query=mtv+downtown+graffiti" },
    ],
  },
  {
    id: 3,
    title: "The Con",
    synopsis:
      "Golpes pequenos, grandes lições – e um bocado de ironia urbana.",
    links: [
      { label: "Buscar episódio", url: "https://www.youtube.com/results?search_query=mtv+downtown+the+con" },
    ],
  },
];

const soundtracks = [
  {
    id: "ost1",
    title: "Vibes & Lo-Fi da série",
    note: "Playlists feitas por fãs com beats e faixas inspiradas no clima da Downtown.",
    url: "https://www.youtube.com/results?search_query=mtv+downtown+soundtrack",
  },
];

const LinkChip = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:shadow-sm transition"
  >
    <ExternalLink className="h-4 w-4" /> {children}
  </a>
);

const Section = ({ id, icon: Icon, title, subtitle, children }) => (
  <section id={id} className="py-16">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="max-w-3xl text-sm md:text-base opacity-80 mb-8">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
    <nav className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-8 w-8 rounded bg-white/90" />
            <span className="absolute inset-0 -rotate-6 opacity-20">MTV</span>
          </div>
          <span className="font-bold tracking-wider text-sm">DOWNTOWN • FAN</span>
        </a>
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a className="hover:opacity-80" href="#characters">Personagens</a>
          <a className="hover:opacity-80" href="#episodes">Episódios</a>
          <a className="hover:opacity-80" href="#gallery">Galeria</a>
          <a className="hover:opacity-80" href="#soundtrack">Trilha</a>
          <a className="hover:opacity-80" href="#about">Sobre</a>
        </div>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
      <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full blur-3xl bg-white" />
      <div className="absolute top-1/2 -left-10 h-72 w-72 rounded-full blur-3xl bg-white" />
    </div>
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
      >
        MTV <span className="inline-block -skew-x-6">Downtown</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 max-w-2xl text-base md:text-lg opacity-85"
      >
        Fan site não-oficial celebrando a série cult de 1999 — diálogos reais, humor ácido e a estética urbana do East Village.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-3"
      >
        <a
          href="#episodes"
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold hover:shadow-md transition"
        >
          <Play className="h-4 w-4" /> Ver episódios
        </a>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
        >
          <Info className="h-4 w-4" /> Sobre a série
        </a>
      </motion.div>
    </div>
  </section>
);

const CharacterCard = ({ c }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
    className="group rounded-2xl border overflow-hidden bg-white/5 backdrop-blur hover:bg-white/10 transition"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img src={c.img} alt={c.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{c.name}</h3>
      <p className="text-xs uppercase tracking-wide opacity-70 mb-2">{c.role}</p>
      <p className="text-sm opacity-90">{c.blurb}</p>
    </div>
  </motion.div>
);

const EpisodeItem = ({ ep }) => (
  <div className="rounded-xl border p-4 bg-white/5 hover:bg-white/10 transition">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="font-semibold">{ep.title}</h4>
        <p className="text-sm opacity-80 mt-1">{ep.synopsis}</p>
      </div>
      <span className="text-xs opacity-60">E{String(ep.id).padStart(2, "0")}</span>
    </div>
    <div className="flex flex-wrap gap-2 mt-3">
      {ep.links?.map((l, i) => (
        <LinkChip key={i} href={l.url}>{l.label}</LinkChip>
      ))}
    </div>
  </div>
);

const Gallery = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="relative overflow-hidden rounded-xl border group">
        <img
          src={`https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=${600 + i * 10}&auto=format&fit=crop`}
          alt={`Cenário urbano ${i}`}
          className="h-44 w-full object-cover group-hover:scale-105 transition"
        />
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-10 mt-20">
    <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs opacity-70">
        Fan site não-oficial. Imagens de exemplo via Unsplash. Substitua por artes e capturas próprias.
      </p>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-xs opacity-80 hover:opacity-100"
      >
        <Github className="h-4 w-4" /> Código-fonte
      </a>
    </div>
  </footer>
);

export default function DowntownSite() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white selection:bg-white selection:text-black">
      <Header />
      <Hero />

      <Section
        id="characters"
        icon={Users}
        title="Personagens"
        subtitle="Conheça a turma — um mosaico de vozes e personalidades que tornam Downtown uma cápsula urbana inesquecível."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {characters.map((c) => (
            <CharacterCard key={c.name} c={c} />
          ))}
        </div>
      </Section>

      <Section
        id="episodes"
        icon={Tv2}
        title="Episódios"
        subtitle="Guia de episódios (exemplo). Edite, complemente e adicione seus links favoritos."
      >
        <div className="grid gap-3">
          {episodes.map((ep) => (
            <EpisodeItem key={ep.id} ep={ep} />
          ))}
        </div>
      </Section>

      <Section
        id="gallery"
        icon={Camera}
        title="Galeria"
        subtitle="Capturas de tela, artes de fãs e imagens promocionais. Troque pelos seus próprios arquivos."
      >
        <Gallery />
      </Section>

      <Section
        id="soundtrack"
        icon={Music2}
        title="Trilha sonora"
        subtitle="Beats lo-fi e faixas alternativas que casam com o clima da série."
      >
        <div className="grid gap-3">
          {soundtracks.map((s) => (
            <div key={s.id} className="rounded-xl border p-4 bg-white/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm opacity-80 mt-1">{s.note}</p>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm rounded-full border px-3 py-1 hover:shadow-sm"
                >
                  <Play className="h-4 w-4" /> Ouvir
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" icon={Info} title="Sobre"
        subtitle="Criado por fãs para fãs. Este projeto é um template estático e personalizável; substitua textos, adicione episódios e coleções."
      >
        <div className="prose prose-invert max-w-none">
          <p>
            <strong>Downtown</strong> (MTV, 1999) é uma animação adulta com foco em diálogos naturais e situações cotidianas.
            Este site não utiliza conteúdo protegido por direitos autorais por padrão; quaisquer imagens/trechos que
            você inserir devem respeitar as leis de direitos autorais e o uso justo (fair use) do seu país.
          </p>
          <ul>
            <li>Customize os arrays <code>characters</code> e <code>episodes</code> para conteúdo completo.</li>
            <li>Troque as imagens Unsplash pelos seus próprios assets.</li>
            <li>Publique com Vite/Netlify, GitHub Pages ou Vercel.</li>
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 text-sm opacity-80">
            <ArrowRight className="h-4 w-4" />
            <span>Dica: crie uma página por episódio e uma rota /credits com fontes e links oficiais.</span>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}