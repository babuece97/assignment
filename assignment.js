                    //     PART 1//


function kilometerToMeter (kilo ) {
    var meter= (kilo*1000);
   return meter;
   }

var myInput=kilometerToMeter(7);
console.log(myInput);
                        

                    // PART 2//

function buggetCalculator (numOfWat,numOfMob, numOfLap) {

    var result = numOfWat*50 + numOfMob*100 + numOfLap*500;
    return result;
}
var totalBudget = buggetCalculator (3, 2, 1);
console.log(totalBudget);



                             //PART 3 //



var totalDays = 21;
var hotelCost= 0;

if (totalDays<= 10) {
    hotelCost = totalDays*100;
} 
else if(totalDays <= 20) {
    var firstTenDaysCostt= 10*100;
    var restOfTenDays = totalDays -10;
    var afterTenDaysCostt = restOfTenDays * 80;
    hotelCost = firstTenDaysCostt+afterTenDaysCostt;
}
else {
    var firstTenDaysCosttt = 10*100;
    var afterTenDaysCosttt = 10* 80;
    var restOfTwentyDays = totalDays - 20;
    var afterTwentyDaysCost = restOfTwentyDays*50;
    hotelCost = firstTenDaysCosttt+afterTenDaysCosttt+afterTwentyDaysCost;
}
console.log (hotelCost); 


                    //PART 4//

var megaFriend =['Babu','Abu','Jamal','Rafiqul Islam', 'John'];
var max = megaFriend[0];

for (var i = 0; i < megaFriend.length; i++){
    var element = megaFriend[i];
    if (element> max) {
        max = element;
    }
}
console.log( "Largest name is: ", max);