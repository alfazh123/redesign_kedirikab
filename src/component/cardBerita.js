import Image from 'next/image';

export default function cardBerita({ title, image, description }) {
    return (
        <main>
            <div className="card card-compact max-w-96 bg-slate-100 text-balck shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </main>
    );
}
