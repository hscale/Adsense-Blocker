var isOverGoogleAd = false;

var ad = /adsbygoogle/;

$(document).ready(function()
{	
	$('ins').on('mouseover', function () {
		if(ad.test($(this).attr('class'))){
			isOverGoogleAd = true;
		}
	});
	$('ins').on('mouseout', function () {
		if(ad.test($(this).attr('class'))){
			isOverGoogleAd = false;
		}
	});
});

$(window).blur(function(e){
	if(isOverGoogleAd){
		$('.myAds').hide();
		$.ajax({
			type: "post",
			url: "AdsenseBlocker/recorder.php",
			data: {
				adUrl: window.location.href
				}
		});
	}
});
