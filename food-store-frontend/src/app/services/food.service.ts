// services used when no html require and component when html require
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { food_sample, sample_tags } from '../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { 
  }
  getAll():Food[]{
    return food_sample;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags
  }
  
  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => {
        const tagsArray = Array.isArray(food.tags) ? food.tags : []; // Ensure it's an array or use an empty array
        
        return tagsArray.some(tagItem => tagItem.toLowerCase().includes(tag.toLowerCase()));
      });
      
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

  
}
