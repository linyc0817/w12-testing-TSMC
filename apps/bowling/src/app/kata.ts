export class Kata {
  changeDict(arg0 : number[]): { [key: number]: number } {
    const count = arg0.reduce((a:any, b:any) => ({ ...a,
      [b]: (a[b] || 0) + 1
    }), {})

    return count;
  };

  removeBooks(basket : number[], removeObject: number[]){
    while(removeObject.length){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const index = basket.indexOf(removeObject.pop()!);
      if(index !== -1){
        basket.splice(index,1);
      }
    }
    return basket;
  }

  price(arg0: number[]): any {
    // throw new Error('Method not implemented.');
    let bookNum = arg0.length;
    let minPrice = 8*bookNum;
    // Discount dictionary
    const discountDict: Map<number, number> = new Map();
    discountDict.set(0, 1);
    discountDict.set(1, 1);
    discountDict.set(2, 0.95);
    discountDict.set(3, 0.9);
    discountDict.set(4, 0.8);
    discountDict.set(5, 0.75);

    // Change book list into dictionary
    let argDict = this.changeDict(arg0);
    
    if(arg0.length == 5){
      let removeObject = [0,1,3];
      let tmpBasket = Object.assign([],arg0);
      this.removeBooks(tmpBasket,removeObject);
    }

    if(Object.keys(argDict).length == bookNum){
      // no duplicate book
      // if cant find bookNum in dic, discount will be 1
      let discount = discountDict.get(bookNum) || 1;
      return minPrice*discount;
    }

    return minPrice;
  }
}
