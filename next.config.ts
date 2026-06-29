import { url } from "inspector";
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
    new URL('https://http2.mlstatic.com/D_NQ_NP_2X_663012-MLA105698002491_012026-F.webp'),
    new URL('https://juntoz.com/producto/cargador-inalambrico-ugreen-magflow-qi2-25w-magsafe-2-en-1-w752-55960b-6972037gc054731703202610250258688?utm_term=&utm_campaign=JUNTOZ_google_pmax-generico_aon_2024_conversiones_rev1&utm_source=adwords&utm_medium=ppc&hsa_acc=8111642417&hsa_cam=21025715912&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21018883419&gbraid=0AAAAAou7DXaDOnjjR4qEEDA2-Pe5Ozld7&gclid=Cj0KCQjwi8nRBhDhARIsAHZf_pZOSYvrxld1Q6xeaya9KqxY07FcePpDESekGvFQPG6UBrs3opp-1IAaAsmUEALw_wcB'),
    new URL('https://mx.pinterest.com/pin/452822937554166190/'),
    new URL('https://img.magnific.com/vector-gratis/casa-encantadora-ilustracion-arbol_1308-176337.jpg'),
    new URL('https://http2.mlstatic.com/D_NQ_NP_2X_680425-MPE109561080444_042026-F.webp'),
    new URL('https://www.mercadolibre.com.pe/afeitadora-my-balls-40-pro/up/MPEU2458661675?pdp_filters=item_id%3AMPE659701510&from=gshop&matt_tool=25903432&matt_word=&matt_source=google&matt_campaign_id=23396607108&matt_ad_group_id=190389139123&matt_match_type=&matt_network=g&matt_device=c&matt_creative=790000007698&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5082135693&matt_product_id=MPEU2458661675&matt_product_partition_id=2454652782921&matt_target_id=aud-2457655439684:pla-2454652782921&cq_src=google_ads&cq_cmp=23396607108&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23396607108&gbraid=0AAAAADt7RJLuj-fw1g7rp6huImGN3wX0j&gclid=CjwKCAjw0dPRBhAPEiwAE5vTTqQ7fZE2nk--UkGh63OrvE2EhfAJylhAAXU3Ygw4IHthoLwVb8Y80RoCWnkQAvD_BwE'),
    new URL('https://diadejuegos.pe/euro-games/3605-catan-duelo.html'),
    new URL('https://diadejuegos.pe/3368-large_default/catan-duelo.jpg'),
    new URL('https://media.falabella.com/falabellaPE/153390813_01/w=1200,h=1200,fit=pad'),
    new URL('https://www.falabella.com.pe/falabella-pe/product/153390812/consola-playstation-5-slim-digital-sony/153390813?kid=shopp44fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=20114538213&gbraid=0AAAAADs9MO2aooNxTq_tGr64QgGunHWpL&gclid=CjwKCAjwl97RBhBWEiwAa9rbXeKv8YDbI2HaCAAEI1GxYnSNMxtVQjJo8eb2RPy4h4d7colXoK__phoCfuwQAvD_BwE'),
    new URL('https://es.aliexpress.com/item/1005007506754284.html?spm=a2g0o.productlist.main.1.1e441fe4fAQMlf&algo_pvid=58dcd938-f9cd-4424-8cb3-65d8322a4d8a&algo_exp_id=58dcd938-f9cd-4424-8cb3-65d8322a4d8a-0&pdp_ext_f=%7B%22order%22%3A%229720%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21PEN%21378.83%21117.43%21%21%21731.62%21226.80%21%402101e2b217827685315536489e9f89%2112000041062383996%21sea%21PE%211630872821%21X%211%210%21n_tag%3A-29919%3Bd%3Abc72f2f4%3Bm03_new_user%3A-29895&curPageLogUid=qRac1uNKxsjM&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007506754284%7C_p_origin_prod%3A&_gl=1*ou03go*_gcl_aw*R0NMLjE3ODI3Njg1MjguQ2owS0NRandyNGpTQmhDU0FSSXNBT1gxRS1JOXN3aUQtY1loZTE4UG5Fd2NuVWN1WUpKTXhnRlo3RHk3RDZ6YU1ZMzhHbGRJbDJkWUtvSWFBcFFWRUFMd193Y0I.*_gcl_au*MjA3OTczNjUwMi4xNzgxNzQ2NjU2*_ga*Nzc0NjEwNTA1LjE3ODE3NDY2NTY.*_ga_VED1YSGNC7*czE3ODI3NjY3NDUkbzUkZzEkdDE3ODI3Njg1MzIkajU2JGwwJGgw'),
    new URL('https://ae01.alicdn.com/kf/S269e8bfc830a4dd88111098122119449n.png'),],
  },
};

export default nextConfig;
