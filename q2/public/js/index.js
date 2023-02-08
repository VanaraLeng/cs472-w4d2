$(() => {

    $('#submit').click(submitOnClick);

    $('#question').keypress(function (e) {
        if (e.which == 13) {
          submitOnClick()
          return false;
        }
      });
})

function submitOnClick() { 
    const question = $('#question').val();
    console.log(question);
    $.ajax({
        url : '/8ball',
        method: "get",
        data: { question : question },
        success: success,
        error: error
    });
}

function success(data) {
    let question = $('#question');
    question.val(data.answer);
    question.select();

} 

function error(error) {
    console.log(error);
}