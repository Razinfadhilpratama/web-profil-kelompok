import React from 'react';

export default function Home({ members, galleries }) {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Halaman Publik (Testing Backend)</h1>
            <p>Jika halaman ini tampil, berarti Controller Backend sudah berhasil tersambung!</p>
        </div>
    );
}