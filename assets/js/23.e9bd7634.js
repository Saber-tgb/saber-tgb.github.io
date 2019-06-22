(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{266:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"组件的生命周期可分成三个状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期可分成三个状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件的生命周期可分成三个状态")]),t._v(" "),a("ul",[a("li",[t._v("挂载：组件被实例化并挂载在到 dom 树这一过程称为挂载")]),t._v(" "),a("li",[t._v("更新：当组件的属性或者状态改变时会重新渲染")]),t._v(" "),a("li",[t._v("卸载：当一个组件被移出 Dom 树时，组件就会被卸载")])]),t._v(" "),a("h2",{attrs:{id:"挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ojvil4eq9.bkt.clouddn.com/18-7-2/46955621.jpg",alt:"React生命周期"}})]),t._v(" "),a("ul",[a("li",[t._v("首次渲染执行的顺序如图上\n"),a("ul",[a("li",[a("code",[t._v("getDefaultProps")]),t._v("相当于 ES6 中"),a("code",[t._v("staticdefaultProps = {}")])]),t._v(" "),a("li",[a("code",[t._v("getInitialState")]),t._v("相当于"),a("code",[t._v("constructor中的 this.state = {}")])])])]),t._v(" "),a("li",[a("code",[t._v("componentWillMount()")]),t._v(" "),a("ul",[a("li",[t._v("在"),a("code",[t._v("render()")]),t._v("之前调用被调用，因此在这方法里设置 this.setState 是不会触发不会触发重渲")]),t._v(" "),a("li",[t._v("这是唯一会在服务端渲染调起的生命周期钩子函数，在服务端渲染的场景中可以在这发送 AJAX 请求")])])]),t._v(" "),a("li",[a("code",[t._v("componentDidMount()")]),t._v(" "),a("ul",[a("li",[t._v("该方法在组件挂载完成后立即调用，并且只会调用一次")]),t._v(" "),a("li",[t._v("通常在这个方法中发送 AJAX 请求")])])])]),t._v(" "),a("h2",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),a("h3",{attrs:{id:"props-改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-改变","aria-hidden":"true"}},[t._v("#")]),t._v(" Props 改变")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ojvil4eq9.bkt.clouddn.com/18-7-2/32281555.jpg",alt:"React生命周期"}})]),t._v(" "),a("h3",{attrs:{id:"state-改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-改变","aria-hidden":"true"}},[t._v("#")]),t._v(" State 改变")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ojvil4eq9.bkt.clouddn.com/18-7-2/6072673.jpg",alt:"React生命周期"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentWillReceiveProps")]),t._v(" "),a("ul",[a("li",[t._v("方法在已挂载的组件接收到新属性前调用")]),t._v(" "),a("li",[t._v("要合理使用"),a("code",[t._v("componentWillReceiveProps")]),t._v("需做好条件判断")])])])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myProp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nextProps.myProp has a different value than our current prop")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("shouldComponentUpdate")])]),t._v(" "),a("li",[a("code",[t._v("componentWillUpdate")])]),t._v(" "),a("li",[a("code",[t._v("componentDidUpdate")])])]),t._v(" "),a("h2",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载","aria-hidden":"true"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ojvil4eq9.bkt.clouddn.com/18-7-2/59578019.jpg",alt:"React生命周期"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentWillUnmount")]),t._v(" "),a("ul",[a("li",[t._v("当组件被卸载之前立刻调用；可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在 componentDidMount 环节创建的 DOM 元素。")])])])]),t._v(" "),a("h2",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("componentDidCatch()")]),t._v(" "),a("ul",[a("li",[t._v("在渲染过程中发生错误时会被调用;只可以处理子组件中产生的、未处理的错误，能够捕获的错误类型有子组件 render 函数中产生的错误及生命周期函数中产生的非异步错误")])])])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//父组件或祖宗组件中实现")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidCatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("errorString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" errorString\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ErrorLoggingTool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errorInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShowErrorMessage")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render normal component output")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);