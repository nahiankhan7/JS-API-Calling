console.clear();
// Ajax --> asynchronous javascript and xml //
const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(
    (res) => console.log(res)
  );
};
deleteData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//     id: 1,
//     title: "Khan",
//     body: "Ajax",
//     userId: 1,
//   }).then((res) => console.log(res));
// };
// updateData();

// const createData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }).then((res) => console.log(res));
// };
// createData();

// const getData = () => {
//      makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET").then((res) =>
//        console.log(res)
//      );
//    };
//    getData();
