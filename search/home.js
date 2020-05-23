var text = document.getElementsByTagName('input')[0];
var ul = document.getElementsByTagName('ul')[0];

var data = new Array("推荐关键词1", "推荐关键词2", "推荐关键词3");

text.onkeyup = function() {
	var txt = text.value;
	var html = '';

	for (var i = 0; i < data.length; i++) {
		html += ' <li class="list-group-item">' + data[i] + '</li>';
	}
	ul.innerHTML = html;
	ul.className = 'list-group h-100 show';
};

text.onblur = function() {
	ul.className = 'list-group h-100 hidden';
};

ul.onclick = function(e) {
	var li = e.target;
	var title = li.innerHTML;
	console.log(title);
	text.value = title;
}

ul.className = 'list-group h-100 hidden';