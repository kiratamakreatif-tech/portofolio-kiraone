import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Monitor, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight, Instagram, MessageCircle, MapPin, Menu, X, Zap, Shield, Rocket, CheckCircle2, TrendingUp, Clock, CreditCard, Quote, AlertCircle, Lightbulb, PlayCircle, Star } from 'lucide-react';
import LogoKiraOne from './assets/logo.png';
import Produk1 from './assets/Produk1.png';
import Produk2 from './assets/Produk2.jpg';
import Produk3 from './assets/Produk3.jpg';
import Project1 from './assets/Project1.jpg';
import Project2 from './assets/Project2.jpg';
import Project3 from './assets/Project3.jpg';
import HeaderMockup from './assets/aplikasi.png';

const App = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentShopPage, setCurrentShopPage] = useState(1);
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
    { id: 'portfolio', label: 'Portofolio' }
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
    }, { threshold: 0.1, rootMargin: '-80px 0px -75% 0px' });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => sectionObserver.observe(sec));

    return () => {
      elements.forEach(el => revealObserver.unobserve(el));
      sections.forEach(sec => sectionObserver.unobserve(sec));
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [activeFilter, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
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

  const totalShopPages = Math.ceil(shopProducts.length / itemsPerPage);
  const currentShopProducts = shopProducts; // Show all products for slide layout

  return (
    <div className="w-full overflow-x-hidden relative bg-black text-slate-200 font-sans selection:bg-emerald-500/40 selection:text-white">
      
      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(52,211,153,0.35); border-radius: 999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(52,211,153,0.7); }
        * { scrollbar-width: thin; scrollbar-color: rgba(52,211,153,0.35) transparent; }
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
                <button
                  onClick={() => navigate('/portofolio')}
                  className="transition-all px-4 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30"
                >
                  Portofolio
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className={`md:hidden transition-all duration-300 ease-in-out border-t border-white/10 overflow-hidden ${isMobileMenuOpen ? 'max-h-24 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col space-y-2 px-2 pb-3 pt-2">
              <button 
                onClick={() => { navigate('/portofolio'); setIsMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                Portofolio
              </button>
            </div>
          </div>
        </div>
      </nav>


      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 md:px-20 overflow-hidden relative selection:bg-emerald-500/40 selection:text-white">
          
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
                <h1 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.3] md:leading-[1.2]">
                  Otomasi Bisnis Cerdas: <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Solusi Sistem Sederhana dengan Biaya Terjangkau.</span>
                </h1>
                <p className="text-xs md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                  dengan sistem sederhana, tanpa ribet.<br />
                  Dari laporan project sampai bukti transfer — semua bisa otomatis & real-time.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 pt-2">
                <a href="https://wa.me/6285191249991" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full font-bold text-sm md:text-base transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2">
                  <i className="fa-brands fa-whatsapp text-base md:text-lg"></i>
                  Konsultasi Gratis via WhatsApp
                </a>
                <button onClick={() => navigate('/portofolio')} className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm md:text-base transition-all backdrop-blur-md flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  Lihat Contoh Sistem
                </button>
              </div>

              {/* 3 Mini Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />, title: 'Konsultasi Gratis' },
                  { icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />, title: 'Harga Terjangkau' },
                  { icon: <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />, title: 'Revisi Tanpa Batas' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center gap-2">
                    {item.icon}
                    <span className="text-white font-bold text-[10px] md:text-xs">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content: Clean PNG Display */}
            <div className="reveal delay-300 flex justify-center lg:justify-end relative order-1 lg:order-2 h-44 md:h-auto overflow-visible">
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-[40px] md:blur-[120px] rounded-full scale-110"></div>
              
              <div className="relative z-10 w-full max-w-[220px] md:max-w-[300px] lg:max-w-[380px] mt-4 md:mt-0"
                style={{ borderRadius: '24px', overflow: 'hidden' }}
              >
                <img 
                  src={HeaderMockup} 
                  style={{ display: 'block' }}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-700" 
                  alt="KiraOne Preview" 
                />
              </div>
            </div>

          </div>
        </section>

        {/* Section: Pain Point & Solution */}
        <section className="w-full py-20 md:py-28 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto w-full">
            {/* Top: Problem */}
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-20">
              {/* Left: Problem list */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] tracking-widest uppercase mb-5">
                  <AlertCircle className="w-3 h-3" /> Masalah Umum
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-snug">
                  Masih mengalami <br className="hidden md:block" />
                  <span className="text-red-400">hal seperti ini?</span>
                </h2>
                <p className="text-slate-500 text-sm mb-8">Jika iya, ini bukan masalah Anda saja — tapi ini juga tanda bahwa sistem Anda belum otomatis.</p>
                <div className="space-y-3">
                  {[
                    'Laporan keuangan proyek masih manual & ribet',
                    'Bukti transfer berantakan & harus dicek satu-satu',
                    'Piutang sulit dipantau → telat nagih',
                    'Data project tidak terstruktur',
                    'Admin kerja berulang setiap hari',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-red-500/5 border border-red-500/10 rounded-2xl px-4 py-3 hover:border-red-500/20 transition-all">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-400 text-[9px] font-black">{i + 1}</span>
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Insight */}
              <div className="flex flex-col gap-5 lg:pt-14">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg">Kabar baiknya, semua ini bisa diotomatisasi</h3>
                  </div>
                  <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                    <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Banyak bisnis sebenarnya tidak butuh sistem mahal</p>
                    <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Yang dibutuhkan adalah otomatisasi yang sesuai workflow mereka</p>
                    <p className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />Dengan sistem yang disesuaikan dengan workflow bisnis Anda, proses manual bisa berubah jadi otomatis — tanpa perlu ganti sistem besar</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="reveal flex items-center gap-4 mb-14 md:mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <span className="text-emerald-400 text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">Solusi</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            </div>
            {/* Bottom: Solution */}
            <div className="reveal">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                  Solusi yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Kami Tawarkan</span>
                </h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  Sistem ini bukan mengganti cara kerja Anda, tapi <span className="text-white font-semibold">menyederhanakannya</span>. Semua dibuat custom sesuai kebutuhan Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, title: 'Otomatisasi Laporan Keuangan Project', desc: 'Laporan tersusun otomatis, akurat, dan real-time tanpa input manual.' },
                  { icon: <Clock className="w-5 h-5" />, title: 'Monitoring Piutang & Reminder Otomatis', desc: 'Pantau tagihan dan kirim reminder ke klien secara otomatis.' },
                  { icon: <CreditCard className="w-5 h-5" />, title: 'Pengelolaan Bukti Transfer Tanpa Input Manual', desc: 'Bukti transfer digenerate dan diarsip otomatis dari data transaksi.' },
                  { icon: <Monitor className="w-5 h-5" />, title: 'Dashboard Bisnis Real-Time', desc: 'Pantau semua data bisnis dari satu layar, kapan saja.' },
                  { icon: <Zap className="w-5 h-5" />, title: 'Workflow Operasional Lebih Rapi & Efisien', desc: 'Alur kerja tim lebih terstruktur dan minim human error.' },
                ].map((sol, i) => (
                  <div key={i} className={`group bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {sol.icon}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2 leading-snug">{sol.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
                <div className="group bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border border-emerald-500/30 rounded-2xl p-5 md:p-6 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                  <div>
                    <h4 className="text-white font-extrabold text-base mb-2">Mau sistem seperti ini?</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-5">Konsultasikan kebutuhan bisnis Anda sekarang — gratis, tanpa komitmen.</p>
                  </div>
                  <a
                    href="https://wa.me/6285191249991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i> Chat Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Apa Saja yang Anda Dapatkan */}
        <section id="features" className="w-full flex flex-col justify-center py-20 md:py-28 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-4">Fitur Sistem</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Apa Saja yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Anda Dapatkan?</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm">Semua sistem disesuaikan dengan workflow bisnis Anda <span className="text-emerald-400 font-semibold">(custom)</span></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: 'Laporan Keuangan Project',
                  items: [
                    'Input transaksi per project',
                    'Auto rekap biaya & profit',
                    'Laporan per project / per periode',
                  ],
                },
                {
                  icon: <CreditCard className="w-6 h-6" />,
                  title: 'Management Bukti Transfer Otomatis',
                  items: [
                    'Ambil dari email otomatis',
                    'Rename sesuai format',
                    'Auto masuk Google Drive',
                  ],
                },
                {
                  icon: <Briefcase className="w-6 h-6" />,
                  title: 'Management Project Agensi',
                  items: [
                    'Tracking progress project',
                    'Monitoring task tim',
                    'Dashboard client & internal',
                  ],
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Management Piutang',
                  items: [
                    'Tracking jatuh tempo',
                    'Reminder otomatis',
                    'Monitoring pembayaran',
                  ],
                },
              ].map((card, i) => (
                <div key={i} className="reveal group bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-400 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-base mb-4 leading-snug">{card.title}</h3>
                  <ul className="space-y-2.5 mt-auto">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="text-slate-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-slate-300 text-xs md:text-sm font-medium">
                  Semua sistem disesuaikan dengan workflow bisnis Anda &mdash; <span className="text-emerald-400 font-bold">custom, bukan template</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Dampak Client */}
        <section id="shop" className="w-full py-20 md:py-28 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto w-full">

            {/* Header */}
            <div className="reveal text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-4">Hasil Nyata</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
                Bagaimana Dampak Client yang <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Sudah Pakai Jasa Kami?</span>
              </h2>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              {/* Card 1 - Kontraktor */}
              <div className="reveal group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-400 flex flex-col">
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/10 px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Client</p>
                      <h3 className="text-white font-extrabold text-base leading-tight">Kontraktor</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-red-400 text-[10px] font-black uppercase tracking-widest">Sebelum</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Rekap project masih manual, data tersebar, dan bukti transaksi sering sulit ditemukan saat dibutuhkan.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Sesudah</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Semua transaksi otomatis tercatat per project, bukti tersimpan rapi di Google Drive, dan laporan bisa dipantau real-time.</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest">Hasil</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Owner langsung tahu project mana yang untung/rugi — tanpa cek manual atau tanya admin',
                        'Rekap yang sebelumnya 2–3 jam/hari kini bisa diakses dalam <10 detik',
                        'Risiko kesalahan input berkurang karena sistem sudah terotomatisasi',
                      ].map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2 - Admin Keuangan */}
              <div className="reveal group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-400 flex flex-col">
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/10 px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Client</p>
                      <h3 className="text-white font-extrabold text-base leading-tight">Admin Keuangan</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-red-400 text-[10px] font-black uppercase tracking-widest">Sebelum</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Bukti transfer harus dicek manual dari email, didownload satu per satu, lalu rename dan upload ke Drive secara manual.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Sesudah</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Bukti transfer otomatis terambil dari email, langsung di-rename sesuai format, dan tersimpan rapi di Google Drive tanpa proses manual.</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest">Hasil</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Proses yang sebelumnya 1–2 jam/hari kini berjalan otomatis tanpa intervensi',
                        'Dokumen lebih rapi, mudah dicari, dan siap digunakan saat audit',
                        'Mengurangi beban kerja admin secara signifikan',
                      ].map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3 - Management Piutang */}
              <div className="reveal group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-400 flex flex-col">
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/10 px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Client</p>
                      <h3 className="text-white font-extrabold text-base leading-tight">Management Piutang</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-red-400 text-[10px] font-black uppercase tracking-widest">Sebelum</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Piutang dicatat manual, sering lupa follow up, dan sulit memantau mana yang sudah jatuh tempo.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Sesudah</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">Semua piutang tercatat otomatis, lengkap dengan tanggal jatuh tempo dan sistem reminder otomatis (email/WA).</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest">Hasil</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Owner langsung melihat daftar piutang aktif dan yang sudah jatuh tempo dalam satu dashboard',
                        'Proses penagihan jadi lebih terstruktur dan tidak ada yang terlewat',
                        'Arus kas lebih terkontrol karena penagihan lebih konsisten',
                      ].map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Kasus Anda Mirip */}
        <section id="solusi" className="w-full py-20 md:py-28 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto w-full">

            {/* Top: Kasus Mirip + Estimasi Biaya */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-start">

              {/* Left: Kasus Anda Mirip */}
              <div className="reveal flex flex-col gap-5">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-4">Situasi Anda</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                    Kasus Anda <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Mirip?</span>
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-black/30 border border-white/10 rounded-2xl">
                    <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">Setiap bisnis punya workflow yang berbeda dan sistem yang dibuat juga harus menyesuaikan.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-black/30 border border-white/10 rounded-2xl">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">Kita bisa bantu mapping solusi yang paling cocok untuk bisnis Anda.</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/6285191249991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-emerald-900/30"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  Konsultasi Gratis via WhatsApp
                </a>
              </div>

              {/* Right: Estimasi Biaya */}
              <div className="reveal flex flex-col gap-4">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold text-[10px] tracking-widest uppercase mb-4">Investasi</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 leading-tight">Estimasi Biaya</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Custom Aplikasi', price: 'Mulai 600rb', icon: <Code className="w-4 h-4" /> },
                    { label: 'Basic Automation', price: 'Mulai 800rb', icon: <Zap className="w-4 h-4" /> },
                    { label: 'Advanced Automation', price: 'Mulai 1,5 Jt', icon: <Rocket className="w-4 h-4" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded-2xl hover:border-emerald-500/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          {item.icon}
                        </div>
                        <span className="text-slate-200 font-semibold text-sm">{item.label}</span>
                      </div>
                      <span className="text-emerald-400 font-black text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs">Tersedia solusi sederhana untuk kebutuhan spesifik dengan biaya lebih terjangkau.</p>
              </div>
            </div>

            {/* Bottom: Cara Kerja + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

              {/* Cara Kerja */}
              <div className="reveal">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-5">Proses</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Cara Kerja</h3>
                <ol className="space-y-4">
                  {[
                    'Konsultasi kebutuhan bisnis Anda',
                    'Mapping workflow & masalah',
                    'Development sistem custom',
                    'Testing & revisi',
                    'Implementasi',
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex items-center gap-2 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <p className="text-slate-400 text-xs">Tidak perlu install software tambahan — cukup Google Workspace.</p>
                </div>
              </div>

              {/* CTA Box */}
              <div className="reveal">
                <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-500/20 rounded-3xl p-8 flex flex-col gap-5 h-full justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">Konsultasikan Kebutuhan Bisnis Anda <span className="text-emerald-400">(Gratis)</span></h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Tidak perlu langsung deal. Kita bahas dulu apakah proses bisnis Anda bisa diotomatisasi.</p>
                  </div>
                  <a
                    href="https://wa.me/6285191249991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-emerald-900/30"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    Chat WhatsApp Sekarang
                  </a>

                  {/* Social Media Links */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-slate-500 text-xs mb-3">Social Media Kami</p>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="https://wa.me/6285191249991"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm group bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 rounded-xl px-3 py-2.5"
                      >
                        <i className="fa-brands fa-whatsapp text-base"></i>
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="https://www.threads.com/@kiratamakreatif"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm group bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 rounded-xl px-3 py-2.5"
                      >
                        <i className="fa-brands fa-threads text-base"></i>
                        <span>Threads</span>
                      </a>
                      <a
                        href="https://www.instagram.com/kiratamakreatif/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm group bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 rounded-xl px-3 py-2.5"
                      >
                        <i className="fa-brands fa-instagram text-base"></i>
                        <span>Instagram</span>
                      </a>
                      <a
                        href="mailto:kiratamakreatif@gmail.com"
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm group bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 rounded-xl px-3 py-2.5"
                      >
                        <i className="fa-solid fa-envelope text-base"></i>
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Portfolio */}
        <section id="portfolio" className="w-full flex flex-col justify-center py-20 md:py-28 px-4">
          <div className="max-w-6xl mx-auto w-full flex flex-col">
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

            {/* Project Grid */}
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 px-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0">
              {filteredProjects.slice(0, 3).map((project) => (
                <div key={project.id} className="min-w-[85vw] md:min-w-0 snap-center reveal bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500 group">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-[10px] md:text-xs text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">{t}</span>
                      ))}
                    </div>
                    <div className="flex justify-center pt-2 border-t border-white/5">
                      <button 
                        onClick={() => window.open(project.link, '_blank')}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all shadow-lg shadow-emerald-900/20"
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lihat Lebih Banyak */}
            <div className="reveal flex flex-col items-center gap-2 mt-8">
              <p className="text-slate-500 text-sm">Masih banyak aplikasi lain yang sudah kami buat</p>
              <button
                onClick={() => navigate('/portofolio')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"
              >
                Lihat Semua Portofolio
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
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
          <i className="fa-brands fa-whatsapp text-3xl md:text-4xl text-white"></i>
        </div>
      </a>
    </div>
  );
};

export default App;
