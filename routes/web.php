<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin\MemberController;
use App\Http\Controllers\Admin\GalleryController;
use Illuminate\Support\Facades\Route;

// Rute Publik (Menampilkan web utama tanpa perlu login)[cite: 1]
Route::get('/', [PublicController::class, 'index'])->name('home');

// Rute CMS Admin (Sistem keamanan NFR-03: Hanya bisa diakses setelah login)[cite: 2]
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    // Men-generate rute otomatis untuk CRUD (create, read, update, delete)
    Route::resource('members', MemberController::class);
    Route::resource('gallery', GalleryController::class);
});

require __DIR__.'/auth.php';
