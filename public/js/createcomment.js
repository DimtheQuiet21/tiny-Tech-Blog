
function create_comment () {
    console.log("firing")
    const comment_section = $("#comment_section");
    const new_comment = $("<div>", {
        class: "card row justify-content-md-center"
    });
    const new_input = $("<textarea>",{
        placeholder: "Type your comment here.",
        style: "min-height: 200px",
        id:"comment_description"
    });
    const submit_button = $("<button>", {
        class: "btn btn-primary",
        text: "Submit",
        id:"submit_comment",
        click: post_comment
    });

    new_comment.append(new_input);
    new_comment.append(submit_button);
    comment_section.append(new_comment);
};

async function post_comment (event) {

    event.preventDefault();
    const description = $("#comment_description").val().trim()
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const blogId = pathSegments[pathSegments.length - 1];

    if (description === '') {
        console.error('Error: Comment description is empty.');
        return;
    }

    const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'POST',
        body: JSON.stringify({
            "description":description,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const reloadpage = await fetch(`/api/blogs/${blogId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (reloadpage.ok) {
            document.location.replace(`/api/blogs/${blogId}`)
        }
    } else {
        console.error('Error fetching blog post:', response.status, response.statusText);
    }
}