Feature: Verify the Customer search feature on Bank Application

    Scenario Outline: To search and delete a Customer
        Given user is logged in as Bank Manager to Bank application
        And user navigates to search Customer page
        When user searches for customer "<search>"
        Then user should see the customer "<customer>"
        And user deletes all the customers
        And user returns to home page

        Examples:
            | search | customer         |
            | er     | *                |
            | Albus  | Albus Dumbledore |

    Scenario: To delete all the Customeres one after the other
        Given user is logged in as Bank Manager to Bank application
        When user navigates to search Customer page
        Then user deletes all the customers
        And user returns to home page

    Scenario: To search Customer that doesn't exstits in the application
        Given user is logged in as Bank Manager to Bank application
        And user navigates to search Customer page
        When user searches for customer "John"
        Then user should not see any customer
        And user returns to home page