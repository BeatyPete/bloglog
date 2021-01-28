const postContainerEl = document.querySelector(".post-container");


const populateEditor = function() {
    postContainerEl.innerHTML = "";

    const editorContainerEl =document.createElement("article");
    const editorHeaderEl =document.createElement("div");
    editorHeaderEl.classList = "post-header";
    editorHeaderEl.innerHTML = '<h1 class="post-title">Create New Post</h1>';
    editorContainerEl.appendChild(editorHeaderEl)

    const editorFormEl = document.createElement('form');
    editorFormEl.classList = 'login-form'
    const titleInputEl = document.createElement('div')
    titleInputEl.innerHTML = '<label for="title">Title</label><input type="text" id="title" name="title" />'
    editorFormEl.appendChild(titleInputEl)

    const contentInputEl = document.createElement('div')
    contentInputEl.innerHTML = '<label for="content">Content</label><textarea type="text" id="content" name="content"></textarea>'
    editorFormEl.appendChild(contentInputEl)

    const postBtnnEl = document.createElement('div');
    postBtnnEl.innerHTML = '<button class="login-btn" type="submit">Create</button>'
    editorFormEl.appendChild(postBtnnEl)

    editorContainerEl.appendChild(editorFormEl)

    postContainerEl.appendChild(editorContainerEl);
}

async function newFormHandler(event) {
    event.preventDefault();
    const elem = event.target

    if (elem.classList.contains('login-form')) {
        const title = document.querySelector('input[name="title"]').value;
        const post_text = document.querySelector('textarea[name="content"]').value;
    
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

postContainerEl.addEventListener( "submit", newFormHandler );

  function someListener(event){
      var element = event.target;
      if(element.tagName == 'A' && element.classList.contains("someBtn")){
          console.log("hi");
      }
  }

document.querySelector('.post-btn').addEventListener('click', populateEditor);