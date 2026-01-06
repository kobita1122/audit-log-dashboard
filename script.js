const data = [
  { user: "Admin", action: "login", time: "10:00 AM" },
  { user: "Manager", action: "update", time: "10:15 AM" },
  { user: "Admin", action: "delete", time: "10:30 AM" },
  { user: "User", action: "login", time: "11:00 AM" }
];

const tbody = document.getElementById("logs");

function render(list) {
  tbody.innerHTML = "";
  list.forEach(l => {
    tbody.innerHTML += `
      <tr>
        <td>${l.user}</td>
        <td>${l.action}</td>
        <td>${l.time}</td>
      </tr>
    `;
  });
}

function filter(type) {
  if (type === "all") render(data);
  else render(data.filter(d => d.action === type));
}

render(data);
