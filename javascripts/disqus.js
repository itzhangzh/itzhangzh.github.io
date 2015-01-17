$(document).ready(function () {
	window.disqus_shortname = 'itzhangzh'; // required: replace example with your forum shortname
	$('#disqus_container .comment').on('click',function(){
		$(this).html('加载中...');
		var that = this;
		$.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
	});
});
