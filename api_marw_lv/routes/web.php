<?php

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'TimelineController@index');
});

Auth::routes();

