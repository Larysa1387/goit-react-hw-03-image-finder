(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__38Png",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__utDtq"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1ePxQ",Modal:"Modal_Modal__U1WtC"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30ItO"}},16:function(e,t,a){e.exports={Loader:"Loader_Loader__LsPKH"}},17:function(e,t,a){e.exports={Button:"Button_Button__Gc2Dt"}},23:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=(a(22),a(23),a(13)),l=a(3),i=a(4),u=a(6),h=a(5),m=a(9);var d={fetchImage:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("21781686-06f0d55f145dff9dbbb393fb1","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data"))}))}},g=a(8),b=a.n(g),p=a(1),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.warn("Tipe your query!")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:b.a.Searchbar,children:Object(p.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(p.jsx)("span",{className:b.a.SearchForm_button_label,children:"Search"})}),Object(p.jsx)("input",{className:b.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleInputChange})]})})}}]),a}(r.Component),j=a(11),y=a.n(j),O=function(e){var t=e.webformatURL,a=e.tags,r=e.largeImage,n=e.modalOpen;return Object(p.jsx)("li",{className:y.a.ImageGalleryItem,onClick:function(){n(r)},children:Object(p.jsx)("img",{src:t,alt:a,className:y.a.ImageGalleryItem_image})})},_=a(14),v=a.n(_),S=function(e){var t=e.images,a=e.modalOpen;return Object(p.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,r=e.tags,n=e.id,o=e.largeImageURL;return Object(p.jsx)(O,{webformatURL:t,largeImage:o,tags:r,modalOpen:a},n)}))})},I=a(15),w=a.n(I),x=a(16),k=a.n(x),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(w.a,{className:k.a.Loader,type:"Puff",color:"#00BFFF",height:150,width:150,timeout:3e3})}}]),a}(r.Component),F=a(17),L=a.n(F),G=function(e){var t=e.onClick;return Object(p.jsx)("button",{className:L.a.Button,type:"button",onClick:t,children:"Load more"})},N=a(12),M=a.n(N),Q=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.modalClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.modalClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:M.a.Modal,children:Object(p.jsx)("img",{src:this.props.largeImage,alt:""})})}),Q)}}]),a}(r.Component),D=(a(45),a(46),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],searchQuery:"",page:1,largeImage:"",loading:!1,error:null,showModal:!1},e.searchImagesFetch=function(){var t=e.state,a=t.searchQuery,r=t.page;e.setState({loading:!0}),d.fetchImage(a,r).then((function(t){return e.checkNewFetchImages(t.hits)})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.checkNewFetchImages=function(t){t===[]?e.setState({images:t,page:1}):e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))},e.handleFormSubmit=function(t){e.setState({searchQuery:t,images:[],page:1,error:null})},e.onClickLoadMore=function(){e.searchImagesFetch()},e.modalOpen=function(t){e.setState({showModal:!0,largeImage:t})},e.modalClose=function(){e.setState({showModal:!1,largeImage:""})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery?(this.searchImagesFetch(),window.scrollTo({top:0,behavior:"smooth"})):this.state.page>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,r=e.images,n=e.showModal,o=e.largeImage;return Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{autoClose:3e3}),a&&Object(p.jsx)("h1",{children:"error.message"}),Object(p.jsx)(f,{onSubmit:this.handleFormSubmit}),r&&Object(p.jsx)(S,{images:r,modalOpen:this.modalOpen}),n&&Object(p.jsx)(B,{modalClose:this.modalClose,largeImage:o}),t&&Object(p.jsx)(C,{}),0!==r.length&&Object(p.jsx)(G,{onClick:this.onClickLoadMore})]})}}]),a}(r.Component));c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1gbtc",SearchForm:"Searchbar_SearchForm__1lFwd",SearchForm_button:"Searchbar_SearchForm_button__3aGE7",SearchForm_button_label:"Searchbar_SearchForm_button_label__39rhi",SearchForm_input:"Searchbar_SearchForm_input__3xWxn"}}},[[47,1,2]]]);
//# sourceMappingURL=main.46fadaf7.chunk.js.map