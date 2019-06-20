var slideCurrent = 1;
var slideCount;
var curLang = "укр";
var curPage = "content";


$(document).ready(function() {
    Slide();

    $('#ua').addClass('active-lng');
    ChangeLang(curLang);

//Смена языка
    $('.lng-button').click(function () {
        ChangeLang($(this).html());

        if(curLang === 'рус'){
            $('#ua').removeClass('active-lng');
            $('#ru').addClass('active-lng');
        }
        else {
            $('#ua').addClass('active-lng');
            $('#ru').removeClass('active-lng');
        }
    });

    $('.lng-button').hover(function () {

        if(curLang === 'рус') $('#ru').removeClass('active-lng');
        else $('#ua').removeClass('active-lng');
        $(this).addClass('active-lng');

    }, function () {

        $(this).removeClass('active-lng');
        if(curLang === 'рус') $('#ru').addClass('active-lng');
        else $('#ua').addClass('active-lng');
    });


//Смена страниц
    $('.img-block, .more a, .block .block-icon .image, footer a').click(function () {
        ChangePage($(this).attr('name'));
    });

    // $('.menuMain-txt').click(MainPage);

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        if(curPage === 'page'){
            MainPage();

            setTimeout(function () {
                $('html, body').animate({scrollTop: $(target).offset().top - 45}, 1000);
                return false;
            }, 400)
        }
        else {
            $('html, body').animate({scrollTop: $(target).offset().top - 45}, 1000);
            return false;
        }
    });

    $('#goUp').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
    })
});

function MainPage() {
    if(curPage != 'content') {
        $('.content').show('normal');
        $('.page').hide('normal');

        $('#head-info').show('normal');
        curPage = 'content';
    }
}

var curH;
function ChangePage(pageH) {
    curPage = 'page';

    $('.page').find('h1').html(SelectLang(curLang, pageH));
    $('.page').find('h1').removeClass(curH);
    $('.page').find('h1').addClass(pageH);

    if(curLang === "рус"){
        $('.page').find('#info').load('info/infoRu.html #' + pageH);
    }
    else $('.page').find('#info').load('info/infoUa.html #' + pageH);

    if(pageH === "rules"|| pageH === "confidence"){
        $('.page').find('h1').css('text-align', 'center');
    }
    else {
        $('.page').find('h1').css('text-align', 'left');
    }

    $('.page').show('normal');
    $('.content').hide('normal');
    $('header').css('box-shadow', '0 0 50px #404040');

    $('#head-info').hide('normal');
    $('html, body').animate({scrollTop: 0}, 400);

    curH = pageH;
}

function SelectLang(lng, id){
    if(lng === 'рус'){
        return russian[id];
    }
    else return ukrainian[id];
}

function ChangeLang(lng) {
    curLang = lng;

    $('body').find('[lang]').each(function () {
        $(this).hide();
        $(this).html(SelectLang(lng, $(this).prop('class'))).fadeIn(1000)
    })

    $('body').find('.more a').each(function () {
        $(this).hide();
        $(this).html(SelectLang(lng, 'more')).fadeIn(1000)
    })

    $('body').find('footer .description a').each(function () {
        $(this).hide();
        $(this).html(SelectLang(lng, $(this).prop('name'))).fadeIn(1000)
    })

    if(curLang === "рус"){
        $('.page').find('#info').load('info/infoRu.html #' + curH);
    }
    else $('.page').find('#info').load('info/infoUa.html #' + curH);
}

//noinspection JSUnresolvedFunction
$(document).scroll(function(){
    if($(this).scrollTop() > 88){
        $('#mainMenu').addClass("scroll-menu");
        $('#goUp').css('bottom', '50px');
    }
    else{
        $('#mainMenu').removeClass("scroll-menu");
        $('#goUp').css('bottom', '-100px');
    }
});


function Slide(){
    slideCount = $('#slide-wrapper').children().length;

    var interval = setInterval(NextSlide, 4000);
    var old = $('#slider').html();

    $('#slider').html(old + "<div class='nav-view'></div>");

    for(var i = 0; i < slideCount; i++){
        var oldNavView = $('.nav-view').html();
        $('.nav-view').html(oldNavView + "<div class='nav-list'></div>");
    }

    $('#slide-wrapper').find('.slide').first().addClass('active-p');
    $('.nav-view').find('.nav-list').first().addClass('active-nav');


    $('#slider').hover(function() {clearInterval(interval)},
                       function() {interval = setInterval(NextSlide, 5000);});
    $('#prev').click(  function() {PrevSlide()});
    $('#next').click(  function() {NextSlide()});

    $('.nav-list').click(function() {
        slideCurrent = $(this).index();
        NextSlide();
    });
}

