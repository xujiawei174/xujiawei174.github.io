let envelope_opened = false;

let content = {
    to: "",
    from: "",
    recipient: "",
    text: "",
    sign: 0
};

window.onload = function () {

    loadingPage();

    $.ajaxSettings.async = true;
    content.to = "To&nbsp;&nbsp;Alice";
    content.from = "ボブ^200より";
    content.recipient = "アリス^200ちゃん";
    content.text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;もしも^200あの^200日、^600あなたに^200出会っていなければ、^600こんなに^200苦しくて、^600こんなに^200悲しくて、^600こんなに^200涙が^200溢れるような^200思いは^200しなかったと^200思う。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;だけど、^600あなたに^200出会っていなければ、^600こんなに^200嬉しくて、^600こんなに^200优^200しくて、^600こんなに^200爱^200しくて、^600こんなに^200温かくて、^600こんなに^200幸せ気持ちを^200知る^200ことも^200できなかった、^600涙^200こらえて^200私は^200今日も^200空を^200见^200上げる。";
    content.sign = getPureStr(content.from).pxWidth('18px Satisfy, serif');
    document.title = "eLuvLetter";
    $('#recipient').append(content.to);
    $('#flip').text("Bob");
    $('#stamp img').attr('src', "./img/stamp.png");
    toBase64("./bgm/bgm.mp3");
    // $.getJSON("./font/content.json", function (result) {
    //     content.to = result.to;
    //     content.from = result.from;
    //     content.recipient = result.recipient;
    //     content.text = result.text;
    //     content.sign = getPureStr(content.from).pxWidth('18px Satisfy, serif');
    //     document.title = result.title;
    //     $('#recipient').append(content.to);
    //     $('#flip').text(result.sender);
    //     if (result.stamp != null) {
    //         $('#stamp img').attr('src', result.stamp);
    //     }
    //     toBase64(result.bgm);
    // });

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) event.preventDefault();
    });

    let lastTouchEnd = 0;

    document.addEventListener('touchend', function (event) {

        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;

    }, false);

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });

    let contact = $('#contact');
    let mtop = (window.innerHeight - contact.height()) * 0.5;
    contact.css('margin-top', mtop + 'px');
    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');

}

window.onresize = function () {
    let cherry_container = $('#jsi-cherry-container');
    let canvas = cherry_container.find('canvas').eq(0);
    canvas.height(cherry_container.height());
    canvas.width(cherry_container.width());
    // Do scaling for sakura background when the window is resized
    loadingPage();
}