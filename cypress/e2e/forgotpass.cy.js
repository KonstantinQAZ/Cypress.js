describe('Тестирование восстановления пароля', function () {
   it('восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('showoffdzy2j@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail');
    })
})