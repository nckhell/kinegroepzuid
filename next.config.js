/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/info',
        destination: '/#info',
        permanent: true,
      },
      {
        source: '/specialisaties',
        destination: '/#specialisaties',
        permanent: true,
      },
      {
        source: '/ligging',
        destination: '/#ligging',
        permanent: true,
      },
      {
        source: '/afspraak',
        destination: '/#afspraak',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    }

    return config
  },
}

module.exports = nextConfig
