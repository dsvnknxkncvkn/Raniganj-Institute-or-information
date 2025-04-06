function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin123') {
      alert('You have successfully logged in');
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
    } else {
      alert('You have entered an invalid user ID or password. Please try again.');
    }
  }
  
  function getStatusClass(fee) {
    if (fee > 18000) return 'status-unpaid';
    if (fee == 18000) return 'status-paid';
    return 'status-not';
  }
  
  function getStatusText(fee) {
    if (fee > 18000) return 'Unpaid';
    if (fee == 18000) return 'Paid';
    return 'Not';
  }
  
  function addStudent() {
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('course').value;
    const semester = document.getElementById('semester').value;
    const fee = parseInt(document.getElementById('studentFee').value);
    const photo = document.getElementById('photo').files[0];
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
      const row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${course}</td>
        <td>${semester}</td>
        <td>₹${fee}</td>
        <td class="${getStatusClass(fee)}">${getStatusText(fee)}</td>
        <td><img src="${e.target.result}" width="50" height="50" style="border-radius: 50%;" /></td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
    }
    if(photo){
      reader.readAsDataURL(photo);
    }
  }
  
  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function resetForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentFee').value = '';
    document.getElementById('course').selectedIndex = 0;
    document.getElementById('semester').selectedIndex = 0;
    document.getElementById('photo').value = '';
  }
  
  function exportToPDF() {
    alert('PDF export functionality to be implemented.');
  }
  