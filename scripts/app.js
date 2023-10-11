const posts = [
    { image: 'path/to/image1.jpg', caption: 'Amazing view from the mountains!' },
    { image: 'path/to/image2.jpg', caption: 'Exploring the beach paradise.' }
];


function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const imageElement = document.createElement('img');
        imageElement.src = post.image;
        postElement.appendChild(imageElement);

        const captionElement = document.createElement('p');
        captionElement.textContent = post.caption;
        postElement.appendChild(captionElement);

        postsContainer.appendChild(postElement);
    });
}


function submitPost() {
    const imageInput = document.getElementById('imageInput');
    const captionInput = document.getElementById('captionInput');

    const newPost = {
        image: imageInput.value,
        caption: captionInput.value
    };

    posts.push(newPost);
    displayPosts();
}


function openModal() {
    const modal = document.getElementById('uploadModal');
    modal.style.display = 'block';
}


function closeModal() {
    const modal = document.getElementById('uploadModal');
    modal.style.display = 'none';
}


function uploadImage() {
    const imageInputModal = document.getElementById('imageInputModal');
    const uploadedImage = imageInputModal.value;


    posts.push({ image: uploadedImage, caption: 'Caption for uploaded image' });


    displayPosts();
    closeModal();
}

displayPosts();
