# this is sample feature file
Feature: This is a feature to demonstrate cucumber

Background: This is background

Scenario: This is a test scenario
Given I open cypress example page
When I add new todo items
Then I validate if the new item is added
# To get the second item from the list of elements
And I retrieve the newly added item
# Retrive attribute value
And I retrive the property by invoke methd
# user wrap method to change JQuery context to cypress context
And I validate using wrap methd
