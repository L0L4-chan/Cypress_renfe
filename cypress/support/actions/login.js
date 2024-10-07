export class Login{
    elements={
        direccion:()=>  cy.url(),
        mail:()=> cy.get('#num_tarjeta'),
        password:()=>cy.get('#pass-login'),
        entrar:()=>cy.get('#loginButtonId'),
        recordar:()=>cy.get('#pruebaSpace > div:nth-child(1) > div > a'),
        nuevoUsuario:()=>cy.get('#signupButton'),
        warning: ()=> cy.get('#modalGeneric > div > div')


    }  
    
    
    checkLogInpage(){
        this.elements.direccion().should('include', 'login')
    }
    
    introduceUser(user){
        this.elements.mail().type(user);
    }

    introducePassword(password){
        this.elements.password().type(password);
    }

    logIn(){
        this.elements.entrar().click();
    }

    errorWarning(){
        this.elements.warning().should('be.visible');
    }

}