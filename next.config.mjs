/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔹 Esto habilita `next export` automáticamente
  images: {
    unoptimized: true, // 🔹 Evita errores al usar imágenes estáticas
  },
};

export default nextConfig;
