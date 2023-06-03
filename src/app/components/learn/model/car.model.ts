export class Car{
  public name:string;
  public modelname:string;
  public id:number;
  public price:number;
  public year:number;
  constructor( name:string,modelname:string,id:number,price:number,year:number){
      this.name=name;
      this.modelname=modelname;
      this.id=id;
      this.price=price;
      this.year=year;
  }
}