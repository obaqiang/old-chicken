module.exports = {
  title: "Old Chicken Of Coffee",
  description: "old chicken's personal blog",
  base: "/old-chicken/",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    // lastUpdated: '上次更新',
    subSidebar: "auto",
    nav: [
      {
        text: "",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/712139234359182/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,
        children: [{ title: "学前必读", path: "/" }],
      },
    ],
  },
};
