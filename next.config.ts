import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg'),
    new URL('https://m.media-amazon.com/images/I/81hXZ1Ib6gL._AC_SL1500_.jpg'),
    new URL('https://m.media-amazon.com/images/I/71UwQseCCfL._AC_SL1500_.jpg'),
    new URL('https://m.media-amazon.com/images/I/71Y+xb97+XL._AC_SL1500_.jpg'),
    new URL('https://m.media-amazon.com/images/I/71Y997rEAKL._AC_SL1500_.jpg'),
    new URL('https://m.media-amazon.com/images/I/51nKhB-VZUL._AC_SL1010_.jpg'),
    new URL('https://m.media-amazon.com/images/I/71TLDPyPWHL._AC_SL1500_.jpg'),
    new URL('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-202509-mistblue_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=90&.v=WGdCRlQ0YVlqbTdXTEkxRnVQb0oxcFYyWWhPSUg0YytZdmJ2dmY4d09xckN0VFdyaFlNakY5MGMxMWhINEhMWmxjZnhHRHJyenVmME5KTm9Sd1ZaU3NqbWRhTGpRM2xxVWJRWUhSaDlCQ3JHYmE3Q0tucGdwdjhDQ1JZbjRxQXRka0xmckVNVTBkS20yTzkwa0dhU09n&traceId=1')],
  },
};

export default nextConfig;
