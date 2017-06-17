require('./index.less');

var tmpl = require('./tmpl/index.dot');

import Demo from '../../components/demo/index'

$('p').on('click',function(){
    Demo.init();
})

var resultText = tmpl({foo: 'with doT'});
$('.J_tmpl').html(resultText)