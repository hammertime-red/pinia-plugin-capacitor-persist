import { Preferences as i } from "@capacitor/preferences";
const d = async (e) => i.get({
  key: e
}).then((t) => t && t.value ? JSON.parse(t.value) : t.value), u = async (e, t) => i.set({
  key: e,
  value: JSON.stringify(t)
}), f = async () => i.clear(), o = async (e) => i.remove({
  key: e
}), m = async () => i.keys(), l = async (e, t) => {
  const n = e.$id;
  if (t.include || t.exclude) {
    const c = (t.include ? t.include : Object.keys(e.$state).filter((s) => t.exclude.includes(s) === !1)).reduce((s, a) => (s[a] = e.$state[a], s), {});
    u(n, c);
  } else
    u(n, e.$state);
}, y = (e, t, n, r) => new Promise((c) => {
  d(t).then((s) => {
    const a = () => {
      e.$subscribe(() => {
        l(e, n);
      });
    };
    if (s)
      e.$patch(s), l(e, n).then(() => (a(), r && r(e), c()));
    else
      return a(), c();
  });
}), $ = async ({ options: e, store: t }) => {
  var c;
  if (((c = e.persist) == null ? void 0 : c.enabled) !== !0)
    return;
  const n = {
    include: e.persist.include,
    exclude: e.persist.exclude
  }, r = t.$id;
  t.restored = y(t, r, n, e.persist.onRestored);
};
export {
  f as clear,
  m as getKeys,
  $ as piniaCapacitorPersist,
  o as removeItem
};
