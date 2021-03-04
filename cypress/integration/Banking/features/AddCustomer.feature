Feature: Verify the Add Customer feature on Bank Application

    Scenario: To add a customer
        Given user is logged in as Bank Manager to Bank application
        When user enters the customer details
            | firstName | lastName | postalCode |
            | John      | Doe      | 54311      |
        Then user should see the message "Customer added successfully with customer id" on saving the details
        And user returns to home page