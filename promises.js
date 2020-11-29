
const posts = [{ title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' }];

// function getPosts(){
//     setTimeout(function(){

//         let output = '';
//         posts.forEach(function(post, index){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

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

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));


//promise.all example

const promise1 = 10;
const promise2 = Promise.resolve('Hello world');
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Good bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

