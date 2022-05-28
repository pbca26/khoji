interface myArr {
  id: number,
  name: string,
}

let arr: myArr = {
  id: 0,
  name: '123'
}

arr = {
  id: 123,
  name: '123'
};

let arr2: Array<myArr> = [];

for (let i = 0; i < 10; i++) {
  arr2.push({
    id: i,
    name: 'n' + i
  });
}

class myArrx {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getFullName(): string {
    return this.id + ' ' + this.name;
  }
}

class myArrx2 extends myArrx {
  code?: string;

  constructor(id: number, name: string, code?: string) {
    super(id, name);
    this.code = code;
  }

  getCode(): string {
    return this.code;
  }
}

let arr3 = new myArrx(123, '123');

console.log(arr3);
console.log(arr3.getFullName());

let arr4 = new myArrx2(123, '123', '123');

console.log(arr4);
console.log(arr4.getFullName());
console.log(arr4.getCode());