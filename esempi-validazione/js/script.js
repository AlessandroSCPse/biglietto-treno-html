// Generate btn behaviour
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click',
    function() {
        // Prendere i dati dell'utente dal form
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;

        if(isNaN(userKm) || userName.length === 0) {
            alert('Dati errati');
        } else {
            // Calcolare prezzo e eventualmente applicare sconti
            // Eventualmente anche ottenere le altre info da stampare
            // Prezzo standard
            const price = userKm * 0.21;
            let discount = 0;
            let offer = 'Tariffa standard';
            
            // Applico gli sconti
            if(userAge === 'minorenne') {
                discount = price * 20 / 100;
                offer = 'Tariffa giovani';
            } else if (userAge === 'over') {
                discount = price * 40 / 100;
                offer = 'Tariffa Senior';
            }

            const finalPrice = price - discount;

            // Carrozza e codice CP
            const carriageNumber = Math.floor(Math.random() * 10) + 1;
            const cpCode = Math.floor(Math.random() * 10000) + 1000;
            
            // Compilare il biglietto
            document.getElementById('ticket-name').innerHTML = userName;
            document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2);
            document.getElementById('ticket-offer').innerHTML = offer;
            document.getElementById('ticket-carriage').innerHTML = carriageNumber;
            document.getElementById('ticket-cpcode').innerHTML = cpCode;

            // Rendere il biglietto visibile
            document.getElementById('ticket-container').classList.remove('hidden');
        }
    }
);

// Cancel btn behaviour
const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', 
    function() {
        // Svuotiamo le informazioni del biglietto
        document.getElementById('ticket-name').innerHTML = '';
        document.getElementById('ticket-price').innerHTML = '';
        document.getElementById('ticket-offer').innerHTML = '';
        document.getElementById('ticket-carriage').innerHTML = '';
        document.getElementById('ticket-cpcode').innerHTML = '';

        // Nascondere il biglietto
        document.getElementById('ticket-container').classList.add('hidden');

        // Resettare il form
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = 'maggiorenne';
    }
);