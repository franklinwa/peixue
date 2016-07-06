/**
 * Created by liuwenju on 2016/6/18.
 */
function Peixue( cn_bookname, en_bookname, press, content ){

    this.cn_bookname = cn_bookname;
    this.en_bookname = en_bookname;
    this.press = press;
    this.content = content;
    this.peixue_html = '';

};


//对原始数据内容进行固定格式的分割。形成每一条数据内容。
Peixue.prototype.ready_data = function(){

    var regular = /.*?@@@/g;
    //通过空格进行分割各个字段
    if (this.content.match(/<b>/g)){

        this.content = this.content.replace(/<b>/g, '<strong>');
        this.content = this.content.replace(/<\/b>/g, '</strong>');
    }

    if (this.content.match(/<c>/g)){

        this.content = this.content.replace(/<c>/g, '<span style="color:red">');
        this.content = this.content.replace(/<\/c>/g, '</span>');

    }

   if (this.content.match(/<h>/g)){

        this.content = this.content.replace(/<h>/g, '<p style="color:#00B050; line-height: 3em;font-weight:bold; text-align: center">');
        this.content = this.content.replace(/<\/h>/g, '</p>');

    }


    var peixue_lists = this.content.match(regular);

    console.log(peixue_lists.length);

    for ( var i = 0; i < peixue_lists.length; i++) {

        peixue_lists[i] = peixue_lists[i].replace(/@{3}/g, "");

    }

    return peixue_lists;
};


//生成需要的html代码。
Peixue.prototype.insert_html = function( html1, html2 ){

    var html = html1 + html2;

    return html;

};

//生成需要的html代码。
Peixue.prototype.auto_html_time = function( arg ){

    var html;
    if ( arg.match( /第.*天?/ ) !==  null ){

        html = '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">盖邦陪学&nbsp;&nbsp;&nbsp;&nbsp;' + arg + '</section>';

    }else{

    }


    return html;
};

//生成需要的html代码。盖邦解读
Peixue.prototype.auto_html_guide = function( arg ){

    var html;
    if ( arg.match( /盖邦解读?/ )!= null){
        html = '<p style=" text-align: center; line-height: 3em;"> <span style="font-size: 16px; color: #BFBFBF; font-family: 微软雅黑;">✎<br/></span></p> <section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">盖邦解读 </section>';

        html += this.auto_html_icon(0);

    }else{

        html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="font-size: 16px; color: #7F7F7F; font-family: 微软雅黑;">' + arg + '</span></p>';

    }

    console.log(html);
    return html;
};

//生成需要的html代码。三级条款4.5.1
Peixue.prototype.auto_html_three = function( arg ){

    var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="color: #000000; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';
    console.log(html);

    return html;
};


//生成需要的html代码。商务合作
Peixue.prototype.auto_html_bussiness = function( arg ){
    var html;
    if( arg.match( /友情赞助/ )!= null ){

        html = this.auto_html_icon(7);
        html += '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">友情赞助</section>';

        html += this.auto_html_icon(0);

    }else{

        html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';

    }


    console.log(html);

    return html;
};

//生成需要的html代码。检验方法
Peixue.prototype.auto_html_method = function( arg ){

    if( arg.match( /检验方法?/ )!= null ){


        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"><span style="color: #000000; ">检验方法：</span>  '+ /检验方法[：:](.*)/.exec(arg)[1] + ' </p>';
    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"> '+ arg + '  </p>';

    }

    console.log(html);
    return html;

};

//生成需要的html代码。检验数量
Peixue.prototype.auto_html_quality = function( arg ){

    if( arg.match( /检查数量?/ )!= null ){


        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"><span style="color: #000000; ">检查数量：</span>  '+ /检查数量[：:](.*)/.exec(arg)[1] + ' </p>';
    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"> '+ arg + '  </p>';

    }
    console.log(html);
    return html;

};

//生成需要的html代码。相关条款
Peixue.prototype.auto_html_other = function( arg ){
    var html;
    if( arg.match( /相关条款?/ )!= null ){
        html = this.auto_html_icon(5);
        html += '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">相关条款 </section>';
        html += this.auto_html_icon(0);
    }else if(arg.match( /摘[录自]?/ )!= null){

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 3em; text-align: right;"><span style="font-size: 14px; color: #00B050; font-family: 微软雅黑;">'+ arg + '</span></p>';

    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"> '+ arg + '</p>';

    }
    console.log(html);
    return html;

};


//生成需要的html代码。二级条款4.5
Peixue.prototype.auto_html_two = function( arg ){

    if (arg.match( /\d+\.\d+?/ )!== null){

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-align: center; line-height: 2em;"><span style="color: #00B050; font-family: 微软雅黑;font-size: 18px;"><strong>'+ arg +'</strong></span></p>';

    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-align: center; line-height: 2em;"><span style="color: #00B050; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';

    }

    console.log(html);
    return html;

};
//生成需要的html代码。一级标题 4.5
Peixue.prototype.auto_html_one = function( arg ){

    var html = '<p style="margin-top: 10px; margin-bottom: 10px; text-align: center; line-height: 2em;"><span style="color: #00B050; font-family: 微软雅黑;font-size: 20px;"><strong>'+ arg +'</strong></span></p>';
    console.log(html);

    return html;
};
//生成需要的html代码。继续下一条
Peixue.prototype.auto_html_next = function(arg){

    var html;
    if (arg.match( /继续下一条?/ )!== null){

        html = '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">'   + arg +   ' </section>';

       html += this.auto_html_icon(0);
    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-align: center; line-height: 2em;"><span style="color: #00B050; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';

    }

    console.log(html);

    return html;
};


