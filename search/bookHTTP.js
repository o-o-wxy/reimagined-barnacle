// var url = 'http://39.96.76.183:8080'
var requestUrl = 'http://localhost:8080'
var jq = jQuery.noConflict();

var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?') + 1);
var arr = urlParmStr.split('&');
var id = arr[0].split("=")[1];
console.log(id);
console.log(requestUrl + '/book/'+id);

(function($) {

	function load() {
		$.ajax({
			type: 'get',
			url: requestUrl + '/book/'+id,
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				var name = res.name
				var imgUrl = res.cover
				var summary = res.summary
				var authors = res.authors
				var authorIntro = res.authorIntro
				var translators = res.translators
				var publisher = res.publisher
				var publishDate = res.publishDate
				var pages = res.pages
				var price = res.price
				var tags = res.tags.split('/')
				var doubanScore = res.doubanScore
				
				$('#name').html(name)
				
				if (imgUrl == null) {
					imgUrl = './imgs/defaultCover.png'
				}
				$('#cover').attr("src", imgUrl)
				
				$('#summary').html(summary)
				$('#authors').html(authors)
				$('#authorIntro').html(authorIntro)
				if(translators!=""){
					$('#translatorsDiv').replaceWith("<li class='list-group-item'>译者：<span>"+translators+"</span></li>")
				}
				$('#publisher').html(publisher)
				$('#publishDate').html(publishDate)
				$('#pages').html(pages)
				$('#price').html(price)
				$('#doubanScore').html(doubanScore)
				
				var str
				for (var i = 0; i<tags.length; i++){
					str="<span class='badge badge-info mr-3'>"+tags[i]+"</span>"
					$('#tags').append(str)
				}
			}
		})
	};

	load();

})(jQuery);
