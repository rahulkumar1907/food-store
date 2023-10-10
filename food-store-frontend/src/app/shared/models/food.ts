// second step to make class food parametes need and step 3 put images in assest folder for make it global
export class Food {
    id!:string;
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string
}