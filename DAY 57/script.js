function shop(productname , productprice, productstock) {
    this.productname = productname;
    this.productprice = productprice;
    this.productstock = productstock;
}

let first = new shop("Pen" , 100 , 250);
console.log(first)
console.log(first.productname)

let second = new shop("Easer",10,270);
console.log(second)


function info(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

let entry1 =new info(11,12,1222);
console.log(entry1)

let entry2 = new info(22,33,56);
console.log(entry2)