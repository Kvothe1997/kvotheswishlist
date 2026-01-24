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
            shopLink={"https://www.amazon.com/Magic-Gathering-Commanders-Borderless-Accessories/dp/B0FHJJS17L/ref=sr_1_1?crid=25B8116MSZA7J&dib=eyJ2IjoiMSJ9.ybOiyI7m8EQxmkTBPomE0qLwe9IDbA2LQOEdDXk8mgif4CzPJnp3UgeCexRUENh825QSSBtHHpfjWd_9ZQWs3Y1IFIKAWDxjX_KX6u_KADs1a6gHKdbTlgpiqYhkIlHvL13dJ5jimiljx9Op1zvdJUGxE7nw2cG0F5Q6JJ8V1hMoZPVuxfiAU1ky9VSqFd9taG353N2pJVFOhayRSzU7DE9UuVss2Vi8qmfmxxKKulElDLNzm9SCtSMkvKoXun7XPkFoqg-qTuFfErrkDj-ZGNZwddlt6cMVPmrCXBQBO6o.p7xftl_AD4GJdAVjc-WW9BftnACWi66eXEY9QyHPF-Q&dib_tag=se&keywords=commander+deck+avatar&qid=1769225266&sprefix=commander+deck+avat%2Caps%2C274&sr=8-1"}
            imageLink={"https://m.media-amazon.com/images/I/81hXZ1Ib6gL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering | Avatar: The Last Airbender Commander’s Bundle"}
            price={"109"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Airbender-Accessories-Collectible/dp/B0FHJGC6N7/ref=sr_1_28?crid=34FPBALT9UPRX&dib=eyJ2IjoiMSJ9.ybOiyI7m8EQxmkTBPomE0rpAJd_luJAD1UIkIDCRgblfErPRmFw8IVRFL0E7c-Wvv6h5rl9PbjfJN53dRDrAi9leYXnWv_B7lWIDPFqIr9VF8uj-P8hzBygoKuV73wDvytoodC0GDT_qFRZ3klO1wE3uh3U_d8yAFNV9fZnU7XxFeTzPgRD2Lh-YGFmmeESFa2fXA-nEe57JTQQvwzAW07NLtlQfV4-sZB4r6NkWlt9oQUfof1My_JinFsxl1nWydOuyVURn0vOJWr4s41ht6rZaikAmnSk_axow1p08AOQ.hGHJEDmE4mTHl0drQfr1eghfrLN22H7SX-PR5Hmc2PQ&dib_tag=se&keywords=bundle+avatar+mtg&qid=1769225621&sprefix=bundle+avatar+mt%2Caps%2C212&sr=8-28"}
            imageLink={"https://m.media-amazon.com/images/I/71UwQseCCfL._AC_SL1500_.jpg"}
            title={"Magic: The Gathering | Avatar: The Last Airbender Bundlee"}
            price={"69.99"}
          />
          <Card
            shopLink={"https://www.amazon.com/Magic-Gathering-Middle-Earth-Commander-Collector/dp/B0BVMV7272/ref=sr_1_1?crid=1R839ZGA7NA1W&dib=eyJ2IjoiMSJ9.UWTbVKzhj4BxaQz2ZcVAxgPcuSKpFpE3E763V89IH3_TIF_i_s_JG0APcQsmaoc8ucV3PjzLDbhLDe5NHtrCwHcNYwMKzYL5JwcTVcjkxCEkh0-6d2BgvKyQgaedktTuu3gqIWh39HRLfcZ1Qt7459lFZnmR0LhWUiDrVExl0dP-1rRHfRQnji7y4Bm-kRIYAxRYhbo9ncyFXGRgnWIVfQ2rfZHhR4zE3fYp4a8EZBNc-FFNToP_ayHYWPdAaZEeLn6KcGiOcLLNReHtB5apwIPy5NIAaCibd0e527Kc3yw.ENCnBgib-BOSdYV4EGrxvys29GXUtl91xTi-YdPugk4&dib_tag=se&keywords=magic+the+gathering+the+lord+of+the+rings%3A+tales+of+middle-earth+commander+deck+2&nsdOptOutParam=true&qid=1766552393&sprefix=%2Caps%2C182&sr=8-1"}
            imageLink={"https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg"}
            title={"Magic The Gathering The Lord of The Rings: Tales of Middle-Earth Commander Deck 2 + Collector Booster Sample Pack"}
            price={"130.56"}
          />
        </div>
      </main>
    </div>
  );
}
