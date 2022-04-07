

export class NavigationMenu{
    menuItem(itemName){
        cy.get('div#navbar').contains('li a',itemName).click()
    }
    mainManu(itemName){
        cy.contains('div.navbar-header',itemName).click()
    }
    CommandsSubItem(itemName){
        cy.contains('div#navbar li a','Commands').click()
        cy.contains('ul.dropdown-menu li a',itemName).click()
    }
}

export const navigateTo = new NavigationMenu()