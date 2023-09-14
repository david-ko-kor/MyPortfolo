let age:number;


let username:string;
let bool:boolean;


let people:Person




let cartitem:Person[];

cartitem=[{
    age:1,
    name:'김치찌게'
},
{
    age:2,
    name:'김치찌게'
},
{
    age:3,
    name:'김치찌게'
},
{
    age:4,
    name:'김치찌게'
}
]

type Person={
    name:string,
    age:number
}
let goremi:string|number[] ='안녕하세요'

goremi=[111111]

function food<T>(array:T[],value:T){

    const newArray =[value,...array]
    return newArray
}


let data =[1,2,3]
let menu=['짜장면','탕수육','짬뽕']
const newone = food(data,10)
console.log(newone)
food(menu,'양장피')
