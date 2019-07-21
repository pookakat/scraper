
$.get('/api/articles', (data) => {
    for (var i = 0; i<data.length; i++){
        $('ul.articles').append($(` <li>
        <div class="article">
            <h2>${data[i].title}</h2>
            <p>Link: <a href="${data[i].link}">${data[i].link}</a></p>
            <form>
                <label for="comments">Comments:</label>
                <input type="text" id="comments2" name="comments" maxlength="900" size="50">
                <input type="submit" value="Submit">
            </form>
            <h3>Previous Comments:</h3>
            <p></p>
        </div>
    </li>`))
    }
    console.log(data);
});