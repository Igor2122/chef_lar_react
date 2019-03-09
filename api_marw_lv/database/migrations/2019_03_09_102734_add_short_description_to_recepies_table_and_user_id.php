<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddShortDescriptionToRecepiesTableAndUserId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recepies', function (Blueprint $table) {
            $table->text('short_description')->after('title');
            $table->boolean('promoted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recepies', function (Blueprint $table) {
            $table->dropColumn(['short_description', 'promoted']);
        });
    }
}
