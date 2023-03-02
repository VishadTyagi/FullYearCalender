<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('month-day-list','App\Http\Controllers\CalenderController@monthDayList');
Route::post('schedule','App\Http\Controllers\CalenderController@addSchedule');
Route::get('schedule/{date}','App\Http\Controllers\CalenderController@scheduleList');
Route::patch('schedule/{id}','App\Http\Controllers\CalenderController@updateSchedule');
Route::delete('schedule/{id}','App\Http\Controllers\CalenderController@deleteSchedule');
