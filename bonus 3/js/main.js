//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const cardDipendenti = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
]




//BONUS 2:
// Organizzare i singoli membri in card/schede

//creo il DOM e ciclo il mio array di oggetti
for(let i = 0; i < cardDipendenti.length; i++){

    //MILESTONE 1:
    //Stampare su console le informazioni di nome, ruolo e la stringa della foto
    console.log(cardDipendenti[i]);

    const cardDipendentiDom = document.createElement('div');
    cardDipendentiDom.classList.add('cardDipendenti');

    let cardImage = document.createElement('div');
    cardImage.classList.add('foto');

    let image = document.createElement('img');
    

    let name = document.createElement('h2');
    name.classList.add('nome');

    let role = document.createElement('p');
    role.classList.add('ruolo');
    
    
    

    const allCard = document.getElementById('portfolio');
    allCard.appendChild(cardDipendentiDom);
    cardDipendentiDom.appendChild(cardImage);
    cardImage.appendChild(image);
    cardDipendentiDom.appendChild(name);
    cardDipendentiDom.appendChild(role);



    let nomeI = cardDipendenti[i];
    let nomeCard = nomeI['nome'];

    let ruoloI = cardDipendenti[i];
    let ruoloCard = ruoloI['ruolo'];

    let fotoI = cardDipendenti[i];
    let fotoCard = fotoI['foto'];

    name.innerHTML = nomeCard;
    role.innerHTML = ruoloCard;

    //BONUS 1:
    //Trasformare la stringa foto in una immagine effettiva

    image.src = fotoCard;
    
}

/*

//bonus 3

document.getElementById('aggiungi').addEventListener('click', 
    function(){

        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const image = document.getElementById('image').value;

        const newMember ={
            'nome' : name,
            'ruolo' : role,
            'foto' : image
        }

        cardDipendenti.push(newMember);
});

*/



