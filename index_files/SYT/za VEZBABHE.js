function D1() {
  //// da se stavi ruls ::; userite pisuvat samo svojot email i verification

  let R = {
    ADMIN: { STATUS: true, EMAIL: { VERI: false, email: false }, CD: "" },
    EDITOR: { STATUS: true, EMAIL: { VERI: false, email: false }, CD: "" },
    SPECTATOR: { STATUS: true, EMAIL: { VERI: false, email: false }, CD: "" },
    ANALIZA: { STATUS: true, EMAIL: { VERI: false, email: false }, CD: "" },
  };

  SYC_0000.child("R").set(R);
}

DOIT();
function DOIT() {
  /// takvo za nov prazen akk ova
  var MSCITE = {
    1: { 0: false },
    2: { 0: false },
    3: { 0: false },
    4: { 0: false },
    5: { 0: false },
    6: { 0: false },
    7: { 0: false },
    8: { 0: false },
    9: { 0: false },
    10: { 0: false },
    11: { 0: false },
    12: { 0: false },
  };

  var OKK = {
    1: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "11?",
        STATUS: 1,
      },
    },
    2: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "22?",
        STATUS: 1,
      },
    },
    3: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "33?",
        STATUS: 1,
      },
    },
    4: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "44?",
        STATUS: 1,
      },
    },
    5: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "55?",
        STATUS: 1,
      },
    },
    6: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "66?",
        STATUS: 1,
      },
    },
    7: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "77?",
        STATUS: 1,
      },
    },
    8: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "88?",
        STATUS: 1,
      },
    },
    9: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "99?",
        STATUS: 1,
      },
    },
    10: {
      FTO: { F_SRC: false, F_IME: false },
      UPD: {
        2021: MSCITE,
      },
      STS: {
        OZNAKI: {
          0: { SIMBOL: false, VALUE: 50, TxT: "?" },
          1: { SIMBOL: false, VALUE: 50, TxT: "?" },
          2: { SIMBOL: false, VALUE: 50, TxT: "?" },
        },
        IME: "100?",
        STATUS: 1,
      },
    },
  };

  SYC_0000.child("A").set(OKK);
}
