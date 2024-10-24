<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $pass = '1234';
         User::create([
            'name' => 'Admin',
            'email' => 'admin@correo.com',
            'password' => Hash::make($pass),
             'role' =>'admin',
         ]);
    }
}
