<?php

use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin\MemberController;
use App\Http\Controllers\Admin\GalleryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute Publik (Landing Page)
Route::get('/', [PublicController::class, 'index'])->name('home');

// Rute Profil Member Individual
Route::get('/member/{id}', function ($id) {
    return Inertia::render('Public/MemberProfile', ['id' => $id]);
})->name('member.profile');

// Rute Login
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

// Rute CMS Admin
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('members', MemberController::class);
    Route::resource('gallery', GalleryController::class);
});

require __DIR__.'/auth.php';