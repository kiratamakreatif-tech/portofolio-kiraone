/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### 2. File `src/index.css` (Kunci Desain)
Hapus semua isi aslinya dan ganti hanya dengan 3 baris ini:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

### 3. File `postcss.config.js` (Jembatan Tailwind)
Jika file ini belum ada, buat file baru dengan nama tersebut dan masukkan kode ini:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

**Langkah Terakhir:** Matikan terminal (Ctrl+C), lalu jalankan kembali perintah `npm run dev`. Saya jamin tampilannya akan langsung berubah menjadi desain gelap-hijau yang sangat profesional!