// var url = 'http://39.96.76.183:8080'
var url = 'http://localhost:8080'
var jq = jQuery.noConflict();
// var $=jQuery.noConflict();
// var url1 = 'http://localhost:8080/book/recommend'
// var url2 = 'http://localhost:8080/book/hot'
// var url3 = 'http://localhost:8080/book/latest'

(function($) {
	// alert("页面加载完成！"); 
	var bookId = new Array(8);
	
	function loadRecommendBook() {
		$.ajax({
			type: 'get',
			url: url + '/book/recommend',
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				for (var i = 0; i < res.length; i++) {
					var imgUrl = res[i].cover
					var summary = res[i].summary
					var name = res[i].name
					bookId[i] = res[i].id
					console.log(bookId[i])
					
					var str = "<a id='recommendURL"+(i + 1)+"' href='book.html?id="+bookId[i]+"' target='_blank'><img id='recommendImg"+(i + 1)+"' src='./imgs/defaultCover.png' class='card-img-top mx-auto mt-3' style='width: 180px; height: 250px;' alt='...'></a>"
					$('#recommendURL'+(i + 1)).replaceWith(str)
					
					$('#recommendSummary' + (i + 1)).html(summary)
					$('#recommendName' + (i + 1)).html(name)
					
					if (imgUrl != null) {
						$('#recommendImg' + (i + 1)).attr("src", imgUrl)
					}
					
					console.log(imgUrl + " " + summary)
				}
			}
		})
	};

	loadRecommendBook();

	function loadLatestBook() {
		$.ajax({
			type: 'get',
			url: url + '/book/latest',
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				for (var i = 0; i < res.length; i++) {
					var imgUrl = res[i].cover
					var summary = res[i].summary
					var name = res[i].name
					bookId[i] = res[i].id
					console.log(bookId[i])
					
					var str = "<a id='latestURL"+(i + 1)+"' href='book.html?id="+bookId[i]+"'  target='_blank'><img id='latestImg"+(i + 1)+"' src='./imgs/defaultCover.png' class='card-img-top mx-auto mt-3' style='width: 180px; height: 250px;' alt='...'></a>"
					$('#latestURL'+(i + 1)).replaceWith(str)

					$('#latestSummary' + (i + 1)).html(summary)
					$('#latestName' + (i + 1)).html(name)
					if (imgUrl != null) {
						$('#latestImg' + (i + 1)).attr("src", imgUrl)
					}
					
					console.log(imgUrl + " " + summary)
				}
			}
		})
	};

	loadLatestBook();

	function loadHotBook() {
		$.ajax({
			type: 'get',
			url: url + '/book/hot',
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				for (var i = 0; i < res.length; i++) {
					var imgUrl = res[i].cover
					var summary = res[i].summary
					var name = res[i].name
					bookId[i] = res[i].id
					console.log(bookId[i])
					
					var str = "<a id='hotURL"+(i + 1)+"' href='book.html?id="+bookId[i]+"'  target='_blank'><img id='hotImg"+(i + 1)+"' src='./imgs/defaultCover.png' class='card-img-top mx-auto mt-3' style='width: 180px; height: 250px;' alt='...'></a>"
					$('#hotURL'+(i + 1)).replaceWith(str)

					$('#hotSummary' + (i + 1)).html(summary)
					$('#hotName' + (i + 1)).html(name)
					if (imgUrl != null) {
						$('#hotImg' + (i + 1)).attr("src", imgUrl)
					}

					console.log(imgUrl + " " + summary)
				}
			}
		})
	};

	loadHotBook();
	
	searchKey = function() {
		var text = $('#searchInput').val()
		var url = encodeURI('result.html?value='+text)
		console.log(text)
		window.location.href=(url)
	}
})(jQuery);
