const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HEXO_HOME_BANNER_GREETINGS: [
    'Hi，我是一个程序员',
    'Hi，我是一个打工人',
    'Hi，我是一个干饭人',
    '欢迎来到我的博客🎉'
  ], // 首页大图标语文字

  HEXO_HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  // 已知未修复bug, 在移动端开启true后会加载不出图片； 暂时建议设置为false。
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂动； false则随鼠标滚动 ;
  // 是否显示开始阅读按钮
  HEXO_SHOW_START_READING: true,

  // 菜单配置
  HEXO_MENU_INDEX: true, // 显示首页
  HEXO_MENU_CATEGORY: true, // 显示分类
  HEXO_MENU_TAG: true, // 显示标签
  HEXO_MENU_ARCHIVE: true, // 显示归档
  HEXO_MENU_SEARCH: true, // 显示搜索
  HEXO_MENU_RANDOM: true, // 显示随机跳转按钮

  HEXO_POST_LIST_COVER: true, // 列表显示文章封面
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
  // LANDING_HEADER_BUTTON_1_TITLE: 'Github开源',
  // LANDING_HEADER_BUTTON_1_URL: 'https://github.com/tangly1024/NotionNext',

  // LANDING_HEADER_BUTTON_2_TITLE: '作者博客',
  // LANDING_HEADER_BUTTON_2_URL: 'https://blog.tangly1024.com/',

  // // 首页大图英雄板块
  // LANDING_HERO_TITLE_1: '',
  // LANDING_HERO_P_1: '快速搭建独立站、轻松放大品牌价值！',
  // LANDING_HERO_BUTTON_1_TEXT: '开始体验',
  // LANDING_HERO_BUTTON_1_LINK: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  // LANDING_HERO_BUTTON_2_TEXT: '了解更多',
  // LANDING_HERO_BUTTON_2_LINK: 'https://docs.tangly1024.com/about',
  // LANDING_HERO_VIDEO_IMAGE: '/images/home.png',
  // //   HERO_VIDEO_URL: '/videos/video.mp4',
  // LANDING_HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=913088616&bvid=BV1fM4y1L7Qi&cid=1187218697&page=1&&high_quality=1',
  // LANDING_HERO_VIDEO_TIPS: 'Watch the full video (2 min)',

  // // 特性介绍
  // LANDING_FEATURES_HEADER_1: '探索的过程',
  // LANDING_FEATURES_HEADER_1_P: "如何搭建自己的门户网站，塑造一个品牌展示中心？<br/>曾经，它是系统<strong class='font-bold text-red-500'>繁重</strong>的Wordpress、是操作<strong class='font-bold  text-red-500'>复杂</strong>的Hexo、是<strong class='font-bold text-red-500'>昂贵</strong>且<strong class='font-bold text-red-500'>不稳定</strong>的技术团队;<br/>现在，只要一个Notion笔记就够了",
  // LANDING_FEATURES_HEADER_2: 'Notion+NextJs组合方案',
  // LANDING_FEATURES_HEADER_2_P: '在Notion笔记中管理文章数据，NextJs将其渲染成网页排版，通过Vercel等第三方平台将您的网站发布到全球。',
  // LANDING_FEATURES_CARD_1_TITLE: '简单快速的系统',
  // LANDING_FEATURES_CARD_1_P: '在Notion中写下一篇文章，内容立刻在您的网站首页中呈现给互联网',
  // LANDING_FEATURES_CARD_2_TITLE: '高效传播的媒介',
  // LANDING_FEATURES_CARD_2_P: '优秀的SEO、快速的响应速度，让您的产品和宣传触达到更多的受众',
  // LANDING_FEATURES_CARD_3_TITLE: '人性化的定制工具',
  // LANDING_FEATURES_CARD_3_P: '多款主题供您挑选，可以搭建各种不同风格和作用的网站，更多的主题正在陆续加入中。',

  // // 特性介绍2
  // LANDING_FEATURES_BLOCK_HEADER: '解决方案',
  // LANDING_FEATURES_BLOCK_P: '人人自媒体的时代，一个网站将帮您链接更多的人，带给你无限的机会和客户。<br/>您还在等什么呢？',
  // LANDING_FEATURES_BLOCK_1_TITLE: '用网站来展示品牌',
  // LANDING_FEATURES_BLOCK_1_P: '比起线下渠道、一个公开域名和网站更有说服力',
  // LANDING_FEATURES_BLOCK_2_TITLE: 'SEO带来更多流量',
  // LANDING_FEATURES_BLOCK_2_P: '借助搜索引擎，精准定位您的受众',
  // LANDING_FEATURES_BLOCK_3_TITLE: '网站的性能很重要',
  // LANDING_FEATURES_BLOCK_3_P: '更快的响应，更好的用户体验',
  // LANDING_FEATURES_BLOCK_4_TITLE: '打造您的个人品牌',
  // LANDING_FEATURES_BLOCK_4_P: '继马斯克、乔布斯之后，您将是下一个传奇',
  // LANDING_FEATURES_BLOCK_5_TITLE: '写作表达是核心技能',
  // LANDING_FEATURES_BLOCK_5_P: '比起只阅读输入，更重要的是反思和输出',
  // LANDING_FEATURES_BLOCK_6_TITLE: '开始写博客吧',
  // LANDING_FEATURES_BLOCK_6_P: 'NotionNext，助您轻松开始写作',

  // // 感言
  // LANDING_TESTIMONIALS_HEADER: '已搭建超7000个网站、总浏览量突破100,000,000+',
  // LANDING_TESTIMONIALS_P: '网站内容涵盖地产、教育、建筑、医学、机械、IT、电子、软件、自媒体、数位游民、短视频、电商、学生、摄影爱好者、旅行爱好者等等各行各业',

  // LANDING_TESTIMONIALS_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
  // LANDING_TESTIMONIALS_NICKNAME: 'Ryan_G',
  // LANDING_TESTIMONIALS_ID: 'Ryan`Log 站长',
  // LANDING_TESTIMONIALS_SOCIAL_NAME: '@Gaoran',
  // LANDING_TESTIMONIALS_SOCIAL_URL: 'https://blog.gaoran.xyz/',
  // LANDING_TESTIMONIALS_WORD: '“ 感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ “',

  // LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  // LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.tangly1024.com', // 重定向网站地址

  // LANDING_PRICING_TITLE: '价格表',
  // LANDING_PRICING_P: 'NotionNext开源免费，此处仅演示订阅付费功能！请勿购买！',

  // LANDING_PRICING_1_TITLE: '个人版',
  // LANDING_PRICING_1_PRICE: '免费',
  // LANDING_PRICING_1_CONTENT: '项目源代码,部署教程,不定时技术答疑',
  // LANDING_PRICING_1_BUTTON: '开始体验',
  // LANDING_PRICING_1_URL: 'https://docs.tangly1024.com/about',

  // LANDING_PRICING_2_TITLE: '捐赠版',
  // LANDING_PRICING_2_PRICE: '$9.9/月',
  // LANDING_PRICING_2_CONTENT: '项目源代码,部署教程,长期技术答疑,代码升级合并,内部社群',
  // LANDING_PRICING_2_BUTTON: '立即购买',
  // LANDING_PRICING_2_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/0adb9153-0799-4f51-91aa-1f06391ea4e0',

  // LANDING_PRICING_3_TITLE: '企业版',
  // LANDING_PRICING_3_PRICE: '$59/月',
  // LANDING_PRICING_3_CONTENT: '项目源代码,部署教程,VIP技术咨询,代码升级合并,内部社群,定制功能开发,SEO优化',
  // LANDING_PRICING_3_BUTTON: '立即购买',
  // LANDING_PRICING_3_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
