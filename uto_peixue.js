/**
 * Created by liuwenju on 2016/6/18.
 */
function Peixue( cn_bookname, en_bookname, press, content ){

    this.cn_bookname = cn_bookname;
    this.en_bookname = en_bookname;
    this.press = press;
    this.content = content;

};


//对原始数据内容进行固定格式的分割。形成每一条数据内容。
Peixue.prototype.ready_data = function(){

    var regular = /.*?@@@/g;
    //通过空格进行分割各个字段

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


//自动生成陪学微信的计算逻辑。
Peixue.prototype.outo_peixue = function( peixue_lists ){
    var i = 0;
    //对微信数组中的内容进行遍历。
    for (i = 0; i < peixue_lists.length; i++){

        var j = 0;

        if( peixue_lists[i].match( /\d+\.\d+.\d+\s/ ) !== null){


            j = i;
            while (peixue_lists[j].match( /检查数量?/ ) == null){

                console.log(peixue_lists[j]);
                j++;
            }


        }else if( peixue_lists[i].match( /\d+\.\d+\s/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /\d+\.\d+.\d+\s/ ) == null){

                console.log(peixue_lists[j]);
                j++;
            }

        }else if( peixue_lists[i].match( /\d+\s/ ) !== null ){

                console.log(peixue_lists[i]);


        }else if( peixue_lists[i].match( /检查数量?/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /检查方法?/ ) == null){

                console.log(peixue_lists[j]);
                j++;
            }

        }else if( peixue_lists[i].match( /检查方法?/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /盖邦陪学?/ ) == null){

                console.log(peixue_lists[j]);
                j++;
            }


        }else if( peixue_lists[i].match( /盖邦陪学?/ ) !== null ){

            j = i;
            while (peixue_lists[j].match( /盖邦陪学?/ ) == null){

                console.log(peixue_lists[i]);
                j++;
            }


        }else{

            console.log('没有任何陪学内容！');

        }


    }



};


