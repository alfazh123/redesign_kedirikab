export default function CardPotensi({ title, description, number }) {
    return (
        <div>
            <div className="card  md:w-90 xl:w-90 lg:w-90 sm:w-64  bg-slate-100  text-slate-800 rounded-none">
                <div className="card-body ">
                    <h2 className="card-title ">{title}</h2>
                    <p>{description}</p>
                    <p className="flex text-slate-300">{number}</p>
                </div>
            </div>
        </div>
    );
}
