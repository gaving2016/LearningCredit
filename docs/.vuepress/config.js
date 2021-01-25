module.exports = {
  title: '信贷学习',
  description: '信贷知识点学习',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    smoothScroll: true,
    editLinks: true,
    // 假如你的文档仓库和项目本身不在一个仓库：
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // editLinkText: '帮助我们改善此页面',
    lastUpdated: '文档更新时间',
    nav: [
      {
        text: '信贷',
        link: '/credit/',
        ariaLabel: 'credit Menu',
        items: [
          { text: '表内业务', link: '/credit/tableInBusiness/' },
          { text: '表外业务', link: '/credit/offBalanceBusiness/' },
        ]
      },
      {
        text: '公司信贷',
        link: '/publiccredit/',
      },
      {
        text: '个人信贷',
        link: '/retailcredit/',
      }
    ],
    sidebar: {
      '/credit/': [
        {
          title: '信贷',
          collapsable: false,
          children: [
            'tableInBusiness',
            'offBalanceBusiness',
          ]
        }
      ],
      '/publiccredit/': [
        {
          title: '对公信贷',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/retailcredit/': [
        {
          title: '个人信贷',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  },
  plugins: {
   
  }
}