// 处理联系表单提交
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // 您可以在此处添加发送表单数据到服务器的逻辑
        console.log('表单已提交: ', { name, message });
        
        // 清除表单
        contactForm.reset();
        
        alert('感谢您的联系，我们会尽快回复您！');
    });
});

// 打开联系选项窗口
function openContactOptions(productName) {
    const options = `
        <html>
        <head>
            <title>联系购买 ${productName}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                .contact-method a {
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    background-color: #333;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="contact-method">
                <p>选择一个联系方法来购买 ${productName}:</p>
                <a href="weixin://dl/chat?Lucifer8963">微信</a>
                <a href="tencent://message/?uin=your_qq_number&Site=Sambilan.com&Menu=yes">QQ</a>
                <a href="tg://resolve?domain=Cat011">Telegram</a>
                <a href="https://discordapp.com/users/fog119">Discord</a>
            </div>
        </body>
        </html>
    `;
    const newWindow = window.open("", "_blank", "width=400,height=400");
    newWindow.document.write(options);
    newWindow.document.close();
}
