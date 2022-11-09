let caidanTubiao = document.getElement('button')

caidanTubiao.onclick = function() {
    let caidan = document.getElement('img');
    let src = caidan.getAttribute('src');
    caidan.deleteAttribute('src');
}