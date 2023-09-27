function toggleContent(id) {
    var content = document.getElementById(id + "Content");
    if (content.style.display === "none") {
    content.style.display = "block";
    } else {
    content.style.display = "none";
    }
    }
    function addComment() {
    const commentInput = 
   document.getElementById("comment");
    const comment = commentInput.value.trim(); 
    
    if (comment) {
    const commentsDiv = 
   document.getElementById("comments");
    const commentElement = 
   document.createElement("p");
    commentElement.textContent = comment;
    commentsDiv.appendChild(commentElement);
    
    commentInput.value = "";
    
    alert("Comment added: " + comment);
    } else {
    alert("Please enter a comment before submitting.");
    }
    }
   