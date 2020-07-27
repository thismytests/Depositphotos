Feature: ATM page

  @test
  Scenario: I did't choose any setting for banknote && I entered sum
    Given I did't choose any setting for banknote && I entered sum
    Then Default banknote is empty
    Then I got needed sum
    Then Clear sum

  Scenario: I choose  banknote 10 && 50
  && I entered sum 50
    Given I choose  banknotes 10 and 50 && I entered sum 50
    Then Instead field with sum will be an error "You have entered an amount in excess of the selected banknotes"

  Scenario: Instead banknotes '10 || 50 || 100' I entered another symbols or another banknotes
    Given I entered 23
    Then Instead field with sum will be an error "You can choose only banknotes 10, 50, 100 "

