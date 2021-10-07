export class PurchaseDto {
  constructor(
    public id: number,
    public ownerId: number,
    public name: string,
    public price: number,
  ) {
  }
}
