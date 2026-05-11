import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Code, Smartphone, Monitor,
  ShoppingBag, MessageCircle, Star, Tag, Search
} from 'lucide-react';
import LogoKiraOne from '../assets/logo.png';
import Produk1 from '../assets/Produk1.png';
import Produk2 from '../assets/Produk2.jpg';
import Produk3 from '../assets/Produk3.jpg';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import NewProject1 from '../assets/1.jpg';
import NewProject2 from '../assets/2.jpg';
import NewProject3 from '../assets/3.jpg';

const projects = [
  {
    id: 1,
    title: 'Aplikasi Pencatatan Keuangan Proyek',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description:
      'Aplikasi Pencatatan Keuangan Proyek dengan fitur pembagian kategori, grafik analisis, dan reminder tagihan. Memudahkan pemantauan arus kas proyek secara real-time.',
    image: Project1,
    tech: ['Catat Pemasukan & Pengeluaran', 'Kode Akun', 'Laporan Keuangan', 'Master Proyek'],
    link: '#',
  },
  {
    id: 2,
    title: 'HR Sistem App',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description:
      'Sistem HR lengkap untuk manajemen karyawan, absensi, cuti, dan payroll dengan dashboard admin yang interaktif dan laporan otomatis.',
    image: Project2,
    tech: ['Presensi', 'Data Karyawan', 'Manajemen Cuti', 'Payroll', 'Dashboard Admin'],
    link: '#',
  },
  {
    id: 3,
    title: 'Aplikasi Generate Bukti Transfer Bank',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description:
      'Aplikasi Generate Bukti Transfer Bank Massal dari Email sampai dengan kirim WA dan email secara otomatis untuk ratusan transaksi sekaligus.',
    image: Project3,
    tech: ['Dashboard', 'Monitor Transaksi', 'Generate Bukti Transfer', 'Kirim Email Massal', 'Kirim WA Massal'],
    link: '#',
  },
  {
    id: 4,
    title: 'AturBos App',
    category: ['Desktop', 'Mobile'],
    type: 'Siap Pakai',
    description:
      'Aplikasi Pencatatan Keuangan Pribadi dengan Metode 50/30/20 untuk mengatur budget, dompet, dan tabungan. Dilengkapi analisis grafik dan reminder tagihan.',
    image: Produk1,
    tech: ['Budgeting 50/30/20', 'Catat Pemasukan Pengeluaran', 'Analisis Grafik', 'Reminder Tagihan', 'Atur Dompet', 'Tabungan', 'Karakter Level'],
    link: 'https://lynk.id/kiratamakreatif/x3od72g1qv03',
    price: 'Rp 59.000',
  },
  {
    id: 5,
    title: 'Sertipat App',
    category: ['Desktop', 'Mobile'],
    type: 'Siap Pakai',
    description:
      'Aplikasi Generate Sertifikat Event Otomatis dengan desain via Google Slide, kirim Email dan WA secara massal hanya dengan satu klik.',
    image: Produk2,
    tech: ['Desain via Google Slide', 'Upload Data Field Sertifikat', 'Kirim Email Massal', 'Kirim WA Massal'],
    link: 'https://lynk.id/kiratamakreatif/gge9714y94dn',
    price: 'Rp 39.000',
  },
  {
    id: 6,
    title: 'Kreatur App',
    category: ['Desktop', 'Mobile'],
    type: 'Siap Pakai',
    description:
      'Aplikasi Plan Konten Media Sosial dengan Fitur Kalender, Drafting, dan Monitor Posting. Kelola semua konten dari satu tempat.',
    image: Produk3,
    tech: ['Upload Ide', 'Review Konten', 'Kalender Konten', 'Reminder Jadwal Posting', 'Monitor Engagement'],
    link: '#',
    price: 'Rp 99.000',
  },
  {
    id: 7,
    title: 'Aplikasi Keuangan Kontruksi',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description: 'Aplikasi Kelola keuangan dan administrasi proyek dengan tampilan web modern (PWA). Data disimpan di Google Sheets dengan fitur multi-user dan sistem login.',
    image: NewProject1,
    tech: ['Manajemen Transaksi Keuangan', 'Sistem Invoice & Bukti Pembayaran', 'Multi-User dengan Hak Akses', 'Manajemen Proyek & Agenda', 'Export Data (Excel & PDF)'],
    link: '#',
  },
  {
    id: 8,
    title: 'Aplikasi Customer Card Piutang',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description: 'Aplikasi pencatatan keuangan proyek konstruksi berbasis web dengan sistem multi-proyek.',
    image: NewProject2,
    tech: ['Dashboard ringkasan keuangan & statistik real-time', 'Pencatatan transaksi pemasukan & pengeluaran', 'Account Receivable & manajemen piutang customer', 'Laporan keuangan dengan export Excel/PDF', 'Master data (Proyek/Perumahan, Customer, Bank, Kode Akun)'],
    link: '#',
  },
  {
    id: 9,
    title: 'Aplikasi Keuangan Project Agency',
    category: ['Desktop', 'Mobile'],
    type: 'Custom',
    description: 'Aplikasi manajemen keuangan dan proyek berbasis Google Apps Script dengan dashboard interaktif untuk mengelola bisnis freelance/agency.',
    image: NewProject3,
    tech: ['Manajemen Proyek & Budget', 'Tracking Transaksi (Pemasukan & Pengeluaran)', 'Manajemen Freelancer & Gaji', 'Invoice & Klien', 'Dashboard Analitik & Laporan Keuangan'],
    link: '#',
  },
];

