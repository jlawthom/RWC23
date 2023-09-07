stateChatBoard = {
    "activePlayer": sessionStorage.getItem("activePlayer")
}
async function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        let heightFooter = document.getElementsByClassName("Footer")[0].clientHeight;

        let HTML=`    
        <div class="ChatPosts"></div> 
        <div class="ChatInputBar" style="bottom:${heightFooter}"></div>   
        `;
        i.innerHTML = HTML;

        getPosts();
        renderChatInputBar();
        renderChatPosts();
        renderChatLogin();
    }
    stateChatPosts['scrolled']=false;
}