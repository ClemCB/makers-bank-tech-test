## Makers Challenge: Bank Tech Test

Makers mock tech test to help get some practice in ahead of the real deals. I chose to work in vanilla JavaScript, using Jasmine for testing. All user stories and work my own.

In this challenge, I was interested in creating a polymorphic function (`makeTransaction`). `makeTransaction` is called by the Bank on an Account when the Bank receives a request to deposit or withdraw funds. This worked fairly successfully (see below for challenges).

```
As a customer,
So that I can keep track of my finances,
I want to be able to set up an account in my name.

As a customer,
So that I can keep track of my finances,
I want to see my total monetary balance.

As a customer,
So that I can save money,
I want to be able to deposit funds.

As a customer,
So that I can spend my money,
I want to be able to withdraw funds.

As a customer,
So that I can keep track of my spending,
I want to know the date I made withdraws and deposits.

As a customer,
So that I can track all my banking activity,
I want to be able to get a printed statement with dates of all my transactions.
```

### How to use

- After you've cloned this repo and ` cd ` 'd into it, `open SpecRunner.html` to see all tests.
- Interact with this programme in the browser console:

```
var bank = new Bank()
> undefined

bank
> Bank {accounts: Array[0]}

bank.createAccount("Clem")
> undefined

bank
> Bank {accounts: Array[1]}

bank.deposit("Clem", 4000)
> "Deposit of £4000 successfully made"

bank.withdraw("Clem", 200)
> "Withdraw of £200 successfully made"

bank.checkBalance("Clem")
> 3800

bank.viewStatement("Clem")
> "date || credit || debit || balance
18/4/2017 || 4000 ||   || 4000
18/4/2017 ||   || 200 || 3800"

bank.viewStatement("Charlie")
> "This account does not exist"

```

### Technology

- Vanilla JavaScript
- Jasmine (Testing)

### Challenges

- Keeping code DRY when requiring the user to interact with the Bank object rather than their accounts directly. I needed to loop through the array of accounts on every function call. This was a design decision I made in order for a central Bank to hold multiple accounts.
- Working without a database required some immediate formatting of dates.
- Interest in creating a polymorphic function led the need to remove 'undefined' values from transaction history before printing bank statements to the user.
- Time restraints prevented full coverage of test cases (I would introduce checks for integers and introduce limits on withdrawals).
