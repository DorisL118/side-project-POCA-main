Description
    探索咖啡廳 | 咖啡豆販售 | 推廣公平貿易咖啡
    以風格、服務分類咖啡廳，方便用戶尋找符合目前需求的店家，並提供公平貿易咖啡豆的資訊，讓用戶喝咖啡之餘也能透過消費咖啡豆幫助小農。

    •	目標族群：找尋咖啡廳或喜歡咖啡廳的人、消費咖啡豆的人
    •	痛點：咖啡廳資訊散落在各平台，無法快速找到自己理想的
    •	功能：咖啡廳風格篩選、文章列表、咖啡廳地圖搜尋、購買公平貿易咖啡豆。
    
Requirement
    前端（Frontend）：React HTML jsx css javascript jQuery
    後端（Backend）：暫無後端 使用 localStorage 暫存


.env Setting
    Storage 路徑：https://dorisl118.github.io/side-project-POCA/page/index.html


User Manual
    一、	Index.html 首頁
        •	Nav-bar：
        Logo：POCA logo -> 連結回到首頁 index.html
        shoppingCart：購物車icon -> 連結到購物車清單頁面 -> checkout.html
        menu：漢堡選單 -> showOverlay -> 開啟選單menu ( 首頁 -> index.html / 找咖啡 -> article.html  / 買咖啡 -> product.html  / 店家地圖 -> map.html / 聯繫我們 -> contact.html )
        •	header：形象展示
        •	search section：依造搜尋跳到首頁特定區塊
        search-item：找咖啡 -> index.html#article / 公平貿易咖啡 -> index.html#coffee / 買咖啡 -> index.html#product
        •	map section：咖啡廳地圖
        •	coffee section：公平貿易咖啡介紹，buy it now! -> product.html
        •	product section：公平貿易咖啡豆產品展示，點擊任一項產品 -> product.html

    二、	article.html 文章列表
        •	button：點擊後篩選文章tag標籤
        •	文章清單 -> Object articles 抓取資料 -> Map 產出所有文章
        •	點擊文章 -> 文章內容article-content.html 

    三、	product.html 產品列表
        •	點擊產品 -> 產品內容 product-content.html
        •	添加刪減購物數量 -> 數量反應在 shoppingCart -> 點擊 shoppingCart -> checkout.html 購物車清單頁面 -> 填寫收件資料 -> 購買完成 soppingComplete.html 畫面 -> 點擊回產品列表 product.html

    四、	map.html 咖啡廳地圖
        •	map：咖啡廳地圖找尋

    五、	contact.html 聯繫我們
        •	contact form：基本資料填寫與我們聯繫


UI/UX Design
    https://www.figma.com/design/ptdApTAtxjuuHeOjsp6J95/POCA%E8%B7%91%E5%92%96-UI?node-id=0-1&t=XfWNZSkfWi1faoKS-1

Function map
    https://www.canva.com/design/DAGFKy-iVP0/Ap87dblJXjKEKnSB6VfpLg/edit?utm_content=DAGFKy-iVP0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton