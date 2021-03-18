// TOBY EXPORT JSON FILE (SOURCE)
let tobyExport = {
    "version": 3,
    "lists": [
        {
            "title": "M1",
            "cards": [
                {
                    "title": "PostgreSQL Benchmarks: Apple ARM M1 MacBook Pro 2020 : PostgreSQL",
                    "url": "https://www.reddit.com/r/PostgreSQL/comments/jxv104/postgresql_benchmarks_apple_arm_m1_macbook_pro/",
                    "favIconUrl": "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "Running Node.js natively on Apple Silicon | Component-Driven",
                    "url": "https://www.component-driven.dev/articles/native-node-on-m1",
                    "favIconUrl": "https://www.component-driven.dev/favicon.ico",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "GitHub - okonet/dotfiles",
                    "url": "https://github.com/okonet/dotfiles",
                    "favIconUrl": "https://github.githubassets.com/favicons/favicon.svg",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "O Apple silicon está pronto?",
                    "url": "https://isapplesiliconready.com/br",
                    "favIconUrl": "https://isapplesiliconready.com/favicon.ico",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "(40) M1 Mac SSD Swap Issues Explained: Should you be WORRIED? - YouTube",
                    "url": "https://www.youtube.com/watch?v=nuOBsXOaP38",
                    "favIconUrl": "https://www.youtube.com/s/desktop/5b526b6f/img/favicon_32.png",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "Apple M1 · Issue #86 · donmelton/other_video_transcoding · GitHub",
                    "url": "https://github.com/donmelton/other_video_transcoding/issues/86",
                    "favIconUrl": "https://github.githubassets.com/favicons/favicon.svg",
                    "customTitle": "",
                    "customDescription": ""
                }
            ],
            "labels": []
        },
        {
            "title": "Fit4Purpose",
            "cards": [
                {
                    "title": "#44 Andressa Chiara - Mas que raios é Fit for Purpose? by Product Guru's • A podcast on Anchor",
                    "url": "https://anchor.fm/product-gurus/episodes/44-Andressa-Chiara---Mas-que-raios--Fit-for-Purpose-ehje27",
                    "favIconUrl": "https://d12xoj7p9moygp.cloudfront.net/favicon/favicon-wave-32x32.png",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "@agileminas | Linktree",
                    "url": "https://linktr.ee/agileminas",
                    "favIconUrl": "https://linktr.ee/static/favicon-32x32.png",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "Telegram: Contact @F4Pcommunity",
                    "url": "https://t.me/F4Pcommunity",
                    "favIconUrl": "",
                    "customTitle": "",
                    "customDescription": ""
                },
                {
                    "title": "Podcast Love The Problem",
                    "url": "https://k21.global/lovetheproblem",
                    "favIconUrl": "https://k21.global/wp-content/uploads/k21-favico.svg",
                    "customTitle": "",
                    "customDescription": ""
                }
            ],
            "labels": []
        }        
    ]
}
  
  // SUPPORT FUNCTIONS
  function randomUpperAlphaNumeric() {
    return Math.random().toString(36).charAt(2).toUpperCase();
  }
  
  function createFromPattern(pattern) {
    pattern = pattern.split('');
    return pattern.map(x => x.replace('x', randomUpperAlphaNumeric())).join('');
  }
  
  
  // CREATE NEW TAB SPACE FORMATTED JSON
  let result = [];
  tobyExport.lists.forEach( (oldGroup, indexGroup) => {
    let newGroup = {
      "automatic": false,
      "order": (tobyExport.lists.length - indexGroup),
      "title": oldGroup.title,
      "uuid": createFromPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'),
      "sites": [],
      "timestamp": new Date().getTime(),
      "tags": []
    }
    result[result.length] = newGroup
  
    oldGroup.cards.forEach( (oldSite, indexSite) => {
      newGroup.sites[indexSite] = {
        "title": oldSite.title,
        "url": oldSite.url
      }
    })
  })
  
  // OUTPUT
  alert(JSON.stringify(result));
  
  