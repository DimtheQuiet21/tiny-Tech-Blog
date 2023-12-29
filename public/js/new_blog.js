async function submit_blogpost (event) {

    event.preventDefault();
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