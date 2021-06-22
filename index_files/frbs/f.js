function logout() {
  firebase.auth().signOut();
  location.reload();
}

function login() {
  var userEmail = document.getElementById("email_field_1").value;
  var userPass = document.getElementById("password_field_1").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var user = firebase.auth().currentUser;
      KojE(user);
    } else {
      KojE(null);
    }
  });
}
setTimeout(login(), 2000);
//// staveno za auto start da bide pobrzo

function KojE(a) {
  if (a) {
    GTR(a);
  } else {
    akces(false);
  }
}

function GTR(a) {
  let pat = "SUPER_SYC_HAS/" + a.uid;
  SYC_0000.child(pat)
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      if (data != undefined) {
        for (i in data) {
          let usernameto = i;
          let status = data[i];
          akces(status, usernameto);
        }
      } else {
        akces(false, false);
      }
    });
}

function akces(a, b) {
  let B = "this akkount isnt super devolper premisions avaible ";
  if (b) {
    B = "this akk " + b + " is temporaly suspended by DEVOPS";
  }

  if (a) {
    Polni_GRUPNO_MENI();

    document.getElementById("onadeno").style.display = "contents";
    document.getElementById("onadeno").style.width = 37 + "%";
    document.getElementById("login_div").style.display = "none";
  } else {
    document.getElementById("onadeno").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("TiTle").innerHTML = B;
  }
}
