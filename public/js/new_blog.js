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

async function update_post (event) {
    event.preventDefault();

    async function submit_update () {
        title = titlebox.val();
        description = descriptionbox.val();

        const response = await fetch(`/api/blogs/`, {
            method: 'PUT',
            body: JSON.stringify({
                "title":title,
                "description":description,
                // TO DO EVENTUALLY update the code to not reset the LIKES to 0 on an updtate call
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace(`/dashboard/`)
        } else {
            console.error('Error creating blog post:', response.status, response.statusText);
        }
    }

    let title_text = $("#blogpost_title").text(); //The original
    let description_text = $("#blogpost_description").text(); // The original


}