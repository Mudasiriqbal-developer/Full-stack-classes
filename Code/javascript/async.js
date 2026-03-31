console.log("1");
console.log("2");
console.log("3");
use_async();
console.log("4");
console.log("5");

async function use_async() {
  let users = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(users);
  let data = await response.json();
  console.log(data);
  const container = document.getElementById("box1");
  container.innerHTML = data.map((user) => {
    return `
<div id="users">
  <table id="user-table">
    
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
    </tbody>

  </table>
</div>
`;
  });
}
