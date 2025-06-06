// 1. Aggregate total units sold per product
const yearlySalesData = {
  Hestia: 0,
  Amphitrite: 0,
  Artemis: 0,
  Urania: 0
};

const monthlyLabels = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// 2. Monthly data for line chart
const monthlySales = {
  Hestia: [77, 273, 135, 259, 119, 268, 112, 286, 285, 61, 75, 185],
  Amphitrite: [299, 231, 138, 264, 197, 50, 190, 223, 240, 118, 207, 176],
  Artemis: [130, 65, 208, 275, 131, 285, 76, 184, 160, 117, 94, 182],
  Urania: [208, 126, 240, 155, 234, 145, 285, 267, 241, 152, 256, 170]
};

// 3. Calculate yearly totals
for (let i = 0; i < 12; i++) {
  yearlySalesData.Hestia += monthlySales.Hestia[i];
  yearlySalesData.Amphitrite += monthlySales.Amphitrite[i];
  yearlySalesData.Artemis += monthlySales.Artemis[i];
  yearlySalesData.Urania += monthlySales.Urania[i];
}

// 4. Revenue per product (from customer_orders.csv)
const productRevenue = {
  Hestia: 0,
  Amphitrite: 0,
  Artemis: 0,
  Urania: 0
};

// Sample data from customer_orders.csv
const customerOrders = [
  { orderId: "ORD0001", customerId: "CUST021", date: "2024-05-20", product: "Hestia", quantity: 1, unitPrice: 1500, total: 1500 },
  { orderId: "ORD0002", customerId: "CUST011", date: "2024-05-20", product: "Artemis", quantity: 1, unitPrice: 1125, total: 1125 },
  { orderId: "ORD0003", customerId: "CUST022", date: "2024-08-04", product: "Hestia", quantity: 3, unitPrice: 1500, total: 4500},
  { orderId: "ORD0004", customerId: "CUST002", date: "2024-04-21", product: "Hestia", quantity: 3, unitPrice: 1500, total: 1500},
  { orderId: "ORD0005", customerId: "CUST008", date: "2024-04-11", product: "Hestia", quantity: 3, unitPrice: 1500, total: 4500},
  { orderId: "ORD0006", customerId: "CUST023", date: "2024-08-07", product: "Urania", quantity: 1, unitPrice: 1250, total: 1250},
  { orderId: "ORD0007", customerId: "CUST019", date: "2024-03-22", product: "Artemis", quantity: 1, unitPrice: 1125, total: 1125},
  { orderId: "ORD0008", customerId: "CUST023", date: "2024-05-22", product: "Urania", quantity: 2, unitPrice: 1250, total: 2500},
  { orderId: "ORD0009", customerId: "CUST005", date: "2024-02-22", product: "Amphitrite", quantity: 2, unitPrice: 950, total: 1900},
  { orderId: "ORD0010", customerId: "CUST003", date: "2024-07-02", product: "Urania", quantity: 1, unitPrice: 1250, total: 1250},
  { orderId: "ORD0011", customerId: "CUST028", date: "2024-05-15", product: "Artemis", quantity: 3, unitPrice: 1125, total: 3375},
  { orderId: "ORD0012", customerId: "CUST026", date: "2024-08-23", product: "Hestia", quantity: 3, unitPrice: 1500, total: 4500},
  { orderId: "ORD0013", customerId: "CUST018", date: "2024-02-10", product: "Hestia", quantity: 2, unitPrice: 1500, total: 3000},
  { orderId: "ORD0014", customerId: "CUST018", date: "2024-11-12", product: "Artemis", quantity: 3, unitPrice: 1125, total: 3375},
  { orderId: "ORD0015", customerId: "CUST029", date: "2024-04-08", product: "Artemis", quantity: 3, unitPrice: 1125, total: 3375},
  { orderId: "ORD0016", customerId: "CUST023", date: "2024-12-04", product: "Hestia", quantity: 1, unitPrice: 1500, total: 1500},
  { orderId: "ORD0017", customerId: "CUST008", date: "2024-04-29", product: "Artemis", quantity: 1, unitPrice: 1125, total: 1125},
  { orderId: "ORD0018", customerId: "CUST028", date: "2024-05-22", product: "Hestia", quantity: 2, unitPrice: 1500, total: 3000},
  { orderId: "ORD0019", customerId: "CUST015", date: "2024-07-08", product: "Artemis", quantity: 1, unitPrice: 1125, total: 1125},
  { orderId: "ORD0020", customerId: "CUST012", date: "2024-05-22", product: "Amphitrite", quantity: 3, unitPrice: 950, total: 2850},
  { orderId: "ORD0021", customerId: "CUST023", date: "2024-11-21", product: "Hestia", quantity: 3, unitPrice: 1500, total: 4500},
  { orderId: "ORD0022", customerId: "CUST006", date: "2024-08-24", product: "Amphitrite", quantity: 1, unitPrice: 950, total: 950},
  { orderId: "ORD0023", customerId: "CUST013", date: "2024-12-18", product: "Artemis", quantity: 3, unitPrice: 1125, total: 3375},
  { orderId: "ORD0024", customerId: "CUST018", date: "2024-06-15", product: "Amphitrite", quantity: 3, unitPrice: 950, total: 2850},
  { orderId: "ORD0025", customerId: "CUST027", date: "2024-01-17", product: "Hestia", quantity: 1, unitPrice: 1500, total: 1500},
  { orderId: "ORD0026", customerId: "CUST026", date: "2024-05-17", product: "Artemis", quantity: 2,unitPrice: 1125, total: 2250},
  { orderId: "ORD0027", customerId: "CUST003", date: "2024-06-10", product: "Amphitrite", quantity: 3, unitPrice: 950, total: 2850},
  { orderId: "ORD0028", customerId: "CUST007", date: "2024-11-25", product: "Urania", quantity: 2, unitPrice: 1250, total: 2500},
  { orderId: "ORD0029", customerId: "CUST015", date: "2024-03-12", product: "Amphitrite", quantity: 2, unitPrice: 950, total: 1900},
  { orderId: "ORD0030",customerId: "CUST008", date: "2024-10-26", product: "Artemis", quantity: 3, unitPrice: 1125, total: 3375},
];

