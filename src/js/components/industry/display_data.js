const discriptor1 = "海南第一座五星级大酒店，地下1层，地上25层，建筑面积32828㎡，框架结构。工程获国家优质鲁班奖、海南省优质工程奖和江苏省省外扬子杯奖。";
const discriptor2 = "地下2层，地上25层，建筑面积25700㎡，框剪结构，获江苏省扬子杯奖，建设部优质工程奖。";
const discriptor3 = "单体建筑面积达180000㎡，集家居智能信息、家居文化传播、家居展览展示为一体的全球家居中心。";
const discriptor4 = "建筑筑面积23754㎡，框架结构。";
const discriptor5 = "地下1层，地上25层，建筑面积26948㎡，剪力墙结构";
const discriptor6 = "占地18000㎡，建筑面积39000 ㎡。";

// export const DisplayData = [
//     {id:1,title:'芳甸别墅',imglocal_url:'./src/images/header.jpg',discription:discriptor1,type:0},
//     {id:2,title:'贾汪南湖湖心岛',imglocal_url:'./src/images/infra.jpeg',discription:discriptor2,type:0},
//     {id:3,title:'南京艾菲国际',imglocal_url:'./src/images/safe_house.jpeg',discription:discriptor3,type:0},
//     {id:4,title:'泰州华泽天下',imglocal_url:'./src/images/the_beau.jpeg',discription:discriptor4,type:0},
//     {id:5,title:'姜堰泰达星河湾',imglocal_url:'./src/images/the_play.jpeg',discription:discriptor5,type:0},
//     {id:6,title:'江阴山水绿城',imglocal_url:'./src/images/villa.jpeg',discription:discriptor6,type:0},
//     {id:7,title:'泰州西堤阳光',imglocal_url:'./src/images/header.jpg',discription:discriptor1,type:0},
//     {id:8,title:'扬州林溪山庄',imglocal_url:'./src/images/infra.jpeg',discription:discriptor2,type:0},
//     {id:9,title:'合肥滨湖金龙小区',imglocal_url:'./src/images/safe_house.jpeg',discription:discriptor3,type:0},
//     {id:10,title:'芳甸别墅',imglocal_url:'./src/images/the_beau.jpeg',discription:discriptor4,type:0},
//     {id:11,title:'贾汪南湖湖心岛',imglocal_url:'./src/images/the_play.jpeg',discription:discriptor5,type:0}];



// export const DisplayData1 = [
//     {id:1,title:'兴化海德国际',imglocal_url:'./src/images/infra.jpeg',discription:discriptor2,type:1},
//     ];

// export const DisplayData2 = [
//     {id:1,title:'徐州翡翠城',imglocal_url:'./src/images/safe_house.jpeg',discription:discriptor3,type:2},
//     ];
const imgPath = './src/images/';

const infrasPath = './src/images/infrastructure/';
export const infrasData = [
    null, //第0个位空，保证获得数据下标和菜单key一致
    [
        {id:1,title:'停车场',imglocal_url:infrasPath+'1.jpg',discription:discriptor1,type:1},
        {id:2,title:'停车场',imglocal_url:infrasPath+'3.jpg',discription:discriptor2,type:1},
        {id:3,title:'停车场',imglocal_url:infrasPath+'4.jpg',discription:discriptor2,type:1},

    ],
    [
        {id:1,title:'管道房',imglocal_url:infrasPath+'2.jpg',discription:discriptor2,type:2},
    ],
    
];

export const productData = [
    null,
    [
        {id:1,title:'SBS 屋顶防水',imglocal_url:imgPath+'wudingfangshui1.jpg',discription:discriptor2,type:1},
        {id:2,title:'TPO 屋顶防水',imglocal_url:imgPath+'wudingfangshui2.jpg',discription:discriptor2,type:1},
        {id:3,title:'彩钢房铝膜防水卷材',imglocal_url:imgPath+'wudingfangshui3.jpg',discription:discriptor2,type:1},
        {id:4,title:'屋顶防水',imglocal_url:imgPath+'wudingfangshui4.jpeg',discription:discriptor2,type:1},
    ],

    [
        {id:1,title:'SBS 地基防水 ',imglocal_url:imgPath+'dijifangshui1.jpg',discription:discriptor2,type:1},
        {id:2,title:'SBS 地基防水 ',imglocal_url:imgPath+'dijifangshui2.jpeg',discription:discriptor2,type:1},
        {id:3,title:'隧道自粘胶膜防水',imglocal_url:imgPath+'dijifangshui3.jpeg',discription:discriptor2,type:1},
        {id:4,title:'地基防水',imglocal_url:imgPath+'dijifangshui4.jpeg',discription:discriptor2,type:1},

    ],
    [
        {id:1,title:'聚氨酯',imglocal_url:imgPath+'shineifangshui1.jpeg',discription:discriptor2,type:1},
        {id:2,title:'室内聚氨酯',imglocal_url:imgPath+'shineifangshui2.jpeg',discription:discriptor2,type:1},
        {id:3,title:'JS 防水涂料',imglocal_url:imgPath+'shineifangshui3.jpeg',discription:discriptor2,type:1},
        {id:4,title:'车库内防水',imglocal_url:imgPath+'shineifangshui4.jpeg',discription:discriptor2,type:1},

    ],
    
];


export const estateDevData = [
    null,
    [
        {id:1,title:'太赫兹国际科技产业园',imglocal_url:imgPath+'shangye1.jpg',discription:discriptor2,type:1},
        {id:2,title:'航天科技城（固安）',imglocal_url:imgPath+'shangye2.jpg',discription:discriptor2,type:1},
    ],

    [
        {id:1,title:'北京新机场安置房',imglocal_url:imgPath+'zhuzhai1.jpg',discription:discriptor2,type:1},
        {id:2,title:'牛驼孔雀城',imglocal_url:imgPath+'zhuzhai2.jpg',discription:discriptor2,type:1},
        {id:3,title:'孔雀城剑桥郡',imglocal_url:imgPath+'zhuzhai3.jpg',discription:discriptor2,type:1},
        {id:4,title:'八达岭孔雀城',imglocal_url:imgPath+'zhuzhai4.jpg',discription:discriptor2,type:1},
    ],

    [
        {id:1,title:'北京印刷学院',imglocal_url:imgPath+'xuexiao1.jpg',discription:discriptor2,type:1},
        {id:2,title:'北京印刷学院',imglocal_url:imgPath+'xuexiao2.jpg',discription:discriptor2,type:1},
        {id:3,title:'北京矿业大学',imglocal_url:imgPath+'xuexiao3.jpg',discription:discriptor2,type:1},
        {id:4,title:'北京矿业大学',imglocal_url:imgPath+'xuexiao4.jpg',discription:discriptor2,type:1},
    ],
    [
        {id:1,title:'医院精装修效果图',imglocal_url:imgPath+'yiyuan1.jpeg',discription:discriptor2,type:1},
        {id:2,title:'医院精装修实景',imglocal_url:imgPath+'yiyuan2.jpg',discription:discriptor2,type:1},
        {id:3,title:'医院精装修实景',imglocal_url:imgPath+'yiyuan3.jpg',discription:discriptor2,type:1},
        {id:4,title:'病房精装修',imglocal_url:imgPath+'yiyuan4.jpeg',discription:discriptor2,type:1},
    ],
]