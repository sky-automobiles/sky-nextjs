/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              img-src 'self' https: data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline' https:;
              font-src 'self' https: data:;
              frame-src 'self' https://www.google.com https://maps.google.com;
              connect-src 'self' https://maps.googleapis.com https://www.google-analytics.com;
            `.replace(/\n/g, ' '),
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://www.google.com',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), microphone=(), camera=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
