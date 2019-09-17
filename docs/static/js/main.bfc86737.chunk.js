(window["webpackJsonpspotify-playlist-builder"]=window["webpackJsonpspotify-playlist-builder"]||[]).push([[0],{112:function(e,t,a){e.exports=a(202)},117:function(e,t,a){},118:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=(a(117),a(118),a(7)),i=a(8),o=a(10),u=a(9),m=a(20),p=a(11),d=a(50),f=a(38),h=a(17),b=a.n(h),y=a(23),v=a(99),E=a.n(v),g=a(100),k=a.n(g),O="90a54f792a9e4fff94eec8d0c0075bd0";function j(e,t,a){var n=new Date;n.setTime(n.getTime()+60*a*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function N(e){return null===e?null:e instanceof Array?(e.forEach(function(t,a){e[a]=N(t)}),e):e instanceof Object?(Object.keys(e).forEach(function(t){e[t]=N(e[t])}),k()(e)):e}function w(){return window.innerWidth<768}function x(){return window.innerWidth<576}var P=a(22),S=a.n(P),T=(a(82),function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e)),S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleAccessToken",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.access_token,e.next=3,j("spotifyAccessToken",a,1);case 3:document.location.reload();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(E.a,{clientId:O,redirectUri:"http://localhost:3000",onSuccess:this.handleAccessToken,onFailure:function(e){return console.log(e)},scope:"user-top-read user-library-read playlist-modify-public playlist-read-private playlist-read-collaborative user-read-email playlist-modify-private streaming",className:"btn btn-md btn-primary"})}}]),t}(n.Component)),A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"".concat(this.props.percentage?this.props.percentage+"vh":this.props.pixels+"px")}})}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"logged-out-wrapper"},r.a.createElement("div",{className:"w-50 p-3 custom-card text-center"},r.a.createElement(A,{percentage:7}),r.a.createElement("h3",null," Login to Playlist Ninja"),r.a.createElement("hr",null),r.a.createElement(T,null)))}}]),t}(n.Component),C=a(203),I=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e)),S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleLogout",value:function(){j("spotifyAccessToken","",0),document.location.reload()}},{key:"render",value:function(){return r.a.createElement(C.a,{variant:"link",onClick:this.handleLogout,style:{color:"red",width:"fit-content"}},r.a.createElement("p",{className:"lead",style:{fontSize:"1rem"}},"Log Out"))}}]),t}(n.Component),M=(a(129),a(130),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-app-nav"},!this.props.noButtons&&r.a.createElement("div",{className:"main-nav-button"},r.a.createElement(d.b,{to:"profile",className:"text-dark"},r.a.createElement("i",{className:"far fa-address-card ".concat(w()?"main-nav-icon-phone":"main-nav-icon-desktop")}))),r.a.createElement("div",{className:"main-nav-button"},r.a.createElement("i",{className:"fa fa-user-ninja p-2 ".concat(w()?"main-nav-icon-phone":"main-nav-icon-desktop")}),w()?r.a.createElement("h6",{className:"m-0"},"PLAYLIST NINJA"):r.a.createElement("h4",{className:"m-0"},"PLAYLIST NINJA")),!this.props.noButtons&&r.a.createElement("div",{className:"main-nav-button"},r.a.createElement(d.b,{to:"playlist-builder",className:"text-dark"},r.a.createElement("i",{className:"fa fa-sliders-h ".concat(w()?"main-nav-icon-phone":"main-nav-icon-desktop")})))),r.a.createElement("div",{className:"main-app-nav-ghost"}))}}]),t}(n.Component)),L=a(19),F=a(104),_=a.n(F),U=(a(147),a(204)),B=a(105),V=a(205),R=(a(148),function(e,t){return function(){var a=Object(y.a)(b.a.mark(function a(n){var r;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=null,a.next=3,t.getPlaylist(e).then(function(){var a=Object(y.a)(b.a.mark(function a(n){var c,s;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.body,c=r.tracks.next,r.tracks=r.tracks.items,!c){a.next=10;break}s=100;case 5:if(!c){a.next=10;break}return a.next=8,t.getPlaylistTracks(e,{offset:s}).then(function(e){e.body.next||(c=!1),s+=100,r.tracks=r.tracks.concat(e.body.items)});case 8:a.next=5;break;case 10:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),function(e){r=e}).then(function(){window.location.hash="#/playlist-builder"});case 3:n({type:"SET_SELECTED_PLAYLIST",payload:r});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}),Y=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e)),S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"selectPlaylist",value:function(){this.props.dispatch(R(this.props.playlist.id,this.props.api))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"render",value:function(){var e=this.props.playlist;return r.a.createElement(B.a,{xs:12,sm:12,lg:12,className:"playlist-card-col"},r.a.createElement(U.a,{className:w()?"playlist-card content-card p-1":"playlist-card content-card playlist-row-height p-1"},r.a.createElement(B.a,{xs:12,sm:6,className:"playlist-card-content text-center d-flex ".concat(x()?"space-between":"")},r.a.createElement(V.a,{src:e.images[0]?e.images[0].url:null,className:w()?"mobile-playlist-card-image":"desktop-playlist-card-image"}),r.a.createElement("div",{className:x()?"text-right":"text-left"},r.a.createElement("h5",{className:"m-1 ml-2"},e.name),r.a.createElement("p",{className:"ml-2 m-0"},e.public?"Public":"Private"))),r.a.createElement(B.a,{xs:12,sm:6,className:x()?"p-0":""},x()&&r.a.createElement("div",{className:"mobile-playlist-card-button-wrapper"},r.a.createElement(C.a,{variant:"primary",className:"",onClick:this.selectPlaylist},"Edit"),r.a.createElement(C.a,{variant:"outline-danger",className:""},"Unfollow")),!x()&&r.a.createElement("div",{className:"desktop-playlist-card-button-wrapper"},r.a.createElement(C.a,{variant:"outline-danger",className:"m-1"},"Unfollow"),r.a.createElement(C.a,{variant:"primary",className:"m-1",onClick:this.selectPlaylist},"Edit")))))}}]),t}(n.Component),z=Object(L.b)()(Y),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={playlists:null,error:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getPersonalPlaylistData()}},{key:"getPersonalPlaylistData",value:function(){var e=this.props,t=e.userId,a=e.api;t?this.props.loadEditablePlaylists(t,a):this.setState({error:"No user ID found, please reload"})}},{key:"render",value:function(){var e=this;if(this.props.playlists){var t=this.props.playlists;return r.a.createElement(U.a,{className:"text-center m-3 pb-2"},r.a.createElement(B.a,{xs:12},r.a.createElement("h3",{className:"display-5"}," My Playlists "),r.a.createElement(A,{percentage:3})),t.map(function(t){return r.a.createElement(z,{playlist:t,api:e.props.api})}))}return null}}]),t}(n.Component),W=Object(L.b)(function(e){return{api:e.api.spotifyApi,playlists:e.playlist.editablePlaylists}},function(e){return{loadEditablePlaylists:function(t,a){return e(function(e,t){return function(){var a=Object(y.a)(b.a.mark(function a(n){var r;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=null,a.next=3,t.getUserPlaylists(e,{limit:50}).then(function(){var a=Object(y.a)(b.a.mark(function a(n){var c,s;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.body.items,!(c=n.body.next)){a.next=9;break}s=50;case 4:if(!c){a.next=9;break}return a.next=7,t.getUserPlaylists(e,{limit:50,offset:s}).then(function(e){e.body.next||(c=!1),s+=50,r=r.concat(e.body.items)});case 7:a.next=4;break;case 9:r=r.filter(function(t){return t.owner.id==e||t.collaborative});case 10:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),function(e){r=e});case 3:n({type:"LOAD_EDITABLE_PLAYLISTS",payload:r});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(G),J=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(this.props.profile){var e=this.props.profile,t=e.displayName,a=e.email,n=(e.id,e.images),c=(e.externalUrls,e.followers);return r.a.createElement(U.a,null,r.a.createElement(B.a,{xs:12,className:"text-center break-long-words"},r.a.createElement(V.a,{src:n[0]?n[0].url:"",className:"drop-shadow profile-image"}),r.a.createElement(A,{percentage:5}),r.a.createElement("h1",{className:"display-4"},t),r.a.createElement("h5",{className:"lead"},a),r.a.createElement("h2",{className:"lead mb-0"},c.total," followers"),r.a.createElement(I,null)))}return null}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={topArtists:null,error:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.api.spotifyApi.getMyTopArtists({limit:6}).then(function(t){e.setState({topArtists:t.body})},function(t){e.setState({error:N(t)})}),this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement(U.a,{className:"p-3"},r.a.createElement(B.a,{xs:12,className:"text-center"},r.a.createElement("h3",{className:"display-5"}," Top Artists "),r.a.createElement(A,{percentage:4})),this.state.topArtists&&this.state.topArtists.items.map(function(e){return r.a.createElement(B.a,{xs:6,sm:4,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(V.a,{src:e.images[0].url,roundedCircle:!0,fluid:!0,className:"drop-shadow mb-3"}),r.a.createElement("p",{className:"lead"},e.name)))}))}}]),t}(n.Component),$=Object(L.b)(function(e){return{api:e.api}})(H),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={topTracks:null,error:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.api.spotifyApi.getMyTopTracks({limit:12}).then(function(t){e.setState({topTracks:t.body})},function(t){e.setState({error:N(t)})}),this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement(U.a,{className:"p-3"},r.a.createElement(B.a,{xs:12,className:"text-center"},r.a.createElement("h3",{className:"display-5"}," Top Tracks "),r.a.createElement(A,{percentage:4})),this.state.topTracks&&this.state.topTracks.items.map(function(e){return r.a.createElement(B.a,{xs:6,sm:4,lg:2,className:"text-center"},r.a.createElement("div",{className:"p-2 break-long-words"},r.a.createElement(V.a,{src:e.album.images[0].url,fluid:!0,className:"drop-shadow mb-3"}),r.a.createElement("p",{className:"lead"},e.name)))}))}}]),t}(n.Component),K=Object(L.b)(function(e){return{api:e.api}})(q),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={profile:null,error:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.api.spotifyApi.getMe().then(function(t){e.setState({profile:N(t.body)})},function(t){e.setState({error:N(t)})}),this.forceUpdate()}},{key:"render",value:function(){var e=this.state.profile;return e?r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement(J,{profile:e}),r.a.createElement(A,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(A,{percentage:5}),r.a.createElement($,null),r.a.createElement(A,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(A,{percentage:5}),r.a.createElement(K,null),r.a.createElement(A,{percentage:5}),r.a.createElement("hr",{className:"w-75"}),r.a.createElement(A,{percentage:5}),r.a.createElement(W,{userId:e.id})):null}}]),t}(n.Component),X=Object(L.b)(function(e){return{api:e.api}})(Q),Z=(a(62),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"render",value:function(){var e=this.props.playlist;return r.a.createElement("div",{id:"playlist-info-wrapper",className:"p-2"},r.a.createElement(U.a,null,r.a.createElement(B.a,{className:"playlist-image-wrapper",xs:12,sm:6},e.images[0]?r.a.createElement(V.a,{src:e.images[0].url,className:"playlist-info-image"}):null),r.a.createElement(B.a,{className:"playlist-title-desc-wrapper text-right break-long-words p-3",xs:12,sm:6},r.a.createElement("h2",{className:w()?"":"display-4"},e.name),r.a.createElement("p",null,e.description||"No description provided."),r.a.createElement("p",null,e.followers.total," ",1==e.followers.total?"follower":"followers"))))}}]),t}(n.Component)),ee=a(209),te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={tempo:0,loudness:0,danceability:0,valence:0,energy:0,durationMs:0,popularity:0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.calculateAverageStatistics(),window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"calculateAverageStatistics",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t,a,n,r,c,s,l,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.api,n=t.tracks,r={tempo:null,danceability:null,valence:null,energy:null,durationMs:null,popularity:null},c=[],n.forEach(function(e){c.push(e.track.id),r.popularity=r.popularity+e.track.popularity}),s=c.length>100,l=[],0===c.length){e.next=19;break}return e.next=9,a.getAudioFeaturesForTracks(c.splice(0,100)).then(function(e){var t=N(e.body);t.audioFeatures,l=l.concat(t.audioFeatures)});case 9:if(!s){e.next=17;break}i=100;case 11:if(!s){e.next=17;break}return e.next=14,a.getAudioFeaturesForTracks(c.splice(0,100)).then(function(e){var t=N(e.body);l=l.concat(t.audioFeatures),i+=t.audioFeatures.length});case 14:i===n.length&&(s=!1),e.next=11;break;case 17:l.forEach(function(e){null!==e&&(r.tempo=r.tempo+e.tempo,r.danceability=r.danceability+e.danceability,r.valence=r.valence+e.valence,r.energy=r.energy+e.energy,r.durationMs=r.durationMs+e.durationMs)}),this.setState({tempo:r.tempo/n.length,danceability:r.danceability/n.length,valence:r.valence/n.length,energy:r.energy/n.length,durationMs:r.durationMs,popularity:r.popularity/n.length});case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.tempo,a=e.danceability,n=e.valence,c=e.energy,s=e.durationMs,l=e.popularity;if(!(t&&a&&n&&c&&s))return r.a.createElement("div",{className:"m-1 mt-3"},r.a.createElement(U.a,{className:"p-2 justify-content-center"},r.a.createElement(B.a,{xs:12,className:"p-2 mb-2 text-center"},"No tracks in this playlist, so there are no statistics.")));var i=function(e){var t=e/1e3,a=Math.floor(t/3600);return t%=3600,{hours:a,minutes:Math.floor(t/60)}}(Math.round(s));return r.a.createElement("div",{className:"m-1 mt-3"},r.a.createElement(U.a,{className:"p-2 justify-content-center"},r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Energy:"),r.a.createElement(ee.a,{animated:!0,striped:!0,now:100*c})),r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Danceability:"),r.a.createElement(ee.a,{animated:!0,striped:!0,now:100*a})),r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Valence:"),r.a.createElement(ee.a,{animated:!0,striped:!0,now:100*n}))),r.a.createElement(U.a,{className:"p-2 justify-content-center"},r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Tempo: ",r.a.createElement("br",null),Math.round(t),"BPM")),r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Duration: ",r.a.createElement("br",null),i.hours>0?i.hours+"hrs":""," ",i.minutes>0?i.minutes+"mins":"")),r.a.createElement(B.a,{xs:4,sm:4,className:"p-2 mb-2 text-center"},r.a.createElement("p",{className:"mb-1 ".concat(w()?"mobile-small-font":"")},"Popularity: ",r.a.createElement("br",null),Math.round(l)))))}}]),t}(n.Component),ae=a(206),ne=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e)),S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handlePlayTrackOnSpotify",value:function(e){var t=this;return function(){var a=t.props,n=a.api,r=a.playlistId;a.tracksInPlaylist?n.play({context_uri:"spotify:playlist:".concat(r),offset:{uri:"spotify:track:".concat(e)}}).then(function(e){},function(e){console.error(e)}):n.play({uris:["spotify:track:".concat(e)]}).then(function(e){},function(e){console.error(e)})}}},{key:"handleAddTrackToPlaylist",value:function(e){var t=this;return function(){var a=t.props,n=a.playlistId,r=a.api;r.addTracksToPlaylist(n,["spotify:track:".concat(e)]).then(function(){var e=Object(y.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n,r);case 2:t.props.refreshTracks&&t.props.refreshTracks();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(e){console.error(e)})}}},{key:"handleRemoveTrackFromPlaylist",value:function(e){var t=this;return function(){var a=t.props,n=a.playlistId,r=a.api,c=a.setSelectedPlaylist;r.removeTracksFromPlaylist(n,[{uri:"spotify:track:".concat(e)}]).then(function(){var e=Object(y.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n,r);case 2:t.props.refreshTracks&&t.props.refreshTracks();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(e){console.error(e)})}}},{key:"render",value:function(){var e=this;return r.a.createElement(ae.a,{responsive:!0,striped:!0,hover:!0,size:"sm",className:"text-left"},r.a.createElement("thead",null),r.a.createElement("tbody",null,this.props.tracks.map(function(t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"maxw-50-view"},r.a.createElement("div",{className:"d-flex align-center"},t.album.images[0]&&r.a.createElement(V.a,{src:t.album.images[0].url,className:"track-table-image m-1"}),r.a.createElement("div",{className:"break-long-words"},r.a.createElement("p",{className:"track-table-title"},t.name),r.a.createElement("p",{className:"track-table-font "},t.artists.map(function(e,a){return a===t.artists.length-1?e.name:e.name+", "}))))),r.a.createElement("td",{className:"h-100 break-long-words d-flex justify-end p-1 align-center"},e.props.tracksInPlaylist?r.a.createElement(C.a,{onClick:e.handleRemoveTrackFromPlaylist(t.id),className:"mr-1 mt-1 mb-1",variant:"danger"},"-"):r.a.createElement(C.a,{onClick:e.handleAddTrackToPlaylist(t.id),className:"mr-1 mt-1 mb-1"},"+"),r.a.createElement(C.a,{className:"ml-1 mt-1 mb-1",onClick:e.handlePlayTrackOnSpotify(t.id)}," ","Play"," ")))})))}}]),t}(n.Component),re=Object(L.b)(function(e){return{api:e.api.spotifyApi}},function(e){return{setSelectedPlaylist:function(t,a){return e(R(t,a))}}})(ne),ce=a(29),se=a(210);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach(function(t){Object(ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={trackPages:{},currentPage:0},S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadTracks()}},{key:"loadTracks",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t,a,n,r,c,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.tracks,a=t.concat([]),n=!0,r=0;case 4:if(!n){e.next=16;break}if(c=a.splice(0,8),0!==(s=c.map(function(e){return e.track})).length){e.next=11;break}n=!1,e.next=14;break;case 11:return e.next=13,this.setState({trackPages:ie({},this.state.trackPages,Object(ce.a)({},r,s))});case 13:r+=1;case 14:e.next=4;break;case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"changeCurrentPageHandler",value:function(e){var t=this;return function(){t.setState({currentPage:e})}}},{key:"refreshTracklist",value:function(){this.loadTracks()}},{key:"render",value:function(){var e=this.state,t=e.trackPages,a=e.currentPage;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",null," Track List "),r.a.createElement("br",null)),r.a.createElement(re,{tracks:t[a]||[],tracksInPlaylist:!0,playlistId:this.props.playlistId,refreshTracks:this.refreshTracklist}),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(se.a,null,r.a.createElement(se.a.Prev,{disabled:0===this.state.currentPage,onClick:this.changeCurrentPageHandler(this.state.currentPage-1)}),r.a.createElement(se.a.Next,{disabled:this.state.currentPage===Object.keys(this.state.trackPages).length-1,onClick:this.changeCurrentPageHandler(this.state.currentPage+1)}))))}}]),t}(n.Component),ue=a(208),me=a(46);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach(function(t){Object(ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={recommendedTracks:[],selectedArtistSeeds:{0:"",1:"",2:""},selectedTrackSeeds:{0:"",1:"",2:""},targetValence:.5,targetEnergy:.5,targetDanceability:.5,targetBPM:100,targetPopularity:50,error:null},S()(Object(m.a)(a)),window.addEventListener("resize",function(){a.forceUpdate()}),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleRecommendationGeneration()}},{key:"handleRecommendationGeneration",value:function(){var e=this.state,t=e.selectedArtistSeeds,a=e.selectedTrackSeeds,n=!1;Object.keys(t).forEach(function(e){""!==t[e]&&(n=!0)}),n||Object.keys(a).forEach(function(e){""!==a[e]&&(n=!0)}),n?this.updateRecommendations():this.setState({error:"You must choose at least one seed for recommendations."})}},{key:"updateRecommendations",value:function(){var e=this,t=this.props.api,a=this.state,n=a.selectedArtistSeeds,r=a.selectedTrackSeeds,c=a.targetValence,s=a.targetEnergy,l=a.targetDanceability,i=a.targetBPM,o=a.targetPopularity,u=[];Object.keys(n).forEach(function(e){""!==n[e]&&u.push(n[e])});var m=[];Object.keys(r).forEach(function(e){""!==r[e]&&m.push(r[e])});var p={limit:35,target_bpm:i,target_valence:c,target_energy:s,target_danceability:l,target_popularity:o,seed_artists:u,seed_tracks:m};t.getRecommendations(p).then(function(t){e.setState({recommendedTracks:t.body.tracks,error:null})},function(t){e.setState({error:t.message})})}},{key:"numberOfSeedsFull",value:function(){var e=this.state,t=e.selectedArtistSeeds,a=e.selectedTrackSeeds,n=[],r=[];return[0,1,2].forEach(function(e){""!==t[e]&&n.push(t[e]),""!==a[e]&&r.push(a[e])}),n.length+r.length>=5}},{key:"handleAddSeedArtist",value:function(e){var t=this;return function(a){t.setState({selectedArtistSeeds:de({},t.state.selectedArtistSeeds,Object(ce.a)({},e,a.target.value))})}}},{key:"renderSeedArtistsDropdown",value:function(){var e=this,t=this.props.playlistTracks,a={};t.forEach(function(e){e.track.artists.forEach(function(e){a[e.id]=e.name})});var n=Object.keys(a);return r.a.createElement(ue.a.Group,{controlId:"seedArtists"},r.a.createElement(U.a,{className:"w-100 m-0"},r.a.createElement(B.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Similar Artists")),[1,2,3].map(function(t){var c=e.state.selectedArtistSeeds;return r.a.createElement(B.a,{sm:12,md:4,className:"p-1"},r.a.createElement(ue.a.Control,{key:t-1,as:"select",onChange:e.handleAddSeedArtist(t-1),disabled:""===c[t-1]&&e.numberOfSeedsFull()},r.a.createElement("option",{value:""},"None"),n.map(function(e){return r.a.createElement("option",{value:e},a[e])})))})))}},{key:"handleAddSeedTrack",value:function(e){var t=this;return function(a){t.setState({selectedTrackSeeds:de({},t.state.selectedTrackSeeds,Object(ce.a)({},e,a.target.value))})}}},{key:"renderSeedTracksDropdown",value:function(){var e=this,t=this.props.playlistTracks,a={};t.forEach(function(e){var t=e.track;a[t.id]=t.name});var n=Object.keys(a);return r.a.createElement(ue.a.Group,{controlId:"seedTracks"},r.a.createElement(U.a,{className:"w-100 m-0"},r.a.createElement(B.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Similar Tracks")),[1,2,3].map(function(t){var c=e.state.selectedTrackSeeds;return r.a.createElement(B.a,{sm:12,md:4,className:"p-1"},r.a.createElement(ue.a.Control,{key:t-1,as:"select",onChange:e.handleAddSeedTrack(t-1),disabled:""===c[t-1]&&e.numberOfSeedsFull()},r.a.createElement("option",{value:""},"None"),n.map(function(e){return r.a.createElement("option",{value:e},a[e])})))})))}},{key:"renderAudioFeatureSliders",value:function(){var e=this;return r.a.createElement(U.a,{className:"w-100 m-0"},r.a.createElement(B.a,{xs:12,className:"text-left"},r.a.createElement("h5",{className:"lead"},"Target Statistics")),r.a.createElement(B.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Danceability "),r.a.createElement(me.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetDanceability,onChange:function(t){return e.setState({targetDanceability:t/100})},className:"w-50"})),r.a.createElement(B.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Energy "),r.a.createElement(me.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetEnergy,onChange:function(t){return e.setState({targetEnergy:t/100})},className:"w-50"})),r.a.createElement(B.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Valence "),r.a.createElement(me.a,{min:0,max:100,step:1,defaultValue:50,value:100*this.state.targetValence,onChange:function(t){return e.setState({targetValence:t/100})},className:"w-50"})),r.a.createElement(B.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Tempo "),r.a.createElement(me.a,{min:0,max:250,step:1,defaultValue:100,value:this.state.targetBPM,onChange:function(t){return e.setState({targetBPM:t})},className:"w-50"})),r.a.createElement(B.a,{xs:12,className:"p-2 d-flex align-center space-between"},r.a.createElement("p",{className:"mb-0 mr-2"}," Popularity "),r.a.createElement(me.a,{min:0,max:100,step:1,defaultValue:100,value:this.state.targetPopularity,onChange:function(t){return e.setState({targetPopularity:t})},className:"w-50"})))}},{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",{className:"text-right"},r.a.createElement("div",{className:"w-100 text-center"},r.a.createElement("h4",null," Generate Recommendations "),r.a.createElement("br",null)),r.a.createElement(ue.a,{onSubmit:function(e){return console.log(e)}},this.renderSeedTracksDropdown(),this.renderSeedArtistsDropdown(),this.renderAudioFeatureSliders()),r.a.createElement(C.a,{onClick:this.handleRecommendationGeneration},"Generate Tracks"),r.a.createElement("hr",null),e&&r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("h5",{className:"p-3 lead text-danger"},r.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ",e)),!e&&r.a.createElement("div",{className:"mt-3"},r.a.createElement(re,{playlistId:this.props.playlistId,tracks:this.state.recommendedTracks})))}}]),t}(n.Component),he=Object(L.b)(function(e){return{api:e.api.spotifyApi}})(fe),be=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedPlaylist,a=e.api;return t?r.a.createElement("div",{id:"playlist-builder-wrapper",className:"p-4"},r.a.createElement(Z,{playlist:t}),r.a.createElement(te,{tracks:t.tracks,api:a}),r.a.createElement("br",null),r.a.createElement(oe,{tracks:t.tracks,playlistId:t.id}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(he,{playlistTracks:t.tracks,playlistId:t.id})):r.a.createElement("div",{id:"playlist-builder-wrapper",className:"p-4"},r.a.createElement(B.a,{xs:12},r.a.createElement(A,{percentage:3}),r.a.createElement("div",{className:"w-100 h-100 no-selected-playlist"},r.a.createElement("h1",{className:"display-4"}," No playlist selected... "),r.a.createElement("br",null),r.a.createElement("p",{className:"lead"},"Please"," ",r.a.createElement("a",{href:"#/profile"},"select a playlist from your profile")," to begin editing."))))}}]),t}(n.Component),ye=Object(L.b)(function(e){return{api:e.api?e.api.spotifyApi:null,selectedPlaylist:e.playlist?e.playlist.selectedPlaylist:null}})(be),ve=a(207),Ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1,token:""},S()(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(){e.checkForLogin()}),this.checkForLogin()}},{key:"checkForLogin",value:function(){var e=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("spotifyAccessToken");""!==e&&e!=this.state.token?(this.setState({loggedIn:!0,token:e}),this.props.setSpotifyApi(e)):""===e&&this.setState({loggedIn:!1,token:""})}},{key:"render",value:function(){var e=this.state.loggedIn;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"",id:"app-wrapper"},r.a.createElement(M,{noButtons:!e}),e?r.a.createElement("div",{id:"playlists-view-wrapper"},r.a.createElement(ve.a,null,r.a.createElement(U.a,null,r.a.createElement(f.a,{exact:!0,path:"(|/profile)",component:X}),r.a.createElement(f.a,{exact:!0,path:"/playlist-builder",component:ye})))):r.a.createElement(D,null)))}}]),t}(r.a.Component),ge=Object(L.b)(function(e){},function(e){return{setSpotifyApi:function(t){return e(function(e){return function(t){var a=new _.a({clientId:O,redirectUri:"http://localhost:3000"});a.setAccessToken(e),t({type:"SET_SPOTIFY_API",payload:a})}}(t))}}})(Ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(37),Oe=a(110);function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach(function(t){Object(ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach(function(t){Object(ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Pe=Object(ke.combineReducers)({api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SPOTIFY_API":return Ne({},e,{spotifyApi:t.payload});default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_PLAYLIST":return xe({},e,{selectedPlaylist:t.payload});case"LOAD_EDITABLE_PLAYLISTS":return xe({},e,{editablePlaylists:t.payload});default:return e}}}),Se=a(111);s.a.render(r.a.createElement(L.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(ke.createStore)(Pe,e,Object(Se.composeWithDevTools)(Object(ke.applyMiddleware)(Oe.a)))}({api:null,playlist:{editablePlaylists:[]}})},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){},82:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.bfc86737.chunk.js.map