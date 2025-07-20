document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-btn");
    const tableBody = document.getElementById("expense-table-body");
    const totalAmount = document.getElementById("total-amount");
    const chartCanvas = document.getElementById("expense-chart");
    let expenses = [];

    addBtn.addEventListener("click", () => {
        const category = document.getElementById("category-select").value;
        const amount = parseFloat(document.getElementById("amount-input").value);
        const date = document.getElementById("date-input").value;
        if (!category || !amount || !date) return alert("All fields are required.");

        expenses.push({ category, amount, date });
        updateTable();
        updateChart();
    });

    function updateTable() {
        tableBody.innerHTML = "";
        let total = 0;
        expenses.forEach((exp, index) => {
            total += exp.amount;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${exp.category}</td>
                <td>${exp.amount.toFixed(2)}</td>
                <td>${exp.date}</td>
                <td><button onclick="deleteExpense(${index})">Delete</button></td>
            `;
            tableBody.appendChild(row);
        });
        totalAmount.textContent = total.toFixed(2);
    }

    window.deleteExpense = function(index) {
        expenses.splice(index, 1);
        updateTable();
        updateChart();
    }

    function updateChart() {
        const monthlyTotals = {};
        expenses.forEach(exp => {
            const month = exp.date.slice(0, 7);  // yyyy-mm
            monthlyTotals[month] = (monthlyTotals[month] || 0) + exp.amount;
        });
        const labels = Object.keys(monthlyTotals);
        const data = Object.values(monthlyTotals);

        if (window.myChart) window.myChart.destroy();
        window.myChart = new Chart(chartCanvas, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Monthly Expenses',
                    data,
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            }
        });
    }
});