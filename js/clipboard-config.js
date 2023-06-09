//初始化对象
var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function (e) {
    e.clearSelection();
});
clipboard.on('error', function (e) {
    console.log("复制失败！");
});