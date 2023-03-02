<?php

namespace App\Http\Controllers;

use App\Models\Month;
use App\Models\Day;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Validator;

class CalenderController extends Controller
{
    //
    public function monthDayList() 
    {
        $data = [];
        $data['months'] = Month::all()->pluck('month');
        $data['days'] = Day::all()->pluck('day');
        return response()->json($data,Response::HTTP_OK);
    }

    public function scheduleList($date) 
    {
        $data = Schedule::where('date','like','%'.$date.'%')->get();
        return response()->json($data,Response::HTTP_OK);
    }

    public function addSchedule(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required|date',
            'task' => 'required|string|max:255',
        ]);
 
        if ($validator->fails()) {
            return response()->json($validator->errors()->all(),Response::HTTP_BAD_REQUEST);
        }

        Schedule::create($request->all());

        $data = Schedule::where('date',$request->date)->get();

        return response()->json($data,Response::HTTP_OK);
    }

    public function updateSchedule($id,Request $request) 
    {
        $schedule = Schedule::find($id);
        $schedule->task = $request->task;
        $schedule->save();

        return response()->json($schedule,Response::HTTP_OK);
    }

    public function deleteSchedule($id) 
    {
        $schedule = Schedule::find($id);
        $schedule->delete();
        
        return response()->json([],Response::HTTP_OK);
    }
}
