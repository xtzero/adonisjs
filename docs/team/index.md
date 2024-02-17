---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const translateTeam = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/32516078?v=4',
    name: 'xt',
    title: '发起者',
    links: [
      { icon: 'github', link: 'https://github.com/xtzero' },
      { icon: 'homepage', link: 'https://xtzero.me' }
    ]
  },
]

const adonisTeam = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/1398931824110280708/uint2k0c_400x400.jpg',
    name: 'Harminder Virk',
    title: '创建者 / 主要维护者',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/AmanVirk1' },
    ]
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1722310880489086976/cfTMHUaC_400x400.jpg',
    name: 'Romain Lanz',
    title: '核心团队成员',
    desc: 'VolleyballWorld 开发者',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/romainlanz' },
    ]
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1375474920713510918/RoViMKvm_400x400.jpg',
    name: 'Michaël Zasso',
    title: '核心团队成员',
    desc: '科研软件工程师',
    org: "Node.js 技术指导委员会",
    links: [
      { icon: 'twitter', link: 'https://twitter.com/targos89' },
    ]
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1623518344635621376/gspqzyOp_400x400.jpg',
    name: 'Julien Ripouteau',
    title: '核心团队成员',
    desc: 'AdonisJS VsCode 扩展、AdonisJS Sail、packages.adonisjs.com 作者',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/julien_rpt' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      翻译团队
    </template>
    <template #lead>
      社区文档的建立离不开翻译团队的加入
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="translateTeam"
  />

  <VPTeamPageTitle>
    <template #title>
      AdonisJS 团队
    </template>
    <template #lead>
      出色的开源框架的出现离不开主创团队的努力
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="adonisTeam"
  />

  <VPTeamPageTitle>
    <template #title>
      加入我们
    </template>
    <template #lead>
      期待和你一起完成这份文档，点击右上角的 Github 图标或者 <a style="color: #5296D5;" href="https://github.com/xtzero/adonisjs" target="_blank">点击这里</a> ，提交翻译！
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

