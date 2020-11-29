
//async and await are more elegant way to handle prmomises

const posts = [{ title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' }];

//getPosts using es6 arrow function
function getPosts(){
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
            
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Error, something went wrong");
            }
           
        }, 2000);
    });
    
}


// async function init(){
//     await createPost({title: 'Post three', body: 'This is post three'});
//     getPosts();
// }

// init();


//async await on fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

}

fetchUsers();