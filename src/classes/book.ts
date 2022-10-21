export class Book {
  /**
   * Technically property has a setter, but for documentation purposes it should
   * be presented as readonly.
   * @readonly
   */
  public get title(): string {
    return this.title;
  }

  public set title(value: string) {
    throw new Error("This property is read-only!");
  }
}
