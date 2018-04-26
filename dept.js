function grandTotal(departmentsTotal){
  var total = 0;
  for(var i=0;i< departmentsTotal.length;i++){
    total += (departmentsTotal[i].total);
     console.log(total);
  }
  return total;
}
















var ToletriesDept = {name: "toletries", total: 5007};
var GroceriesDept  = {name: "Groceries", total: 11089};
var PharmacyDept = {name: "Pharmacy", total: 7321};
var BakeryDept = {name: "Bakery", total: 10073};
var ButcheryDept = {name: "Butchery", total: 9053};

console.log(GroceriesDept.name)
 console.log(ToletriesDept.name)
 console.log(PharmacyDept.name)
 console.log(BakeryDept.name)
 console.log(ButcheryDept.name);



var depts = [];
depts.push(ToletriesDept);
depts.push(PharmacyDept);
depts.push(GroceriesDept);
depts.push(BakeryDept);
depts.push(ButcheryDept);

/*unction grandTotal(departmentsTotal){
  var total = 0;
  for(var i=0;i< depts.length;i++){
    total += (depts[i].total);
    console.log(depts[i].name);
     console.log(depts[i].total);
  //  var grandTotal = grandTotal.split(',');
  }
  console.log(total);
}
grandTotal(depts)
*/
