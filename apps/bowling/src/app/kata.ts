export class Kata {
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


    // for (let i = 0; i < arg0.length; i++) {
    //     bookNum += arg0[i];
    // }
    const count = (arg0:any) =>
      arg0.reduce((a:any, b:any) => ({ ...a,
        [b]: (a[b] || 0) + 1
    }), {});
    // Change book list into dictionary
    let argDict = count(arg0);
    

    if(Object.keys(argDict).length == bookNum){
      // no duplicate book
      // if cant find bookNum in dic, discount will be 1
      let discount = discountDict.get(bookNum) || 1;
      return minPrice*discount;
    }

    return minPrice;
  }
}
