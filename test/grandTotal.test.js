var departmentsTotal = [
 {name: "toletries", total: 5007},
 {name: "Groceries", total: 11089},
 {name: "Pharmacy", total: 7321},
 {name: "Bakery", total: 10073},
 {name: "Butchery", total: 9053}];

describe('grandTotal' , function(){
    it('should calculate the total sales for all the departments', function(){
        assert.deepEqual(42543, grandTotal(departmentsTotal))
    });
    it('should return the list of depts', function(){
        assert.notDeepEqual('', grandTotal(departmentsTotal))
    });
});
