exports.views = [
    {
        name: 'quick-start',
        icon: 'compass',
        label: '快速开始'
    },
    {
        name: 'tool',
        icon: 'flask',
        label: '开发工具'
    },
    {
        name: 'framework',
        icon: 'leaf',
        label: '前端框架'
    }
];

exports.render = function(dom){
    // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
    // scrat已经配置了对handlebars后置的文件进行预编译，因此
    // 可以直接内嵌这里文件当做js函数执行
    var tpl = __inline('menu.handlebars');

    // 模板数据
    var data = {
        // 使用__uri函数来定位任意工程文件，scrat构建之后，会
        // 将其替换为发布地址，这样工程就不用关心部署问题了
        logo: __uri('logo.png'),
        home: '/#!/index',
        views: exports.views
    };

    data.height = data.views.length * 37;

    // 使用模板+数据得到html
    dom.innerHTML = tpl(data);

    var list = document.getElementById('menu-list');
    // 绑定事件
    document.getElementById('menu-switch').addEventListener('click', function(e){
        if(parseInt(list.style.height) == 0){
            list.style.height = data.height + 'px';
        } else {
            list.style.height = 0;
        }
        e.stopPropagation();
        e.preventDefault();
    }, false);
    document.body.addEventListener('click', function(){
        list.style.height = 0;
    }, false);
};