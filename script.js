// import Chart from 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js';

let graphiqueCollege = document.getElementById("graphique-college");
let graphiqueLycee = document.getElementById("graphique-lycee");

// Création du graphique pour le college
new Chart(graphiqueCollege, {
    type: 'pie',
    data: {
        labels: [
            'Sixième A',
            'Sixième B',
            'Sixième C',
            'Cinquième A',
            'Cinquième B',
            'Quatrième A',
            'Quatrième B',
            'Troisème',
        ],
        datasets: [
            {
                data: [103, 99, 90, 112, 107, 86, 87, 73],
                backgroundColor: ['red', 'blue', 'orange', 'azure', 'green', '#42568f', '#a1257f', 'cyan'],
                hoverOffset: 25
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Graphe des moyennes générales de chaque classe'
        }
    },
    scales: {
      y: {
        beginAtZero: true
        }
    }
})


// Création du graphique pour le lycée
new Chart(graphiqueLycee, {
    type: 'pie',
    data: {
        labels: [
            'BONJOUR',
            'HELLO',
            'OKAY',
            'COUCOU'
        ],
        datasets: [
            {
                data: [200, 500, 10, 99],
                backgroundColor: ['red', 'blue', 'orange', 'azure'],
                hoverOffset: 10
            }
        ]
    }
})
