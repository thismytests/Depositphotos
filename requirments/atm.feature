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