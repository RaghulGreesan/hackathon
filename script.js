let res;
let url='https://api.github.com/user/repos'
async function hack(){

    try {

        
    let api=await fetch(url,{
headers:
{
'Authorization':'Bearer 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'
},
});
     res=await api.json();
    console.log(res);

    //display repo of user
    let ul =document.createElement('ul')
    let repo =document.getElementById('Repo').appendChild(ul)
    //display the fork count and stars count
    let ul1=document.createElement('ul')
    let count=document.getElementById('count').appendChild(ul1)
    let img=document.createElement('img')
    let img1=document.getElementById('image').appendChild(img);

    let ul2=document.createElement('ul')
    let repository=document.getElementById('repository').appendChild(ul2);
    
    for (var i = 0; i < res.length; i++) {

        
        // console.log(res[i].name+" fork_count ="+res[i].forks_count);
        // console.log(res[i].owner.avatar_url);
      //  console.log(res[i].name+" :" +res[i].owner.repos_url);

li =document.createElement('li')
li.innerHTML=res[i].name;
ul.appendChild(li)

li1=document.createElement('li')
li1.innerHTML=res[i].name+" fork_count ="+res[i].forks_count;
ul1.appendChild(li1)

img1.setAttribute('src',res[i].owner.avatar_url);

li2=document.createElement('li')
let anch =document.createElement('a')
li2.appendChild(anch);

//li2.innerHTML=res[i].name+" :" +res[i].owner.repos_url;
let repourl= res[i].owner.repos_url
anch.setAttribute('href',repourl);
anch.innerHTML=res[i].name;
li2.appendChild(anch);

ul2.appendChild(li2);



        
    }
    
    

    
    //console.log()
}catch (error) {
    console.log(error);
}
}
hack();