function NextSlide(){

    if(slideCurrent === slideCount){
        //$('#slide-wrapper').css('transform', 'translate(0, 0)');

        $('#slide-wrapper').find('.active-p').removeClass('active-p');
        $('#slide-wrapper').find('.slide').first().addClass('active-p');
        $('.nav-view').find('.active-nav').removeClass('active-nav');
        $('.nav-view').find('.nav-list').first().addClass('active-nav');
        slideCurrent = 1;
    }
    else {
        //var CurrentWidth = width * slideCurrent;
        //$('#slide-wrapper').css('transform', 'translate(' + CurrentWidth + 'px, 0)');

        $('#slide-wrapper').find('.active-p').removeClass('active-p');
        $('#slide-wrapper').find('.slide').eq(slideCurrent).addClass('active-p');
        $('.nav-view').find('.active-nav').removeClass('active-nav');
        $('.nav-view').find('.nav-list').eq(slideCurrent).addClass('active-nav');
        slideCurrent ++;
    }
}

function PrevSlide(){
    //var PrevWidth = width * (slideCount - 1);
    if(slideCurrent === 1){
        //$('#slide-wrapper').css('transform', 'translate(' + PrevWidth + 'px, 0)');

        $('#slide-wrapper').find('.slide').last().addClass('active-p');
        $('#slide-wrapper').find('.active-p').removeClass('active-p');
        $('.nav-view').find('.nav-list').last().addClass('active-nav');
        $('.nav-view').find('.active-nav').removeClass('active-nav');

        slideCurrent = slideCount;
    }
    else {
        slideCurrent--;

        //var CurrentWidth = PrevWidth - width*(slideCount - slideCurrent);
        //$('#slide-wrapper').css('transform', 'translate(' + CurrentWidth + 'px, 0)');

        $('#slide-wrapper').find('.active-p').removeClass('active-p');
        $('#slide-wrapper').find('.slide').eq(slideCurrent-1).addClass('active-p');
        $('.nav-view').find('.active-nav').removeClass('active-nav');
        $('.nav-view').find('.nav-list').eq(slideCurrent-1).addClass('active-nav');
    }
}

var ukrainian = {
    'place-txt': "Україна, м.Київ<br>(067) 150-23-61",
    'info-txt': "ЮРИДИЧНІ ПОСЛУГИ<br>ПО ВСІМ ГАЛУЗЯМ ПРАВА",
    'menuMain-txt': "ГОЛОВНА",
    'menuSecond-txt': "ПОСЛУГИ ЮР. ОСОБАМ",
    'menuThree-txt': "ПОСЛУГИ ФІЗ. ОСОБАМ",
    'menuFour-txt': "ДОД. ПОСЛУГИ",
    'menuFive-txt': "КОНТАКТИ",
    "slideFour-txt": "Професійний підхід - зважене рішення",
    "slideSeven-txt": "Ми працюємо на ваш успіх",
    "slideFive-txt": "Індивідуальний підхід до кожного клієнта",
    "slideOne-txt": "Бізнес починається з реєстрації",
    "slideEight-txt": "Професійна підтримка ваших досягнень",
    "s1b1-txt": "Надання консультацій з правових питань",
    "s1b2-txt": "Представництво інтересів клієнта в судах",
    "s1b3-txt": "Складання, аналіз, супроводження договорів",
    "s1b4-txt": "Складання процесуальних документів",
    "s2-txt": "Послуги для юридичних осіб",
    "s2b1-txt": "Господарські<br> спори",
    "s2b2-txt": "Адміністративні<br> спори",
    "s2b3-txt": "Трудові<br> спори",
    "s2b4-txt": "Абонентське<br> обслуговування",
    "s2b1-ftxt": "Господарські спори",
    "s2b2-ftxt": "Адміністративні спори",
    "s2b3-ftxt": "Трудові спори",
    "s2b4-ftxt": "Абонентське обслуговування",
    "s3-txt": "Послуги для фізичних осіб",
    "s3b1-txt": "Спадкові спори",
    "s3b2-txt": "Земельні спори",
    "s3b3-txt": "Сімейні спори",
    "s3b4-txt": "Житлові спори",
    "s3b5-txt": "Трудові спори",
    "s3b6-txt": "Адміністративні спори",
    "s3b7-txt": "Досудове врегулювання спорів",
    "s4-txt": "Додаткові послуги",
    "s4b1-txt": "Реєстрація<br> підприємств",
    "s4b2-txt": "Реєстрація<br> авторських прав",
    "s4b3-txt": "Реєстрація<br> торгової марки",
    "s4b1-ftxt": "Реєстрація підприємств",
    "s4b2-ftxt": "Реєстрація авторських прав",
    "s4b3-ftxt": "Реєстрація торгової марки",
    "more": "Детальніше",
    "footerPlace-txt": "Україна, м. Київ<br>(067) 150-23-61<br>(063) 836-67-81<br>ivcorporat@gmail.com",
    "bottom-text": "<span class = 'footer-bold-p'>IV Corporation</span>, всі права захищено.",
    "rules": "Правила користування",
    "confidence": "Положення про конфіденційність"
}

