/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'a0.tsubasa.im',
            },
            {
                protocol:'https',
                hostname:'mir-s3-cdn-cf.behance.net',
            }
        ]
    }
};

export default nextConfig;
