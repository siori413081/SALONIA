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

$(function(){
    $('.support-hover-btn').hover(function(){
        $('.support-hover').toggleClass('active');
    });
});

$(function(){
    $('.onlineShop-hover-btn').hover(function(){
        $('.onlineShop-hover').toggleClass('active');
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

/**下からひゅっ */
function fadeAnime() {
	var time = 0.5;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {

				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック

					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる

					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}else {
						$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
						value = time;//delay初期値の数値に戻す
					}
				}
			})
		}
	})
//じわっとする
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		// 画面内に入ったらfadeDownというクラス名を追記
		}else{
		$(this).removeClass('blur');
		// 画面外に出たらfadeDownというクラス名を外す
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
			}else{
			$(this).removeClass('fadeLeft');
			// 画面外に出たらfadeDownというクラス名を外す
			}
			});


}



//文字が流れる
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
		$(window).scroll(function () {
			EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
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

			}
			});
			$(this).html(textbox);
		});
	});
}



// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

