//your code here!
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");
	let listItemCounter = 0;
    // Function to add list items
    function addListItem() {
		listItemCounter++;
        const newItem = document.createElement("li");
        newItem.textContent = "List Item " + listItemCounter;
        list.appendChild(newItem);
    }

    // Add 10 list items by default
    for (let i = 0; i < 10; i++) {
        addListItem();
    }

    // Event listener to check scroll position and add more items if at the end
    // window.addEventListener("scroll", function() {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //         // Add 2 more list items
    //         addListItem();
    //         addListItem();
    //     }
    // });
	window.addEventListener("scroll", function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= scrollableHeight) {
        // Add 2 more list items
        addListItem();
        addListItem();
    }
});

});