// Aggregate revenue per product
customerOrders.forEach(order => {
  if (productRevenue[order.product] !== undefined) {
    productRevenue[order.product] += order.total;
  }
});

// ----- Chart 1: Total Units Sold Per Product -----
const productSales = {
  labels: ["Hestia", "Amphitrite", "Artemis", "Urania"],
  datasets: [{
    label: "Units Sold (2024)",
    data: [
      yearlySalesData.Hestia,
      yearlySalesData.Amphitrite,
      yearlySalesData.Artemis,
      yearlySalesData.Urania
    ],
    backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
  }]
};

new Chart(document.getElementById("salesChart"), {
  type: "bar",
  data: productSales,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Units Sold Per Product (2024)",
        font: {
          size: 20,
          family: 'Arial'
        },
        color: '#F5F5F5'
      },
      legend: {
        labels: {
          font: {
            size: 16,
            family: 'Arial'
          },
          color: '#DCDCDC'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14
          },
          color: '#FFFFFF'
        }
      },
      y: {
        ticks: {
          font: {
            size: 14
          },
          color: '#F8F8FF'
        }
      }
    }
  }
});

// ----- Chart 2: Monthly Sales Trend Per Product -----
const monthlyRevenue = {
  labels: monthlyLabels,
  datasets: [
    {
      label: "Hestia",
      data: monthlySales.Hestia,
      borderColor: "#ff6384",
      backgroundColor: "transparent",
      tension: 0.4
    },
    {
      label: "Amphitrite",
      data: monthlySales.Amphitrite,
      borderColor: "#36a2eb",
      backgroundColor: "transparent",
      tension: 0.4
    },
    {
      label: "Artemis",
      data: monthlySales.Artemis,
      borderColor: "#ffcd56",
      backgroundColor: "transparent",
      tension: 0.4
    },
    {
      label: "Urania",
      data: monthlySales.Urania,
      borderColor: "#4bc0c0",
      backgroundColor: "transparent",
      tension: 0.4
    }
  ]
};

new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: monthlyRevenue,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Trend (Units Sold)",
        font: {
          size: 20,
          family: 'Arial'
        },
        color: '#F5F5F5'
      },
      legend: {
        labels: {
          font: {
            size: 16,
            family: 'Arial'
          },
          color: '#DCDCDC'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14
          },
          color: '#FFFFFF'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14
          },
          color: '#F8F8FF'
        }
      }
    }
  }
});


// ----- Chart 3: Total Revenue per Product -----
const revenueChartData = {
  labels: ["Hestia", "Amphitrite", "Artemis", "Urania"],
  datasets: [{
    label: "Revenue ($)",
    data: [
      productRevenue.Hestia,
      productRevenue.Amphitrite,
      productRevenue.Artemis,
      productRevenue.Urania
    ],
    backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
  }]
};

new Chart(document.getElementById("revenuePerProductChart"), {
  type: "doughnut",
  data: revenueChartData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Revenue Per Product",
        font: {
          size: 20,
          family: 'Arial'
        },
        color: '#F5F5F5'
      },
      legend: {
        labels: {
          font: {
            size: 16,
            family: 'Arial'
          },
          color: '#DCDCDC'
        }
      }
    }
  }
});
