

/*
    新闻有两种策略，一种是标题和内容放在一个数组中，
    一种是标题和内容放在不同的数组中，根据id去对应关系，选第一种
    如果有与后端交互的，，则一开始只请求标题，进入页面时再次请求内容
*/

const news1 ="          <p style=\"text-indent:2em;\">	日前，中央统战部副部长、全国工商联党组书记、常务副主席徐乐江考察了江苏合发集团承建的鱼跃医疗产业园办公楼工程。省人大常委会副主任、省工商联主席许仲梓，镇江市委副书记、市长张叶飞陪同考察。</p><p style=\"text-indent:2em;\">	合发集团第一工程公司总经理曹炳方向徐乐江副部长一行介绍了幕墙工程施工情况。丹阳鱼跃医疗产业园办公楼是一座超现代化的建筑，其设计风格简洁、大方、立体感强烈，幕墙以玻璃幕墙和金属铝板幕墙为主导，玻璃幕墙配以450*65的铝合金线条，一层长廊极具视觉冲击力的廊柱线条、造型简洁的屋面飘蓬来营造主体建筑的风格。</p><p style=\"text-indent:2em;\">	听取介绍后，徐乐江副部长仔细察看了施工现场，对项目进度及工程施工质量给予了高度评价。</p><p style=\"text-indent:2em;\">	鱼跃集团是国内产品最丰富的医疗设备集团。中标承建该项目后，江苏合发集团细化幕墙设计及施工工作，高度重视安全文明施工，对各项主材料质量严格把控，为确保产业园项目安全圆满完工打下了坚实的基础。项目建成后，将成为鱼跃集团全球生产基地，汇聚鱼跃全球科技创新成果，发挥集团规模化生产的大制造优势。</p><p style=\"text-indent:2em;\">	镇江市领导李健、詹立风、陈可可、卢道富陪同考察。</p><p style=\"text-indent:2em;\">	<img src=\"./src/images/5.jpg\" width=\"623\" height=\"405\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<span style=\"color:#E53333;\">█</span>徐乐江一行考察项目建设现场</p><p style=\"text-indent:2em;\">	<img src=\"./src/images/6.jpg\" width=\"623\" height=\"227\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<span style=\"color:#E53333;\">█</span>鱼跃生命科学产业园工程（在建局部）</p><p style=\"text-indent:2em;\">	<img src=\"./src/images/7.jpg\" width=\"623\" height=\"312\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<span style=\"color:#E53333;\">█</span>鱼跃生命科学产业园工程效果图</p><p style=\"text-indent:2em;\">	<br /></p>";

const news2="<p style=\"text-indent:2em;\">	由江苏交工承建的溧宁高速1标在全速推进先导段便道施工建设的过程中，以方便周边百姓出行为出发点，结合地方道路实际，在满足施工需求的基础上，有效解决了周边百姓出行难的问题。</p><p style=\"text-indent:2em;\">	现场项目部已建成一条崭新的水泥混凝土道路，这里原本是一条乡村土路，每逢雨雪天气，道路泥泞不堪，给当地老百姓交通出行带来了极大不便。在道路建设前期调研时，项目部发现原本道路与施工便道相邻。于是，项目部在便道建设中主动提高道路标准，把施工便道修建成一条宽6米，与S239省道相接的水泥混凝土道路，有效解决了周边百姓出行难的问题。</p><p style=\"text-indent:2em;\">	目前，先导段新昌枢纽主线、D、G匝道位置便道已经初具规模。按照计划，先导段便道施工将于本月底前结束，届时溧宁高速先导段将进入大规模施工阶段。</p><p style=\"text-indent:2em;\">	<img src=\"/uploadfiles/2019/04/20190424100628628.jpg\" width=\"623\" height=\"415\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p>"

