function ADDUP(n){ //// da se stave vokk ok templati za 
    let f=[false,false,false,false,false,false,false,false,false,false,false,false];
    let G={};let g_0=Get_TAZE_G(); let g_1=g_0+1;
    G[g_1]=f;G[g_0]=f;
    
    let O={"FTO": {"F_IME": false,"F_SRC": false},
      "STS":{
        "IME": "",
        "OZNAKI": [
          {"SIMBOL": 0,
            "TxT": "",
            "VALUE": "50"
          },
          {"SIMBOL": 0,
            "TxT": "",
            "VALUE": "50"
          },
          {"SIMBOL": 0,
            "TxT": "",
            "VALUE": "50"
          }
        ],"STATUS": 0
      },
      "UPD":{}};O["UPD"]=G;                   let P=null;
                                     if(n=="PRO"){P=O;}
    for(e=10;e<30;e++){SYC_0000.child("A/"+e).set(P);}}