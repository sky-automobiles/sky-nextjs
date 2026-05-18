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

    script-src 'self' 'unsafe-inline' 
      https://www.googletagmanager.com
      https://www.google-analytics.com
      https://www.google.com
      https://connect.facebook.net
      https://www.clarity.ms
      https://scripts.clarity.ms
      https://googleads.g.doubleclick.net
      https://www.googleadservices.com;

    connect-src 'self'
      https://www.google-analytics.com
      https://*.google-analytics.com
      https://*.googletagmanager.com
      https://maps.googleapis.com
      https://www.google.com
      https://www.google.co.in
      https://www.googleadservices.com
      https://googleads.g.doubleclick.net
      https://www.clarity.ms
      https://scripts.clarity.ms
      https://n.clarity.ms
      https://connect.facebook.net;

    img-src 'self' data: blob: https:;
    style-src 'self' 'unsafe-inline' https:;
    font-src 'self' https: data:;

    frame-src 'self'
      https://www.google.com
      https://maps.google.com
      https://www.googletagmanager.com;

    object-src 'none';
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
