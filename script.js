const movieData = {
    labels: [
      "Baron", "Baron 2", "Osmondagi Bolalar",
      "Muhabbat Sinovlari", "Telba", "Qasoskorlar",
      "Vatan", "Scorpion", "Shaytanat",
      "Abdullajon", "O'tkan Kunlar", "Yolg'iz Bo'ri",
      "Fotima va Zuhra", "Tungi Quvg'in", "Panoh",
      "Qora Beva", "Daydi", "Notanish Qotil",
      "Janob Hech Kim", "Virus"
    ],
    ratings: [
      95, 93, 92, 91, 90, 89, 88, 87, 86, 85,
      84, 83, 82, 81, 80, 79, 78, 77, 76, 75
    ]
  };
  
  const ctx = document.getElementById('movieChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: movieData.labels,
      datasets: [{
        label: 'Reyting',
        data: movieData.ratings,
        backgroundColor: 'rgba(255, 0, 128, 0.3)',
        borderColor: 'rgba(0, 255, 255, 0.8)',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(128, 0, 255, 0.5)',
        hoverBorderColor: 'rgba(0, 255, 255, 1)',
        hoverBorderWidth: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuart'
      },
      plugins: {
        legend: {
          labels: {
            color: '#ffffff',
            font: {
              family: "'Montserrat', sans-serif",
              size: 16,
              weight: '700'
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
            lineWidth: 0.5
          },
          ticks: {
            color: 'rgba(0, 255, 255, 0.9)',
            font: {
              family: "'Montserrat', sans-serif",
              size: 14,
              weight: '700'
            }
          }
        },
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
            lineWidth: 0.5
          },
          ticks: {
            color: 'rgba(255, 0, 128, 0.9)',
            font: {
              family: "'Montserrat', sans-serif",
              size: 14,
              weight: '700'
            },
            maxRotation: 45,
            minRotation: 45
          }
        }
      }
    }
  });