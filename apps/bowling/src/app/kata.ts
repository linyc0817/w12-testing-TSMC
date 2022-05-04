export class Kata {
  price(arg0: number[]): any {
    // throw new Error('Method not implemented.');
    let bookNum = 0;
    if(!arg0.length)
        return 0;
    // console.log(arg0[3]);
    for (let i = 0; i < arg0.length; i++) {
        bookNum += arg0[i];
      }
    return bookNum*8;
  }
}
