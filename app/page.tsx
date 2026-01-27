import Link from 'next/link';
import Image from 'next/image';
import Card from './_components/Card';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center pb-4">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Kvothe&apos;s Wishlist.
          </h1>
          <p>Holi, Azana! Esta es una lista de cosas que el capitalismo ha puesto en mi mente. Always buy at MSRP!</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-center sm:items-start sm:text-center">
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Airbender-Accessories-Collectible/dp/B0FHJGC6N7/ref=sr_1_28?crid=34FPBALT9UPRX&dib=eyJ2IjoiMSJ9.ybOiyI7m8EQxmkTBPomE0rpAJd_luJAD1UIkIDCRgblfErPRmFw8IVRFL0E7c-Wvv6h5rl9PbjfJN53dRDrAi9leYXnWv_B7lWIDPFqIr9VF8uj-P8hzBygoKuV73wDvytoodC0GDT_qFRZ3klO1wE3uh3U_d8yAFNV9fZnU7XxFeTzPgRD2Lh-YGFmmeESFa2fXA-nEe57JTQQvwzAW07NLtlQfV4-sZB4r6NkWlt9oQUfof1My_JinFsxl1nWydOuyVURn0vOJWr4s41ht6rZaikAmnSk_axow1p08AOQ.hGHJEDmE4mTHl0drQfr1eghfrLN22H7SX-PR5Hmc2PQ&dib_tag=se&keywords=bundle+avatar+mtg&qid=1769225621&sprefix=bundle+avatar+mt%2Caps%2C212&sr=8-28"}
            imageLink={"https://m.media-amazon.com/images/I/71UwQseCCfL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering | Avatar: The Last Airbender Bundle"}
            price={"69.99"}
          />
          <Card
            shopLink={"https://www.apple.com/shop/buy-iphone/iphone-17"}
            imageLink={"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-202509-mistblue_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=90&.v=WGdCRlQ0YVlqbTdXTEkxRnVQb0oxcFYyWWhPSUg0YytZdmJ2dmY4d09xckN0VFdyaFlNakY5MGMxMWhINEhMWmxjZnhHRHJyenVmME5KTm9Sd1ZaU3NqbWRhTGpRM2xxVWJRWUhSaDlCQ3JHYmE3Q0tucGdwdjhDQ1JZbjRxQXRka0xmckVNVTBkS20yTzkwa0dhU09n&traceId=1"}
            title={"Iphone 17"}
            price={"829"}
          />
          <Card
            shopLink={"https://www.amazon.com/CMF-NOTHING-Watch-Pro-Bluetooth/dp/B0F66VB1SV/ref=sr_1_1?crid=14UDGXBTMHZXU&dib=eyJ2IjoiMSJ9.Nmit4afTLnpX6oYrtFJ6sGM9BIowv-KfgrodLfpumMME0fuisFrHaO4ZrRr5IeGRZ8n2ic-2pm1OQAbOrVR2XFGPSU3SnrrpeJB7Q6jq1HbVsucXBuyl5Ed6_utPbYML7nyI11glLeU2JnV-79R0mF4KEYkfQM2Ju6LP3UG6uAUuNLFoGkh5txlD3MxFUfXpzIYbWTC6I6euJLmKf6Urg9Zj1C9Mt-Z1Qbf8mnMsFhU.7h5XfFwzovGCtfr7x25A2QOpsTyEsJGbWQS9hQzxeAQ&dib_tag=se&keywords=cmf%2Bwatch&qid=1769487668&sprefix=cmf%2Bwatch%2Caps%2C305&sr=8-1&th=1"}
            imageLink={"https://m.media-amazon.com/images/I/51nKhB-VZUL._AC_SL1010_.jpg"}
            title={"CMF by Nothing Watch 3 Pro Smart Watch"}
            price={"63.20"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Commanders-Borderless-Accessories/dp/B0FHJJS17L/ref=sr_1_1?crid=25B8116MSZA7J&dib=eyJ2IjoiMSJ9.ybOiyI7m8EQxmkTBPomE0qLwe9IDbA2LQOEdDXk8mgif4CzPJnp3UgeCexRUENh825QSSBtHHpfjWd_9ZQWs3Y1IFIKAWDxjX_KX6u_KADs1a6gHKdbTlgpiqYhkIlHvL13dJ5jimiljx9Op1zvdJUGxE7nw2cG0F5Q6JJ8V1hMoZPVuxfiAU1ky9VSqFd9taG353N2pJVFOhayRSzU7DE9UuVss2Vi8qmfmxxKKulElDLNzm9SCtSMkvKoXun7XPkFoqg-qTuFfErrkDj-ZGNZwddlt6cMVPmrCXBQBO6o.p7xftl_AD4GJdAVjc-WW9BftnACWi66eXEY9QyHPF-Q&dib_tag=se&keywords=commander+deck+avatar&qid=1769225266&sprefix=commander+deck+avat%2Caps%2C274&sr=8-1"}
            imageLink={"https://m.media-amazon.com/images/I/81hXZ1Ib6gL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering | Avatar: The Last Airbender Commander’s Bundle"}
            price={"109.99"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Airbender-Jumpstart-2-Player/dp/B0FJNDCD6S/ref=sr_1_2?crid=2WAHWWMLJIMWT&dib=eyJ2IjoiMSJ9.J9gbUUFxUnPpFkANaYUtdQi8q9hOYX0Z7xpnE21QIv3hqJPltHPL6sTiYlq6gLCEQ17VBu3OpxgnHkiBme-JTKnuC2u7ycIciCRRxLt6JsJwEnaXxeZC8pcalm-VmMMxytoodC0GDT_qFRZ3klO1wC0OTIt_SPlvWjaRj6oaEivGE7p8a1BK2B3nrol5EQGzMYay3Q4SP_mz52GyYGwN3Pd4h4hJujBTAD9gMztaTQAwxqWiNgU8_-hOqTbQ_Gg_GBimBnzNMg7UBFeBqeoP_WdmjzvK985y1hdIJ7Bk7yw.JBZ6dzLXcDxn30bljIAykMggLyUjG0xkxDK3QJBCi1o&dib_tag=se&keywords=avatar+mtg&qid=1769232874&sprefix=bundle+avatar+mtg%2Caps%2C354&sr=8-2"}
            imageLink={"https://m.media-amazon.com/images/I/71Y+xb97+XL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering | Avatar: The Last Airbender Jumpstart Booster Box"}
            price={"85"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Middle-Earth-Commander-Collector/dp/B0BVMV7272/ref=sr_1_1?crid=1R839ZGA7NA1W&dib=eyJ2IjoiMSJ9.UWTbVKzhj4BxaQz2ZcVAxgPcuSKpFpE3E763V89IH3_TIF_i_s_JG0APcQsmaoc8ucV3PjzLDbhLDe5NHtrCwHcNYwMKzYL5JwcTVcjkxCEkh0-6d2BgvKyQgaedktTuu3gqIWh39HRLfcZ1Qt7459lFZnmR0LhWUiDrVExl0dP-1rRHfRQnji7y4Bm-kRIYAxRYhbo9ncyFXGRgnWIVfQ2rfZHhR4zE3fYp4a8EZBNc-FFNToP_ayHYWPdAaZEeLn6KcGiOcLLNReHtB5apwIPy5NIAaCibd0e527Kc3yw.ENCnBgib-BOSdYV4EGrxvys29GXUtl91xTi-YdPugk4&dib_tag=se&keywords=magic+the+gathering+the+lord+of+the+rings%3A+tales+of+middle-earth+commander+deck+2&nsdOptOutParam=true&qid=1766552393&sprefix=%2Caps%2C182&sr=8-1"}
            imageLink={"https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg"}
            title={"Magic The Gathering The Lord of The Rings: Tales of Middle-Earth Commander Deck 2 + Collector Booster Sample Pack"}
            price={"55"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Foundations-Starter-Collection/dp/B0D9KYHN4D/ref=sr_1_2?crid=1LL6DX9DNJO8O&dib=eyJ2IjoiMSJ9.TgMz6X4Q9EPzrSrH7_hWjPxhU4PneA8LgGLvOd0HWHdis8Vsu9kEdEgH27Qk_gJ_HNg6cJXTRhkhkL10GQNrsG9nrwaWLUzgxVuOx5TamHPMUKe5WRjWkxwcr04FMTuyHflRWWZDylDsDUrpRRZg-om3gCJ4ajTwRgrXN4iKWzGPk6yf4GEXOPeRuZpLTmhqCtYxoM_8G-C335OGiXjFww4s-FYU3cUf76G8VoCYm1Ldte9LnFR6tGFGwVT_bEx4YGZLaxK2m4RFEYlZolvRLmGAoHorTmhACoN-0bsU8RA.EQ2Yo7rYG8hVVu9NGQAF4dxSu11O0o6qKzvf7Th7GkM&dib_tag=se&keywords=starter%2Bkit%2Bmtg&qid=1769233331&sprefix=starter%2Bkit%2Bmtg%2Caps%2C306&sr=8-2&th=1"}
            imageLink={"https://m.media-amazon.com/images/I/71Y997rEAKL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering Foundations - Starter Collection"}
            price={"50"}
          />
        </div>
      </main>
    </div>
  );
}
