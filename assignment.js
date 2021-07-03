// kilometerToMeter:
function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var result = kilometerToMeter(5);
console.log(result);

// butgetCalculator:
function butgetCalculator(watch, phone, laptop) {
  var result = watch + phone + laptop;
  return result;
}
// watch-2, phone-3,laptop-3.
var totalButget = butgetCalculator(50 * 3, 100 * 2, 500 * 3);
console.log(totalButget);

// hotelCost:
function hotelCost(days) {
  var cost = 0;
  if (days <= 10) {
    cost = days * 100;
  }
  else if (days <= 20) {
    var firstStay = 10 * 100;
    var remainingDays = days - 10;
    var secondStay = remainingDays * 80;
    cost = firstStay + secondStay;
  }
  else {
    var firstStay = 10 * 100;
    var secondStay = 10 * 80;
    var remainingDays = days - 20;
    var thirdStay = remainingDays * 50;
    cost = firstStay + secondStay + thirdStay;
  }
  return cost;
}
var totalCost = hotelCost(27);
console.log(totalCost);

// megaFriend:
function megaFriend(name) {
  var mega = '';
  for (var i = 0; i < name.length; i++) {
    var element = name[i];
    if (element.length > mega.length) {
      mega = element;
    }
  }
  return mega;
}
var friendsName = ['Rahim', 'Karim', 'Salam', 'Jabbar'];
var result = megaFriend(friendsName);
console.log(result);
