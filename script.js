$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

    $('.product-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.product').each(function(){
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
        });
    });
});

function openContactOptions(productName) {
    const options = `
        <div class="contact-method">
            <p>选择一个联系方法来购买 ${productName}:</p>
            <a href="weixin://dl/chat?your_wechat_id"><i class="fab fa-weixin"></i></a>
            <a href="tencent://message/?uin=your_qq_number&Site=Sambilan.com&Menu=yes"><i class="fab fa-qq"></i></a>
            <a href="tg://resolve?domain=your_telegram_username"><i class="fab fa-telegram-plane"></i></a>
            <a href="https://discordapp.com/users/your_discord_id"><i class="fab fa-discord"></i></a>
        </div>
    `;
    const newWindow = window.open("", "_blank", "width=400,height=400");
    newWindow.document.write(options);
}
