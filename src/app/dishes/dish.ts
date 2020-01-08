export class Dish {
    private id: number;
    private name: string;
    private price: number;
    private quantity: number;

    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public get $id(): number {
		return this.id;
    }
    public get $name(): string {
		return this.name;
    }
    public get $price(): number {
		return this.price;
    }
    public get $quantity(): number {
      return this.quantity;
      }
    public set $id(value:number) {
		this.id = value;
    }
    public set $name(value:string) {
		this.name = value;
    }
    public set $price(value:number) {
		this.price = value;
    }
    public set $quantity(value:number) {
      this.quantity = value;
      }
}
