const currentPath = window.location.pathname;
const pathSegments = currentPath.split('/');
const blogId = pathSegments[pathSegments.length - 1];

async function submit_blogpost (event) {

    event.preventDefault();
    console.log("firing")
    const title = $("#blog_title").val();
    const description = $("#blog_description").val();

    if (description === '' || title === '') {
        console.error('Error: Comment description is empty.');
        return;
    }

    const response = await fetch(`/api/blogs/`, {
        method: 'POST',
        body: JSON.stringify({
            "title":title,
            "description":description,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/dashboard/`)
    } else {
        console.error('Error creating blog post:', response.status, response.statusText);
    }
};

async function update_post (event) {
    event.preventDefault();
    console.log("firing");
    document.location.replace(`/api/blogs/update/${blogId}`);
};

async function submit_update (event) {

    event.preventDefault();
    const titlebox = $("#blog_title");
    const descriptionbox = $("#blog_description");
    const title = titlebox.val();
    const description = descriptionbox.val();

    const response = await fetch(`/api/blogs/update/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({
            "title":title,
            "description":description,
            // TO DO EVENTUALLY update the code to not reset the LIKES to 0 on an updtate call
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/api/blogs/${blogId}`)
    } else {
        console.error('Error updating blog post:', response.status, response.statusText);
    }
};

async function delete_post (event) {
    event.preventDefault();
    console.log(blogId);
    const url = `./${blogId}`;
    const response = await fetch (url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        console.error('Error deleting blog post:', response.status, response.statusText);
    };
};