const news3="<p style=\"text-indent:2em;\">	为弘扬以爱国主义为核心的民族精神，团结带领广大职工不忘初心，牢记使命，争当建功新时代的先锋，4月4日，江苏交工党委组织总部及驻镇单位的党员、团员代表，前往镇江市烈士陵园，举行“缅怀革命先烈·传承红色基因”的主题宣传教育活动。</p><p style=\"text-indent:2em;\">	庄严肃穆的烈士纪念碑前，党员代表们向烈士敬献花圈，全体人员向革命先烈默哀。江苏交工工会主席、第一党支部书记朱乾震同志带领所有参加活动的党员，一起面对党旗重温入党誓词。江苏交工党委副书记艾旭同志在讲话中号召大家传承革命先烈大无畏的精神，“不忘初心，牢记使命”，为实现江苏交工“双百亿”目标努力奋斗。随后，全体同志参观了革命烈士纪念馆。</p><p style=\"text-indent:2em;\">	江苏交工党员代表一致表示，今年是中华人民共和国成立70周年、五四运动100周年，在推进江苏交工高质量发展进程中，我们将发扬先烈们不怕牺牲、艰苦奋斗的革命精神，立足岗位，勇于奉献，勠力同心，为公司新一轮的改革与发展作出积极的贡献。</p><p style=\"text-indent:2em;\">	<img src=\"/uploadfiles/2019/04/2019041014030232.jpg\" width=\"623\" height=\"416\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<img src=\"./src/images/5.jpg\" width=\"623\" height=\"416\" alt=\"\" /></p>"

const news4="<p style=\"text-indent:2em;\">	3月21日，由集团投资开发建设的万载古城项目再次受到中央一套关注，登上央视早间推荐的旅游地。</p><p style=\"text-indent:2em;\">	万载古城自建设以来，项目公司围绕地方特色，秉持着文化传承的理念，带着高度的历史责任感，延续文脉，书写文明，让千年古城展新颜。</p><p style=\"text-indent:2em;\">	目前，修缮后万载古城多姓氏古祠堂群，让人感受古代宗族文化的浓烈氛围；古街区、老店铺，让人体验古朴的居住环境和生活状态；花炮之乡，百合故里”，万载古城与万载烟花的完美融合，古城的欢腾喜庆和烟花的闪亮璀璨更相得益彰。</p><p style=\"text-indent:2em;\">	据介绍，项目全部建成后，将影响江西旅游格局、城市格局、人居格局。核心景区将打造为中国赣派古城的典型代表，配套区建设为大型赣派风情商业和居住区。&nbsp;</p><p style=\"text-indent:2em;\">	<img src=\"./src/images/4.jpg\" width=\"623\" height=\"398\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<span style=\"color:#E53333;\">█</span>江西万载古城</p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p>"

const news5="<p style=\"text-indent:2em;\">	为了进一步分解落实2019年经营指标，3月12日，集团公司召开2019年一季度经营条线工作会议。集团公司董事长陈正华、总裁仇天青出席并作重要讲话。会议由执行副总裁蒋宁主持。</p><p style=\"text-indent:2em;\">	陈正华董事长在讲话中充分肯定了一季度以来经营工作取得的成绩，要求各单位围绕“新签合同1000亿元、力争1200亿元”的经营目标，一是要统一思想，实现全年目标的信心不动摇。二是要明确工作重点，确保做到有的放矢，巩固好与大客户的合作；明确经营责任，注重考核，强化项目的落实；做强区域市场，充分发挥品牌影响力，提升整合资源的能力，努力做好市场开拓工作。</p><p style=\"text-indent:2em;\">	仇天青总裁在讲话中分析了当前经营工作中的不足，对下一步工作提出了具体要求：一是进一步统一思想，鼓舞士气，确保经营工作不松劲、不懈怠。二是进一步压实责任、强化执行，确保经营工作提质量、上台阶。要全力优化客户资源，抓重点客户开拓；优化网络布局，深耕区域市场经营；优化项目结构，强化公招能力提升。</p><p style=\"text-indent:2em;\">	蒋宁执行副总裁对2019年一季度经营工作进行了部署分析，他指出，要围绕核心群体，全面布局经营；围绕现有经营区域，深入挖掘建立经营中心；围绕二级单位实际情况，拓展新工作思路；围绕集团培植新引擎目标，建立资源共享机制。</p><p style=\"text-indent:2em;\">	会上，第一工程公司、第二工程公司、山东公司、南京同力、江苏交工六家单位的分管经营工作负责人就全年经营指标分解落实和主要工作举措做了汇报交流发言。</p><p style=\"text-indent:2em;\">	集团经营管理部、有关单位经营负责人在主会场参加了会议；驻外分支机构经营条线全体人员通过视频会议系统收看收听了会议。</p><p style=\"text-indent:2em;\">	<img src=\"./src/images/1.jpg\" width=\"623\" height=\"186\" alt=\"\" /></p><p style=\"text-indent:2em;\">	<span style=\"color:#E53333;\">█</span>经营条线会议在省建大厦举行</p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p><p style=\"text-indent:2em;\">	<br /></p>"

