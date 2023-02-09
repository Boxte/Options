const Option = {
  title: "",
  moneyData: [],
};

export const LongCall = Object.freeze({
  __proto__: Option,
  title: "Long Call",
  moneyData: [-50, -50, 0, 50, 100],
});

export const ShortCall = Object.freeze({
  __proto__: Option,
  title: "Short Call",
  moneyData: [50, 50, 0, -50, -100],
});

export const LongPut = Object.freeze({
  __proto__: Option,
  title: "Long Put",
  moneyData: [100, 50, 0, -50, -50],
});

export const ShortPut = Object.freeze({
  __proto__: Option,
  title: "Short Put",
  moneyData: [-100, -50, 0, 50, 50],
});
