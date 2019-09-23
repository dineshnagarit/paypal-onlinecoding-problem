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


  
