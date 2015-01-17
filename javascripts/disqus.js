$(document).ready(function () {
	window.disqus_shortname = 'itzhangzh'; // required: replace example with your forum shortname
	$('#disqus_container .comment').on('click',function(){
		$(this).html('加载中...');
		        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;  
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';  
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);  
	});
});
