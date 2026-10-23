import React from 'react';

export default function Index({ galleries }) {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Halaman Kelola Galeri (CMS Admin)</h1>
            <p>Data galeri dari backend berhasil tersambung. Jumlah foto yang ada: {galleries.length}</p>
        </div>
    );
}