## 博学之, 审问之, 慎思之, 明辨之, 笃行之;
## 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾;


### Example Hello World;

    import React, { Component, useState } from 'react';

    Class Component;
    class Example extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            }
        }
        addCount() {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return (
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={this.addCount.bind(this)}>clickMe</button>
                </div>
            )
        }
    }

    Function Component;
    function Example() {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>ClickMe</button>
            </div>
        )
    }

    export default Example

### UseState;

    import React, { Component, useState } from 'react'

    function UseState() {
        const [age, setAge] = useState(18);
        const [sex, setSex] = useState('man');
        const [job, setJob] = useState('JavaScript Developer');
        return (
            <div>
                <p>Lee age`s : &emsp; {age}</p>
                <p>Lee sex`s : &emsp; {sex}</p>
                <p>Lee job`s : &emsp; {job}</p>
            </div>
        )
    }

    export default UseState;

### UseEffect;

    解决生命周期问题;
        在16.8版本更新之前, 本是通过生命周期钩子实现的操作, 在Hook特性中即用UseEffect来实现;

        第二个参数:
        如果第二参数为空, 那么在任何操作组件生命周期的时候都会执行解绑
        如果第二参数为空数组, 那么在任何操作组件生命周期的时候都不会执行解绑
        如果第二参数为数组中制定的某个变量, 那么只有在这个变量更新时才会触发解绑;
    
    useEffect(() => {
        此时执行期为挂载和更新钩子;
        console.log('useEffect ==> join List Page');
        return () => {
            解绑: 此时执行销毁钩子;
            console.log('useEffect ==> leave List Page');
        }
    }, [])

### UseContext;

    解决父子组件传值问题;
        在 Class 生命组件时 需要使用props 进行父子组件传值;
        那么在Hook 中的 Funciton 组件中 就是通过UseContext来进行组件的传值的;
        
        useReducer解决的是状态共享的问题, 相当于Redux, 经常与useContext使用所以容易混淆
        概念比较抽象, 注意区分作用;

    import React, { Component, useState, createContext, useContext } from 'react'

    const CountContext = createContext();

    function UseContextChild() {
        let count = useContext(CountContext);
        return <h1>{count}</h1>
    }

    function UseContextFather() {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>ClickMe</button>

                <CountContext.Provider value={count}>
                    <UseContextChild></UseContextChild>
                </CountContext.Provider>
                
            </div>
        )
    }

    export default UseContextFather;


    

### UseReducer;

    import React, {useReducer} from 'react';

    function ReducerDemo() {
        const [count, dispatch] = useReducer((state, action) => {
            console.log(state, action);
            switch(action) {
                case 'add':
                    return state + 1;
                case 'sub':
                    return state - 1;
                default:
                    return state;
            }
        }, 0)
        
        return (
            <div>
                <h1>Now the Count`s {count}</h1>
                <button onClick={() => {dispatch('add')}}>Increment</button>
                <button onClick={() => {dispatch('sub')}}>Decrement</button>
            </div>
        )
        
    }

    export default ReducerDemo;


### UseMemo

    useMemo   对应的生命周期是: shouldComponentUpdate;
    useEffect 对应的生命周期是: componentDidUpdate;
    两者用法包括传递的参数都是一样的;
    
    import React, { Component, useState, useEffect, useMemo } from 'react'

    export default function UseMemo() {
        const [zuxian, setZuxian] = useState('zuxian is waiting for the guests')
        const [zhiling, setZhiling] = useState('Zhiling is waiting for the guests')

        return (
            <>
                <button onClick={() => { setZuxian(new Date().getTime()) }}>zuxian</button>
                <button onClick={() => { setZhiling(new Date().getTime() + '    zhiling came to me') }}>zhiling</button>

                <ChildCom name={zuxian}>
                    {zhiling}
                </ChildCom>

            </>
        )
    }

    export function ChildCom({ name, children }) {
        // props中解构出(name和children);
        function changeZuxian(name) {
            console.log('Here her is, Zuxian came to me');
            return name + '      Zuxian came to me'
        }

        // const actionZuxian = useEffect(() => changeZuxian(name), [name]);
        const actionZuxian = useMemo(() => changeZuxian(name), [name]);

        // 此时用useMemo实现的是当点击志玲时不会触发祖贤;
        // 如果使用useEffect时, 就不会展示actionZuxian, 因为useEffect是在挂载和更新完成之后触发的函数
        
        return (
            <>
                <div>{actionZuxian}</div>
                <div>{children}</div>
            </>
        )
    }
    
    
    
    
    
    
    
### UseRef;

    import React, { Component, useEffect, useState, useRef } from 'react'

    export default function UseRef() {
        const inputEle = useRef(null);
        const showFont = () => {
            inputEle.current.value = 'Hello Lee';
        }

        const [text, setText] = useState('Lee');
        const textRef = useRef();

        useEffect(() => {
            textRef.current = text;
            console.log('textRef.current: ', textRef.current);
        })
        
        
        return (
            <>
                <input ref={inputEle} type="text" />
                <button onClick={showFont}>showFont in inputBox</button>
                <br/><br/>
                <input value={text} type="text" onChange={(e) => {setText(e.target.value)}} />
            </>
        )
    }

### UseCallback & Hook Custom Function;

    useCallback:
        会缓存方法, useMemo是缓存状态或者属性的;

