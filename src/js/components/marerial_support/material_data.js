const discriptor1 = "海南第一座五星级大酒店，地下1层，地上25层，建筑面积32828㎡，框架结构。工程获国家优质鲁班奖、海南省优质工程奖和江苏省省外扬子杯奖。";
const discriptor2 = "地下2层，地上25层，建筑面积25700㎡，框剪结构，获江苏省扬子杯奖，建设部优质工程奖。";
const discriptor3 = "单体建筑面积达180000㎡，集家居智能信息、家居文化传播、家居展览展示为一体的全球家居中心。";
const discriptor4 = "建筑筑面积23754㎡，框架结构。";
const discriptor5 = "地下1层，地上25层，建筑面积26948㎡，剪力墙结构";
const discriptor6 = "占地18000㎡，建筑面积39000 ㎡。";



const imgPath = './src/images/';
export const MaterialData = [
    null, //第0个位空，保证获得数据下标和菜单key一致
    [
        {id:1,title:'挤塑板1 XPS',imglocal_url:imgPath+'baowen1.jpg',discription:discriptor1,type:1},
        {id:2,title:'挤塑板2 XPS',imglocal_url:imgPath+'baowen2.jpg',discription:discriptor2,type:1},
        {id:3,title:'岩棉板',imglocal_url:imgPath+'baowen3.jpg',discription:discriptor2,type:1},
        {id:4,title:'聚苯板 EPS',imglocal_url:imgPath+'baowen4.jpg',discription:discriptor2,type:1},


    ],
    [
        {id:1,title:'干混砂浆',imglocal_url:imgPath+'shajiang1.jpg',discription:discriptor1,type:1},
        {id:2,title:'聚合物粘结砂浆',imglocal_url:imgPath+'shajiang2.jpg',discription:discriptor2,type:1},
        {id:3,title:'聚合物抗裂砂浆',imglocal_url:imgPath+'shajiang3.jpg',discription:discriptor2,type:1},
    ],
    [
        {id:1,title:'内墙涂料',imglocal_url:imgPath+'tuliao1.jpg',discription:discriptor1,type:1},
        {id:2,title:'外墙涂料',imglocal_url:imgPath+'tuliao2.jpg',discription:discriptor2,type:1},
        {id:3,title:'地面涂料',imglocal_url:imgPath+'tuliao3.jpg',discription:discriptor2,type:1},

    ],
    [
        {id:1,title:'内墙腻子',imglocal_url:imgPath+'nizi1.jpg',discription:discriptor1,type:1},
        {id:2,title:'外墙腻子',imglocal_url:imgPath+'nizi2.jpg',discription:discriptor2,type:1},
    ],
    [
        {id:1,title:'EPS构件1',imglocal_url:imgPath+'zhuangshicailiao1.jpg',discription:discriptor1,type:1},
        {id:2,title:'EPS构件2',imglocal_url:imgPath+'zhuangshicailiao2.jpg',discription:discriptor2,type:1},
        {id:2,title:'EPS构件3',imglocal_url:imgPath+'zhuangshicailiao3.jpg',discription:discriptor2,type:1},
    ],

    
];
