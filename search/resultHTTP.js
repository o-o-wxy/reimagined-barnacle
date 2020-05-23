var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?') + 1);
var arr = urlParmStr.split('&');
var text = arr[0].split("=")[1];
text = decodeURI(text);
console.log(text);
$("#searchInput").val(text);

var requestUrl = 'http://localhost:8080';

(function($) {
	
	function loadSearchBook(){
		var bookId = new Array();
		console.log(requestUrl + '/book?key=' + text)
		
		$.ajax({
			type: 'post',
			url: encodeURI(requestUrl + '/book?key=' + text),
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				for (var i = 0; i < res.length; i++) {
					var imgUrl = res[i].cover
					var name = res[i].name
					var authors = res[i].authors
					// if(res[i].authors==null){
					// 	authors = "无"
					// }
					var summary = res[i].summary
					var tags = res[i].tags.split('/')
					
					bookId[i] = res[i].id
					console.log(bookId[i])
					
					if (imgUrl == null) {
						imgUrl='./imgs/defaultCover.png'
					}
					
					var str = "<div class='row p-1' style='border:1px solid #C6C8CA;'><div class='media m-3'><a href='book.html?id="+bookId[i]+"' target='_blank'><img class='media-left media-middle media-bottom' style='width: 144px; height: 200px;' src='"+ imgUrl +"' /></a><div class='media-body ml-5'><ul class='list-unstyled' style='font-size:18px;line-height: 2em;'><li>书名：<span>"+ name +"</span></li><li>作者：<span>"+authors+"</span></li><li><p class='card-text' style='display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow: hidden;'> <span>简介：</span>"+summary+"</p></li><li><div class='card-text mt-2' style='font-size:20px; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:1; overflow: hidden;'>"
					
					for (var j = 0; j<tags.length; j++){
						str=str+"<span class='badge badge-info mr-3'>"+tags[j]+"</span>"
					}
					
					str=str+"</div></li><li></li></ul></div></div></div>"
					
					$('#main').append(str)
		
		// 			bookId[i] = res[i].id
					console.log(imgUrl + " " + name + " " +authors + " " +summary + " " +tags)
				}
			}
		})
	}
	
	loadSearchBook();
	
	searchKey = function() {
		var bookId = new Array();
		var inputKey = $('#searchInput').val();
		document.location.href = encodeURI('result.html?value='+inputKey)
		console.log(requestUrl + '/book?key=' + inputKey)
		
		$('#main').replaceWith("<div id='main' class='container mt-5 mb-5'></div>")
		
		$.ajax({
			type: 'post',
			url: encodeURI(requestUrl + '/book?key=' + inputKey),
			contentType: "application/x-www-form-urlencoded",
			dataType: 'json',
			success: function(res) {
				for (var i = 0; i < res.length; i++) {
					var imgUrl = res[i].cover
					var name = res[i].name
					var authors = res[i].authors
					// if(res[i].authors==null){
					// 	authors = "无"
					// }
					var summary = res[i].summary
					var tags = res[i].tags.split('/')
					bookId[i] = res[i].id
					console.log(bookId[i])
					
					if (imgUrl == null) {
						imgUrl='./imgs/defaultCover.png'
					}
					
					var str = "<div id='main'><div class='row p-1' style='border:1px solid #C6C8CA;'><div class='media m-3'><a href='book.html?id="+bookId[i]+"' target='_blank'><img class='media-left media-middle media-bottom' style='width: 144px; height: 200px;' src='"+ imgUrl +"' /></a><div class='media-body ml-5'><ul class='list-unstyled' style='font-size:18px;line-height: 2em;'><li>书名：<span>"+ name +"</span></li><li>作者：<span>"+authors+"</span></li><li><p class='card-text' style='display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow: hidden;'> <span>简介：</span>"+summary+"</p></li><li><div class='card-text mt-2' style='font-size:20px; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:1; overflow: hidden;'>"
					
					for (var j = 0; j<tags.length; j++){
						str=str+"<span class='badge badge-info mr-3'>"+tags[j]+"</span>"
					}
					
					str=str+"</div></li><li></li></ul></div></div></div></div>"
					
					$('#main').append(str)
		
		// 			bookId[i] = res[i].id
					console.log(imgUrl + " " + name + " " +authors + " " +summary + " " +tags)
				}
			}
		})
	}

})(jQuery);
