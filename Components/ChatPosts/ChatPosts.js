stateChatPosts = {
    "scrolled": false,
    "retries": 0
}

function renderChatPosts(){
    tags = document.getElementsByClassName("ChatPosts");
    for (let i of tags) {
        let HTML=``;
        if (POSTS){
            stateChatPosts['retires']=0;
            let heightInput = document.getElementsByClassName("ChatInputBar")[0].clientHeight;
            HTML += `<div id="chat-posts" style="padding-bottom:${heightInput}">`;

            let prevDate="";
            let currDate="";
            for (let post of POSTS){
                currDate = post['date'];
                let playerName = getPlayerById(post['playerId'])['name'];
                let postTime = post['time'].slice(0,5);
                let postContent = JSON.parse(post['postContent'])[0]['content'];
                if (currDate != prevDate) {
                    HTML += `<h1>${currDate}</h1>`
                }

                HTML += `
                <div class="card">
                    <div class="chat-post-container">
                        <div>
                            <img src="./img/Players/${playerName}Sqr.png" class="fixture-element-img">
                        </div>
                        <div class="chat-post-text-box">
                            <h1><strong>${playerName}</strong> says</h1>
                            <h2 class="chat-post-time" style="font-weight: lighter">${postTime}</h2>
                            <h1 class="chat-post-text">${postContent}</h1>
                        </div>
                    </div>
                </div>
                `
                prevDate = currDate;
            } 
            HTML += `</div>`
        } else if (stateChatPosts['retries']<10) {
            HTML += `
            <h1>Loading Posts</h1>
            `
            stateChatPosts['retries']++;
            console.log(stateChatPosts['retries']);
        } else {
            HTML += `
            <h1>Servers are down atm!</h1>
            `
        }

        i.innerHTML = HTML;
    }
}