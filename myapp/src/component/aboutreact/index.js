import React , {Component} from "react";
import reactone from "../../picture/reactone.png";
import reactthree from "../../picture/reactthree.png";
import reactfive from "../../picture/reactfive.png";
import reactsix from "../../picture/reactsix.png";
import reactsevent from "../../picture/react7.png";
import reacteigth from "../../picture/react8.png";
import reactnine from "../../picture/react9.png";
import "./index.css"
const AboutReact = ()=>{
    return <div className="aboutreact">
         <h2>
             react框架介绍
         </h2>
         <p>
            互联网技术发展一日千里,网页应用开发技术也不例外,这一领域备受瞩目的两个工具React和Redux。
         </p>
         <p>
         自从jQuery问世以来，它就在网页开发领域占据统治地位，同时，还有许多MVC框架如雨后春笋般出现。但是业界也普遍发现，jQuery和
         各种MVC框架在开发大型复杂应用时，依然面临很多难以克服的困难。
         </p>
         <p>
         当2014年Facebook推出React时，给整个业界带来全新的看待网页应用开发的方式，和React一同问世的Flux，也克服传统MVC框架的很多
         弊病。技术在不断发展，在2015年，Flux的一个变体Redux出现，进一步优化了Flux的功能。
         </p>
         <p>
         React和Redux的结合，让网页开发的方式耳目一新，是为了一睹React和Redux的内在原理并深入实践。
         </p>
         <p>
         在这里深入介绍React和Redux，绝不是贬抑其他前端框架，事实上，开发者应该接触不同的开发模式，才能融会贯通，对技术有一个
         全面的认识，若要掌握某种技术，就要深入学习。对React和Redux的了解不要只是停留在能用的表面功夫，重要的
         是理解内在的原理。
         </p>
         <p>
         React 是一个用于构建用户界面的 JavaScript 库，主要用于构建 UI，而不是一个 MVC 框架，但可以使用 React 作为 MVC 架构的
          View 层轻易的在已有项目中使用，它是一个用于构建用户界面的 JavaScript 库，起源于 Facebook 的内部项目，用来架设
           Instagram 的网站，于 2013 年 5 月开源。React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
         </p>
         <p>
         以前没有 ajax 技术的时候，web 页面从服务端整体渲染出 html 输出到浏览器端进行渲染，同样的，用户的一个改变页面的操作也会
         刷新整个页面来完成。直到有了 ajax 出现，实现页面局部刷新，带来的高效和分离让 web 开发者们惊叹不已。但随之而来的问题是，
         复杂的用户交互及展现需要通过大量的 DOM 操作来完成，这让页面的性能以及开发的效率又出现了新的瓶颈。
         </p>
         <p>
         时至今日，谈到前端性能优化，减少 DOM 元素、减少 reflow 和 repaint、编码过程中尽量减少 DOM 的查询等手段是大家耳熟能详的。
         而页面任何UI的变化都是通过整体刷新来完成的。幸运的是，React 通过自己实现的 DOM Diff 算法，计算出虚拟页面当前版本和新版本
         之间的差异，最小化重绘，避免不必要的 DOM 操作，解决了这两个公认的前端性能瓶颈，实现高效 DOM 渲染。
         </p>
         <p>
         我们知道，频繁的操作 DOM 所带来的性能消耗是很大的，而 React 之所以快，是因为它不直接操作 DOM，而是引进虚拟 DOM 
         的实现来解决这个问题。
         </p>
         <p>
         对于页面的更新，React 通过自己实现的 DOM Diff 算法来进行差异对比、差异更新，反映到页面上就是只重绘了更新的部分，
         从而提高渲染效率。
         </p>
         <p>
             react作为主流三大框架之一，react必有其高明之处，下面会详细介绍react的优缺点，另外两大框架分别是vue和angular。
         </p>
         <div className="component">
         <h3>react组件化思想</h3>
         <p>
         React 把用户界面抽象成一个个组件，如按钮组件 Button、对话框组件 Dialog、日期组件 Calendar。开发者通过组合这些组件，
         最终得到功能丰富、可交互的页面。通过引入 JSX 语法，复用组件变得非常容易，同时也能保证组件结构清晰。有了组件这层抽象，
         React 把代码和真实渲染目标隔离开来，除了可以在浏览器端渲染到 DOM 来开发网页外，还能用于开发原生移动应用。
         </p>
         <p>
         现在的应用已经变得前所未有的复杂，因而开发工具也必须变得越来越强大。React 并不是完整的 MVC/MVVM 框架，它专注于提供清晰、
         简洁的 View（视图）层解决方案。而又与模板引擎不同，React 不仅专注于解决 View 层的问题，又是一个包括 View 和 Controller 
         的库。对于复杂的应用，可以根据应用场景自行选择业务层框架，并根据需要搭配 Flux、Redux、GraphQL/Relay 来使用。
         </p>
         <p>
         React 不像其他框架那样提供了许多复杂的概念与烦琐的 API，它以 Minimal API Interface 为目标，只提供组件化相关的非常少量的
          API。同时为了保持灵活性，它没有自创一套规则，而是尽可能地让用户使用原生 JavaScript 进行开发。只要熟悉原生 JavaScript 
          并了解重要概念后，就可以很容易上手 React 应用开发。
         </p>
         </div>
         <div className="virtual">
         <h3>
         传统dom与虚拟dom更新：
        </h3>
        <p>
        真实页面对应一个 DOM 树。在传统页面的开发模式中，每次需要更新页面时，都要手动操作 DOM 来进行更新。
        </p>
        <p>
        英文Functional Programming它属于"结构化编程"的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用。
        </p>
        <img src={reactone}/>
        </div>
        <div className="function">
        <h3>
        函数式编程好处：
        </h3>
        <ol start="1">
            <li>
            代码简洁，开发快速
            </li>
            <li>
            接近自然语言，易于理解
            </li>
            <li>
            更方便的代码管理
            </li>
            <li>
            易于"并发编程"
            </li>
            <li>
            代码的热升级
            </li>
        </ol>
        
        <p>
        在过去，工业界的编程方式一直以命令式编程为主。命令式编程解决的是做什么的问题。
        </p>
        <p>
        而函数式编程，对应的是声明式编程，它是人类模仿自己逻辑思考方式发明出来的。声明式编程的本质是 lambda（λ） 演算 。
        </p>
        <p>
        React 把过去不断重复构建 UI 的过程抽象成了组件，且在给定参数的情况下约定渲染对应的 UI 界面。React 能充分利用很多函数式
        方法去减少冗余代码。此外，由于它本身就是简单函数，所以易于测试。可以说，函数式编程才是 React 的精髓。
        </p>
        <p>
        React 为方便 View 层组件化，承载了构建 HTML 结构化页面的职责。从这点上来看，React 与其他 JavaScript 模板语言有着许多异曲同
        工之处，但不同之处在于 React 是通过创建与更新虚拟元素（virtual element）来管理整个 Virtual DOM 的。
        </p>
        <p>
        JSX 将 HTML 语法直接加入到 JavaScript 代码中，再通过翻译器转换到纯 JavaScript 后由浏览器执行。在实际开发中，JSX 在产品打包阶
        段都已经编译成纯 JavaScript，不会带来任何副作用，反而会让代码更加直观并易于维护。
        </p>
        <p>
        编译过程由Babel 的 JSX 编译器实现。
        </p>
        <p>
        JSX 的官方定义是类 XML 语法的 ECMAScript 扩展。它完美地利用了 JavaScript 自带的语法和特性，并使用大家熟悉的 HTML 语法来创建
        虚拟元素。定义标签时，只允许被一个标签包裹。标签一定要闭合。
        </p>
        </div>
        <div className="lifecycle">
        <h3>React生命周期</h3>
        <p>
        componentwillMount：即将进入dom，render：渲染dom，componentDidMount：已经进入DOM,componentWillReceiveProps 已加载组件收到新的参数时调用
        shouldComponentUpdate:组件是否更新，componentWillUpdate：即将更新，componentDidUpdate：已经更新，componentWillUnmount：即将卸载,
        </p>
        </div>
        <div className="diff">
        <h3>虚拟dom与diff算法</h3>
        <ol>
        <li>
        Web界面由DOM树来构成，当其中某一部分发生变化时，其实就是对应的某个DOM节点发生了变化。在React中，构建UI界面的思路是由当前状态决定界面。
        前后两个状态就对应两套界面，然后由React来比较两个界面的区别，这就需要对DOM树进行Diff算法分析。
        </li>
        <li>
        传统：找到两棵任意的树之间最小的修改是一个复杂度为 O(n^3) 的问题. 因为需要不同的层级。
        </li>
        <li>
        React 用了一种简单但是强大的技巧, 达到了接近 O(n) 的复杂度.把树按照层级分解
        <div><img src={reactthree}/></div>
        </li>
        
        <li>
        列表比较，写一个 key 属性帮助 React 来处理它们之间的对应关系.实际中, 在子元素中找到唯一的 key 通常很容易.
        <div><img src={reactfive}/></div>
        </li>
        
        <li>
        Components比较，React app 通常由用户定义的 component 组合而成,通常结果是一个主要是很多 div 组成的树.这个信息也被 React 的 diff 算法考虑进去, React 只会匹配相同类型(ES6 class)的 component.
        <div><img src={reactsix}/></div>
        </li>
        
        <li>
        合并操作，当调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
        <div><img src={reactsevent}/></div>
        </li>
        <li>
        子树渲染: 每当有数据更新, 你不是都调用根节点的 setState.你会在需要接收对应更新的 component 上调用, 或者在上面的几个
         component.你很少要一直到根节点上. 就是说界面更新只出现在用户产生交互的局部.
        <div><img src={reacteigth}/></div>
        </li>
        <li>
        选择性子树渲染，在组件上实现下面的方法boolean shouldComponentUpdate(object nextProps, object nextState)根据
         component 的前一个和下一个 props/state,你可以告诉 React 这个 component 没有更新, 也不需要重新绘制.实现得好的话,
          可以带来巨大的性能提升.
          <div><img src={reactnine}/></div>
        </li>
        
        </ol>
        </div>
        <div className="applucation">
        <h3>应用情况</h3>
        <p>
        国外应用的较多，facebook、Yahoo、Reddit等。在github可以看到一个列表Sites-Using-React，国内的话，查了查，貌似比较少，
        目前知道的有一个杭州大搜车。大多技术要在国内应用起来一般是较慢的，不过React确实感觉比较特殊，特别是UI的组件化和
        Virtual DOM的思想。
        </p>
        </div>
        <div className="comparative">
        <h3>
        比较分析
        </h3>
        <p>
        和其他一些js框架相比，React怎样，比如vue、Angular等。
        </p>
        <ol className="aboutreact-style">
        <li>React不是一个MVC框架，它是构建易于可重复调用的web组件，侧重于UI, 也就是view层</li>
        <li>其次React是单向的从数据到视图的渲染，非双向数据绑定</li>
        <li>不直接操作DOM对象，而是通过虚拟DOM通过diff算法以最小的步骤作用到真实的DOM上。</li>
        <li>不便于直接操作DOM，大多数时间只是对 virtual DOM 进行编程</li> 
        </ol>
        </div>
    </div>
}
export default AboutReact;