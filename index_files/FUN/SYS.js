var input_0 = document.getElementsByTagName("input")[0];
input_0.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByTagName("button")[0].click();
  }
});

var input_1 = document.getElementsByTagName("input")[1];
input_1.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByTagName("button")[0].click();
  }
});

SEKORT_PAGE(false);
function SEKORT_PAGE(a) {
  CLEAN_PRE_START();

  document.getElementById("SECTOR_CR8").style.display = "none";
  document.getElementById("SECTOR_UPDEJT").style.display = "none";
  if (a) {
    document.getElementById("SECTOR_CR8").style.display = "block";
  } else {
    document.getElementById("SECTOR_UPDEJT").style.display = "block";
  }
}

function CLEAN_PRE_START() {
  document.getElementById("CR8_GROUP").value = "";
  document.getElementById("CR8_COD").value = "";
  document.getElementsByClassName("SELECTASCHI")[0].selectedIndex = 0;
  document.getElementsByClassName("SELECTASCHI")[1].selectedIndex = 0;
  document.getElementsByClassName("SELECTASCHI")[2].selectedIndex = 0;
  document.getElementById("MESENGEROT").value = "";
}

function Polni_GRUPNO_MENI() {
  let SLKT = document.getElementById("SELEKTOR_GRUPA");
  SYC_0000.child("GROUP")
    .once("value")
    .then(function (snapshot) {
      let GRUPI = snapshot.val();
      let O = '<option value="0">???</option>';
      let o = "";
      for (i in GRUPI) {
        o = o + '<option value="' + i + '">' + i + "</option>";
      }
      O = O + o;
      SLKT.innerHTML = O;
    });
}

var AKTUELAN_LICENCA = undefined;

function Loading_TAA_GRUPA(g) {
  document.getElementById("MESENGEROT").value = "";
  if (g) {
    SYC_0000.child("LICENCA/" + g)
      .once("value")
      .then(function (snapshot) {
        AKTUELAN_LICENCA = snapshot.val();
        document.getElementsByClassName("SELECTASCHI")[1].selectedIndex =
          AKTUELAN_LICENCA;
      });

    SYC_0000.child("MSG/" + g)
      .once("value")
      .then(function (snapshot) {
        document.getElementById("MESENGEROT").value = snapshot.val();
      });
  } else {
    AKTUELAN_LICENCA = undefined;
    document.getElementsByClassName("SELECTASCHI")[1].selectedIndex = 0;
  }
}

/// statusot seleksen neigra nikakava uloga sega za sega .. moze i da se izbace ako treba..

function IsOK_PARAMETARS(P) {
  let B;
  if (P) {
    /// cekira za cr8
    if (
      document.getElementById("CR8_GROUP").value &&
      document.getElementById("CR8_COD").value &&
      document.getElementsByClassName("SELECTASCHI")[1].selectedIndex &&
      document.getElementsByClassName("SELECTASCHI")[2].selectedIndex
    ) {
      B = true;
    } else {
      B = false;
    }
  } else {
    //cekira za updejt
    if (
      document.getElementsByClassName("SELECTASCHI")[0].selectedIndex &&
      document.getElementsByClassName("SELECTASCHI")[1].selectedIndex &&
      document.getElementsByClassName("SELECTASCHI")[2].selectedIndex
    ) {
      B = true;
    } else {
      B = false;
    }
  }
  return B;
}
function UPDEJT_DATA() {
  let Page = document.getElementById("PAGE_SECTOR").checked;
  let DATA = Formcija_DATA_za_POSTIRANJE(Page);
  if (IsOK_PARAMETARS(Page)) {
    if (Page) {
      SEND_CR8(DATA["cr8_group"], DATA["cr8_code"]);
      AKTUELAN_LICENCA = SEND_LICENCA(
        DATA["cr8_group"],
        DATA["SELEKT_LICENCA"]
      );
      SEND_MSG(DATA["cr8_group"], DATA["MSG"]);
      ZAPISNIK(DATA["cr8_group"]);
    } else {
      AKTUELAN_LICENCA = SEND_LICENCA(
        DATA["SELEKT_GRUPA"],
        DATA["SELEKT_LICENCA"]
      );
      SEND_MSG(DATA["SELEKT_GRUPA"], DATA["MSG"]);
      ZAPISNIK(DATA["SELEKT_GRUPA"]);
    }

    STATUS_APPeto("Data was sucsecsfull updejt");
  } else {
    STATUS_APPeto("Invalid parametar..");
  }
}

function STATUS_APPeto(aa) {
  let STS = document.getElementById("Status_APP");
  STS.innerHTML = aa;
  setTimeout(function () {
    STS.innerHTML = "";
  }, 3000);
}

function ZAPISNIK(g) {
  let AGENTOT = "";
  let EML = firebase.auth().currentUser.email;
  for (i in EML) {
    if (EML[i] != ".") {
      AGENTOT = AGENTOT + EML[i];
    } else {
      AGENTOT = AGENTOT + ",";
    }
  }

  SYC_0000.child("HISTORY/" + g + "/" + Get_TmStamp()).set(AGENTOT);
}

function Get_TmStamp() {
  let d = new Date(); //da se UTC!!!!
  let D = d.getDate();
  let M = d.getMonth() + 1;
  let Y = d.getFullYear();
  let hr = d.getHours();
  if (hr < 10) {
    hr = "0" + hr;
  }
  let min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  return D + "_" + M + "_" + Y + "  " + hr + ":" + min;
}

function Formcija_DATA_za_POSTIRANJE(a) {
  let O = {};
  O["SELEKT_LICENCA"] =
    document.getElementsByClassName("SELECTASCHI")[1].selectedIndex;
  O["SELEKT_STATUS"] =
    document.getElementsByClassName("SELECTASCHI")[2].selectedIndex;
  O["MSG"] = document.getElementById("MESENGEROT").value;

  if (a) {
    O["cr8_group"] = document.getElementById("CR8_GROUP").value;
    O["cr8_code"] = document.getElementById("CR8_COD").value;
  } else {
    O["SELEKT_GRUPA"] = document.getElementsByClassName("SELECTASCHI")[0].value;
  }

  return O;
}

function SEND_CR8(g, c) {
  SYC_0000.child("COD/" + g + "/" + c).set("ADMIN");
}

function SEND_MSG(g, d) {
  SYC_0000.child("MSG/" + g).set(d);
}

function SEND_LICENCA(g, d) {
  if (AKTUELAN_LICENCA == undefined) {
    ADD_NOW(g);
  }

  if (AKTUELAN_LICENCA != d) {
    if (
      (AKTUELAN_LICENCA == 1 && d == 3) ||
      (AKTUELAN_LICENCA == 1 && d == 4) ||
      (AKTUELAN_LICENCA == 2 && d == 3) ||
      (AKTUELAN_LICENCA == 2 && d == 4)
    ) {
      UP_Scale(g);
    } else {
      DOWN_Scale(g);
    }

    SYC_0000.child("LICENCA/" + g).set(d);
  }
  return d;
}
function ADD_NOW(G) {
  for (i = 1; i < 11; i++) {
    let tst = i + "--URED";
    SYC_0000.child("GROUP/" + G + "/UREDI/" + i).set(tst);
  }
}
function UP_Scale(G) {
  for (i = 11; i < 31; i++) {
    let tst = i + "--URED";
    SYC_0000.child("GROUP/" + G + "/UREDI/" + i).set(tst);
  }
}
function DOWN_Scale(G) {
  for (i = 30; i > 10; i--) {
    SYC_0000.child("GROUP/" + G + "/UREDI/" + i).set(null);
  }
}
