export class Dish {
    private id: number;
    private name: string;
    private price: number;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
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
    public set $id(value:number) {
		this.id = value;
    }
    public set $name(value:string) {
		this.name = value;
    }
    public set $price(value:number) {
		this.price = value;
    }
}
