Vue.component("parametrite", {
  template: `<div style="margin-top: 90px; position: absolute; margin-left: 20px;">

<span class="TxT_stalaza">Licenca :</span><select class="SELECTASCHI">

    <option value="0">???</option>
    <option value="1">Lite</option>
    <option value="2">Lite +</option>
    <option value="3">EXTRIM</option>
    <option value="4">EXTRIM +</option>

    </select>
<br>
<span class="TxT_stalaza">Status :</span><select class="SELECTASCHI">
    <option value="0">???</option>
    <option value="1">OK</option>
    <option value="2">SUSPEND</option>
    <option value="3">SHADOW BAN</option>
    <option value="4">DELETE</option>
</select>

<br>

<span class="TxT_stalaza">Mesage :</span><br>

<textarea id="MESENGEROT"></textare>
    

</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "parametrite",
  },
});

var signqqee = new Vue({
  el: "#Parametri",
  store: store,
});
