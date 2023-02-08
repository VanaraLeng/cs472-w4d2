$(() => {
    $(".addbutton").click(onclick)
})

function onclick() {
    const hidden = $(this).siblings().first();
    let id = hidden.val()

    $.ajax({
        url: '/addToCart',
        context: this, // pass button
        type: 'post',
        data: { id : id },
        success: onSuccess,
        error: onError
    })
}

function onSuccess(data) {
    const cartCount = data.cartCount;
    console.log(this);
    flashMessage(this, "Succesfully added to cart");

    $("#viewCart").html("View Cart (" + cartCount + ")");
}

function onError(error) {
    flashMessage(this, "Failed to add item to cart.");
}

// context = button
function flashMessage(context, message) {
    const messageSpan = $($(context).siblings()[1]);
    messageSpan.html(message);
    setInterval(() => {
        messageSpan.html("");
    }, 2000);
} 