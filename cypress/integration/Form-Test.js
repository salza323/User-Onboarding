

describe('user onboarding app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const userName = () => cy.get('input[name=userName]')
    const userEmail = () => cy.get('input[name=userEmail]')
    const userPassword = () => cy.get('input[name=userPassword]')
    const termsOfService = () => cy.get('input[name=termsOfService]')

    it('test of test', () => {
        expect(1+2).to.equal(3)
    })

    it('mvp test', () => {
        userName().type('Sample Name')
    })
})