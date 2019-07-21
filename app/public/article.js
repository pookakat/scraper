
$.get('/api/articles', (data) => {
    for (var i = 0; i<data.length; i++){
        $('ul.articles').append($(` <li>
        <div class="article">
            <h2>${data[i].title}</h2>
            <p>Link: <a href="${data[i].link}">${data[i].link}</a></p>
            <form class="form${i}">
                <input type="hidden" class="article-id" value="${data[i]["_id"]}" />
                <label for="comments">Comments:</label>
                <input type="text" class="comment" name="comments" maxlength="900" size="50">
                <input type="button" class="button post-note" value="Submit">
            </form>
            <h3>Previous Comments:</h3>
            <p></p>
        </div>
    </li>`))
    }
    console.log(data);
    $('.post-note').click((event) => {
        console.log('I did something');
        event.preventDefault();
        var $form = $(event.currentTarget).parent();
    console.log($form);

        $.ajax({
            method: "POST",
            url: "/article/" + $form.children('.article-id').val()+"/comment",
            data: {
              body: $form.children('.comment').val()
            }
        })
        .then((data) =>{
            console.log(data);
        });
        return false;
    });
});

