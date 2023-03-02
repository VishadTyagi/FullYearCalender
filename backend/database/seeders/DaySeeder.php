<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $timestamp = strtotime('next Monday');
        for ($i = 0; $i < 7; $i++) {
            DB::table('days')->insert([
                'day' => substr(date("D", $timestamp), 0, 3),
            ]);
            $timestamp = strtotime('+1 day', $timestamp);
        }
    }
}
