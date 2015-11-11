var dataSource=[
	{"id":"1","path":"/images/01.jpg","desc":"pic 1"},
	{"id":"2","path":"/images/02.jpg","desc":"pic 2"},
	{"id":"3","path":"/images/03.jpg","desc":"pic 3"},
	{"id":"4","path":"/images/04.jpg","desc":"pic 4"},
	{"id":"5","path":"/images/05.jpg","desc":"pic 5"},
	{"id":"6","path":"/images/06.jpg","desc":"pic 6"},
	{"id":"7","path":"/images/07.jpg","desc":"pic 7"}
]

$(function(){
	//var objlength=dataSource.length;
	var ImageHtml=getImagesFrame(dataSource);
	var NavLableHtml=getNavLableHtml(dataSource);
	$("#slideshow").html(ImageHtml+NavLableHtml);
	
	$("#slideshow .slideshowimg li").hide();
	$("#slideshow .slideshowimg li:eq(0)").show();
	
	$("#slideshow .slideshownav li").click(function(event){
		$("#slideshow .slideshowimg li").hide();
		$("#simg"+$(event.target).text()).show();
	});
	
});

function getNavLableHtml(obj){
	var navLabelHtml="<ul class=\"slideshownav\">";
	for( var x in obj){
		navLabelHtml+="<li>"+obj[x].id+"</li>"
	}
	navLabelHtml=navLabelHtml+"</ul>"
	console.log(navLabelHtml);
	return navLabelHtml;
}

function getImagesFrame(obj){
	var imageslHtml="<ul class=\"slideshowimg\">";
	for( var x in obj){
		imageslHtml+="<li id=\"simg"+obj[x].id+"\"><img  src=\""+obj[x].path+"\" alt=''></li>"
	}
	imageslHtml=imageslHtml+"</ul>";
	console.log(imageslHtml);
	return imageslHtml;
}