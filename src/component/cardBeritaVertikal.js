import React from 'react';

export default function cardBeritaVertikal({ title, description }) {
    return (
        <main>
            <div className="card w-full bg-slate-300 my-5 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </main>
    );
}
