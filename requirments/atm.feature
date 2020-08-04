Feature: ATM page

  Scenario Outline: Click Control
    When I click <controlName>
    Examples:
      | controlName   |
      | Set Banknotes |
      | Set Sum       |
    Then I see  <screen>
    Examples:
      | screen        |
      | Set Banknotes |
      | Set Sum       |

    When I click control 'Execute'
    And <PreviousControl> was a:
    Examples:
      | PreviousControl |
      | Set Banknotes   |
      | Get Sum         |
    And Previous control was a valid
    Then I see  <screen>
    Examples:
      | screen        |
      | Get Banknotes |
      | Money         |


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

