//headerをtopicsから固定
function FixedAnime() {
	var elemTop = $('.topics').offset().top;//#area-3の位置まできたら
	var scroll = $(window).scrollTop();
	if(scroll <= 20){//上から20pxスクロールされたら
		$('.header-pc').addClass('DownMove');
		//DownMoveというクラス名を除き
	} else if (scroll >= elemTop){
			$('.header-pc').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
			$('.header-pc').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

		}else{
			if($('.header-pc').hasClass('DownMove'))
				{//すでに#headerにDownMoveというクラス名がついていたら
				$('.header-pc').removeClass('DownMove');//DownMoveというクラス名を除き
				$('.header-pc').addClass('UpMove');//UpnMoveというクラス名を付与
			}
		}
}

$(window).scroll(function () {
	FixedAnime();
});

/*ハンバーガメニュー */
$(".sp-open-btn").click(function () {
    $(this).toggleClass('active');
    $('.sp-menu').toggleClass('active');
    $('.header-sp').toggleClass('active');
    $('body').toggleClass('fixed');
});

//アコーディオンをクリックした時の動作
$('.plus-icon').click(function() {
	$(this).toggleClass('close');
    $(this).parent('h4').next(".box").slideToggle();
});

/*hero slider*/
$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    arrows: false,
    dotsClass: "slide-dots"
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});

//headerのナビをhoverした時のメニュー表示３つ
$('.product-hover-btn').hover(function(){
	$('.product-hover').toggleClass('active');
});

$('.support-hover-btn').hover(function(){
	$('.support-hover').toggleClass('active');
});

$('.onlineShop-hover-btn').hover(function(){
	$('.onlineShop-hover').toggleClass('active');
});

/*more の下線、矢印の動き */
	$('.more,.more-c').hover(function(){
		let children =$(this).children()
		$(children).next('div').toggleClass('active');
	});

/*supportの矢印の動き */
	$('.support-contents-text,.support-question').hover(function(){
		let children =$(this).children()
		$(children).next('div').toggleClass('active');
	});

/*selectの矢印の動き */
	$('.select-start,.select-more').hover(function(){
		let children =$(this).children()
		$(children).next('div').toggleClass('active');
	});

//more hover
$('.more,.more-c').hover(function(){
	let children =$(this).children('.more p,.more-c p,.arrow.arrow-right')
	$(children).toggleClass('hover');
});

//select hover
$('.select-more,.select-start').hover(function(){
	let children =$(this).children('.select-more p,.select-start p,.arrow.arrow-right')
	$(children).toggleClass('hover');
});

$('.sub-topics-list-item').hover(function(){
	let children =$(this).children('div').children('img')
	$(children).toggleClass('hover');
});

function fadeAnime() {

/*スクロールしたら下からひゅっと順番に表示 */
$('.delayScroll').each(function (){
	var time = 0.5;//遅延時間を増やす秒数の値
	var value = time;
	var parent = this;					//親要素を取得
	var elemPos = $(this).offset().top;//要素の位置まで来たら
	var scroll = $(window).scrollTop();//スクロール値を取得
	var windowHeight = $(window).height();//画面の高さを取得
	var child = $(this).children();	//子要素を取得

	$(child).each(function () {
	if (scroll >= elemPos - windowHeight - 50) {//指定領域内にスクロールが入ったら
		$(this).addClass("fadeUp");
		$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
		value = value + time;//delay時間を増加させる
		//全ての処理を終わったら元に戻す
		}
	})
});

$('.conceptScroll').each(function (){
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	var parent = this;					//親要素を取得
	var elemPos = $(this).offset().top;//要素の位置まで来たら
	var scroll = $(window).scrollTop();//スクロール値を取得
	var windowHeight = $(window).height();//画面の高さを取得
	var child = $(this).children();	//子要素を取得

	$(child).each(function () {
	if (scroll >= elemPos - windowHeight - 50) {//指定領域内にスクロールが入ったら
		$(this).addClass("concept-blur");
		$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
		value = value + time;//delay時間を増加させる
		//全ての処理を終わったら元に戻す
		}
	})
});

//じわっとする
$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
	var elemPos = $(this).offset().top-50; //要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('blur');
	}
});

//左からふわっ
$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft');
		// 画面内に入ったらfadeDownというクラス名を追記
	}
	});

}

$(window).scroll(function (){
	fadeAnime();
});

// eachTextAnimeにactiveというクラス名を付ける定義
function EachTextAnimeControl() {
$('.eachTextAnime').each(function () {
	var elemPos = $(this).offset().top - 50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
	$(this).addClass("active");

	}
});
}

$(window).scroll(function () {
EachTextAnimeControl();
});

//spanタグを追加する
var element = $(".eachTextAnime");
element.each(function () {
	var text = $(this).text();
	var textbox = "";
	text.split('').forEach(function (t, i) {
	if (t !== " ") {
		if (i < 10) {
		textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
		} else {
		var n = i / 10;
		textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
		}

	} else {
		textbox += t;
	}
	});
	$(this).html(textbox);
});

$('.support-contents-list-item').hover(function(){
	let children =$(this).children();
	$(children).toggleClass('hover');
});

$('.column-contents-list2-item').hover(function(){
	let children = $(this).children();
	$(children).toggleClass('hover');
});

$('.main-topics').hover(function(){
	let children =$(this).children('div').children('img');
	let child_p =$(this).children('p');
	$(children).toggleClass('hover');
	$(child_p).toggleClass('hover');
});

$('.sub-topics-list-item').hover(function(){
	let children =$(this).children();
	$(children).toggleClass('hover');
});

$('.hairItem-image-list-item').hover(function(){
	let children =$(this).children();
	$(children).toggleClass('hover');
});

$('.skinCare-image-list-item').hover(function(){
	let children =$(this).children();
	$(children).toggleClass('hover');
});