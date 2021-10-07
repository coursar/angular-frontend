export class PurchaseModel {
  constructor(
    public id: number,
    public ownerId: number,
    public name: string,
    public price: string,
  ) {
  }
}
