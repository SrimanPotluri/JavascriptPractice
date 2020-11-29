// callback function is a function passed into another function as an argument

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


function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title: 'Post three', body: 'This is post three'}, getPosts);

