<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recepie extends Model
{
    protected $table = 'recepies';
    protected $fillable = [
    	'title', 
    	'short_description',
    	'categrory_id', 
    	'imgage',
    	'directions',
    	'ingredients',
    	'level',
    ]

    /**
     * Recepie belongs to Category.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
    	// belongsTo(RelatedModel, foreignKey = category_id, keyOnRelatedModel = id)
    	return $this->belongsTo(Category::class);
    }
}
