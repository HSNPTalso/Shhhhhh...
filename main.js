let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if(src === '呼叫.gif') {
      image.setAttribute('src', '嗷.png');
      alert('被神秘力量点击(°Д°≡°Д°)！！不敢动不敢动')
    } else {
      image.setAttribute('src', '呼叫.gif');
    }
}
/*将img元素的引用存放在image变量里*/
/*将匿名函数赋值给了image变量的点击属性
获取image变量的src的属性值，存放于src变量里
如果src为①，将image的src属性设置为②
提醒;
不同，则将image的src属性设置为①*/