const typeColors = {
  Custom: 'bg-blue-100 text-blue-600 border-blue-300',
  'Siap Pakai': 'bg-[#d8efd8] text-[#66B765] border-[#8ece8e]',
};

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeType, setActiveType] = useState('Semua');
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = projects.filter((p) => {
    const matchCat =
      activeFilter === 'Semua' || p.category.includes(activeFilter);
    const matchType = activeType === 'Semua' || p.type === activeType;
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchType && matchSearch;
  });

  return (
    <div className="min-h-screen w-full bg-[#F7F4EE] text-gray-900 font-sans overflow-x-hidden selection:bg-[#66B765]/30 selection:text-[#1a341a]">
      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(102,183,101,0.6); border-radius: 999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(102,183,101,0.9); }
        * { scrollbar-width: thin; scrollbar-color: rgba(102,183,101,0.6) transparent; }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 9s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float 11s ease-in-out infinite 1s; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); }
      `}</style>

      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#66B765]/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#77c577]/10 blur-[120px] animate-float-delayed" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-[#66B765]/10 blur-[100px] animate-float-slow" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-[#66B765] to-[#66B765] backdrop-blur-xl border-b border-[#4d9b4c] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white hover:text-[#d8efd8] transition-all text-sm font-bold backdrop-blur-sm"
          >
            <ArrowLeft size={16} />
            Kembali
          </button>

          <img
            src={LogoKiraOne}
            alt="KiraOne Logo"
            className="h-6 md:h-7 w-auto object-contain opacity-90"
          />

          <a
            href="https://wa.me/6285191249991"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#66B765] hover:bg-[#f0f9f0] transition-all text-sm font-bold shadow-lg"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span className="hidden sm:inline">Konsultasi</span>
          </a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-16">
        {/* Hero Title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f9f0] border border-[#b5dfb5] text-[#66B765] font-bold text-xs tracking-widest uppercase mb-4">
            <Code size={14} />
            Google Apps Script
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Portofolio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66B765] to-[#66B765]">
              Aplikasi Kami
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Kumpulan aplikasi berbasis Google Apps Script yang telah kami bangun — mulai dari solusi siap pakai hingga custom sesuai kebutuhan bisnis Anda.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mt-8">
            {[
              { val: `${projects.length}+`, lab: 'Aplikasi' },
              { val: '20+', lab: 'Proyek Selesai' },
              { val: '10+', lab: 'Klien Puas' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-[#66B765]">{s.val}</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 items-center">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Cari aplikasi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#77c577] focus:bg-[#f0f9f0] transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2">
            {['Semua', 'Mobile', 'Desktop'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeFilter === f
                    ? 'bg-[#d8efd8] border-[#77c577] text-[#66B765]'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {f === 'Mobile' && <Smartphone size={12} />}
                {f === 'Desktop' && <Monitor size={12} />}
                {f === 'Semua' && <Tag size={12} />}
                {f}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            {['Semua', 'Siap Pakai', 'Custom'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeType === t
                    ? t === 'Siap Pakai'
                      ? 'bg-[#d8efd8] border-[#77c577] text-[#66B765]'
                      : t === 'Custom'
                      ? 'bg-blue-100 border-blue-400 text-blue-600'
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-xs mb-6 font-medium">
          Menampilkan <span className="text-[#66B765] font-bold">{filtered.length}</span> aplikasi
        </p>

        {/* Project Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="card-hover bg-white backdrop-blur-lg border border-gray-200 rounded-3xl overflow-hidden hover:border-[#77c577] hover:shadow-xl group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-[#f0f9f0] flex flex-col items-center justify-center gap-2">
                      <Code size={32} className="text-[#66B765]/40" />
                      <span className="text-gray-400 text-xs font-medium">Gambar belum tersedia</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${typeColors[project.type]}`}
                    >
                      {project.type}
                    </span>
                    {project.price && (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-black/60 border border-white/20 text-white backdrop-blur-sm">
                        {project.price}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Category chips */}
                  <div className="flex gap-1.5 mb-3">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold bg-gray-100 border border-gray-200 text-gray-600"
                      >
                        {cat === 'Mobile' ? <Smartphone size={9} /> : <Monitor size={9} />}
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#66B765] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[9px] font-semibold bg-[#f0f9f0] border border-[#b5dfb5] text-[#66B765]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
                    {project.link && project.link !== '#' ? (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#66B765] to-[#66B765] hover:from-[#4d9b4c] hover:to-[#4d9b4c] text-white rounded-xl text-xs font-bold transition-all shadow-lg"
                        >
                          <ShoppingBag size={13} />
                          {project.price ? 'Beli Sekarang' : 'Lihat Demo'}
                        </a>
                        <a
                          href="https://wa.me/6285191249991"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:text-[#66B765] transition-all"
                          title="Tanya via WhatsApp"
                        >
                          <i className="fa-brands fa-whatsapp text-sm"></i>
                        </a>
                      </>
                    ) : (
                      <a
                        href="https://wa.me/6285191249991"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-[#f0f9f0] border border-gray-200 hover:border-[#8ece8e] text-gray-700 hover:text-[#66B765] rounded-xl text-xs font-bold transition-all"
                      >
                        <i className="fa-brands fa-whatsapp text-xs"></i>
                        Tanya & Custom
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Search size={40} className="text-gray-400 mb-4" />
            <p className="text-gray-500 text-base font-medium">Tidak ada aplikasi yang cocok.</p>
            <p className="text-gray-400 text-sm mt-1">Coba ubah filter atau kata kunci pencarian.</p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 md:mt-20 rounded-3xl bg-gradient-to-r from-[#f0f9f0] to-[#f0f9f0] border border-[#8ece8e] p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-[#77c577]/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 relative z-10">
            Tidak ada yang cocok?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto relative z-10">
            Kami siap membangun aplikasi custom sesuai alur kerja dan kebutuhan bisnis Anda. Konsultasi gratis, tanpa biaya tersembunyi.
          </p>
          <a
            href="https://wa.me/6285191249991"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#66B765] to-[#66B765] hover:from-[#4d9b4c] hover:to-[#4d9b4c] text-white rounded-2xl font-bold text-sm md:text-base transition-all shadow-xl relative z-10"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Chat Konsultasi Gratis
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-12 pb-6">
          &copy; {new Date().getFullYear()} KiraOne — Solusi Otomasi Digital
        </footer>
      </div>
    </div>
  );
};

export default PortfolioPage;
