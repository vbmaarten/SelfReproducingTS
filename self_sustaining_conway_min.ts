const conway = [
  [ 0, 1, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
] .map((r, rI, a) => r.map((c, cI) => {
    const n = a.filter((_, ri) => Math.abs(rI-ri)<=1).map(nr => nr.filter((_, ci) => Math.abs(cI-ci)<=1)).reduce((p, cr) => [...p, ...cr], []).reduce((p,a)=>p+a,0)-c
    return c === 1 ? ((n === 2 || n === 3) ? 1 : 0): (n === 3 ? 1 : 0)})); ((s, l) => console.log("const conway =", conway, s,l+s+"`, "+String.fromCharCode(39)+l+String.fromCharCode(39)+");"))(`.map((r, rI, a) => r.map((c, cI) => {
    const n = a.filter((_, ri) => Math.abs(rI-ri)<=1).map(nr => nr.filter((_, ci) => Math.abs(cI-ci)<=1)).reduce((p, cr) => [...p, ...cr], []).reduce((p,a)=>p+a,0)-c
    return c === 1 ? ((n === 2 || n === 3) ? 1 : 0): (n === 3 ? 1 : 0)}));`, '((s, l) => console.log("const conway =", conway, s,l+s+"`, "+String.fromCharCode(39)+l+String.fromCharCode(39)+");"))(`');
