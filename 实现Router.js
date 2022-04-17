/* 
自定义标签：Web Components
监听路由的变化：监听popstate+自定义事件处理pushState和replaceState

*/
const oriPushState = history.pushState
history.pushState = function (state, title, url) {
  oriPushState.apply(history, [state, title, url])
  const event = new CustomEvent('c-popstate', {
    detail: {
      state,
      title,
      url
    }
  })
  window.dispatchEvent(event)
}


class CustomLink extends HTMLElement {
  connectedCallBack() {
    this.addEventListener('click', e => {
      e.preventDefault()
      const to = this.getAttribute('to')
      history.pushState('', '', to)
    })
  }
}

window.customElements.define('c-click', CustomLink)
// 主要是提供配置信息，对外提供getData的方法
class CustomRoute extends HTMLElement {
  data = null
  getData() {
    return {
      default: this.hasAttribute('default'),
      path: this.getAttribute('path'),
      component: this.getAttribute('component')
    }
  }
}

window.customElements.define('c-route', CustomRoute)

// 收集路由信息，监听路由信息的变化，然后加载对应的组件
class CustomRouter extends HTMLElement {

}

class CustomComponent extends HTMLElement {
  async connectedCallBack() {
    console.log('c-component connected');
    const strPath = this.getAttribute('path')
    const cInfos = await loadComponent(strPath)
    const shadow = this.attachShadow({
      mode: "closed"
    })
    this.addElements(shadow, cInfos)
  }
  addElements(shadow, info) {
    if (info.template) {

    }
  }
}