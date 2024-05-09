import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冬瓜MtFWiki",
  description: "一个MtF的小百科",
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
        'link', { rel: 'icon', href: 'https://pic.imgdb.cn/item/66090ccc9f345e8d030acaa7.png' }
    ]
],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://pic.imgdb.cn/item/66090ccc9f345e8d030acaa7.png",
    search: {
      provider: 'local'
    },
  
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/articles/preface' },
      { text: 'HRT', link: '/HRT/introduction' },
      { text: 'SRS', 
        items: [
          { text: 'SRS', link: '/SRS/introduction' },
          { text: '证件性别重制', link: '/SRS/shggxbsqs' },
        ]
      },
      { 
        text: '药物', 
        items: [
          { text: '补佳乐', link: '/medicine/progynova' },
        ]
      },
      { 
        text: '医疗资源', 
        items: [
          { text: '北京', link: '/resource/beijing' },
          { text: '长沙', link: '/resource/changsha' },
          { text: '广州', link: '/resource/guangzhou' },
          { text: '上海', link: '/resource/shanghai/fdek' },
          { text: '苏州', link: '/resource/suzhou/szslyy' },
        ]
      },
      { 
        text: '小彩蛋',
        items: [
          { text: '伪音', link: '/caidan/weiyin' },
          { text: '化妆', link: '/caidan/huazhuang' },
          { text: '女装教程', link: '/caidan/nzjc' },
          { text: '避难所', link: '/caidan/bns' },
        ],
      },
      { 
        text: '店铺',
        items: [
          { text: '御茶家', link: 'https://m.tb.cn/h.5BoI91pWvAugxxh/'},
          { text: '神北JK', link: 'https://m.tb.cn/h.5BoHTS5daZBuKfw/'},
          { text: '夜间教习室', link: 'https://m.tb.cn/h.5CC01RDQugpV4Fv/'},
          { text: '花沫的蓝粉白小屋', link: 'https://m.tb.cn/h.5yj8nYuSwV534ZP/'},
          { text: '春の芽工作室', link: 'https://m.tb.cn/h.5CCYqfRCIoeciD2/'},
          { text: '墨守的小卖部', link: 'https://m.tb.cn/h.5yjRC4mCZrw8BVF/'},
          { text: '俞果原创jk制服', link: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=806022927'},
          { text: '软兔守守冬日暖意小屋', link: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=522629712'},
          { text: '兔萌屋原创jk', link: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=193946967'},
          { text: '东临社', link: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=425079354'},
          { text: '胡桃木JK', link: 'https://m.tb.cn/h.g1aJmBhRwhGkPOY'},
          { text: '火星institute JK制服馆', link: ' https://m.tb.cn/h.gcdL2K3ZlyD3vRL'},
        ],
      },
      { 
        text: '心灵小屋',
        items: [
          { text: '前言', link: '/xlxw/qy' },
        ],
      },
      { text: '帮助', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '前言', link: '/articles/preface' },
          { text: 'HRT', link: '/HRT/introduction' },
          { text: 'SRS', 
            collapsed: true,
            items: [
              { text: 'SRS', link: '/SRS/introduction' },
              { text: '证件性别重制', link: '/SRS/shggxbsqs' },
            ]
          },
          { 
            text: '药物', 
            collapsed: true,
            items: [
              { text: '补佳乐', link: '/medicine/progynova' },
            ]
          },
          { 
            text: '医疗资源',
            collapsed: true, 
            items: [
              { text: '北京', link: '/resource/beijing' },
              { text: '长沙', link: '/resource/changsha' },
              { text: '广州', link: '/resource/guangzhou' },
              { 
                text: '上海',
                collapsed: true, 
                items: [
                  { text: '复旦儿科', link: '/resource/shanghai/fdek' },
                  { text: '上海九院', link: '/resource/shanghai/shjy' },
                  { text: '上海中山医院', link: '/resource/shanghai/shzsyy' },
                ]
              },
              { 
                text: '苏州',
                collapsed: true, 
                items: [
                  { text: '苏州市立医院', link: '/resource/suzhou/szslyy' },
                ]
              },
              
            ]
          },
          { 
            text: '小彩蛋', 
            collapsed: true,
            items: [
              { text: '伪音', link: '/caidan/weiyin' },
              { text: '化妆', link: '/caidan/huazhuang' },
              { text: '女装教程 ', link: '/caidan/nzjc' },
              { text: '避难所', link: '/caidan/bns' },
            ]
          },
          { 
            text: '心灵小屋', 
            collapsed: true,
            items: [
              { text: '前言', link: '/xlxw/qy' },
            ]
          },
          { text: '帮助', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'youtube', link: 'https://youtube.com/' },
    ],
  }
})
