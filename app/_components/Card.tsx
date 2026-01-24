import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    shopLink: string;
    imageLink: string;
    title: string;
    price: string;
}

export default function Card({ shopLink, imageLink, title, price }: CardProps) {
    return (
        <article className="flex flex-col items-center self-center gap-6 text-center sm:items-start sm:text-center">
            <Link href={shopLink}>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
                    <div className="flex self-center pt-2">
                        <Image
                            src={imageLink}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <h2 className="flex self-center">{title}</h2>
                    <p className="flex self-center pb-6">Precio: ${price}</p>
                </div>
            </Link>
        </article>
    );
}