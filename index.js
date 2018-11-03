// Code your solution in this file!


function logDriverNames(drivers) {
  drivers.forEach(function (curr){
    console.log(curr.name);
  });
}



function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (curr){
    if (curr.hometown === hometown){
      console.log(curr.name);
    }
  });
}



function driversByRevenue(drivers) {
  const lowToHighRev = drivers.sort(function (a, b){
    return a-b;
  });
}



function driversByName() {

}



function totalRevenue() {

}



function averageRevenue() {

}
