/**
 * OsEasy-ToolKit 品牌色动态循环
 * 使用 requestAnimationFrame 实现平滑颜色过渡
 * 周期约 20 秒，绿 → 青 → 蓝 → 紫 → 粉 → 绿
 */

(function() {
  // 5 种颜色状态
  const palette = [
    { brand1: '#00c853', brand2: '#00e676', brand3: '#00a844', soft: 'rgba(0,200,83,0.14)', hc1: '#00c853', hc2: '#69f0ae', bg1: '#00c853', bg2: '#004d40' },
    { brand1: '#00bfa5', brand2: '#1de9b6', brand3: '#00897b', soft: 'rgba(0,191,165,0.14)', hc1: '#00bfa5', hc2: '#80cbc4', bg1: '#00bfa5', bg2: '#004d40' },
    { brand1: '#2979ff', brand2: '#448aff', brand3: '#2962ff', soft: 'rgba(41,121,255,0.14)', hc1: '#2979ff', hc2: '#82b1ff', bg1: '#2979ff', bg2: '#0d47a1' },
    { brand1: '#651fff', brand2: '#7c4dff', brand3: '#6200ea', soft: 'rgba(101,31,255,0.14)', hc1: '#651fff', hc2: '#b388ff', bg1: '#651fff', bg2: '#311b92' },
    { brand1: '#e91e63', brand2: '#f06292', brand3: '#c2185b', soft: 'rgba(233,30,99,0.14)', hc1: '#e91e63', hc2: '#f48fb1', bg1: '#e91e63', bg2: '#4a0024' }
  ];

  const cycleDuration = 20000; // 20 秒完整周期
  const colorsCount = palette.length;

  function lerpColor(c1, c2, t) {
    const r1 = parseInt(c1.slice(1,3), 16), g1 = parseInt(c1.slice(3,5), 16), b1 = parseInt(c1.slice(5,7), 16);
    const r2 = parseInt(c2.slice(1,3), 16), g2 = parseInt(c2.slice(3,5), 16), b2 = parseInt(c2.slice(5,7), 16);
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
  }

  function lerpRGBA(c1, c2, t) {
    // 解析 rgba(r,g,b,a) 格式
    const parse = (s) => {
      const m = s.match(/[\d.]+/g);
      return { r: +m[0], g: +m[1], b: +m[2], a: +m[3] || 1 };
    };
    const a = parse(c1), b = parse(c2);
    const r = Math.round(a.r + (b.r - a.r) * t);
    const g = Math.round(a.g + (b.g - a.g) * t);
    const bl = Math.round(a.b + (b.b - a.b) * t);
    const al = a.a + (b.a - a.a) * t;
    return `rgba(${r},${g},${bl},${al})`;
  }

  function getInterpolated(progress) {
    const totalSegments = colorsCount;
    const segLen = 1 / totalSegments;
    const idx = Math.floor(progress / segLen) % totalSegments;
    const nextIdx = (idx + 1) % totalSegments;
    const t = (progress - idx * segLen) / segLen;

    const c1 = palette[idx], c2 = palette[nextIdx];

    return {
      brand1: lerpColor(c1.brand1, c2.brand1, t),
      brand2: lerpColor(c1.brand2, c2.brand2, t),
      brand3: lerpColor(c1.brand3, c2.brand3, t),
      soft: lerpRGBA(c1.soft, c2.soft, t),
      hc1: lerpColor(c1.hc1, c2.hc1, t),
      hc2: lerpColor(c1.hc2, c2.hc2, t),
      bg1: lerpColor(c1.bg1, c2.bg1, t),
      bg2: lerpColor(c1.bg2, c2.bg2, t)
    };
  }

  let startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = (elapsed % cycleDuration) / cycleDuration;

    const colors = getInterpolated(progress);

    const root = document.documentElement;
    root.style.setProperty('--vp-c-brand-1', colors.brand1);
    root.style.setProperty('--vp-c-brand-2', colors.brand2);
    root.style.setProperty('--vp-c-brand-3', colors.brand3);
    root.style.setProperty('--vp-c-brand-soft', colors.soft);
    root.style.setProperty('--hero-grad-c1', colors.hc1);
    root.style.setProperty('--hero-grad-c2', colors.hc2);
    root.style.setProperty('--hero-bg-c1', colors.bg1);
    root.style.setProperty('--hero-bg-c2', colors.bg2);

    requestAnimationFrame(animate);
  }

  // DOM 加载完成后启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(animate);
    });
  } else {
    requestAnimationFrame(animate);
  }
})();