export const newsData = [

    {
        id: 1,
        title: '习近平主席在今天发表重要讲话，改变了中国。邓小平是中国的总设计师',
        content: news1
    },
    {
        id: 2,
        title: '习近平出席第二届“一带一路”国际合作高峰论坛开幕式并发表主旨演讲',
        
        content: news2
    },
    {
        id: 3,
        title: '中国盛会期间，英德两国大曝料传递重磅信号',
        content: news3
    },
    {
        id: 4,
        title: '美媒：被中国拒收的美国垃圾，如今马来西亚也嫌弃了',
        content: news4
    },
    {
        id: 5,
        title: '如何畅游北京世园会？这里为您准备了三条趣玩线路',
        content: news5
    },
    {
        id: 6,
        title: '朝阳海淀丰台石景山四区预计7月1日启动路侧停车电子收费',
        content: news1
    },
    {
        id: 7,
        title: '昌平国际马术嘉年华今日开幕 将推动成立马术协会',
        content: news2
    },
    {
        id: 8,
        title: '给智慧城市打基础，北京5G基站年底前破万',
        content: news3
    },
    {
        id: 9,
        title: '升温！北京今最高气温19℃，好天气助力五一小长假',
        content: news4
    },
    {
        id: 10,
        title: '习近平出席第二届“一带一路”国际合作高峰论坛开幕式并发表主旨演讲',
        content: news5
    },
    {
        id: 11,
        title: '北京今天全天交通压力大，下午至晚间多处交通管制',
        content: news4
    },
    {
        id: 12,
        title: '北京将促进限建区宅基地按集约用地要求改造',
        content: news3
    },
    {
        id: 13,
        title: '定了！北京“住宅工程质量潜在缺陷保险”正式施行',
        content: news2
    },
    {
        id: 14,
        title: '北京世园会新闻中心5G信号全覆盖',
        content: news1
    },
    {
        id: 15,
        title: '“一带一路”：如何绘制精谨细腻的“工笔画” 一带一路',
        content: news5
    },
    {
        id: 16,
        title: '高峰论坛：刷新中国经济“信心指数”',
        content: news1
    },
    {
        id: 17,
        title: '央视快评：以创新理念，绘制精谨细腻“工笔画”',
        content: news2
    },
    {
        id: 18,
        title: '国际锐评：五大举措推动中国更开放 人民日报 新华时评',
        content: news3
    },
    {
        id: 19,
        title: '习主席和39位外方领导人围桌共绘“工笔画”',
        content: news4
    },
    {
        id: 20,
        title: '负债5.28万亿，高铁是冲撞中国经济发展的“灰犀牛”吗？',
        content: news5
    },
    {
        id: 21,
        title: '揭秘亚马逊AWS崛起之旅：从免费服务到市场领导者',
        content: news4
    },
    {
        id: 22,
        title: '6月见，华为MateX国行版进入最后阶段：转轴20万次不变形',
        content: news3
    },
    {
        id: 23,
        title: 'Racing car sprays burning fuel into crowd.',
        content: news1
    },
  ];

  export const newsData1 = [

    {
        id: 1,
        title: '俄军方官宣！这位就是俄近卫军最美女战士',
        content: news1,
        type:1
    },
    {
        id: 2,
        title: '055大驱霸气甲板照曝光：垂发如巧克力 101舰今非昔比',
        content: news2,
        type:1
    },
    {
        id: 3,
        title: '俄总统发言人表示欢迎特朗普消减核武建议，但希望先了解细节',
        content: news3,
        type:1
    },
    {
        id: 4,
        title: '首艘国产航母下水两周年！他曾说：如果中国不建航母，我死不瞑目',
        content: news4,
        type:1
    },
    {
        id: 5,
        title: '高清大图！中国-东南亚国家“海上联演-2019”圆满结束',
        content: news5,
        type:1
    },
    {
        id: 6,
        title: '没想到，美国FBI局长也有说出这句话的一天',
        content: news1,
        type:1
    },
    {
        id: 7,
        title: '斯里兰卡军方与恐怖分子26日晚发生枪战 造成3死3伤',
        content: news2,
        type:1
    },
    {
        id: 8,
        title: '日企拆解华为芯片后得出结论：5G不再是高通一家独大',
        content: news3,
        type:1
    },];