<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Gallery;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function index()
    {
        // Mengambil semua data anggota dan foto galeri terbaru dari database
        $members = Member::all();
        $galleries = Gallery::latest()->get();

        // Mengirimkan data (props) ke komponen React di folder resources/js/Pages/Public/Home.jsx
        return Inertia::render('Public/Home', [
            'members' => $members,
            'galleries' => $galleries
        ]);
    }
}
