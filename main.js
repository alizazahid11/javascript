let car={
    name:"bmw",
    model:2020,
    color:"black",
    canDrive: function(){
        return "you can drive this car."},
    
            isOld:function(){
                let date = new Date("1-1-2020");
                let date1 = new Date("1-1-2023");
                return date>date1
            },
            carSpeed: function(){
                return "dont do overspeeding"
            }
}
// console.log(car);
// console.log(car.color);
// car.color="white";
// console.log(car);
// car.make="toyota";
// console.log(car);
// delete car.model;
 let drive = car.canDrive();
 console.log(drive)
console.log(car.isOld())
console.log(car.carSpeed())