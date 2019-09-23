# paypal-onlinecoding-problem
Paypal online coding test.

Please complete the following challenges to the best of your ability.

Transaction Processing
You will be provided with a list of transactions from a consumer bank account and you need to process them.


Some information to help you:
Each transaction has the following information:

Transaction ID
Source account number
Target account number
Amount (expenses are negative values, income transactions are positive values)
Transaction time (date and time to seconds precision)
Category (one of the following values: 'groceries', 'eating_out', 'other', 'salary')
The transactions are not sorted in any particular order.

Example transaction objects
Expense:

{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-12T12:34:00Z'
}
Income:

{
  id: 123,
  sourceAccount: 'the_company',
  targetAccount: 'my_account',
  amount: 10000,
  category: 'salary',
  time: '2018-03-01T08:00:00Z'
}




2 Challenges
This is the total number of challenges in the assessment represented and navigable by the dots on the left-hand sidebar. You must attempt each challenge before submitting.

The following languages may be used in this assessment:


  Question 1: Calculate the balance in a specific category within the specified time period

  Question 2: Find all transactions that have the same source, target, category, amount, and with a time differenceof less than 1 minute.






Sometimes when a customer is charged, there is a duplicate transaction created. We need to find those transactions so that they can be dealt with. Everything about the transaction should be identical, except the transaction id and the time at which it occurred, as there can be up to a minute delay.

findDuplicateTransactions(transactions)

Find all transactions that have the same sourceAccount, targetAccount, category, amount, and the time difference between each consecutive transaction is less than 1 minute.

Input
You can assume that all parameters will always be present and valid. However, the incoming transactions are not guaranteed to be in any particular order.

list of transactions (Transaction[])
Output
list of all the duplicate transaction groups, ordered by time ascending (Transaction[][]) The groups should be sorted in ascending order of the first transaction in the group.
Example
Input transactions:

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
];
Expected output:

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
];