//生成需要的html代码。图标
Peixue.prototype.auto_html_icon = function( arg ){

    var html;
    switch ( arg )
    {
        case 0:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 14px;">▼</span></p>';
            break;
        case 1:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 20px;">◔</span></p>';
            break;
        case 2:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☰</span></p>';

            break;
        case 3:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✎</span></p>';

            break;
        case 4:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☟</span></p>';

            break;
        case 5:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✄</span></p>';

            break;
        case 6:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">❖</span></p>';

            break;
        case 7:
            html = '<p style="text-align: center; line-height: 3em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☎</span></p>';

            break;
    }

    console.log(html);

    return html;
};


//自动生成陪学微信的计算逻辑。
Peixue.prototype.auto_peixue = function( peixue_lists ){
    var i = 0;
    //对微信数组中的内容进行遍历。
    for (i = 0; i < peixue_lists.length; i){

        var j = 0;

        if( peixue_lists[i].match( /\d+\.\d+\.\d+\s+/ ) !== null){


            j = i;

            while (peixue_lists[j].match( /检查数量?/ ) == null  && peixue_lists[j].match( /继续下一条?/ ) == null  && peixue_lists[j].match( /盖邦解读?/ ) == null && peixue_lists[j].match( /相关条款?/ ) == null  && peixue_lists[j].match( /友情赞助?/ ) == null){

                this.peixue_html += this.auto_html_three(peixue_lists[j]);

                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }

            }

            i = j;

        }else if( peixue_lists[i].match( /\d+\.\d+\s/ ) !== null ){

            j = i;

            while (peixue_lists[j].match( /\d+\.\d+\.\d+\s/ ) == null ){

                console.log("二级标题" + peixue_lists[j]);
                this.peixue_html += this.auto_html_two(peixue_lists[j]);
                j++;
            }

            i = j;
        }else if( peixue_lists[i].match( /^\d+\s+/ ) !== null ){

                console.log("一级标题" + peixue_lists[i]);
            this.peixue_html += this.auto_html_one(peixue_lists[i]);
            i = i + 1;

        }else if( peixue_lists[i].match( /检查数量/ ) !== null ){

            j = i;
            console.log("检查数量" + peixue_lists[j]);

            while (peixue_lists[j].match( /检[验查]方法/ ) == null  && peixue_lists[j].match( /盖邦解读/ ) == null && peixue_lists[j].match( /友情赞助/) == null ){

                this.peixue_html += this.auto_html_quality ( peixue_lists[j] );
                console.log("检查数量" + peixue_lists[j]);
                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }
            }
            i = j;
        }else if( peixue_lists[i].match( /检[验查]方法/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /盖邦解读?/ ) == null && peixue_lists[j].match( /友情赞助?/ ) == null ){

                this.peixue_html += this.auto_html_method( peixue_lists[j] );
                console.log(peixue_lists[j]);
                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }
            }
            i = j;

        }else if( peixue_lists[i].match( /盖邦解读?/ ) !== null ){

            j = i ;


            while ( peixue_lists[j].match( /\d+\.\d+\s/ ) == null && peixue_lists[j].match( /继续下一条/ ) == null && peixue_lists[j].match( /友情赞助/ ) == null && peixue_lists[j].match( /相关条款/ ) == null ){

                this.peixue_html += this.auto_html_guide( peixue_lists[j] );
                console.log('盖邦解读' + peixue_lists[j]);
                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }

            }
            i = j;

        }else if( peixue_lists[i].match( /相关条款?/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /继续下一条/ ) == null && peixue_lists[j].match( /友情赞助/ ) == null && peixue_lists[j].match( /盖邦解读/ ) == null){

                this.peixue_html += this.auto_html_other( peixue_lists[j] );
                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }
            }
            i = j;

        }else if( peixue_lists[i].match( /友情赞助?/ ) !== null ){

            j = i;
            while ( peixue_lists[j] !== undefined ){
                console.log(peixue_lists[j]);
                this.peixue_html += this.auto_html_bussiness( peixue_lists[j] );
                j++;

            }



            i = j;

        }else if( peixue_lists[i].match( /继续下一条?/ ) !== null   ){

            j = i;
            this.peixue_html += this.auto_html_icon(4);
            while ( peixue_lists[j].match( /\d+\s/ ) == null &&  peixue_lists[j].match( /\d+\.\d+\.\d+\s/ ) == null &&  peixue_lists[j].match( /盖邦解读?/ ) == null  ){


                console.log("继续下一条" + peixue_lists[j]);
                this.peixue_html += this.auto_html_next( peixue_lists[j] );
                j++;
                if (peixue_lists[j] == undefined){

                    break;

                }
            }

            i = j;
        }else if( peixue_lists[i].match( /第.*天?/ ) !== null ){

            j = i;
            this.peixue_html += this.auto_html_icon(1);
            while (peixue_lists[j].match( /\d+\.\d+\s/ ) == null &&  peixue_lists[j].match( /^\d+\s+/ ) == null &&  peixue_lists[j].match( /主控项目?/ ) == null &&  peixue_lists[j].match( /一般项目?/ ) == null && peixue_lists[j].match( /\d+\.\d+\.\d+\s?/ ) == null){
                                this.peixue_html += this.auto_html_time( peixue_lists[j] );
                j++;

            }

            this.peixue_html += this.auto_html_icon(0);
            i = j;
        }else if (peixue_lists[i].match( /主控项目?/ ) !== null){


            this.peixue_html += this.auto_html_one(peixue_lists[i]);
            i = i + 1;




        }else{
            this.peixue_html += this.auto_html_one(peixue_lists[i]);
            console.log('没有任何陪学内容！');

            i++;
        }


    };



};


