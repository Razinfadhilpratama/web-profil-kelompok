<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::all();
        return Inertia::render('Admin/Members/Index', [
            'members' => $members
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input dari form frontend
        $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|string|unique:members',
            'peran' => 'required|string|max:100',
            'deskripsi_diri' => 'required|string',
        ]);

        // Menyimpan data ke tabel members
        Member::create($request->all());

        // Mengembalikan pengguna ke halaman yang sama (refresh data)
        return redirect()->back()->with('success', 'Data anggota berhasil ditambahkan.');
    }
}
