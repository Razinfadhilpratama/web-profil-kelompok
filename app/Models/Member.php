<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = ['nama', 'nim', 'peran', 'deskripsi_diri', 'foto_profil'];
}
