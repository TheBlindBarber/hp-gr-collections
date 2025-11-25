// Load JSON and render table
async function loadOccurrences() {
  const response = await fetch('/_data/occurrences.json');
  const data = await response.json();

  const table = document.getElementById('occurrences-table');
  const tbody = table.querySelector('tbody');

  data.forEach(record => {
    const tr = document.createElement('tr');

    // Summary columns
    for (const key in record.summary) {
      const td = document.createElement('td');
      td.textContent = record.summary[key];
      tr.appendChild(td);
    }

    // Click to expand full record
    tr.addEventListener('click', () => {
      showFullRecord(record);
    });

    tbody.appendChild(tr);
  });
}

// Show full record in a modal or separate div
function showFullRecord(record) {
  const modal = document.getElementById('record-modal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = '';

  for (const key in record) {
    if (key === 'summary') continue;
    const p = document.createElement('p');
    p.innerHTML = `<strong>${key}:</strong> ${record[key]}`;
    modalContent.appendChild(p);
  }

  modal.style.display = 'block';
}

// Close modal
function setupModal() {
  const modal = document.getElementById('record-modal');
  const span = modal.querySelector('.close');
  span.onclick = () => { modal.style.display = 'none'; };
  window.onclick = event => {
    if (event.target === modal) modal.style.display = 'none';
  };
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadOccurrences();
  setupModal();
});
