# Gherkin

`Gherkin` is a simple, human-readable language used to write [acceptance criteria](../a/acceptance_criteria.md) and [Behaviour-Driven Development (BDD)](../b/bdd.md) test scenarios.

It allows business users, analysts, developers, and testers to describe how a system should behave using a common format that is easy for everyone to understand.

For example, the following user story:

> As a customer, I want to reset my password so that I can regain access to my account.

Can be written in Gremlin as the following acceptance criteria:

```
Scenario: Password reset email sent
  Given a registered user has forgotten their password
  When they request a password reset
  Then a reset email should be sent to their registered email address
```

----

Back up to: [Top](../index.md)
