export class Common {
    elements = {
        captcha:() => cy.get('iframe[src*="recaptcha"]',{timeout: 10000}),
        
    }}