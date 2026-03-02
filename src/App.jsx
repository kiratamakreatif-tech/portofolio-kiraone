import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight, Instagram, MessageCircle, MapPin, Menu, X, Zap, Shield, Rocket, CheckCircle2, TrendingUp, Clock, CreditCard, Quote, AlertCircle, Lightbulb, PlayCircle, Star } from 'lucide-react';
import LogoKiraOne from './assets/logo.png';
import Produk1 from './assets/Produk1.png';
import Produk2 from './assets/Produk2.jpg';
import Produk3 from './assets/Produk3.jpg';
import Project1 from './assets/Project1.jpg';
import Project2 from './assets/Project2.jpg';
import Project3 from './assets/Project3.jpg';
import HeaderMockup from './assets/header.png';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTesti, setCurrentTesti] = useState(0);

  const testimonials = [
    {
      masalah: "Laporan harian dikerjakan manual selama 3 jam tiap sore, sering ada salah hitung.",
      solusi: "Otomasi rekap data dari Google Form langsung ke Dashboard Visual.",
      dampak: "Waktu kerja terpangkas jadi 5 menit, akurasi laporan 100%.",
      review: "Sangat membantu operasional tim kami!",
      client: "Bapak Ahmad - Manajer Operasional"
    },
    {
      masalah: "Kirim invoice ke 50 klien dilakukan satu-satu via email & WA.",
      solusi: "Sistem generate PDF otomatis & kirim massal sekali klik.",
      dampak: "Penagihan lebih cepat 2 hari dari biasanya.",
      review: "Aplikasi yang sangat worth it untuk harganya.",
      client: "Ibu Maya - Pemilik Bisnis Retail"
    }
  ];

  const nextTesti = () => setCurrentTesti((prev) => (prev + 1) % testimonials.length);
  const prevTesti = () => setCurrentTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  
  const sectionsList = [
    { id: 'home', label: 'Beranda' },
    { id: 'features', label: 'Keunggulan' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'shop', label: 'Beli Aplikasi' },
    { id: 'pricing', label: 'Harga' },
    { id: 'about', label: 'Tentang' },
    { id: 'contact', label: 'Kontak' }
  ];

  const shopProducts = [
    {
      id: 1,
      title: 'AturBos App',
      price: 'Rp 59.000',
      description: 'Aplikasi Pencatatan Keuangan Pribadi dengan Metode 50/30/20',
      image: Produk1,
      tech: ['Budgeting', 'Catat Pemasukan Pengeluaran', 'Analisis Grafik', 'Reminder Tagihan', 'Atur Dompet', 'Tabungan', 'Karakter Level'],
      buyLink: 'https://lynk.id/kiratamakreatif/x3od72g1qv03'
    },
    {
      id: 2,
      title: 'Sertipat App',
      price: 'Rp 39.000',
      description: 'Aplikasi Generate Sertifikat Event Otomatis, Kirim Email dan WA secara massal .',
      image: Produk2,
      tech: ['Desain via Google Slide', 'Upload Data Field Sertifikat','Kirim Email Massal','Kirim WA Massal'],
      buyLink: 'https://lynk.id/kiratamakreatif/gge9714y94dn'
    },
    {
      id: 3,
      title: 'Kreatur App',
      price: 'Rp 99.000',
      description: 'Aplikasi Plan Konten Media Sosial dengan Fitur Kalender, Drafting, dan Monitor Posting ads.',
      image: Produk3,
      tech: ['Upload Ide', 'Review Konten','Kalender Konten','Reminder Jadwal Posting','Monitor Engagement'],
      buyLink: '#'
    }
  ];

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => sectionObserver.observe(sec));

    return () => {
      elements.forEach(el => revealObserver.unobserve(el));
      sections.forEach(sec => sectionObserver.unobserve(sec));
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [activeFilter, currentPage]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const container = document.getElementById('main-container');
    if (element && container) {
      const navHeight = 80; // h-20
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navHeight;

      container.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Aplikasi Pencatatan Keuangan Proyek',
      category: ['Mobile', 'Desktop'],
      description: 'Aplikasi Pencatatan Keuangan Proyek dengan fitur pembagian kategori, grafik analisis, dan reminder tagihan.',
      image: Project1,
      tech: ['Catat Pemasukan dan Pengeluaran', 'Kode Akun','Laporan','Master Proyek',],
      link: '#'
    },
    {
      id: 2,
      title: 'HR Sistem App',
      category: ['Mobile', 'Desktop'],
      description: 'Sistem HR untuk manajemen karyawan, absensi, cuti, dan payroll dengan dashboard admin.',
      image: Project2,
      tech: ['Presensi', 'Data Karyawan','Manajemen Cuti','Payroll','Dashboard Admin'],
      link: '#'
    },
    {
      id: 3,
      title: 'Aplikasi Generate Bukti Transfer Bank',
      category: ['Mobile', 'Desktop'],
      description: 'Aplikasi Generate Bukti Transfer Bank Massal dari Email sampai dengan kirim Wa dan email secara otomatis',
      image: Project3,
      tech: ['Dashboard', 'Monitor Transaksi','Generate Bukti Transfer','Kirim Email Massal','Kirim WA Massal'],
      link: '#'
    },
    {
      id: 4,
      title: 'AturBos App',
      category: ['Mobile', 'Desktop'],
      description: 'Aplikasi Pencatatan Keuangan Pribadi dengan Metode 50/30/20 untuk mengatur budget, dompet, dan tabungan.',
      image: Produk1,
      tech: ['Budgeting', 'Analisis Grafik', 'Reminder Tagihan', 'Tabungan'],
      link: 'https://lynk.id/kiratamakreatif/x3od72g1qv03'
    },
    {
      id: 5,
      title: 'Sertipat App',
      category: ['Mobile', 'Desktop'],
      description: 'Aplikasi Generate Sertifikat Event Otomatis, Kirim Email dan WA secara massal dengan desain Google Slide.',
      image: Produk2,
      tech: ['Google Slide', 'Email Massal', 'WhatsApp Massal'],
      link: 'https://lynk.id/kiratamakreatif/gge9714y94dn'
    },
    {
      id: 6,
      title: 'Kreatur App',
      category: ['Mobile', 'Desktop'],
      description: 'Aplikasi Plan Konten Media Sosial dengan Fitur Kalender, Drafting, dan Monitor Posting ads.',
      image: Produk3,
      tech: ['Plan Konten', 'Kalender Konten', 'Monitoring Engagement'],
      link: '#'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'Semua') return true;
    return Array.isArray(project.category) 
      ? project.category.includes(activeFilter)
      : project.category === activeFilter;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div id="main-container" className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative bg-black text-slate-200 font-sans selection:bg-emerald-500/40 selection:text-white" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      <style>{`
        ::-webkit-scrollbar { display: none; }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 9s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float 11s ease-in-out infinite 1s; }
        
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/20 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-600/20 blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-green-600/20 blur-[100px] animate-float-slow"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-40 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src={LogoKiraOne} alt="KiraOne Logo" className="h-6 md:h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 lg:space-x-4">
                {sectionsList.map(sec => (
                  sec.id !== 'shop' && (
                    <button 
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)} 
                      className={`transition-all px-4 py-2 rounded-xl text-sm font-bold ${
                        activeSection === sec.id 
                          ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20' 
                          : 'text-slate-400 hover:text-emerald-400 hover:bg-white/5'
                      }`}
                    >
                      {sec.label}
                    </button>
                  )
                ))}
                
                {/* Special Beli Aplikasi Menu */}
                {sectionsList.find(sec => sec.id === 'shop') && (
                  <button 
                    onClick={() => scrollToSection('shop')} 
                    className={`transition-all px-5 py-2 rounded-xl text-sm font-bold border-2 ${
                      activeSection === 'shop'
                        ? 'text-white border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                        : 'text-emerald-400 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/5'
                    }`}
                  >
                    Beli Aplikasi
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className={`md:hidden transition-all duration-300 ease-in-out border-t border-white/10 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-2 px-2 pb-3 pt-2">
              {sectionsList.map(sec => (
                <button 
                  key={sec.id}
                  onClick={() => {
                    scrollToSection(sec.id);
                    setIsMobileMenuOpen(false);
                  }} 
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    activeSection === sec.id 
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500' 
                      : 'text-slate-400 hover:text-emerald-400 hover:bg-white/5'
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Dot Navigation */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sectionsList.map((sec) => (
          <button key={sec.id} onClick={() => scrollToSection(sec.id)} className="group relative flex items-center justify-start">
            <span className={`absolute left-8 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap`}>
              {sec.label}
            </span>
            <div className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
              activeSection === sec.id ? 'bg-emerald-400 scale-150 shadow-[0_0_15px_rgba(52,211,153,0.6)]' : 'bg-white/20 hover:bg-white/40 hover:scale-110'
            }`} />
          </button>
        ))}
      </div>

      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section id="home" className="h-screen w-full snap-start snap-always flex items-center justify-center px-4 md:px-20 overflow-hidden relative selection:bg-emerald-500/40 selection:text-white">
          
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center text-center lg:text-left relative z-10 py-4 md:py-10">
            
            {/* Left Content (Dark Mode) */}
            <div className="reveal space-y-4 md:space-y-8 order-2 lg:order-1">
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-400 backdrop-blur-md">
                  <Code className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="px-3 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-emerald-400 font-bold tracking-wider text-[10px] md:text-base uppercase">Google App Script</span>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-4 px-2 md:px-0">
                <h1 className="text-3xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] md:leading-[1.1]">
                  Hentikan Lembur <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Urus Admin & Laporan.</span>
                </h1>
                <p className="text-xs md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                  Ubah Google Sheets menjadi sistem otomasi cerdas. Akurat, cepat, dan tanpa biaya langganan bulanan.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 pt-2">
                <button onClick={() => scrollToSection('portfolio')} className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full font-bold text-sm md:text-base transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                  Mulai Sekarang
                </button>
                <a href="https://wa.me/6285191249991" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm md:text-base transition-all backdrop-blur-md flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Right Content: Clean PNG Display */}
            <div className="reveal delay-300 flex justify-center lg:justify-end relative order-1 lg:order-2 h-40 md:h-auto">
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] md:blur-[120px] rounded-full scale-110"></div>
              
              <div className="relative z-10 w-full max-w-[280px] md:max-w-[450px] lg:max-w-[650px]">
                <img 
                  src={HeaderMockup} 
                  className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-700" 
                  alt="KiraOne Preview" 
                />
              </div>
            </div>

          </div>
        </section>

        {/* Section 1.5: Keunggulan */}
        <section id="features" className="h-screen w-full snap-start snap-always flex flex-col justify-center py-4 md:py-8 px-4 bg-black/20 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <div className="reveal text-center mb-6 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Mengapa Memilih <span className="text-emerald-400">KiraOne?</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm">Solusi otomasi cerdas yang dirancang khusus untuk efisiensi bisnis Anda tanpa biaya berlangganan.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {[
                { 
                  icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Otomasi Kilat', 
                  desc: 'Ubah proses manual menjadi hitungan detik.' 
                },
                { 
                  icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Keamanan Data', 
                  desc: 'Data tetap di infrastruktur Google Anda.' 
                },
                { 
                  icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Tanpa Berlangganan', 
                  desc: 'Sekali bayar untuk penggunaan selamanya.' 
                },
                { 
                  icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Skalabilitas', 
                  desc: 'Sistem fleksibel mengikuti pertumbuhan bisnis.' 
                },
                { 
                  icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Hemat Waktu', 
                  desc: 'Fokus strategi, biarkan sistem menangani admin.' 
                },
                { 
                  icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />, 
                  title: 'Akurasi 100%', 
                  desc: 'Minimalisir human-error dalam perhitungan.' 
                }
              ].map((feat, i) => (
                <div key={i} className="reveal bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-[2rem] hover:border-emerald-500/30 transition-all group overflow-hidden relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{feat.title}</h3>
                  <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Portfolio */}
        <section id="portfolio" className="h-screen w-full snap-start snap-always flex flex-col justify-center py-4 md:py-8 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
            <div className="reveal text-center mb-4 md:mb-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Portofolio</h2>
            </div>

            {/* Filters */}
            <div className="reveal delay-100 flex justify-center gap-2 mb-6">
              {['Semua', 'Mobile', 'Desktop'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${
                    activeFilter === filter 
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400' 
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
              {currentProjects.map((project, index) => (
                <div key={project.id} className="reveal bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500 group">
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-[10px] md:text-xs text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-end pt-2 border-t border-white/5">
                      <a href={project.link} className="text-[10px] md:text-xs font-bold text-emerald-400 hover:text-white transition-colors">Lihat Detail →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="reveal delay-200 flex justify-center items-center gap-4 mt-6">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-20 transition-all">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-[10px] md:text-xs font-bold text-slate-400">{currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-20 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 2.5: Shop */}
        <section id="shop" className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center py-4 md:py-8 px-4 bg-white/5 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex flex-col justify-center h-full">
            <div className="reveal text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Beli Aplikasi</h2>
              <p className="text-slate-400 text-xs md:text-sm">Siap pakai untuk mempercepat bisnis Anda.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
              {shopProducts.map((product) => (
                <div key={product.id} className="reveal bg-black/40 border border-white/10 rounded-2xl md:rounded-[2rem] hover:border-emerald-500/50 transition-all group overflow-hidden">
                  <div className="h-32 md:h-40 w-full overflow-hidden relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">{product.title}</h3>
                    <div className="text-emerald-400 font-bold text-sm md:text-lg mb-3 md:mb-4">{product.price}</div>
                    <p className="text-[10px] md:text-xs text-slate-400 line-clamp-2 md:line-clamp-3 mb-4 md:mb-6">{product.description}</p>
                    <a 
                      href={product.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 md:py-4 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Beli <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2.7: Harga */}
        <section id="pricing" className="h-screen w-full snap-start snap-always flex flex-col justify-center py-4 md:py-8 px-4 overflow-hidden relative">
          <div className="max-w-6xl mx-auto w-full">
            <div className="reveal text-center mb-6 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Pilihan Paket <span className="text-emerald-400">Harga</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm">Beli aplikasi siap pakai atau custom sesuai kebutuhan.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
              {[
                { 
                  plan: 'Aplikasi Jadi', 
                  price: 'Mulai 39K', 
                  features: [
                    'Satu Kali Bayar (Lifetime)',
                    'Tutorial Penggunaan',
                    'Dukungan Update Gratis'
                  ],
                  btn: 'Ke Toko',
                  action: () => scrollToSection('shop'),
                  popular: false
                },
                { 
                  plan: 'Aplikasi Custom', 
                  price: 'Mulai 250K', 
                  features: [
                    'Fitur Sesuai Kebutuhan',
                    'Konsultasi Alur Khusus',
                    'Dukungan Prioritas'
                  ],
                  note: 'Min Investasi: Rp 200rb',
                  btn: 'Chat Konsultasi',
                  action: () => window.open('https://wa.me/6285191249991', '_blank'),
                  popular: true
                }
              ].map((tier, i) => (
                <div key={i} className={`reveal p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border flex flex-col items-center text-center ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border-emerald-500 shadow-xl' 
                    : 'bg-white/5 border-white/10'
                }`}>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{tier.plan}</h3>
                  <div className="text-2xl md:text-4xl font-black text-emerald-400 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-300 text-[10px] md:text-sm">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={tier.action}
                    className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-base transition-all ${
                      tier.popular 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' 
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {tier.btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: About */}
        <section id="about" className="h-screen w-full snap-start snap-always flex flex-col justify-center py-4 md:py-8 px-4 overflow-hidden relative">
          <div className="max-w-5xl mx-auto w-full">
            <div className="reveal bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-8 relative z-10 text-center md:text-left">Tentang <span className="text-emerald-400">Kami.</span></h2>
              <p className="text-xs md:text-xl text-slate-300 leading-relaxed mb-6 md:mb-12 relative z-10 text-justify md:text-left line-clamp-[8] md:line-clamp-none">
                Penyedia jasa otomasi berbasis <strong>Google Apps Script</strong> yang membantu bisnis Anda bekerja lebih efisien. Kami mengubah proses manual menjadi sistem digital terintegrasi langsung dengan Google Workspace (Sheets, Drive, Gmail). Mulai dari dashboard monitoring hingga workflow approval, kami pastikan operasional bisnis Anda rapi, hemat waktu, dan tanpa biaya bulanan.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
                {[
                  { val: '10+', lab: 'Penjualan' },
                  { val: '20+', lab: 'Proyek' },
                  { val: '10+', lab: 'Klien' },
                  { val: '24/7', lab: 'Support' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl md:bg-transparent md:p-0">
                    <h4 className="text-xl md:text-5xl font-black text-emerald-400 mb-0.5 md:mb-1">{stat.val}</h4>
                    <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-500">{stat.lab}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-4 overflow-hidden bg-gradient-to-b from-black to-emerald-950/20">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side: Testimonials Slider */}
            <div className="reveal space-y-4 md:space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] tracking-widest uppercase">
                Apa Kata Klien?
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">Membantu Bisnis <br/><span className="text-emerald-400">Berkembang Lebih Cepat.</span></h2>
              
              <div className="relative group">
                <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-[2rem] relative min-h-[280px] md:min-h-[320px] flex flex-col justify-between hover:bg-emerald-400/5 transition-all">
                  <Quote className="absolute top-6 right-6 text-emerald-500/10 w-12 h-12" />
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 text-xs md:text-sm">
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <p className="text-slate-300 italic leading-relaxed">"{testimonials[currentTesti].masalah}"</p>
                    </div>
                    <div className="flex gap-3 text-xs md:text-sm">
                      <Lightbulb size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-emerald-300 font-medium leading-relaxed">{testimonials[currentTesti].solusi}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-col justify-between gap-3">
                    <div>
                      <p className="text-white font-black text-sm md:text-base">{testimonials[currentTesti].client}</p>
                      <div className="flex gap-1 mt-0.5">
                        {[...Array(5)].map((_, j) => <Star key={j} size={10} className="fill-emerald-400 text-emerald-400" />)}
                      </div>
                    </div>
                    <p className="text-emerald-400 text-xs md:text-sm font-serif italic font-medium leading-relaxed line-clamp-2">"{testimonials[currentTesti].review}"</p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-2 mt-4">
                  <button onClick={prevTesti} className="p-2 bg-white/5 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl border border-white/10 transition-all"><ChevronLeft size={20} /></button>
                  <button onClick={nextTesti} className="p-2 bg-white/5 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl border border-white/10 transition-all"><ChevronRight size={20} /></button>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form/Call */}
            <div className="reveal delay-200 text-center lg:text-left space-y-6 md:space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-[10px]">
                  <MapPin size={12} className="text-emerald-500" />
                  <span className="font-medium tracking-wide">Jakarta Selatan, Indonesia</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Let's <br/><span className="text-emerald-500">Talk.</span></h2>
              </div>

              <div className="space-y-4">
                <a href="https://wa.me/6285191249991" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center lg:justify-start gap-4 p-5 bg-white text-black hover:bg-emerald-400 transition-all rounded-2xl font-black text-lg md:text-xl shadow-xl group">
                  <MessageCircle className="w-6 h-6" />
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 ml-auto hidden md:block group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="grid grid-cols-4 gap-3">
                  <a href="https://instagram.com/kiratamakreatif" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl transition-all border border-white/10 backdrop-blur-md flex items-center justify-center"><Instagram size={24} /></a>
                  <a href="https://threads.net/@kiratamakreatif" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl transition-all border border-white/10 backdrop-blur-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12.24 16.96C11.5165 16.9537 10.8358 16.637 10.37 16.09C9.72803 15.313 9.40871 14.3312 9.47 13.33C9.40871 12.3288 9.72803 11.3469 10.37 10.57C10.8358 10.023 11.5165 9.70626 12.24 9.7C12.9635 9.70626 13.6442 10.023 14.11 10.57C14.7519 11.3469 15.0713 12.3288 15.01 13.33C15.0713 14.3312 14.7519 15.313 14.11 16.09C13.6442 16.637 12.9635 16.9537 12.24 16.96ZM12.24 8.08C11.1963 8.08107 10.1834 8.44111 9.37 9.1C8.25708 9.99849 7.63319 11.3364 7.67 12.75C7.63212 14.1611 8.25413 15.4962 9.36 16.39C10.176 17.054 11.1923 17.4177 12.24 17.42C13.2877 17.4177 14.304 17.054 15.12 16.39C16.2258 15.4962 16.8479 14.1611 16.81 12.75C16.8468 11.3364 16.2229 9.99849 15.11 9.1C14.2966 8.44111 13.2837 8.08107 12.24 8.08Z"/><path d="M12.24 0C5.46 0 0 5.46 0 12.24C0 19.02 5.46 24.48 12.24 24.48C18.15 24.48 23.01 20.25 24.12 14.65C24.4416 13.064 24.5146 11.4429 24.336 9.84001C24.1306 8.23249 23.5358 6.70243 22.5925 5.35334C21.6491 4.00426 20.3845 2.87321 18.8851 2.03713C17.3857 1.20104 15.6946 0.683516 13.93 0.520011C13.37 0.440011 12.8 0.410011 12.24 0.410011V1.41001C12.7441 1.40867 13.2477 1.44857 13.75 1.53001C15.3411 1.68481 16.8647 2.16432 18.2144 2.93481C19.5641 3.7053 20.6983 4.74399 21.5375 5.97723C22.3768 7.21046 22.8988 8.60015 23.0664 10.0504C23.234 11.5006 23.0425 12.9678 22.505 14.35C21.5791 19.1417 17.3776 22.569 12.5 22.54C6.51 22.54 1.63 17.65 1.63 11.63C1.63 5.61 6.51 0.72 12.5 0.72C13.01 0.72 13.52 0.75 14.04 0.82C15.9392 1.09635 17.6832 1.99042 19 3.36C20.4079 4.88762 21.1932 6.89269 21.2 8.98001V12.11C21.189 12.9038 20.8659 13.6617 20.3 14.22C19.8631 14.6133 19.3039 14.8329 18.7249 14.8391C18.1459 14.8453 17.581 14.6377 17.1327 14.2541C16.6844 13.8706 16.3807 13.3353 16.2766 12.7456C16.1725 12.1558 16.2745 11.5492 16.5641 11.0357C16.8537 10.5222 17.3121 10.1348 17.856 9.94362C18.3998 9.75245 18.9958 9.76993 19.5358 9.99285C19.5398 9.99441 19.5438 9.99596 19.5478 9.99751C19.4678 7.72751 18.3378 5.6975 16.5278 4.3875C15.313 3.51522 13.8427 3.05597 12.34 3.07C9.37 3.07 6.94 5.51 6.94 8.47V14.16C6.93893 15.2037 7.29897 16.2166 7.95782 17.03C8.85631 18.1429 10.1942 18.7668 11.6049 18.73C13.0157 18.7679 14.3508 18.1459 15.2449 17.04C16.0337 16.0822 16.4251 14.8712 16.34 13.65C16.5939 14.5165 17.1492 15.2638 17.9158 15.7681C18.6823 16.2724 19.6139 16.5024 20.556 16.42C21.413 16.35 22.253 15.93 22.843 15.24C23.5937 14.3642 24 13.2458 24 12.09V8.98001C24.016 6.13645 22.9238 3.4 20.97 1.4C18.8413 -0.528484 16.0354 -1.48803 13.25 -1.24L12.24 0ZM13.04 14.8V8.34C13.04 7.94 13.43 7.6 13.92 7.6C14.41 7.6 14.8 7.94 14.8 8.34V14.8C14.8 15.2 14.41 15.54 13.92 15.54C13.43 15.54 13.04 15.2 13.04 14.8Z" />
                    </svg>
                  </a>
                  <a href="mailto:kiratamakreatif@gmail.com" className="p-4 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl transition-all border border-white/10 backdrop-blur-md flex items-center justify-center"><Mail size={24} /></a>
                  <a href="https://lynk.id/kiratamakreatif" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl transition-all border border-white/10 backdrop-blur-md font-black italic text-xs flex items-center justify-center">LYNK.ID</a>
                </div>
              </div>

              <footer className="text-slate-600 text-[8px] font-bold tracking-widest uppercase">
                &copy; {new Date().getFullYear()} KiraOne - Solusi Otomasi Digital
              </footer>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6285191249991" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group flex items-center justify-center"
      >
        <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden md:block">
          Chat dengan kami
        </span>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 hover:-translate-y-2 active:scale-95 group-hover:rotate-6">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white/20" />
        </div>
      </a>
    </div>
  );
};

export default App;