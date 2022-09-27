Feature: Is it Friday yet?
    Everybody wants to know when it is Friday

    Scenario Outline: Today is or is not Friday
        Given today is "<day>"
        When I ask whether it is Friday yet
        Then I should be told "<answer>"

        Examples:
            | day       | answer    |
            | Friday    | TGIF!!!   |
            | Monday    | Nope      |
            | other     | Nope      |
