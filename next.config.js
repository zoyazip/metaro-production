/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output the static files to somewhere more obvious
  distDir: 'build',
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
}

module.exports = nextConfig
