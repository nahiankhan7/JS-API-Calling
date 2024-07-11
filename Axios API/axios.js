// Axios is a JS library //
// It helps to make request from browser (plain js/vue/react/angular), node.js //
// Axios returns responsive object : data, status, statusText, headers, config //
/* Positive site : 
1. Very easy to use.
2. It supports all modern browser including IE.
3. It returns promise.
4. Throws error brilliantly and auto.
5. No need to set header cause axios is intelligent.
*/
console.clear();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")

//   .post("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })

//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       id: 1,
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })

//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       body: "barmuda",
//     }),
//   })

//   .delete("https://jsonplaceholder.typicode.com/posts/1")

//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// async await Axios method //
const makeRequest = (config) => {
  return axios(config);
};

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
createData();
