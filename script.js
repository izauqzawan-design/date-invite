function moveButton() {
    const btn = document.getElementById('noBtn');
    btn.style.left = Math.random() * 200 + 'px';
    btn.style.top = Math.random() * 200 + 'px';
}

function nextStep() {
    document.getElementById('main-container').innerHTML = "<h1>Great! Lunch or Dinner?</h1><button onclick='alert(\"Email Sent!\")'>Lunch</button><button onclick='alert(\"Email Sent!\")'>Dinner</button>";
}