describe('Тестирование логина и пароля', function () {
   it('ввод неправильного логина и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@doikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})