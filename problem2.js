let  isArrayItemExists = (array , item) => {
    if(array.length==0) { return false; }
        for ( let i = 0; i < array.length; i++ ) {
            if(JSON.stringify(array[i]) == JSON.stringify(item)){
                return true;
            }
        }
        return false;
}


function findDuplicateTransactions (transactions = []) {
    if(transactions.length == 0){
        return {};
    }
    
    let groupedTransactionsdArray = [];
    let filteredArray = [];
     // Filter objects based on same source , target , category and amount.
    transactions.forEach((row,index) => {
      let transactionObject = row;
      let filteredObjects = transactions.filter(innerRow => {
           return (row.sourceAccount == innerRow.sourceAccount &&
                   row.targetAccount == innerRow.targetAccount &&
                   row.amount == innerRow.amount &&
                   row.category == innerRow.category)
      });
      
      // Avoid duplicates
      if(!isArrayItemExists(filteredArray,filteredObjects)){
        filteredArray.push(filteredObjects);
      }
    });
     
    // Sort in ascending order 
    let transactionsInAscendingOrder = [];
     filteredArray.forEach((row,index) => {
      let sortedBasedOnTime =  row.sort(function(a,b){
          return ( (new Date(a.time) - new Date(b.time)) )
      });
     transactionsInAscendingOrder.push(sortedBasedOnTime);
     }); 
     
      let transactionsBasedOnTimeDifference = transactionsInAscendingOrder.map((tr, i) => {
      return tr.filter((t, j) => {
        if (transactionsInAscendingOrder[i][j - 1]) {
          let d1 = new Date(t.time);
          let d2 = new Date(transactionsInAscendingOrder[i][j - 1].time);
          return (d1.getTime() - d2.getTime()) <= 60000;
        }
        return true;
       });
     });
    
    console.log('final result',transactionsBasedOnTimeDifference);
    return transactionsBasedOnTimeDifference
    
}



  
let assert = require("chai").assert;

describe("findDuplicateTransactions()", function() {

it("returns empty array if there are no transactions", function() {
    assert.equal(findDuplicateTransactions([]), {});
});


it("Removes duplicates", function() {
    assert.equal(findDuplicateTransactions(
[
  {
    id: 3,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:34:30.000Z'
  },
  {
    id: 1,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:00.000Z'
  },
  {
    id: 6,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:05.000Z'
  },
  {
    id: 4,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:36:00.000Z'
  },
  {
    id: 2,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:50.000Z'
  },
  {
    id: 5,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:00.000Z'
  }
]
),
 [
   [
    {
      id: 1,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 2,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:50.000Z"
    },
    {
      id: 3,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:34:30.000Z"
    }
  ],
  [
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z"
    }
  ]
]);
});
});
  
