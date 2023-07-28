describe('Тестирование логина и пароля', function () {
   it('ввод правильного логина и неправильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('asdasdad123');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})