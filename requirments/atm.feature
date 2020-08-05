Feature: Atm Controls
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

Feature: Atm Set Banknotes screen
  Background: At screen exit input field
  Scenario Outline: Enter banknotes trough the space
    When <Banknote> is
    Examples:
      | Banknote |
      | 10       |
      | 50       |
      | 100       |
    Then Screen is valid


    When <Banknote> is
    Examples:
      | Banknote |
      | 101       |
      | A      |
    Then See error message in bottom of screen "You can choose only 10, 50, 100 banknotes"
    Then Screen is not valid

Feature: Atm Get Sum screen
  Background: The screen contains input field
  Scenario I entered sum 200 and didn't choose any banknotes at Banknotes Screen
  Scenario I entered sum 200 and have choose before banknotes 10 at Banknotes Screen
  Scenario I entered sum 200 and choose before banknotes 10 and 50 at Banknotes Screen
  Scenario I entered sum 200 and choose before banknotes 10 and 50 and 100 at Banknotes Screen

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

