import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Info, ExternalLink, Music2, Tv2, Users, Camera, ArrowRight, Github, X } from "lucide-react";

// Single-file React fan site for MTV's Downtown (1999)

const characters = [
  {
    name: "Alex",
    role: "Protagonist / Copy Shop Clerk",
    blurb: "Um cara tímido e observador tentando entender a vida adulta no East Village de NY.",
    img: "/images/alex.jpeg", 
  },
  {
    name: "Chaka",
    role: "Irmã mais nova de Alex",
    blurb: "Espírito livre, sarcástica e sempre pronta pra uma boa história de noite na cidade.",
    img: "images/chaka.jpg",
  },
  {
    name: "Goat",
    role: "Amigo desbocado",
    blurb: "Energia caótica, humor ácido e teorias improváveis. Ícone cult instantâneo.",
    img: "images/goat.webp",
  },
  {
    name: "Mecca",
    role: "Amiga confidente",
    blurb: "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "images/mecca.jpg",
  },
    {
    name: "Serena",
    role: "Interesse amoroso",
    blurb: "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "images/serena.jpeg",
  },
    {
    name: "Fruity",
    role: "galã afro-latino",
    blurb: "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "images/fruity.jpeg",
  },
    {
    name: "Jen",
    role: "melhor amigaAmiga confidente",
    blurb: "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "images/jen.jpeg",
  },
    {
    name: "Matt",
    role: "melhor amigo artístico de Fruity.",
    blurb: "Os pés no chão da turma, sempre com conselhos afiados e playlists perfeitas.",
    img: "images/matt.jpeg",
  },
];

const episodes = [
  {
    id: 1,
    title: "Before and After",
    synopsis: "Um recorte de relacionamentos e expectativas que rendeu à série uma indicação ao Emmy.",
    links: [
      { label: "YouTube (fan upload)", url: "https://www.youtube.com/watch?v=pEnXU_RXELM" },
    ],
  },
  {
    id: 2,
    title: "Graffiti",
    synopsis: "A crew encara arte de rua, propriedade e expressão no coração de Manhattan.",
    links: [
      { label: "Clipes e extras", url: "https://www.youtube.com/results?search_query=mtv+downtown+graffiti" },
    ],
  },
  {
    id: 3,
    title: "The Con",
    synopsis: "Golpes pequenos, grandes lições – e um bocado de ironia urbana.",
    links: [
      { label: "Buscar episódio", url: "https://www.youtube.com/results?search_query=mtv+downtown+the+con" },
    ],
  },
];

const soundtracks = [
  {
    id: "ost1",
    title: "Downtown inspered Songs",
    note: "Playlists feitas por fãs com beats e faixas inspiradas no clima da Downtown.",
    url: "https://open.spotify.com/playlist/5sOshXWx44BzpmViuofufv?si=fc0f110623654ff5",
  },
];

// Componente para Lightbox de Imagens
const ImageLightbox = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button 
        className="absolute top-6 right-6 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </button>
    </motion.div>
  );
};

