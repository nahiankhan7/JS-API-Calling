console.clear();
// 2 ways to call --> then and async await //

// then fetch /
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       const msg = `Error: ${res.status}`;
//       throw new Error(msg); // Use Error with an uppercase E
//     }
//     return res.json(); // res.json() returns a promise
//   })
//   .then((data) => console.log(data)) // Receive the JSON data here
//   .catch((err) => console.log(err));

// async await fetch //
const makeRequest = async (url, config) => {
  const response = await fetch(url, config);
  if (!response.ok) {
    const msg = `${response.status}`;
    throw new Error(msg);
  }
  const data = await response.json();
  return data;
};

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
sendData();
