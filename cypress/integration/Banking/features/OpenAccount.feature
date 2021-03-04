Feature: Verify the Open Account feature on Bank Application

    Scenario: To open an account
        Given user is logged in as Bank Manager to Bank application
        When user selects customer "Harry Potter" with currency "Pound" to open an account
        Then user should see the message "Account created successfully with account Number" on processing the details
        And user returns to home page