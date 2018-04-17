function grandTotal(departmentsTotal){
  var total = 0;
  for(var i=0;i< departmentsTotal.length;i++){
    total += (departmentsTotal[i].total);
     console.log(total);
  }
  return total;
}
