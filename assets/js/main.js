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

$(function(){
    $('.product-hover-btn').hover(function(){
        $('.product-hover').toggleClass('active');
    });
});

/* header スクロールしたら途中から固定 */
function FixedAnime() {
	var elemTop = $('.topics').offset().top;//.topicsの位置まできたら
	var scroll = $(window).scrollTop();
	if(scroll <= 20){//上から20pxスクロールされたら $('#header').addClass('DownMove');//DownMoveというクラス名を除き } else if (scroll >= elemTop){
			$('.header-pc').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
			$('.header-pc').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

		}else{
			if($('.header-pc').hasClass('DownMove')){//すでに#headerにDownMoveというクラス名がついていたら
				$('.header-pc').removeClass('DownMove');//DownMoveというクラス名を除き
				$('.header-pc').addClass('UpMove');//UpnMoveというクラス名を付与
			}
		}
}


function slideAnime(){
//====左に動くアニメーションここから===
	$('.leftAnime').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			//左から右へ表示するクラスを付与
			//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
			$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
			$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
		}else{
			//左から右へ表示するクラスを取り除く
			$(this).removeClass("slideAnimeLeftRight");
			$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

		}
	});

}


// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
$('.eachTextAnime').each(function () {
	var elemPos = $(this).offset().top - 50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
	$(this).addClass("appeartext");

	} else {
	$(this).removeClass("appeartext");
	}
});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述



/**more の下線、矢印の動き */
$(function(){
	$('.more,.more-c').hover(function(){
		$('.arrow.arrow-right').toggleClass('active');
	});
});

/*supportの矢印の動き */
$(function(){
	$('.support-contents-text,.support-question').hover(function(){
		$('.arrow.arrow-right').toggleClass('active');
	});
});

/*selectの矢印の動き */
$(function(){
	$('.select-start,.select-more').hover(function(){
		$('.arrow.arrow-right').toggleClass('active');
	});
});