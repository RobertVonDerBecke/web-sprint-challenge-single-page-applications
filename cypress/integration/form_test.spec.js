
describe('Pizza Form inputs test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=name]');
    const checkBox = () => cy.get('#Pepperoni');
    const checkBox1 = () => cy.get('#Garlic');
    const checkBox2 = () => cy.get('#Bacon');
    const checkBox3 = () => cy.get('#Sausage');
    const radioBox = () => cy.get('#Spinach');
    const textArea = () => cy.get('#special-text');
    const sauceDrop = () => cy.get('#size-dropdown')
    const submitBtn = () => cy.get('#order-button');
    const orderPizza = () => cy.get('#order-pizza')


    it('input accepts data', () => {
        orderPizza().click()
        nameInput().should('exist')
            .type('Robert V')
            .should('have.value', 'Robert V')
    })
    it('Can submit', () => {
        orderPizza().click()
        nameInput()
            .should('exist')
            .type('Robert V')
            .should('have.value', 'Robert V')
        sauceDrop().select('medium')
        radioBox().click()
        checkBox().click()
        checkBox1().click()
        checkBox2().click()
        checkBox3().click()
        textArea().should('exist').type('Please burn my pizza')
        submitBtn().click()
    })
})