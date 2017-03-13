var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var menuX = document.getElementById('menuX');

// 点击导航栏右侧的按钮，将menu的class设置为'menu-active'，这样menu就显示出来了
menuButton.onclick = function() {
    menu.className = 'menu-active';
}

// 点击菜单右上角的x，将menu的class设置为menu，这样菜单就能隐藏了
menuX.onclick = function() {
    menu.className = 'menu';
}
