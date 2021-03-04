Feature: Verify the Customer Transactions feature on Bank Application

    Scenario Outline: To make a deposit into bank account
        Given user is on Bank application as a Customer
        When user selects "<customerName>" to login
        And user makes a deposit of "<amount>"
        Then user should see the message "<message>"
        And user should have a balance of "<amount>"
        And user logs out of the application

        Examples:
            | customerName | amount | message            |
            | Ron Weasly   | 1001   | Deposit Successful |

    Scenario Outline: To make a withdrawal from bank account
        Given user is on Bank application as a Customer
        When user selects "<customerName>" to login
        And user makes a deposit of "<depositAmount>"
        Then user should see the message "<depositMessage>"
        And user should have a balance of "<depositAmount>"
        And user makes a withdrawal of "<withdrawalAmount>"
        And user should see the message "<withdrawalMessage>"
        And user should have a balance of "<balanceAmount>"
        And user logs out of the application

        Examples:
            | customerName | depositAmount | depositMessage     | withdrawalAmount | withdrawalMessage      | balanceAmount |
            | Harry Potter | 5001          | Deposit Successful | 1001             | Transaction successful | 4000          |

    Scenario Outline: To make a invalid withdrawal from bank account
        Given user is on Bank application as a Customer
        When user selects "<customerName>" to login
        And user makes a withdrawal of "<withdrawalAmount>"
        Then user should see the message "<withdrawalMessage>"
        And user logs out of the application

        Examples:
            | customerName       | withdrawalAmount | withdrawalMessage                                                      |
            | Neville Longbottom | 101              | Transaction Failed. You can not withdraw amount more than the balance. |

    Scenario Outline: To verify the transactions history of the account
        Given user is on Bank application as a Customer
        When user selects "<customerName>" to login
        And user makes a deposit of "<depositAmount>"
        Then user should see the message "<depositMessage>"
        And user should have a balance of "<depositAmount>"
        And user makes a withdrawal of "<withdrawalAmount>"
        And user should see the message "<withdrawalMessage>"
        And user should have a balance of "<balanceAmount>"
        And user logs out of the application
        When user selects "<customerName>" to login
        And user verifies the transaction history
            | transactionType | amount             |
            | Credit          | <depositAmount>    |
            | Debit           | <withdrawalAmount> |
        And user logs out of the application

        Examples:
            | customerName     | depositAmount | depositMessage     | withdrawalAmount | withdrawalMessage      | balanceAmount |
            | Ron Weasly       | 1001          | Deposit Successful | 101              | Transaction successful | 900           |
            | Albus Dumbledore | 9876          | Deposit Successful | 5432             | Transaction successful | 4444          |
