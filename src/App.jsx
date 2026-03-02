import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight, Instagram, MessageCircle, MapPin, Menu, X } from 'lucide-react';
import LogoKiraOne from './assets/logo.png';
import Produk1 from './assets/Produk1.png';
import Produk2 from './assets/Produk2.jpg';
import Produk3 from './assets/Produk3.jpg';
import Project1 from './assets/Project1.jpg';
import Project2 from './assets/Project2.jpg';
import Project3 from './assets/Project3.jpg';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionsList = [
    { id: 'home', label: 'Beranda' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'shop', label: 'Beli Aplikasi' },
    { id: 'about', label: 'Tentang Kami' },
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
      title: 'StudioAudio Edit',
      category: ['Desktop'],
      description: 'Software desktop untuk merekam dan mengedit audio multi-track.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
      tech: ['C#', '.NET WPF'],
      link: '#'
    },
    {
      id: 5,
      title: 'TanyaDokter App',
      category: ['Mobile'],
      description: 'Platform telemedis chat dan video call aman dengan dokter.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      tech: ['Swift', 'WebRTC'],
      link: '#'
    },
    {
      id: 6,
      title: 'DataSync Manager',
      category: ['Desktop'],
      description: 'Alat sinkronisasi database antar server dengan penjadwalan.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      tech: ['JavaFX', 'MySQL'],
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
                ))}
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
        <section id="home" className="min-h-screen md:h-screen w-full snap-start snap-always flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-emerald-400 text-xs md:text-sm font-medium mb-6 md:mb-8">
              <Code size={14} className="md:w-4 md:h-4" />
              <span>Google App Script</span>
            </div>
            <h1 className="reveal delay-100 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Solusi Digital <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Pekerjaanmu</span>
            </h1>
            <p className="reveal delay-200 text-base md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-10 px-4 leading-relaxed">
              Ubah Pekerjaan Manual mu menjadi Pekerjaan Otomatis dengan Aplikasi Custom yang Murah.
            </p>
            <div className="reveal delay-300 w-full px-4 sm:px-0 sm:w-auto">
              <button onClick={() => scrollToSection('portfolio')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 hover:-translate-y-1">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                Lihat Aplikasi Kami
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Portfolio */}
        <section id="portfolio" className="min-h-screen md:h-screen w-full snap-start snap-always flex flex-col justify-center py-16 md:py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
            <div className="reveal text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Aplikasi Kami</h2>
            </div>

            {/* Filters */}
            <div className="reveal delay-100 flex justify-center gap-2 md:gap-4 mb-8">
              {['Semua', 'Mobile', 'Desktop'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${
                    activeFilter === filter 
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-md' 
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {filter === 'Mobile' && <Smartphone size={16} />}
                  {filter === 'Desktop' && <Monitor size={16} />}
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <div key={project.id} className="reveal bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500 group" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                  <div className="relative h-40 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {(Array.isArray(project.category) ? project.category : [project.category]).map(cat => (
                        <div key={cat} className="bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2 py-1 rounded-lg border border-emerald-500/30">
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-medium text-emerald-400/70">#{t}</span>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="reveal delay-200 flex justify-center items-center gap-4 mt-10">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 disabled:opacity-20 transition-all text-white">
                  <ChevronLeft size={24} />
                </button>
                <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">
                   {currentPage} / {totalPages}
                </span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 disabled:opacity-20 transition-all text-white">
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 2.5: Shop */}
        <section id="shop" className="min-h-screen md:h-screen w-full snap-start snap-always flex flex-col items-center justify-center pt-24 pb-8 md:pt-28 md:pb-12 px-4 bg-white/5 relative z-10">
          <div className="max-w-6xl mx-auto w-full flex flex-col justify-center h-full">
            <div className="reveal text-center mb-6 md:mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Beli Aplikasi</h2>
              <p className="text-slate-400 text-sm md:text-lg">Pilih aplikasi siap pakai untuk mempercepat bisnis Anda.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-h-[70vh] md:max-h-none overflow-y-auto md:overflow-visible pr-2 md:pr-0">
              {shopProducts.map((product) => (
                <div key={product.id} className="reveal bg-black/40 border border-white/10 rounded-[2rem] hover:border-emerald-500/50 transition-all group overflow-hidden">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div className="w-10 h-10 bg-emerald-500/20 backdrop-blur-md rounded-xl flex items-center justify-center text-emerald-400">
                        <ShoppingBag size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <div className="text-emerald-400 font-bold text-xl mb-4">{product.price}</div>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded-md text-slate-400">{t}</span>
                      ))}
                    </div>
                    <a 
                      href={product.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-emerald-600/20 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 text-emerald-400 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-emerald-500/20"
                    >
                      Beli Sekarang <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: About */}
        <section id="about" className="h-screen w-full snap-start snap-always flex flex-col justify-center py-20 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="reveal bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">Tentang <span className="text-emerald-400">Kami.</span></h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 relative z-10 text-justify">
                Kami adalah penyedia jasa pembuatan aplikasi dan website berbasis <strong>Google Apps Script</strong> yang membantu bisnis mengotomatiskan pekerjaan dengan cepat, efisien, dan terintegrasi langsung dengan Google Workspace seperti Sheets, Drive, dan Gmail. Kami mengubah proses manual menjadi sistem digital yang praktis mulai dari dashboard monitoring, generate dokumen massal, hingga workflow approval agar operasional bisnis Anda lebih rapi, hemat waktu, dan siap berkembang.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { val: '10+', lab: 'Penjualan' },
                  { val: '20+', lab: 'Proyek' },
                  { val: '10+', lab: 'Klien' }
                ].map((stat, i) => (
                  <div key={i} className="group/stat cursor-default">
                    <h4 className="text-3xl md:text-5xl font-black text-emerald-400 mb-1 group-hover/stat:scale-110 transition-transform">{stat.val}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.lab}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="min-h-screen md:h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal inline-block mb-4 md:mb-6 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs md:text-sm tracking-widest uppercase">
              Hubungi Kami
            </div>
            <div className="reveal delay-75 flex items-center justify-center gap-2 mb-6 md:mb-8 text-slate-400 text-sm md:text-base">
              <MapPin size={16} className="text-emerald-500 md:w-[18px] md:h-[18px]" />
              <span className="font-medium tracking-wide">Jakarta Selatan, Indonesia</span>
            </div>
            <h2 className="reveal delay-100 text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8">Let's <span className="text-emerald-500">Talk.</span></h2>
            <div className="reveal delay-200 w-full px-4 sm:px-0">
              <a href="https://wa.me/628XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-white text-black hover:bg-emerald-400 transition-all rounded-3xl font-black text-xl md:text-2xl shadow-xl hover:-translate-y-2">
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
                WhatsApp
              </a>
            </div>
            
            <div className="reveal delay-300 flex flex-wrap justify-center gap-4 md:gap-6 mt-12 md:mt-16">
              <a href="https://wa.me/628XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl md:rounded-3xl transition-all border border-white/10 backdrop-blur-md">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://instagram.com/akunanda" target="_blank" rel="noopener noreferrer" className="p-4 md:p-5 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl md:rounded-3xl transition-all border border-white/10 backdrop-blur-md">
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="mailto:halo@emailanda.com" className="p-4 md:p-5 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl md:rounded-3xl transition-all border border-white/10 backdrop-blur-md">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://lynkid.id/akunanda" target="_blank" rel="noopener noreferrer" className="px-5 md:px-6 py-4 md:py-5 bg-white/5 text-white hover:text-emerald-400 hover:bg-white/10 rounded-2xl md:rounded-3xl transition-all border border-white/10 backdrop-blur-md font-black italic text-base md:text-xl flex items-center justify-center">
                LYNK.ID
              </a>
            </div>
          </div>
          <footer className="absolute bottom-4 md:bottom-8 w-full text-center text-slate-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} KiraOne Portofolio
          </footer>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/628XXXXXXXXX" 
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