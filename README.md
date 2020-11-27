# react-linkedin-example

這是一個練習專案

`create-react-app 4.0`

`react-router`做路由管理

`react-app-rewired`+`customize-cra`做 webpack 擴充，絕對路徑與動態載入 chunkname

`ant-design` UI

`style-component` CSS in JS

---

2020/11/4  
icon 使用 iconfont 的 svg 圖檔  
使用 style-component 的 themeProvider + GlobalStyle 達到樣式切換效果[範例](https://github.com/styled-components/styled-components/pull/1493)

2020/11/5
新增 i18n 架構
樣板顏色抽出管理

2020/11/6  
新增 語系下拉選單'文字'+'選項'隨語系切換對應文字

2020/11/16  
新增 Card 卡片元件

2020/11/17  
新增 axios 呼叫 api 方法，react-redux 管理狀態

2020/11/18  
新增 登入頁面  
新增 未登入路由判斷

2020/11/19  
修改 未登入路由判斷，待優化
修改 未登入與登入路由判斷，待製作登入狀態切換  
修改 修改使用者是否登入的判斷，新增登入按鈕功能

2020/11/20  
新增 新增 [firebase](https://react-firebase-js.com/) 處理登入動作

2020/11/23  
新增 登入狀態判斷導頁機制，未登入導登入頁，登入導首頁  
修改 修改 App 將皮膚判斷移至 IndexLayout

2020/11/25
修改 修改判斷改為 isLogin + uid(redux + sessionStorage)方式，待優化 Header 元件 render 次數

2020/11/27  
新增 IndexLayout 套用 memo 減少 re-render  
新增 更新 header 樣式
