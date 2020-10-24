(this["webpackJsonpspotify-playlist-builder"]=this["webpackJsonpspotify-playlist-builder"]||[]).push([[0],{129:function(e,t,a){e.exports=a(225)},134:function(e,t,a){},135:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),l=(a(134),a(135),a(8)),i=a(9),o=a(20),u=a(11),m=a(10),p=a(54),d=a(17),f=a(16),h=a.n(f),y=a(23),b=a(112),v=a.n(b),E=a(113),g=a.n(E),k="90a54f792a9e4fff94eec8d0c0075bd0";function N(e,t,a){var n=new Date;n.setTime(n.getTime()+60*a*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function x(e){return null===e?null:e instanceof Array?(e.forEach((function(t,a){e[a]=x(t)})),e):e instanceof Object?(Object.keys(e).forEach((function(t){e[t]=x(e[t])})),g()(e)):e}function O(){return window.innerWidth<768}var j=a(21),T=a.n(j),w=(a(95),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleAccessToken",value:function(){var e=Object(y.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.access_token,e.next=3,N("spotifyAccessToken",a,1);case 3:document.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(v.a,{buttonText:"LOG IN USING SPOTIFY",clientId:k,redirectUri:"https://playlistninja.app",onSuccess:this.handleAccessToken,onFailure:function(e){return console.log(e)},scope:"user-top-read user-library-read playlist-modify-public playlist-read-private playlist-read-collaborative user-read-email playlist-modify-private streaming",className:"btn btn-md btn-primary pn-primary-button"})}}]),a}(n.Component)),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"".concat(this.props.percentage?this.props.percentage+"vh":this.props.pixels+"px")}})}}]),a}(n.Component),P=a(227),A=a(115),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(P.a,{id:"logged-out-wrapper",className:"mt-5 flex-content-center"},r.a.createElement(A.a,{xs:0,md:2}),r.a.createElement(A.a,{xs:12,md:8,className:"p-4"},r.a.createElement("h1",{className:"display-4 arts-and-crafts-font mobile-title-font"},"ULTIMATE CONTROL OVER THE COMPOSITION OF YOUR PLAYLISTS"),r.a.createElement("p",null,"PlaylistNinja gives you the power to fine tune the powerful recommendation engine in the Spotify API."),r.a.createElement("p",{className:"mb-4"},"We give you an interface that exposes the properties used in the recommendation engine, allowing you to configure recommendations and discover new music by selecting seeds and target properties when searching for songs."),r.a.createElement(w,null)),r.a.createElement(A.a,{xs:0,md:2}))}}]),a}(n.Component),C=a(228),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleLogout",value:function(){N("spotifyAccessToken","",0),document.location.reload()}},{key:"render",value:function(){return r.a.createElement(C.a,{variant:"link",className:"pn-danger-button mt-3 px-2",onClick:this.handleLogout,style:{color:"red",width:"fit-content"}},"LOG OUT")}}]),a}(n.Component),I=(a(149),a(150),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.forceUpdate()}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-app-nav"},!this.props.noButtons&&r.a.createElement("div",{className:"main-nav-button"},r.a.createElement(p.b,{to:"profile",className:"text-dark"},r.a.createElement("i",{className:"far fa-address-card ".concat(O()?"main-nav-icon-phone":"main-nav-icon-desktop")}))),r.a.createElement("div",{className:"main-nav-button"},r.a.createElement("i",{className:"fa fa-user-ninja p-2 ".concat(O()?"main-nav-icon-phone":"main-nav-icon-desktop")}),O()?r.a.createElement("h6",{className:"m-0 arts-and-crafts-font"},"PLAYLIST NINJA"):r.a.createElement("h4",{className:"m-0 arts-and-crafts-font"},"PLAYLIST NINJA")),!this.props.noButtons&&r.a.createElement("div",{className:"main-nav-button"},r.a.createElement(p.b,{to:"playlist-builder",className:"text-dark"},r.a.createElement("i",{className:"fa fa-sliders-h ".concat(O()?"main-nav-icon-phone":"main-nav-icon-desktop")})))),r.a.createElement("div",{className:"main-app-nav-ghost"}))}}]),a}(n.Component)),L=a(19),D=a(117),F=a.n(D),U=(a(167),a(229)),R=a(57),B=a.n(R),Y=(a(168),function(e,t){return function(){var a=Object(y.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=null,a.next=3,t.getPlaylist(e).then(function(){var a=Object(y.a)(h.a.mark((function a(n){var s,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.body,s=r.tracks.next,r.tracks=r.tracks.items,!s){a.next=10;break}c=100;case 5:if(!s){a.next=10;break}return a.next=8,t.getPlaylistTracks(e,{offset:c}).then((function(e){e.body.next||(s=!1),c+=100,r.tracks=r.tracks.concat(e.body.items)}));case 8:a.next=5;break;case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),(function(e){r=e})).then((function(){window.location.hash="#/playlist-builder"}));case 3:n({type:"SET_SELECTED_PLAYLIST",payload:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"selectPlaylist",value:function(){var e=this.props,t=e.updateSelectedPlaylist,a=e.api;t(e.playlist.id,a)}},{key:"unfollowConfirmation",value:function(){return B.a.fire({title:"Unfollow Playlist",text:"Are you sure you want to unfollow? It will no longer be visible in your library.",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, unfollow this playlist.",cancelButtonText:"Cancel",allowEscapeKey:!1,allowOutsideClick:!1})}},{key:"unfollowPlaylist",value:function(){var e=this.props,t=e.playlist,a=e.api,n=e.updatePlaylists;this.unfollowConfirmation().then((function(e){e.value?a.unfollowPlaylist(t.id).then((function(){B.a.fire({type:"success",text:'Unfollowed playlist: "'.concat(t.name,'"')}),n()})):e.dismiss===B.a.DismissReason.cancel&&B.a.fire({text:"Did not unfollow playlist."})}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.forceUpdate()}))}},{key:"render",value:function(){var e=this.props.playlist;return r.a.createElement(A.a,{xs:12,sm:6,xl:4,className:O()?"p-4":"p-3"},r.a.createElement("div",{className:"playlist-card-content text-center d-flex playlist-card content-card flex-column pt-4"},e.images[0]?r.a.createElement(U.a,{src:e.images[0].url,className:"mobile-playlist-card-image"}):r.a.createElement("div",{className:O()?"w-25":""}),r.a.createElement("div",{className:"text-left"},r.a.createElement("h5",{className:"m-1 ml-2"},e.name),r.a.createElement("p",{className:"ml-2 m-0"},e.public?"Public":"Private")),r.a.createElement("div",{className:"mobile-playlist-card-button-wrapper"},r.a.createElement(C.a,{variant:"primary",className:"pn-primary-button",onClick:this.selectPlaylist},r.a.createElement("i",{className:"fa fa-pencil"})),r.a.createElement(C.a,{variant:"outline-danger",className:"pn-danger-button",onClick:this.unfollowPlaylist},r.a.createElement("i",{className:"fa fa-trash"})))))}}]),a}(n.Component),G=Object(L.b)(null,(function(e){return{updateSelectedPlaylist:function(t,a){return e(Y(t,a))}}}))(V),K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={playlists:null,error:null},T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getPersonalPlaylistData()}},{key:"getPersonalPlaylistData",value:function(){var e=this.props,t=e.userId,a=e.api;t?this.props.loadEditablePlaylists(t,a):this.setState({error:"No user ID found, please reload"})}},{key:"render",value:function(){var e=this;if(this.props.playlists){var t=this.props.playlists;return r.a.createElement("div",null,r.a.createElement(P.a,{className:"text-center m-3 pb-2"},r.a.createElement(A.a,{xs:12},r.a.createElement("h3",{className:"display-5"}," My Playlists "),r.a.createElement(S,{percentage:3}))),r.a.createElement(P.a,null,t.map((function(t){return r.a.createElement(G,{playlist:t,api:e.props.api,updatePlaylists:e.getPersonalPlaylistData})}))))}return null}}]),a}(n.Component),W=Object(L.b)((function(e){return{api:e.api.spotifyApi,playlists:e.playlist.editablePlaylists}}),(function(e){return{loadEditablePlaylists:function(t,a){return e(function(e,t){return function(){var a=Object(y.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=null,a.next=3,t.getUserPlaylists(e,{limit:50}).then(function(){var a=Object(y.a)(h.a.mark((function a(n){var s,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.body.items,!(s=n.body.next)){a.next=9;break}c=50;case 4:if(!s){a.next=9;break}return a.next=7,t.getUserPlaylists(e,{limit:50,offset:c}).then((function(e){e.body.next||(s=!1),c+=50,r=r.concat(e.body.items)}));case 7:a.next=4;break;case 9:r=r.filter((function(t){return t.owner.id==e||t.collaborative}));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),(function(e){r=e}));case 3:n({type:"LOAD_EDITABLE_PLAYLISTS",payload:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))(K),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.profile){var e=this.props.profile,t=e.displayName,a=e.email,n=(e.id,e.images),s=(e.externalUrls,e.followers);return r.a.createElement(P.a,null,r.a.createElement(A.a,{xs:12,md:6,className:"text-right text-center-md"},r.a.createElement(U.a,{src:n[0]?n[0].url:"",className:"drop-shadow profile-image"})),r.a.createElement(A.a,{xs:12,md:6,className:"break-long-words text-center-md"},r.a.createElement(S,{percentage:5}),r.a.createElement("h1",{className:""},r.a.createElement("span",{style:{fontWeight:200,fontSize:".8em"}},"Welcome,"),"\xa0",r.a.createElement("span",{className:"arts-and-crafts-font"},t)),r.a.createElement("h5",{className:"lead"},a),r.a.createElement("h2",{className:"lead mb-0"},s.total," followers"),r.a.createElement(_,null)))}return null}}]),a}(n.Component),H=a(235),J=a(230),$=(a(169),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={topArtists:null,error:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this.props.api.getMyTopArtists({limit:6,time_range:"short_term"}).then((function(t){e._isMounted&&e.setState({topShortTermArtists:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.props.api.getMyTopArtists({limit:6,time_range:"medium_term"}).then((function(t){e._isMounted&&e.setState({topMediumTermArtists:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.props.api.getMyTopArtists({limit:6,time_range:"long_term"}).then((function(t){e._isMounted&&e.setState({topLongTermArtists:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.forceUpdate()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return r.a.createElement(P.a,{className:"p-3"},r.a.createElement(A.a,{xs:12,className:"text-center"},r.a.createElement("h3",{className:"display-5"}," Top Artists "),r.a.createElement(S,{percentage:4})),r.a.createElement(A.a,{xs:12,className:"text-center justify-content-center"},r.a.createElement(H.a,{defaultActiveKey:"shortTerm",id:"nav-tabs"},r.a.createElement(J.a,{eventKey:"shortTerm",title:"Short Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topShortTermArtists&&this.state.topShortTermArtists.items.map((function(e){return r.a.createElement(A.a,{xs:6,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.images[0].url,roundedCircle:!0,fluid:!0,className:"drop-shadow mb-3 object-fit-cover"}),r.a.createElement("p",{className:"lead"},e.name)))})))),r.a.createElement(J.a,{eventKey:"mediumTerm",title:"Medium Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topMediumTermArtists&&this.state.topMediumTermArtists.items.map((function(e){return r.a.createElement(A.a,{xs:6,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.images[0].url,roundedCircle:!0,fluid:!0,className:"drop-shadow mb-3 object-fit-cover"}),r.a.createElement("p",{className:"lead"},e.name)))})))),r.a.createElement(J.a,{eventKey:"longTerm",title:"Long Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topLongTermArtists&&this.state.topLongTermArtists.items.map((function(e){return r.a.createElement(A.a,{xs:6,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.images[0].url,roundedCircle:!0,fluid:!0,className:"drop-shadow mb-3 object-fit-cover"}),r.a.createElement("p",{className:"lead"},e.name)))})))))))}}]),a}(n.Component)),q=Object(L.b)((function(e){return{api:e.api.spotifyApi}}))($),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={topTracks:null,error:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this.props.api.getMyTopTracks({limit:12,time_range:"short_term"}).then((function(t){e._isMounted&&e.setState({topShortTermTracks:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.props.api.getMyTopTracks({limit:12,time_range:"medium_term"}).then((function(t){e._isMounted&&e.setState({topMediumTermTracks:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.props.api.getMyTopTracks({limit:12,time_range:"long_term"}).then((function(t){e._isMounted&&e.setState({topLongTermTracks:t.body})}),(function(t){e._isMounted&&e.setState({error:x(t)})})),this.forceUpdate()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return r.a.createElement(P.a,{className:"p-3"},r.a.createElement(A.a,{xs:12,className:"text-center"},r.a.createElement("h3",{className:"display-5"}," Top Tracks "),r.a.createElement(S,{percentage:4})),r.a.createElement(A.a,{xs:12,className:"text-center justify-content-center"},r.a.createElement(H.a,{defaultActiveKey:"shortTerm",id:"nav-tabs"},r.a.createElement(J.a,{eventKey:"shortTerm",title:"Short Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topShortTermTracks&&this.state.topShortTermTracks.items.map((function(e){return r.a.createElement(A.a,{xs:6,sm:4,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.album.images[0].url,fluid:!0,className:"drop-shadow mb-3"}),r.a.createElement("p",{className:"lead"},e.name)))})))),r.a.createElement(J.a,{eventKey:"mediumTerm",title:"Medium Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topMediumTermTracks&&this.state.topMediumTermTracks.items.map((function(e){return r.a.createElement(A.a,{xs:6,sm:4,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.album.images[0].url,fluid:!0,className:"drop-shadow mb-3"}),r.a.createElement("p",{className:"lead"},e.name)))})))),r.a.createElement(J.a,{eventKey:"longTerm",title:"Long Term"},r.a.createElement(P.a,{className:"pt-4"},this.state.topLongTermTracks&&this.state.topLongTermTracks.items.map((function(e){return r.a.createElement(A.a,{xs:6,sm:4,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(U.a,{src:e.album.images[0].url,fluid:!0,className:"drop-shadow mb-3"}),r.a.createElement("p",{className:"lead"},e.name)))})))))))}}]),a}(n.Component),X=Object(L.b)((function(e){return{api:e.api.spotifyApi}}))(Q),Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={profile:null,error:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.api.spotifyApi.getMe().then((function(t){e.setState({profile:x(t.body)})}),(function(t){e.setState({error:x(t)})})),this.forceUpdate()}},{key:"render",value:function(){var e=this.state.profile;return e?r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement(z,{profile:e}),r.a.createElement(S,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(S,{percentage:5}),r.a.createElement(q,null),r.a.createElement(S,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(S,{percentage:5}),r.a.createElement(X,null),r.a.createElement(S,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(S,{percentage:5}),r.a.createElement(W,{userId:e.id})):null}}]),a}(n.Component),ee=Object(L.b)((function(e){return{api:e.api}}))(Z),te=(a(72),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.forceUpdate()})),T()(this)}},{key:"render",value:function(){var e=this.props.playlist;return r.a.createElement("div",{id:"playlist-info-wrapper",className:"p-2"},r.a.createElement(P.a,null,r.a.createElement(A.a,{className:"playlist-image-wrapper",xs:12,sm:6},e.images[0]?r.a.createElement(U.a,{src:e.images[0].url,className:"playlist-info-image"}):null),r.a.createElement(A.a,{className:"playlist-title-desc-wrapper text-right break-long-words p-3",xs:12,sm:6},r.a.createElement("h2",{className:O()?"":"display-4"},e.name),r.a.createElement("p",null,e.description||"No description provided."),r.a.createElement("p",null,e.followers.total," ",1==e.followers.total?"follower":"followers"))))}},{key:"generateHypeCurvePlaylist",value:function(){var e=Object(y.a)(h.a.mark((function e(){var t,a,n,r,s,c,l,i,o,u,m,p,d,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.api,n=t.playlist,r=[],n.tracks.forEach((function(e){r.push(e.track.id)})),s=r.length>100,c=[],0===r.length){e.next=31;break}return e.next=8,a.getAudioFeaturesForTracks(r.splice(0,100)).then((function(e){var t=x(e.body);t.audioFeatures,c=c.concat(t.audioFeatures)}));case 8:if(!s){e.next=16;break}l=100;case 10:if(!s){e.next=16;break}return e.next=13,a.getAudioFeaturesForTracks(r.splice(0,100)).then((function(e){var t=x(e.body);c=c.concat(t.audioFeatures),l+=t.audioFeatures.length}));case 13:l===r.length&&(s=!1),e.next=10;break;case 16:return i=c.map((function(e){var t=e.danceability,a=e.energy,n=e.valence,r=e.tempo,s=e.popularity;return{trackUri:"spotify:track:"+e.id,score:t*a*n*r*s}})),o=i.sort((function(e,t){return e.score-t.score})),u=[],m=[],o.forEach((function(e,t){t%2==0?u.push(e):m.push(e)})),m.reverse(),p=u.concat(m),d="",e.next=26,a.getMe().then((function(e){d=e.body.id}));case 26:return f="",e.next=29,a.createPlaylist(d,n.name+" - Hype Curve").then((function(e){f=e.body.id}));case 29:return e.next=31,a.addTracksToPlaylist(f,p.map((function(e){return e.trackUri})));case 31:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component)),ae=a(231),ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={tempo:0,loudness:0,danceability:0,valence:0,energy:0,durationMs:0,popularity:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.calculateAverageStatistics(),window.addEventListener("resize",(function(){e.forceUpdate()}))}},{key:"calculateAverageStatistics",value:function(){var e=Object(y.a)(h.a.mark((function e(){var t,a,n,r,s,c,l,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.api,n=t.tracks,r={tempo:null,danceability:null,valence:null,energy:null,durationMs:null,popularity:null},s=[],n.forEach((function(e){s.push(e.track.id),r.popularity=r.popularity+e.track.popularity})),c=s.length>100,l=[],0===s.length){e.next=19;break}return e.next=9,a.getAudioFeaturesForTracks(s.splice(0,100)).then((function(e){var t=x(e.body);t.audioFeatures&&(l=l.concat(t.audioFeatures))}));case 9:if(!c){e.next=17;break}i=100;case 11:if(!c){e.next=17;break}return e.next=14,a.getAudioFeaturesForTracks(s.splice(0,100)).then((function(e){var t=x(e.body);l=l.concat(t.audioFeatures),i+=t.audioFeatures.length}));case 14:i===n.length&&(c=!1),e.next=11;break;case 17:l.forEach((function(e){null!==e&&(r.tempo=r.tempo+e.tempo,r.danceability=r.danceability+e.danceability,r.valence=r.valence+e.valence,r.energy=r.energy+e.energy,r.durationMs=r.durationMs+e.durationMs)})),this.setState({tempo:r.tempo/n.length,danceability:r.danceability/n.length,valence:r.valence/n.length,energy:r.energy/n.length,durationMs:r.durationMs,popularity:r.popularity/n.length});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.tempo,a=e.danceability,n=e.valence,s=e.energy,c=e.durationMs,l=e.popularity;if(!(t&&a&&n&&s&&c))return r.a.createElement("div",{className:"m-1 mt-3"},r.a.createElement(P.a,{className:"p-2 justify-content-center"},r.a.createElement(A.a,{xs:12,className:"p-2 mb-2 text-center"},"No tracks in this playlist, so there are no statistics.")));var i=function(e){var t=e/1e3,a=Math.floor(t/3600);return t%=3600,{hours:a,minutes:Math.floor(t/60)}}(Math.round(c));return r.a.createElement("div",{className:"m-1 mt-3"},r.a.createElement(P.a,{className:"p-2 justify-content-center"},r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Energy:"),r.a.createElement(ae.a,{animated:!0,striped:!0,now:100*s})),r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Danceability:"),r.a.createElement(ae.a,{animated:!0,striped:!0,now:100*a})),r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Valence:"),r.a.createElement(ae.a,{animated:!0,striped:!0,now:100*n}))),r.a.createElement(P.a,{className:"p-2 justify-content-center"},r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Tempo: ",r.a.createElement("br",null),Math.round(t),"BPM")),r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Duration: ",r.a.createElement("br",null),i.hours>0?i.hours+"hrs":""," ",i.minutes>0?i.minutes+"mins":"")),r.a.createElement(A.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(O()?"mobile-small-font":"")},"Popularity: ",r.a.createElement("br",null),Math.round(l)))))}}]),a}(n.Component),re=a(232),se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handlePlayTrackOnSpotify",value:function(e){var t=this;return function(){var a=t.props,n=a.api,r=a.playlistId;a.tracksInPlaylist?n.play({context_uri:"spotify:playlist:".concat(r),offset:{uri:"spotify:track:".concat(e)}}).then((function(e){}),(function(e){console.error(e)})):n.play({uris:["spotify:track:".concat(e)]}).then((function(e){}),(function(e){console.error(e)}))}}},{key:"handleAddTrackToPlaylist",value:function(e){var t=this;return function(){var a=t.props,n=a.playlistId,r=a.api;r.addTracksToPlaylist(n,["spotify:track:".concat(e)]).then(function(){var e=Object(y.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(n,r);case 2:t.props.updateCallback&&t.props.updateCallback();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}))}}},{key:"handleRemoveTrackFromPlaylist",value:function(e){var t=this;return function(){var a=t.props,n=a.playlistId,r=a.api,s=a.setSelectedPlaylist;r.removeTracksFromPlaylist(n,[{uri:"spotify:track:".concat(e)}]).then(function(){var e=Object(y.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n,r);case 2:t.props.updateCallback&&t.props.updateCallback();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}))}}},{key:"render",value:function(){var e=this;return r.a.createElement(re.a,{responsive:!0,striped:!0,hover:!0,size:"sm",className:"text-left"},r.a.createElement("thead",null),r.a.createElement("tbody",null,this.props.tracks.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"maxw-50-view"},r.a.createElement("div",{className:"d-flex align-center"},t.album.images[0]&&r.a.createElement(U.a,{src:t.album.images[0].url,className:"track-table-image m-1"}),r.a.createElement("div",{className:"break-long-words"},r.a.createElement("p",{className:"track-table-title"},t.name),r.a.createElement("p",{className:"track-table-font "},t.artists.map((function(e,a){return a===t.artists.length-1?e.name:e.name+", "})))))),r.a.createElement("td",{className:"h-100 break-long-words d-flex justify-end p-1 align-center"},e.props.tracksInPlaylist?r.a.createElement(C.a,{onClick:e.handleRemoveTrackFromPlaylist(t.id),className:"mr-1 mt-1 mb-1 pn-danger-button",variant:"danger"},"-"):r.a.createElement(C.a,{onClick:e.handleAddTrackToPlaylist(t.id),className:"mr-1 mt-1 mb-1 pn-primary-button"},"+"),r.a.createElement(C.a,{className:"ml-1 mt-1 mb-1 pn-primary-button",onClick:e.handlePlayTrackOnSpotify(t.id)}," ","PLAY"," ")))}))))}}]),a}(n.Component),ce=Object(L.b)((function(e){return{api:e.api.spotifyApi}}),(function(e){return{setSelectedPlaylist:function(t,a){return e(Y(t,a))}}}))(se),le=a(236),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentPage:0},T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"changeCurrentPageHandler",value:function(e){var t=this;return function(){t.setState({currentPage:e})}}},{key:"render",value:function(){var e=this.state.currentPage,t=this.props.tracks,a=t.concat([]).splice(8*e,8);return a=a.map((function(e){return e.track})),r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",null," Track List "),r.a.createElement("br",null)),r.a.createElement(ce,{tracks:a,tracksInPlaylist:!0,playlistId:this.props.playlistId}),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(le.a,null,r.a.createElement(le.a.Prev,{disabled:0===e,onClick:this.changeCurrentPageHandler(this.state.currentPage-1)}),r.a.createElement(le.a.Next,{disabled:8*(e+1)>=t.length,onClick:this.changeCurrentPageHandler(this.state.currentPage+1)}))))}}]),a}(n.Component),oe=a(56),ue=a(28),me=a(234),pe=a(50),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={recommendedTracks:[],selectedArtistSeeds:{0:"",1:"",2:""},selectedTrackSeeds:{0:"",1:"",2:""},targetValence:.5,targetEnergy:.5,targetDanceability:.5,targetBPM:100,targetPopularity:50,error:null},T()(Object(o.a)(n)),window.addEventListener("resize",(function(){n.forceUpdate()})),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.handleRecommendationGeneration()}},{key:"updateSelectedPlaylist",value:function(){var e=this.props,t=e.api,a=e.playlistId;(0,e.setSelectedPlaylist)(a,t)}},{key:"handleRecommendationGeneration",value:function(){var e=this.state,t=e.selectedArtistSeeds,a=e.selectedTrackSeeds,n=!1;Object.keys(t).forEach((function(e){""!==t[e]&&(n=!0)})),n||Object.keys(a).forEach((function(e){""!==a[e]&&(n=!0)})),n?this.updateRecommendations():this.setState({error:"You must choose at least one seed for recommendations."})}},{key:"updateRecommendations",value:function(){var e=this,t=this.props.api,a=this.state,n=a.selectedArtistSeeds,r=a.selectedTrackSeeds,s=a.targetValence,c=a.targetEnergy,l=a.targetDanceability,i=a.targetBPM,o=a.targetPopularity,u=[];Object.keys(n).forEach((function(e){""!==n[e]&&u.push(n[e])}));var m=[];Object.keys(r).forEach((function(e){""!==r[e]&&m.push(r[e])}));var p={limit:35,target_bpm:i,target_valence:s,target_energy:c,target_danceability:l,target_popularity:o,seed_artists:u,seed_tracks:m};t.getRecommendations(p).then((function(t){e.setState({recommendedTracks:t.body.tracks,error:null})}),(function(t){e.setState({error:t.message})}))}},{key:"numberOfSeedsFull",value:function(){var e=this.state,t=e.selectedArtistSeeds,a=e.selectedTrackSeeds,n=[],r=[];return[0,1,2].forEach((function(e){""!==t[e]&&n.push(t[e]),""!==a[e]&&r.push(a[e])})),n.length+r.length>=5}},{key:"handleAddSeedArtist",value:function(e){var t=this;return function(a){t.setState({selectedArtistSeeds:Object(ue.a)(Object(ue.a)({},t.state.selectedArtistSeeds),{},Object(oe.a)({},e,a.target.value))})}}},{key:"renderSeedArtistsDropdown",value:function(){var e=this,t=this.props.playlistTracks,a={};t.forEach((function(e){e.track.artists.forEach((function(e){a[e.id]=e.name}))}));var n=Object.keys(a);return r.a.createElement(me.a.Group,{controlId:"seedArtists"},r.a.createElement(P.a,{className:"w-100 m-0"},r.a.createElement(A.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Similar Artists")),[1,2,3].map((function(t){var s=e.state.selectedArtistSeeds;return r.a.createElement(A.a,{sm:12,md:4,className:"p-1"},r.a.createElement(me.a.Control,{key:t-1,as:"select",onChange:e.handleAddSeedArtist(t-1),disabled:""===s[t-1]&&e.numberOfSeedsFull()},r.a.createElement("option",{value:""},"None"),n.map((function(e){return r.a.createElement("option",{value:e},a[e])}))))}))))}},{key:"handleAddSeedTrack",value:function(e){var t=this;return function(a){t.setState({selectedTrackSeeds:Object(ue.a)(Object(ue.a)({},t.state.selectedTrackSeeds),{},Object(oe.a)({},e,a.target.value))})}}},{key:"renderSeedTracksDropdown",value:function(){var e=this,t=this.props.playlistTracks,a={};t.forEach((function(e){var t=e.track;a[t.id]=t.name}));var n=Object.keys(a);return r.a.createElement(me.a.Group,{controlId:"seedTracks"},r.a.createElement(P.a,{className:"w-100 m-0"},r.a.createElement(A.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Similar Tracks")),[1,2,3].map((function(t){var s=e.state.selectedTrackSeeds;return r.a.createElement(A.a,{sm:12,md:4,className:"p-1"},r.a.createElement(me.a.Control,{key:t-1,as:"select",onChange:e.handleAddSeedTrack(t-1),disabled:""===s[t-1]&&e.numberOfSeedsFull()},r.a.createElement("option",{value:""},"None"),n.map((function(e){return r.a.createElement("option",{value:e},a[e])}))))}))))}},{key:"renderAudioFeatureSliders",value:function(){var e=this;return r.a.createElement(P.a,{className:"w-100 m-0"},r.a.createElement(A.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Target Statistics")),r.a.createElement(A.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Danceability "),r.a.createElement(pe.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetDanceability,onChange:function(t){return e.setState({targetDanceability:t/100})},className:"w-50"})),r.a.createElement(A.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Energy "),r.a.createElement(pe.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetEnergy,onChange:function(t){return e.setState({targetEnergy:t/100})},className:"w-50"})),r.a.createElement(A.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Valence "),r.a.createElement(pe.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetValence,onChange:function(t){return e.setState({targetValence:t/100})},className:"w-50"})),r.a.createElement(A.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Tempo "),r.a.createElement(pe.a,{min:0,max:250,step:1,defaultValue:100,value:this.state.targetBPM,onChange:function(t){return e.setState({targetBPM:t})},className:"w-50"})),r.a.createElement(A.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Popularity "),r.a.createElement(pe.a,{min:0,max:100,step:1,defaultValue:100,value:this.state.targetPopularity,onChange:function(t){return e.setState({targetPopularity:t})},className:"w-50"})))}},{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",{className:"text-right"},r.a.createElement("div",{className:"w-100 text-center"},r.a.createElement("h4",null," Generate Recommendations "),r.a.createElement("br",null)),r.a.createElement(me.a,{onSubmit:function(e){return console.log(e)}},this.renderSeedTracksDropdown(),this.renderSeedArtistsDropdown(),this.renderAudioFeatureSliders()),r.a.createElement(C.a,{className:"pn-primary-button",onClick:this.handleRecommendationGeneration},"GENERATE TRACKS"),r.a.createElement("hr",null),e&&r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("h5",{className:"p-3 lead text-danger"},r.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ",e)),!e&&r.a.createElement("div",{className:"mt-3"},r.a.createElement(ce,{playlistId:this.props.playlistId,tracks:this.state.recommendedTracks,updateCallback:this.updateSelectedPlaylist})))}}]),a}(n.Component),fe=Object(L.b)((function(e){return{api:e.api.spotifyApi}}),(function(e){return{setSelectedPlaylist:function(t,a){return e(Y(t,a))}}}))(de),he=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.selectedPlaylist,a=e.api;return t?r.a.createElement("div",{id:"playlist-builder-wrapper",className:"p-4"},r.a.createElement(te,{playlist:t,api:a}),r.a.createElement(ne,{tracks:t.tracks,api:a}),r.a.createElement("br",null),r.a.createElement(ie,{tracks:t.tracks,playlistId:t.id}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(fe,{playlistTracks:t.tracks,playlistId:t.id})):r.a.createElement("div",{id:"playlist-builder-wrapper",className:"p-4"},r.a.createElement(A.a,{xs:12},r.a.createElement(S,{percentage:3}),r.a.createElement("div",{className:"w-100 h-100 no-selected-playlist"},r.a.createElement("h1",{className:"display-4"}," No playlist selected... "),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Please"," ",r.a.createElement("a",{href:"#/profile"},"select a playlist from your profile")," to begin editing."))))}}]),a}(n.Component),ye=Object(L.b)((function(e){return{api:e.api?e.api.spotifyApi:null,selectedPlaylist:e.playlist?e.playlist.selectedPlaylist:null}}))(he),be=a(233),ve=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1,token:""},T()(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.checkForLogin()})),this.checkForLogin()}},{key:"checkForLogin",value:function(){var e=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("spotifyAccessToken");""!==e&&e!=this.state.token?(this.setState({loggedIn:!0,token:e}),this.props.setSpotifyApi(e)):""===e&&this.setState({loggedIn:!1,token:""})}},{key:"render",value:function(){var e=this.state.loggedIn;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"",id:"app-wrapper"},r.a.createElement(I,{noButtons:!e}),e?r.a.createElement("div",{id:"playlists-view-wrapper"},r.a.createElement(be.a,null,r.a.createElement(P.a,null,r.a.createElement(d.a,{exact:!0,path:"(|/profile)",component:ee}),r.a.createElement(d.a,{exact:!0,path:"/playlist-builder",component:ye})))):r.a.createElement(be.a,null,r.a.createElement(M,null))))}}]),a}(r.a.Component),Ee=Object(L.b)(null,(function(e){return{setSpotifyApi:function(t){return e(function(e){return function(t){var a=new F.a({clientId:k,redirectUri:"https://playlistninja.app"});a.setAccessToken(e),t({type:"SET_SPOTIFY_API",payload:a})}}(t))}}}))(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(37),ke=a(125),Ne=Object(ge.combineReducers)({api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPOTIFY_API":return Object(ue.a)(Object(ue.a)({},e),{},{spotifyApi:t.payload});default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_PLAYLIST":return Object(ue.a)(Object(ue.a)({},e),{},{selectedPlaylist:t.payload});case"LOAD_EDITABLE_PLAYLISTS":return Object(ue.a)(Object(ue.a)({},e),{},{editablePlaylists:t.payload});default:return e}}}),xe=a(126);c.a.render(r.a.createElement(L.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(ge.createStore)(Ne,e,Object(xe.composeWithDevTools)(Object(ge.applyMiddleware)(ke.a)))}({api:null,playlist:{editablePlaylists:[]}})},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){},95:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.a4c57a28.chunk.js.map