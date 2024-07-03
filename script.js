function openContactOptions(productName) {
    const options = `
        <div class="contact-method">
            <p>选择一个联系方法来购买 ${productName}:</p>
            <a href="weixin://dl/chat?Lucifer8963">微信</a>
            <a href="tencent://message/?uin=your_qq_number&Site=Sambilan.com&Menu=yes">QQ</a>
            <a href="tg://resolve?domain=Cat011">Telegram</a>
            <a href="https://discordapp.com/users/fog119">Discord</a>
        </div>
    `;
    const newWindow = window.open("", "_blank", "width=400,height=400");
    newWindow.document.write(options);
}
