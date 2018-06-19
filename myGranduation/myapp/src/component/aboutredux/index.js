import React , {Component} from "react";
import reacttwo from "../../picture/reacttwo.png";
import "./index.css";
const AboutRedux = ()=>{
    return <div className="aboutredux">
     
         <h2>
             全局状态管理
         </h2>
         <p>
         React框架本身只应用于View，如果基于MVC模式开发，还需要Model和Control层，这样催生了Flux的产生，而Redux是基于Flux理念的一种解决方式。
         </p>
         <p>
         组建直接传递参数或者事件都需要props一层层代理，对于复杂组件，它可能嵌套的子组件非常多，层级也比较深，那么，如果还采用props链条来维护组件通信或者数据共享，将非常困难，也不利于开发和维护。
         </p>
         <p>
         要了解Redux，首先要从Flux说起，可以认为Redux是Flux思想的另一种实现方式，通过了解Flux，我们可以知道Flux一族框架
         （其中就包括Redux）贯彻的最重要的观点—单向数据流，更重要的是，我们可以发现Flux框架的缺点，从而深刻地认识到Redux相对
         于Flux的改进之处。
        </p>
        <p>
        让我们来看看Flux的历史，实际上，Flux是和React同时面世的，在2013年，Face-book公司让React亮相的同时，也推出了Flux框架，
        React和Flux相辅相成，Facebook认为两者结合在一起才能构建大型的JavaScript应用。
        </p>
        <p>
        做一个容易理解的对比，React是用来替换jQuery的，那么Flux就是以替换Backbone.js、Ember.js等MVC一族框架为目的。
        </p>
        <p>
        在MVC（Model-View-Controller）的世界里，React相当于V（也就是View）的部分，只涉及页面的渲染一旦涉及应用的数据管理部分，
        还是交给Model和Controller，不过，Flux并不是一个MVC框架，事实上，Flux认为MVC框架存在很大问题，它推翻了MVC框架，并用一个
        新的思维来管理数据流转。
        </p>
        <ol className="aboutredux-style">
            <li>Model（模型）负责管理数据，大部分业务逻辑也应该放在Model中；</li>
            <li>View（视图）负责渲染用户界面，应该避免在View中涉及业务逻辑；</li>
            <li>Controller（控制器）负责接受用户输入，根据用户输入调用对应的Model部分逻辑，把产生的数据结果交给View部分，
                让View渲染出必要的输出。
            </li>
        </ol>
        <p>
        Flux框架也是一种MVC框架，不同于传统的MVC，它采用单向数据流，不允许Model和Control互相引用。Flux流程大致如下：
        </p>
        <img src={reacttwo}/>
        <ol className="aboutredux-style">
            <li>Actions: 驱动Dispatcher发起改变</li>
            <li>Dispatcher: 负责分发动作（事件）</li>
            <li>Store: 储存数据，处理数据</li>
            <li>View: 视图部分</li>
        </ol>
        <h3>Flux的缺点为：</h3>
        <p>
        一个应用可以拥有多个store，多个store直接可能有依赖关系（相互引用）；
        </p>
        <p>
        Store封装了数据和处理数据的逻辑。
        </p>
        <p>
            flux没有封装完整的api，只是提供了一个思想，有许多逻辑需要自己去写，所以没有太多限制，所以需要开发者自己去写。
        </p>
        <p>针对flux的不足，redux的出现补充了flux的不足，但redux并不是只为了react而出现的</p>
        <p>首先明确一点，Redux 是一个有用的架构，但不是非用不可。事实上，大多数情况，你可以不用它，只用 React 就够了。</p>
        <p>redux再flux基础上强调了三个基本原则</p>
        <ol className="aboutredux-style">
            <li>唯一数据源</li>
            <li>保持状态只读</li>
            <li>数据改变只是通过纯函数完成</li>
        </ol>
        <p>
        唯一数据源是应用状态数据应该只存储唯一的一个store上，flux中，应用有多个store，而redux中只有一个store，所有组件的状态都放在
        store上。
        </p>
        <h3>store</h3>
        <p>
        Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。Redux 提供createStore这个函数，用来生成 Store。
        </p>
        <span>
        import "{" createStore "}" from 'redux';<br/>
        const store = createStore(fn);
        </span>
        <p>
        上面代码中，createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。createStore方法还可以接受第二个参数，表示 State 的最初状态。
        </p>
        <h3>state</h3>
        <p>
        Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
        </p>
        <p>Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。</p>
        <h3>Action</h3>
        <p>State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。
            Action 就是 View 发出的通知，表示 State 应该要发生变化了。</p>
        <p>Action 是一个对象，有两个属性，默认type和payload，记录状态和传输数据</p>
        <p>Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。</p>
        <h3> store.dispatch()</h3>
        <p>store.dispatch()是 View 发出 Action 的唯一方法。</p>
        <p>store.dispatch({"{type: 'ADD_TODO',payload: 'Learn Redux'}"});</p>
        <h3>Reducer</h3>
        <p>Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。</p>
        <p>Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。</p>
        <p>const reducer = (state = defaultState, action) => {"{switch (action.type) {case 'ADD':return state + action.payload;default: return state;}}"};</p>
        <p>reducer函数收到名为ADD的 Action 以后，就返回一个新的 State，作为加法的计算结果。其他运算的逻辑（比如减法），也可以根据 Action 的不同来实现。</p>
        <p>Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 
            的时候，将 Reducer 传入createStore方法。</p>
        
        <p>Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。</p>
        <p>import {"{ combineReducers }"} from 'redux';</p>
        <p>const chatReducer = combineReducers({"{chatLog,statusMessage,userName}"})</p>
        <p>上面的代码通过combineReducers方法将三个子 Reducer 合并成一个大的函数。</p>
        <h3>纯函数</h3>
        <p>Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。</p>
        <p>由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。</p>
        <h3>store.subscribe()</h3>
        <p>Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。</p>
        <h3>redux升级</h3>
        <p>react每个组件都需要引入store，这需要知道store的位置，这是一件麻烦的事，所以react-redux出世了。他是专门对react而产生的
            react-redux有新的api。
        </p>
        <p>要声明一点，Redux并不是专为React开发的，它可以应用在任何框架上。针对React工程，可以使用react-redux库帮助我们更快，更便捷得搭建Redux工程，让代码更加精简。
            react-redux库提供了如下功能：
        </p>
        <p>把组件拆分为容器组件和傻瓜组件，使用者只需要写傻瓜组件；</p>
        <p>
        使用React的Context提供了一个所有组件都可以直接访问的Context，即react-redux Provider；
        </p>
        <p>provider是react-redux提供的新的组件，</p>
        <p>接受store支持传递给子组件。一个父组件可以连接到许多子组件。这样就可以把父组件的store传递给子组件中，这样就不用每一个
            子组件都需要从新引用。
        </p>
        <p>
        简单说，一个纯函数，只要输入相同，无论调用多少次，输出都是一样的。这就要求，绝不能修改输入参数，因为输入参数有可能在其他地方用到。
        </p>
        <h3>高阶组件connect</h3>
        <p>connect是一个高阶函数，首先传入mapStateToProps、mapDispatchToProps，然后返回一个生产Component的函数(wrapWithConnect)，
            然后再将真正的Component作为参数传入wrapWithConnect，这样就生产出一个经过包裹的Connect组件。
        </p>
        <p>
            connect(mapStateToProps,mapDispatchToProps)(component)
        </p>
        <h4>mapStateToProps</h4>
        <p>mapStateToProps(state, ownProps)</p>
        <p>const mapStateToProps = (state) => {"{return {count: state.count}}"}</p>
        <p>这个函数的第一个参数就是 Redux 的 store，我们从中摘取了 count 属性。你不必将 state 中的数据原封不动地传入组件，可以根据 state 中的数据，动态地输出组件需要的属性。</p>
        <p>函数的第二个参数 ownProps，是组件自己的 props。有的时候，ownProps 也会对其产生影响。</p>
        <p>当 state 变化，或者 ownProps 变化的时候，mapStateToProps 都会被调用，计算出一个新的 stateProps，（在与 ownProps merge 后）更新给组件。</p>
        <h4>mapDispatchToProps</h4>
        <p>mapDispatchToProps(dispatch, ownProps)</p>
        <p>connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作为 props 绑定到组件上，也会成为 MyComp 的 props。</p>
        <h3>小结</h3>
        <p>
        从Flux到Redux，再到react-redux，从这个简短历程中，我们可以看到框架设计上的演进，而redux + react-redux也是React开发万家桶的标配。到了这里，可以忘记Flux啦~
        </p>
    </div>
}
export default AboutRedux;