// Componente Container com Efeito Stagger
const StaggeredContainer = ({ children, className }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Componente de Player de Áudio
// Componente de Player de Áudio com VOLUME AJUSTÁVEL
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Volume padrão 30% (mais baixo)
  const audioRef = React.useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Ajusta o volume
      
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Autoplay bloqueado:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]); // Agora depende do volume também

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="flex flex-col items-end gap-2">
        {/* Controle de Volume (aparece quando está tocando) */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/80 backdrop-blur rounded-full p-2"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </motion.div>
        )}

        {/* Botão Play/Pause */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-4 rounded-full shadow-lg transition ${
            isPlaying ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
          }`}
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          <Music2 className="h-6 w-6" />
        </motion.button>
      </div>
      
      {/* Áudio com fonte online */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        <source 
          src="music/MTV's Downtown ｜ Bricks & Bones.mp3" 
          type="audio/mpeg" 
        />
        Seu navegador não suporta áudio.
      </audio>

      {/* Indicador de que está tocando */}
      {isPlaying && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />
      )}
    </motion.div>
  );
};

// Componente de Toggle de Tema
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      aria-label="Alternar tema"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
};

// Componente de Menu Mobile
const MobileMenu = ({ isOpen, onClose }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md md:hidden z-50 p-6"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl"
      >
        <X className="h-6 w-6" />
      </button>
      
      <nav className="flex flex-col gap-6 mt-16 text-lg">
        {['characters', 'episodes', 'gallery', 'soundtrack', 'about'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-left hover:text-purple-400 transition capitalize"
          >
            {item === 'characters' ? 'Personagens' :
             item === 'episodes' ? 'Episódios' :
             item === 'gallery' ? 'Galeria' :
             item === 'soundtrack' ? 'Trilha Sonora' : 'Sobre'}
          </button>
        ))}
      </nav>
    </motion.div>
  );
};

// Componente de Partículas de Fundo
const ParticlesBackground = () => (
  <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full"
        initial={{
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        }}
        animate={{
          y: [null, -20, 20, 0],
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const LinkChip = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:shadow-sm transition"
  >
    <ExternalLink className="h-4 w-4" /> {children}
  </motion.a>
);

const Section = ({ id, icon: Icon, title, subtitle, children }) => (
  <section id={id} className="py-16">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-3"
      >
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-sm md:text-base opacity-80 mb-8"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-3">
            <motion.a 
              href="#home" 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/logomtv.png" 
                alt="MTV Downtown Logo" 
                className="h-10 w-auto"
              />
            </motion.a>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <div className="hidden md:flex items-center gap-4 text-sm">
                {['characters', 'episodes', 'gallery', 'soundtrack', 'about'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="hover:opacity-80 transition capitalize"
                  >
                    {item === 'characters' ? 'Personagens' :
                     item === 'episodes' ? 'Episódios' :
                     item === 'gallery' ? 'Galeria' :
                     item === 'soundtrack' ? 'Trilha' : 'Sobre'}
                  </button>
                ))}
              </div>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
      <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full blur-3xl bg-white" />
      <div className="absolute top-1/2 -left-10 h-72 w-72 rounded-full blur-3xl bg-white" />
    </div>
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <img 
          src="/images/logo.webp" 
          alt="MTV Downtown" 
          className="h-24 md:h-32 lg:h-40 w-auto"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 max-w-2xl text-base md:text-lg opacity-85"
      >
        Fan site não-oficial para a série cult de 1999 — feito com objetivo de catalogar e ajudar quem queira ir atrás do show.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-3"
      >
        <motion.a
          href="#episodes"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold hover:shadow-md transition"
        >
          <Play className="h-4 w-4" /> Ver episódios
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
        >
          <Info className="h-4 w-4" /> Sobre a série
        </motion.a>
      </motion.div>
    </div>
  </section>
);

const CharacterCard = ({ c, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group rounded-2xl border overflow-hidden bg-white/5 backdrop-blur hover:bg-white/10 transition cursor-pointer"
    whileHover={{ y: -5 }}
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
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-xl border p-4 bg-white/5 hover:bg-white/10 transition"
    whileHover={{ scale: 1.02 }}
  >
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
  </motion.div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array com as SUAS imagens
  const galleryImages = [
    "/images/gallery/foto1.webp",
    "/images/gallery/foto2.webp",
    "/images/gallery/foto3.png",
    "/images/gallery/foto4.jpg",
    "/images/gallery/foto5.jpg",
    "/images/gallery/foto6.jpg"
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl border group cursor-pointer"
            onClick={() => setSelectedImage(imageSrc)}
          >
            <img
              src={imageSrc}
              alt={`Cena de Downtown ${index + 1}`}
              className="h-44 w-full object-cover group-hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
      <ImageLightbox
        src={selectedImage}
        alt="Imagem ampliada da galeria"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-white/10 py-10 mt-20"
  >
    <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs opacity-70">
        Fan site não-oficial. Imagens de exemplo via Unsplash. Substitua por artes e capturas próprias.
      </p>
      <motion.a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-2 text-xs opacity-80 hover:opacity-100"
      >
        <Github className="h-4 w-4" /> Código-fonte
      </motion.a>
    </div>
  </motion.footer>
);

export default function DowntownSite() {
  return (
    <div className="min-h-screen text-white selection:bg-white selection:text-black relative">
      {/* Imagem de fundo para todo o site */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/images/fundo.png" 
          alt="Fundo urbano" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Partículas de fundo */}
      <ParticlesBackground />
      
      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Header />
        <Hero />

        <Section
          id="characters"
          icon={Users}
          title="Personagens"
          subtitle="Conheça a Crew — uma mistura de personalidades que tornam Downtown um marco dos anos y2k."
        >
          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {characters.map((c, index) => (
              <CharacterCard key={c.name} c={c} index={index} />
            ))}
          </StaggeredContainer>
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
          <div className="youtube">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLT-AXabZA7ndT3mVfPKsgo-OUh9kIuGuE" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="grid gap-3">
            {soundtracks.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border p-4 bg-white/5 hover:bg-white/10 transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm opacity-80 mt-1">{s.note}</p>
                  </div>
                  <motion.a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-sm rounded-full border px-3 py-1 hover:shadow-sm"
                  >
                    <Play className="h-4 w-4" /> Ouvir
                  </motion.a>
                </div>
              </motion.div>
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

      {/* Player de áudio */}
      <AudioPlayer />
    </div>
  );
}