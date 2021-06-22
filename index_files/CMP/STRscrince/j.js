Vue.component("start_scrinot", {
  template: `<div>
    <h3 id="TiTle" style="text-align:center;position: relative;">HAS admin panel</h3>
    <img id="imgLOGO" src="https://simplesyc.github.io/HAS.SRC/MEDIA/HAS1000.png">
    
    <div id="Lin">
      <input type="email" placeholder="Email..." id="email_field_1" value="bibi@gmail.com"/>
      <input type="password" placeholder="Password..." id="password_field_1" value="0123456789"/><br>
      <button type="button"  onclick="login();">Login SUPER PANEL</button> 
    </div>
      
</div>`,
});
var store = "";

var storeqqee = new Vuex.Store({
  state: {
    view: "start_scrinot",
  },
});

var signqqee = new Vue({
  el: "#login_div",
  store: store,
});
