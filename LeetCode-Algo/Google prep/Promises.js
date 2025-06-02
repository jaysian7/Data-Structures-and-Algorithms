let p = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is a success' + message);
}).catch((message) => {
    console.log('This is a failure' + message);
})

// another example

const [userData, postsData, tagsData] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/tags'),
]);

// async / await / fetch
async function fetchUsers() {
    const res = await fetch('https://someapiurl.com/users');
    const data = await res.json();
}