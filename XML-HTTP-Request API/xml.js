console.clear();

// Event --> onload(), onerror() //
// Property --> response, responseText, responseType, responseURL, Status, statusText //
// Function --> open(), send(), setRequestHeader() //

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    let data = xhr.response;
    console.log(xhr.status);
    console.log(JSON.parse(data));
  };
  xhr.onerror = () => {
    console.log(`error is hare`);
  };
  xhr.send(JSON.stringify(data));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "change",
  });
};

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};
// getData();
// sendData();
// updateData();
// updateSingleData();
deleteData();
