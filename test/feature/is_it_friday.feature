Feature: Is it Friday yet?
    Everybody wants to know when it is Friday

    Scenario: Sunday isn't Friday
        Given today is Sunday
        When I ask whether it is Friday yet
        Then I should be told "Nope"