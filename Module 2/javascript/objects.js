//empty object, have key value pair like dictionary
let obj = {};
console.log(obj)
let ob={
    "name": 'manik', "age":98,number:9887766
}
console.log(ob)

let avengers={
    name:'steve',
    friends:['natasha','thor','bucky'],
    baap: 'iron man',
    age:99,
    address : {
        city: 'haryana',
        state:'queens'
    },
    sayhi:function(){
        console.log('this function inside object is running');
    }

}
console.log(avengers.address.city)
avengers.sayhi()
//adding new  key 
avengers.movies=['avengers','civil war','captain america']

//delete key
delete avengers.friends
console.log(avengers)