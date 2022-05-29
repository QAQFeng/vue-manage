import Cookie from 'js-cookie'

// 设置 是否展开侧栏 属性，面包屑 功能实现
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menu: []
    },
    mutations: {
        // 折叠、展开左侧菜单栏
        collapeseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 面包屑的显示
        selectMenu(state, val) {
            // 如果点击的标签不是 “首页”，修改显示，是 “首页” 则重置 currentMenu
            if (val.name !== 'home') {
                state.currentMenu = val
                // 当前点击的标签和目前正在显示的标签是否一致，不一致则修改高亮显示
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return 
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                // 判断是否存在二级路由
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}