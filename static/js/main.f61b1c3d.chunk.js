(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],[,,,,,,,function(t,e,a){t.exports=a(15)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(6),c=a.n(r),i=(a(12),a(1)),o=a(2),l=a(4),u=a(3),m=(a(13),a(14),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.title;return n.a.createElement("footer",{className:"App section",style:{background:"#2d3246"}},n.a.createElement("p",null,e),n.a.createElement("ul",{className:"d-flex bd-highlight"},t.map((function(t,e){return n.a.createElement("li",{className:"p-2 flex-fill bd-highlight",key:e},t)}))))}}]),a}(n.a.Component)),f=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).isWinner=function(){var t=s.state.cout%2===0?"X":"O";for(var e in s.winnerLine){var a=s.winnerLine[e];s.state.squares[a[0]]===t&&s.state.squares[a[1]]===t&&s.state.squares[a[2]]===t?(s.setState({flag:!0}),s.setState({status:"\u041f\u043e\u0431\u0435\u0434\u0438\u043b: "+t}),s.setState({defaultClass:"gameWin"}),setTimeout(s.gameReset,3e3)):8===s.state.cout&&!1===s.state.flag&&(s.setState({status:"\u041d\u0438\u0447\u044c\u044f!"}),s.setState({defaultClass:"gameOver"}),s.setState({flag:!0}),setTimeout(s.gameReset,3e3))}},s.gameReset=function(){s.setState({squares:Array(9).fill(null)}),s.setState({cout:0}),s.setState({flag:!1}),s.setState({status:"\u0425 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442"}),s.setState({defaultClass:"gameInfo"})},s.clickHandler=function(t){var e=t.target.getAttribute("data"),a=s.state.squares;null===a[e]&&!1===s.state.flag?(s.state.cout%2===0?(a[e]="X",s.setState({status:"O \u0445\u043e\u0434\u0438\u0442"})):(a[e]="O",s.setState({status:"X \u0445\u043e\u0434\u0438\u0442"})),s.setState({cout:s.state.cout+1}),s.setState({squares:a})):s.setState({status:"\u0422\u0430\u043a \u043d\u0435\u043b\u044c\u0437\u044f!"}),s.isWinner()},s.state={squares:Array(9).fill(null),cout:0,flag:!1,status:"\u0425 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442",defaultClass:"gameInfo"},s.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.title,a=this.props.contacts;return n.a.createElement("div",{className:"App App-header container "},n.a.createElement("h1",{className:"gameName"},this.props.title),n.a.createElement("div",{className:"Game"}," ",Object.keys(this.state.squares).map((function(e,a){return n.a.createElement("div",{className:"block",onClick:t.clickHandler,key:a,data:a},t.state.squares[e])}))),n.a.createElement("div",{className:this.state.defaultClass},this.state.status),n.a.createElement("button",{className:"gameReset button-primary button-round",onClick:this.gameReset},"\u0421\u0431\u0440\u043e\u0441 \u0438\u0433\u0440\u044b"),n.a.createElement(m,{title:e,contacts:a}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,{title:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u041d\u043e\u043b\u0438\u043a\u0438",contacts:["Copyright by cxx_BY","+375298174777","evgeny.cxx@gmail.com"]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f61b1c3d.chunk.js.map