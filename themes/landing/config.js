const CONFIG = {

  LANDING_HEADER_BUTTON_1_TITLE: '作者博客',
  LANDING_HEADER_BUTTON_1_URL: 'https://www.msgzs.cloudns.org/',

  // // 首页大图英雄板块
  // LANDING_HERO_TITLE_1: 'NotionNext',
  // LANDING_HERO_P_1: '快速搭建独立站、轻松放大品牌价值！',
  // LANDING_HERO_BUTTON_1_TEXT: '开始体验',
  // LANDING_HERO_BUTTON_1_LINK: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  // LANDING_HERO_BUTTON_2_TEXT: '了解更多',
  // LANDING_HERO_BUTTON_2_LINK: 'https://docs.tangly1024.com/about',
  // LANDING_HERO_VIDEO_IMAGE: '/images/home.png',
  // //   HERO_VIDEO_URL: '/videos/video.mp4',
  // LANDING_HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=913088616&bvid=BV1fM4y1L7Qi&cid=1187218697&page=1&&high_quality=1',
  // LANDING_HERO_VIDEO_TIPS: 'Watch the full video (2 min)',

  // 特性介绍
  LANDING_FEATURES_HEADER_1: '探索的过程',
  LANDING_FEATURES_HEADER_1_P: "如何破解小天才D3？<br/>可在这发送邮件给<strong class='font-bold  text-yellow-500'>gtjbak@outlook.com</strong>请求远程破解",
  LANDING_FEATURES_CARD_1_TITLE: '简单快速',
  LANDING_FEATURES_CARD_1_P: '远程操控电脑(Windows7以上系统的电脑)',
  LANDING_FEATURES_CARD_2_TITLE: '高效',
  LANDING_FEATURES_CARD_2_P: '如不想远程，可所要简单破解的文件',
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
  // LANDING_TESTIMONIALS_P: 'Test',

  // LANDING_TESTIMONIALS_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
  // LANDING_TESTIMONIALS_NICKNAME: 'Ryan_G',
  // LANDING_TESTIMONIALS_ID: 'Ryan`Log 站长',
  // LANDING_TESTIMONIALS_SOCIAL_NAME: '@Gaoran',
  // LANDING_TESTIMONIALS_SOCIAL_URL: 'https://blog.gaoran.xyz/',
  // LANDING_TESTIMONIALS_WORD: '“ 感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ “',

  LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.tangly1024.com', // 重定向网站地址

  LANDING_PRICING_TITLE: '价格表',
  LANDING_PRICING_P: '（是免费的，请勿购买！）',

  LANDING_PRICING_1_TITLE: '免费版',
  LANDING_PRICING_1_PRICE: '免费',
  // LANDING_PRICING_1_CONTENT: '项目源代码,部署教程,不定时技术答疑',
  LANDING_PRICING_1_BUTTON: '开始体验',
  LANDING_PRICING_1_URL: 'https://www.msgzs.cloudns.org/',

  LANDING_PRICING_2_TITLE: '免费版',
  LANDING_PRICING_2_PRICE: '免费',
  // LANDING_PRICING_2_CONTENT: '项目源代码,部署教程,长期技术答疑,代码升级合并,内部社群',
  LANDING_PRICING_2_BUTTON: '立即购买',
  LANDING_PRICING_2_URL: 'https://www.msgzs.cloudns.org/',

  LANDING_PRICING_3_TITLE: '免费版',
  LANDING_PRICING_3_PRICE: '免费',
  // LANDING_PRICING_3_CONTENT: '项目源代码,部署教程,VIP技术咨询,代码升级合并,内部社群,定制功能开发,SEO优化',
  LANDING_PRICING_3_BUTTON: '立即购买',
  LANDING_PRICING_3_URL: 'https://www.msgzs.cloudns.org/',

  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