var russian = {
    'place-txt': "Украина, г.Киев<br>(067) 150-23-61",
    'info-txt': "ЮРИДИЧЕСКИЕ УСЛУГИ<br>ПО ВСЕМ ОТРАСЛЯМ ПРАВА",
    'menuMain-txt': "ГЛАВНАЯ",
    'menuSecond-txt': "УСЛУГИ ЮР. ЛИЦАМ",
    'menuThree-txt': "УСЛУГИ ФИЗ. ЛИЦАМ",
    'menuFour-txt': "ДОП. УСЛУГИ",
    'menuFive-txt': "КОНТАКТЫ",
    "slideFour-txt": "Профессиональный подход - взвешенное решение",
    "slideSeven-txt": "Мы работаем на ваш успех",
    "slideFive-txt": "Индивидуальный подход к каждому клиенту",
    "slideOne-txt": "Бизнес начинается с регистрации",
    "slideEight-txt": "Профессиональная поддержка ваших достижений",
    "s1b1-txt": "Предоставление консультаций и по правовым вопросам",
    "s1b2-txt": "Представительство интересов клиента в судах",
    "s1b3-txt": "Составление, анализ, сопровождение договоров",
    "s1b4-txt": "Составление процесуальных документов",
    "s2-txt": "Услуги для юридических лиц",
    "s2b1-txt": "Хозяйственные<br> споры",
    "s2b2-txt": "Административные<br> споры",
    "s2b3-txt": "Трудовые<br> споры",
    "s2b4-txt": "Абонентское<br> обслуживание",
    "s2b1-ftxt": "Хозяйственные споры",
    "s2b2-ftxt": "Административные споры",
    "s2b3-ftxt": "Трудовые споры",
    "s2b4-ftxt": "Абонентское обслуживание",
    "s3-txt": "Услуги для физических лиц",
    "s3b1-txt": "Наследственные споры",
    "s3b2-txt": "Земельные споры",
    "s3b3-txt": "Семейные споры",
    "s3b4-txt": "Жилищные споры",
    "s3b5-txt": "Трудовые споры",
    "s3b6-txt": "Административные споры",
    "s3b7-txt": "Досудебное урегулирование споров",
    "s4-txt": "Дополнительные услуги",
    "s4b1-txt": "Регистрация<br> предприятий",
    "s4b2-txt": "Регистрация<br>авторских прав",
    "s4b3-txt": "Регистрация<br> торговой марки",
    "s4b1-ftxt": "Регистрация предприятий",
    "s4b2-ftxt": "Регистрация авторских прав",
    "s4b3-ftxt": "Регистрация торговой марки",
    "more": "Подробнее",
    "footerPlace-txt": "Украина, г. Киев<br>(067) 150-23-61<br>(063) 836-67-81<br>ivcorporat@gmail.com",
    "bottom-text": "<span class = 'footer-bold-p'>IV Corporation</span>, все права защищены.",
    "rules": "Условия использования",
    "confidence": "Положение о конфиденциальности"

}