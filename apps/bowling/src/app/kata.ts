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

  isValidKey(key:string|number|symbol, object:object): key is keyof typeof object {
    return key in object;
  }

  pickComb(dict:{[key: number]: number}, combNum: number){
    // Get the first N category that have most counts 
    // Create items array
    let items = Object.keys(dict).map((key) => {
      if(this.isValidKey(key,dict)){
        return [key, dict[key]];
      }
      return [];
    });
    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1] - first[1];
    });
    // Create a new array with only the first 2 items
    let tmp: number[] = [];
    let tmpArray = items.slice(0,combNum);
    const iterator = tmpArray.keys();
    for(const key of iterator){
      tmp.push(Number(tmpArray[key][0]));
    }
    return tmp;
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

    if(Object.keys(argDict).length == bookNum){
      // no duplicate book
      // if cant find bookNum in dic, discount will be 1
      let discount = discountDict.get(bookNum) || 1;
      return minPrice*discount;
    }
    else{
      let maxCategory = Object.keys(argDict).length;

      for(let i = maxCategory; i>=1;i--){
        let comb = this.pickComb(argDict,i);
        let combDiscount = discountDict.get(comb.length) || 1;
        let combPrice = 8*comb.length*combDiscount;
        // if the remain books have the largest discount still can't be more cheaper
        if(8*(arg0.length - i)*0.75 > minPrice - combPrice)
          continue;
        // Remove comb books 
        let tmpBasket = Object.assign([],arg0);
        combPrice += this.price(this.removeBooks(tmpBasket,comb))
        if( combPrice < minPrice){
          minPrice = combPrice;
        }
      }
    };

    return minPrice;
  }
}
