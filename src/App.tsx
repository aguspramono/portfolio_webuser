import ParticleField from "./components/ParticleField";

const skills = [
  "React.js",
  "PHP",
  "CodeIgniter",
  "VB.Net",
  "React Native",
  "MySQL",
];

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-abyss text-white">
      <ParticleField />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,140,255,0.25),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-midnight via-abyss to-midnight opacity-95" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cobalt to-skyglow shadow-neon" />
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-skyglow/70">Portfolio</p>
            <h1 className="text-lg font-semibold">Programmer</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a className="transition hover:text-skyglow" href="#about">
            Tentang
          </a>
          <a className="transition hover:text-skyglow" href="#skills">
            Keahlian
          </a>
          <a className="transition hover:text-skyglow" href="#contact">
            Kontak
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20">
        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.5em] text-skyglow/70">
              Creative Developer
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Saya membangun pengalaman digital dengan
              <span className="gradient-text"> animasi elegan</span> dan fokus pada performa.
            </h2>
            <p className="text-base text-slate-200/80 md:text-lg">
              Web portfolio gelap dengan gradasi biru yang kreatif, penuh detail visual, dan sentuhan
              motion design untuk menghadirkan kesan modern, profesional, dan dinamis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="shimmer-border">
                <span className="block rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white shadow-neon">
                  Lihat Proyek
                </span>
              </button>
              <button className="rounded-full border border-skyglow/40 px-6 py-3 text-sm font-semibold text-skyglow transition hover:border-skyglow hover:text-white">
                Hubungi Saya
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full border border-skyglow/30 opacity-60 animate-orbitSlow" />
            <div className="absolute h-48 w-48 rounded-full border border-skyglow/40 opacity-80 animate-orbitFast" />
            <div className="glass-panel relative flex h-56 w-56 flex-col items-center justify-center gap-4 rounded-3xl p-6 shadow-neon animate-float">
              <p className="text-xs uppercase tracking-[0.4em] text-skyglow/70">Focus</p>
              <p className="text-3xl font-semibold">Fullstack</p>
              <p className="text-center text-sm text-slate-200/70">
                UI/UX, backend, dan mobile untuk pengalaman end-to-end.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Tentang Saya</h3>
            <p className="text-slate-200/80">
              Saya adalah programmer yang fokus menghadirkan solusi digital modern dengan tampilan
              elegan dan animasi kreatif. Saya terbiasa membangun aplikasi web dan mobile yang cepat,
              rapi, dan mudah dikembangkan.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-skyglow/30 bg-skyglow/10 px-4 py-2 text-sm text-slate-100 shadow-neon"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="text-2xl font-semibold">Spesialisasi</h3>
            <p className="mt-3 text-slate-200/80">
              Menggabungkan React dengan backend PHP/CodeIgniter, mobile React Native, serta database
              MySQL untuk sistem yang stabil dan mudah dikembangkan. Fokus pada kualitas UI dan
              optimasi performa.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200/70">
              <li>• UI modern dengan animasi berbasis motion design.</li>
              <li>• Arsitektur aplikasi yang scalable dan mudah maintenance.</li>
              <li>• Integrasi API, database, dan automasi deployment.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {["Web Apps", "Mobile Apps", "Backend API"].map((focus) => (
              <div
                key={focus}
                className="glass-panel rounded-2xl px-6 py-5 text-sm text-slate-200/80 shadow-neon"
              >
                <p className="text-base font-semibold text-white">{focus}</p>
                <p className="mt-1">
                  Animasi halus, interaksi kreatif, dan pengalaman pengguna yang memikat.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="glass-panel relative overflow-hidden rounded-3xl p-10"
        >
          <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-skyglow/20 blur-3xl animate-pulseGlow" />
          <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-cobalt/30 blur-3xl animate-pulseGlow" />
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-semibold">Mari Berkolaborasi</h3>
            <p className="text-slate-200/80">
              Siap membantu membangun project baru, redesign platform, atau mengembangkan sistem
              backend yang solid. Hubungi saya untuk diskusi lebih lanjut.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-cobalt via-skyglow to-cobalt px-6 py-3 text-sm font-semibold shadow-neon transition hover:scale-105">
                Kirim Pesan
              </button>
              <button className="rounded-full border border-skyglow/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-skyglow">
                Lihat Resume
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 text-sm text-slate-400">
        © 2024 Portfolio Programmer. Crafted with React + Tailwind.
      </footer>
    </div>
  );
};

export default App;
