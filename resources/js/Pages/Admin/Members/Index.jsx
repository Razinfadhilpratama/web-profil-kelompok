import React from 'react';

export default function Index({ members }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Halaman Kelola Anggota (CMS Admin)</h1>
            <p>Data dari backend berhasil tersambung. Jumlah anggota: {members.length}</p>
        </div>
    );
}