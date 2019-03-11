<?php

// Route::group(['middleware' => 'auth'], function () {
//     Route::get('/', 'TimelineController@index');
// });

Route::resource('/test', 'TestController');

Auth::routes();

