// XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

// Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
