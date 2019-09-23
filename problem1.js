let getBalanceByCategoryInPeriod = (transactions = [], category, start, end) => {
  
    if(transactions.length == 0){
      return 0;
    }
    
    let categoryArray = ['groceries', 'eating_out', 'other', 'salary'];
    if(categoryArray.indexOf(category)>-1 === false) {
       return 'category mismatched!';
    }
    
    let startTime = start.toISOString()
    let endTime = end.toISOString()
   
    let filteredCategoryArray = transactions.filter(d => {
        let time = new Date(d.time).toISOString();
        return (time >= startTime && time < endTime && d.category === category);
    });
    
   let balanceAmount = 0;
    filteredCategoryArray.forEach((row,index) => {
     balanceAmount += parseInt(row.amount);
    });
   return balanceAmount;
   console.log('filteredCategoryArray',filteredCategoryArray);
  }




let assert = require("chai").assert;

describe("getBalanceByCategoryInPeriod()", function() {
  
  it("returns 0 if there are no transactions", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
         [],
        "groceries",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      0
    );
  });
  
 it("Category must be one of the following values: 'groceries', 'eating_out', 'other', 'salary'", function() {
    assert.equal(
       getBalanceByCategoryInPeriod(
         [{
          id: 123,
          sourceAccount: 'my_account',
          targetAccount: 'coffee_shop',
          amount: -30,
          category: 'eating_outs',
          time: '2018-03-01T12:34:00Z'
         }],
        "salaries",
         new Date("2018-03-01"),
         new Date("2018-03-31")
      ),
      'category mismatched!'
    );
  });
  
  
  it("Calculates the balance in a specific category within the specified time period, based on transaction objects of the array", function() {
    assert.equal(
       getBalanceByCategoryInPeriod(
         [{
          id: 123,
          sourceAccount: 'my_account',
          targetAccount: 'coffee_shop',
          amount: -20,
          category: 'eating_out',
          time: '2018-03-01T12:34:00Z'
      },
      {
          id: 345,
          sourceAccount: 'the_company',
          targetAccount: 'my_account',
          amount: 10,
          category: 'salary',
          time: '2018-03-12T06:34:00Z'
      },
      {
          id: 761,
          sourceAccount: 'my_account',
          targetAccount: 'gorcery_shop',
          amount: -10,
          category: 'groceries',
          time: '2018-03-04T11:30:00Z'
      },
      {
          id: 981,
          sourceAccount: 'the_company',
          targetAccount: 'my_account',
          amount: 15,
          category: 'salary',
          time: '2018-03-25T05:14:00Z'
      },
      {
          id: 653,
          sourceAccount: 'the_company',
          targetAccount: 'my_account',
          amount: 5,
          category: 'salary',
          time: '2018-03-18T10:20:00Z'
      },
      {
          id: 190,
          sourceAccount: 'my_account',
          targetAccount: 'gorcery_shop',
          amount: -100,
          category: 'groceries',
          time: '2019-03-31T12:34:00Z'
      },

      {
          id: 981,
          sourceAccount: 'the_company',
          targetAccount: 'my_account',
          amount: 50000,
          category: 'salary',
          time: '2019-01-10T12:34:00Z'
      },
      ],
        "salary",
         new Date('2018-03-01'),
         new Date('2018-03-31')
      ),
      30
    );
  });
});
