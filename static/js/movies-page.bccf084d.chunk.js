(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{39:function(e,t,a){"use strict";t.a={previousLocation:{},searchQuery:""}},70:function(e,t,a){"use strict";a.r(t);var r=a(34),n=a.n(r),s=a(35),c=a(36),i=a(37),o=a(41),u=a(40),h=a(0),l=a(38),p=a.n(l),m=a(8),v=a(39),b=a(1),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({query:t.currentTarget.value}),e.searchMovie(),e.setState({query:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===v.a.searchQuery){e.next=7;break}return e.next=3,this.setState({query:v.a.searchQuery});case 3:this.searchMovie(),this.setState({query:""}),e.next=8;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovie",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.query,e.next=3,p.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat("478a6293c6d1ac9e31348f3204c340c0","&language=en-US&page=1&include_adult=false"));case 3:a=e.sent,v.a.previousLocation=this.props.location,v.a.searchQuery=t,this.setState({movies:a.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(b.jsx)("input",{type:"text",value:this.state.query,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",className:"form-btn",children:"Search"})]}),Object(b.jsx)("div",{className:"movies-block",children:Object(b.jsx)("ul",{className:"movies-list",children:this.state.movies.map((function(t){return Object(b.jsx)("li",{className:"movies-item",children:Object(b.jsxs)(m.b,{to:{pathname:"".concat(e.url,"/").concat(t.id)},children:[Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title,width:"150",height:"150"}),t.title]})},t.id)}))})})]})}}]),a}(h.Component);t.default=f}}]);
//# sourceMappingURL=movies-page.bccf084d.chunk.js.map