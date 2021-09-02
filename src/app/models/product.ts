export class Product {
    
    constructor(id: number, name: string, price: number, description: string, categoryId: number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }

    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    imageUrl: string;

}