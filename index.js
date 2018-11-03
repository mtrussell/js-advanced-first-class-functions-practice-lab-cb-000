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
  const driversCopy = [...drivers];
  driversCopy.sort(function (a, b){
    const revA = a.revenue;
    const revB = b.revenue;
    return revA - revB;
  });
  return driversCopy;
}



function driversByName(drivers) {
  const driversCopy;
  driversCopy.sort(function (a, b){
    const driverA = a.name;
    const driverB = b.name;
    return a.localeCompare(b);
  };
}



function totalRevenue() {

}



function averageRevenue() {

}
