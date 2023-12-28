const bpostbuttons = document.getElementsByClassName("custom-blogbutton");
//console.log(bpostbuttons);

async function summon_blogpost() {
    //console.log("firing")
    //console.log("current target", this.id)
    const blogpopst = await fetch(`/api/blogs/${this.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
};


Array.from(bpostbuttons).forEach(button => {
    button.addEventListener("click",summon_blogpost)
});