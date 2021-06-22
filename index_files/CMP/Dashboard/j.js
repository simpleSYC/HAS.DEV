Vue.component("margin_podatocite", {
  template: `<div>
    
  <div id="SECTOR_UPDEJT">  
  <span class="TxT_stalaza"><strong>GROUP</strong>:</span>
  <select class="SELECTASCHI" id="SELEKTOR_GRUPA" onchange="Loading_TAA_GRUPA(this.value);" style="width: 170px;text-align: center;">
    
  </select></div>


  <div id="SECTOR_CR8">
    <input type="text" placeholder="GROUP CODE:" id="CR8_GROUP"/>
    <br>
    <br>
    <input type="text" placeholder="Admin cod:"  id="CR8_COD"/>  

  </div>




  <div>Status :<span id="Status_APP">Loading....</span></div>
  <hr>
<br>

<button type="button" id="PostirajUpgrejd" onclick="UPDEJT_DATA();">UPDEJT</button>

<button type="button" id="LogOUT" onclick="logout();">EXIT</button>

<div id="SWIITC_AKCIJA">
<span>UPDEJT</span>
<label class="switch" style="top: -6px;"><input type="checkbox" id="PAGE_SECTOR" onchange="SEKORT_PAGE(this.checked);"><span class="slider round"></span></label>
<span>CR8</span>
</div>

<button type="button" id="Refresch" onclick="location.reload();">F5</button>

</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "margin_podatocite",
  },
});

var signqqee = new Vue({
  el: "#DashBoard",
  store: store,
});
