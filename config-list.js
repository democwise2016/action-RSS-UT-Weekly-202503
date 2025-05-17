const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  
  {
    title: '筆吧評測室',
    feedID: 'Bibalaptop',
    homepageURL: 'https://www.youtube.com/channel/UCpIh66B9h_tWfXDcjTYlucA',
    itemFilters: ItemFiltersPreset.between6minTo60Min,
  },
  {
    title: '0號手稿 看ACG',
    feedID: 'user-soulkao_0',
    homepageURL: 'https://www.youtube.com/channel/UCbWIKVoPlnahOJj8OZ3kSZA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '紫骷 玩遊戲',
    feedID: 'Zikukirby',
    homepageURL: 'https://www.youtube.com/channel/UCQceikp-aRr_e5uCARuPvEQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  {
    title: 'AI超元域',
    feedID: 'AIsuperdomain',
    homepageURL: 'https://www.youtube.com/channel/UCIomFkAj4Vq_rGX2Jot7D8A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'The walking fish 步行魚',
    feedID: 'the_walking_fish',
    homepageURL: 'https://www.youtube.com/channel/UCXgnKgUBxUlRABoWK7a5A5Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '技术爬爬虾  TechShrimp',
    feedID: 'Tech_Shrimp',
    homepageURL: 'https://www.youtube.com/channel/UCa6D2k5qhpOI9I-WT8fpd6g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'AI开发者-就爱瞎鼓捣',
    feedID: 'techdiylife',
    homepageURL: 'https://www.youtube.com/channel/UC8uOgHOAH_k-ee-bHA0GQFQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '獨角獸那麼叫',
    feedID: 'unicorn-roar',
    homepageURL: 'https://www.youtube.com/channel/UCQ3GunBqsEm0-WkiblbO7uw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '35線上賞屋',
    feedID: '35visitchannel',
    homepageURL: 'https://www.youtube.com/channel/UCnWB4yjKnm6AeW-pj4E3dQw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '超認真少年Imserious',
    feedID: 'imseriou',
    homepageURL: 'https://www.youtube.com/channel/UCckzc03-ycrpB1XIUfRhpnw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '钟文泽',
    feedID: 'zhongwenze',
    homepageURL: 'https://www.youtube.com/channel/UCT1YrR_CLpwosODYagzhm7Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '翼王 玩 3C',
    feedID: 'WingStudio666',
    homepageURL: 'https://www.youtube.com/channel/UCxcuxsAjdnQaiRwYb5CVISw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: '志祺七七 X 圖文不符',
      feedID: 'shasha77',
      homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.endsWith('｜志祺七七')) }
      ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
      maxItems: 3
    },
  ]
}


module.exports = feedList
