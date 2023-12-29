const bpostbuttons = document.getElementsByClassName("custom-blogbutton");
//console.log(bpostbuttons);

async function summon_blogpost(event) {
    //console.log("firing")
    //console.log("current target", this.id)
    event.preventDefault();
    const response = await fetch(`/api/blogs/${this.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace(`/api/blogs/${this.id}`)
    } else {
        console.error('Error fetching blog post:', response.status, response.statusText);
    }
};


Array.from(bpostbuttons).forEach(button => {
    button.addEventListener("click",summon_blogpost)
});