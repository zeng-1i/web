function getTime() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMonth();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    var str = "现在是" + time.getFullYear() + "年" + (time.getMonth() + 1) + "月"
        + time.getDate() + "日" + h + ':' + m + ':' + s;
    return str;
}

function getStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}