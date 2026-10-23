<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gallery;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::latest()->get();
        return Inertia::render('Admin/Gallery/Index', [
            'galleries' => $galleries
        ]);
    }

    public function store(Request $request)
    {
        // Validasi ekstensi dan ukuran file maksimal 2MB
        $request->validate([
            'judul' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // Menyimpan file fisik ke folder storage/app/public/galleries
        $imagePath = $request->file('image')->store('galleries', 'public');

        // Menyimpan lokasi path gambar ke database
        Gallery::create([
            'judul' => $request->judul,
            'keterangan' => $request->keterangan,
            'image_path' => $imagePath,
        ]);

        return redirect()->back()->with('success', 'Foto berhasil diunggah ke galeri.');
    }
}