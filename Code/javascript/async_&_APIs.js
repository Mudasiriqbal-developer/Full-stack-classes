console.log("1");
console.log("2");
console.log("3");
use_async();
console.log("4");
console.log("5");
use_async2();

// 10 users data from api.
// render data from the api in a table format in the html page using .map() method.
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

// 100 posts from the api.
// render data from the api in a table format in the html page using foreach loop.
async function use_async2() {
  let posts = "https://jsonplaceholder.typicode.com/posts";
  let postsRes = await fetch(posts);
  let postsData = await postsRes.json();
  console.log(postsData);
  let container2 = document.getElementById("box2");
  
  postsData.forEach(post => {
    const div = document.createElement("div");
    
    div.innerHTML = `
    <hr><hr>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    container2.appendChild(div); 
    
  });
}
