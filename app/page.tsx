import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center pb-4">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Kvothe&apos;s Wishlist.
          </h1>
          <p>Holi, Azana! Esta es una lista de cosas que el capitalismo ha puesto en mi mente.</p>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
          <article className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
            <Link href="https://www.amazon.com/Magic-Gathering-Middle-Earth-Commander-Collector/dp/B0BVMV7272/ref=sr_1_1?crid=1R839ZGA7NA1W&dib=eyJ2IjoiMSJ9.UWTbVKzhj4BxaQz2ZcVAxgPcuSKpFpE3E763V89IH3_TIF_i_s_JG0APcQsmaoc8ucV3PjzLDbhLDe5NHtrCwHcNYwMKzYL5JwcTVcjkxCEkh0-6d2BgvKyQgaedktTuu3gqIWh39HRLfcZ1Qt7459lFZnmR0LhWUiDrVExl0dP-1rRHfRQnji7y4Bm-kRIYAxRYhbo9ncyFXGRgnWIVfQ2rfZHhR4zE3fYp4a8EZBNc-FFNToP_ayHYWPdAaZEeLn6KcGiOcLLNReHtB5apwIPy5NIAaCibd0e527Kc3yw.ENCnBgib-BOSdYV4EGrxvys29GXUtl91xTi-YdPugk4&dib_tag=se&keywords=magic+the+gathering+the+lord+of+the+rings%3A+tales+of+middle-earth+commander+deck+2&nsdOptOutParam=true&qid=1766552393&sprefix=%2Caps%2C182&sr=8-1">
              <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
                <div className="flex self-center pt-2">
                  <Image
                    src="https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <h2>Magic The Gathering The Lord of The Rings: Tales of Middle-Earth Commander Deck 2 + Collector Booster Sample Pack</h2>
                <p className="flex self-center pb-6">Precio: $130.56</p>
              </div>
            </Link>
          </article>
        </div>
      </main>
    </div>
  );
}
