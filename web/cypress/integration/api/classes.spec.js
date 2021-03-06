/// <reference types = "cypress" />
/// <reference types = "@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        //Request URL: http://localhost:3333/classes
        //Request Method: POST
        //Status Code: 201 Created
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body:{
                "name":"Professor Agilizei",
                "avatar":"https://pickaface.net/gallery/avatar/unr_fake_190524_1549_9fgji7.png",
                "whatsapp":"51123412345",
                "bio":"Lorem ispum",
                "subject":"História",
                "cost":100,
                "schedule":[
                  {
                    "week_day":0,
                    "from":"08:00",
                    "to":"09:00"
                  }
                ]
              }
        }).then((responde) => {
            //asserções da resposta
        })
        
    });
});