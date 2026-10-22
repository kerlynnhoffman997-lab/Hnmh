

(() => {
if (window.__DEEP_ZOOM_INITIALIZED__) {
  console.log('JS already initialized, skipping execution.');
  return;
}
window.__DEEP_ZOOM_INITIALIZED__ = true;

// =========================================
// placeholder for the node data
// =========================================
const nodesData = {"54749336813040":{"id":"54749336813040","parentId":null,"label":"赶一场中原庙会","imageSrc":"assets/henan-map.svg","box":null,"zoomedBox":null,"maskSrc":null,"url":null,"text":"### 赶一场中原庙会\n从河南地图走进一整场庙会。沿着画中的街巷、戏台和摊位，逐层靠近表演、人物与器物，读懂每一处地方风物。郑州包含中岳与航线里两场庙会。","childrenIds":["fair-zz-hx","fair-zz-zy","fair-kf-ws","fair-ly-gl","fair-pds-tw","fair-ay-dk","fair-hb-jx","fair-xx-bg","fair-jz-ysc","fair-py-xq","fair-xc-bl","fair-lh-hsj","fair-smx-hg","fair-ny-sd","fair-sq-hst","fair-xy-pgs","fair-zk-th","fair-zmd-hj","fair-jy-sl"],"label_anchor_points":null,"label_coordinates":null,"content_cost_map":null},"fair-zz-hx":{"id":"fair-zz-hx","parentId":"54749336813040","label":"郑州·航线里","imageSrc":"assets/worlds/zz-hx.webp","box":[407.16,1137.45,572.11,1419.69],"zoomedBox":[407.16,1137.45,572.11,1419.69],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iaGFsZiI+PHJlY3QgeD0iMTI4MCIgeT0iMCIgd2lkdGg9IjExMjAiIGhlaWdodD0iMTM1MCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNoYWxmKSI+PHBhdGggZD0iTTE0MTkuNjksNDIzLjE0IEwxNDE3LjM5LDQyMS40MyBMMTQxNS45Miw0MTguNTEgTDE0MTAuNjgsNDIwLjI0IEwxNDA4LjM3LDQxOS44NyBMMTQwMC44Miw0MTQuNjIgTDEzOTcuMzEsNDE1LjA0IEwxMzkzLjMsNDE3LjM3IEwxMzg3Ljc4LDQxNy4zNyBMMTM4My40OSw0MTQuMDEgTDEzODEuNTksNDE0LjE3IEwxMzc1LjM2LDQyMS4wNSBMMTM3My4xNyw0MjUuMSBMMTM2OS4zOSw0MjcuOSBMMTM2MC4zMSw0MjcuMTYgTDEzNTMuNjgsNDMwLjcyIEwxMzQ1LjM4LDQzMi41MyBMMTM0MC41Niw0MzIuMDEgTDEzMzcuOTMsNDI5LjYzIEwxMzM2LjE2LDQyNi4zMiBMMTMzNC4wOSw0MjQuMDkgTDEzMzAuODgsNDIzLjE1IEwxMzI2LjQ1LDQyMy41MiBMMTMyNC44Miw0MjQuNDMgTDEzMTguNzksNDI2LjAyIEwxMzE2LjEzLDQyNS4xMyBMMTMxNS4wNyw0MjMuMjYgTDEzMTIuMjksNDIwLjk0IEwxMzA4LjcyLDQyMC44MiBMMTMwMS4zMiw0MTkuODEgTDEyOTguMDcsNDE1Ljk5IEwxMjkzLjg4LDQxMi42OSBMMTI5Mi4xMyw0MTIuMDQgTDEyODYuODIsNDEyLjUgTDEyODMuMiw0MTMuODcgTDEyNzkuNzIsNDE0LjQ3IEwxMjc0LjUsNDEzLjggTDEyNzAuNyw0MTIuNzggTDEyNzAuMjgsNDA4LjUxIEwxMjY2LjYzLDQwNy4xNiBMMTI2MC41Niw0MDkuMzIgTDEyNTguMTEsNDExLjUyIEwxMjU0LjUxLDQxNiBMMTI1Mi41NCw0MTcuMjkgTDEyNDkuMiw0MTcuODkgTDEyNDQuNDEsNDE1LjU0IEwxMjM4Ljg5LDQxNS4zMSBMMTIzNS43Nyw0MTYuOTkgTDEyMzQuOSw0MTguNTEgTDEyMzQuNDUsNDIxLjc2IEwxMjMyLjcxLDQyNS41NSBMMTIyNy4wNSw0MjcuNCBMMTIyMy42NCw0MjguODkgTDEyMTYuMTYsNDMwLjk1IEwxMjE3LjY5LDQzNy40MiBMMTIxMi4zMiw0MzcuOSBMMTIxMC4xMSw0NDAgTDEyMDEuMTgsNDQxLjYzIEwxMTk3LjI5LDQ0MC42MyBMMTE5NC41NSw0MzcuNjkgTDExOTAuNjYsNDM1LjYxIEwxMTg4LjQ5LDQzNS43MyBMMTE4Ny43OCw0MzcuMzcgTDExODUuMzQsNDM5LjMxIEwxMTc5LjExLDQ0My4wOSBMMTE3OC4xOSw0NDIuOTggTDExNzMuNjcsNDM5LjM4IEwxMTcxLjQ0LDQzOC4yOCBMMTE2OC4wOSw0MzguMSBMMTE2Ny4wNyw0MzguODggTDExNjUuOTYsNDQyLjcgTDExNjQuNjksNDQzLjQ1IEwxMTYyLjI1LDQ0Ny43MSBMMTE1OS40NSw0NDcuNCBMMTE1Ny4zMSw0NDUuNzkgTDExNTQuODMsNDQ3LjU0IEwxMTU0LjAzLDQ1MS4yNiBMMTE1NC4xNyw0NTMuNTYgTDExNTUuNDMsNDU1LjA3IEwxMTU5LjE3LDQ1NC4wMiBMMTE2MC45LDQ1NC42NyBMMTE2Ni4zLDQ1NC43NiBMMTE2OC43Myw0NTQuMDYgTDExNzAuOTksNDU0LjU1IEwxMTcyLjc3LDQ1Ni42OSBMMTE3Mi42LDQ1OS44IEwxMTcxLjQzLDQ2MC43NyBMMTE3Mi44OCw0NjQuMzMgTDExNzguNDQsNDY3LjQyIEwxMTc2Ljk5LDQ3MC4xNyBMMTE3NC4wOCw0NzAuMzQgTDExNzEuMzIsNDc0LjI5IEwxMTY5Ljg0LDQ3My45NyBMMTE2Ny4xOSw0NzEuNjcgTDExNjQuOTQsNDcwLjk5IEwxMTYxLjUxLDQ3Mi44OSBMMTE1Ny44Nyw0NzQuMTUgTDExNTcuNjgsNDc2LjYgTDExNTguOTMsNDgwLjEzIEwxMTU4LjAyLDQ4Mi42NSBMMTE2MS4wNSw0ODYuMzUgTDExNjAuMDUsNDg5LjAxIEwxMTU2Ljg4LDQ4OC45OSBMMTE1Ni44NCw0ODkuNzkgTDExNTkuNzUsNDkwLjI1IEwxMTYwLjc2LDQ5My4yNiBMMTE1OS42LDQ5Ni4yOSBMMTE2MC45LDQ5OC4wMyBMMTE2My44OCw0OTcuNzEgTDExNjQuMjUsNTAwLjAxIEwxMTY2LjgxLDUwMi44MiBMMTE2Ny4wNSw1MDQuNTcgTDExNjkuMjUsNTA3LjUgTDExNzMuMDMsNTA3Ljk0IEwxMTc2LjU3LDUwNy40IEwxMTgwLjg1LDUwNy4zOCBMMTE4My43Niw1MDguODIgTDExODYuOTYsNTA5LjMzIEwxMTg1LjQ0LDUxMS4xMSBMMTE4MC4wNCw1MTEuMDUgTDExNzYuNjIsNTEyLjI4IEwxMTc1LjgyLDUxNS45NiBMMTE3Ni4xNCw1MTguMjUgTDExNzQuNzksNTIyLjI2IEwxMTc1LjMzLDUyMy41IEwxMTcxLjk5LDUyNS4zOSBMMTE3MC4yOCw1MjMuNjcgTDExNjMuOTIsNTI0LjE2IEwxMTYyLjcyLDUyMy4wOCBMMTE1OS4zMyw1MjMuMzYgTDExNTMuMzEsNTIyLjg5IEwxMTUxLjgsNTIxLjA5IEwxMTQ3LjM5LDUxOC4xNSBMMTE0Ni4wMyw1MTkuMzYgTDExNDAuOTUsNTIwLjIxIEwxMTQxLjY4LDUyNS4zNyBMMTE0MS4yMyw1MzMuMTYgTDExNDAuMjUsNTM1Ljc0IEwxMTM4LjkyLDUzNy4wMSBMMTE0MC4xMSw1MzkuOSBMMTEzOS42OCw1NDIuNDMgTDExMzcuODgsNTQzLjM5IEwxMTM3LjQ1LDU0NS4zNiBMMTEzOS4wNSw1NDUuOTggTDExMzguNjQsNTQ5LjY3IEwxMTM5LjU0LDU1MiBMMTE0NC4wNCw1NTAuNTMgTDExNDQuNjYsNTUyLjk4IEwxMTQ3Ljc3LDU1My4zMyBMMTE0OS43Myw1NTMuNzMgTDExNTAuMDksNTU2LjQ4IEwxMTU0LjQ4LDU1NC40NiBMMTE1Ni43Myw1NTUuOTYgTDExNTguNDIsNTU1LjkxIEwxMTYyLjQ2LDU1OS44NCBMMTE2MC4xLDU2MC45MSBMMTE1OS45Myw1NjQuMDQgTDExNjIuODEsNTYzLjA1IEwxMTY2LjAzLDU2My45OSBMMTE2OC4wOSw1NjMuMjIgTDExNzMuMzUsNTY0Ljk2IEwxMTc3Ljg0LDU2NC41NSBMMTE4MS4xOSw1NjMuMDYgTDExODIuNDYsNTY0LjAzIEwxMTg4LjUxLDU2NC4zNCBMMTE5Mi4zMyw1NjMuNDUgTDExOTMuNzYsNTY1LjcxIEwxMTk1LjA0LDU2NS45NyBMMTE5Ni44Myw1NjguMDEgTDEyMDEuMDMsNTY3Ljg2IEwxMjA0LjA1LDU2OC44NyBMMTIwNS4zNiw1NzEuMTUgTDEyMDguMjQsNTcyLjExIEwxMjEwLjQzLDU3MS44MyBMMTIxNi42OCw1NjkuNzEgTDEyMTguNDYsNTcxLjE3IEwxMjIyLjg0LDU2Ny43MSBMMTIyNC41NSw1NjUuNzYgTDEyMjQuNDQsNTY0LjUzIEwxMjI2LjgyLDU2MC43NiBMMTIyOS40Myw1NjAuODIgTDEyMzEuODksNTU3Ljg2IEwxMjMyLjEyLDU1NS42NyBMMTIzNC4xOSw1NTQuNjkgTDEyNDAuMjgsNTU0Ljk3IEwxMjQxLjg3LDU1My44MyBMMTI0MS45Miw1NTEuODcgTDEyNDkuMDgsNTUxLjY4IEwxMjQ4Ljk2LDU0Ni43OSBMMTI1MC4xNyw1NDQuNjMgTDEyNDkuMzMsNTQyLjg3IEwxMjUxLjA4LDUzOS43MyBMMTI1NS41MSw1MzkuNzkgTDEyNTYuNDksNTQxLjY4IEwxMjU5LjU4LDU0My4xNSBMMTI1OC45NCw1NDUuNDQgTDEyNjMuMjQsNTQ2LjMxIEwxMjY1LjQ3LDU0NS45NiBMMTI2Ny45NSw1NDYuNTQgTDEyNjYuNDIsNTUxLjAyIEwxMjY3LjgyLDU1Mi4zNSBMMTI3MC42Myw1NTIuMTMgTDEyNzYuMzQsNTU1LjczIEwxMjc4LjYsNTU2LjU1IEwxMjgwLjc2LDU1My44MiBMMTI4My43NCw1NTQuNzkgTDEyODYuMDMsNTUzLjg1IEwxMjg3LjQsNTU1LjQzIEwxMjg3LjE2LDU1Ny4wNiBMMTI4OS41Niw1NTkuNDggTDEyOTQuNjQsNTYwLjkzIEwxMjk2LjU1LDU1OS4zOCBMMTI5OC45OSw1NTkuMDMgTDEzMDIuOTcsNTYwLjUzIEwxMzA0LjUsNTYwLjU1IEwxMzA3LjQ4LDU2Mi43OCBMMTMwOS4zMSw1NjUuOCBMMTMxMS4xLDU2Ni4xNSBMMTMxMy44NSw1NjkuMiBMMTMxNS45Nyw1NjkuMTIgTDEzMTcuODMsNTY3LjUgTDEzMjIuMjcsNTY4LjgyIEwxMzIxLjcsNTY1Ljk1IEwxMzI0LjE0LDU2NS42IEwxMzI0LjE2LDU2My4yMyBMMTMyNi43Nyw1NjIuMjQgTDEzMjguNTgsNTU5LjQ5IEwxMzMyLjMzLDU2MC40MSBMMTMzNi4xOSw1NjAuMjMgTDEzMzkuMTgsNTU3LjE3IEwxMzM4LjgyLDU1Ni4zMyBMMTM0MS4xOSw1NTUuMSBMMTM0Ni41Nyw1NTguMjMgTDEzNDkuNjIsNTU4LjM5IEwxMzQ5LjkzLDU1Ny4zOCBMMTM1NS42Myw1NTYuOCBMMTM1Ni41Niw1NTcuMjQgTDEzNTcuMDYsNTUyLjU3IEwxMzU1LjUzLDU1MC44MyBMMTM1Ni41Miw1NDcuNTYgTDEzNTUuMjYsNTQyLjA5IEwxMzU1LjE5LDUzOC4yNiBMMTM1Ny43Miw1MzIuMzkgTDEzNTkuOTYsNTI4LjU3IEwxMzYxLjU5LDUyOC45OSBMMTM2Mi4yNCw1MzAuNjcgTDEzNjQuOTUsNTMxIEwxMzY2LjQ4LDUyOC40NSBMMTM2OC41Miw1MjguOTEgTDEzNjguNDYsNTMyLjkxIEwxMzcyLjIsNTMxLjk0IEwxMzc2LjMxLDUzMi43NiBMMTM3OS4zNyw1MzEuOTcgTDEzODEuODgsNTMwLjU3IEwxMzgyLjIyLDUyNy40OCBMMTM4MS42Miw1MjUuNjIgTDEzNzkuNjksNTI0Ljk3IEwxMzc5Ljk0LDUyMi42OSBMMTM4Mi4zOSw1MjAuNzggTDEzODQuNzUsNTE3LjI4IEwxMzg5LjksNTIwLjMzIEwxMzkxLjM4LDUyMi4zOSBMMTM5My44Myw1MjIuNTEgTDEzOTUuOSw1MTkuOTQgTDEzOTUuODIsNTE3Ljc3IEwxMzk3LjAyLDUxMC4yIEwxMzk4LjMyLDUwNS4wNSBMMTQwMC40NCw1MDIuMjcgTDE0MDIuNTcsNTAxLjA5IEwxNDAyLjIxLDQ5OC45MiBMMTQwMy4yNiw0OTcuNTQgTDE0MDMuOSw0OTQuMjEgTDE0MDEuNzYsNDkzLjcyIEwxNDAyLjE4LDQ5MS42MSBMMTQwNS41NCw0OTIuMiBMMTQwNS40Niw0OTQuNTMgTDE0MDcuMjQsNDk0LjIgTDE0MDYuNjcsNDkxLjM2IEwxNDA3LjgsNDg5LjYxIEwxNDA2LjQ1LDQ4Mi42NSBMMTQwOC4zNCw0ODAuNjIgTDE0MDcuOCw0NzUuODggTDE0MDcuOTEsNDcxLjg0IEwxNDA0LjcyLDQ2OC40OSBMMTQwNC4yMSw0NjQuOTQgTDE0MDcuOTUsNDU5LjM2IEwxNDEwLjU4LDQ1Ny4zMyBMMTQwOC41OSw0NTQuNCBMMTQwMy4zOSw0NDkuNjYgTDE0MDEuMiw0NDUuOTkgTDE0MDMuMzEsNDQ0LjMzIEwxNDA4LjczLDQ0My41OSBMMTQxMy4wMyw0NDQuMzMgTDE0MTUuNzYsNDQyLjcyIEwxNDE3Ljg4LDQzNi4zNCBMMTQxOS42Niw0MjUuOTIgTDE0MTkuNjksNDIzLjE0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+","url":null,"text":"### 航线里2026春节庙会\n航线里把航空体验放进现代春节街区：C919模型与红色门架相邻成为看点，鼓舞、套圈和年画体验让家庭游客停留。它的地方特色在飞机主题与中原年俗相遇，预热活动和正式春节节目需分开阅读。","childrenIds":["scene-zz-hx-02","scene-zz-hx-03","scene-zz-hx-04"],"label_anchor_points":[1360,490],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1360,"anchorY":490,"labelX":1360,"labelY":425,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-zz-hx-02":{"id":"scene-zz-hx-02","parentId":"fair-zz-hx","imageSrc":"assets/scenes/zz-hx-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNDMyLjY0IiBjeT0iMzM2Ljk2IiByeD0iMjE2LjMyMDAwMDAwMDAwMDAyIiByeT0iMTAyLjk1OTk5OTk5OTk5OTk4IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[234,216.32,439.91999999999996,648.96],"zoomedBox":[234,216.32,439.91999999999996,648.96],"label":"C919模型体验区","url":null,"text":"### C919模型体验区\n**为什么一定要把这架C919说明为模型？**\n模型让游客在地面观察航空形体，并把看飞机的经验放进庙会。画中家长与儿童停下来拍照，展示区保持与街区同在的尺度关系。18米机长与5米高度来自文字报道；涂装、围栏及展示台无独立实拍核对，不能用于推算真实比例。\n\n报道记载C919模型机长18米、高5米，属航空体验装置；无核实实拍。\n\n资料：2026年2月现场报道文字依据\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-hx-02-aircraft-model"],"label_anchor_points":[416,346.32],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":416,"anchorY":346.32,"labelX":416,"labelY":281.32,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-hx-02-aircraft-model":{"id":"object-zz-hx-02-aircraft-model","parentId":"scene-zz-hx-02","imageSrc":"assets/scenes/zz-hx-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDI0IiBjeT0iMzg3IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[184,664,589,1384],"zoomedBox":[184,664,589,1384],"label":"C919展示模型","url":null,"text":"### C919展示模型\n文汇报明确介绍的是C919模型，报道尺寸为机长18米、高5米。这个对象代表航空港庙会的主题，不提供真实航班或乘机服务；插画以地面展陈表现，机翼、支座和涂装都是概念化整理。\n- **它在庙会中的作用**：把地区航空特色变为可近看的展品\n- **记载与补全**：2026年2月现场报道文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1024,387],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":884,"labelY":292,"anchorX":1024,"anchorY":387,"labelWidth":192,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zz-hx-03":{"id":"scene-zz-hx-03","parentId":"fair-zz-hx","imageSrc":"assets/scenes/zz-hx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTQyMi43MTk5OTk5OTk5OTk4IiBjeT0iMzg4LjQ0MDAwMDAwMDAwMDA1IiByeD0iMjI0LjY0IiByeT0iMTM1LjcyMDAwMDAwMDAwMDAzIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[252.72000000000003,1198.08,524.1600000000001,1647.36],"zoomedBox":[252.72000000000003,1198.08,524.1600000000001,1647.36],"label":"鼓手舞台","url":null,"text":"### 鼓手舞台\n**鼓、鼓槌与服装怎样组织舞台节奏？**\n黄红服装把鼓手从红色背景中勾勒出来，鼓槌抬起形成连续的动作线，观众则位于舞台之外。来源照片支持击鼓演出和服装配色，但不能提供每个动作的节拍。这里让读者分别认识发声器物和身体动作，而不模拟未经核听的音乐。\n\n穿黄红服装的鼓手在红色舞台击鼓，背景板标注中原大集春节庙会。\n\n资料：2026-02-18报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-hx-03-stage-drum","object-zz-hx-03-ribbon-stick"],"label_anchor_points":[1431.04,411.84],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1431.04,"anchorY":411.84,"labelX":1431.04,"labelY":346.84,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-hx-03-stage-drum":{"id":"object-zz-hx-03-stage-drum","parentId":"scene-zz-hx-03","imageSrc":"assets/scenes/zz-hx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MTYiIGN5PSI2MTIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[410,456,815,1176],"zoomedBox":[410,456,815,1176],"label":"红色立鼓","url":null,"text":"### 红色立鼓\n鼓手站在立鼓之后，鼓面与身体高度相近，鼓成为舞台上最清楚的动作对象。报道配图可以支持击鼓这一节目类型，但鼓面尺寸、彩绘纹样和图中鼓阵数量不是可以据此核定的实物数据。\n- **它在庙会中的作用**：承接鼓手动作并形成舞台中心\n- **记载与补全**：2026-02-18报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[816,612],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":676,"labelY":517,"anchorX":816,"anchorY":612,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zz-hx-03-ribbon-stick":{"id":"object-zz-hx-03-ribbon-stick","parentId":"scene-zz-hx-03","imageSrc":"assets/scenes/zz-hx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NDQiIGN5PSIxNDQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[0,584,405,1304],"zoomedBox":[0,584,405,1304],"label":"系红绸鼓槌","url":null,"text":"### 系红绸鼓槌\n鼓槌在手中抬起，红绸将小幅手势延伸成容易看见的线条，使远处观众也能感到动作方向。图中姿态是插画定格，来源没有完整动作分解；不能由这一个瞬间复原整支舞的步法和顺序。\n- **它在庙会中的作用**：让鼓手动作在舞台远景中可辨\n- **记载与补全**：2026-02-18报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[944,144],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":804,"labelY":90,"anchorX":944,"anchorY":144,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zz-hx-04":{"id":"scene-zz-hx-04","parentId":"fair-zz-hx","imageSrc":"assets/scenes/zz-hx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMjU3LjkyIiBjeT0iNjczLjkyIiByeD0iMjU3LjkyIiByeT0iMjQzLjM1OTk5OTk5OTk5OTk5IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[430.56,0,917.28,515.84],"zoomedBox":[430.56,0,917.28,515.84],"label":"亲子套圈","url":null,"text":"### 亲子套圈\n**套圈摊如何把陈列变成亲子互动？**\n规则的参与入口是手里的圆环，观看焦点是前方成排玩具。孩子与家长共用一段摊前空间，挑选目标、伸手投掷与旁观形成不同动作。实景支持套圈及玩具陈列；插画不设价格、中奖概率或距离参数，避免把概念展示当作实摊规则。\n\n亲子游客站在套圈摊台前，手持彩色圆环，台面排列彩色玩具。\n\n资料：2026-02-18报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-hx-04-game-ring","object-zz-hx-04-toy-targets"],"label_anchor_points":[249.6,542.88],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":249.6,"anchorY":542.88,"labelX":249.6,"labelY":477.88,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-hx-04-game-ring":{"id":"object-zz-hx-04-game-ring","parentId":"scene-zz-hx-04","imageSrc":"assets/scenes/zz-hx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NzYiIGN5PSI3OTIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,616,900,1336],"zoomedBox":[495,616,900,1336],"label":"彩色套圈","url":null,"text":"### 彩色套圈\n报道照片显示亲子游客手持圆环参与套圈，圆环让观看者转为操作者。插画把备选圆环放在手边与篮内，便于看清互动入口；现场的投掷次数、套取规则及奖品归属没有可靠资料可补。\n- **它在庙会中的作用**：成为游客主动参与的操作物\n- **记载与补全**：2026-02-18报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[976,792],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":836,"labelY":697,"anchorX":976,"anchorY":792,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zz-hx-04-toy-targets":{"id":"object-zz-hx-04-toy-targets","parentId":"scene-zz-hx-04","imageSrc":"assets/scenes/zz-hx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0NDgiIGN5PSI1OTQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[392,88,797,808],"zoomedBox":[392,88,797,808],"label":"阶梯状玩具陈列","url":null,"text":"### 阶梯状玩具陈列\n实景配图能够确认彩色玩具沿摊台排列，画面把它们安排成不同高低以便寻找目标。玩具种类和排列密度为艺术补全，不能视为商户货单；此处强调陈列如何引导选择而非哪件奖品最值钱。\n- **它在庙会中的作用**：把商品陈列转化为游戏目标\n- **记载与补全**：2026-02-18报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[448,594],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":588,"labelY":499,"anchorX":448,"anchorY":594,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-zz-zy":{"id":"fair-zz-zy","parentId":"54749336813040","label":"郑州·中岳","imageSrc":"assets/worlds/zz-zy.webp","box":[407.16,1137.45,572.11,1419.69],"zoomedBox":[407.16,1137.45,572.11,1419.69],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iaGFsZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyODAiIGhlaWdodD0iMTM1MCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNoYWxmKSI+PHBhdGggZD0iTTE0MTkuNjksNDIzLjE0IEwxNDE3LjM5LDQyMS40MyBMMTQxNS45Miw0MTguNTEgTDE0MTAuNjgsNDIwLjI0IEwxNDA4LjM3LDQxOS44NyBMMTQwMC44Miw0MTQuNjIgTDEzOTcuMzEsNDE1LjA0IEwxMzkzLjMsNDE3LjM3IEwxMzg3Ljc4LDQxNy4zNyBMMTM4My40OSw0MTQuMDEgTDEzODEuNTksNDE0LjE3IEwxMzc1LjM2LDQyMS4wNSBMMTM3My4xNyw0MjUuMSBMMTM2OS4zOSw0MjcuOSBMMTM2MC4zMSw0MjcuMTYgTDEzNTMuNjgsNDMwLjcyIEwxMzQ1LjM4LDQzMi41MyBMMTM0MC41Niw0MzIuMDEgTDEzMzcuOTMsNDI5LjYzIEwxMzM2LjE2LDQyNi4zMiBMMTMzNC4wOSw0MjQuMDkgTDEzMzAuODgsNDIzLjE1IEwxMzI2LjQ1LDQyMy41MiBMMTMyNC44Miw0MjQuNDMgTDEzMTguNzksNDI2LjAyIEwxMzE2LjEzLDQyNS4xMyBMMTMxNS4wNyw0MjMuMjYgTDEzMTIuMjksNDIwLjk0IEwxMzA4LjcyLDQyMC44MiBMMTMwMS4zMiw0MTkuODEgTDEyOTguMDcsNDE1Ljk5IEwxMjkzLjg4LDQxMi42OSBMMTI5Mi4xMyw0MTIuMDQgTDEyODYuODIsNDEyLjUgTDEyODMuMiw0MTMuODcgTDEyNzkuNzIsNDE0LjQ3IEwxMjc0LjUsNDEzLjggTDEyNzAuNyw0MTIuNzggTDEyNzAuMjgsNDA4LjUxIEwxMjY2LjYzLDQwNy4xNiBMMTI2MC41Niw0MDkuMzIgTDEyNTguMTEsNDExLjUyIEwxMjU0LjUxLDQxNiBMMTI1Mi41NCw0MTcuMjkgTDEyNDkuMiw0MTcuODkgTDEyNDQuNDEsNDE1LjU0IEwxMjM4Ljg5LDQxNS4zMSBMMTIzNS43Nyw0MTYuOTkgTDEyMzQuOSw0MTguNTEgTDEyMzQuNDUsNDIxLjc2IEwxMjMyLjcxLDQyNS41NSBMMTIyNy4wNSw0MjcuNCBMMTIyMy42NCw0MjguODkgTDEyMTYuMTYsNDMwLjk1IEwxMjE3LjY5LDQzNy40MiBMMTIxMi4zMiw0MzcuOSBMMTIxMC4xMSw0NDAgTDEyMDEuMTgsNDQxLjYzIEwxMTk3LjI5LDQ0MC42MyBMMTE5NC41NSw0MzcuNjkgTDExOTAuNjYsNDM1LjYxIEwxMTg4LjQ5LDQzNS43MyBMMTE4Ny43OCw0MzcuMzcgTDExODUuMzQsNDM5LjMxIEwxMTc5LjExLDQ0My4wOSBMMTE3OC4xOSw0NDIuOTggTDExNzMuNjcsNDM5LjM4IEwxMTcxLjQ0LDQzOC4yOCBMMTE2OC4wOSw0MzguMSBMMTE2Ny4wNyw0MzguODggTDExNjUuOTYsNDQyLjcgTDExNjQuNjksNDQzLjQ1IEwxMTYyLjI1LDQ0Ny43MSBMMTE1OS40NSw0NDcuNCBMMTE1Ny4zMSw0NDUuNzkgTDExNTQuODMsNDQ3LjU0IEwxMTU0LjAzLDQ1MS4yNiBMMTE1NC4xNyw0NTMuNTYgTDExNTUuNDMsNDU1LjA3IEwxMTU5LjE3LDQ1NC4wMiBMMTE2MC45LDQ1NC42NyBMMTE2Ni4zLDQ1NC43NiBMMTE2OC43Myw0NTQuMDYgTDExNzAuOTksNDU0LjU1IEwxMTcyLjc3LDQ1Ni42OSBMMTE3Mi42LDQ1OS44IEwxMTcxLjQzLDQ2MC43NyBMMTE3Mi44OCw0NjQuMzMgTDExNzguNDQsNDY3LjQyIEwxMTc2Ljk5LDQ3MC4xNyBMMTE3NC4wOCw0NzAuMzQgTDExNzEuMzIsNDc0LjI5IEwxMTY5Ljg0LDQ3My45NyBMMTE2Ny4xOSw0NzEuNjcgTDExNjQuOTQsNDcwLjk5IEwxMTYxLjUxLDQ3Mi44OSBMMTE1Ny44Nyw0NzQuMTUgTDExNTcuNjgsNDc2LjYgTDExNTguOTMsNDgwLjEzIEwxMTU4LjAyLDQ4Mi42NSBMMTE2MS4wNSw0ODYuMzUgTDExNjAuMDUsNDg5LjAxIEwxMTU2Ljg4LDQ4OC45OSBMMTE1Ni44NCw0ODkuNzkgTDExNTkuNzUsNDkwLjI1IEwxMTYwLjc2LDQ5My4yNiBMMTE1OS42LDQ5Ni4yOSBMMTE2MC45LDQ5OC4wMyBMMTE2My44OCw0OTcuNzEgTDExNjQuMjUsNTAwLjAxIEwxMTY2LjgxLDUwMi44MiBMMTE2Ny4wNSw1MDQuNTcgTDExNjkuMjUsNTA3LjUgTDExNzMuMDMsNTA3Ljk0IEwxMTc2LjU3LDUwNy40IEwxMTgwLjg1LDUwNy4zOCBMMTE4My43Niw1MDguODIgTDExODYuOTYsNTA5LjMzIEwxMTg1LjQ0LDUxMS4xMSBMMTE4MC4wNCw1MTEuMDUgTDExNzYuNjIsNTEyLjI4IEwxMTc1LjgyLDUxNS45NiBMMTE3Ni4xNCw1MTguMjUgTDExNzQuNzksNTIyLjI2IEwxMTc1LjMzLDUyMy41IEwxMTcxLjk5LDUyNS4zOSBMMTE3MC4yOCw1MjMuNjcgTDExNjMuOTIsNTI0LjE2IEwxMTYyLjcyLDUyMy4wOCBMMTE1OS4zMyw1MjMuMzYgTDExNTMuMzEsNTIyLjg5IEwxMTUxLjgsNTIxLjA5IEwxMTQ3LjM5LDUxOC4xNSBMMTE0Ni4wMyw1MTkuMzYgTDExNDAuOTUsNTIwLjIxIEwxMTQxLjY4LDUyNS4zNyBMMTE0MS4yMyw1MzMuMTYgTDExNDAuMjUsNTM1Ljc0IEwxMTM4LjkyLDUzNy4wMSBMMTE0MC4xMSw1MzkuOSBMMTEzOS42OCw1NDIuNDMgTDExMzcuODgsNTQzLjM5IEwxMTM3LjQ1LDU0NS4zNiBMMTEzOS4wNSw1NDUuOTggTDExMzguNjQsNTQ5LjY3IEwxMTM5LjU0LDU1MiBMMTE0NC4wNCw1NTAuNTMgTDExNDQuNjYsNTUyLjk4IEwxMTQ3Ljc3LDU1My4zMyBMMTE0OS43Myw1NTMuNzMgTDExNTAuMDksNTU2LjQ4IEwxMTU0LjQ4LDU1NC40NiBMMTE1Ni43Myw1NTUuOTYgTDExNTguNDIsNTU1LjkxIEwxMTYyLjQ2LDU1OS44NCBMMTE2MC4xLDU2MC45MSBMMTE1OS45Myw1NjQuMDQgTDExNjIuODEsNTYzLjA1IEwxMTY2LjAzLDU2My45OSBMMTE2OC4wOSw1NjMuMjIgTDExNzMuMzUsNTY0Ljk2IEwxMTc3Ljg0LDU2NC41NSBMMTE4MS4xOSw1NjMuMDYgTDExODIuNDYsNTY0LjAzIEwxMTg4LjUxLDU2NC4zNCBMMTE5Mi4zMyw1NjMuNDUgTDExOTMuNzYsNTY1LjcxIEwxMTk1LjA0LDU2NS45NyBMMTE5Ni44Myw1NjguMDEgTDEyMDEuMDMsNTY3Ljg2IEwxMjA0LjA1LDU2OC44NyBMMTIwNS4zNiw1NzEuMTUgTDEyMDguMjQsNTcyLjExIEwxMjEwLjQzLDU3MS44MyBMMTIxNi42OCw1NjkuNzEgTDEyMTguNDYsNTcxLjE3IEwxMjIyLjg0LDU2Ny43MSBMMTIyNC41NSw1NjUuNzYgTDEyMjQuNDQsNTY0LjUzIEwxMjI2LjgyLDU2MC43NiBMMTIyOS40Myw1NjAuODIgTDEyMzEuODksNTU3Ljg2IEwxMjMyLjEyLDU1NS42NyBMMTIzNC4xOSw1NTQuNjkgTDEyNDAuMjgsNTU0Ljk3IEwxMjQxLjg3LDU1My44MyBMMTI0MS45Miw1NTEuODcgTDEyNDkuMDgsNTUxLjY4IEwxMjQ4Ljk2LDU0Ni43OSBMMTI1MC4xNyw1NDQuNjMgTDEyNDkuMzMsNTQyLjg3IEwxMjUxLjA4LDUzOS43MyBMMTI1NS41MSw1MzkuNzkgTDEyNTYuNDksNTQxLjY4IEwxMjU5LjU4LDU0My4xNSBMMTI1OC45NCw1NDUuNDQgTDEyNjMuMjQsNTQ2LjMxIEwxMjY1LjQ3LDU0NS45NiBMMTI2Ny45NSw1NDYuNTQgTDEyNjYuNDIsNTUxLjAyIEwxMjY3LjgyLDU1Mi4zNSBMMTI3MC42Myw1NTIuMTMgTDEyNzYuMzQsNTU1LjczIEwxMjc4LjYsNTU2LjU1IEwxMjgwLjc2LDU1My44MiBMMTI4My43NCw1NTQuNzkgTDEyODYuMDMsNTUzLjg1IEwxMjg3LjQsNTU1LjQzIEwxMjg3LjE2LDU1Ny4wNiBMMTI4OS41Niw1NTkuNDggTDEyOTQuNjQsNTYwLjkzIEwxMjk2LjU1LDU1OS4zOCBMMTI5OC45OSw1NTkuMDMgTDEzMDIuOTcsNTYwLjUzIEwxMzA0LjUsNTYwLjU1IEwxMzA3LjQ4LDU2Mi43OCBMMTMwOS4zMSw1NjUuOCBMMTMxMS4xLDU2Ni4xNSBMMTMxMy44NSw1NjkuMiBMMTMxNS45Nyw1NjkuMTIgTDEzMTcuODMsNTY3LjUgTDEzMjIuMjcsNTY4LjgyIEwxMzIxLjcsNTY1Ljk1IEwxMzI0LjE0LDU2NS42IEwxMzI0LjE2LDU2My4yMyBMMTMyNi43Nyw1NjIuMjQgTDEzMjguNTgsNTU5LjQ5IEwxMzMyLjMzLDU2MC40MSBMMTMzNi4xOSw1NjAuMjMgTDEzMzkuMTgsNTU3LjE3IEwxMzM4LjgyLDU1Ni4zMyBMMTM0MS4xOSw1NTUuMSBMMTM0Ni41Nyw1NTguMjMgTDEzNDkuNjIsNTU4LjM5IEwxMzQ5LjkzLDU1Ny4zOCBMMTM1NS42Myw1NTYuOCBMMTM1Ni41Niw1NTcuMjQgTDEzNTcuMDYsNTUyLjU3IEwxMzU1LjUzLDU1MC44MyBMMTM1Ni41Miw1NDcuNTYgTDEzNTUuMjYsNTQyLjA5IEwxMzU1LjE5LDUzOC4yNiBMMTM1Ny43Miw1MzIuMzkgTDEzNTkuOTYsNTI4LjU3IEwxMzYxLjU5LDUyOC45OSBMMTM2Mi4yNCw1MzAuNjcgTDEzNjQuOTUsNTMxIEwxMzY2LjQ4LDUyOC40NSBMMTM2OC41Miw1MjguOTEgTDEzNjguNDYsNTMyLjkxIEwxMzcyLjIsNTMxLjk0IEwxMzc2LjMxLDUzMi43NiBMMTM3OS4zNyw1MzEuOTcgTDEzODEuODgsNTMwLjU3IEwxMzgyLjIyLDUyNy40OCBMMTM4MS42Miw1MjUuNjIgTDEzNzkuNjksNTI0Ljk3IEwxMzc5Ljk0LDUyMi42OSBMMTM4Mi4zOSw1MjAuNzggTDEzODQuNzUsNTE3LjI4IEwxMzg5LjksNTIwLjMzIEwxMzkxLjM4LDUyMi4zOSBMMTM5My44Myw1MjIuNTEgTDEzOTUuOSw1MTkuOTQgTDEzOTUuODIsNTE3Ljc3IEwxMzk3LjAyLDUxMC4yIEwxMzk4LjMyLDUwNS4wNSBMMTQwMC40NCw1MDIuMjcgTDE0MDIuNTcsNTAxLjA5IEwxNDAyLjIxLDQ5OC45MiBMMTQwMy4yNiw0OTcuNTQgTDE0MDMuOSw0OTQuMjEgTDE0MDEuNzYsNDkzLjcyIEwxNDAyLjE4LDQ5MS42MSBMMTQwNS41NCw0OTIuMiBMMTQwNS40Niw0OTQuNTMgTDE0MDcuMjQsNDk0LjIgTDE0MDYuNjcsNDkxLjM2IEwxNDA3LjgsNDg5LjYxIEwxNDA2LjQ1LDQ4Mi42NSBMMTQwOC4zNCw0ODAuNjIgTDE0MDcuOCw0NzUuODggTDE0MDcuOTEsNDcxLjg0IEwxNDA0LjcyLDQ2OC40OSBMMTQwNC4yMSw0NjQuOTQgTDE0MDcuOTUsNDU5LjM2IEwxNDEwLjU4LDQ1Ny4zMyBMMTQwOC41OSw0NTQuNCBMMTQwMy4zOSw0NDkuNjYgTDE0MDEuMiw0NDUuOTkgTDE0MDMuMzEsNDQ0LjMzIEwxNDA4LjczLDQ0My41OSBMMTQxMy4wMyw0NDQuMzMgTDE0MTUuNzYsNDQyLjcyIEwxNDE3Ljg4LDQzNi4zNCBMMTQxOS42Niw0MjUuOTIgTDE0MTkuNjksNDIzLjE0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+","url":null,"text":"### 中岳庙会\n中岳庙会的辨识度来自山岳信仰、古建院落与庙前交易的并置。沿牌坊和古柏认识固定场地，再走近河洛大鼓、持册诵读与糖人香袋，就能看见不同人群如何使用同一座庙宇周边的空间。","childrenIds":["scene-zz-zy-02","scene-zz-zy-03","scene-zz-zy-04"],"label_anchor_points":[1238,490],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1238,"anchorY":490,"labelX":1238,"labelY":425,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-zz-zy-02":{"id":"scene-zz-zy-02","parentId":"fair-zz-zy","imageSrc":"assets/scenes/zz-zy-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iOTgxLjc2IiBjeT0iMjU3LjQiIHJ4PSIzMTYuMTYiIHJ5PSIxOTEuODgiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[65.52000000000001,665.6,449.28,1297.92],"zoomedBox":[65.52000000000001,665.6,449.28,1297.92],"label":"牌坊与古柏殿院","url":null,"text":"### 牌坊与古柏殿院\n**古柏和殿院为什么适合一起看？**\n从高处观看，建筑序列被大片树冠包围，赶会不再只是一条摊街，而是在有深度的场所中发生。此图依据建筑专题的航拍资料，适合解释院落之间的层次；零散游客用于说明尺度，不证明某届庙会的实际客流或树木季相。\n\n航拍中岳庙，古建院落沿直线展开，周围大片绿树、远处山体；属场地背景。\n\n资料：2025报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-zy-02-courtyard-axis"],"label_anchor_points":[965.1199999999999,234],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":965.1199999999999,"anchorY":234,"labelX":965.1199999999999,"labelY":169,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-zy-02-courtyard-axis":{"id":"object-zz-zy-02-courtyard-axis","parentId":"scene-zz-zy-02","imageSrc":"assets/scenes/zz-zy-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MTYiIGN5PSI0NzciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[274,456,679,1176],"zoomedBox":[274,456,679,1176],"label":"殿院轴线","url":null,"text":"### 殿院轴线\n建筑报道的航拍图可见院落沿直线展开，树冠分布在两侧。这个关系帮助读者理解由门进入院、再向内延伸的空间层级，但只能作场地阅读，不能代替当届开放区域和游览路线图。\n- **它在庙会中的作用**：让庙前与庙内的尺度关系可见\n- **记载与补全**：2025报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[816,477],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":676,"labelY":382,"anchorX":816,"anchorY":477,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zz-zy-03":{"id":"scene-zz-zy-03","parentId":"fair-zz-zy","imageSrc":"assets/scenes/zz-zy-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzk5LjM2IiBjeT0iNTI4Ljg0IiByeD0iMzMyLjc5OTk5OTk5OTk5OTk1IiByeT0iMTYzLjc5OTk5OTk5OTk5OTk4IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[365.04,66.56,692.64,732.16],"zoomedBox":[365.04,66.56,692.64,732.16],"label":"河洛大鼓","url":null,"text":"### 河洛大鼓\n**河洛大鼓怎样把听众聚到一张桌旁？**\n舞台感并不只来自高台。红布桌、小鼓和艺人的朝向构成表演中心，观众在近距离停下来听，树荫与院落提供背景。来源记录了艺人围坐和长衫人物，插画将听与演的关系拉近；人物身份、人数与具体演唱段落未据图指定。\n\n红布桌标有河洛大鼓传承人郝总善姓名，艺人围坐表演，旁有蓝色长衫人物。\n\n资料：2025刊载，拍摄年份未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-zy-03-story-drum","object-zz-zy-03-red-tablecloth"],"label_anchor_points":[432.64,570.96],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":432.64,"anchorY":570.96,"labelX":432.64,"labelY":505.96000000000004,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-zy-03-story-drum":{"id":"object-zz-zy-03-story-drum","parentId":"scene-zz-zy-03","imageSrc":"assets/scenes/zz-zy-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2MjQiIGN5PSI1MTMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[310,264,715,984],"zoomedBox":[310,264,715,984],"label":"曲艺小鼓","url":null,"text":"### 曲艺小鼓\n考察图文中的河洛大鼓表演围绕红布桌展开，小鼓把视觉注意力集中到艺人手边。它是理解曲艺现场的具体入口，但本包没有核听录音，不能由画中的击鼓姿势还原固定节拍或所唱书目。\n- **它在庙会中的作用**：标出曲艺表演的声音与动作中心\n- **记载与补全**：2025刊载，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[624,513],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":764,"labelY":418,"anchorX":624,"anchorY":513,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zz-zy-03-red-tablecloth":{"id":"object-zz-zy-03-red-tablecloth","parentId":"scene-zz-zy-03","imageSrc":"assets/scenes/zz-zy-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NjgiIGN5PSI2NzUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[472,408,877,1128],"zoomedBox":[472,408,877,1128],"label":"红布表演桌","url":null,"text":"### 红布表演桌\n红布桌将乐器、艺人与听众区分开，也把临时表演从古柏、殿墙的背景中突出出来。原配图可证红布桌与围坐演出，桌面尺寸、装饰纹样及插画里的桌上物件数量属于绘画整理。\n- **它在庙会中的作用**：构成近距离演出的临时边界\n- **记载与补全**：2025刊载，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[768,675],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":908,"labelY":580,"anchorX":768,"anchorY":675,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zz-zy-04":{"id":"scene-zz-zy-04","parentId":"fair-zz-zy","imageSrc":"assets/scenes/zz-zy-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTQ0Ny42Nzk5OTk5OTk5OTk4IiBjeT0iNjEzLjA3OTk5OTk5OTk5OTkiIHJ4PSIyMTYuMzIwMDAwMDAwMDAwMDUiIHJ5PSIzMTMuNTYiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[299.52,1231.36,926.64,1664],"zoomedBox":[299.52,1231.36,926.64,1664],"label":"糖人与香袋摊","url":null,"text":"### 糖人与香袋摊\n**糖人和香袋为什么能讲出两种赶会动作？**\n一个适合举起观看，一个可以从悬挂处拿下来挑选。糖人的透光轮廓与香袋的布面纹样让摊位形成高低不同的陈列层，摊主和亲子游客的手势把交易变成交流。品类依据考察文字，混合摆放方式并非一张历史摊位照片的复原。\n\n2025考察稿记录糖人、香袋、小饰品、烧饼等摊位商品；无独立摊位实拍依据。\n\n资料：2025刊载\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zz-zy-04-sugar-figure","object-zz-zy-04-scent-pouch"],"label_anchor_points":[1447.68,692.64],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1447.68,"anchorY":692.64,"labelX":1447.68,"labelY":627.64,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zz-zy-04-sugar-figure":{"id":"object-zz-zy-04-sugar-figure","parentId":"scene-zz-zy-04","imageSrc":"assets/scenes/zz-zy-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIzNTIiIGN5PSI1MDQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[302,0,707,720],"zoomedBox":[302,0,707,720],"label":"竹签糖人","url":null,"text":"### 竹签糖人\n考察稿列有糖人这一商品，图中以竹签举起的金黄色轮廓让儿童能够近距离观看。资料没有独立摊位照片，所以动物造型、插架方式和数量是创作；不能把画面当成2026商户的实售目录。\n- **它在庙会中的作用**：形成能拿取、能观看的商品焦点\n- **记载与补全**：2025刊载。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[352,504],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":492,"labelY":409,"anchorX":352,"anchorY":504,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zz-zy-04-scent-pouch":{"id":"object-zz-zy-04-scent-pouch","parentId":"scene-zz-zy-04","imageSrc":"assets/scenes/zz-zy-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NTIiIGN5PSIzNzgiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[176,392,581,1112],"zoomedBox":[176,392,581,1112],"label":"悬挂香袋","url":null,"text":"### 悬挂香袋\n香袋也是考察稿确认的摊上品类。插画用软质袋身、流苏和挂线与糖人的硬亮轮廓形成材质对照，使读者注意挑选、递看这一交易动作；具体纹样、填充物和制作工艺没有来源支持。\n- **它在庙会中的作用**：表现随身小物与面对面挑选\n- **记载与补全**：2025刊载。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[752,378],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":892,"labelY":283,"anchorX":752,"anchorY":378,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-kf-ws":{"id":"fair-kf-ws","parentId":"54749336813040","label":"开封","imageSrc":"assets/worlds/kf-ws.webp","box":[399.24,1355.19,586.63,1616.75],"zoomedBox":[399.24,1355.19,586.63,1616.75],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzU2LjU2LDU1Ny4yNCBMMTM1OC4yOCw1NTguMTUgTDEzNTkuMTYsNTU5Ljk0IEwxMzU4LjU3LDU2Mi43OCBMMTM2MC4xOSw1NjQuNzggTDEzNjIuMzcsNTYzLjE2IEwxMzY1Ljc2LDU2Mi40NCBMMTM2Ni4zNCw1NjMuODYgTDEzNzEuNDMsNTY1LjE0IEwxMzcxLjQ5LDU2Ny4zNyBMMTM3Mi45NSw1NjcuMyBMMTM3My44Niw1NjkuMDggTDEzNzYuOCw1NjkuNTkgTDEzNzYuMzYsNTcyLjM2IEwxMzc4LjE4LDU3MS44MyBMMTM3OC43Myw1NzQuMyBMMTM4MC4yNiw1NzYuNjkgTDEzODUuODYsNTc3LjY0IEwxMzg3LjcxLDU3NS41MyBMMTM4OS4yMSw1NzYuMDcgTDEzOTEuMDUsNTc0LjgyIEwxMzkyLjUzLDU3Ny4yMyBMMTM5My41Niw1NzQuOTkgTDEzOTYuNzEsNTc2LjcxIEwxMzk4LjUsNTc5LjY5IEwxMzk3LjM1LDU4MC43IEwxMzk4LjU2LDU4MS45MyBMMTM5OC43Niw1ODQuNjQgTDE0MDEuMjcsNTg1LjI3IEwxNDAyLjQ4LDU4Ni42MyBMMTQwNy4zOCw1ODUuNzYgTDE0MDguMzYsNTgzLjE1IEwxNDE1LjQ3LDU4Mi4yIEwxNDE2LjM0LDU3OC4zNyBMMTQxNy43Myw1NzYuODcgTDE0MjQuNTQsNTc3LjA1IEwxNDI3LjA3LDU3NC40NiBMMTQyOC41MSw1NzMuMyBMMTQyOS44NCw1NjkuMjQgTDE0MzIuMzQsNTY4Ljg3IEwxNDM0Ljg0LDU3MC44NiBMMTQ0MC4wNiw1NzAuOTYgTDE0NDIuOTUsNTc0LjQ3IEwxNDQ1LjI0LDU3NS41MiBMMTQ1MC43Niw1NzYuMjcgTDE0NTQuNTQsNTc1LjMzIEwxNDU2Ljc4LDU3MS40MSBMMTQ2MC4wMyw1NzAuOTkgTDE0NjEuMTEsNTcwLjE4IEwxNDYzLjk0LDU2NC44OCBMMTQ2MS40Niw1NjMuMzggTDE0NTkuMjIsNTYzLjAyIEwxNDU4LjA3LDU2MS40OSBMMTQ1OS45NSw1NjAuMzkgTDE0NjAuMjQsNTU2LjY4IEwxNDU4LjY3LDU1NS44NyBMMTQ2MC45Niw1NTUuMjkgTDE0NjAuNzIsNTU3LjE4IEwxNDYzLjQsNTU5LjAxIEwxNDY1LjA5LDU1OS4wMiBMMTQ2NS4xMyw1NTYuNyBMMTQ2OC4zOSw1NTYuODIgTDE0NjkuNjQsNTU3Ljg2IEwxNDcxLjEzLDU2MC44NCBMMTQ3NC4xNCw1NjEuMzQgTDE0NzUuOTMsNTYwLjQ5IEwxNDc2LjkzLDU2Mi4xMiBMMTQ3Ny42Nyw1NjcuNTcgTDE0ODIsNTY2Ljk1IEwxNDgxLjkyLDU2OS44OCBMMTQ4Mi45NSw1NzAuOCBMMTQ4OS4yMSw1NjkuNSBMMTQ5MS41LDU3MC4xMiBMMTQ5My4yNyw1NzIuMzcgTDE0OTcuNTIsNTcyLjE5IEwxNTAwLjAyLDU3NC44MSBMMTUwMy44Miw1NzQuODIgTDE1MDYuMDUsNTc2LjE3IEwxNTEwLjM2LDU3Ni4xMyBMMTUxMi41NSw1NzYuODUgTDE1MTQuNDUsNTc5Ljg3IEwxNTE1LjY3LDU4MC41IEwxNTE5Ljg2LDU3OC41OSBMMTUyMSw1NzcuNTEgTDE1MjIuMTEsNTczLjg4IEwxNTI1LjIzLDU3My42MSBMMTUyNi41Niw1NzIuMzYgTDE1MzEuMTgsNTcyLjg0IEwxNTM0LjY4LDU3MC43NyBMMTUzNC45Niw1NjcuNjQgTDE1MzcuMzQsNTY3LjkyIEwxNTQxLjUzLDU3MC4xIEwxNTQ2Ljk0LDU3MS4zIEwxNTQ3Ljk4LDU2Ny4wNCBMMTU0NC4zNCw1NjMuMjcgTDE1NDIuMSw1NjIuMjcgTDE1NDAuNTEsNTU2LjkzIEwxNTM5LjIzLDU1NS42NyBMMTU0MC4zOSw1NDguMzQgTDE1NDMuNjUsNTQ3LjUxIEwxNTQ1LjQzLDU0NC41NCBMMTU0Mi45LDU0Mi45OSBMMTU0Mi43OSw1NDEuNjggTDE1MzguNSw1NDAuOTcgTDE1MzcuOTIsNTM4LjYxIEwxNTM5LjA2LDUzOC4zOCBMMTUzOC42NCw1MzQuMzEgTDE1NDAuOTcsNTMzLjIxIEwxNTM5LjQxLDUzMi41NiBMMTUzOS44Niw1MjkuMDkgTDE1NDEuMTMsNTI2LjYgTDE1NDIuNCw1MjguNiBMMTU0My45OCw1MjkuNDEgTDE1NDUuMDMsNTI2Ljk2IEwxNTQ2LjkzLDUyNy4wMiBMMTU0OC4zNSw1MjUuNTMgTDE1NDkuOTIsNTIxLjkgTDE1NTEuMSw1MjEuNiBMMTU1MS44MSw1MTguNTkgTDE1NDkuNDEsNTE5LjI5IEwxNTUwLjkyLDUxNS41NiBMMTU1MC4xOSw1MTQuMDcgTDE1NTEuNDksNTExLjA2IEwxNTQ5LjY5LDUxMC4yOSBMMTU1MC45Niw1MDguNjcgTDE1NTAuNDMsNTA3LjE0IEwxNTQ4LjgzLDUwNy4zOCBMMTU0OC45OSw1MDEuNDMgTDE1NDguNTIsNDk4LjY0IEwxNTQ3LjA0LDQ5NC45MSBMMTU0Ny44Miw0OTIuMzggTDE1NDcuMjksNDg4LjMgTDE1NDcuOTIsNDg1LjIzIEwxNTQ2LjM4LDQ4My42IEwxNTQ2LjkzLDQ4MS41OSBMMTU0OC43LDQ4MC4zMyBMMTU1Mi42Miw0NzkuOTQgTDE1NTQuMzQsNDc5LjEzIEwxNTU0LjUsNDc2LjkzIEwxNTUzLjU3LDQ3NS44MiBMMTU0OS4wNCw0NzMuMyBMMTU0NS45OCw0NzMuMjMgTDE1NDEuNTIsNDc1LjU0IEwxNTM5LjY5LDQ3NC41NyBMMTUzOS4yMyw0NzAuMzUgTDE1MzYuNDMsNDY5LjQgTDE1MzkuODQsNDY1LjA2IEwxNTM5Ljk0LDQ2My42OCBMMTUzNS40OSw0NjIuMTkgTDE1MzQuMTIsNDYwLjI4IEwxNTM0LjIzLDQ1OC4yNCBMMTUzNS40OCw0NTcuNTIgTDE1NDEuMzUsNDU3LjEzIEwxNTQxLjQ2LDQ1NS43IEwxNTQzLjM4LDQ1NS43NiBMMTU0Ni41NCw0NTguNTcgTDE1NTEuOTEsNDYxLjg0IEwxNTU0LjU0LDQ2Mi4xNiBMMTU2MC4yLDQ1OC45NyBMMTU2Mi43Niw0NTkuMDEgTDE1NjQuMjQsNDU4LjE4IEwxNTY2LjYyLDQ1OS4wNyBMMTU3Mi4xNCw0NTYuMzkgTDE1NzMuNzUsNDU2LjA0IEwxNTg2LjA0LDQ1Ni40MSBMMTU4OC45NSw0NTIuNzIgTDE1OTIuOCw0NTEuNjYgTDE1OTUuNTEsNDU0LjI4IEwxNTk3LjI5LDQ1My45OSBMMTU5OS40OCw0NTIuMzEgTDE2MDAuMTMsNDUwLjA4IEwxNjAzLjc4LDQ1MS4yMSBMMTYwNC42NCw0NDguODYgTDE2MTMuMTksNDUwLjU3IEwxNjE0LjI0LDQ0OS4wMSBMMTYxMi4xMiw0NDcuMDggTDE2MTQuNzQsNDQ3LjQ1IEwxNjE2Ljc1LDQ0My4wNiBMMTYxNC42NSw0MzkuODcgTDE2MTIuMjgsNDM4Ljc2IEwxNjExLjQ5LDQzMy4yMSBMMTYxMS43Nyw0MzEuMTMgTDE2MTMuMzUsNDI4LjcgTDE2MTMuOTEsNDI1Ljk3IEwxNjExLjQ5LDQyNC43OCBMMTYwNS4wMyw0MjQuMjQgTDE2MDQuNiw0MjEuNjYgTDE2MDYuMzEsNDE3LjYzIEwxNjA4LjI2LDQxNy4xMyBMMTYwNy42OSw0MTMuNzIgTDE2MDUuNjQsNDE0LjI0IEwxNjA0LjQsNDE1LjkgTDE1OTkuMzksNDEzLjI5IEwxNTk1Ljk4LDQxNC4zMSBMMTU5Ni4wNCw0MTIuMjggTDE1OTQuMDIsNDA5LjI5IEwxNTkxLjEzLDQwOC41IEwxNTkxLjQ3LDQwNC44NiBMMTU5MC41NSw0MDMuNzkgTDE1ODYuNDIsNDA0LjYxIEwxNTgwLjU1LDQwNC43IEwxNTc2LjE2LDQwNy45NyBMMTU3My41LDQwOC45NSBMMTU3MS4xMiw0MTEuMTcgTDE1NjkuNDUsNDA5LjkyIEwxNTY3Ljk2LDQwNy40IEwxNTU3LjE4LDQwNy4xIEwxNTU0LjE1LDQwOS4xNiBMMTU1Mi4wOSw0MTEuODcgTDE1NTAuMjQsNDA5LjggTDE1NDkuMSw0MDcuMiBMMTU0NS42NSw0MDYuMTUgTDE1NDMuOSw0MDMuOTkgTDE1NDQuNjcsMzk5LjgyIEwxNTQxLjk1LDM5OS4yNCBMMTUzOS45NCw0MDQuMTggTDE1MzMuODgsNDAyLjQ5IEwxNTMzLjQyLDQwMiBMMTUzMS43Niw0MDEuNjEgTDE1MjguODQsNDAzLjI3IEwxNTIyLjM1LDQwOS44NCBMMTUyMC42LDQxMC4zMiBMMTUxNy43NCw0MTMuNyBMMTUxNy44LDQxNi40MiBMMTUyMi43OCw0MjEuMTQgTDE1MjQuODIsNDIzLjY3IEwxNTI0LjAyLDQyNy4xNSBMMTUyMS40Niw0MjkuNCBMMTUxNi4zMiw0MzAuMDggTDE1MTQuNTIsNDMwLjgyIEwxNTExLjY3LDQyOS4yNSBMMTUwOS4xMSw0MjguNzQgTDE1MDYuMSw0MjUuNDIgTDE1MDIuNDYsNDI3Ljc2IEwxNDk3LjUxLDQyNi4yOCBMMTQ4OC41OSw0MjQuNjQgTDE0ODMuMDUsNDI2LjIxIEwxNDc5Ljk0LDQyNy42MyBMMTQ3NC44LDQyOC41NCBMMTQ2MS41LDQyNC4xOCBMMTQ1Ni44MSw0MjAuNDggTDE0NTMuNTcsNDE4LjUxIEwxNDUwLjI2LDQxOS4xIEwxNDQ3LjI4LDQyMy4xNiBMMTQ0NC4xMyw0MjUuNjMgTDE0NDIuMTgsNDI1Ljg0IEwxNDMxLjY5LDQyNS42IEwxNDI0LjA4LDQyNi4zIEwxNDIwLjgxLDQyNC40OCBMMTQxOS42OSw0MjMuMTQgTDE0MTkuNjYsNDI1LjkyIEwxNDE3Ljg4LDQzNi4zNCBMMTQxNS43Niw0NDIuNzIgTDE0MTMuMDMsNDQ0LjMzIEwxNDA4LjczLDQ0My41OSBMMTQwMy4zMSw0NDQuMzMgTDE0MDEuMiw0NDUuOTkgTDE0MDMuMzksNDQ5LjY2IEwxNDA4LjU5LDQ1NC40IEwxNDEwLjU4LDQ1Ny4zMyBMMTQwNy45NSw0NTkuMzYgTDE0MDQuMjEsNDY0Ljk0IEwxNDA0LjcyLDQ2OC40OSBMMTQwNy45MSw0NzEuODQgTDE0MDcuOCw0NzUuODggTDE0MDguMzQsNDgwLjYyIEwxNDA2LjQ1LDQ4Mi42NSBMMTQwNy44LDQ4OS42MSBMMTQwNi42Nyw0OTEuMzYgTDE0MDcuMjQsNDk0LjIgTDE0MDUuNDYsNDk0LjUzIEwxNDA1LjU0LDQ5Mi4yIEwxNDAyLjE4LDQ5MS42MSBMMTQwMS43Niw0OTMuNzIgTDE0MDMuOSw0OTQuMjEgTDE0MDMuMjYsNDk3LjU0IEwxNDAyLjIxLDQ5OC45MiBMMTQwMi41Nyw1MDEuMDkgTDE0MDAuNDQsNTAyLjI3IEwxMzk4LjMyLDUwNS4wNSBMMTM5Ny4wMiw1MTAuMiBMMTM5NS44Miw1MTcuNzcgTDEzOTUuOSw1MTkuOTQgTDEzOTMuODMsNTIyLjUxIEwxMzkxLjM4LDUyMi4zOSBMMTM4OS45LDUyMC4zMyBMMTM4NC43NSw1MTcuMjggTDEzODIuMzksNTIwLjc4IEwxMzc5Ljk0LDUyMi42OSBMMTM3OS42OSw1MjQuOTcgTDEzODEuNjIsNTI1LjYyIEwxMzgyLjIyLDUyNy40OCBMMTM4MS44OCw1MzAuNTcgTDEzNzkuMzcsNTMxLjk3IEwxMzc2LjMxLDUzMi43NiBMMTM3Mi4yLDUzMS45NCBMMTM2OC40Niw1MzIuOTEgTDEzNjguNTIsNTI4LjkxIEwxMzY2LjQ4LDUyOC40NSBMMTM2NC45NSw1MzEgTDEzNjIuMjQsNTMwLjY3IEwxMzYxLjU5LDUyOC45OSBMMTM1OS45Niw1MjguNTcgTDEzNTcuNzIsNTMyLjM5IEwxMzU1LjE5LDUzOC4yNiBMMTM1NS4yNiw1NDIuMDkgTDEzNTYuNTIsNTQ3LjU2IEwxMzU1LjUzLDU1MC44MyBMMTM1Ny4wNiw1NTIuNTcgTDEzNTYuNTYsNTU3LjI0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 万岁山春节大庙会\n万岁山的春节大庙会依托武侠主题景区，把仿古楼阁、现代特技、参与游戏与夜间彩灯放在同一体验中。这里的六幅插画都以2024春节实景为底稿，适合观察观看方式的变化，不作为2026现场布置证明。","childrenIds":["scene-kf-ws-01","scene-kf-ws-03","scene-kf-ws-04"],"label_anchor_points":[1480.15,494.48],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1480.15,"anchorY":494.48,"labelX":1480.15,"labelY":429.48,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-kf-ws-01":{"id":"scene-kf-ws-01","parentId":"fair-kf-ws","imageSrc":"assets/scenes/kf-ws-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNDQ5LjI4MDAwMDAwMDAwMDAzIiBjeT0iMzI3LjYiIHJ4PSIzNDkuNDQiIHJ5PSIyMTUuMjgiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[112.32,99.84,542.88,798.72],"zoomedBox":[112.32,99.84,542.88,798.72],"label":"仿古楼阁与街巷","url":null,"text":"### 仿古楼阁与街巷\n**同样是仿古建筑，万岁山的庙会为何更像一座演艺街区？**\n楼阁提供成片可见的景区背景，前方开敞空间容纳密集游客，灯笼把屋檐与树枝连接成节庆层。这里重点是建筑、人群和演艺环境的关系，并非某座祭祀庙宇的仪程。图中游客人数和镜头位置为创作，不用于估算接待能力。\n\n成片游客聚集在仿古楼阁前，树枝上悬挂红色灯笼。\n\n资料：2024春节（报道日期2024-02-13）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-kf-ws-01-theme-pavilion"],"label_anchor_points":[482.55999999999995,290.16],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":482.55999999999995,"anchorY":290.16,"labelX":482.55999999999995,"labelY":225.16000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-kf-ws-01-theme-pavilion":{"id":"object-kf-ws-01-theme-pavilion","parentId":"scene-kf-ws-01","imageSrc":"assets/scenes/kf-ws-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NjAiIGN5PSIzNjkiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[166,600,571,1320],"zoomedBox":[166,600,571,1320],"label":"仿古楼阁","url":null,"text":"### 仿古楼阁\n2024现场图集记录仿古楼阁前聚集游客，说明景区建筑与节庆人群共同构成会场。楼阁的古风外观并不能直接证明其历史年代，页面以主题景区底景介绍，具体结构比例以原照片为参考而非测绘。\n- **它在庙会中的作用**：承载景区主题并形成观看背景\n- **记载与补全**：2024春节（报道日期2024-02-13）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[960,369],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":820,"labelY":274,"anchorX":960,"anchorY":369,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-kf-ws-03":{"id":"scene-kf-ws-03","parentId":"fair-kf-ws","imageSrc":"assets/scenes/kf-ws-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTMwNi4yMzk5OTk5OTk5OTk4IiBjeT0iMzQxLjY0IiByeD0iMzQxLjEyIiByeT0iMjI5LjMyMDAwMDAwMDAwMDAyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[112.32,965.1199999999999,570.96,1647.36],"zoomedBox":[112.32,965.1199999999999,570.96,1647.36],"label":"飞车表演","url":null,"text":"### 飞车表演\n**飞车表演的视线为什么从街面转向空中？**\n摩托车与骑手在高台之间形成腾空轮廓，游客的手机和仰视动作把注意力引向高处。图集确认这一表演场景，但画面不是机械结构图。两座高台的形制、距离与飞行轨迹在插画中经过整理，只用于解释观看关系，不提供操作参数。\n\n摩托车骑手在两座高台之间腾空，下方游客举手机拍摄。\n\n资料：2024春节（报道日期2024-02-13）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-kf-ws-03-stunt-bike","object-kf-ws-03-stunt-platform"],"label_anchor_points":[1248,243.36],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1248,"anchorY":243.36,"labelX":1248,"labelY":178.36,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-kf-ws-03-stunt-bike":{"id":"object-kf-ws-03-stunt-bike","parentId":"scene-kf-ws-03","imageSrc":"assets/scenes/kf-ws-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MzIiIGN5PSIyMDciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[4,472,409,1192],"zoomedBox":[4,472,409,1192],"label":"表演摩托车","url":null,"text":"### 表演摩托车\n现场图显示骑手与摩托车在两座高台之间腾空，车轮和身体轮廓是辨认节目的依据。图像只能证明拍摄瞬间的表演状态，不能推导车速、飞跃长度或训练方法；这些技术数据并未收录。\n- **它在庙会中的作用**：把表演焦点提升到观众上方\n- **记载与补全**：2024春节（报道日期2024-02-13）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[832,207],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":692,"labelY":112,"anchorX":832,"anchorY":207,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-kf-ws-03-stunt-platform":{"id":"object-kf-ws-03-stunt-platform","parentId":"scene-kf-ws-03","imageSrc":"assets/scenes/kf-ws-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMzkyIiBjeT0iMjc5IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[76,880,481,1600],"zoomedBox":[76,880,481,1600],"label":"高台设施","url":null,"text":"### 高台设施\n两座高台构成飞车表演可见的空间端点，使观众理解空中动作发生在何处。插画借用了古风外饰，但具体承重、坡道与安全结构没有核实，不能根据外观判断设施设计或把它当成历史楼阁。\n- **它在庙会中的作用**：交代表演设施与观看人群的高度关系\n- **记载与补全**：2024春节（报道日期2024-02-13）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1392,279],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1252,"labelY":184,"anchorX":1392,"anchorY":279,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-kf-ws-04":{"id":"scene-kf-ws-04","parentId":"fair-kf-ws","imageSrc":"assets/scenes/kf-ws-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzI0LjQ3OTk5OTk5OTk5OTk2IiBjeT0iNTk0LjM2IiByeD0iMjc0LjU2IiByeT0iMjQ4LjA0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[346.32,49.92,842.4,599.04],"zoomedBox":[346.32,49.92,842.4,599.04],"label":"春节游艺点","url":null,"text":"### 春节游艺点\n**游戏板怎样让逛街的人停下来？**\n红蓝背景板把目标集中到较小范围，游客举手瞄向板面，旁边的人等待或观看。来源支持参与游戏和网格架等装置，插画把目标图案作了主题化整理。这里说明从路过到参与的动作转变，不根据画出的圆孔编造现场计分规则和奖品。\n\n游客在红蓝背景板前参与游戏，旁边的黑色网格架摆着红色小桶。\n\n资料：2024春节（报道日期2024-02-13）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-kf-ws-04-game-board","object-kf-ws-04-handheld-piece"],"label_anchor_points":[282.88,496.08000000000004],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":282.88,"anchorY":496.08000000000004,"labelX":282.88,"labelY":431.08000000000004,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-kf-ws-04-game-board":{"id":"object-kf-ws-04-game-board","parentId":"scene-kf-ws-04","imageSrc":"assets/scenes/kf-ws-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTUyIiBjeT0iMzk2IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[194,792,599,1512],"zoomedBox":[194,792,599,1512],"label":"红蓝游戏板","url":null,"text":"### 红蓝游戏板\n2024图集可见红蓝背景前的游客游戏。插画把图案整理成可辨的目标面，让读者理解面对板面操作的关系，但圆孔数量、投掷目标与得分方式属于概念细节，不能据图复原实际游戏说明。\n- **它在庙会中的作用**：将街区停留转化为操作活动\n- **记载与补全**：2024春节（报道日期2024-02-13）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1152,396],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1012,"labelY":301,"anchorX":1152,"anchorY":396,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-kf-ws-04-handheld-piece":{"id":"object-kf-ws-04-handheld-piece","parentId":"scene-kf-ws-04","imageSrc":"assets/scenes/kf-ws-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5MTIiIGN5PSIzMDYiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[104,552,509,1272],"zoomedBox":[104,552,509,1272],"label":"游客手中小件","url":null,"text":"### 游客手中小件\n举起的小件和伸出的手臂显示参与者正面向游戏装置操作，这是图像导读的动作线索。现有资料没有说明该小件的统一名称、材质或玩法，页面将其标为插画参与道具，避免误写成有证据的项目规则。\n- **它在庙会中的作用**：提示玩家与目标之间的动作关系\n- **记载与补全**：2024春节（报道日期2024-02-13）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[912,306],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":772,"labelY":211,"anchorX":912,"anchorY":306,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-ly-gl":{"id":"fair-ly-gl","parentId":"54749336813040","label":"洛阳","imageSrc":"assets/worlds/ly-gl.webp","box":[388.86,839.31,728.86,1186.96],"zoomedBox":[388.86,839.31,728.86,1186.96],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik04NjIuMzUsNjc3LjY3IEw4NjQuMjMsNjgxLjA5IEw4NjcuNTcsNjgxLjU0IEw4NzAuNTIsNjgyLjYxIEw4NzIuNTYsNjg1LjA5IEw4NzMuOTYsNjg1LjM0IEw4NzYuNTUsNjg0LjEyIEw4NzguODQsNjg0LjkyIEw4ODYuNjgsNjgzLjQ2IEw4ODguMzUsNjg0LjE2IEw4OTUsNjg4Ljc5IEw5MDEuNyw2OTAuOTkgTDkwNC40Nyw2OTMuNjIgTDkwNi41NCw2OTMuOCBMOTEwLjQxLDY5MC40MyBMOTExLjksNjg5LjkgTDkxNS4xOCw2OTIuMDQgTDkyMC4xMyw2OTEuNjggTDkyNC42MSw2OTMuMzMgTDkyOS44OCw2OTIuOCBMOTM0LjczLDY5NC45NyBMOTM4LjQ4LDcwMC42MiBMOTQyLjIyLDcwNC43MiBMOTQ4LjYzLDcwMi4xNCBMOTUwLjQ0LDcwMi4zMiBMOTU5Ljc1LDcwNy4zMSBMOTY3LjUzLDcxMC4zIEw5NjkuMDcsNzE0LjU0IEw5NjkuMSw3MjAuODkgTDk3MC4wNCw3MjIuNTkgTDk3Mi4wNiw3MjMuMjUgTDk3NS45Miw3MjIuNDkgTDk3OS43OSw3MjMuMTggTDk4Mi41NSw3MjQuODcgTDk4NS43OSw3MjguNjMgTDk4OC4zOCw3MjguODYgTDEwMDAuNDQsNzI1LjcyIEwxMDA1LjM3LDcyNS4wOCBMMTAwNi44Nyw3MjMuODggTDEwMDYuMDksNzIyLjI5IEwxMDA1LjA1LDcyMy41NyBMMTAwMy44NSw3MjEuNyBMMTAwNC4zNSw3MTkuMjEgTDEwMDYuMiw3MTcuMjEgTDEwMDguNzksNzE3LjIyIEwxMDEyLjY1LDcyMS4xMSBMMTAxMy45MSw3MjAuNiBMMTAxOC4wMSw3MjEuNiBMMTAxOC45LDcyMC42NiBMMTAxNy4zOCw3MTUuNzIgTDEwMTUuOTEsNzE0LjY2IEwxMDE0Ljk2LDcxMS4zNyBMMTAxNS40Nyw3MTAuMjUgTDEwMjEuMjUsNzA4LjM3IEwxMDI0LjI0LDcwNi42OSBMMTAyNi4xOCw3MDQuODUgTDEwMjguMjMsNzAxLjUyIEwxMDI5Ljg0LDY5Ni41MiBMMTAzMS4zOCw2OTUuMDYgTDEwMzMuMjksNjk0LjY4IEwxMDM1LjAxLDY5Ni4wOCBMMTAzNS4yOCw2OTguODggTDEwMzYuMzcsNjk5LjkxIEwxMDQxLjk3LDY5Ni40NSBMMTA0NC44Niw2OTUuNzYgTDEwNDYuNzEsNjk2LjE0IEwxMDQ4LjQ5LDY5NS4zMSBMMTA0OC4yMyw2OTMuMTEgTDEwNTEuMTQsNjg5LjczIEwxMDUxLjc5LDY4My44IEwxMDUwLjM0LDY4Mi4zOCBMMTA1MC41LDY4MS4wNiBMMTA1My43Nyw2NzguODMgTDEwNTMuMTIsNjc2LjU2IEwxMDU1LjM3LDY3NC45NSBMMTA1OC4yOSw2NzQuNDQgTDEwNjIuNDMsNjcwLjQ4IEwxMDY3LjcyLDY2OS4wOSBMMTA3MC4wNSw2NjcuODMgTDEwNzEuNjMsNjY4LjI1IEwxMDc4LjcsNjc1LjYgTDEwODEuMzQsNjc1LjQ1IEwxMDgzLjIsNjc0LjQ2IEwxMDg3LjUyLDY2OC42NyBMMTA4OC41OSw2NjYuNTUgTDEwOTAuOTEsNjY0LjM2IEwxMDkyLjk3LDY2My4zNyBMMTA5OC4wOSw2NjMuNTcgTDExMDIuMTEsNjU4Ljc0IEwxMTAzLjQ4LDY1Ni4wNCBMMTEwMi41NCw2NTMuNzUgTDEwOTguNSw2NTIuODEgTDEwOTYuMTcsNjUxLjMxIEwxMDk1LjI4LDY0OC4zNSBMMTEwMS40OCw2NDUuNjUgTDExMDIuODYsNjQzLjUyIEwxMTAzLjA0LDYzOC44MiBMMTEwNC41LDYzNi4xNyBMMTEwNC41Niw2MzEuOTYgTDExMDguOCw2MzAuODkgTDExMDQuOTgsNjI3LjgzIEwxMTAyLjAzLDYyNy40NyBMMTEwMi45Niw2MjUuNDQgTDExMDkuMzEsNjIxLjc5IEwxMTEwLjIzLDYxNy40MyBMMTExNC43NSw2MTUuMjkgTDExMTQuOTksNjExLjQ0IEwxMTE2LjA2LDYwNS42OCBMMTExNy41Niw2MDIuMzQgTDExMTguMzMsNTk5LjEyIEwxMTE2LjcxLDU5NS43MSBMMTExMy42OSw1OTQuNDkgTDExMTIuNTIsNTg5LjM2IEwxMTExLjQyLDU4OC4yNyBMMTEwNi45NCw1ODAuNTUgTDExMTAuMzQsNTc1LjU2IEwxMTA5LjkyLDU3My45IEwxMTA2LjU4LDU3MS43NyBMMTEwNS44LDU2OC45NyBMMTEwOC44MSw1NjYuOTkgTDExMDkuNDcsNTYzLjkyIEwxMTEzLjk4LDU1OS40NyBMMTExNy4xNSw1NTguNDggTDExMTUuODgsNTU3LjIxIEwxMTE4Ljk3LDU1NC45NiBMMTEyMy45Niw1NTQuMjMgTDExMjUuNzQsNTU1Ljg1IEwxMTI1LjMxLDU1OC44NyBMMTEyNy41Niw1NTcuODkgTDExMzEuMTUsNTU3LjQ4IEwxMTMzLjUzLDU1NS41OSBMMTEzOS4xLDU1Ni42NCBMMTE0MS4xMiw1NTUuODkgTDExNDQuMDYsNTU2LjU5IEwxMTQ3Ljc3LDU1My4zMyBMMTE0NC42Niw1NTIuOTggTDExNDQuMDQsNTUwLjUzIEwxMTM5LjU0LDU1MiBMMTEzOC42NCw1NDkuNjcgTDExMzkuMDUsNTQ1Ljk4IEwxMTM3LjQ1LDU0NS4zNiBMMTEzNy44OCw1NDMuMzkgTDExMzkuNjgsNTQyLjQzIEwxMTQwLjExLDUzOS45IEwxMTM4LjkyLDUzNy4wMSBMMTE0MC4yNSw1MzUuNzQgTDExNDEuMjMsNTMzLjE2IEwxMTQxLjY4LDUyNS4zNyBMMTE0MC45NSw1MjAuMjEgTDExNDYuMDMsNTE5LjM2IEwxMTQ3LjM5LDUxOC4xNSBMMTE1MS44LDUyMS4wOSBMMTE1My4zMSw1MjIuODkgTDExNTkuMzMsNTIzLjM2IEwxMTYyLjcyLDUyMy4wOCBMMTE2My45Miw1MjQuMTYgTDExNzAuMjgsNTIzLjY3IEwxMTcxLjk5LDUyNS4zOSBMMTE3NS4zMyw1MjMuNSBMMTE3NC43OSw1MjIuMjYgTDExNzYuMTQsNTE4LjI1IEwxMTc1LjgyLDUxNS45NiBMMTE3Ni42Miw1MTIuMjggTDExODAuMDQsNTExLjA1IEwxMTg1LjQ0LDUxMS4xMSBMMTE4Ni45Niw1MDkuMzMgTDExODMuNzYsNTA4LjgyIEwxMTgwLjg1LDUwNy4zOCBMMTE3Ni41Nyw1MDcuNCBMMTE3My4wMyw1MDcuOTQgTDExNjkuMjUsNTA3LjUgTDExNjcuMDUsNTA0LjU3IEwxMTY2LjgxLDUwMi44MiBMMTE2NC4yNSw1MDAuMDEgTDExNjMuODgsNDk3LjcxIEwxMTYwLjksNDk4LjAzIEwxMTU5LjYsNDk2LjI5IEwxMTYwLjc2LDQ5My4yNiBMMTE1OS43NSw0OTAuMjUgTDExNTYuODQsNDg5Ljc5IEwxMTU2Ljg4LDQ4OC45OSBMMTE2MC4wNSw0ODkuMDEgTDExNjEuMDUsNDg2LjM1IEwxMTU4LjAyLDQ4Mi42NSBMMTE1OC45Myw0ODAuMTMgTDExNTcuNjgsNDc2LjYgTDExNTcuODcsNDc0LjE1IEwxMTYxLjUxLDQ3Mi44OSBMMTE2NC45NCw0NzAuOTkgTDExNjcuMTksNDcxLjY3IEwxMTY5Ljg0LDQ3My45NyBMMTE3MS4zMiw0NzQuMjkgTDExNzQuMDgsNDcwLjM0IEwxMTc2Ljk5LDQ3MC4xNyBMMTE3OC40NCw0NjcuNDIgTDExNzIuODgsNDY0LjMzIEwxMTcxLjQzLDQ2MC43NyBMMTE3Mi42LDQ1OS44IEwxMTcyLjc3LDQ1Ni42OSBMMTE3MC45OSw0NTQuNTUgTDExNjguNzMsNDU0LjA2IEwxMTY2LjMsNDU0Ljc2IEwxMTYwLjksNDU0LjY3IEwxMTU5LjE3LDQ1NC4wMiBMMTE1NS40Myw0NTUuMDcgTDExNTQuMTcsNDUzLjU2IEwxMTU0LjAzLDQ1MS4yNiBMMTE1NC44Myw0NDcuNTQgTDExNTcuMzEsNDQ1Ljc5IEwxMTU0LjY5LDQ0Mi42OSBMMTE0OS44OCw0NDEuNjEgTDExNDcuMTUsNDQyLjAxIEwxMTQzLjM4LDQ0My42NiBMMTEzNy41MSw0NDMuNjEgTDExMzIuNzMsNDQwLjkzIEwxMTI4Ljg0LDQzOC4wOCBMMTEyNS4xOCw0MzYuNjIgTDExMjEuNzEsNDM3Ljg2IEwxMTIxLjM2LDQzMS40IEwxMTIyLjQ1LDQyOC40NCBMMTEyMS43LDQyOC4xNSBMMTEyMS43NSw0MjIuOTggTDExMTcuOTQsNDIyLjg2IEwxMTExLjc2LDQyMS40NSBMMTExMC42Miw0MTkuODkgTDExMTAuNCw0MTcuNDcgTDExMDkuMTgsNDE2LjQxIEwxMTA4LjcyLDQxNC4xNyBMMTEwNy43MSw0MTYuMTkgTDExMDUuMzMsNDE4LjcyIEwxMTAwLjkzLDQyMC4yIEwxMDk5LjM1LDQxOC4zMiBMMTA5Ni42Niw0MTcuODQgTDEwOTUuMSw0MjIuNTQgTDEwOTcuODQsNDIyLjc0IEwxMDk4LjY5LDQyMC44NCBMMTEwMC44NSw0MjAuODUgTDExMDIuNzEsNDIzLjgzIEwxMTAyLjEzLDQyOC44OCBMMTA5OS42NSw0MjkuMTEgTDEwOTYuNzUsNDI3LjczIEwxMDk1LjAzLDQyOC40NCBMMTA5My43Myw0MjYuODIgTDEwODguNjIsNDIzLjkxIEwxMDgzLjEyLDQyMi43MSBMMTA3NS4xNiw0MjMuMjUgTDEwNzQuMDMsNDIxLjkgTDEwNjkuMzcsNDIwLjM0IEwxMDY0LjUzLDQxOC4wNyBMMTA2Mi4wMiw0MTguMDggTDEwNTguMjMsNDE3LjE1IEwxMDU0LjYxLDQxMy44IEwxMDUxLjg3LDQxNS4zMiBMMTA1MC4xNCw0MTcuODkgTDEwNDguMiw0MTguMjMgTDEwNDQuMjUsNDE0LjYzIEwxMDQxLjQ2LDQxMi43MiBMMTAzNi44OCw0MTAuOTEgTDEwMzMuNTMsNDA0LjI0IEwxMDMwLjA0LDQwMS4yOSBMMTAyNS4yNCwzOTkuOTggTDEwMjEuOTIsMzk4LjE2IEwxMDE5LjE1LDM5OCBMMTAwOS41MywzOTguNDcgTDEwMDguMTQsMzk3LjExIEwxMDA4Ljg2LDM5NC40NyBMMTAwOC4xOCwzOTIuNiBMMTAwNi4wMiwzOTAuOTkgTDEwMDUuNTIsMzg5LjM3IEwxMDAyLjY3LDM4OS45NiBMOTk2LjUyLDM4OC44NiBMOTkzLjc2LDM5MC41MiBMOTkzLjc0LDM5My43NiBMOTkwLjE1LDM5Ni40OSBMOTkwLjI4LDM5Ny44NSBMOTk1LjM0LDQwMS41NyBMMTAwMC4wMSw0MDMuNjUgTDk5Ny40Miw0MDUuNDIgTDk5Ny45Niw0MDcuMDQgTDk5NS4zNiw0MDcuMDcgTDk5My41Niw0MDcuOTEgTDk5NC4yMiw0MTAuMyBMOTk4LjM4LDQxMS40OCBMOTk4LjEzLDQxMy43MiBMOTkyLjI4LDQxNi42MyBMOTg5LjEsNDE2LjY1IEw5ODYuNzksNDE5Ljc1IEw5ODMuODcsNDIwLjc1IEw5ODAuODQsNDIyLjg1IEw5NzkuNjksNDI0Ljc1IEw5NzkuNTYsNDI4Ljc3IEw5ODIuNDcsNDMwLjY2IEw5ODYuOTEsNDMxLjExIEw5OTIuMDksNDM1Ljc3IEw5OTEuOTIsNDM4LjI4IEw5OTMuNjIsNDM4LjU0IEw5OTguMDQsNDM3LjA4IEw5OTkuNzksNDM3Ljk1IEw5OTguMzEsNDM5LjY4IEw5OTguOSw0NDEuNTYgTDEwMDQuMjYsNDQ2LjA3IEwxMDA1LjQ0LDQ0Ny41OCBMMTAwMy45NSw0NDkuMjkgTDEwMDQuNjEsNDUwLjgxIEwxMDA3LjIxLDQ1MS44MyBMMTAwNy41Niw0NTQuMDEgTDEwMDcuNDEsNDU1LjE5IEwxMDA0LjgyLDQ1Ni45NiBMMTAwNS4xOCw0NTguNjMgTDEwMDMuNjIsNDYxLjM0IEwxMDAxLjEzLDQ2MS4zMyBMMTAwMS42NCw0NjIuNjEgTDEwMDAuNzMsNDY0LjQ3IEwxMDA0LjIsNDY1Ljc4IEwxMDA0LjM0LDQ2Ny4zMyBMMTAwMS4wOSw0NjguOTQgTDEwMDAuMjYsNDc0LjIyIEw5OTguMzIsNDczLjk1IEw5OTguNzEsNDc2IEw5OTYuNDMsNDgwLjIyIEw5OTcuNzksNDgzLjI2IEw5OTYuMTUsNDg0LjAxIEw5OTUuNDEsNDg1LjczIEw5OTIuODEsNDg2LjU0IEw5OTAuODUsNDg4Ljc4IEw5OTAuNTUsNDkwLjg2IEw5ODguMTQsNDk1LjQ0IEw5ODMuNzcsNDkxLjAxIEw5ODAuNjEsNDkxLjIxIEw5NzUuOTIsNDg0LjgzIEw5NjkuNjYsNDg0LjM0IEw5NjguMzUsNDg1LjAyIEw5NjcuOSw0ODcuNjkgTDk2Niw0ODcuODIgTDk2My4zMyw0ODkuNiBMOTU5LjgxLDQ5My42MSBMOTU3LjEyLDQ5My40MiBMOTU2LjExLDQ5Ni4wOCBMOTUyLjU5LDQ5NS40NCBMOTQ1LjU4LDQ5OC45MiBMOTQ0LjM1LDUwMSBMOTQyLjYxLDUwMS44OCBMOTM5Ljc4LDUwMS44IEw5NDEuNTUsNTA3LjM4IEw5NDMuNjYsNTEwLjA5IEw5NDEuOTYsNTEwLjYzIEw5MzkuNDEsNTA4Ljk4IEw5MjkuODEsNTA1LjU0IEw5MjcuNzQsNTA0LjA2IEw5MjUuMTcsNTAzLjM3IEw5MjMuMjksNTA1LjQ3IEw5MjEuMzgsNTAzLjU2IEw5MTkuMDcsNTA0Ljg2IEw5MTUuODEsNTA3Ljk5IEw5MTQuNjYsNTA4LjM1IEw5MTIuMSw1MDcuMjMgTDkwNy45Myw1MDcuOTYgTDkwNS40LDUxMC41MSBMOTA0LjUsNTEyLjM5IEw4OTkuMzksNTE1LjMzIEw4OTguMjksNTE2Ljg0IEw4OTIuMDEsNTIwLjI2IEw4ODcuNTgsNTIyLjI2IEw4ODUuNzUsNTI0LjI4IEw4ODMuMDIsNTI0LjI0IEw4ODAuNzcsNTIyLjY0IEw4NzguMDksNTI0LjMyIEw4NzQuMzgsNTI0LjYgTDg3MC45OCw1MjQuMDQgTDg2OS43Myw1MjAuNjkgTDg2Ny43Miw1MjEuNDUgTDg2NC4zNCw1MjQuODMgTDg2NC40Niw1MzAuMDggTDg1OS4zMiw1MjguNjYgTDg1Ni4wOCw1MjcuMzIgTDg1NC43MSw1MjcuNzIgTDg1My4zOSw1MzIuMzcgTDg1My40Myw1MzQuMSBMODUwLjQ3LDUzNi42MSBMODQ5LjI1LDUzNi44IEw4NDguODIsNTQxLjAyIEw4NDUuNTIsNTQyIEw4NDIuNzcsNTQyLjA3IEw4NDEuMSw1NDMuNDYgTDgzOS44Myw1NDYuOTYgTDgzOS4zMSw1NTAuNjcgTDgzOS44Myw1NTEuNTEgTDg0My4zNCw1NTIuMDIgTDg0NC42Miw1NTMuMzggTDg0NS4wOSw1NTUuNjMgTDg0OC4xNiw1NTkuNjkgTDg0OS4zMSw1NjMuMTMgTDg0Ny40OSw1NjguMzYgTDg0Ny42LDU3My40MyBMODQ4LjYsNTc0LjgyIEw4NDcuMyw1NzkuMzcgTDg0NC42LDU3OS42NSBMODQzLjE3LDU4MC45OCBMODQ2LjM0LDU4NC4wNiBMODUyLjI5LDU4Ni44MSBMODUzLjY3LDU5MC40OCBMODU3LjQsNTkxLjA5IEw4NjAuMDYsNTk0LjY0IEw4NjAuOTIsNTk2Ljg2IEw4NjMuNjksNTk4LjM1IEw4NjUuMzcsNTk3Ljk0IEw4NjYuMzIsNjAwLjE2IEw4NjkuMTUsNTk4LjY2IEw4NzAuNzIsNTk5Ljc5IEw4NzAuOTMsNjAzLjIgTDg3Mi4yNSw2MDUuMTUgTDg3Ni4yNyw2MDUuMzYgTDg3OC4xNSw2MDYuODUgTDg4MC43OSw2MDYuOTEgTDg4Mi4zOCw2MTAuNjEgTDg3OS45NSw2MTIuNDIgTDg3Ny42NSw2MTguODcgTDg3Ny42OSw2MjIuOTggTDg4MC4xMSw2MjguMTQgTDg3OS44Miw2MzIuNDMgTDg4MC4yNyw2MzUuMDkgTDg3OC4wMyw2MzcuNjIgTDg3NC40LDYzOS45NiBMODcwLjg0LDY0NC44OCBMODcwLjM2LDY0Ny44NiBMODY3Ljg3LDY0OC4yMSBMODY1LjM2LDY0Ni4yIEw4NjIuMDgsNjQ3LjQ5IEw4NTguNDMsNjQ2Ljc0IEw4NTYuNTYsNjQ4LjY0IEw4NTUuOTIsNjUxLjI5IEw4NTcuNDQsNjUzLjg3IEw4NTcuNCw2NTUuNDMgTDg1My4zMSw2NTcuODcgTDg1Mi4wMyw2NTYuMTYgTDg1MS41OSw2NTguMDIgTDg1NC41Nyw2NjAuNDQgTDg1My45OSw2NjIuMTcgTDg1Ni45NCw2NjQuMDYgTDg1OC40OSw2NjcuMyBMODYyLjQ5LDY3MS43NSBMODYyLjM1LDY3Ny42NyBaIE0xMDA2Ljk2LDQ1NC45MSBMMTAwNy4yMyw0NTQuMDggTDEwMDUuMDEsNDUzLjM5IEwxMDA1LjUyLDQ1NS4yNCBMMTAwNi45Niw0NTQuOTEgWiIgZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==","url":null,"text":"### 关林春节庙会\n关林春节庙会把关公文化场所转化为可逛、可答题、可看手艺的三国主题市集。这里从灰墙红灯笼走近人物摆件与草编龙，再理解主持人与游客的互动；六图依据2024现场，2026预告单独标识。","childrenIds":["scene-ly-gl-02","scene-ly-gl-03","scene-ly-gl-04"],"label_anchor_points":[1008.79,565.08],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1008.79,"anchorY":565.08,"labelX":1008.79,"labelY":500.08000000000004,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-ly-gl-02":{"id":"scene-ly-gl-02","parentId":"fair-ly-gl","imageSrc":"assets/scenes/ly-gl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTM1Ni4xNTk5OTk5OTk5OTk5IiBjeT0iMjQ4LjA0MDAwMDAwMDAwMDAyIiByeD0iMzA3Ljg0MDAwMDAwMDAwMDAzIiByeT0iMjQ4LjA0MDAwMDAwMDAwMDAyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[0,1048.32,496.08000000000004,1664],"zoomedBox":[0,1048.32,496.08000000000004,1664],"label":"灰墙篷摊街","url":null,"text":"### 灰墙篷摊街\n**为什么把篷摊安排在灰墙旁来阅读？**\n灰砖墙是连续而稳定的背景，木框篷摊则以重复单元形成短时经营界面。游客沿路走动，在感兴趣的台面前停留，通行与交易因此并排发生。照片支持临墙排列，图中货物数量与摊位间隔仍是插画补全，不是摊位平面图。\n\n临灰砖围墙一字排开的木框小篷摊，红色装饰与游客冬装形成对比。\n\n资料：2024-02-13现场报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ly-gl-02-timber-stall"],"label_anchor_points":[1347.8400000000001,215.28],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1347.8400000000001,"anchorY":215.28,"labelX":1347.8400000000001,"labelY":150.28,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ly-gl-02-timber-stall":{"id":"object-ly-gl-02-timber-stall","parentId":"scene-ly-gl-02","imageSrc":"assets/scenes/ly-gl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTUyIiBjeT0iMzI0IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[122,792,527,1512],"zoomedBox":[122,792,527,1512],"label":"木框篷摊","url":null,"text":"### 木框篷摊\n来源照片可见沿灰砖围墙一字排列的木框小篷摊，展台向步行一侧打开。木架与浅色棚面体现临时性，和后方连续墙体形成对照；具体摊主、商品组合及间距未被完整记录，不按图编造名录。\n- **它在庙会中的作用**：把墙边空间转化为市集界面\n- **记载与补全**：2024-02-13现场报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1152,324],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1012,"labelY":229,"anchorX":1152,"anchorY":324,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ly-gl-03":{"id":"scene-ly-gl-03","parentId":"fair-ly-gl","imageSrc":"assets/scenes/ly-gl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzMyLjgiIGN5PSI0NTguNjQiIHJ4PSIzMTYuMTYiIHJ5PSIyMjQuNjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[234,16.64,683.28,648.96],"zoomedBox":[234,16.64,683.28,648.96],"label":"答题互动","url":null,"text":"### 答题互动\n**答题为什么要围成半圈？**\n主持人站在红色装置旁，游客面向她举手或回应，围观者能够同时看到提问者与参与者。这样的小范围互动使三国知识从展板内容变成现场交流。来源确认答题与盲盒机制，插画中的具体问题、抽屉数量与参与人物均未作为事实指定。\n\n红衣主持人在盲盒装置前举话筒，与围成半圈的游客互动。\n\n资料：2024-02-13现场报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ly-gl-03-microphone","object-ly-gl-03-blindbox-cabinet"],"label_anchor_points":[349.44,430.56],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":349.44,"anchorY":430.56,"labelX":349.44,"labelY":365.56,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ly-gl-03-microphone":{"id":"object-ly-gl-03-microphone","parentId":"scene-ly-gl-03","imageSrc":"assets/scenes/ly-gl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5MjgiIGN5PSIzODciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[184,568,589,1288],"zoomedBox":[184,568,589,1288],"label":"主持人话筒","url":null,"text":"### 主持人话筒\n2024配图中的红衣主持人持话筒面对游客，话筒标出谁正在组织现场互动。它能帮助读者理解提问与回应的关系，但没有核听录音可还原台词、问答音量或主持流程，页面只保留已知的互动类型。\n- **它在庙会中的作用**：连接主持人的提问与游客回应\n- **记载与补全**：2024-02-13现场报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[928,387],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":788,"labelY":292,"anchorX":928,"anchorY":387,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ly-gl-03-blindbox-cabinet":{"id":"object-ly-gl-03-blindbox-cabinet","parentId":"scene-ly-gl-03","imageSrc":"assets/scenes/ly-gl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMzc2IiBjeT0iNDIzIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[220,880,625,1600],"zoomedBox":[220,880,625,1600],"label":"红色盲盒装置","url":null,"text":"### 红色盲盒装置\n报道记载参加三国知识或指定互动后抽取盲盒，装置把完成活动与领取结果联系起来。插画将抽取面板作规则排列以便识别，柜格、奖品与兑换条件缺少完整清单，不在网页中冒充现场运营规则。\n- **它在庙会中的作用**：承接知识互动后的局部参与结果\n- **记载与补全**：2024-02-13现场报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1376,423],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1236,"labelY":328,"anchorX":1376,"anchorY":423,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ly-gl-04":{"id":"scene-ly-gl-04","parentId":"fair-ly-gl","imageSrc":"assets/scenes/ly-gl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTQzMS4wNCIgY3k9IjY0MS4xNiIgcng9IjIzMi45NjAwMDAwMDAwMDAwNCIgcnk9IjI2Ni43NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[374.40000000000003,1198.08,907.92,1664],"zoomedBox":[374.40000000000003,1198.08,907.92,1664],"label":"三国人物摆件摊","url":null,"text":"### 三国人物摆件摊\n**三国人物为何适合缩小到掌心？**\n小摆件把宏大的三国题材变为能拿起、能比较的物件。摊主与游客的手势将注意力引向造型，木质展示块则让不同人物有可见高低。来源照片可见绿帽红脸等形象；这里说明视觉识别，不凭简化脸谱替所有小像确定角色姓名。\n\n木质展示块上摆放彩绘三国人物小摆件，前方一件为绿帽红脸形象。\n\n资料：2024-02-13现场报道，拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ly-gl-04-redface-figure","object-ly-gl-04-display-blocks"],"label_anchor_points":[1414.3999999999999,599.04],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1414.3999999999999,"anchorY":599.04,"labelX":1414.3999999999999,"labelY":534.04,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ly-gl-04-redface-figure":{"id":"object-ly-gl-04-redface-figure","parentId":"scene-ly-gl-04","imageSrc":"assets/scenes/ly-gl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4ODAiIGN5PSI0NTkiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[256,520,661,1240],"zoomedBox":[256,520,661,1240],"label":"绿帽红脸摆件","url":null,"text":"### 绿帽红脸摆件\n实景近照记录木质展示块上的三国人物小摆件，其中有绿帽红脸形象。它以色彩和衣冠压缩人物特征，适合观察文创如何组织主题；不同角色身份与商品材质未逐一核实，不能仅凭画面统一命名。\n- **它在庙会中的作用**：将关公与三国主题转为可拿取的文创\n- **记载与补全**：2024-02-13现场报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[880,459],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":740,"labelY":364,"anchorX":880,"anchorY":459,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ly-gl-04-display-blocks":{"id":"object-ly-gl-04-display-blocks","parentId":"scene-ly-gl-04","imageSrc":"assets/scenes/ly-gl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2NDAiIGN5PSI3NjUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,280,900,1000],"zoomedBox":[495,280,900,1000],"label":"木质展示块","url":null,"text":"### 木质展示块\n展示块让小摆件分层出现，避免同等大小的商品互相遮挡，也使游客的视线能够从近处逐层移动。木块陈列有实景依据，插画的层数和尺寸经过调整，不作为摊位实际容量或商品数量的证明。\n- **它在庙会中的作用**：组织小商品的可见顺序\n- **记载与补全**：2024-02-13现场报道，拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[640,765],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":780,"labelY":670,"anchorX":640,"anchorY":765,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-pds-tw":{"id":"fair-pds-tw","parentId":"54749336813040","label":"平顶山","imageSrc":"assets/worlds/pds-tw.webp","box":[553.33,1048.23,829.26,1319.45],"zoomedBox":[553.33,1048.23,829.26,1319.45],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzAwLjA4LDY5Ny4xMiBMMTI5OS4xOSw2OTYuMTggTDEzMDAuNTEsNjkzLjQ4IEwxMjk4LjQsNjkxLjM5IEwxMjk3Ljc1LDY4Ny43OSBMMTI5My4yOCw2ODguMTcgTDEyOTIuMzMsNjg2LjY2IEwxMjg3LjM3LDY4OC4xOCBMMTI4NC43NCw2ODggTDEyODIsNjg5LjE2IEwxMjc0Ljc2LDY5MC43MSBMMTI3NC4yMyw2ODYuMzEgTDEyNzEuNzIsNjg0Ljc5IEwxMjcwLjAxLDY4NS41MiBMMTI1OS45Niw2ODAuMjEgTDEyNjMuOSw2NzcuNDIgTDEyNjIuNTMsNjc2LjUzIEwxMjYxLjU4LDY3My40MSBMMTI2Mi40OCw2NjkuMDMgTDEyNjIuMjcsNjY3LjEyIEwxMjU5LjA2LDY2Mi43MiBMMTI1Ny43Nyw2NTguOCBMMTI1OC42NSw2NTYuNDEgTDEyNjEuNjksNjUxLjU0IEwxMjYyLjU0LDY0Ny45NSBMMTI2Ny4xNyw2NDQuNDQgTDEyNjcuNTQsNjQyLjQ2IEwxMjY3LjY4LDYzNC41MiBMMTI2NS41Nyw2MzAuOTcgTDEyNjQuMzUsNjI0LjQ4IEwxMjYyLjU5LDYyMi41NSBMMTI1OS4yNSw2MjIuNTQgTDEyNTYuNjIsNjIxLjggTDEyNTUuMDEsNjIyLjY3IEwxMjU0LjgsNjI0Ljk5IEwxMjUyLjgzLDYyNS40MiBMMTI1MC4yMiw2MTkuMTQgTDEyNTIuMzQsNjE3LjIzIEwxMjQ2LjQsNjEyLjg0IEwxMjQzLjE1LDYxMS44OSBMMTI0Mi4zNSw2MDguODcgTDEyMzkuNjIsNjA5LjIzIEwxMjM4LjMsNjA2LjExIEwxMjM3LjMxLDYwNS42NiBMMTIzNS4wNCw2MDYuOTYgTDEyMzUuMjUsNjA5LjM3IEwxMjM0LjEsNjEwLjczIEwxMjMyLjYsNjEwLjYgTDEyMzEuNyw2MDguMzUgTDEyMjkuNSw2MDcuMjEgTDEyMjMuMzMsNjA4LjYyIEwxMjE5LjQ5LDYwOC4xOSBMMTIxOC4xNSw2MDcuMDUgTDEyMTcuNDIsNjA0LjgzIEwxMjE0LjQzLDYwMy40MyBMMTIxMy42NSw2MDEuMDMgTDEyMTQuMjgsNTk4LjUzIEwxMjEyLjA2LDU5Ni4wMSBMMTIwOS4yMyw1OTEuNDggTDEyMDkuMDMsNTg4Ljk5IEwxMjA5LjgxLDU4Ni42NSBMMTIwOS40LDU4NC45OSBMMTIwNy41Nyw1ODMuNjkgTDEyMDQuMDMsNTgyLjcxIEwxMjAyLjQ0LDU4MC44NiBMMTIwMy4wNSw1NzUuNTIgTDEyMDQuNCw1NzIuMDEgTDEyMDUuMzYsNTcxLjE1IEwxMjA0LjA1LDU2OC44NyBMMTIwMS4wMyw1NjcuODYgTDExOTYuODMsNTY4LjAxIEwxMTk1LjA0LDU2NS45NyBMMTE5My43Niw1NjUuNzEgTDExOTIuMzMsNTYzLjQ1IEwxMTg4LjUxLDU2NC4zNCBMMTE4Mi40Niw1NjQuMDMgTDExODEuMTksNTYzLjA2IEwxMTc3Ljg0LDU2NC41NSBMMTE3My4zNSw1NjQuOTYgTDExNjguMDksNTYzLjIyIEwxMTY2LjAzLDU2My45OSBMMTE2Mi44MSw1NjMuMDUgTDExNTkuOTMsNTY0LjA0IEwxMTYwLjEsNTYwLjkxIEwxMTYyLjQ2LDU1OS44NCBMMTE1OC40Miw1NTUuOTEgTDExNTYuNzMsNTU1Ljk2IEwxMTU0LjQ4LDU1NC40NiBMMTE1MC4wOSw1NTYuNDggTDExNDkuNzMsNTUzLjczIEwxMTQ3Ljc3LDU1My4zMyBMMTE0NC4wNiw1NTYuNTkgTDExNDEuMTIsNTU1Ljg5IEwxMTM5LjEsNTU2LjY0IEwxMTMzLjUzLDU1NS41OSBMMTEzMS4xNSw1NTcuNDggTDExMjcuNTYsNTU3Ljg5IEwxMTI1LjMxLDU1OC44NyBMMTEyNS43NCw1NTUuODUgTDExMjMuOTYsNTU0LjIzIEwxMTE4Ljk3LDU1NC45NiBMMTExNS44OCw1NTcuMjEgTDExMTcuMTUsNTU4LjQ4IEwxMTEzLjk4LDU1OS40NyBMMTEwOS40Nyw1NjMuOTIgTDExMDguODEsNTY2Ljk5IEwxMTA1LjgsNTY4Ljk3IEwxMTA2LjU4LDU3MS43NyBMMTEwOS45Miw1NzMuOSBMMTExMC4zNCw1NzUuNTYgTDExMDYuOTQsNTgwLjU1IEwxMTExLjQyLDU4OC4yNyBMMTExMi41Miw1ODkuMzYgTDExMTMuNjksNTk0LjQ5IEwxMTE2LjcxLDU5NS43MSBMMTExOC4zMyw1OTkuMTIgTDExMTcuNTYsNjAyLjM0IEwxMTE2LjA2LDYwNS42OCBMMTExNC45OSw2MTEuNDQgTDExMTQuNzUsNjE1LjI5IEwxMTEwLjIzLDYxNy40MyBMMTEwOS4zMSw2MjEuNzkgTDExMDIuOTYsNjI1LjQ0IEwxMTAyLjAzLDYyNy40NyBMMTEwNC45OCw2MjcuODMgTDExMDguOCw2MzAuODkgTDExMDQuNTYsNjMxLjk2IEwxMTA0LjUsNjM2LjE3IEwxMTAzLjA0LDYzOC44MiBMMTEwMi44Niw2NDMuNTIgTDExMDEuNDgsNjQ1LjY1IEwxMDk1LjI4LDY0OC4zNSBMMTA5Ni4xNyw2NTEuMzEgTDEwOTguNSw2NTIuODEgTDExMDIuNTQsNjUzLjc1IEwxMTAzLjQ4LDY1Ni4wNCBMMTEwMi4xMSw2NTguNzQgTDEwOTguMDksNjYzLjU3IEwxMDkyLjk3LDY2My4zNyBMMTA5MC45MSw2NjQuMzYgTDEwODguNTksNjY2LjU1IEwxMDg3LjUyLDY2OC42NyBMMTA4My4yLDY3NC40NiBMMTA4MS4zNCw2NzUuNDUgTDEwNzguNyw2NzUuNiBMMTA3MS42Myw2NjguMjUgTDEwNzAuMDUsNjY3LjgzIEwxMDY3LjcyLDY2OS4wOSBMMTA2Mi40Myw2NzAuNDggTDEwNTguMjksNjc0LjQ0IEwxMDU1LjM3LDY3NC45NSBMMTA1My4xMiw2NzYuNTYgTDEwNTMuNzcsNjc4LjgzIEwxMDUwLjUsNjgxLjA2IEwxMDUwLjM0LDY4Mi4zOCBMMTA1MS43OSw2ODMuOCBMMTA1MS4xNCw2ODkuNzMgTDEwNDguMjMsNjkzLjExIEwxMDQ4LjQ5LDY5NS4zMSBMMTA1MC4yOCw2OTcuMjEgTDEwNTMuOTEsNjk2LjgxIEwxMDU5LjI2LDY5OS42NyBMMTA2MC4zNyw3MDMuMDUgTDEwNjQuMjEsNzA2Ljc5IEwxMDY4LjA2LDcwNi40NCBMMTA2OS41Myw3MDguNDEgTDEwNzIuMTcsNzA3LjEzIEwxMDc1LjQ0LDcwNy4xIEwxMDc4LjM3LDcwNS4xOSBMMTA4MC43Niw3MDQuOTcgTDEwODYuOTgsNzEyLjAzIEwxMDg4LjQ3LDcxMy4yNCBMMTA5MS4zOCw3MTMuNzYgTDEwOTQuNDEsNzEzLjQ2IEwxMDk2LjMyLDcxNy4yNyBMMTEwMC4zNCw3MjEuNDMgTDEwOTkuOTcsNzIzLjMxIEwxMTAxLjMyLDcyNS4wNCBMMTEwNC44Miw3MjMuNzMgTDExMDYuMzksNzI0Ljk4IEwxMTEwLDcyMS43OCBMMTExMi4zMyw3MTguNDcgTDExMTQuNDcsNzE4LjIgTDExMTYuNTUsNzE5LjcxIEwxMTE2LjY1LDcyMS44NyBMMTExNy44NSw3MjIuOTIgTDExMjEsNzIzLjQ3IEwxMTIzLjIyLDcyMS42NSBMMTEyNS44Niw3MjEuMDggTDExMjYuNjQsNzIyLjgzIEwxMTMwLjMxLDcyNC4xOCBMMTEzMS4zMSw3MjUuMjEgTDExMzQuNDIsNzI1LjY0IEwxMTM4LjEzLDcyNS4zIEwxMTQxLjQ4LDcyNy4wOSBMMTE0Mi44Myw3MjguODQgTDExNDQuNjYsNzI4LjcgTDExNDcuMTcsNzMxLjE5IEwxMTQ5LjEsNzI5LjYxIEwxMTU0LjM5LDcyNi43NiBMMTE1NS45OCw3MjguMDEgTDExNjAuNzcsNzI3LjI2IEwxMTYyLjA4LDcyNS44MyBMMTE2Mi41LDcyMS40OCBMMTE2NS4yOSw3MTkuNjggTDExNjguNzMsNzIwLjQxIEwxMTY5Ljc4LDcxOC42NCBMMTE3NC4zMSw3MjEuMDIgTDExNzkuMDUsNzIwLjU3IEwxMTgwLjQ0LDcyNC4zNSBMMTE4Mi45OCw3MjYgTDExODQuNzMsNzI1Ljc5IEwxMTg3LjI5LDcyNy43OSBMMTE4OC4xLDcyOS42IEwxMTg5LjMyLDcyOS4yNCBMMTE5NC4xNCw3MzEuMSBMMTE5NS4wNCw3MzQuMzUgTDExOTYuNzUsNzM0LjMyIEwxMTk2LjY2LDczNS45NCBMMTE5OC43NSw3MzcuNjcgTDExOTguMDgsNzQxIEwxMTk4LjkxLDc0My4wOSBMMTE5OS4xLDc0Ni43NyBMMTE5OS44OCw3NDguMjIgTDExOTcuNTksNzUwLjk0IEwxMTk2Ljk3LDc1My4wNyBMMTE5Ny42Miw3NTcuMDkgTDExOTguNDQsNzU4LjcgTDEyMDMuOTIsNzU2LjY3IEwxMjEwLjYxLDc1Ny4xOSBMMTIxMy41LDc1OC42NSBMMTIxNC4wOCw3NjEuMzkgTDEyMTYuNTMsNzYxLjc2IEwxMjE5LjIzLDc2MC4wNCBMMTIyMi45OCw3NTkuNTYgTDEyMjYuMTcsNzYwLjkgTDEyMjcuMTQsNzYzIEwxMjMwLjU3LDc2Ny45MiBMMTIzMy4zMSw3NzAuMjcgTDEyMzMuMjQsNzczLjM0IEwxMjM1LjI5LDc3My42MSBMMTIzNS45Nyw3NzUuNTEgTDEyMzguNDEsNzc1LjMzIEwxMjQwLjc5LDc3Ni45OSBMMTI0Mi4wMSw3NzguOTQgTDEyNDQuNDMsNzc4LjYxIEwxMjQ2LjgyLDc3OS4yMiBMMTI0OC42Miw3ODEuMDEgTDEyNTMsNzc4LjU0IEwxMjU4LjM2LDc4MC43IEwxMjY1LjIzLDc4Mi4yMSBMMTI2Ni41NCw3ODUuMTIgTDEyNjUuMzEsNzg3IEwxMjY1Ljg4LDc4OS43MiBMMTI2Mi45NSw3OTAuNTUgTDEyNjIuMjgsNzkyLjE0IEwxMjY1LjE4LDc5OS4xNyBMMTI2NS42OSw4MDUuMDMgTDEyNjMuNSw4MDcuMTQgTDEyNjIuMTYsODExLjYzIEwxMjYyLjIyLDgxMy43NyBMMTI2MC45OSw4MTYuNTcgTDEyNTkuNTMsODE2LjkgTDEyNjIuNDgsODE5Ljk2IEwxMjYxLjg1LDgyMi45NiBMMTI2Mi40MSw4MjUuMzUgTDEyNjEuMzcsODI3LjY1IEwxMjYzLjA1LDgyOS4yNiBMMTI2NC43NSw4MjQuMzYgTDEyNjcuNjIsODIyLjg1IEwxMjcxLjI4LDgyMi44MSBMMTI3NC40Miw4MjEuOTYgTDEyNzYuNTEsODIyLjg5IEwxMjgzLjk4LDgyMi45NSBMMTI4Ni43Nyw4MjEuNTIgTDEyODguMDEsODIzLjI5IEwxMjkwLjA3LDgyMy43NCBMMTI5MS43Niw4MjUuOTMgTDEyOTMuNDUsODI2LjYgTDEyOTUuNTEsODIxLjgzIEwxMjk3Ljg5LDgyMi43OSBMMTMwMS42MSw4MjIuNjEgTDEzMDIuODQsODIxLjM3IEwxMzA2LjAyLDgyNC45OCBMMTMwNy43MSw4MjQuMjYgTDEzMDkuNDIsODIxLjkgTDEzMTEuOTQsODE3LjAxIEwxMzExLjIyLDgxNi4wNiBMMTMwNy45OSw4MTYuMDggTDEzMDUuNDEsODEwLjQxIEwxMzA0LjExLDgwNC40NSBMMTMwNS4yOSw3OTkgTDEzMDYuMzUsNzkyLjI3IEwxMzA3Ljk4LDc4Ny41NyBMMTMxMC40LDc4NC42MyBMMTMxMC43NCw3NzkuMjEgTDEzMTAuMTksNzc3LjgxIEwxMzEzLjE3LDc3NC4xOSBMMTMxNy4yOSw3NzIuNTggTDEzMTkuNDUsNzY1LjkgTDEzMTguNDcsNzYzLjIzIEwxMzE0LDc2Mi4xNSBMMTMxMi41NCw3NjMuNDggTDEzMTEuMzMsNzYyLjcyIEwxMzA2Ljc0LDc2NS4xNyBMMTMwMi4yMSw3NjQuOSBMMTMwMC43NCw3NjYuNTggTDEyOTguMDUsNzY1Ljk1IEwxMjkyLjksNzY2LjIgTDEyOTEuNDgsNzYzLjM0IEwxMjg5LDc2My4yOSBMMTI4Ny4yOSw3NjYuMDMgTDEyODUuMTgsNzY0LjM0IEwxMjgwLjk2LDc2Mi44NyBMMTI3OC4xMiw3NjIuNjUgTDEyNzcuNjgsNzU5LjE4IEwxMjc4Ljk5LDc1Ny43NSBMMTI3OC42Nyw3NTMuMjggTDEyODEuMDMsNzQ4LjY3IEwxMjc5Ljk1LDc0NCBMMTI4MC43OCw3NDQuOTQgTDEyODQuNTYsNzQ0LjkyIEwxMjg2LjAyLDc0My44NCBMMTI4OC43NCw3NDMuODMgTDEyOTAuMDIsNzQ1LjU4IEwxMjkxLjA3LDc0NS4zMiBMMTI5MC4zMyw3NDEuNTggTDEyOTEuMDgsNzQxLjI3IEwxMjkyLjU2LDczMy45NSBMMTI5NC43OCw3MzIuODMgTDEyOTUuODcsNzI4Ljk4IEwxMjk0LjIsNzI4Ljk3IEwxMjkzLjgzLDcyNS4zMSBMMTI5OC40NSw3MjMuOTcgTDEyOTguOTMsNzIyLjkzIEwxMzAzLjY5LDcxOS4zMiBMMTMwNi44Nyw3MTcuNzkgTDEzMDguMTIsNzE1LjcxIEwxMzA2LjQyLDcxMy42OCBMMTMwMi4yLDcxMC41MyBMMTMwMC40OCw3MDkuOTEgTDEyOTkuMTQsNzAzLjc2IEwxMjk5LjgyLDcwMC4wNCBMMTI5OC40Miw2OTguMTggTDEzMDAuMDgsNjk3LjEyIFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 汝州汤王街古镇庙会\n汤王街庙会的资料跨越2017至2023年：小尺度汤王庙提供场所线索，戏曲、糖画与夜间打铁梨花构成年节记忆。把庙门、街路和开阔演出场分开看，才能避免用一座院落代替整场古镇庙会。","childrenIds":["scene-pds-tw-01","scene-pds-tw-03","scene-pds-tw-04"],"label_anchor_points":[1192.94,677.91],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1192.94,"anchorY":677.91,"labelX":1192.94,"labelY":612.91,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-pds-tw-01":{"id":"scene-pds-tw-01","parentId":"fair-pds-tw","imageSrc":"assets/scenes/pds-tw-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iODk4LjU2IiBjeT0iMjUyLjcyMDAwMDAwMDAwMDAzIiByeD0iMzE2LjE2IiByeT0iMjM0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[18.72,582.4,486.72,1214.72],"zoomedBox":[18.72,582.4,486.72,1214.72],"label":"灯笼街路","url":null,"text":"### 灯笼街路\n**灯笼街景能证明什么，不能证明什么？**\n历史游记给出了灯笼与街路的夜景线索，插画据此将暖光串入逛街人流。它帮助理解古镇节会的夜间氛围，却不能还原每家门面、每盏灯或当年的天气。图中薄雪与建筑细节是艺术补全，页面不把它们写成历史实况。\n\n历史游记记述汤王街街路灯笼与牌坊夜景；无可用街巷实拍。\n\n资料：2018年第3期历史游记文字依据\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-pds-tw-01-street-lantern"],"label_anchor_points":[881.9200000000001,252.72000000000003],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":881.9200000000001,"anchorY":252.72000000000003,"labelX":881.9200000000001,"labelY":187.72000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-pds-tw-01-street-lantern":{"id":"object-pds-tw-01-street-lantern","parentId":"scene-pds-tw-01","imageSrc":"assets/scenes/pds-tw-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTUyIiBjeT0iMjk3IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[94,792,499,1512],"zoomedBox":[94,792,499,1512],"label":"街路灯笼","url":null,"text":"### 街路灯笼\n2018游记记有汤王街灯笼与夜景，灯笼可作为节庆临时层来观察。插画用高低悬挂制造连续的暖光方向，但没有可用街巷实拍核对这一排列，不能据画面反推实际街道长度或照明设施布局。\n- **它在庙会中的作用**：组织夜间行走的视觉方向\n- **记载与补全**：2018年第3期历史游记文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1152,297],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1012,"labelY":202,"anchorX":1152,"anchorY":297,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-pds-tw-03":{"id":"scene-pds-tw-03","parentId":"fair-pds-tw","imageSrc":"assets/scenes/pds-tw-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzI0LjQ4IiBjeT0iMjU3LjQwMDAwMDAwMDAwMDAzIiByeD0iMzI0LjQ4IiByeT0iMjQ4LjA0MDAwMDAwMDAwMDAyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[9.36,0,505.44000000000005,648.96],"zoomedBox":[9.36,0,505.44000000000005,648.96],"label":"戏曲与看戏人群","url":null,"text":"### 戏曲与看戏人群\n**没有戏台实拍时，戏曲场景怎样诚实呈现？**\n2017报道确认这里举办戏曲节目，但没有可核对的舞台与剧目影像。插画于是用演员、舞台和围坐观众说明看戏这一活动关系，并把服装、布景与座次明确留在艺术补全层。页面解释台上台下的分工，不凭戏服给节目指定名称。\n\n2017第二届庙会报道列戏曲节目；没有可核对的戏台实拍或剧目信息。\n\n资料：2017年2月15日历史现场报道文字依据\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-pds-tw-03-opera-sleeve","object-pds-tw-03-audience-bench"],"label_anchor_points":[416,271.44],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":416,"anchorY":271.44,"labelX":416,"labelY":206.44,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-pds-tw-03-opera-sleeve":{"id":"object-pds-tw-03-opera-sleeve","parentId":"scene-pds-tw-03","imageSrc":"assets/scenes/pds-tw-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTA0IiBjeT0iMzQyIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[140,744,545,1464],"zoomedBox":[140,744,545,1464],"label":"演员长袖","url":null,"text":"### 演员长袖\n长袖让演员的手部动作在台下更容易被看见，图中以蓝红戏服表现对向表演。来源只确认戏曲这一活动类型，具体衣饰与姿态均为文字创作的可视化，因此不能据此辨认剧种、角色或舞台程式。\n- **它在庙会中的作用**：示意台上动作如何被观众看到\n- **记载与补全**：2017年2月15日历史现场报道文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1104,342],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":964,"labelY":247,"anchorX":1104,"anchorY":342,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-pds-tw-03-audience-bench":{"id":"object-pds-tw-03-audience-bench","parentId":"scene-pds-tw-03","imageSrc":"assets/scenes/pds-tw-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTM2IiBjeT0iNzI5IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[495,776,900,1496],"zoomedBox":[495,776,900,1496],"label":"观众长凳","url":null,"text":"### 观众长凳\n长凳将停留看戏的人组织在面对舞台的一侧，使表演区与观看区在图上清楚分开。它是为解释活动关系而加入的场景细节，现有报道没有座位布置图，不能把插画长凳当作当年现场设施记录。\n- **它在庙会中的作用**：示意持续观看所需的停留空间\n- **记载与补全**：2017年2月15日历史现场报道文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1136,729],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":996,"labelY":634,"anchorX":1136,"anchorY":729,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-pds-tw-04":{"id":"scene-pds-tw-04","parentId":"fair-pds-tw","imageSrc":"assets/scenes/pds-tw-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI1Ni4zMiIgY3k9IjY0NS44NCIgcng9IjQwNy42OCIgcnk9IjI5MC4xNTk5OTk5OTk5OTk5NyIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[355.68,848.64,936,1664],"zoomedBox":[355.68,848.64,936,1664],"label":"糖画制作摊","url":null,"text":"### 糖画制作摊\n**一张糖画桌怎样同时承担制作和展示？**\n桌面上的正在绘制图案让游客看到过程，竖起的竹签成品则让人看见结果。儿童的目光停在手艺人手边，交易因此同时是一段围观体验。2018游记支持这种摊位关系，具体动物图案、工具形状与糖浆颜色经过绘画整理。\n\n历史游记明确记载糖画摊、桌面展示、竹签成品和围观儿童。\n\n资料：2018年第3期历史游记文字依据\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-pds-tw-04-sugar-drawing","object-pds-tw-04-bamboo-stick"],"label_anchor_points":[1314.56,580.32],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1314.56,"anchorY":580.32,"labelX":1314.56,"labelY":515.32,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-pds-tw-04-sugar-drawing":{"id":"object-pds-tw-04-sugar-drawing","parentId":"scene-pds-tw-04","imageSrc":"assets/scenes/pds-tw-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NzYiIGN5PSI3MTEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,616,900,1336],"zoomedBox":[495,616,900,1336],"label":"桌面糖画","url":null,"text":"### 桌面糖画\n游记记录糖画摊和桌面展示，图中将金黄色线条铺在浅色平面上，方便近距离观察图案逐步成形。具体动物造型和制作动作没有实拍支持，这里不提供温度、配方或完整工艺步骤。\n- **它在庙会中的作用**：让制作过程成为摊位的观看内容\n- **记载与补全**：2018年第3期历史游记文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[976,711],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":836,"labelY":616,"anchorX":976,"anchorY":711,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-pds-tw-04-bamboo-stick":{"id":"object-pds-tw-04-bamboo-stick","parentId":"scene-pds-tw-04","imageSrc":"assets/scenes/pds-tw-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NDQiIGN5PSIzMzMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[130,584,535,1304],"zoomedBox":[130,584,535,1304],"label":"竹签糖画成品","url":null,"text":"### 竹签糖画成品\n竹签成品在游记中有明确记述，它使平面糖画能够竖起陈列或被游客拿走，连接制作台与随身商品。插画让不同轮廓分层出现，但品种、数量和售价都没有可靠名录，不能据此编成菜单。\n- **它在庙会中的作用**：把手工作品变成可展示和携带的小物\n- **记载与补全**：2018年第3期历史游记文字依据。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[944,333],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":804,"labelY":238,"anchorX":944,"anchorY":333,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-ay-dk":{"id":"fair-ay-dk","parentId":"54749336813040","label":"安阳","imageSrc":"assets/worlds/ay-dk.webp","box":[95,1309.76,358.08,1564.24],"zoomedBox":[95,1309.76,358.08,1564.24],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNDU3LjA0LDI5Ny4yNCBMMTQ1OC44MywyOTguNDMgTDE0NTguOTQsMzAyLjg0IEwxNDU1LjcyLDMwNS45NCBMMTQ1NC40LDMwOC4xIEwxNDU0LjksMzA5Ljk4IEwxNDU2LjMxLDMxMS4wNiBMMTQ1Ny45MSwzMTguNTcgTDE0NTUuOTksMzIwLjgzIEwxNDU1LjU0LDMyMy41OCBMMTQ1OC45MywzMjcuMDIgTDE0NTcuODYsMzMxLjExIEwxNDU0LjI1LDMzMC43OCBMMTQ1NC4xNCwzMzIuOTQgTDE0NTUuODYsMzMzLjY4IEwxNDU2LjU2LDMzNi4xMiBMMTQ1NC45OSwzMzguNDUgTDE0NTIuNjUsMzM4LjMyIEwxNDU0Ljg2LDM0My42MSBMMTQ1Mi42LDM0NC44IEwxNDUxLjgxLDM0Ni4yNSBMMTQ1Mi43NSwzNDkuOTQgTDE0NTQuODYsMzUxLjEyIEwxNDUxLjk3LDM1My4zMiBMMTQ1Mi4zOSwzNTQuOTQgTDE0NTMuMzksMzUzLjczIEwxNDU2LjMzLDM1My4wMyBMMTQ1OS4zNywzNTQuNDIgTDE0NTkuNDQsMzU3LjQ0IEwxNDYxLjQ3LDM1OC4wOCBMMTQ2Mi44NSwzNTYuMTUgTDE0NjUuNzYsMzU1LjY0IEwxNDY5Ljk5LDM1Ny45MiBMMTQ3MS4yOSwzNTQuODYgTDE0NzMuMDYsMzUzLjAxIEwxNDc3LjM4LDM1MS4zNCBMMTQ4MC4wOCwzNDkuNzIgTDE0ODEuNTgsMzQ1LjM5IEwxNDgzLjk5LDM0Mi4xOCBMMTQ5MC41MSwzMzkuOSBMMTQ5Mi41MiwzMzguNDEgTDE0OTYuMjUsMzM3LjE0IEwxNDk5LjE5LDMzNy4zOSBMMTUwMy4wMSwzMzguNjYgTDE1MDYuMTYsMzM4Ljc1IEwxNTA3LjgyLDMzNy44NSBMMTUwOS42MywzMzUuMjIgTDE1MTAuMjYsMzMwLjE3IEwxNTA5LjQ1LDMyOC4yNSBMMTUxMy40NCwzMjYuODYgTDE1MTYuOTUsMzI2LjYxIEwxNTIwLjIxLDMyNy4zOCBMMTUyMS41NSwzMjYuNDkgTDE1MjUuNzUsMzI2Ljk5IEwxNTMwLjQ0LDMyNi4xIEwxNTMwLjU4LDMyNC40NSBMMTUzOS40OSwzMTYuODQgTDE1NDMuNzEsMzE2LjkxIEwxNTQ3LjI0LDMxNi4xNiBMMTU1Ny4yNSwzMTguNDIgTDE1NjAuMzMsMzE0LjI1IEwxNTYzLjc1LDMxMC44MiBMMTU2Mi45NSwzMDYuMzMgTDE1NTkuNjIsMzA0Ljg1IEwxNTU5LjI1LDMwMy42IEwxNTYwLjM0LDMwMS4yMSBMMTU2MC45MiwyOTUuNzUgTDE1NTYuNTIsMjk2LjM1IEwxNTU1LjAyLDI5NS42NSBMMTU1NS4yNSwyOTMuMzMgTDE1NTcuNjQsMjkwLjk4IEwxNTU5LjcxLDI5MC4zMSBMMTU2MC42OSwyODcuMzEgTDE1NjAuNDgsMjgyLjg3IEwxNTU5LjI4LDI3NS4xOSBMMTU1Ny41NiwyNzMgTDE1NDkuMjEsMjcxLjg5IEwxNTQ0Ljc0LDI2OC43NCBMMTU0NC40MSwyNjUuMDcgTDE1NDIuNzksMjYzLjI5IEwxNTQyLjk5LDI2Mi4xNSBMMTU0NS43MiwyNTguMDkgTDE1NDguNzEsMjU3LjQ2IEwxNTQ5LjY4LDI1NC45NSBMMTU1MS4yMiwyNTQuMDIgTDE1NTEuMDcsMjQ4Ljc2IEwxNTQ5LjU5LDI0NS44MiBMMTU1MC41MiwyNDQuNSBMMTU0OS4wNywyNDAuOTEgTDE1NDUuNjQsMjM3LjE5IEwxNTQ1LjMxLDIzMy44OSBMMTU0Ni40MiwyMzEuNDggTDE1NDkuMTgsMjMxLjEyIEwxNTUxLjYyLDIyNy44NiBMMTU1NS44MSwyMjMuNDEgTDE1NTYuNzcsMjE4LjkgTDE1NTYuMTYsMjE3LjYzIEwxNTU0LDIxNi45OSBMMTU1My44MiwyMTMuMTMgTDE1NTQuMzEsMjExLjE1IEwxNTU3LjU4LDIxMC4yNyBMMTU1OC43MywyMDkuMTIgTDE1NjAuNzgsMjA0LjkgTDE1NjAuOTQsMjAyLjg5IEwxNTYyLjI2LDE5OS42IEwxNTYxLjIyLDE5NS40IEwxNTYyLjcxLDE4OS4zNyBMMTU2NC4yNCwxODUuOTkgTDE1NjMuMjksMTgxLjg2IEwxNTYzLjgzLDE3OS44NCBMMTU2Mi43NCwxNzcuMjQgTDE1NjEuNTksMTc4LjIyIEwxNTYxLjU3LDE3NS4yMiBMMTU2My4zLDE3My41OSBMMTU2My40MSwxNzIuMTMgTDE1NjAuNTgsMTcwLjUxIEwxNTU1LjU5LDE2OS4zNSBMMTU1MS41MiwxNjcuMDMgTDE1NTAuMzcsMTY2LjIgTDE1NTIuNTgsMTU3LjcxIEwxNTUxLjc1LDE1NC42IEwxNTUwLjEsMTUzLjU4IEwxNTQ4LjkzLDE1MC43OCBMMTU0OS45NCwxNDYuMTQgTDE1NDYuMzYsMTQ2LjIzIEwxNTQ2LjEyLDE0NS4zOCBMMTU0MS42NywxNDQuNzMgTDE1MzkuODEsMTQ1LjI2IEwxNTM5LjYsMTQ5LjAyIEwxNTM2LjYxLDE0OC4xMiBMMTUzNC43MiwxNDguNDMgTDE1MzMuNTEsMTQ5Ljk0IEwxNTI5LjI5LDE0OC4zIEwxNTI3LjA1LDE0OC41IEwxNTI0Ljc0LDE0Ny43OSBMMTUyNC42MywxNDguOTYgTDE1MjIuMDMsMTQ5LjUyIEwxNTIxLjc4LDE0Ny4zOSBMMTUxOS42NSwxNDYuNTQgTDE1MTkuNjUsMTQ0Ljc0IEwxNTE2LjQyLDE0Mi42NiBMMTUxMy44MywxNDYuMjMgTDE1MTIuMTQsMTQ1LjAxIEwxNTA4LjUsMTQ0LjgzIEwxNTA4LjI3LDE0Ni42IEwxNTAxLjUsMTQ2LjE4IEwxNDk4LjExLDE0Ny4yMyBMMTQ5Ni44MywxNDkuODEgTDE0OTQuNzcsMTQ5Ljk4IEwxNDkzLjE1LDE0OC44OSBMMTQ5MS45OSwxNTAuNDUgTDE0ODcuODMsMTUwLjQ3IEwxNDg4LjY0LDE0Ni4wMyBMMTQ4Ni40OSwxNDUuNSBMMTQ4NS4xLDE0My40NCBMMTQ4My4yMSwxNDMuOCBMMTQ4MC41LDE0MS4zIEwxNDc4LjI1LDE0MS4yNyBMMTQ3OC40NywxMzkuMDkgTDE0NzMuMjEsMTM4Ljg5IEwxNDczLjMzLDEzNy43NCBMMTQ3MC4zMiwxMzcuNTIgTDE0NjkuMjUsMTM2LjMgTDE0NjguNTcsMTM3LjY3IEwxNDY1LjkyLDEzMy4xNSBMMTQ2My4zLDEzMi4xIEwxNDU5LjMyLDEzMi4wNCBMMTQ1Ni43NSwxMzEuMjkgTDE0NTUuMDQsMTI3LjA2IEwxNDUyLjAxLDEyNy44NCBMMTQ0Ny4zNCwxMjYuODQgTDE0NDUuMTksMTI1Ljc1IEwxNDQ0Ljc2LDEyMi45NiBMMTQ0My40MywxMjIuMzEgTDE0NDMuMTIsMTE5Ljk3IEwxNDQwLjEzLDExOS45NSBMMTQzOS45NiwxMjEuNzEgTDE0MzcuMDMsMTIwLjkyIEwxNDM2LjUsMTIyLjAzIEwxNDM0LjQzLDEyMi4yMiBMMTQyOS43LDEyMC4yMiBMMTQyNi40MiwxMTguMTIgTDE0MjMuNTIsMTIwLjk4IEwxNDIyLjQ5LDEyMC42NyBMMTQyMC4yNiwxMTYuNTYgTDE0MTcuOCwxMTYuMTMgTDE0MTYuMzgsMTIyLjI2IEwxNDEzLDEyMS42NCBMMTQxMi4yNCwxMjIuODEgTDE0MDkuOTMsMTIyLjc5IEwxNDExLjQsMTE4LjMyIEwxNDA5LjE3LDExNi44NSBMMTQwOC43OSwxMTcuODUgTDE0MDIuODgsMTE0LjExIEwxNDAxLDExNi4xNCBMMTM5Ni41LDExNS41NyBMMTM5NS41NywxMTQuOTkgTDEzOTQuMjEsMTE2LjczIEwxMzg5LjUzLDExNS4yOCBMMTM4OS4xLDExMy4yNyBMMTM4Ni4xNiwxMTAuNTYgTDEzODcuMTYsMTA3LjYxIEwxMzg5LjcyLDEwNS44NyBMMTM4OC42MiwxMDMuMTUgTDEzODYuNjQsMTA0LjA3IEwxMzgzLjYsMTAzLjkzIEwxMzgzLjAzLDEwMy4wMyBMMTM4NC4yNiwxMDAuOSBMMTM4My45NCw5OC40NCBMMTM4Mi43OCw5Ny41MSBMMTM4MC45OSw5Ny45NCBMMTM3OS43MywxMDAuMzEgTDEzNzUuNDcsOTYuOSBMMTM3My45OCw5Ni42NyBMMTM3NC4zMyw5OS45NSBMMTM3Ny4wOSw5OS45MyBMMTM3Ny4wNywxMDEuNTUgTDEzNzguNSwxMDIuODUgTDEzNzYuNTYsMTAzLjg3IEwxMzc2Ljk3LDEwNi42NCBMMTM3NC43OCwxMDUuOTQgTDEzNzMuOTcsMTAzLjMyIEwxMzcyLjIsMTAwLjk1IEwxMzcxLjM5LDk4LjAzIEwxMzY5LjMyLDk2Ljc2IEwxMzY4LjEsOTcuNTIgTDEzNjguNDksOTkuNSBMMTM3MC42Niw5OS44MSBMMTM2OS44NywxMDEuODggTDEzNjUuNzksMTAxLjc2IEwxMzY1LjI2LDEwNS41MyBMMTM2MS40MSwxMDYuNiBMMTM1OS41MSwxMDEuNTYgTDEzNTUuODIsOTcuNzMgTDEzNTAuNTcsOTguNTkgTDEzNDkuNzYsOTkuMzMgTDEzNTAuNjQsMTAzLjIxIEwxMzQ2LjkxLDEwMi4xNiBMMTM0My45MSwxMDIuODkgTDEzNDAuNzEsMTAxLjI1IEwxMzM5Ljg3LDk5LjE3IEwxMzM2LjIyLDk4LjY1IEwxMzM2LjQ1LDk2LjM5IEwxMzMzLjU4LDk3LjI1IEwxMzMyLjAzLDk1IEwxMzI5LjU5LDk1LjM0IEwxMzI5Ljc5LDk2LjkgTDEzMjcuODgsOTcuMDEgTDEzMjcuNTYsOTUuNTggTDEzMjcuMDUsMTAwLjU1IEwxMzI4LjUsMTA0LjM1IEwxMzI2LjA0LDEwOC44NSBMMTMyMy4zNSwxMTAuMDEgTDEzMjQuNywxMTguNDQgTDEzMjMuMzYsMTE4LjY4IEwxMzIxLjc1LDEyMC43OCBMMTMyMi4zNywxMjQuMDUgTDEzMjAuNzQsMTI2LjExIEwxMzE3LjM2LDEyNy41MiBMMTMxNi40LDEyOS45MiBMMTMxOC4yNiwxMjguOTQgTDEzMjEuMzYsMTI5LjM5IEwxMzIyLjY2LDEzMi40OCBMMTMyMC4wNCwxMzIuMTkgTDEzMTkuMDcsMTMzLjY2IEwxMzIxLjI1LDEzNi43NSBMMTMxNi40MywxMzguMTYgTDEzMTQuOTYsMTM3Ljc1IEwxMzEyLjU0LDEzOC45MyBMMTMxNC4xMSwxNDAuNzYgTDEzMTcuNzQsMTQxLjcyIEwxMzE4LjEzLDE0My44MSBMMTMyMC44MSwxNDMuMjUgTDEzMjIuOTMsMTQ0LjU3IEwxMzIyLjE0LDE0NS41MSBMMTMyMi43MSwxNDcuNTcgTDEzMjQuMjMsMTQ3LjgzIEwxMzIwLjM2LDE0OS44MyBMMTMxNi42NSwxNDkuNTYgTDEzMTUuNzIsMTQ4LjU4IEwxMzEzLjI3LDE0OS42MiBMMTMxNi43MSwxNTIuNjggTDEzMTUuODYsMTU0LjQgTDEzMTcuNzksMTU2LjY3IEwxMzE4LjY0LDE2MC4yMyBMMTMxOC4zMiwxNjIuODQgTDEzMTguOTYsMTY1LjI5IEwxMzE1Ljc0LDE2Ni44NiBMMTMxNC4zOCwxNjguMjcgTDEzMTQuMTksMTcwLjEzIEwxMzE2LjAzLDE3MS4zIEwxMzIwLjczLDE3MS45MiBMMTMyMC43NCwxNzMuODYgTDEzMTguMDIsMTc0LjYzIEwxMzIwLjg3LDE3OC4wMiBMMTMxOS4wOSwxODEuMDcgTDEzMTcuNjUsMTgxLjIxIEwxMzEyLjAyLDE3OS4zMiBMMTMwOS45NCwxODAuNjEgTDEzMDkuNzYsMTgzLjQ2IEwxMzExLjgyLDE4NS40NSBMMTMxMi45OCwxOTMuNTQgTDEzMTMuMDYsMTk2Ljc2IEwxMzExLjk5LDE5OC43NCBMMTMwOS44NSwyMDcuNDkgTDEzMTEuMTEsMjEwLjkgTDEzMTMuNzcsMjExLjEyIEwxMzE0LjMxLDIxNC45IEwxMzIxLjc1LDIxNC44OSBMMTMyMy4zNiwyMTUuNzIgTDEzMjIuNzcsMjE3LjMyIEwxMzIzLjg3LDIxOS4yNSBMMTMyNi42OSwyMTguMDkgTDEzMjcuNjMsMjE5LjEgTDEzMjkuNzIsMjE5LjAyIEwxMzMyLjIzLDIyNC43OCBMMTMzMS40MSwyMjYgTDEzMzIuNTQsMjI3LjI1IEwxMzMyLjg5LDIzMC43NCBMMTMzNi40NCwyMzEuNjkgTDEzMzYuMDcsMjMyLjU2IEwxMzQwLjUxLDIzNi43OCBMMTM0MS45OCwyMzYuMzkgTDEzNDAuNzgsMjM4LjQzIEwxMzQwLjQ2LDI0Mi45NSBMMTMzOS4zOSwyNDcuMDkgTDEzMzYuMjUsMjQ5LjUxIEwxMzM3Ljc1LDI1MS44MiBMMTM0MS42NSwyNTIuMTYgTDEzNDIuNjQsMjUxLjI4IEwxMzQ4LjcsMjUxLjA2IEwxMzUxLjYyLDI1MC4wMyBMMTM1My4zNSwyNTAuNCBMMTM1Ni43MywyNDkuNTcgTDEzNTkuNjEsMjUxLjE1IEwxMzYzLjY1LDI1MC4xNSBMMTM2NC40OCwyNDkuMiBMMTM2NS4yNywyNDUuMTMgTDEzNjguNTQsMjQ1LjgzIEwxMzY5Ljg5LDI0Ny45NyBMMTM3Mi40LDI0OC4zOSBMMTM3NS4zNSwyNDUuODYgTDEzNzcuMzgsMjQ0Ljk0IEwxMzc3LjgyLDI0MS41NCBMMTM3OC42LDI0MC40MSBMMTM4MS40NCwyNDAuMTUgTDEzODQuMzIsMjM3LjYzIEwxMzg2LjIzLDIzNS4xMiBMMTM4OC41NiwyMzQuODcgTDEzOTAuOCwyMzIuNjIgTDEzOTAuNjcsMjI4LjkzIEwxMzkxLjU3LDIyNy45NiBMMTM5Mi44NSwyMjIuNjcgTDEzOTEuMTUsMjIyLjE2IEwxMzg3LjgxLDIyMy45MSBMMTM4NS4xMiwyMjIuNiBMMTM4Mi44NywyMjQuMDEgTDEzODIuMzgsMjIyLjM4IEwxMzg0Ljg1LDIxOS4xNyBMMTM4NC45LDIxNy43OCBMMTM4Mi45NiwyMTYuNjggTDEzODAuOTUsMjEzLjE0IEwxMzgwLjc3LDIxMS40MyBMMTM4MS44OSwyMTAuMDUgTDEzODUuNDEsMjA5Ljg2IEwxMzg4LjgxLDIwNy40MSBMMTM5MS4zNywyMDYuNzUgTDEzOTIuMjgsMjA1IEwxMzkyLjIzLDE5OS42OCBMMTM5My41LDE5Ny4yNSBMMTM4OC4wNiwxOTMuNjIgTDEzODUuNzUsMTkyLjU4IEwxMzg1LjQzLDE5MC42MiBMMTM4My41NiwxODkuMjIgTDEzODMuODcsMTg0LjM5IEwxMzg2LjUzLDE4NC4yOCBMMTM5MC40NywxODYuMTMgTDEzOTEuODksMTgzLjc3IEwxMzkzLjk1LDE4My43OSBMMTM5NS45NCwxODIuMjggTDEzOTguNDgsMTgyLjExIEwxMzk3LjYyLDE3OS4wNiBMMTM5OS4wOSwxNzQuMTIgTDE0MDEuMDUsMTcxLjg2IEwxNDAzLjY5LDE3MC44MyBMMTQwOC4wNiwxNjcuMjYgTDE0MTEuMTMsMTY2LjE3IEwxNDExLjg5LDE2OS4wNSBMMTQxMS4wNiwxNzAuODkgTDE0MTEuNywxNzUgTDE0MTAuMTIsMTc3LjggTDE0MTEuMDYsMTgwLjUzIEwxNDEyLjM2LDE4MS44OCBMMTQxNC4yNCwxODIuMjEgTDE0MTUuMzMsMTgwLjIzIEwxNDE2Ljc0LDE4MC41NiBMMTQxOS4xOCwxNzguNTIgTDE0MjAuMjQsMTgyLjE0IEwxNDI1LjQ3LDE4NC4zNiBMMTQzMC44NSwxODQuMTYgTDE0MzAuODUsMTg5LjkyIEwxNDM0LjA0LDE4Ny41NCBMMTQzNi4zNywxODguNzEgTDE0MzMuNDIsMTkxLjk5IEwxNDM1LjE5LDE5My43MyBMMTQzMy43OSwxOTUuMDkgTDE0MzIuNzcsMTk0LjEzIEwxNDMwLjMzLDE5NS4xMiBMMTQyOS4xMiwyMDAuNyBMMTQzMS4wMiwyMDIuNDEgTDE0MjkuODQsMjA0LjcgTDE0MjUuMzgsMjA1LjkzIEwxNDI0LjEzLDIwNy4wNSBMMTQyMy45LDIwOSBMMTQyMi4yNywyMTAuNjYgTDE0MjEuMjksMjE0LjA0IEwxNDIyLjc2LDIyMS4yNyBMMTQyMy42NiwyMjEuODcgTDE0MjMuOTIsMjI0LjkyIEwxNDI1LjM3LDIyNC44MSBMMTQyNy43MiwyMjkuMTUgTDE0MjYuMjgsMjI5LjE1IEwxNDI2LjIsMjMwLjc2IEwxNDI5LjA1LDIzMi4yNiBMMTQzMS42NywyMjcuMTQgTDE0MzMuNjEsMjI0LjYzIEwxNDM5Ljk2LDIyMi44NiBMMTQ0NC4xMSwyMTkuNzIgTDE0NDYuODEsMjE5LjA1IEwxNDUyLjg1LDIxOS41NCBMMTQ1NS4wNCwyMTguNjQgTDE0NjAuNjksMjE5LjQgTDE0NjIuMDgsMjE5IEwxNDYzLjEyLDIxNi44MyBMMTQ2Ni43OSwyMTcuMTIgTDE0NjguMTksMjE1LjQ1IEwxNDc0LjA3LDIxNS4wMiBMMTQ4Mi4yNSwyMTYuOTUgTDE0ODQuOCwyMTMuNDMgTDE0ODUuNTUsMjE1LjE5IEwxNDg4Ljc3LDIxNC4yNiBMMTQ5MC42NiwyMTcuNjQgTDE0OTMuMywyMTguMzEgTDE0OTMuNzIsMjIxLjUyIEwxNDk4LDIyNC43IEwxNTAyLjE3LDIyNS4yOCBMMTUwNS4yOCwyMjcuNDIgTDE1MDkuMTEsMjI2LjIyIEwxNTExLjY4LDIyNi4yIEwxNTEzLjY4LDIyOC4yNiBMMTUxOS42MywyMzEuNjYgTDE1MTkuOTksMjM0LjAxIEwxNTE5LjYzLDIzNy40OSBMMTUxNi42NSwyNDQuMDcgTDE1MTUuMDMsMjQ2LjUxIEwxNTExLjQzLDI0Ny4zMiBMMTUxMSwyNDguNDEgTDE1MDcuNjYsMjQ5LjYyIEwxNTA1LjcsMjUyLjYgTDE1MDQuODQsMjU2LjQ3IEwxNTAyLjU0LDI1Ny4xMiBMMTQ5OS42MywyNTYuMjcgTDE0OTQuNjMsMjU3Ljk1IEwxNDk0LjA1LDI2MC40MSBMMTQ4OS41NSwyNjIuMTIgTDE0ODYuNzUsMjY0LjkgTDE0ODMuMjcsMjY1LjY1IEwxNDgxLjU2LDI2NS4zNSBMMTQ4MC40NiwyNjguMTEgTDE0NzIuNzYsMjY2LjYxIEwxNDcxLjM0LDI2OC43IEwxNDcyLjMxLDI3MC4yIEwxNDcxLjgzLDI3Mi4zMSBMMTQ2OS4wMiwyNzIuMjQgTDE0NjkuNjcsMjc0LjgyIEwxNDY3Ljc4LDI3Ni42IEwxNDYzLjksMjc4LjMyIEwxNDU4LjM4LDI4MS4zNSBMMTQ1Ni42MywyODMuNzEgTDE0NTMuODgsMjg1LjQ5IEwxNDUyLjUyLDI4OS4zOCBMMTQ1NS4yLDI5My44NSBMMTQ1Ny4yOSwyOTUuMDcgTDE0NTcuMDQsMjk3LjI0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 道口火神庙会\n道口古会最鲜明的场景在街道上：龙头越过人群，竹马与戏装队伍穿行，烧鸡和壮馍的经营点又留住赶会者。古镇商业、会社表演与近距离围观相互交织，传统主会和2026延长展演各有时间边界。","childrenIds":["scene-ay-dk-02","scene-ay-dk-03","scene-ay-dk-04"],"label_anchor_points":[1445.59,205.54],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1445.59,"anchorY":205.54,"labelX":1390,"labelY":140,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-ay-dk-02":{"id":"scene-ay-dk-02","parentId":"fair-ay-dk","imageSrc":"assets/scenes/ay-dk-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzk5LjM2IiBjeT0iMTc3Ljg0IiByeD0iMzk5LjM2IiByeT0iMTc3Ljg0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[0,0,355.68,798.72],"zoomedBox":[0,0,355.68,798.72],"label":"瓦顶店面与龙头","url":null,"text":"### 瓦顶店面与龙头\n**古街店面如何与临时社火道具共处？**\n瓦顶店面为日常经营提供长期界面，竖在旁边的龙头则来自节会表演。游客可以停下来拍照，也可能等待队伍经过。画面把表演间歇的停留关系放大，具体店名和商品不凭背景招牌补造，更不把整段商业街解释为一座连续舞台。\n\n两位古装人物站在古街店面前，旁边竖立红绿龙头道具。\n\n资料：2025-02-24（文中现场日期）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ay-dk-02-tiled-shopfront"],"label_anchor_points":[432.64,159.12],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":432.64,"anchorY":159.12,"labelX":432.64,"labelY":94.12,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ay-dk-02-tiled-shopfront":{"id":"object-ay-dk-02-tiled-shopfront","parentId":"scene-ay-dk-02","imageSrc":"assets/scenes/ay-dk-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTg0IiBjeT0iMjYxIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[58,824,463,1544],"zoomedBox":[58,824,463,1544],"label":"瓦顶店面","url":null,"text":"### 瓦顶店面\n同届现场图文展示瓦顶古街及店面，与道具和便装游客处在同一画面。它说明古会使用日常商业空间，不能证明每间铺面在庙会期间都经营相同商品；插画已简化未核实招牌，不虚构商户名称。\n- **它在庙会中的作用**：提供社火穿行的长期街道背景\n- **记载与补全**：2025-02-24（文中现场日期）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1184,261],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1044,"labelY":166,"anchorX":1184,"anchorY":261,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ay-dk-03":{"id":"scene-ay-dk-03","parentId":"fair-ay-dk","imageSrc":"assets/scenes/ay-dk-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNzczLjc2IiBjeT0iNTEwLjEyIiByeD0iNDA3LjY4MDAwMDAwMDAwMDA2IiByeT0iMjc2LjEyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[234,366.08,786.24,1181.44],"zoomedBox":[234,366.08,786.24,1181.44],"label":"竹马巡演","url":null,"text":"### 竹马巡演\n**腰间一匹竹马怎样让步行成为表演？**\n马形道具围在演员腰间，人的步行与道具轮廓结合，制造骑乘般的移动形象；背旗与头冠又将注意力向上延伸。2025报道支持竹马舞的器物线索，图中队列和动作是插画整理。网页解释器物与身体关系，不复原未公布的舞步。\n\n2025报道记载竹马舞：戏服、背旗、腰挎竹制木马、竹鞭与脸谱；照片AY03用于服装冠饰参考。\n\n资料：2025-02-24现场报道\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ay-dk-03-bamboo-horse","object-ay-dk-03-bamboo-whip"],"label_anchor_points":[832,393.12],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":832,"anchorY":393.12,"labelX":832,"labelY":328.12,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ay-dk-03-bamboo-horse":{"id":"object-ay-dk-03-bamboo-horse","parentId":"scene-ay-dk-03","imageSrc":"assets/scenes/ay-dk-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4NjQiIGN5PSI1NDAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[338,504,743,1224],"zoomedBox":[338,504,743,1224],"label":"腰挎竹马","url":null,"text":"### 腰挎竹马\n2025报道记述腰挎竹制木马的竹马表演，演员仍以双脚在地面移动。马形道具把身体包在一个可辨的角色轮廓里，与真正骑马不同；插画的马头纹样、裙边和尺寸属于艺术补全。\n- **它在庙会中的作用**：将步行动作转化为骑乘形象\n- **记载与补全**：2025-02-24现场报道。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[864,540],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":724,"labelY":445,"anchorX":864,"anchorY":540,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ay-dk-03-bamboo-whip":{"id":"object-ay-dk-03-bamboo-whip","parentId":"scene-ay-dk-03","imageSrc":"assets/scenes/ay-dk-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2ODgiIGN5PSIzNTEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[148,328,553,1048],"zoomedBox":[148,328,553,1048],"label":"手持竹鞭","url":null,"text":"### 手持竹鞭\n竹鞭是报道列出的竹马表演道具，与腰间马形相互配合，帮助观众识别表演主题。图中所呈现的举持角度只是一种概念姿态，不能根据它推断连续动作、击打用途或各队统一的道具规格。\n- **它在庙会中的作用**：补充竹马角色的动作线索\n- **记载与补全**：2025-02-24现场报道。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[688,351],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":828,"labelY":256,"anchorX":688,"anchorY":351,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ay-dk-04":{"id":"scene-ay-dk-04","parentId":"fair-ay-dk","imageSrc":"assets/scenes/ay-dk-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTQ3Mi42Mzk5OTk5OTk5OTk5IiBjeT0iNjQxLjE2IiByeD0iMTkxLjM2IiByeT0iMjk0Ljg0MDAwMDAwMDAwMDAzIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[346.32,1281.28,936,1664],"zoomedBox":[346.32,1281.28,936,1664],"label":"烧鸡与壮馍","url":null,"text":"### 烧鸡与壮馍\n**同一个经营点怎样讲清烧鸡与壮馍？**\n两种食品分别放在托盘上，摊主夹取与递包装的动作连接游客选择。2025现场报道能确认品类，却没有摊位近照，所以台面组合、食品切片与包装属于概念补全。页面介绍当地赶会中的饮食对象，不提供凭画面猜测的配方、品牌和售价。\n\n2025现场报道记录道口烧鸡和壮馍；没有摊位近照，经营点陈设为艺术补全。\n\n资料：2025现场报道；摊位外观艺术补全\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ay-dk-04-daokou-chicken","object-ay-dk-04-zhuangmo"],"label_anchor_points":[1447.68,655.1999999999999],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1447.68,"anchorY":655.1999999999999,"labelX":1447.68,"labelY":590.1999999999999,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ay-dk-04-daokou-chicken":{"id":"object-ay-dk-04-daokou-chicken","parentId":"scene-ay-dk-04","imageSrc":"assets/scenes/ay-dk-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0MzIiIGN5PSI2MzAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[428,72,833,792],"zoomedBox":[428,72,833,792],"label":"道口烧鸡","url":null,"text":"### 道口烧鸡\n道口烧鸡在2025古会现场报道中被明确提及，可以作为当地食品线索。插画通过整鸡、夹取与包装表现经营互动，但原报道没有本摊近照；色泽、盘装和制作细节不作为具体商家的产品标准。\n- **它在庙会中的作用**：让地方食品与经营动作联系起来\n- **记载与补全**：2025现场报道；摊位外观艺术补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[432,630],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":572,"labelY":535,"anchorX":432,"anchorY":630,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ay-dk-04-zhuangmo":{"id":"object-ay-dk-04-zhuangmo","parentId":"scene-ay-dk-04","imageSrc":"assets/scenes/ay-dk-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDU2IiBjeT0iNzExIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[495,696,900,1416],"zoomedBox":[495,696,900,1416],"label":"壮馍","url":null,"text":"### 壮馍\n壮馍同样见于2025现场报道，图中以切开的层状块面与整鸡区分，帮助读者认识两种不同商品。馅料比例、尺寸、售价及实际陈列方式未被核实，页面不从插画外观补写地方食品的标准配方。\n- **它在庙会中的作用**：呈现古会饮食中另一种明确品类\n- **记载与补全**：2025现场报道；摊位外观艺术补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1056,711],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":916,"labelY":616,"anchorX":1056,"anchorY":711,"labelWidth":70,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-hb-jx":{"id":"fair-hb-jx","parentId":"54749336813040","label":"鹤壁","imageSrc":"assets/worlds/hb-jx.webp","box":[166.17,1377.38,303.97,1519.99],"zoomedBox":[166.17,1377.38,303.97,1519.99],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzc3LjM4LDI0NC45NCBMMTM4MS44NiwyNDcuMDIgTDEzODMuMTgsMjQ5LjcxIEwxMzg1LjYzLDI1MC4yMiBMMTM4Ny41OSwyNTEuNTUgTDEzODkuMjUsMjU1LjcgTDEzOTAuMjQsMjYwLjE0IEwxMzg5LjE1LDI2Mi42NSBMMTM4OS40OCwyNjYuMTMgTDEzODguNzEsMjY5Ljk1IEwxMzkxLjg0LDI3My4zMyBMMTM5My4yMiwyNzYuMTIgTDEzOTcuODgsMjc5LjA4IEwxNDAwLjc1LDI3OS43OSBMMTQwNC4zNCwyODIuNjkgTDE0MTAuNDIsMjg1Ljk1IEwxNDE0LjI4LDI4Ni40MyBMMTQxNi4yMSwyODUuNzUgTDE0MTguNzMsMjg3LjQxIEwxNDIwLjQ3LDI4Ny42NCBMMTQyNy4wNiwyOTAuMjcgTDE0MzAuMTYsMjkxLjEgTDE0MzIuNzIsMjkwLjk4IEwxNDMxLjU1LDI5My4xNiBMMTQzMC4wNywyOTMuNjIgTDE0MjkuNDUsMjk2Ljc5IEwxNDMwLDI5OS4yNCBMMTQzNC4yNSwzMDAuNzUgTDE0MzYuOTUsMzAzLjQxIEwxNDM5LjE0LDMwMy45NyBMMTQ0Mi4wNSwzMDIuNTggTDE0NDIuODUsMjk5Ljk3IEwxNDQ2LDI5OC40NiBMMTQ0Ny44LDMwMC4wNiBMMTQ1MC4wNywyOTguOTcgTDE0NTAuNTYsMjk2Ljk4IEwxNDUyLjUyLDI5Ni4zMyBMMTQ1NS4yOCwyOTguMzggTDE0NTcuMDQsMjk3LjI0IEwxNDU3LjI5LDI5NS4wNyBMMTQ1NS4yLDI5My44NSBMMTQ1Mi41MiwyODkuMzggTDE0NTMuODgsMjg1LjQ5IEwxNDU2LjYzLDI4My43MSBMMTQ1OC4zOCwyODEuMzUgTDE0NjMuOSwyNzguMzIgTDE0NjcuNzgsMjc2LjYgTDE0NjkuNjcsMjc0LjgyIEwxNDY5LjAyLDI3Mi4yNCBMMTQ3MS44MywyNzIuMzEgTDE0NzIuMzEsMjcwLjIgTDE0NzEuMzQsMjY4LjcgTDE0NzIuNzYsMjY2LjYxIEwxNDgwLjQ2LDI2OC4xMSBMMTQ4MS41NiwyNjUuMzUgTDE0ODMuMjcsMjY1LjY1IEwxNDg2Ljc1LDI2NC45IEwxNDg5LjU1LDI2Mi4xMiBMMTQ5NC4wNSwyNjAuNDEgTDE0OTQuNjMsMjU3Ljk1IEwxNDk5LjYzLDI1Ni4yNyBMMTUwMi41NCwyNTcuMTIgTDE1MDQuODQsMjU2LjQ3IEwxNTA1LjcsMjUyLjYgTDE1MDcuNjYsMjQ5LjYyIEwxNTExLDI0OC40MSBMMTUxMS40MywyNDcuMzIgTDE1MTUuMDMsMjQ2LjUxIEwxNTE2LjY1LDI0NC4wNyBMMTUxOS42MywyMzcuNDkgTDE1MTkuOTksMjM0LjAxIEwxNTE5LjYzLDIzMS42NiBMMTUxMy42OCwyMjguMjYgTDE1MTEuNjgsMjI2LjIgTDE1MDkuMTEsMjI2LjIyIEwxNTA1LjI4LDIyNy40MiBMMTUwMi4xNywyMjUuMjggTDE0OTgsMjI0LjcgTDE0OTMuNzIsMjIxLjUyIEwxNDkzLjMsMjE4LjMxIEwxNDkwLjY2LDIxNy42NCBMMTQ4OC43NywyMTQuMjYgTDE0ODUuNTUsMjE1LjE5IEwxNDg0LjgsMjEzLjQzIEwxNDgyLjI1LDIxNi45NSBMMTQ3NC4wNywyMTUuMDIgTDE0NjguMTksMjE1LjQ1IEwxNDY2Ljc5LDIxNy4xMiBMMTQ2My4xMiwyMTYuODMgTDE0NjIuMDgsMjE5IEwxNDYwLjY5LDIxOS40IEwxNDU1LjA0LDIxOC42NCBMMTQ1Mi44NSwyMTkuNTQgTDE0NDYuODEsMjE5LjA1IEwxNDQ0LjExLDIxOS43MiBMMTQzOS45NiwyMjIuODYgTDE0MzMuNjEsMjI0LjYzIEwxNDMxLjY3LDIyNy4xNCBMMTQyOS4wNSwyMzIuMjYgTDE0MjYuMiwyMzAuNzYgTDE0MjYuMjgsMjI5LjE1IEwxNDI3LjcyLDIyOS4xNSBMMTQyNS4zNywyMjQuODEgTDE0MjMuOTIsMjI0LjkyIEwxNDIzLjY2LDIyMS44NyBMMTQyMi43NiwyMjEuMjcgTDE0MjEuMjksMjE0LjA0IEwxNDIyLjI3LDIxMC42NiBMMTQyMy45LDIwOSBMMTQyNC4xMywyMDcuMDUgTDE0MjUuMzgsMjA1LjkzIEwxNDI5Ljg0LDIwNC43IEwxNDMxLjAyLDIwMi40MSBMMTQyOS4xMiwyMDAuNyBMMTQzMC4zMywxOTUuMTIgTDE0MzIuNzcsMTk0LjEzIEwxNDMzLjc5LDE5NS4wOSBMMTQzNS4xOSwxOTMuNzMgTDE0MzMuNDIsMTkxLjk5IEwxNDM2LjM3LDE4OC43MSBMMTQzNC4wNCwxODcuNTQgTDE0MzAuODUsMTg5LjkyIEwxNDMwLjg1LDE4NC4xNiBMMTQyNS40NywxODQuMzYgTDE0MjAuMjQsMTgyLjE0IEwxNDE5LjE4LDE3OC41MiBMMTQxNi43NCwxODAuNTYgTDE0MTUuMzMsMTgwLjIzIEwxNDE0LjI0LDE4Mi4yMSBMMTQxMi4zNiwxODEuODggTDE0MTEuMDYsMTgwLjUzIEwxNDEwLjEyLDE3Ny44IEwxNDExLjcsMTc1IEwxNDExLjA2LDE3MC44OSBMMTQxMS44OSwxNjkuMDUgTDE0MTEuMTMsMTY2LjE3IEwxNDA4LjA2LDE2Ny4yNiBMMTQwMy42OSwxNzAuODMgTDE0MDEuMDUsMTcxLjg2IEwxMzk5LjA5LDE3NC4xMiBMMTM5Ny42MiwxNzkuMDYgTDEzOTguNDgsMTgyLjExIEwxMzk1Ljk0LDE4Mi4yOCBMMTM5My45NSwxODMuNzkgTDEzOTEuODksMTgzLjc3IEwxMzkwLjQ3LDE4Ni4xMyBMMTM4Ni41MywxODQuMjggTDEzODMuODcsMTg0LjM5IEwxMzgzLjU2LDE4OS4yMiBMMTM4NS40MywxOTAuNjIgTDEzODUuNzUsMTkyLjU4IEwxMzg4LjA2LDE5My42MiBMMTM5My41LDE5Ny4yNSBMMTM5Mi4yMywxOTkuNjggTDEzOTIuMjgsMjA1IEwxMzkxLjM3LDIwNi43NSBMMTM4OC44MSwyMDcuNDEgTDEzODUuNDEsMjA5Ljg2IEwxMzgxLjg5LDIxMC4wNSBMMTM4MC43NywyMTEuNDMgTDEzODAuOTUsMjEzLjE0IEwxMzgyLjk2LDIxNi42OCBMMTM4NC45LDIxNy43OCBMMTM4NC44NSwyMTkuMTcgTDEzODIuMzgsMjIyLjM4IEwxMzgyLjg3LDIyNC4wMSBMMTM4NS4xMiwyMjIuNiBMMTM4Ny44MSwyMjMuOTEgTDEzOTEuMTUsMjIyLjE2IEwxMzkyLjg1LDIyMi42NyBMMTM5MS41NywyMjcuOTYgTDEzOTAuNjcsMjI4LjkzIEwxMzkwLjgsMjMyLjYyIEwxMzg4LjU2LDIzNC44NyBMMTM4Ni4yMywyMzUuMTIgTDEzODQuMzIsMjM3LjYzIEwxMzgxLjQ0LDI0MC4xNSBMMTM3OC42LDI0MC40MSBMMTM3Ny44MiwyNDEuNTQgTDEzNzcuMzgsMjQ0Ljk0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 浚县正月古庙会\n浚县正月古庙会连接一座古城与两座山，会社社火、朝顶节点和泥咕咕交易共同构成地方面貌。既要看鼓阵怎样占据公共空间，也要走近桌上的彩绘泥塑；城内表演与山上朝顶不能压成同一地点。","childrenIds":["scene-hb-jx-02","scene-hb-jx-03","scene-hb-jx-04"],"label_anchor_points":[1437.64,241.15],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1437.64,"anchorY":241.15,"labelX":1490,"labelY":285,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-hb-jx-02":{"id":"scene-hb-jx-02","parentId":"fair-hb-jx","imageSrc":"assets/scenes/hb-jx-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI3Mi45NiIgY3k9IjMwNC4yIiByeD0iMzkxLjAzOTk5OTk5OTk5OTk2IiByeT0iMjk0Ljg0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[9.36,881.9200000000001,599.04,1664],"zoomedBox":[9.36,881.9200000000001,599.04,1664],"label":"城墙与鼓阵","url":null,"text":"### 城墙与鼓阵\n**鼓阵怎样让牌楼前的空间有了方向？**\n鼓手面对相近方向排列，鼓与高举的彩绸鼓槌形成前后重复，观众停在外围。牌楼提供固定背景，鼓阵则临时组织场地的使用。画面来自2025鼓队实景的艺术转译，不能由排列推定全部队伍的队形规范或曲目顺序。\n\n红金服饰的鼓手举起带彩绸的鼓槌，后方可见牌楼和其他队员。\n\n资料：2025（报道年份，具体拍摄日未披露）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-hb-jx-02-ribbon-drumstick"],"label_anchor_points":[1297.92,234],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1297.92,"anchorY":234,"labelX":1297.92,"labelY":169,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-hb-jx-02-ribbon-drumstick":{"id":"object-hb-jx-02-ribbon-drumstick","parentId":"scene-hb-jx-02","imageSrc":"assets/scenes/hb-jx-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4NDgiIGN5PSIyMzQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[32,488,437,1208],"zoomedBox":[32,488,437,1208],"label":"彩绸鼓槌","url":null,"text":"### 彩绸鼓槌\n2025现场照片可见红金衣饰鼓手举起带彩绸的鼓槌，彩绸把短促的手部动作延伸到空中。它既是可观察的道具细节，也能提示动作方向；没有核听材料时，不由姿态推断具体盘鼓节拍。\n- **它在庙会中的作用**：放大鼓阵动作并提示表演方向\n- **记载与补全**：2025（报道年份，具体拍摄日未披露）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[848,234],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":708,"labelY":139,"anchorX":848,"anchorY":234,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-hb-jx-03":{"id":"scene-hb-jx-03","parentId":"fair-hb-jx","imageSrc":"assets/scenes/hb-jx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iOTQwLjE2IiBjeT0iNTY2LjI4IiByeD0iNDQwLjk1OTk5OTk5OTk5OTkiIHJ5PSIyOTQuODQwMDAwMDAwMDAwMDMiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[271.44,499.2,861.12,1381.12],"zoomedBox":[271.44,499.2,861.12,1381.12],"label":"戏装社火","url":null,"text":"### 戏装社火\n**贴近人群的戏装社火与戏台观看有何不同？**\n人物从两侧观众之间穿过，服装、折扇与彩纸在狭长观看空间里交叠。这里没有把观众隔在遥远台下，而是让街巷成为表演发生的场所。2025图片支持近距离穿行，插画人物和队列经整理，不据未辨认的造型指定角色故事。\n\n彩色戏装社火人物从人群间穿行，空中散落彩纸，观众靠近观看。\n\n资料：2025（报道年份，具体拍摄日未披露）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-hb-jx-03-painted-fan","object-hb-jx-03-costume-sleeve"],"label_anchor_points":[998.4,449.28],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":998.4,"anchorY":449.28,"labelX":998.4,"labelY":384.28,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-hb-jx-03-painted-fan":{"id":"object-hb-jx-03-painted-fan","parentId":"scene-hb-jx-03","imageSrc":"assets/scenes/hb-jx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MzYiIGN5PSIyOTciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[94,376,499,1096],"zoomedBox":[94,376,499,1096],"label":"社火彩扇","url":null,"text":"### 社火彩扇\n折扇在戏装人物手中展开，形成身体之外的弧形轮廓，帮助观众在密集画面里辨认动作。现场图可以支持彩色戏装与穿行关系，但具体扇面图案和角色身份没有单独记录，插画将其作为动作细节。\n- **它在庙会中的作用**：扩大近距离社火的动作轮廓\n- **记载与补全**：2025（报道年份，具体拍摄日未披露）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[736,297],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":876,"labelY":202,"anchorX":736,"anchorY":297,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-hb-jx-03-costume-sleeve":{"id":"object-hb-jx-03-costume-sleeve","parentId":"scene-hb-jx-03","imageSrc":"assets/scenes/hb-jx-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NDQiIGN5PSI1MzEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[328,584,733,1304],"zoomedBox":[328,584,733,1304],"label":"彩色戏服衣袖","url":null,"text":"### 彩色戏服衣袖\n宽袖与身上的彩色纹饰使移动人物从日常冬装观众中突出，也让手势在街巷空间里更醒目。插画衣袖细节以现场戏装为参照而非实物复刻，因此不能据此判定人物行当、神灵身份或所属会社。\n- **它在庙会中的作用**：标出表演者与观看者的不同角色\n- **记载与补全**：2025（报道年份，具体拍摄日未披露）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[944,531],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":804,"labelY":436,"anchorX":944,"anchorY":531,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-hb-jx-04":{"id":"scene-hb-jx-04","parentId":"fair-hb-jx","imageSrc":"assets/scenes/hb-jx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzMyLjgiIGN5PSI2MTcuNzYiIHJ4PSIzMzIuOCIgcnk9IjMxOC4yNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[299.52,0,936,665.6],"zoomedBox":[299.52,0,936,665.6],"label":"泥咕咕摊","url":null,"text":"### 泥咕咕摊\n**泥咕咕摊如何从大场面切换到掌心尺度？**\n社火依靠队伍和公共空间，泥塑摊却把注意力压缩到一张桌和一件小物。2025摊位文字记录鸟兽等泥咕咕，器物外形又参考2026制作照片，二者在资料层面分别标年。摊主递看与分层陈列为创作，不伪装成某年同一摊的实拍。\n\n2025年1月报道记录遏云楼附近民俗文化节的泥咕咕摊，有小飞燕、大斑鸠、摇头狮和彩蛇；HB02为2026制作体验，只取泥塑器物的可见形态。\n\n资料：2025文化节摊位记载；器物外形参考2026照片\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-hb-jx-04-clay-bird","object-hb-jx-04-clay-animal-row"],"label_anchor_points":[216.32,533.52],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":216.32,"anchorY":533.52,"labelX":216.32,"labelY":468.52,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-hb-jx-04-clay-bird":{"id":"object-hb-jx-04-clay-bird","parentId":"scene-hb-jx-04","imageSrc":"assets/scenes/hb-jx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NjgiIGN5PSI0MDUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[202,408,607,1128],"zoomedBox":[202,408,607,1128],"label":"鸟形泥咕咕","url":null,"text":"### 鸟形泥咕咕\n报道记录泥咕咕摊出售小飞燕、大斑鸠等鸟兽造型，鸟形可作为浚县手作的具体入口。插画以红色底和多彩花点突出轮廓，但不为每只泥塑强行确定品种，亦不把它误标为淮阳泥泥狗。\n- **它在庙会中的作用**：将浚县地方泥塑转为可近看物件\n- **记载与补全**：2025文化节摊位记载；器物外形参考2026照片。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[768,405],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":908,"labelY":310,"anchorX":768,"anchorY":405,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-hb-jx-04-clay-animal-row":{"id":"object-hb-jx-04-clay-animal-row","parentId":"scene-hb-jx-04","imageSrc":"assets/scenes/hb-jx-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MDQiIGN5PSI3MTEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,344,900,1064],"zoomedBox":[495,344,900,1064],"label":"桌面鸟兽泥塑","url":null,"text":"### 桌面鸟兽泥塑\n不同大小的鸟兽泥塑在摊面层层排列，让游客能够比较轮廓与彩绘。摊位记述来自2025文化节报道，外形参考又含2026体验照片，画面是分年材料的概念组织，不证明同一摊位的完整货单。\n- **它在庙会中的作用**：展示手作交易中的比较与挑选\n- **记载与补全**：2025文化节摊位记载；器物外形参考2026照片。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[704,711],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":844,"labelY":616,"anchorX":704,"anchorY":711,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-xx-bg":{"id":"fair-xx-bg","parentId":"54749336813040","label":"新乡","imageSrc":"assets/worlds/xx-bg.webp","box":[214.89,1261.98,432.53,1569.68],"zoomedBox":[214.89,1261.98,432.53,1569.68],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNTU3LjI1LDMxOC40MiBMMTU0Ny4yNCwzMTYuMTYgTDE1NDMuNzEsMzE2LjkxIEwxNTM5LjQ5LDMxNi44NCBMMTUzMC41OCwzMjQuNDUgTDE1MzAuNDQsMzI2LjEgTDE1MjUuNzUsMzI2Ljk5IEwxNTIxLjU1LDMyNi40OSBMMTUyMC4yMSwzMjcuMzggTDE1MTYuOTUsMzI2LjYxIEwxNTEzLjQ0LDMyNi44NiBMMTUwOS40NSwzMjguMjUgTDE1MTAuMjYsMzMwLjE3IEwxNTA5LjYzLDMzNS4yMiBMMTUwNy44MiwzMzcuODUgTDE1MDYuMTYsMzM4Ljc1IEwxNTAzLjAxLDMzOC42NiBMMTQ5OS4xOSwzMzcuMzkgTDE0OTYuMjUsMzM3LjE0IEwxNDkyLjUyLDMzOC40MSBMMTQ5MC41MSwzMzkuOSBMMTQ4My45OSwzNDIuMTggTDE0ODEuNTgsMzQ1LjM5IEwxNDgwLjA4LDM0OS43MiBMMTQ3Ny4zOCwzNTEuMzQgTDE0NzMuMDYsMzUzLjAxIEwxNDcxLjI5LDM1NC44NiBMMTQ2OS45OSwzNTcuOTIgTDE0NjUuNzYsMzU1LjY0IEwxNDYyLjg1LDM1Ni4xNSBMMTQ2MS40NywzNTguMDggTDE0NTkuNDQsMzU3LjQ0IEwxNDU5LjM3LDM1NC40MiBMMTQ1Ni4zMywzNTMuMDMgTDE0NTMuMzksMzUzLjczIEwxNDUyLjM5LDM1NC45NCBMMTQ1MS45NywzNTMuMzIgTDE0NTQuODYsMzUxLjEyIEwxNDUyLjc1LDM0OS45NCBMMTQ1MS44MSwzNDYuMjUgTDE0NTIuNiwzNDQuOCBMMTQ1NC44NiwzNDMuNjEgTDE0NTIuNjUsMzM4LjMyIEwxNDU0Ljk5LDMzOC40NSBMMTQ1Ni41NiwzMzYuMTIgTDE0NTUuODYsMzMzLjY4IEwxNDU0LjE0LDMzMi45NCBMMTQ1NC4yNSwzMzAuNzggTDE0NTcuODYsMzMxLjExIEwxNDU4LjkzLDMyNy4wMiBMMTQ1NS41NCwzMjMuNTggTDE0NTUuOTksMzIwLjgzIEwxNDU3LjkxLDMxOC41NyBMMTQ1Ni4zMSwzMTEuMDYgTDE0NTQuOSwzMDkuOTggTDE0NTQuNCwzMDguMSBMMTQ1NS43MiwzMDUuOTQgTDE0NTguOTQsMzAyLjg0IEwxNDU4LjgzLDI5OC40MyBMMTQ1Ny4wNCwyOTcuMjQgTDE0NTUuMjgsMjk4LjM4IEwxNDUyLjUyLDI5Ni4zMyBMMTQ1MC41NiwyOTYuOTggTDE0NTAuMDcsMjk4Ljk3IEwxNDQ3LjgsMzAwLjA2IEwxNDQ2LDI5OC40NiBMMTQ0Mi44NSwyOTkuOTcgTDE0NDIuMDUsMzAyLjU4IEwxNDM5LjE0LDMwMy45NyBMMTQzNi45NSwzMDMuNDEgTDE0MzQuMjUsMzAwLjc1IEwxNDMwLDI5OS4yNCBMMTQyOS40NSwyOTYuNzkgTDE0MzAuMDcsMjkzLjYyIEwxNDMxLjU1LDI5My4xNiBMMTQzMi43MiwyOTAuOTggTDE0MzAuMTYsMjkxLjEgTDE0MjcuMDYsMjkwLjI3IEwxNDIwLjQ3LDI4Ny42NCBMMTQxOC43MywyODcuNDEgTDE0MTYuMjEsMjg1Ljc1IEwxNDE0LjI4LDI4Ni40MyBMMTQxMC40MiwyODUuOTUgTDE0MDQuMzQsMjgyLjY5IEwxNDAwLjc1LDI3OS43OSBMMTM5Ny44OCwyNzkuMDggTDEzOTMuMjIsMjc2LjEyIEwxMzkxLjg0LDI3My4zMyBMMTM4OC43MSwyNjkuOTUgTDEzODkuNDgsMjY2LjEzIEwxMzg5LjE1LDI2Mi42NSBMMTM5MC4yNCwyNjAuMTQgTDEzODkuMjUsMjU1LjcgTDEzODcuNTksMjUxLjU1IEwxMzg1LjYzLDI1MC4yMiBMMTM4My4xOCwyNDkuNzEgTDEzODEuODYsMjQ3LjAyIEwxMzc3LjM4LDI0NC45NCBMMTM3NS4zNSwyNDUuODYgTDEzNzIuNCwyNDguMzkgTDEzNjkuODksMjQ3Ljk3IEwxMzY4LjU0LDI0NS44MyBMMTM2NS4yNywyNDUuMTMgTDEzNjQuNDgsMjQ5LjIgTDEzNjMuNjUsMjUwLjE1IEwxMzU5LjYxLDI1MS4xNSBMMTM1Ni43MywyNDkuNTcgTDEzNTMuMzUsMjUwLjQgTDEzNTEuNjIsMjUwLjAzIEwxMzQ4LjcsMjUxLjA2IEwxMzQyLjY0LDI1MS4yOCBMMTM0MS42NSwyNTIuMTYgTDEzMzcuNzUsMjUxLjgyIEwxMzM2LjI1LDI0OS41MSBMMTMzOS4zOSwyNDcuMDkgTDEzNDAuNDYsMjQyLjk1IEwxMzQwLjc4LDIzOC40MyBMMTM0MS45OCwyMzYuMzkgTDEzNDAuNTEsMjM2Ljc4IEwxMzM2LjA3LDIzMi41NiBMMTMzNi40NCwyMzEuNjkgTDEzMzIuODksMjMwLjc0IEwxMzMyLjU0LDIyNy4yNSBMMTMzMS40MSwyMjYgTDEzMzIuMjMsMjI0Ljc4IEwxMzI5LjcyLDIxOS4wMiBMMTMyNy42MywyMTkuMSBMMTMyNi42OSwyMTguMDkgTDEzMjMuODcsMjE5LjI1IEwxMzIyLjc3LDIxNy4zMiBMMTMyMy4zNiwyMTUuNzIgTDEzMjEuNzUsMjE0Ljg5IEwxMzE0LjMxLDIxNC45IEwxMzEyLjI4LDIxNy4zMiBMMTMxMC41OCwyMTguMjUgTDEzMDcuMjksMjE2LjIgTDEzMDMuOTUsMjE3Ljk3IEwxMzAwLjA0LDIxNy41MSBMMTI5OS41OSwyMTkuMiBMMTMwMC43MywyMjAuMyBMMTMwMC4yMSwyMjEuOTYgTDEzMDMuNzUsMjIzLjMzIEwxMjk5LjcsMjI0LjY1IEwxMjk5LjY0LDIyNi4zNSBMMTMwMS40OSwyMjUuNjkgTDEzMDIuNjUsMjI5IEwxMzAyLjA1LDIzMi42MyBMMTMwMC4zMywyMzYuMDQgTDEzMDEuMTUsMjM5LjY5IEwxMzAzLjE4LDI0NC41OCBMMTMwMS41MywyNDcuOTcgTDEzMDUuNjIsMjQ5Ljg5IEwxMzA3LjI0LDI1Mi40NiBMMTMwNi40MSwyNTMuNDYgTDEzMDcuNTIsMjU2LjgzIEwxMzA3LjUsMjYxLjQ0IEwxMzAxLjMsMjYxLjU2IEwxMjk4Ljc4LDI2MS4xIEwxMjk3LjcyLDI1OC4xIEwxMjk2LjMsMjU4LjUyIEwxMjk1LjI5LDI1NSBMMTI5My4wMiwyNTUuNjUgTDEyOTIuOTEsMjU3LjY4IEwxMjk0LjAzLDI1OS45MyBMMTI5NC42NSwyNjQuMjIgTDEyOTIuODcsMjY0Ljg5IEwxMjkxLjk4LDI2OS40NCBMMTI5MC4yLDI3MC4wNiBMMTI4OS41NSwyNzEuNDggTDEyODUuMjUsMjc2LjQyIEwxMjg1LjIzLDI4MC4zNyBMMTI4My43MSwyODQuMDUgTDEyODUuNjIsMjg2LjA4IEwxMjg1LjIzLDI4Ny42NSBMMTI4Mi40OCwyODcuNjUgTDEyODEuMjMsMjg2LjY5IEwxMjc2LjkzLDI4Ny44NiBMMTI3Mi43OSwyODkuNiBMMTI2OC4yOCwyODcuNzIgTDEyNjUuNDIsMjg5LjgxIEwxMjYzLjYxLDI4OS44MyBMMTI2MS45OCwyOTIuNTEgTDEyNjMuNDIsMjk0LjYxIEwxMjYzLjY2LDI5Ny42OSBMMTI2NS45MiwzMDAuMTIgTDEyNzAuMzYsMzAyLjk4IEwxMjc0LjE0LDMwNi43MSBMMTI3Ni4yMywzMTEuMDUgTDEyNzYuOSwzMTQuNzggTDEyODAuNjQsMzIwLjg4IEwxMjc5LjUsMzIyLjI1IEwxMjc3LjU3LDMyMi4yNyBMMTI3OC4zMywzMjQuNjggTDEyNzcuNjksMzI1LjQ4IEwxMjgwLjIzLDMyNy43MyBMMTI3OS44NywzMzAuNTggTDEyODEuMTYsMzMzLjA2IEwxMjgxLjQzLDMzOC4wOCBMMTI4Ni4yMiwzMzguMTIgTDEyODcuNTIsMzM5LjI4IEwxMjg4LjM2LDM0NC45OSBMMTI5MS4yOSwzNDkuNjMgTDEyOTEuNiwzNTIuOTkgTDEyODkuMjksMzU0Ljg2IEwxMjg4LjAyLDM1Ni44MiBMMTI4Ny45NSwzNjEuMDQgTDEyOTAuMTcsMzY3LjQ2IEwxMjkwLjU3LDM3MC4zNiBMMTI5Mi4wMSwzNzEuOTggTDEyOTYuMjQsMzczLjYxIEwxMjk2LjE1LDM3NS44MyBMMTMwMS42NiwzNzUuMDQgTDEzMDIuODYsMzc3LjQxIEwxMzA0LjE0LDM4Mi4yNyBMMTMwNi42NywzODkuMjUgTDEzMTEuMzgsMzk2LjE1IEwxMzExLjM4LDQwMC40MiBMMTMwOC40Niw0MDAuOTggTDEzMDkuMyw0MDIuOTMgTDEzMTEuMTcsNDAzLjc5IEwxMzA5LjMxLDQwNS4zMSBMMTMwNi4xNSw0MDYuNTYgTDEzMDQuMjUsNDA4Ljc4IEwxMzAxLjkzLDQxMy40NCBMMTMwMS4zMiw0MTkuODEgTDEzMDguNzIsNDIwLjgyIEwxMzEyLjI5LDQyMC45NCBMMTMxNS4wNyw0MjMuMjYgTDEzMTYuMTMsNDI1LjEzIEwxMzE4Ljc5LDQyNi4wMiBMMTMyNC44Miw0MjQuNDMgTDEzMjYuNDUsNDIzLjUyIEwxMzMwLjg4LDQyMy4xNSBMMTMzNC4wOSw0MjQuMDkgTDEzMzYuMTYsNDI2LjMyIEwxMzM3LjkzLDQyOS42MyBMMTM0MC41Niw0MzIuMDEgTDEzNDUuMzgsNDMyLjUzIEwxMzUzLjY4LDQzMC43MiBMMTM2MC4zMSw0MjcuMTYgTDEzNjkuMzksNDI3LjkgTDEzNzMuMTcsNDI1LjEgTDEzNzUuMzYsNDIxLjA1IEwxMzgxLjU5LDQxNC4xNyBMMTM4My40OSw0MTQuMDEgTDEzODcuNzgsNDE3LjM3IEwxMzkzLjMsNDE3LjM3IEwxMzk3LjMxLDQxNS4wNCBMMTQwMC44Miw0MTQuNjIgTDE0MDguMzcsNDE5Ljg3IEwxNDEwLjY4LDQyMC4yNCBMMTQxNS45Miw0MTguNTEgTDE0MTcuMzksNDIxLjQzIEwxNDE5LjY5LDQyMy4xNCBMMTQyMC44MSw0MjQuNDggTDE0MjQuMDgsNDI2LjMgTDE0MzEuNjksNDI1LjYgTDE0NDIuMTgsNDI1Ljg0IEwxNDQ0LjEzLDQyNS42MyBMMTQ0Ny4yOCw0MjMuMTYgTDE0NTAuMjYsNDE5LjEgTDE0NTMuNTcsNDE4LjUxIEwxNDU2LjgxLDQyMC40OCBMMTQ2MS41LDQyNC4xOCBMMTQ3NC44LDQyOC41NCBMMTQ3OS45NCw0MjcuNjMgTDE0ODMuMDUsNDI2LjIxIEwxNDg4LjU5LDQyNC42NCBMMTQ5Ny41MSw0MjYuMjggTDE1MDIuNDYsNDI3Ljc2IEwxNTA2LjEsNDI1LjQyIEwxNTA5LjExLDQyOC43NCBMMTUxMS42Nyw0MjkuMjUgTDE1MTQuNTIsNDMwLjgyIEwxNTE2LjMyLDQzMC4wOCBMMTUyMS40Niw0MjkuNCBMMTUyNC4wMiw0MjcuMTUgTDE1MjQuODIsNDIzLjY3IEwxNTIyLjc4LDQyMS4xNCBMMTUxNy44LDQxNi40MiBMMTUxNy43NCw0MTMuNyBMMTUyMC42LDQxMC4zMiBMMTUyMi4zNSw0MDkuODQgTDE1MjguODQsNDAzLjI3IEwxNTMxLjc2LDQwMS42MSBMMTUzMy40Miw0MDIgTDE1MzYuMDUsNDAwLjY3IEwxNTM4LjY5LDM5OC4xOCBMMTUzOC4zNiwzOTUuMjggTDE1MzUuMTcsMzk1LjIyIEwxNTMyLjQsMzkzLjA0IEwxNTM0Ljc3LDM4Ny45NyBMMTU0MC4yOSwzODUuOTcgTDE1NDMuMTMsMzg0LjEyIEwxNTQ0LjM5LDM4Mi4zOSBMMTU0NC41LDM3OS45MiBMMTU0Mi40MywzNzYuMjEgTDE1NDAuMTksMzczLjYyIEwxNTM2LjYzLDM3MC41IEwxNTM2LjUsMzY4LjY4IEwxNTM4LjI0LDM2NS42NCBMMTU0MC4zOCwzNjMuNDIgTDE1NDMuMTksMzYxLjkyIEwxNTQ5LjM2LDM2MC42NyBMMTU1Mi45MywzNjAuNjEgTDE1NTMuNzIsMzU5LjczIEwxNTUzLjIsMzQ4LjQ5IEwxNTU3Ljg5LDM0Ni44NSBMMTU1OC40NywzNDUuNTYgTDE1NjEuODQsMzQ1LjQ3IEwxNTYxLjg3LDM0My40OSBMMTU1OS41NywzNDIuNyBMMTU2Mi43MSwzMzcuOTUgTDE1NjcuMDIsMzMzLjA0IEwxNTY5LjE3LDMzMi42NCBMMTU2OS42OCwzMjguMjYgTDE1NjIuMSwzMjQuODcgTDE1NjAuNDQsMzI0LjQxIEwxNTU5LjA2LDMyMC45MyBMMTU1Ny4yNSwzMTguNDIgWiIgZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==","url":null,"text":"### 比干庙新春迎财祈福庙会\n比干庙春节活动以文财神主题和五福巡游建立辨识度，福字与元宝把祝愿转成可递看的道具。建筑参考来自2018年图集，巡游依据2025实况文字，集市与花灯依据2026预告，三种证据不能混成一届现场。","childrenIds":["scene-xx-bg-02","scene-xx-bg-03","scene-xx-bg-04"],"label_anchor_points":[1396.07,344.92],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1396.07,"anchorY":344.92,"labelX":1328,"labelY":332,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-xx-bg-02":{"id":"scene-xx-bg-02","parentId":"fair-xx-bg","imageSrc":"assets/scenes/xx-bg-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNzczLjc2IiBjeT0iMjI5LjMyIiByeD0iMjkxLjIwMDAwMDAwMDAwMDA1IiByeT0iMTczLjE2MDAwMDAwMDAwMDAzIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[56.16,482.55999999999995,402.48,1064.96],"zoomedBox":[56.16,482.55999999999995,402.48,1064.96],"label":"彩绘门院","url":null,"text":"### 彩绘门院\n**层层门洞怎样引导人向院内看？**\n前方红柱和彩绘木枋框住后面的门洞，明暗交替把视线引向更深处。固定建筑关系来自2018图集，人物只是概念尺度参照。读者可通过门、柱、树木理解院落纵深，而不把这幅日间建筑图当作2026巡游线路或花灯落点说明。\n\n红柱、蓝绿彩绘木枋、灰白墙、门洞纵深与院内树木。\n\n资料：2018建筑图集；非春节现场\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xx-bg-02-painted-beam"],"label_anchor_points":[848.64,215.28],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":848.64,"anchorY":215.28,"labelX":848.64,"labelY":150.28,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xx-bg-02-painted-beam":{"id":"object-xx-bg-02-painted-beam","parentId":"scene-xx-bg-02","imageSrc":"assets/scenes/xx-bg-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MzYiIGN5PSIzMDYiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[104,376,509,1096],"zoomedBox":[104,376,509,1096],"label":"蓝绿彩绘木枋","url":null,"text":"### 蓝绿彩绘木枋\n建筑图集记录红柱与蓝绿彩绘木枋，横向构件和后方门洞共同形成层层框景。插画简化并整理了局部纹样，适合观察色彩和空间关系，不可用来判断建筑构件尺寸、具体彩画制度或修缮年代。\n- **它在庙会中的作用**：形成从外向内的视觉框架\n- **记载与补全**：2018建筑图集；非春节现场。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[736,306],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":876,"labelY":211,"anchorX":736,"anchorY":306,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xx-bg-03":{"id":"scene-xx-bg-03","parentId":"fair-xx-bg","imageSrc":"assets/scenes/xx-bg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTAzMS42Nzk5OTk5OTk5OTk4IiBjeT0iNTY2LjI4IiByeD0iMzgyLjcxOTk5OTk5OTk5OTkiIHJ5PSIyNDguMDQwMDAwMDAwMDAwMDIiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[318.24,648.96,814.32,1414.3999999999999],"zoomedBox":[318.24,648.96,814.32,1414.3999999999999],"label":"送福互动","url":null,"text":"### 送福互动\n**五福巡游怎样把角色变成可交流的祝愿？**\n队伍不只是走过观众面前，演员手中的道具和递送动作让游客可以回应。2025文字记录了五福角色、舞台出发与送福，插画根据这些信息组织人物。服装细节和排列尚无现场照片核对，页面按明确道具讲互动，不指定每个人的完整表演程式。\n\n福禄寿财喜演员由舞台出发，巡游送福；财神红袍金冠持元宝，另有如意寿桃等道具。\n\n资料：2025年2月3日实况文字\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xx-bg-03-peach-prop","object-xx-bg-03-blessing-paper"],"label_anchor_points":[1048.32,402.48],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1048.32,"anchorY":402.48,"labelX":1048.32,"labelY":337.48,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xx-bg-03-peach-prop":{"id":"object-xx-bg-03-peach-prop","parentId":"scene-xx-bg-03","imageSrc":"assets/scenes/xx-bg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjgiIGN5PSIyNzAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[68,0,473,720],"zoomedBox":[68,0,473,720],"label":"寿桃道具","url":null,"text":"### 寿桃道具\n如意、寿桃等道具见于2025巡游文字，图中寿桃被演员托举，成为从人群中辨认祝福角色的线索。具体尺寸、材质与纹样没有实拍依据，因此只说明它在巡游中作为持物出现，不附会固定队位或仪式动作。\n- **它在庙会中的作用**：使五福主题有可辨的手持物\n- **记载与补全**：2025年2月3日实况文字。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[128,270],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":268,"labelY":175,"anchorX":128,"anchorY":270,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xx-bg-03-blessing-paper":{"id":"object-xx-bg-03-blessing-paper","parentId":"scene-xx-bg-03","imageSrc":"assets/scenes/xx-bg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDQwIiBjeT0iNDA1IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[202,680,607,1400],"zoomedBox":[202,680,607,1400],"label":"巡游福字","url":null,"text":"### 巡游福字\n向游客分发福字是现场报道确认的互动，纸张使抽象祝愿变成可递送的实物。插画的书写样式、拿取姿势与纸幅为创作，不能据图声称当日每位游客均获同一份物品或存在统一领取规则。\n- **它在庙会中的作用**：连接演员与游客的送福动作\n- **记载与补全**：2025年2月3日实况文字。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1040,405],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":900,"labelY":310,"anchorX":1040,"anchorY":405,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xx-bg-04":{"id":"scene-xx-bg-04","parentId":"fair-xx-bg","imageSrc":"assets/scenes/xx-bg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzQ5LjQ0IiBjeT0iNTUyLjI0IiByeD0iMzQ5LjQ0IiByeT0iMzc0LjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[177.84,0,926.64,698.88],"zoomedBox":[177.84,0,926.64,698.88],"label":"手工集市","url":null,"text":"### 手工集市\n**商品未披露时，这个集市场景还能看什么？**\n2026预告确认非遗手工集市，却没有商户、品类与摊位照片，因此画面保留展台、交流手势和包装的概念关系。读者能看见摊主如何递看、游客如何停留，但不能从盒子外形推定装着香袋、泥塑或某项本地非遗。\n\n预告列非遗手工集市，缺少具体商品和现场图。\n\n资料：2026活动预告文字；具体商户和商品未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xx-bg-04-display-counter","object-xx-bg-04-plain-package"],"label_anchor_points":[249.6,468],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":249.6,"anchorY":468,"labelX":249.6,"labelY":403,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xx-bg-04-display-counter":{"id":"object-xx-bg-04-display-counter","parentId":"scene-xx-bg-04","imageSrc":"assets/scenes/xx-bg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2NDAiIGN5PSI3MTEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,280,900,1000],"zoomedBox":[495,280,900,1000],"label":"集市展台","url":null,"text":"### 集市展台\n预告只确认手工集市这一活动类别，图中展台用来说明摊主展示与游客停留的关系。它的木架、布面和陈列方式都是概念设计，没有现场照片能证明同款设施出现，不能当成2026实际摊位样式。\n- **它在庙会中的作用**：示意手工集市的面对面交流\n- **记载与补全**：2026活动预告文字；具体商户和商品未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[640,711],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":780,"labelY":616,"anchorX":640,"anchorY":711,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xx-bg-04-plain-package":{"id":"object-xx-bg-04-plain-package","parentId":"scene-xx-bg-04","imageSrc":"assets/scenes/xx-bg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2ODgiIGN5PSI0NTAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[248,328,653,1048],"zoomedBox":[248,328,653,1048],"label":"无品类包装盒","url":null,"text":"### 无品类包装盒\n画面刻意使用没有明确产品名称的包装盒，提醒读者现有证据没有披露具体展品。盒子可以解释递看和介绍的动作，却不能证明某种工艺在场；对内部商品的材料、产地与非遗身份均保持未知。\n- **它在庙会中的作用**：表达证据不足时仍可讨论的交流动作\n- **记载与补全**：2026活动预告文字；具体商户和商品未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[688,450],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":828,"labelY":355,"anchorX":688,"anchorY":450,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-jz-ysc":{"id":"fair-jz-ysc","parentId":"54749336813040","label":"焦作","imageSrc":"assets/worlds/jz-ysc.webp","box":[292.51,1108.72,447.71,1311.38],"zoomedBox":[292.51,1108.72,447.71,1311.38],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMTU3LjMxLDQ0NS43OSBMMTE1OS40NSw0NDcuNCBMMTE2Mi4yNSw0NDcuNzEgTDExNjQuNjksNDQzLjQ1IEwxMTY1Ljk2LDQ0Mi43IEwxMTY3LjA3LDQzOC44OCBMMTE2OC4wOSw0MzguMSBMMTE3MS40NCw0MzguMjggTDExNzMuNjcsNDM5LjM4IEwxMTc4LjE5LDQ0Mi45OCBMMTE3OS4xMSw0NDMuMDkgTDExODUuMzQsNDM5LjMxIEwxMTg3Ljc4LDQzNy4zNyBMMTE4OC40OSw0MzUuNzMgTDExOTAuNjYsNDM1LjYxIEwxMTk0LjU1LDQzNy42OSBMMTE5Ny4yOSw0NDAuNjMgTDEyMDEuMTgsNDQxLjYzIEwxMjEwLjExLDQ0MCBMMTIxMi4zMiw0MzcuOSBMMTIxNy42OSw0MzcuNDIgTDEyMTYuMTYsNDMwLjk1IEwxMjIzLjY0LDQyOC44OSBMMTIyNy4wNSw0MjcuNCBMMTIzMi43MSw0MjUuNTUgTDEyMzQuNDUsNDIxLjc2IEwxMjM0LjksNDE4LjUxIEwxMjM1Ljc3LDQxNi45OSBMMTIzOC44OSw0MTUuMzEgTDEyNDQuNDEsNDE1LjU0IEwxMjQ5LjIsNDE3Ljg5IEwxMjUyLjU0LDQxNy4yOSBMMTI1NC41MSw0MTYgTDEyNTguMTEsNDExLjUyIEwxMjYwLjU2LDQwOS4zMiBMMTI2Ni42Myw0MDcuMTYgTDEyNzAuMjgsNDA4LjUxIEwxMjcwLjcsNDEyLjc4IEwxMjc0LjUsNDEzLjggTDEyNzkuNzIsNDE0LjQ3IEwxMjgzLjIsNDEzLjg3IEwxMjg2LjgyLDQxMi41IEwxMjkyLjEzLDQxMi4wNCBMMTI5My44OCw0MTIuNjkgTDEyOTguMDcsNDE1Ljk5IEwxMzAxLjMyLDQxOS44MSBMMTMwMS45Myw0MTMuNDQgTDEzMDQuMjUsNDA4Ljc4IEwxMzA2LjE1LDQwNi41NiBMMTMwOS4zMSw0MDUuMzEgTDEzMTEuMTcsNDAzLjc5IEwxMzA5LjMsNDAyLjkzIEwxMzA4LjQ2LDQwMC45OCBMMTMxMS4zOCw0MDAuNDIgTDEzMTEuMzgsMzk2LjE1IEwxMzA2LjY3LDM4OS4yNSBMMTMwNC4xNCwzODIuMjcgTDEzMDIuODYsMzc3LjQxIEwxMzAxLjY2LDM3NS4wNCBMMTI5Ni4xNSwzNzUuODMgTDEyOTYuMjQsMzczLjYxIEwxMjkyLjAxLDM3MS45OCBMMTI5MC41NywzNzAuMzYgTDEyOTAuMTcsMzY3LjQ2IEwxMjg3Ljk1LDM2MS4wNCBMMTI4OC4wMiwzNTYuODIgTDEyODkuMjksMzU0Ljg2IEwxMjkxLjYsMzUyLjk5IEwxMjkxLjI5LDM0OS42MyBMMTI4OC4zNiwzNDQuOTkgTDEyODcuNTIsMzM5LjI4IEwxMjg2LjIyLDMzOC4xMiBMMTI4MS40MywzMzguMDggTDEyODEuMTYsMzMzLjA2IEwxMjc5Ljg3LDMzMC41OCBMMTI4MC4yMywzMjcuNzMgTDEyNzcuNjksMzI1LjQ4IEwxMjc4LjMzLDMyNC42OCBMMTI3Ny41NywzMjIuMjcgTDEyNzkuNSwzMjIuMjUgTDEyODAuNjQsMzIwLjg4IEwxMjc2LjksMzE0Ljc4IEwxMjc2LjIzLDMxMS4wNSBMMTI3NC4xNCwzMDYuNzEgTDEyNzAuMzYsMzAyLjk4IEwxMjY1LjkyLDMwMC4xMiBMMTI2My42NiwyOTcuNjkgTDEyNjMuNDIsMjk0LjYxIEwxMjYxLjk4LDI5Mi41MSBMMTI1OS42NSwyOTUuOSBMMTI1Ny4yLDI5Ni4wNiBMMTI1NS40LDI5OC41NiBMMTI1MS4yLDI5OC4zNSBMMTI0OC42NCwyOTUuNjQgTDEyNDUuNDgsMjk3Ljg0IEwxMjQ1LjMzLDI5OC44MSBMMTI0OC4xLDI5OS4wNiBMMTI1MC41LDMwMC4xMSBMMTI1MC44NCwzMDEuOTcgTDEyNDkuMTgsMzAyLjMgTDEyNDcuNTMsMzAwLjI4IEwxMjQ2LjIzLDMwMi42OCBMMTI0NS44MiwzMDUuMzMgTDEyNDcuMTUsMzA3Ljk0IEwxMjQyLjI2LDMwNi4xIEwxMjM5LjgxLDMwNi4yMiBMMTIzOS4xOSwzMDQuODIgTDEyMzcuNTcsMzA0LjkzIEwxMjM1LjkzLDMwMy4wOCBMMTIzMy4xNSwzMDEuOTkgTDEyMjkuMSwzMDMuMzUgTDEyMjUuNjEsMzAyLjk0IEwxMjI1Ljc5LDMwNi4zMyBMMTIyNC41NywzMDguNDUgTDEyMjUuMzQsMzEwLjUyIEwxMjI0LjcxLDMxMi4wMiBMMTIyMi45MywzMTAuNzcgTDEyMjAuNzYsMzEyLjEzIEwxMjIxLjI5LDMxNC4wMiBMMTIyMy4yMSwzMTQuNTYgTDEyMjEuODcsMzE3LjA4IEwxMjE4Ljk2LDMxOC40IEwxMjE4Ljg2LDMyMS4wMiBMMTIxNy44NCwzMjAuODMgTDEyMTcuODcsMzI1LjEzIEwxMjE1LjU3LDMyNi4wMSBMMTIxNS44MiwzMjguNTIgTDEyMTMuNjYsMzI5LjQ0IEwxMjEwLjEsMzI3LjQ5IEwxMjA3Ljk1LDMyOC4yNyBMMTIwNS42NywzMjcuNTYgTDEyMDIuNDgsMzI0LjYgTDEyMDEuMjUsMzI0Ljg5IEwxMTk3LjMsMzIzLjA5IEwxMTkzLjY0LDMyNC4wNSBMMTE4OS41LDMyMi41OCBMMTE4OC4xMSwzMjQuMTEgTDExODguNzEsMzI2LjQ1IEwxMTg3LjA3LDMyOC4xIEwxMTg3LjI2LDMzMi45OCBMMTE4OC4yNCwzMzYuMjIgTDExODcuNzUsMzM5LjAyIEwxMTg2LjU5LDMzOS42NCBMMTE4My4xOCwzMzguMzEgTDExODAuMDgsMzM5LjkzIEwxMTc3Ljc5LDM0MC4yOSBMMTE3Ny45MSwzNDMuMTIgTDExNzYuNTksMzQ2LjUyIEwxMTcyLjM0LDM0OS4wNCBMMTE2OS44MSwzNDguMzkgTDExNjguMTIsMzQ5LjQgTDExNjUsMzQ5LjQ3IEwxMTYyLjkyLDM0OC42OCBMMTE2Mi41NiwzNDcuMzQgTDExNTYuMzYsMzQ2LjI1IEwxMTUxLjg1LDM1MC42NSBMMTE0OS4yNCwzNTEuNTkgTDExNDkuMzQsMzU0LjIyIEwxMTQ2LjAxLDM1OC41IEwxMTQ0LjI3LDM1OC40MiBMMTE0NS45NCwzNjMuMjkgTDExNDUuMDEsMzY4Ljk0IEwxMTQ1LjgzLDM4MC40NyBMMTE0My41NywzODIuMzYgTDExNDMuMzcsMzg1LjQ5IEwxMTQxLjUxLDM5MC4xNCBMMTE0MC4xMywzOTEuMTggTDExMzkuOTksMzk0Ljk2IEwxMTM4LjQ1LDM5Ni44NCBMMTEzMy4xNSwzOTkuNTIgTDExMzAuNDQsNDAxLjk1IEwxMTI4LjgyLDQwNi4yNiBMMTEyNy4wMyw0MDcuNjIgTDExMjQuNTEsNDA3LjM1IEwxMTIyLjkzLDQwOS41NyBMMTExOS4xOCw0MDkuOCBMMTExNy4xOSw0MDkuMzIgTDExMTMuNzYsNDExLjM2IEwxMTEwLjYzLDQxMS4xOSBMMTEwOC43Miw0MTQuMTcgTDExMDkuMTgsNDE2LjQxIEwxMTEwLjQsNDE3LjQ3IEwxMTEwLjYyLDQxOS44OSBMMTExMS43Niw0MjEuNDUgTDExMTcuOTQsNDIyLjg2IEwxMTIxLjc1LDQyMi45OCBMMTEyMS43LDQyOC4xNSBMMTEyMi40NSw0MjguNDQgTDExMjEuMzYsNDMxLjQgTDExMjEuNzEsNDM3Ljg2IEwxMTI1LjE4LDQzNi42MiBMMTEyOC44NCw0MzguMDggTDExMzIuNzMsNDQwLjkzIEwxMTM3LjUxLDQ0My42MSBMMTE0My4zOCw0NDMuNjYgTDExNDcuMTUsNDQyLjAxIEwxMTQ5Ljg4LDQ0MS42MSBMMTE1NC42OSw0NDIuNjkgTDExNTcuMzEsNDQ1Ljc5IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 焦作影视城新春庙会\n焦作影视城以城门、市井街和古装演员组织新春庙会，迎宾通道、戏曲舞台、玩具摊与红绸互动各有观看距离。这里的重点是影视场景怎样转成游客参与空间，2026预告中的配图不当作当届已执行证明。","childrenIds":["scene-jz-ysc-02","scene-jz-ysc-03","scene-jz-ysc-04"],"label_anchor_points":[1215.77,378.79],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1215.77,"anchorY":378.79,"labelX":1215.77,"labelY":313.79,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-jz-ysc-02":{"id":"scene-jz-ysc-02","parentId":"fair-jz-ysc","imageSrc":"assets/scenes/jz-ysc-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iOTk4LjQwMDAwMDAwMDAwMDEiIGN5PSIyOTQuODQwMDAwMDAwMDAwMDMiIHJ4PSIyNjYuMjQwMDAwMDAwMDAwMDciIHJ5PSIyNjYuNzYiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[28.08,732.16,561.6,1264.64],"zoomedBox":[28.08,732.16,561.6,1264.64],"label":"门架与通道","url":null,"text":"### 门架与通道\n**红毯为何把普通通行变成迎宾观看？**\n红毯把视觉中心拉向城门纵深，列队演员和两侧旌旗强化这种方向感。游客在侧边观看，通行空间也成为表演界面。配图支持武士装束与长道具，却没有演员名单和队列时间表；图中人数与间距不等于当届迎宾规范。\n\n武士造型队伍沿红毯通道列阵，通道两侧为城门与红灯笼。\n\n资料：2026预告配图，拍摄年份未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jz-ysc-02-red-carpet"],"label_anchor_points":[981.76,205.92],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":981.76,"anchorY":205.92,"labelX":981.76,"labelY":140.92,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jz-ysc-02-red-carpet":{"id":"object-jz-ysc-02-red-carpet","parentId":"scene-jz-ysc-02","imageSrc":"assets/scenes/jz-ysc-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MDAiIGN5PSI1ODUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[382,440,787,1160],"zoomedBox":[382,440,787,1160],"label":"城门红毯","url":null,"text":"### 城门红毯\n红毯见于城门仪仗配图，它将前后城门连接成一条醒目的视线，也把列队与观看关系分开。插画中的长度和两侧站位经绘画整理，不能据此测量通道宽度，或声称它是一条完整官方迎宾路线。\n- **它在庙会中的作用**：将固定通道转成仪仗表演界面\n- **记载与补全**：2026预告配图，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[800,585],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":660,"labelY":490,"anchorX":800,"anchorY":585,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-jz-ysc-03":{"id":"scene-jz-ysc-03","parentId":"fair-jz-ysc","imageSrc":"assets/scenes/jz-ysc-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzI0LjQ4IiBjeT0iMjYyLjA4MDAwMDAwMDAwMDA0IiByeD0iMzI0LjQ4IiByeT0iMjYyLjA4MDAwMDAwMDAwMDA0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[0,0,524.1600000000001,648.96],"zoomedBox":[0,0,524.1600000000001,648.96],"label":"戏曲舞台","url":null,"text":"### 戏曲舞台\n**靠旗与绣衣怎样让戏曲人物在台上被看见？**\n高处旗面扩展人物轮廓，绣衣把颜色集中在身体，观众从台下识别一组彼此对应的角色。资料只有戏曲配图与预告类别，未给剧目说明。页面可以看衣饰和台上台下关系，但不替角色命名，也不把配图认作2026某一场已演节目。\n\n多名戏曲装扮人物在舞台表演，绣衣、靠旗和头冠清晰可见。\n\n资料：2026预告配图，拍摄年份未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jz-ysc-03-opera-backflag","object-jz-ysc-03-embroidered-robe"],"label_anchor_points":[332.8,318.24],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":332.8,"anchorY":318.24,"labelX":332.8,"labelY":253.24,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jz-ysc-03-opera-backflag":{"id":"object-jz-ysc-03-opera-backflag","parentId":"scene-jz-ysc-03","imageSrc":"assets/scenes/jz-ysc-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI1OTIiIGN5PSIyOTciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[94,232,499,952],"zoomedBox":[94,232,499,952],"label":"戏曲靠旗","url":null,"text":"### 戏曲靠旗\n靠旗在预告的戏曲配图中清晰可见，向肩后展开的旗面让角色轮廓大于日常身体尺度。插画的旗色、纹样与数量经过艺术转译，不能凭这些细节断定剧目、行当或扮演的具体历史人物。\n- **它在庙会中的作用**：增强舞台角色的轮廓辨识\n- **记载与补全**：2026预告配图，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[592,297],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":732,"labelY":202,"anchorX":592,"anchorY":297,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-jz-ysc-03-embroidered-robe":{"id":"object-jz-ysc-03-embroidered-robe","parentId":"scene-jz-ysc-03","imageSrc":"assets/scenes/jz-ysc-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0MDAiIGN5PSI1NDkiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[346,40,751,760],"zoomedBox":[346,40,751,760],"label":"戏曲绣衣","url":null,"text":"### 戏曲绣衣\n绣衣与头冠共同构成台上人物的表演外观，亮色块在古建背景前更容易被看清。来源可以支持戏曲装扮存在，不能支持插画中每一处纹样；页面以可见层次解读，不建立未核实的服装年代或传承谱系。\n- **它在庙会中的作用**：集中舞台色彩并表现演员身体动作\n- **记载与补全**：2026预告配图，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[400,549],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":540,"labelY":454,"anchorX":400,"anchorY":549,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-jz-ysc-04":{"id":"scene-jz-ysc-04","parentId":"fair-jz-ysc","imageSrc":"assets/scenes/jz-ysc-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTM4MS4xMiIgY3k9IjU4MC4zMTk5OTk5OTk5OTk5IiByeD0iMjgyLjg4IiByeT0iMzU1LjY4IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[224.64,1098.24,936,1664],"zoomedBox":[224.64,1098.24,936,1664],"label":"彩棚玩具摊","url":null,"text":"### 彩棚玩具摊\n**玩具摊为什么需要低处台面和高处棚顶？**\n彩棚为一段连续停留空间提供上方界面，玩具则沿游客可触及的台面密集排列。亲子游客看货、摊主递物，形成与舞台观看不同的面对面互动。配图只支持玩具和小商品类别，具体款式与价签未核实，画面不承担购物推荐。\n\n彩色棚顶下的摊台上摆满玩具和小商品，冬装游客近距离挑选。\n\n资料：2026预告配图，拍摄年份未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jz-ysc-04-toy-row","object-jz-ysc-04-striped-canopy"],"label_anchor_points":[1397.76,542.88],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1397.76,"anchorY":542.88,"labelX":1397.76,"labelY":477.88,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jz-ysc-04-toy-row":{"id":"object-jz-ysc-04-toy-row","parentId":"scene-jz-ysc-04","imageSrc":"assets/scenes/jz-ysc-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDI0IiBjeT0iNjc1IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[472,664,877,1384],"zoomedBox":[472,664,877,1384],"label":"台面玩具陈列","url":null,"text":"### 台面玩具陈列\n预告配图可见彩色棚下的儿童玩具和小商品，陈列高度适合近距离查看。插画用毛绒玩具、小车等形态表达货物密度，但具体款式、材质和售价为未核实内容，不作为当届商户的实际商品清单。\n- **它在庙会中的作用**：引导亲子游客停留与挑选\n- **记载与补全**：2026预告配图，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1024,675],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":884,"labelY":580,"anchorX":1024,"anchorY":675,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-jz-ysc-04-striped-canopy":{"id":"object-jz-ysc-04-striped-canopy","parentId":"scene-jz-ysc-04","imageSrc":"assets/scenes/jz-ysc-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDI0IiBjeT0iODEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[0,664,405,1384],"zoomedBox":[0,664,405,1384],"label":"彩色棚顶","url":null,"text":"### 彩色棚顶\n彩色棚顶在照片中覆盖玩具摊面，把一段临时交易空间连成可辨的单元。它与影视城的长期铺面不同，适合解释短期市集设施；插画的条纹配色、灯泡和尺寸由创作补全，不据此判断实际搭设方式。\n- **它在庙会中的作用**：为临时经营形成上方空间边界\n- **记载与补全**：2026预告配图，拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1024,81],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":884,"labelY":90,"anchorX":1024,"anchorY":81,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-py-xq":{"id":"fair-py-xq","parentId":"54749336813040","label":"濮阳","imageSrc":"assets/worlds/py-xq.webp","box":[129.74,1542.79,328.26,1773.43],"zoomedBox":[129.74,1542.79,328.26,1773.43],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNTY5LjY4LDMyOC4yNiBMMTU3MS4yMSwzMjYuMjMgTDE1NzMuMDQsMzIxLjI2IEwxNTc0LjU3LDMxOS4yOSBMMTU3Ny4zMSwzMTguOTUgTDE1ODAuNjQsMzE5LjcgTDE1ODMuMTIsMzE1LjY2IEwxNTgyLjQsMzExLjc4IEwxNTgzLjY4LDMxMC40MyBMMTU4Ni4zNywzMTMuMTcgTDE1ODguMDUsMzEzLjE0IEwxNTg4LjcxLDMxMC4zNSBMMTU4OC42MiwzMTQuMDQgTDE1OTAuMjcsMzEyLjA4IEwxNTkwLjI0LDMwOS45NyBMMTU5Mi4yMSwzMDkuMTkgTDE1OTgsMzA4LjE0IEwxNjAyLjExLDMwOC4zNiBMMTYwMy43LDMwOS4zNyBMMTYwNS45NCwzMDguODMgTDE2MTEuMTMsMzA4LjgzIEwxNjE0LjkyLDMwNiBMMTYxNy43NiwzMDMuMTEgTDE2MTcuNDMsMzAxLjE4IEwxNjIwLjQyLDI5OS40NCBMMTYyNC4yNywyOTUuOTIgTDE2MzAuMjgsMjkzLjUxIEwxNjMzLjQyLDI5My42MyBMMTYzMy44NCwyODkuOSBMMTYzMi4zOSwyODQuNzEgTDE2MzMsMjgyLjE4IEwxNjM0LjMxLDI4MS41NyBMMTYzMS41NywyODAuNzMgTDE2MzEuNDEsMjc5LjIyIEwxNjMzLjg0LDI3OC45OCBMMTYzNC4wNywyNzYuNTQgTDE2MzYsMjc3Ljg0IEwxNjM2LjI0LDI3NS4yOCBMMTYzOC42LDI3NS43NyBMMTYzOC42OSwyNzMuNzcgTDE2MzkuODIsMjczLjg1IEwxNjQwLjcxLDI3MS42OCBMMTY0My45OSwyNjcuODkgTDE2NDQuODEsMjYzLjI2IEwxNjQ5LjE3LDI1OC44NSBMMTY1MS42MywyNTQuOTMgTDE2NTMuMzIsMjUwLjM4IEwxNjU3LjkzLDI0My43MyBMMTY2Mi43NSwyMzkuODggTDE2NjUuMTIsMjQwLjA1IEwxNjY2Ljg0LDIzOC4yOCBMMTY3MC41MiwyMzkuMTUgTDE2NzIuMzUsMjM3LjI3IEwxNjc2LjIyLDIzOS4wOSBMMTY3Ny4zMiwyMzcuMjkgTDE2ODMuMDgsMjM3LjEzIEwxNjkxLjY3LDIzNC40NSBMMTY5Ny4wMiwyMzMuNzYgTDE2OTcuOTEsMjMwLjUxIEwxNjk3LjUzLDIyNS44NyBMMTY5OS4wNywyMjUuODYgTDE2OTkuNDQsMjIyLjA4IEwxNzAxLjUxLDIyMi43MyBMMTcwMi4wNiwyMTkuNDcgTDE3MDMuNDksMjE5LjggTDE3MDQuOCwyMTUuODggTDE3MDguMjQsMjE1Ljg4IEwxNzA4LjIsMjE0LjY1IEwxNzEwLjI1LDIxNC42NSBMMTcxMi4wNiwyMTEuMDcgTDE3MjAuMjMsMjEzLjMxIEwxNzIxLjA4LDIxMS40IEwxNzI0Ljg1LDIxMi4wMSBMMTcyNC43NywyMTAuMzggTDE3MjguOTUsMjEwLjc2IEwxNzI5LjQsMjA3Ljc5IEwxNzMwLjc0LDIwNi44NCBMMTczMC41MSwyMTAuMTIgTDE3MzEuMjEsMjA5LjkyIEwxNzMxLjM5LDIwNi4zMyBMMTczMi42NywyMDUuMjQgTDE3MzIuNzQsMjAxLjcyIEwxNzMzLjg0LDIwMS4yMyBMMTczMy4wMywxOTguNjEgTDE3MzAuNywxOTguNTUgTDE3MzEuMjEsMTk2LjA5IEwxNzM3LjM3LDE5NC41OCBMMTczNy43OCwxOTIuNTYgTDE3MzcuMDksMTkwLjM4IEwxNzM4LjEzLDE4NyBMMTc0Ni43NiwxODUuMjUgTDE3NTEuOTMsMTgzLjg2IEwxNzU2LjMzLDE4NC4wOSBMMTc2MS45OSwxODYuMjkgTDE3NjMuOSwxODQuNzMgTDE3NjQuNjMsMTc4LjE4IEwxNzY2LjU2LDE3MS40NCBMMTc2OC42LDE3Mi4wNyBMMTc2OS43LDE2OC4zMiBMMTc2OS4wNSwxNjUuMDggTDE3NzEuMTQsMTYxLjggTDE3NzEuMjUsMTU5LjYzIEwxNzcyLjk3LDE1Ny4wOSBMMTc3My40MywxNTIuNTggTDE3NjUuNTQsMTU0LjE5IEwxNzYwLjE1LDE2MS41OSBMMTc1Ny44MiwxNjQuMDcgTDE3NTIuODEsMTY3LjY4IEwxNzQ3Ljk2LDE2OC41NSBMMTc0Mi42NiwxNzAuODcgTDE3NDAuMjIsMTczLjEgTDE3MzguNSwxNzMuNCBMMTczNS4xNSwxNzIuMDQgTDE3MzAuNjcsMTc0LjIgTDE3MjguMzEsMTc3LjE1IEwxNzI1Ljc4LDE3Ni44NiBMMTcyNC4xMywxNzUuNDkgTDE3MjAuMzMsMTc1LjEgTDE3MTYuNTksMTc2LjQxIEwxNzEzLjI4LDE3OS40MSBMMTcxNC41NywxNzkuOTggTDE3MTIuMjcsMTgyLjEgTDE3MTIuMzEsMTgzLjc3IEwxNzEwLjM1LDE4NC41OCBMMTcwNS4wMiwxODUuNDkgTDE3MDEuNjEsMTg0LjQ4IEwxNjk4LDE4NS42OSBMMTY5NS43OSwxODguMTUgTDE2OTUuMjQsMTkwLjYxIEwxNjg5LjE2LDE5NC4xMiBMMTY4Ny4zOSwxOTYuMTIgTDE2ODAuNzgsMTk0LjgxIEwxNjc2LjM1LDE5NS43NSBMMTY2OS42NiwyMDEuMTIgTDE2NjEuMjMsMjAzLjIzIEwxNjUzLjA2LDIwNy45OSBMMTY0OC4xMiwyMTQuNDkgTDE2NDcuOTMsMjE1LjY3IEwxNjQ1LjEzLDIxNy42OCBMMTY0My4xOCwyMjEuMzggTDE2MzYuMjgsMjI1Ljg4IEwxNjM0Ljg4LDIyNy45IEwxNjI5LjUxLDIyNC4wOSBMMTYyOS42NCwyMjAuMSBMMTYzMS4yMiwyMTQuNTcgTDE2MzIuMjYsMjA5LjUyIEwxNjMwLjExLDIwOC42NyBMMTYzMS4xNCwyMDYuOTkgTDE2MzMuNjQsMjA3LjQyIEwxNjM1LjAyLDIwMi4wMyBMMTYzNS42MSwxOTYuMDYgTDE2MzUsMTkzLjk4IEwxNjMzLjExLDE5Mi4xNiBMMTYzMy41NiwxODguMjggTDE2MzQuODEsMTg0LjMzIEwxNjM5LjE3LDE4My43OCBMMTY0MC45OSwxNzkuODggTDE2NDUuNDYsMTc2LjkyIEwxNjQ5Ljg2LDE3NS45OCBMMTY1MC43NCwxNzUuMTIgTDE2NTAuOTUsMTY3LjI0IEwxNjQ5LjU4LDE2NS4zNSBMMTY1Mi45NywxNjMuNjIgTDE2NTIuMTMsMTYxLjgyIEwxNjUzLDE1OS43NSBMMTY1NC4yNSwxNTkuOTIgTDE2NTcuNjEsMTQ5LjQ1IEwxNjU3LjQ4LDE0NC4yIEwxNjU0LjkyLDE0My4zMiBMMTY1My43OSwxMzkuMTQgTDE2NTEuNCwxMzkuNSBMMTY1MS4xLDE0My45NCBMMTY0Ny42NSwxNDQuMTYgTDE2NDYuMiwxNDYuMTYgTDE2NDMuMjIsMTQ2LjM0IEwxNjQyLjYyLDE0Mi43IEwxNjQxLjc3LDE0Ni4xOCBMMTY0MC4zNiwxNDguNjkgTDE2MzcuNTksMTQ4Ljg1IEwxNjM1Ljk2LDE1NC43IEwxNjM0LjE4LDE1Ni4zNyBMMTYzMC43MSwxNTguMTIgTDE2MjkuMTgsMTU3LjQ0IEwxNjI3LjMsMTU4LjMxIEwxNjI0LjQyLDE1Ny40MiBMMTYyMi40NSwxNTQuMjkgTDE2MjMuMTQsMTQ4LjQ4IEwxNjE5LjAzLDE0Ni43MyBMMTYxNi4xNiwxNDEuOTcgTDE2MTUuNDYsMTM5LjA4IEwxNjEyLjAyLDEzNC42MiBMMTYwNi42LDEzMS44NCBMMTYwNC42NSwxMzEuNzEgTDE2MDQuNDIsMTI5Ljc0IEwxNjAyLjA3LDEzMy42MyBMMTU5OC41NywxMzQuNjggTDE1OTUuOTYsMTMzLjgzIEwxNTk1LjkzLDEzMi4yMSBMMTU5My4zMywxMzAuNDQgTDE1ODkuOTYsMTMwLjM3IEwxNTg3LjIyLDEzMi43NyBMMTU4Ni4xMiwxMzguOTMgTDE1ODUuMTYsMTM5LjA2IEwxNTc5LjUyLDEzNy4zIEwxNTc4LjI0LDEzNy41NyBMMTU3NS41NSwxNDEuMjQgTDE1NzUuNzMsMTQ0LjU5IEwxNTc0LjksMTQ4LjMyIEwxNTc1LjA4LDE1Mi41NCBMMTU3My42NiwxNTMuOCBMMTU2Ni4xNCwxNjIuMTggTDE1NjQuNDIsMTYzLjA1IEwxNTYwLjUzLDE2Mi4wMiBMMTU1Ny44OCwxNjIuNjIgTDE1NTMuODksMTY1LjU1IEwxNTUzLjY1LDE2Ni42NCBMMTU1MS41MiwxNjcuMDMgTDE1NTUuNTksMTY5LjM1IEwxNTYwLjU4LDE3MC41MSBMMTU2My40MSwxNzIuMTMgTDE1NjMuMywxNzMuNTkgTDE1NjEuNTcsMTc1LjIyIEwxNTYxLjU5LDE3OC4yMiBMMTU2Mi43NCwxNzcuMjQgTDE1NjMuODMsMTc5Ljg0IEwxNTYzLjI5LDE4MS44NiBMMTU2NC4yNCwxODUuOTkgTDE1NjIuNzEsMTg5LjM3IEwxNTYxLjIyLDE5NS40IEwxNTYyLjI2LDE5OS42IEwxNTYwLjk0LDIwMi44OSBMMTU2MC43OCwyMDQuOSBMMTU1OC43MywyMDkuMTIgTDE1NTcuNTgsMjEwLjI3IEwxNTU0LjMxLDIxMS4xNSBMMTU1My44MiwyMTMuMTMgTDE1NTQsMjE2Ljk5IEwxNTU2LjE2LDIxNy42MyBMMTU1Ni43NywyMTguOSBMMTU1NS44MSwyMjMuNDEgTDE1NTEuNjIsMjI3Ljg2IEwxNTQ5LjE4LDIzMS4xMiBMMTU0Ni40MiwyMzEuNDggTDE1NDUuMzEsMjMzLjg5IEwxNTQ1LjY0LDIzNy4xOSBMMTU0OS4wNywyNDAuOTEgTDE1NTAuNTIsMjQ0LjUgTDE1NDkuNTksMjQ1LjgyIEwxNTUxLjA3LDI0OC43NiBMMTU1MS4yMiwyNTQuMDIgTDE1NDkuNjgsMjU0Ljk1IEwxNTQ4LjcxLDI1Ny40NiBMMTU0NS43MiwyNTguMDkgTDE1NDIuOTksMjYyLjE1IEwxNTQyLjc5LDI2My4yOSBMMTU0NC40MSwyNjUuMDcgTDE1NDQuNzQsMjY4Ljc0IEwxNTQ5LjIxLDI3MS44OSBMMTU1Ny41NiwyNzMgTDE1NTkuMjgsMjc1LjE5IEwxNTYwLjQ4LDI4Mi44NyBMMTU2MC42OSwyODcuMzEgTDE1NTkuNzEsMjkwLjMxIEwxNTU3LjY0LDI5MC45OCBMMTU1NS4yNSwyOTMuMzMgTDE1NTUuMDIsMjk1LjY1IEwxNTU2LjUyLDI5Ni4zNSBMMTU2MC45MiwyOTUuNzUgTDE1NjAuMzQsMzAxLjIxIEwxNTU5LjI1LDMwMy42IEwxNTU5LjYyLDMwNC44NSBMMTU2Mi45NSwzMDYuMzMgTDE1NjMuNzUsMzEwLjgyIEwxNTYwLjMzLDMxNC4yNSBMMTU1Ny4yNSwzMTguNDIgTDE1NTkuMDYsMzIwLjkzIEwxNTYwLjQ0LDMyNC40MSBMMTU2Mi4xLDMyNC44NyBMMTU2OS42OCwzMjguMjYgWiBNMTY2MS41MSwyMDAuODggTDE2NjIuNjEsMTk4Ljg2IEwxNjYxLjYsMTk3LjQgTDE2NTguODMsMTk4Ljc3IEwxNjU4Ljc2LDIwMC43IEwxNjYwLjA2LDIwMS44IEwxNjYxLjUxLDIwMC44OCBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 瑕丘庙会\n瑕丘庙会的突出内容是共食：大锅烹饪、集中分装、村民传菜，再到众人围桌。这里沿一碗饭的移动理解乡村节日协作，而不是把每处桌席看成售卖摊位；现有资料均为历史记录，近年举办情况未证实。","childrenIds":["scene-py-xq-02","scene-py-xq-03","scene-py-xq-04"],"label_anchor_points":[1620.55,221.24],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1620.55,"anchorY":221.24,"labelX":1680,"labelY":205,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-py-xq-02":{"id":"scene-py-xq-02","parentId":"fair-py-xq","imageSrc":"assets/scenes/py-xq-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNzczLjc2MDAwMDAwMDAwMDEiIGN5PSIzNzQuNCIgcng9IjMwNy44NDAwMDAwMDAwMDAwMyIgcnk9IjI4MC43OTk5OTk5OTk5OTk5NSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[93.60000000000001,465.9200000000001,655.1999999999999,1081.6000000000001],"zoomedBox":[93.60000000000001,465.9200000000001,655.1999999999999,1081.6000000000001],"label":"圆桌与传菜通道","url":null,"text":"### 圆桌与传菜通道\n**圆桌之间的空隙为什么也是活动内容？**\n俯视可以同时看见坐下的人、端菜走动的人和还没有坐满的桌子。桌间空隙并非图像空白，而是分工得以衔接的空间条件。2019照片支持圆桌成片分布，插画的桌数和间距经过重组，不能据此计算实际容纳人数或服务效率。\n\n俯视成片圆桌和桌间走动的人群，可见食物、座椅与通道关系。\n\n资料：2019-02-22（次日报道所述）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-py-xq-02-round-table"],"label_anchor_points":[832,290.16],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":832,"anchorY":290.16,"labelX":832,"labelY":225.16000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-py-xq-02-round-table":{"id":"object-py-xq-02-round-table","parentId":"scene-py-xq-02","imageSrc":"assets/scenes/py-xq-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4ODAiIGN5PSI1MjIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[320,520,725,1240],"zoomedBox":[320,520,725,1240],"label":"共食圆桌","url":null,"text":"### 共食圆桌\n圆桌在2019图集中成片出现，围坐方式使一桌人共享桌面的碗碟，和面对摊主交易的经营点不同。插画以空桌与满桌对照说明组织关系，但每桌人数、桌面材料和摆放距离不作为历史统计。\n- **它在庙会中的作用**：组织共食小组并形成传菜网络\n- **记载与补全**：2019-02-22（次日报道所述）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[880,522],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":740,"labelY":427,"anchorX":880,"anchorY":522,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-py-xq-03":{"id":"scene-py-xq-03","parentId":"fair-py-xq","imageSrc":"assets/scenes/py-xq-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNDc0LjIzOTk5OTk5OTk5OTk1IiBjeT0iNjczLjkyIiByeD0iNDc0LjIzOTk5OTk5OTk5OTk1IiByeT0iMjYyLjA4MDAwMDAwMDAwMDA0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[411.84,0,936,948.4799999999999],"zoomedBox":[411.84,0,936,948.4799999999999],"label":"围桌聚餐","url":null,"text":"### 围桌聚餐\n**围桌吃饭为何是这里的代表活动？**\n庙会的聚集在这里转化为共同进餐，交谈、夹取和递碗都围绕一张桌展开。冬装、帽子和密集桌席是历史照片可见内容，插画人物关系则为创作。页面不从相貌和衣服推定亲属身份，也不凭盘中颜色给菜品编出地方名称。\n\n人们紧密围坐多张桌子，冬装、帽子和碗盘在画面中交错。\n\n资料：2019-02-22（次日报道所述）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-py-xq-03-shared-dishes","object-py-xq-03-eating-bowl"],"label_anchor_points":[515.84,542.88],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":515.84,"anchorY":542.88,"labelX":515.84,"labelY":477.88,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-py-xq-03-shared-dishes":{"id":"object-py-xq-03-shared-dishes","parentId":"scene-py-xq-03","imageSrc":"assets/scenes/py-xq-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4OTYiIGN5PSI2MjEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[418,536,823,1256],"zoomedBox":[418,536,823,1256],"label":"共食碗盘","url":null,"text":"### 共食碗盘\n2019图集可见餐桌上密集碗盘，器物位于多人围坐的中心，强调共享而非单独售卖。插画描绘不同颜色的食物以区分器皿位置，具体菜名、配方、数量与上菜次序没有逐项证据，不由外观命名。\n- **它在庙会中的作用**：构成一桌人共同参与的中心\n- **记载与补全**：2019-02-22（次日报道所述）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[896,621],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":756,"labelY":526,"anchorX":896,"anchorY":621,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-py-xq-03-eating-bowl":{"id":"object-py-xq-03-eating-bowl","parentId":"scene-py-xq-03","imageSrc":"assets/scenes/py-xq-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTIwIiBjeT0iNDUwIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[248,760,653,1480],"zoomedBox":[248,760,653,1480],"label":"食客手中饭碗","url":null,"text":"### 食客手中饭碗\n手中的碗把公共桌面与个人进食动作连接起来，冬装食客围坐的关系来自历史现场照片。插画中的持碗姿态和器物花纹为创作，不能根据一人手势解释祭祀意图，也不把就餐者指定为特定表演队成员。\n- **它在庙会中的作用**：说明共食中的个人取用动作\n- **记载与补全**：2019-02-22（次日报道所述）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1120,450],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":980,"labelY":355,"anchorX":1120,"anchorY":450,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-py-xq-04":{"id":"scene-py-xq-04","parentId":"fair-py-xq","imageSrc":"assets/scenes/py-xq-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTMzMS4yIiBjeT0iNTgwLjMxOTk5OTk5OTk5OTkiIHJ4PSIzMzIuOCIgcnk9IjM1NS42OCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[224.64,998.4,936,1664],"zoomedBox":[224.64,998.4,936,1664],"label":"备餐与分餐","url":null,"text":"### 备餐与分餐\n**大锅到大盆，为什么需要两种容器？**\n烹饪与分装面对的工作不同：大锅集中处理食材，大盆承接熟菜，碗碟再分到各桌。2019报道清楚描述这一协作链，插画让不同环节同框便于阅读。院落外观、锅灶排列与菜品是艺术补全，不把概念画当作厨房操作规程。\n\n2019报道描述村务监督所院内六口大锅集中烹饪，熟菜转入大盆后分装，再送往餐桌。\n\n资料：2019-02-22历史记载；院落外观补全\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-py-xq-04-communal-pot","object-py-xq-04-serving-basin"],"label_anchor_points":[1364.48,439.91999999999996],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1364.48,"anchorY":439.91999999999996,"labelX":1364.48,"labelY":374.91999999999996,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-py-xq-04-communal-pot":{"id":"object-py-xq-04-communal-pot","parentId":"scene-py-xq-04","imageSrc":"assets/scenes/py-xq-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0ODAiIGN5PSI2MTIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[410,120,815,840],"zoomedBox":[410,120,815,840],"label":"集中烹饪大锅","url":null,"text":"### 集中烹饪大锅\n2019报道记村务监督所院内有六口大锅集中烹饪，说明供餐不是每桌独立做饭。插画用前后排列突出协作规模，锅的材料、容量及灶体构造没有测量资料，不能根据画面推算供餐人数或火力。\n- **它在庙会中的作用**：承担批量烹饪的功能\n- **记载与补全**：2019-02-22历史记载；院落外观补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[480,612],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":620,"labelY":517,"anchorX":480,"anchorY":612,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-py-xq-04-serving-basin":{"id":"object-py-xq-04-serving-basin","parentId":"scene-py-xq-04","imageSrc":"assets/scenes/py-xq-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjE2IiBjeT0iNTc2IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[374,856,779,1576],"zoomedBox":[374,856,779,1576],"label":"分餐大盆","url":null,"text":"### 分餐大盆\n熟菜转入大盆再分装碗碟，是2019报道明确记录的中间环节。大盆连接烹饪与上桌，使不同劳动者能够接续工作；插画的金属质感与容器尺寸是创作，未据画面给出真实卫生管理或分餐标准。\n- **它在庙会中的作用**：完成从大锅到单份碗碟的转换\n- **记载与补全**：2019-02-22历史记载；院落外观补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1216,576],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1076,"labelY":481,"anchorX":1216,"anchorY":576,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-xc-bl":{"id":"fair-xc-bl","parentId":"54749336813040","label":"许昌","imageSrc":"assets/worlds/xc-bl.webp","box":[539.73,1202.44,702.45,1439.34],"zoomedBox":[539.73,1202.44,702.45,1439.34],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNDI3LjA3LDU3NC40NiBMMTQyNC41NCw1NzcuMDUgTDE0MTcuNzMsNTc2Ljg3IEwxNDE2LjM0LDU3OC4zNyBMMTQxNS40Nyw1ODIuMiBMMTQwOC4zNiw1ODMuMTUgTDE0MDcuMzgsNTg1Ljc2IEwxNDAyLjQ4LDU4Ni42MyBMMTQwMS4yNyw1ODUuMjcgTDEzOTguNzYsNTg0LjY0IEwxMzk4LjU2LDU4MS45MyBMMTM5Ny4zNSw1ODAuNyBMMTM5OC41LDU3OS42OSBMMTM5Ni43MSw1NzYuNzEgTDEzOTMuNTYsNTc0Ljk5IEwxMzkyLjUzLDU3Ny4yMyBMMTM5MS4wNSw1NzQuODIgTDEzODkuMjEsNTc2LjA3IEwxMzg3LjcxLDU3NS41MyBMMTM4NS44Niw1NzcuNjQgTDEzODAuMjYsNTc2LjY5IEwxMzc4LjczLDU3NC4zIEwxMzc4LjE4LDU3MS44MyBMMTM3Ni4zNiw1NzIuMzYgTDEzNzYuOCw1NjkuNTkgTDEzNzMuODYsNTY5LjA4IEwxMzcyLjk1LDU2Ny4zIEwxMzcxLjQ5LDU2Ny4zNyBMMTM3MS40Myw1NjUuMTQgTDEzNjYuMzQsNTYzLjg2IEwxMzY1Ljc2LDU2Mi40NCBMMTM2Mi4zNyw1NjMuMTYgTDEzNjAuMTksNTY0Ljc4IEwxMzU4LjU3LDU2Mi43OCBMMTM1OS4xNiw1NTkuOTQgTDEzNTguMjgsNTU4LjE1IEwxMzU2LjU2LDU1Ny4yNCBMMTM1NS42Myw1NTYuOCBMMTM0OS45Myw1NTcuMzggTDEzNDkuNjIsNTU4LjM5IEwxMzQ2LjU3LDU1OC4yMyBMMTM0MS4xOSw1NTUuMSBMMTMzOC44Miw1NTYuMzMgTDEzMzkuMTgsNTU3LjE3IEwxMzM2LjE5LDU2MC4yMyBMMTMzMi4zMyw1NjAuNDEgTDEzMjguNTgsNTU5LjQ5IEwxMzI2Ljc3LDU2Mi4yNCBMMTMyNC4xNiw1NjMuMjMgTDEzMjQuMTQsNTY1LjYgTDEzMjEuNyw1NjUuOTUgTDEzMjIuMjcsNTY4LjgyIEwxMzE3LjgzLDU2Ny41IEwxMzE1Ljk3LDU2OS4xMiBMMTMxMy44NSw1NjkuMiBMMTMxMS4xLDU2Ni4xNSBMMTMwOS4zMSw1NjUuOCBMMTMwNy40OCw1NjIuNzggTDEzMDQuNSw1NjAuNTUgTDEzMDIuOTcsNTYwLjUzIEwxMjk4Ljk5LDU1OS4wMyBMMTI5Ni41NSw1NTkuMzggTDEyOTQuNjQsNTYwLjkzIEwxMjg5LjU2LDU1OS40OCBMMTI4Ny4xNiw1NTcuMDYgTDEyODcuNCw1NTUuNDMgTDEyODYuMDMsNTUzLjg1IEwxMjgzLjc0LDU1NC43OSBMMTI4MC43Niw1NTMuODIgTDEyNzguNiw1NTYuNTUgTDEyNzYuMzQsNTU1LjczIEwxMjcwLjYzLDU1Mi4xMyBMMTI2Ny44Miw1NTIuMzUgTDEyNjYuNDIsNTUxLjAyIEwxMjY3Ljk1LDU0Ni41NCBMMTI2NS40Nyw1NDUuOTYgTDEyNjMuMjQsNTQ2LjMxIEwxMjU4Ljk0LDU0NS40NCBMMTI1OS41OCw1NDMuMTUgTDEyNTYuNDksNTQxLjY4IEwxMjU1LjUxLDUzOS43OSBMMTI1MS4wOCw1MzkuNzMgTDEyNDkuMzMsNTQyLjg3IEwxMjUwLjE3LDU0NC42MyBMMTI0OC45Niw1NDYuNzkgTDEyNDkuMDgsNTUxLjY4IEwxMjQxLjkyLDU1MS44NyBMMTI0MS44Nyw1NTMuODMgTDEyNDAuMjgsNTU0Ljk3IEwxMjM0LjE5LDU1NC42OSBMMTIzMi4xMiw1NTUuNjcgTDEyMzEuODksNTU3Ljg2IEwxMjI5LjQzLDU2MC44MiBMMTIyNi44Miw1NjAuNzYgTDEyMjQuNDQsNTY0LjUzIEwxMjI0LjU1LDU2NS43NiBMMTIyMi44NCw1NjcuNzEgTDEyMTguNDYsNTcxLjE3IEwxMjE2LjY4LDU2OS43MSBMMTIxMC40Myw1NzEuODMgTDEyMDguMjQsNTcyLjExIEwxMjA1LjM2LDU3MS4xNSBMMTIwNC40LDU3Mi4wMSBMMTIwMy4wNSw1NzUuNTIgTDEyMDIuNDQsNTgwLjg2IEwxMjA0LjAzLDU4Mi43MSBMMTIwNy41Nyw1ODMuNjkgTDEyMDkuNCw1ODQuOTkgTDEyMDkuODEsNTg2LjY1IEwxMjA5LjAzLDU4OC45OSBMMTIwOS4yMyw1OTEuNDggTDEyMTIuMDYsNTk2LjAxIEwxMjE0LjI4LDU5OC41MyBMMTIxMy42NSw2MDEuMDMgTDEyMTQuNDMsNjAzLjQzIEwxMjE3LjQyLDYwNC44MyBMMTIxOC4xNSw2MDcuMDUgTDEyMTkuNDksNjA4LjE5IEwxMjIzLjMzLDYwOC42MiBMMTIyOS41LDYwNy4yMSBMMTIzMS43LDYwOC4zNSBMMTIzMi42LDYxMC42IEwxMjM0LjEsNjEwLjczIEwxMjM1LjI1LDYwOS4zNyBMMTIzNS4wNCw2MDYuOTYgTDEyMzcuMzEsNjA1LjY2IEwxMjM4LjMsNjA2LjExIEwxMjM5LjYyLDYwOS4yMyBMMTI0Mi4zNSw2MDguODcgTDEyNDMuMTUsNjExLjg5IEwxMjQ2LjQsNjEyLjg0IEwxMjUyLjM0LDYxNy4yMyBMMTI1MC4yMiw2MTkuMTQgTDEyNTIuODMsNjI1LjQyIEwxMjU0LjgsNjI0Ljk5IEwxMjU1LjAxLDYyMi42NyBMMTI1Ni42Miw2MjEuOCBMMTI1OS4yNSw2MjIuNTQgTDEyNjIuNTksNjIyLjU1IEwxMjY0LjM1LDYyNC40OCBMMTI2NS41Nyw2MzAuOTcgTDEyNjcuNjgsNjM0LjUyIEwxMjY3LjU0LDY0Mi40NiBMMTI2Ny4xNyw2NDQuNDQgTDEyNjIuNTQsNjQ3Ljk1IEwxMjYxLjY5LDY1MS41NCBMMTI1OC42NSw2NTYuNDEgTDEyNTcuNzcsNjU4LjggTDEyNTkuMDYsNjYyLjcyIEwxMjYyLjI3LDY2Ny4xMiBMMTI2Mi40OCw2NjkuMDMgTDEyNjEuNTgsNjczLjQxIEwxMjYyLjUzLDY3Ni41MyBMMTI2My45LDY3Ny40MiBMMTI1OS45Niw2ODAuMjEgTDEyNzAuMDEsNjg1LjUyIEwxMjcxLjcyLDY4NC43OSBMMTI3NC4yMyw2ODYuMzEgTDEyNzQuNzYsNjkwLjcxIEwxMjgyLDY4OS4xNiBMMTI4NC43NCw2ODggTDEyODcuMzcsNjg4LjE4IEwxMjkyLjMzLDY4Ni42NiBMMTI5My4yOCw2ODguMTcgTDEyOTcuNzUsNjg3Ljc5IEwxMjk4LjQsNjkxLjM5IEwxMzAwLjUxLDY5My40OCBMMTI5OS4xOSw2OTYuMTggTDEzMDAuMDgsNjk3LjEyIEwxMzA0LjQ1LDY5Ny41NCBMMTMwMi4yLDcwMC4wNSBMMTMwMi40OCw3MDIuNDUgTDEzMDUuMTYsNzAwLjU5IEwxMzA4LjM0LDcwMi4xNCBMMTMwOS45Niw3MDAuNjMgTDEzMDkuODUsNjk5LjAxIEwxMzExLjMsNzAwLjU0IEwxMzE2LjE4LDY5OS44MyBMMTMxOC42OCw3MDEuMDIgTDEzMjIuMDEsNzAxLjYxIEwxMzIyLjkyLDcwMS4wNSBMMTMyMy41OCw2OTcuODMgTDEzMjQuNzMsNjk3LjIxIEwxMzI2LjE3LDcwMC42MSBMMTMyOS41Miw2OTkuMDkgTDEzMjkuODcsNjk2LjU3IEwxMzMyLjc2LDY5NS42NSBMMTMzMy4zNiw2OTIuNCBMMTMzMS4xMyw2OTAuNTkgTDEzMjguNjQsNjkwLjExIEwxMzI4LjEyLDY4Ny43NSBMMTMyOS42OCw2ODQuNDkgTDEzMzEuNiw2ODMuNDEgTDEzMzEuNjIsNjc4Ljg3IEwxMzMzLjE4LDY3NS4xOCBMMTMzMi44MSw2NzAuNjEgTDEzMjcuNSw2NjguODUgTDEzMjcuMjEsNjY2LjczIEwxMzI1Ljg3LDY2NS45MSBMMTMyNi40NSw2NjQuMTUgTDEzMjguNCw2NjMuNTEgTDEzMjguOTUsNjYxLjM3IEwxMzMzLDY2MS40MSBMMTMzNS41Miw2NTkuMzMgTDEzMzMuOTgsNjU3Ljk3IEwxMzM2LjM0LDY1Ny42OCBMMTMzNy4yOCw2NTguNTggTDEzNDAuMDYsNjU3LjkxIEwxMzQxLjc4LDY1OC41NyBMMTM0Mi43Myw2NTcuNDggTDEzNDIuOTksNjU3LjM1IEwxMzQzLjg2LDY1Ny4yOSBMMTM0NC4yNyw2NTYuMzggTDEzNDUuMDYsNjU2LjQ4IEwxMzQ1LjQ4LDY1OS43NSBMMTM1MC40Niw2NjAuMzEgTDEzNTIuMDUsNjU3Ljc4IEwxMzUxLjc5LDY1Mi42MiBMMTM1My45LDY1Mi4wOCBMMTM1MS4yOSw2NDUuMjQgTDEzNTEuNzMsNjQzLjI0IEwxMzUzLjcsNjQzLjk2IEwxMzU2LjYyLDY0My4xNSBMMTM1Ny4wNSw2NDQuNDIgTDEzNTkuNDEsNjQ0LjUxIEwxMzU5LjU1LDY0My4yNiBMMTM2Mi4zOCw2NDMuODYgTDEzNjMuNDYsNjQxLjI0IEwxMzY5LjA4LDYzNy41NiBMMTM3My44OSw2MzUuNzcgTDEzNzcuOTYsNjM1LjcgTDEzODIuMjcsNjM0LjQ3IEwxMzg1LjI0LDYzNC43NCBMMTM4OC4yOCw2MzYuMzkgTDEzODkuMjcsNjM5LjQzIEwxMzg4Ljk1LDY0Mi4yNyBMMTM5MC4zNSw2NDMuMDkgTDEzOTIuNTgsNjQyLjMxIEwxMzk0LjU4LDY0Ni4zOSBMMTM5Ny42OSw2NDYuMzggTDEzOTcuNjcsNjQ4LjQxIEwxMzk5LjcsNjQ3LjkgTDE0MDEuODQsNjUwLjczIEwxNDAyLjMxLDY1Ny41NiBMMTQwMC4wNiw2NjAuNTkgTDEzOTkuOCw2NjIuNDcgTDE0MDMuMDcsNjY0Ljc4IEwxNDA1LjYyLDY2Ny40MyBMMTQwOC4xOSw2NzMuMjcgTDE0MDcuMzIsNjc0LjgzIEwxNDA4LjUzLDY3Ni45OCBMMTQxMS43MSw2NzUuNDkgTDE0MTEuOTMsNjc3LjA5IEwxNDE0LjAzLDY3Ni41IEwxNDE1LjU4LDY3Ny41MyBMMTQxNy45Niw2NzcuMzYgTDE0MTkuMSw2NzguNSBMMTQyMy44MSw2NzkuMDMgTDE0MjUuMTYsNjgxLjY0IEwxNDMyLjgxLDY4My4zMyBMMTQzNi41LDY4MS4xNyBMMTQzNy4wOCw2NzYuOTEgTDE0MzkuMzQsNjcyLjc4IEwxNDM5LjAzLDY2OS40OCBMMTQzNy42NSw2NjkuNDEgTDE0MzYuNjQsNjY3LjI3IEwxNDM0Ljg3LDY2Ny4zNyBMMTQzNC44Myw2NjUuMDYgTDE0MzYuOSw2NjQuODYgTDE0MzcuNiw2NjIuMDMgTDE0MzYuNzUsNjYwLjc0IEwxNDM3LjcxLDY1OC42OSBMMTQzNS42OCw2NTYuNjIgTDE0MzQuNjEsNjQyLjIzIEwxNDM2LjU3LDY0MC42NSBMMTQzNS45NSw2MzYuNTIgTDE0MzYuOTMsNjM1Ljc1IEwxNDM2LjgzLDYzMS4yNCBMMTQzMy43NCw2MjkuODkgTDE0MzIuMjcsNjI2LjM5IEwxNDMxLjIzLDYyMS4wMSBMMTQyOS4xOCw2MTkuMzggTDE0MjkuMDUsNjE3LjI0IEwxNDI3LjQ5LDYwOS44NCBMMTQyOS42Miw2MDguMzIgTDE0MjkuNjksNjA3LjE5IEwxNDMxLjgyLDYwNC4xNyBMMTQzMi4yNiw2MDAuNSBMMTQyOS45Niw1OTEuOTcgTDE0MzAuMTQsNTg4LjMxIEwxNDMyLjMsNTg0LjY0IEwxNDMxLjk5LDU4Mi4wOSBMMTQyOS41NSw1NzkuOSBMMTQyOS40OCw1NzYuNjEgTDE0MjcuMDcsNTc0LjQ2IFogTTEzNDIuOTksNjU3LjM1IEwxMzQyLjczLDY1Ny40OCBMMTM0Mi42OCw2NTguOTIgTDEzNDUuNDgsNjU5Ljc1IEwxMzQ1LjA2LDY1Ni40OCBMMTM0NC4yNyw2NTYuMzggTDEzNDMuODYsNjU3LjI5IEwxMzQyLjk5LDY1Ny4zNSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 灞陵桥新春庙会\n灞陵桥把关羽、曹操与灞陵挑袍故事变成可以接近的灯组和人物互动。沿着入口、游览区域与河面三种场所阅读，既能看见传统故事的当代表达，也能辨别机器人、任务卡和夜演各自承担的体验功能。","childrenIds":["scene-xc-bl-02","scene-xc-bl-03","scene-xc-bl-04","scene-xc-bl-05"],"label_anchor_points":[1324.58,615.37],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1324.58,"anchorY":615.37,"labelX":1324.58,"labelY":550.37,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-xc-bl-02":{"id":"scene-xc-bl-02","parentId":"fair-xc-bl","imageSrc":"assets/scenes/xc-bl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTE5OC4wOCIgY3k9IjIyNC42NCIgcng9IjMxNi4xNTk5OTk5OTk5OTk5NyIgcnk9IjIwNS45MjAwMDAwMDAwMDAwMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[18.72,881.9200000000001,430.56,1514.24],"zoomedBox":[18.72,881.9200000000001,430.56,1514.24],"label":"门楼与马灯","url":null,"text":"### 门楼与马灯\n**一匹马灯怎样把门楼变成节庆入口？**\n画面把马形灯组放在门楼前，以动物的完整侧面吸引近距离观看，门楼则交代景区的建筑背景。游客的身体尺度让灯组体量更直观。此处可比较长期存在的建筑与当届新增的展示物，但不要把插画中的栏杆间距当作实际入口宽度。\n\n白天的马形灯组与景区门楼近景，能看见彩绘纹样和灯组轮廓。\n\n资料：2026春节（报道日期2026-02-23）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xc-bl-02-horse-lantern-day"],"label_anchor_points":[1264.64,215.28],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1264.64,"anchorY":215.28,"labelX":1264.64,"labelY":150.28,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xc-bl-02-horse-lantern-day":{"id":"object-xc-bl-02-horse-lantern-day","parentId":"scene-xc-bl-02","imageSrc":"assets/scenes/xc-bl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTY4IiBjeT0iNDQxIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[238,808,643,1528],"zoomedBox":[238,808,643,1528],"label":"白天的马形彩灯","url":null,"text":"### 白天的马形彩灯\n2026现场报道中的马形灯组在白天仍可辨认彩绘与外部轮廓。它与门楼同框，说明灯会物件白天也有观看价值；画中火焰状鬃毛及纹饰是对图像的绘画转译，不能推算材质和制作工序。\n- **它在庙会中的作用**：入口主题展示\n- **记载与补全**：2026春节（报道日期2026-02-23）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1168,441],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1028,"labelY":346,"anchorX":1168,"anchorY":441,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xc-bl-03":{"id":"scene-xc-bl-03","parentId":"fair-xc-bl","imageSrc":"assets/scenes/xc-bl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNDA3LjY4IiBjeT0iNDA3LjE1OTk5OTk5OTk5OTk3IiByeD0iMjkxLjIiIHJ5PSIyMzguNjc5OTk5OTk5OTk5OTUiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[168.48,116.48000000000002,645.8399999999999,698.88],"zoomedBox":[168.48,116.48000000000002,645.8399999999999,698.88],"label":"三国人物互动","url":null,"text":"### 三国人物互动\n**围成半圈的游客怎样进入三国故事？**\n演员与现代游客相对站立，前排游客的举手动作把注意力从背景浮雕引向当下交流。报道确认对诗、比力气等互动，图像则用于观察角色装束和围观关系。画中三人的精确台词与动作次序没有现场记录，不能据此编成固定演艺脚本。\n\n古装演员在浮雕背景前与游客互动，观众站在前方围看。\n\n资料：2026春节（报道日期2026-02-23）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xc-bl-03-costume-beard","object-xc-bl-03-relief-wall"],"label_anchor_points":[382.72,346.32],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":382.72,"anchorY":346.32,"labelX":382.72,"labelY":281.32,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xc-bl-03-costume-beard":{"id":"object-xc-bl-03-costume-beard","parentId":"scene-xc-bl-03","imageSrc":"assets/scenes/xc-bl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4ODAiIGN5PSIzMjQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[122,520,527,1240],"zoomedBox":[122,520,527,1240],"label":"古装演员的长髯与头冠","url":null,"text":"### 古装演员的长髯与头冠\n报道把曹操等三国人物写成与游客交谈的互动角色。长髯、头冠和宽袖帮助观众识别这种演艺身份，属于当代角色造型；单凭衣色与冠式不能确认具体剧情，也不能据此考证三国服饰。\n- **它在庙会中的作用**：角色识别与动作表达\n- **记载与补全**：2026春节（报道日期2026-02-23）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[880,324],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":740,"labelY":229,"anchorX":880,"anchorY":324,"labelWidth":240,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xc-bl-03-relief-wall":{"id":"object-xc-bl-03-relief-wall","parentId":"scene-xc-bl-03","imageSrc":"assets/scenes/xc-bl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjgwIiBjeT0iMjM0IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[32,880,437,1600],"zoomedBox":[32,880,437,1600],"label":"演员身后的浮雕背景","url":null,"text":"### 演员身后的浮雕背景\n现场照片记录演员在浮雕背景前与游客互动。背景图像为演出提供故事氛围，观众则停留在前方形成观看面；本包未核实浮雕各人物与场景名称，因此只讨论其可见的层叠造型。\n- **它在庙会中的作用**：固定背景与观看方向\n- **记载与补全**：2026春节（报道日期2026-02-23）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1280,234],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1140,"labelY":139,"anchorX":1280,"anchorY":234,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xc-bl-04":{"id":"scene-xc-bl-04","parentId":"fair-xc-bl","imageSrc":"assets/scenes/xc-bl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzc0LjQwMDAwMDAwMDAwMDAzIiBjeT0iNjY5LjI0IiByeD0iMzc0LjQwMDAwMDAwMDAwMDAzIiByeT0iMjY2Ljc2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[402.48,0,936,748.8000000000001],"zoomedBox":[402.48,0,936,748.8000000000001],"label":"任务卡互动","url":null,"text":"### 任务卡互动\n**任务卡改变的是购买行为还是参与方式？**\n“大乔”派发任务卡有2026现场文字依据，但没有卡面与服装近照。本图将交接卡片作为参与入口，说明游客如何由旁观转为回应角色。卡片上的桥纹、桌边陈设和相遇位置均属概念补全，不表示真实收费、付款或已经核实的闯关题目。\n\n2026现场报道记“大乔”角色向游客派发“过桥费”任务卡；未取得任务卡与该角色服饰近照，均作艺术设计。\n\n资料：2026春节现场报道；卡面与服饰补全\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xc-bl-04-quest-card","object-xc-bl-04-actor-sleeve"],"label_anchor_points":[249.6,542.88],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":249.6,"anchorY":542.88,"labelX":249.6,"labelY":477.88,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xc-bl-04-quest-card":{"id":"object-xc-bl-04-quest-card","parentId":"scene-xc-bl-04","imageSrc":"assets/scenes/xc-bl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSI2MDMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[400,424,805,1144],"zoomedBox":[400,424,805,1144],"label":"递交中的任务卡","url":null,"text":"### 递交中的任务卡\n2026报道记载“大乔”向游客派发“过桥费”任务卡。“过桥费”在这里是互动情境的名称，当前材料没有证明现场按卡收费。卡面以桥纹表达主题，是插画设计，不能作为原卡复制件。\n- **它在庙会中的作用**：将游客引入角色互动\n- **记载与补全**：2026春节现场报道；卡面与服饰补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,603],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":508,"anchorX":784,"anchorY":603,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xc-bl-04-actor-sleeve":{"id":"object-xc-bl-04-actor-sleeve","parentId":"scene-xc-bl-04","imageSrc":"assets/scenes/xc-bl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0ODAiIGN5PSI1NDAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[338,120,743,840],"zoomedBox":[338,120,743,840],"label":"角色的浅蓝宽袖","url":null,"text":"### 角色的浅蓝宽袖\n扮演“大乔”的演员与游客面对面交流有报道依据，实际服饰细节没有近照可核对。插画选择浅蓝宽袖，让伸手发卡动作容易看清；该造型属于当代演艺概念，不能标作当地传统衣制。\n- **它在庙会中的作用**：突出递卡动作\n- **记载与补全**：2026春节现场报道；卡面与服饰补全。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[480,540],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":620,"labelY":445,"anchorX":480,"anchorY":540,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xc-bl-05":{"id":"scene-xc-bl-05","parentId":"fair-xc-bl","imageSrc":"assets/scenes/xc-bl-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI1Ni4zMjAwMDAwMDAwMDAyIiBjeT0iNjgzLjI4IiByeD0iMTc0LjcxOTk5OTk5OTk5OTkiIHJ5PSIyNDMuMzYiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[439.91999999999996,1081.6000000000001,926.64,1431.04],"zoomedBox":[439.91999999999996,1081.6000000000001,926.64,1431.04],"label":"机器人迎宾","url":null,"text":"### 机器人迎宾\n**机器人与马灯为什么能同处一个迎宾画面？**\n现代机器人出现在三国灯会入口，是报道确认的当代互动元素。它用近人的高度与动作吸引儿童，背后的马灯则承担较远距离的节庆识别。两者尺度与观看方式不同，放在一起可解释传统主题如何与新技术共用场地，而不是把机器人写进古代故事。\n\n带蓝色发光部件的机器人站在马形彩灯前，周围可见游客与围栏。\n\n资料：2026春节（报道日期2026-02-23）\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xc-bl-05-welcome-robot","object-xc-bl-05-horse-lantern-night"],"label_anchor_points":[1248,542.88],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1248,"anchorY":542.88,"labelX":1248,"labelY":477.88,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xc-bl-05-welcome-robot":{"id":"object-xc-bl-05-welcome-robot","parentId":"scene-xc-bl-05","imageSrc":"assets/scenes/xc-bl-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2NTYiIGN5PSI0OTUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[292,296,697,1016],"zoomedBox":[292,296,697,1016],"label":"蓝色灯带迎宾机器人","url":null,"text":"### 蓝色灯带迎宾机器人\n现场照片可见带蓝色发光部件的机器人站在马灯前，与游客处于同一观看空间。这里的科技元素有图像依据，但品牌、控制方式和具体功能并未核实，插画也不承担型号识别任务。\n- **它在庙会中的作用**：儿童互动与入口停留\n- **记载与补全**：2026春节（报道日期2026-02-23）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[656,495],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":796,"labelY":400,"anchorX":656,"anchorY":495,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xc-bl-05-horse-lantern-night":{"id":"object-xc-bl-05-horse-lantern-night","parentId":"scene-xc-bl-05","imageSrc":"assets/scenes/xc-bl-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDU2IiBjeT0iMjc5IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[76,696,481,1416],"zoomedBox":[76,696,481,1416],"label":"夜间发亮的马灯","url":null,"text":"### 夜间发亮的马灯\n马形彩灯在夜晚通过内部光线呈现轮廓，与白天的彩绘表面形成不同层次。相关照片支持马灯和机器人同场，但画面不能证明两者每晚始终这样摆放，也不提供灯具亮度或开灯时刻。\n- **它在庙会中的作用**：为近景互动提供主题背景\n- **记载与补全**：2026春节（报道日期2026-02-23）。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1056,279],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":916,"labelY":184,"anchorX":1056,"anchorY":279,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-lh-hsj":{"id":"fair-lh-hsj","parentId":"54749336813040","label":"漯河","imageSrc":"assets/worlds/lh-hsj.webp","box":[634.47,1277.68,766.58,1433.74],"zoomedBox":[634.47,1277.68,766.58,1433.74],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzE5LjQ1LDc2NS45IEwxMzIwLjM0LDc2My41MyBMMTMyMy42MSw3NjMuOCBMMTMyNC4xMyw3NjAuOCBMMTMyNS42Myw3NjAuMjQgTDEzMzQuMjMsNzYwLjM2IEwxMzM1LjA0LDc1OS41NiBMMTM0MC4zOCw3NTkuNzYgTDEzNDEuNTcsNzU3LjE4IEwxMzQ1LjM3LDc1My44OSBMMTM0OS40Miw3NTIuNSBMMTM1MS4wNCw3NDkuOTggTDEzNTIuODEsNzQ5LjY2IEwxMzYxLjk3LDc0OS44NSBMMTM2NS42Niw3NTIuNzEgTDEzNjcuODMsNzUyLjc3IEwxMzY5LjUzLDc1MC45IEwxMzcyLjA5LDc1MC4xIEwxMzcyLjcxLDc0OC45MiBMMTM3NC42Miw3NDkgTDEzNzcuODksNzQ0Ljc3IEwxMzc4LjM0LDc0Mi41NiBMMTM4MC42OCw3NDIuNDcgTDEzODAuOTQsNzM5Ljk4IEwxMzg0LjQ4LDczOS41NiBMMTM4NS40LDczOC4yNiBMMTM4Ny45Niw3MzguNCBMMTM4OC42Miw3MzkuNTUgTDEzOTIuMzYsNzQwLjk0IEwxMzk2Ljc5LDc0NC4yNyBMMTQwMC4wMyw3NDIuNjUgTDE0MDAuMzcsNzQ0LjQzIEwxMzk3LjczLDc0NS4xMiBMMTM5Ny42Miw3NDYuODkgTDEzOTkuOTQsNzQ3LjU2IEwxNDAyLjc0LDc0Ni4wOSBMMTQwMi44OSw3NTEuMjYgTDE0MDYuNjYsNzUyLjIgTDE0MDYuNDQsNzUzLjk2IEwxNDA4LjI1LDc1NC43OSBMMTQxMC40NSw3NTQuMjcgTDE0MTIuMSw3NTUuNDkgTDE0MTAuMzksNzU4LjM4IEwxNDE0LjAyLDc2MS42NSBMMTQxNC45MSw3NTYuODQgTDE0MTcuOTQsNzU1LjQ3IEwxNDIxLjU4LDc1NS45NyBMMTQyNC43NSw3NTQuMTIgTDE0MjguMzQsNzUzLjY4IEwxNDMxLjczLDc1MS4yIEwxNDMwLjgyLDc0Ny40MSBMMTQzMS40OSw3NDQuOSBMMTQzMS4wNiw3NDEuODEgTDE0MzIuNjIsNzM5Ljk3IEwxNDMzLjc0LDczMi43OCBMMTQzMS40LDczMS42NyBMMTQzMC42LDcyOS4wNyBMMTQyOC4xLDcyMy44NCBMMTQyOC4yLDcyMi43NyBMMTQzMC43OSw3MjEuMjkgTDE0MzAuMzUsNzE3LjM3IEwxNDI4LjAyLDcxNC4zMSBMMTQyNy44OCw3MDkuODggTDE0MjcuMjUsNzA4LjI1IEwxNDI3LjA2LDcwNC4wMiBMMTQyNS4zNSw3MDEuMTUgTDE0MjUuMDMsNjk4LjY0IEwxNDE4LjQ3LDcwMS41OCBMMTQxNS4xMyw3MDEuNjcgTDE0MTMuMjYsNzAzLjU4IEwxNDEzLjIsNzA1LjkzIEwxNDEwLjA2LDcwNy42IEwxNDA4LjY5LDcwNi40NCBMMTQwNi44Nyw3MDguMTggTDE0MDYuMzMsNzEwLjg2IEwxNDAxLjc0LDcxMC4zMSBMMTQwMC4wNSw3MTAuNjQgTDE0MDAuMzksNzA2LjA2IEwxMzk5Ljk0LDcwMy4xMSBMMTM5Ni41Myw3MDMuNDMgTDEzOTUuMzYsNjk1Ljg5IEwxMzk2LjA3LDY5My4yNSBMMTM5OC4yNSw2OTAuNzYgTDEzOTcuNTYsNjg2LjczIEwxMzk2LjU5LDY4NC44NiBMMTQwMy4yMyw2ODQuMTcgTDE0MDQuODcsNjg0LjY3IEwxNDA0LjQ4LDY4MC43NyBMMTQwMy4zMSw2NzguODcgTDE0MDMuNTEsNjc1LjQ5IEwxNDA1LjUxLDY3NC41NSBMMTQwNy4zMiw2NzQuODMgTDE0MDguMTksNjczLjI3IEwxNDA1LjYyLDY2Ny40MyBMMTQwMy4wNyw2NjQuNzggTDEzOTkuOCw2NjIuNDcgTDE0MDAuMDYsNjYwLjU5IEwxNDAyLjMxLDY1Ny41NiBMMTQwMS44NCw2NTAuNzMgTDEzOTkuNyw2NDcuOSBMMTM5Ny42Nyw2NDguNDEgTDEzOTcuNjksNjQ2LjM4IEwxMzk0LjU4LDY0Ni4zOSBMMTM5Mi41OCw2NDIuMzEgTDEzOTAuMzUsNjQzLjA5IEwxMzg4Ljk1LDY0Mi4yNyBMMTM4OS4yNyw2MzkuNDMgTDEzODguMjgsNjM2LjM5IEwxMzg1LjI0LDYzNC43NCBMMTM4Mi4yNyw2MzQuNDcgTDEzNzcuOTYsNjM1LjcgTDEzNzMuODksNjM1Ljc3IEwxMzY5LjA4LDYzNy41NiBMMTM2My40Niw2NDEuMjQgTDEzNjIuMzgsNjQzLjg2IEwxMzU5LjU1LDY0My4yNiBMMTM1OS40MSw2NDQuNTEgTDEzNTcuMDUsNjQ0LjQyIEwxMzU2LjYyLDY0My4xNSBMMTM1My43LDY0My45NiBMMTM1MS43Myw2NDMuMjQgTDEzNTEuMjksNjQ1LjI0IEwxMzUzLjksNjUyLjA4IEwxMzUxLjc5LDY1Mi42MiBMMTM1Mi4wNSw2NTcuNzggTDEzNTAuNDYsNjYwLjMxIEwxMzQ1LjQ4LDY1OS43NSBMMTM0Mi42OCw2NTguOTIgTDEzNDIuNzMsNjU3LjQ4IEwxMzQxLjc4LDY1OC41NyBMMTM0MC4wNiw2NTcuOTEgTDEzMzcuMjgsNjU4LjU4IEwxMzM2LjM0LDY1Ny42OCBMMTMzMy45OCw2NTcuOTcgTDEzMzUuNTIsNjU5LjMzIEwxMzMzLDY2MS40MSBMMTMyOC45NSw2NjEuMzcgTDEzMjguNCw2NjMuNTEgTDEzMjYuNDUsNjY0LjE1IEwxMzI1Ljg3LDY2NS45MSBMMTMyNy4yMSw2NjYuNzMgTDEzMjcuNSw2NjguODUgTDEzMzIuODEsNjcwLjYxIEwxMzMzLjE4LDY3NS4xOCBMMTMzMS42Miw2NzguODcgTDEzMzEuNiw2ODMuNDEgTDEzMjkuNjgsNjg0LjQ5IEwxMzI4LjEyLDY4Ny43NSBMMTMyOC42NCw2OTAuMTEgTDEzMzEuMTMsNjkwLjU5IEwxMzMzLjM2LDY5Mi40IEwxMzMyLjc2LDY5NS42NSBMMTMyOS44Nyw2OTYuNTcgTDEzMjkuNTIsNjk5LjA5IEwxMzI2LjE3LDcwMC42MSBMMTMyNC43Myw2OTcuMjEgTDEzMjMuNTgsNjk3LjgzIEwxMzIyLjkyLDcwMS4wNSBMMTMyMi4wMSw3MDEuNjEgTDEzMTguNjgsNzAxLjAyIEwxMzE2LjE4LDY5OS44MyBMMTMxMS4zLDcwMC41NCBMMTMwOS44NSw2OTkuMDEgTDEzMDkuOTYsNzAwLjYzIEwxMzA4LjM0LDcwMi4xNCBMMTMwNS4xNiw3MDAuNTkgTDEzMDIuNDgsNzAyLjQ1IEwxMzAyLjIsNzAwLjA1IEwxMzA0LjQ1LDY5Ny41NCBMMTMwMC4wOCw2OTcuMTIgTDEyOTguNDIsNjk4LjE4IEwxMjk5LjgyLDcwMC4wNCBMMTI5OS4xNCw3MDMuNzYgTDEzMDAuNDgsNzA5LjkxIEwxMzAyLjIsNzEwLjUzIEwxMzA2LjQyLDcxMy42OCBMMTMwOC4xMiw3MTUuNzEgTDEzMDYuODcsNzE3Ljc5IEwxMzAzLjY5LDcxOS4zMiBMMTI5OC45Myw3MjIuOTMgTDEyOTguNDUsNzIzLjk3IEwxMjkzLjgzLDcyNS4zMSBMMTI5NC4yLDcyOC45NyBMMTI5NS44Nyw3MjguOTggTDEyOTQuNzgsNzMyLjgzIEwxMjkyLjU2LDczMy45NSBMMTI5MS4wOCw3NDEuMjcgTDEyOTAuMzMsNzQxLjU4IEwxMjkxLjA3LDc0NS4zMiBMMTI5MC4wMiw3NDUuNTggTDEyODguNzQsNzQzLjgzIEwxMjg2LjAyLDc0My44NCBMMTI4NC41Niw3NDQuOTIgTDEyODAuNzgsNzQ0Ljk0IEwxMjc5Ljk1LDc0NCBMMTI4MS4wMyw3NDguNjcgTDEyNzguNjcsNzUzLjI4IEwxMjc4Ljk5LDc1Ny43NSBMMTI3Ny42OCw3NTkuMTggTDEyNzguMTIsNzYyLjY1IEwxMjgwLjk2LDc2Mi44NyBMMTI4NS4xOCw3NjQuMzQgTDEyODcuMjksNzY2LjAzIEwxMjg5LDc2My4yOSBMMTI5MS40OCw3NjMuMzQgTDEyOTIuOSw3NjYuMiBMMTI5OC4wNSw3NjUuOTUgTDEzMDAuNzQsNzY2LjU4IEwxMzAyLjIxLDc2NC45IEwxMzA2Ljc0LDc2NS4xNyBMMTMxMS4zMyw3NjIuNzIgTDEzMTIuNTQsNzYzLjQ4IEwxMzE0LDc2Mi4xNSBMMTMxOC40Nyw3NjMuMjMgTDEzMTkuNDUsNzY1LjkgWiIgZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==","url":null,"text":"### 河上街庙会灯展\n河上街的庙会不是围绕单一庙宇展开：仿古街区、湖面、现代游乐和食品活动共同组织赶会体验。把夜间灯光与白天道路对照，再靠近一只试吃纸杯，能看见城市景区如何同时容纳表演、休闲和日常消费。","childrenIds":["scene-lh-hsj-02","scene-lh-hsj-04","scene-lh-hsj-05"],"label_anchor_points":[1360.37,709.94],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1360.37,"anchorY":709.94,"labelX":1360.37,"labelY":644.94,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-lh-hsj-02":{"id":"scene-lh-hsj-02","parentId":"fair-lh-hsj","imageSrc":"assets/scenes/lh-hsj-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iOTQ4LjQ4IiBjeT0iMjM0IiByeD0iNTgyLjQwMDAwMDAwMDAwMDEiIHJ5PSIyMzQiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[0,366.08,468,1530.88],"zoomedBox":[0,366.08,468,1530.88],"label":"仿古街与沿水通道","url":null,"text":"### 仿古街与沿水通道\n**为什么仿古街巷旁边还要看见停车场？**\n现代道路与成排车辆让仿古街区回到真实城市环境中：这里是可以由城市交通进入的景区，而非脱离日常生活的古代街市。建筑材料、街巷密度与绿化共同构成边界。该图采用2025年9月环境专题，只解释常设空间，不将秋季人流标为春节赶会。\n\n2025年9月景区外围航拍，灰瓦仿古街区与停车区域、城市道路相邻。非春节现场。\n\n资料：2025年9月21日景区建筑环境；非春节庙会\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-lh-hsj-02-parking-rows"],"label_anchor_points":[1031.68,234],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1031.68,"anchorY":234,"labelX":1031.68,"labelY":169,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-lh-hsj-02-parking-rows":{"id":"object-lh-hsj-02-parking-rows","parentId":"scene-lh-hsj-02","imageSrc":"assets/scenes/lh-hsj-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5MjgiIGN5PSI1NTgiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[356,568,761,1288],"zoomedBox":[356,568,761,1288],"label":"仿古街边的停车区域","url":null,"text":"### 仿古街边的停车区域\n2025年9月景区环境航拍可见灰瓦街区紧邻停车区域与城市道路。车辆排列说明景区与现代出行相接，不代表春节实际停车方案；画中泊位数量与车流密度经过绘画补全，不能用于容量估算。\n- **它在庙会中的作用**：说明景区与城市的关系\n- **记载与补全**：2025年9月21日景区建筑环境；非春节庙会。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[928,558],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":788,"labelY":463,"anchorX":928,"anchorY":558,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-lh-hsj-04":{"id":"scene-lh-hsj-04","parentId":"fair-lh-hsj","imageSrc":"assets/scenes/lh-hsj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTMyMi44OCIgY3k9IjY0MS4xNiIgcng9IjM0MS4xMiIgcnk9IjI5NC44NDAwMDAwMDAwMDAwMyIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[346.32,981.76,936,1664],"zoomedBox":[346.32,981.76,936,1664],"label":"热食试吃","url":null,"text":"### 热食试吃\n**一只纸杯怎样让食品展示变成面对面交流？**\n试吃台把大锅中的食品分成便于递接的小份，摊位人员和游客因盛装、递杯、品尝而形成连续动作。保温容器与桌面陈列解释了摊位的工作方式。这里使用2020新春美食活动证据，食品具体配方与新一届经营情况仍应与旧图分开。\n\n2020新春美食活动中，游客在保温锅旁用纸杯试吃，摊位人员现场分装食品。\n\n资料：2020年1月20日活动；往届美食参考\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-lh-hsj-04-tasting-cup","object-lh-hsj-04-food-warmer"],"label_anchor_points":[1480.96,552.24],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1480.96,"anchorY":552.24,"labelX":1480.96,"labelY":487.24,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-lh-hsj-04-tasting-cup":{"id":"object-lh-hsj-04-tasting-cup","parentId":"scene-lh-hsj-04","imageSrc":"assets/scenes/lh-hsj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0NTkiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[256,40,661,760],"zoomedBox":[256,40,661,760],"label":"试吃纸杯","url":null,"text":"### 试吃纸杯\n2020新春美食活动照片中，游客用纸杯试吃，摊位人员现场分装。纸杯把食品展示变成可参与的近距离体验；现有图片没有明确每杯品名、价格或容量，不能把小份试吃误写成完整菜单。\n- **它在庙会中的作用**：盛装与递接的媒介\n- **记载与补全**：2020年1月20日活动；往届美食参考。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[400,459],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":540,"labelY":364,"anchorX":400,"anchorY":459,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-lh-hsj-04-food-warmer":{"id":"object-lh-hsj-04-food-warmer","parentId":"scene-lh-hsj-04","imageSrc":"assets/scenes/lh-hsj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NTIiIGN5PSI3MzgiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,392,900,1112],"zoomedBox":[495,392,900,1112],"label":"金属保温锅","url":null,"text":"### 金属保温锅\n保温锅是2020食品活动照片里可确认的操作容器，位于游客与摊位人员之间。锅口、蒸汽和勺具共同提示热食分装环节；插画里的食物细粒与锅体数量经过艺术处理，不能用来复原配方。\n- **它在庙会中的作用**：食品保存与现场分装\n- **记载与补全**：2020年1月20日活动；往届美食参考。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[752,738],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":892,"labelY":643,"anchorX":752,"anchorY":738,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-lh-hsj-05":{"id":"scene-lh-hsj-05","parentId":"fair-lh-hsj","imageSrc":"assets/scenes/lh-hsj-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzgyLjcyIiBjeT0iNjE3Ljc2IiByeD0iMzY2LjA4MDAwMDAwMDAwMDA0IiByeT0iMzE4LjI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[299.52,16.64,936,748.8000000000001],"zoomedBox":[299.52,16.64,936,748.8000000000001],"label":"厨师片鸭","url":null,"text":"### 厨师片鸭\n**厨师的工作台为什么也是庙会的观看点？**\n片鸭将制作过程直接呈现在游客面前，刀具、托盘与成品餐盘让人能理解食品从整只到分装的变化。游客观看或举手机记录，工作台因而兼有操作和展示功能。本场景依据2020活动照片，不推断厨师身份、刀法名称或当届未记录的加工步骤。\n\n2020新春美食活动中，白衣高帽厨师在红桌布台面上片鸭，旁边陈列餐盘。\n\n资料：2020年1月20日活动；往届美食参考\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-lh-hsj-05-carving-tray","object-lh-hsj-05-serving-plate"],"label_anchor_points":[316.16,468],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":316.16,"anchorY":468,"labelX":316.16,"labelY":403,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-lh-hsj-05-carving-tray":{"id":"object-lh-hsj-05-carving-tray","parentId":"scene-lh-hsj-05","imageSrc":"assets/scenes/lh-hsj-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4OTYiIGN5PSI2OTMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[490,536,895,1256],"zoomedBox":[490,536,895,1256],"label":"片鸭托盘与整鸭","url":null,"text":"### 片鸭托盘与整鸭\n2020照片记录白衣高帽厨师在台面上片鸭，旁边陈列餐盘。托盘承接操作中的食品，把工作区集中在游客可观看的位置；画中片鸭瞬间是艺术转译，不是关于刀具使用与加工顺序的教程。\n- **它在庙会中的作用**：展示食品处理的可见过程\n- **记载与补全**：2020年1月20日活动；往届美食参考。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[896,693],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":756,"labelY":598,"anchorX":896,"anchorY":693,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-lh-hsj-05-serving-plate":{"id":"object-lh-hsj-05-serving-plate","parentId":"scene-lh-hsj-05","imageSrc":"assets/scenes/lh-hsj-05.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0MzIiIGN5PSI3ODMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,72,900,792],"zoomedBox":[495,72,900,792],"label":"盛放鸭片的餐盘","url":null,"text":"### 盛放鸭片的餐盘\n与片鸭台相邻的餐盘在原现场照片中可见，它使加工中的整鸭与已经盛装的成品形成对照。餐盘的具体配菜、摆盘数量和份量未经过菜单核实，本图仅用来解释现场展示的前后层次。\n- **它在庙会中的作用**：把操作过程连接到成品观看\n- **记载与补全**：2020年1月20日活动；往届美食参考。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[432,783],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":572,"labelY":688,"anchorX":432,"anchorY":783,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-smx-hg":{"id":"fair-smx-hg","parentId":"54749336813040","label":"三门峡","imageSrc":"assets/worlds/smx-hg.webp","box":[386.16,692.82,733.51,1007.56],"zoomedBox":[386.16,692.82,733.51,1007.56],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik05OTYuNTIsMzg4Ljg2IEw5OTQuNiwzODYuNzkgTDk5Mi41MywzODYuMTYgTDk4OC4wNSwzODYuMTggTDk4Ni4wMiwzODguNjYgTDk4Mi43MiwzODYuNjggTDk3OS45OSwzODguOTEgTDk3Ni4wMywzODcuMzcgTDk3NS40NiwzODcuODMgTDk2Ny4zNCwzODkuMjYgTDk2NS43OCwzOTAuNjcgTDk2Ni4xNSwzOTMuNzcgTDk2NS42NywzOTYuNDMgTDk2Mi42NiwzOTguNzQgTDk2MC41NywzOTcuOTcgTDk1Ny45Niw0MDEuMyBMOTU0LjMsNDAxLjA3IEw5NTIuNDUsNDAzLjgzIEw5NDcuMjYsNDAzLjk2IEw5NDQuNSw0MDUuMDIgTDk0Mi42Miw0MDcuNCBMOTM5LjMzLDQwNy40NiBMOTM4LjU2LDQwOS4xMSBMOTQwLjQ4LDQxMS4yNyBMOTQxLjYsNDE1LjkyIEw5MzcuODMsNDE4LjY2IEw5MzQuNzEsNDE4Ljg5IEw5MzAuMjgsNDIzLjc3IEw5MjkuNTQsNDI4LjY0IEw5MjcuMzEsNDI5LjIgTDkyNC42OCw0MzEuNjMgTDkyNC4yMiw0MzYuMTEgTDkyMy4wMyw0MzguMTcgTDkyMC43Miw0NDAuMzIgTDkxOC44OCw0MzkuODggTDkxNy42NSw0MzguMzEgTDkxNS42Nyw0MzguMDYgTDkxMi42Miw0MzguNzcgTDkxMC4yOCw0NDEuMDMgTDkwOS4wMiw0NDEuMjYgTDkwNy44OSw0NDMuMzUgTDkwMy42NSw0NDQuMjQgTDkwMC43Myw0NDQuMDQgTDg5OC4wOSw0NDEuODQgTDg5NS45Nyw0NDEuNDkgTDg5NC4zOSw0NDMuNSBMODkxLjQ2LDQ0My45MiBMODg3LjY4LDQ0Ni43NyBMODgwLjE1LDQ0NC45MSBMODc5LjIyLDQ0My40OCBMODc3LjMyLDQ0My4wNSBMODczLjk5LDQ0NS42NyBMODcwLjg4LDQ0Ni42OSBMODY4LjYzLDQ0OC40IEw4NjYuMzYsNDQ4IEw4NjMuNzEsNDQ2LjA4IEw4NjEuMjksNDQ1LjcxIEw4NjAuMTUsNDQ2Ljk2IEw4NTguNCw0NTEuNiBMODU1LjMxLDQ1Mi41NCBMODUyLjY3LDQ0OS45MiBMODQ2LjcxLDQ0OS4yNCBMODQ0LjksNDQ3LjE1IEw4NDMuNSw0NDYuODQgTDg0MS4yLDQ0OC40NSBMODM3LjY3LDQ1NC42OSBMODM2LjY3LDQ1OC44MyBMODM1LjUxLDQ2MCBMODI1Ljc0LDQ2MS4xMyBMODE5Ljg5LDQ2My41NSBMODE2LjcyLDQ2NS41IEw4MDguNzgsNDcxLjM2IEw4MDYuNDYsNDcxLjM3IEw4MDQuMjcsNDY4LjE2IEw4MDEuMDksNDY1LjkxIEw3OTguMTMsNDY1Ljk2IEw3OTcuMzcsNDY3LjU1IEw3OTcuNjksNDY5Ljc1IEw3OTUuMTEsNDc5Ljg5IEw3OTMuMTgsNDgzLjc5IEw3OTEuMzQsNDg1LjUgTDc4Ny4xNyw0ODYuNSBMNzg1LjYsNDg3LjUgTDc4Mi4wOCw0OTEuNTMgTDc4MC4xNiw0OTEuOTEgTDc3OC42LDQ5MC4zNyBMNzc3LjEzLDQ4Ny4wOSBMNzc0LjA1LDQ4NC4yMiBMNzY4LjI5LDQ4My4zNyBMNzY2LDQ4My42NSBMNzY0LjUsNDg2LjYxIEw3NjIuOTEsNDg3Ljk4IEw3NTkuMTMsNDkzLjczIEw3NTcuOTUsNDk0LjYgTDc0OCw0OTMuNjggTDczOS45OSw0OTMuODUgTDczNi44OSw0OTQuNzkgTDcyOC4wMSw0OTkuMjMgTDcyNS4zNCw0OTkuMjUgTDcxNi45Miw0OTMuMDYgTDcxNC41NCw0OTMuMTMgTDcxMi42MSw0OTQuMjYgTDcwNy4zNiw0OTUuOTkgTDcwNC45NCw0OTguMTIgTDcwMS43MSw0OTcuOTQgTDY5Ni4zNCw0OTUuMzkgTDY5NC4wOCw1MDMuMDMgTDY5NS43Nyw1MDMuODggTDcwMC4xNCw1MDMuOTMgTDcwMS4xMSw1MDUuMTIgTDY5NS4xMyw1MDguMTMgTDY5My4xMSw1MTIuMTkgTDY5Mi44Miw1MTQuMTkgTDY5NC4zOSw1MTkuNzIgTDY5Ni4xNiw1MjEuMjYgTDY5Ni40NCw1MjMuMDYgTDY5OS4wMiw1MjYuMTYgTDY5OS4zNyw1MjguNjMgTDcwMC42NCw1MzAuMTggTDcwMC44MSw1MzMuMjcgTDcwMi4wNyw1MzQuMjcgTDcwMi4wNSw1MzUuOTcgTDcwNi4xLDUzOC43MiBMNzExLjIxLDU0MC4zMiBMNzEyLjk2LDUzOC42NSBMNzE0LjU1LDUzOC43OSBMNzE0LjE0LDU0Mi40IEw3MTcuMSw1NTEgTDcxOS42LDU1My4yOSBMNzE5LjcxLDU1NS43NyBMNzE4Ljc0LDU1OC45OCBMNzE0LjE2LDU1OC4zMyBMNzEyLjY2LDU2Mi4yIEw3MDkuNTQsNTY1LjQ4IEw3MDYuMTYsNTY1LjczIEw3MDUuMjQsNTY4Ljk3IEw3MDYuMzksNTY5LjY5IEw3MDguMjYsNTczLjk4IEw3MDcuNzMsNTc2LjM4IEw3MTcuMTYsNTc4Ljg5IEw3MjAuNTcsNTgyLjIzIEw3MjMuNjMsNTgxLjc2IEw3MjguNzcsNTgzLjMxIEw3MjkuODUsNTg3LjcyIEw3MzUuODcsNTg4LjQzIEw3MzUuNjEsNTkxLjA2IEw3NDIuMDEsNTkxLjM0IEw3NDQuMzUsNTkzLjA3IEw3NDUuODIsNTk1LjA5IEw3NDUuMjgsNTk3LjM2IEw3NDIuNDgsNjAwLjQzIEw3NDMuMjksNjAxLjQgTDc0MS4zNCw2MDMuNDUgTDc0MC41Niw2MDUuNzkgTDczNi4zOCw2MDguNTIgTDczNyw2MTYuODkgTDczNS43NSw2MTcuNTkgTDczNS45OCw2MjIuODMgTDczNS40LDYyNi4xNCBMNzQwLjE5LDYyNi4wOCBMNzQxLjU5LDYyMy41IEw3NDMuODUsNjI1Ljc5IEw3NDMuMjEsNjI3LjI3IEw3NDQuNDEsNjI3Ljg4IEw3NDUuMjUsNjMwLjQ1IEw3NDcuMjUsNjMzLjMzIEw3NDcuNjcsNjM4LjQ2IEw3NTEuMjgsNjM5LjE5IEw3NTIuMTUsNjQzLjY5IEw3NTEuMDIsNjQ1LjM1IEw3NDcuNDMsNjQ1LjkzIEw3NDIuODIsNjQ4LjY4IEw3NDIuNzgsNjUyLjQ5IEw3NDAuMTQsNjUyLjQzIEw3MzYuNDUsNjU0LjEzIEw3MzUuNTIsNjU3LjA0IEw3MzguMDMsNjYwLjc4IEw3NDAuMzYsNjYxLjY1IEw3NDAuMiw2NjUuMDMgTDc0My4xMyw2NjYuNTcgTDc0Ny4yNCw2NjYuNTEgTDc1MC43MSw2NjUuMTEgTDc1My45MSw2NjguMTQgTDc1OS4xMiw2NjkuMzIgTDc2MS4wMyw2NzIuNjYgTDc2MS42NCw2NzUuMTkgTDc2NC41Myw2NzcuMjEgTDc2Ni44Niw2NzcuMDYgTDc2OS4xLDY3OC4wNyBMNzcyLjIyLDY3Ny44MyBMNzcyLjYsNjgwLjkzIEw3NzUuNDEsNjgyLjQ5IEw3NzcsNjg2LjYzIEw3NzguNTcsNjg3LjU5IEw3NzguNzUsNjkxLjE1IEw3ODEuNjQsNjk2LjcxIEw3NzkuOTUsNzAxLjI0IEw3ODAuMzYsNzAzLjIyIEw3ODEuODMsNzA0LjY2IEw3ODMuNDUsNzA3Ljk2IEw3ODYuNDUsNzA5LjE5IEw3OTAuNDIsNzE0LjQ0IEw3OTQuMzYsNzE0LjgyIEw3OTUuMyw3MTUuOCBMODAyLjEsNzE3Ljc1IEw4MDQuMDksNzIwLjI1IEw4MDYuOTQsNzIwLjIyIEw4MDkuNDEsNzIzLjIzIEw4MTMuOTMsNzI3LjE0IEw4MTUuMTIsNzMxLjI1IEw4MTcuOTcsNzMzLjUxIEw4MjQuMjQsNzMyLjM4IEw4MjYuNDMsNzI5LjkzIEw4MzAuMDIsNzMwLjUyIEw4MzIuNjEsNzI4LjIyIEw4MzQuODEsNzI3LjEyIEw4MzYuNDQsNzIyLjYxIEw4MzguNDcsNzE5LjQ5IEw4MzguNiw3MTYuMDggTDg0MC4zNCw3MTQuNzcgTDg0MS44OCw3MTEuOTkgTDg0MC44MSw3MDkuMDEgTDgzOS42NSw3MDguNCBMODM4LjMxLDcwNC40IEw4MzkuODYsNzA0LjQ0IEw4NDEuNzgsNzAzLjA3IEw4NDUuMzQsNzAzLjY3IEw4NDcuMzgsNzAyLjU5IEw4NDguMyw2OTguNjggTDg0OS45OSw2OTYuNjEgTDg1MC4zNyw2OTIuMzEgTDg0OS44NSw2ODkuMyBMODUwLjE2LDY4Ni41MyBMODUyLjUsNjgxLjAzIEw4NTUuMTIsNjc3LjQ5IEw4NTcuNDYsNjc2LjY1IEw4NTguNSw2NzcuNjQgTDg2Mi4zNSw2NzcuNjcgTDg2Mi40OSw2NzEuNzUgTDg1OC40OSw2NjcuMyBMODU2Ljk0LDY2NC4wNiBMODUzLjk5LDY2Mi4xNyBMODU0LjU3LDY2MC40NCBMODUxLjU5LDY1OC4wMiBMODUyLjAzLDY1Ni4xNiBMODUzLjMxLDY1Ny44NyBMODU3LjQsNjU1LjQzIEw4NTcuNDQsNjUzLjg3IEw4NTUuOTIsNjUxLjI5IEw4NTYuNTYsNjQ4LjY0IEw4NTguNDMsNjQ2Ljc0IEw4NjIuMDgsNjQ3LjQ5IEw4NjUuMzYsNjQ2LjIgTDg2Ny44Nyw2NDguMjEgTDg3MC4zNiw2NDcuODYgTDg3MC44NCw2NDQuODggTDg3NC40LDYzOS45NiBMODc4LjAzLDYzNy42MiBMODgwLjI3LDYzNS4wOSBMODc5LjgyLDYzMi40MyBMODgwLjExLDYyOC4xNCBMODc3LjY5LDYyMi45OCBMODc3LjY1LDYxOC44NyBMODc5Ljk1LDYxMi40MiBMODgyLjM4LDYxMC42MSBMODgwLjc5LDYwNi45MSBMODc4LjE1LDYwNi44NSBMODc2LjI3LDYwNS4zNiBMODcyLjI1LDYwNS4xNSBMODcwLjkzLDYwMy4yIEw4NzAuNzIsNTk5Ljc5IEw4NjkuMTUsNTk4LjY2IEw4NjYuMzIsNjAwLjE2IEw4NjUuMzcsNTk3Ljk0IEw4NjMuNjksNTk4LjM1IEw4NjAuOTIsNTk2Ljg2IEw4NjAuMDYsNTk0LjY0IEw4NTcuNCw1OTEuMDkgTDg1My42Nyw1OTAuNDggTDg1Mi4yOSw1ODYuODEgTDg0Ni4zNCw1ODQuMDYgTDg0My4xNyw1ODAuOTggTDg0NC42LDU3OS42NSBMODQ3LjMsNTc5LjM3IEw4NDguNiw1NzQuODIgTDg0Ny42LDU3My40MyBMODQ3LjQ5LDU2OC4zNiBMODQ5LjMxLDU2My4xMyBMODQ4LjE2LDU1OS42OSBMODQ1LjA5LDU1NS42MyBMODQ0LjYyLDU1My4zOCBMODQzLjM0LDU1Mi4wMiBMODM5LjgzLDU1MS41MSBMODM5LjMxLDU1MC42NyBMODM5LjgzLDU0Ni45NiBMODQxLjEsNTQzLjQ2IEw4NDIuNzcsNTQyLjA3IEw4NDUuNTIsNTQyIEw4NDguODIsNTQxLjAyIEw4NDkuMjUsNTM2LjggTDg1MC40Nyw1MzYuNjEgTDg1My40Myw1MzQuMSBMODUzLjM5LDUzMi4zNyBMODU0LjcxLDUyNy43MiBMODU2LjA4LDUyNy4zMiBMODU5LjMyLDUyOC42NiBMODY0LjQ2LDUzMC4wOCBMODY0LjM0LDUyNC44MyBMODY3LjcyLDUyMS40NSBMODY5LjczLDUyMC42OSBMODcwLjk4LDUyNC4wNCBMODc0LjM4LDUyNC42IEw4NzguMDksNTI0LjMyIEw4ODAuNzcsNTIyLjY0IEw4ODMuMDIsNTI0LjI0IEw4ODUuNzUsNTI0LjI4IEw4ODcuNTgsNTIyLjI2IEw4OTIuMDEsNTIwLjI2IEw4OTguMjksNTE2Ljg0IEw4OTkuMzksNTE1LjMzIEw5MDQuNSw1MTIuMzkgTDkwNS40LDUxMC41MSBMOTA3LjkzLDUwNy45NiBMOTEyLjEsNTA3LjIzIEw5MTQuNjYsNTA4LjM1IEw5MTUuODEsNTA3Ljk5IEw5MTkuMDcsNTA0Ljg2IEw5MjEuMzgsNTAzLjU2IEw5MjMuMjksNTA1LjQ3IEw5MjUuMTcsNTAzLjM3IEw5MjcuNzQsNTA0LjA2IEw5MjkuODEsNTA1LjU0IEw5MzkuNDEsNTA4Ljk4IEw5NDEuOTYsNTEwLjYzIEw5NDMuNjYsNTEwLjA5IEw5NDEuNTUsNTA3LjM4IEw5MzkuNzgsNTAxLjggTDk0Mi42MSw1MDEuODggTDk0NC4zNSw1MDEgTDk0NS41OCw0OTguOTIgTDk1Mi41OSw0OTUuNDQgTDk1Ni4xMSw0OTYuMDggTDk1Ny4xMiw0OTMuNDIgTDk1OS44MSw0OTMuNjEgTDk2My4zMyw0ODkuNiBMOTY2LDQ4Ny44MiBMOTY3LjksNDg3LjY5IEw5NjguMzUsNDg1LjAyIEw5NjkuNjYsNDg0LjM0IEw5NzUuOTIsNDg0LjgzIEw5ODAuNjEsNDkxLjIxIEw5ODMuNzcsNDkxLjAxIEw5ODguMTQsNDk1LjQ0IEw5OTAuNTUsNDkwLjg2IEw5OTAuODUsNDg4Ljc4IEw5OTIuODEsNDg2LjU0IEw5OTUuNDEsNDg1LjczIEw5OTYuMTUsNDg0LjAxIEw5OTcuNzksNDgzLjI2IEw5OTYuNDMsNDgwLjIyIEw5OTguNzEsNDc2IEw5OTguMzIsNDczLjk1IEwxMDAwLjI2LDQ3NC4yMiBMMTAwMS4wOSw0NjguOTQgTDEwMDQuMzQsNDY3LjMzIEwxMDA0LjIsNDY1Ljc4IEwxMDAwLjczLDQ2NC40NyBMMTAwMS42NCw0NjIuNjEgTDEwMDEuMTMsNDYxLjMzIEwxMDAzLjYyLDQ2MS4zNCBMMTAwNS4xOCw0NTguNjMgTDEwMDQuODIsNDU2Ljk2IEwxMDA3LjQxLDQ1NS4xOSBMMTAwNi45Niw0NTQuOTEgTDEwMDUuNTIsNDU1LjI0IEwxMDA1LjAxLDQ1My4zOSBMMTAwNy4yMyw0NTQuMDggTDEwMDcuNTYsNDU0LjAxIEwxMDA3LjIxLDQ1MS44MyBMMTAwNC42MSw0NTAuODEgTDEwMDMuOTUsNDQ5LjI5IEwxMDA1LjQ0LDQ0Ny41OCBMMTAwNC4yNiw0NDYuMDcgTDk5OC45LDQ0MS41NiBMOTk4LjMxLDQzOS42OCBMOTk5Ljc5LDQzNy45NSBMOTk4LjA0LDQzNy4wOCBMOTkzLjYyLDQzOC41NCBMOTkxLjkyLDQzOC4yOCBMOTkyLjA5LDQzNS43NyBMOTg2LjkxLDQzMS4xMSBMOTgyLjQ3LDQzMC42NiBMOTc5LjU2LDQyOC43NyBMOTc5LjY5LDQyNC43NSBMOTgwLjg0LDQyMi44NSBMOTgzLjg3LDQyMC43NSBMOTg2Ljc5LDQxOS43NSBMOTg5LjEsNDE2LjY1IEw5OTIuMjgsNDE2LjYzIEw5OTguMTMsNDEzLjcyIEw5OTguMzgsNDExLjQ4IEw5OTQuMjIsNDEwLjMgTDk5My41Niw0MDcuOTEgTDk5NS4zNiw0MDcuMDcgTDk5Ny45Niw0MDcuMDQgTDk5Ny40Miw0MDUuNDIgTDEwMDAuMDEsNDAzLjY1IEw5OTUuMzQsNDAxLjU3IEw5OTAuMjgsMzk3Ljg1IEw5OTAuMTUsMzk2LjQ5IEw5OTMuNzQsMzkzLjc2IEw5OTMuNzYsMzkwLjUyIEw5OTYuNTIsMzg4Ljg2IFogTTEwMDcuNTYsNDU0LjAxIEwxMDA3LjIzLDQ1NC4wOCBMMTAwNi45Niw0NTQuOTEgTDEwMDcuNDEsNDU1LjE5IEwxMDA3LjU2LDQ1NC4wMSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 函谷关新春大庙会\n函谷关的双关楼既是进入景区的建筑标志，也是昼夜演艺的背景。沿着关墙、夹道游路、高桩舞狮与皮影操作台逐层看进去，可以分辨历史场所、当代主题节目和节期市集怎样共同构成一场新春庙会。","childrenIds":["scene-smx-hg-01","scene-smx-hg-02","scene-smx-hg-03","scene-smx-hg-04"],"label_anchor_points":[834.44,549.47],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":834.44,"anchorY":549.47,"labelX":834.44,"labelY":484.47,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-smx-hg-01":{"id":"scene-smx-hg-01","parentId":"fair-smx-hg","imageSrc":"assets/scenes/smx-hg-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTAzMS42OCIgY3k9IjI2Ni43NiIgcng9IjMxNi4xNjAwMDAwMDAwMDAxIiByeT0iMjI5LjMyMDAwMDAwMDAwMDAyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[37.44,715.52,496.08000000000004,1347.8400000000001],"zoomedBox":[37.44,715.52,496.08000000000004,1347.8400000000001],"label":"双关楼前的会场","url":null,"text":"### 双关楼前的会场\n**双关楼为什么比通用古街更能辨认函谷关？**\n成对楼阁与横向关墙构成强烈的建筑轮廓，门洞前汇集的人群又显示其作为到达点和观看面的作用。插画保留这一相对关系，便于把庙会放回具体地点。依据来自2024现场总结，不能据新绘画面推定2026的舞台配置、游客总量或演出时刻。\n\n双关楼、灰色关墙、红柱灰瓦、广场人群；为2024现场资料。\n\n资料：2024现场总结配图；拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-smx-hg-01-twin-towers"],"label_anchor_points":[1031.68,271.44],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1031.68,"anchorY":271.44,"labelX":1031.68,"labelY":206.44,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-smx-hg-01-twin-towers":{"id":"object-smx-hg-01-twin-towers","parentId":"scene-smx-hg-01","imageSrc":"assets/scenes/smx-hg-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MzYiIGN5PSIyNzAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[68,376,473,1096],"zoomedBox":[68,376,473,1096],"label":"函谷关双关楼","url":null,"text":"### 函谷关双关楼\n2024现场总结图片记录双关楼与灰色关墙前的游客。两座楼阁提供易于远处辨认的轮廓，是庙会场景的重要地点依据；画中的人群与光线属于重绘，建筑尺度不能用像素反推。\n- **它在庙会中的作用**：地点识别与广场背景\n- **记载与补全**：2024现场总结配图；拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[736,270],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":876,"labelY":175,"anchorX":736,"anchorY":270,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-smx-hg-02":{"id":"scene-smx-hg-02","parentId":"fair-smx-hg","imageSrc":"assets/scenes/smx-hg-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTgzLjA0IiBjeT0iMzA0LjIiIHJ4PSIxODMuMDQiIHJ5PSIyMzguNjgiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[65.52000000000001,0,542.88,366.08],"zoomedBox":[65.52000000000001,0,542.88,366.08],"label":"红饰夹道游路","url":null,"text":"### 红饰夹道游路\n**节庆挂饰怎样把普通游路变成赶会通道？**\n原有绿篱和树木界定道路边缘，悬在路灯上的红色装饰又给行进方向加入重复节奏。观众沿路前进，局部停留与远处人流形成不同密度。此图研究2024布置的可见关系，不把近景花纹、挂饰间距或画中游路终点当成实测结果。\n\n绿篱与树木夹道，黑色路灯悬挂红色节庆装饰，现代人流沿道路行进。\n\n资料：2024现场总结配图；拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-smx-hg-02-road-decor"],"label_anchor_points":[316.16,336.96],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":316.16,"anchorY":336.96,"labelX":316.16,"labelY":271.96,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-smx-hg-02-road-decor":{"id":"object-smx-hg-02-road-decor","parentId":"scene-smx-hg-02","imageSrc":"assets/scenes/smx-hg-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjY0IiBjeT0iMTk4IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[0,880,405,1600],"zoomedBox":[0,880,405,1600],"label":"路灯上的红色挂饰","url":null,"text":"### 路灯上的红色挂饰\n2024现场图片可见树木夹道，路灯悬挂红色节庆装饰。它们依附既有照明杆形成临时节日层；本图近景花纹与数量有艺术补全，资料不能确认同样的挂饰在2026仍以相同间距设置。\n- **它在庙会中的作用**：强化行进方向与节期气氛\n- **记载与补全**：2024现场总结配图；拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1264,198],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1124,"labelY":103,"anchorX":1264,"anchorY":198,"labelWidth":192,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-smx-hg-03":{"id":"scene-smx-hg-03","parentId":"fair-smx-hg","imageSrc":"assets/scenes/smx-hg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNTMyLjQ4IiBjeT0iNDExLjg0IiByeD0iMTk5LjY3OTk5OTk5OTk5OTk4IiByeT0iMjMzLjk5OTk5OTk5OTk5OTk0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[177.84,332.8,645.8399999999999,732.16],"zoomedBox":[177.84,332.8,645.8399999999999,732.16],"label":"高桩上的红狮","url":null,"text":"### 高桩上的红狮\n**高桩把舞狮的观看关系改变在哪里？**\n红狮被抬升到观众视线之上，桩顶与地面围观区形成明显高度差，开敞广场也让周边游客可以向中心观看。该场景来自2026预告配图，拍摄年未披露。可以解释器具与表演空间的关系，但不能从一个腾跃姿势推演整套动作或认定当届已演。\n\n高桩舞狮、红狮、金色立像、广场柱体与围观人群。\n\n资料：2026预告实景配图；拍摄年份未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-smx-hg-03-red-lion","object-smx-hg-03-lion-poles"],"label_anchor_points":[549.12,252.72000000000003],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":549.12,"anchorY":252.72000000000003,"labelX":549.12,"labelY":187.72000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-smx-hg-03-red-lion":{"id":"object-smx-hg-03-red-lion","parentId":"scene-smx-hg-03","imageSrc":"assets/scenes/smx-hg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MjAiIGN5PSIzNDIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[140,360,545,1080],"zoomedBox":[140,360,545,1080],"label":"高桩上的红狮道具","url":null,"text":"### 高桩上的红狮道具\n预告配图显示红色狮具在高桩上表演，周围有观众与广场立像。狮具的头部、长披覆和演员动作共同形成动物形象；单张照片不能证明完整舞步、队伍身份及该场的实际演出日期。\n- **它在庙会中的作用**：高处运动的主要视觉对象\n- **记载与补全**：2026预告实景配图；拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[720,342],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":860,"labelY":247,"anchorX":720,"anchorY":342,"labelWidth":192,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-smx-hg-03-lion-poles":{"id":"object-smx-hg-03-lion-poles","parentId":"scene-smx-hg-03","imageSrc":"assets/scenes/smx-hg-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NjgiIGN5PSI2NTciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[454,408,859,1128],"zoomedBox":[454,408,859,1128],"label":"不同高度的舞狮桩","url":null,"text":"### 不同高度的舞狮桩\n高桩器具在来源图中可辨，它把表演区域从平地延伸到空中，使观众关注落脚点与身体平衡。这里仅呈现可见结构，桩间距离、承载与动作技术均未获资料，不作为搭建或练习参考。\n- **它在庙会中的作用**：表演支撑与高度层次\n- **记载与补全**：2026预告实景配图；拍摄年份未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[768,657],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":908,"labelY":562,"anchorX":768,"anchorY":657,"labelWidth":192,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-smx-hg-04":{"id":"scene-smx-hg-04","parentId":"fair-smx-hg","imageSrc":"assets/scenes/smx-hg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTM4OS40NCIgY3k9IjY5Mi42NCIgcng9IjI3NC41NTk5OTk5OTk5OTk5NSIgcnk9IjI0My4zNiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[449.28,1114.88,936,1664],"zoomedBox":[449.28,1114.88,936,1664],"label":"羊肉汤与烧饼夹肉","url":null,"text":"### 羊肉汤与烧饼夹肉\n**一碗汤和一只烧饼如何补足游览中的停留？**\n2026预告用羊肉汤、烧饼夹肉举例介绍烟火市集，食品让赶会体验从远看演出转为近距离选择与递接。插画以汤锅、食物和顾客构成工作面，摊棚及同框经营方式均是补全。没有摊位近照，不能称这就是实际商户菜单或复原真实摊区位置。\n\n预告烟火市集举羊肉汤、烧饼夹肉为例。\n\n资料：2026活动预告文字；缺现场摊位近照\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-smx-hg-04-mutton-soup","object-smx-hg-04-meat-bun"],"label_anchor_points":[1297.92,645.8399999999999],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1297.92,"anchorY":645.8399999999999,"labelX":1297.92,"labelY":580.8399999999999,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-smx-hg-04-mutton-soup":{"id":"object-smx-hg-04-mutton-soup","parentId":"scene-smx-hg-04","imageSrc":"assets/scenes/smx-hg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2ODgiIGN5PSI1NjciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[364,328,769,1048],"zoomedBox":[364,328,769,1048],"label":"羊肉汤碗与汤锅","url":null,"text":"### 羊肉汤碗与汤锅\n羊肉汤作为烟火市集品类出现在2026活动预告中。图中以大锅和小碗表现盛装关系，让人理解热食摊的交流尺度；容器样式、配料外观与制作动作没有对应近照，不能作为食谱与商户实录。\n- **它在庙会中的作用**：食品分装与短暂停留\n- **记载与补全**：2026活动预告文字；缺现场摊位近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[688,567],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":828,"labelY":472,"anchorX":688,"anchorY":567,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-smx-hg-04-meat-bun":{"id":"object-smx-hg-04-meat-bun","parentId":"scene-smx-hg-04","imageSrc":"assets/scenes/smx-hg-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMzEyIiBjeT0iNTU4IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[356,880,761,1600],"zoomedBox":[356,880,761,1600],"label":"烧饼夹肉","url":null,"text":"### 烧饼夹肉\n烧饼夹肉同样被2026预告列入市集介绍，支持把它作为函谷关该届计划中的食品线索。插画将剖开的饼与肉馅放大展示，但未取得实际出品照片，具体形态和与汤品同摊关系均未核实。\n- **它在庙会中的作用**：把食品品类转为可观察物件\n- **记载与补全**：2026活动预告文字；缺现场摊位近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1312,558],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1172,"labelY":463,"anchorX":1312,"anchorY":558,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-ny-sd":{"id":"fair-ny-sd","parentId":"54749336813040","label":"南阳","imageSrc":"assets/worlds/ny-sd.webp","box":[676.65,810.01,1024.04,1343.19],"zoomedBox":[676.65,810.01,1024.04,1343.19],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik04MTUuMTIsNzMxLjI1IEw4MTMuOTMsNzM0LjA3IEw4MTMuOTEsNzM3LjQ3IEw4MTYuOTEsNzQwLjI1IEw4MTguMzksNzQ2LjUzIEw4MTguMzksNzUxLjg5IEw4MTcuMTcsNzU2LjEyIEw4MTIuNjIsNzU5LjUgTDgxNS4zOSw3NjUuOTkgTDgxNS4zMiw3NjcuOTIgTDgxNi41Miw3NzEuMDUgTDgxOC4xNiw3NzMuMjUgTDgxOC4zNiw3NzUuNDggTDgxNy41Nyw3NzcuODkgTDgxOC44OCw3ODEuNCBMODE4LjE0LDc4My40NSBMODEzLjMxLDc4NC45IEw4MTMuMTQsNzg3LjI5IEw4MTQuNzQsNzg5LjUgTDgxMi45NSw3OTAuMDEgTDgxMi44NCw3OTIuMzggTDgxMS42LDc5NS43NSBMODEwLjAxLDc5Ny4xMiBMODEyLjY4LDgwMC42IEw4MTAuNDEsODAwLjQ1IEw4MTIuNzIsODA0LjE4IEw4MTUuNTYsODA1LjUxIEw4MTYuMzksODA3LjU4IEw4MTguOTYsODA5LjcxIEw4MTkuMzUsODEwLjkgTDgyMi45Miw4MTIuODcgTDgyNC4xMyw4MTYuNzMgTDgyMC4yNSw4MjEuODYgTDgyMS44MSw4MjIuNSBMODI0Ljg5LDgxOC45MSBMODI3LjA0LDgxNy40MSBMODI5Ljk2LDgxNy4wOSBMODMxLjc5LDgxOC4yNSBMODMzLjMzLDgyMS4wOCBMODM3LjM5LDgyMy4zMiBMODM4LjEsODI3LjEzIEw4MzkuNDYsODI3LjkgTDg0MC43OSw4MzAuMjkgTDg0My44NCw4MzAuMTkgTDg0Ny4wNCw4MzIuMTkgTDg0Ni41Nyw4MzUuNDMgTDg0OS4xOSw4MzguNyBMODQ5LjU1LDg0Mi4xMyBMODQ0Ljg0LDg0My44NiBMODQxLjYzLDg0Ni4zMSBMODQxLjE2LDg0OC43NiBMODQyLjA0LDg0OS4zNyBMODQ3LjEsODQ4LjQxIEw4NDguODksODQ5LjYxIEw4NTQuOTgsODQ4LjcxIEw4NTguNTEsODQ5Ljk0IEw4NTguNTMsODUzLjg1IEw4NjEuOTcsODU2LjkxIEw4NjMuOTgsODYxLjEzIEw4NjQuNzcsODY0Ljc2IEw4NjMuNjYsODY2LjYgTDg2MC45LDg2OC40IEw4NTkuNDcsODcxLjAzIEw4NTguOTYsODc0LjExIEw4NjAuMyw4NzcuODIgTDg1OS42Miw4ODMuNjYgTDg2MS4yNCw4ODQuNjggTDg2NC4wMSw4ODEuNCBMODY1Ljk5LDg4MC4wNyBMODY3Ljk4LDg4Mi43NCBMODY3LjgyLDg4OC45OCBMODY4LjUxLDg5MC4yNiBMODcyLjgxLDg5Mi4yMiBMODc1LjYyLDg5NC40IEw4ODAuNzcsODk1LjM0IEw4ODQuOCw4OTcuMiBMODg1Ljc1LDg5OC45IEw4ODcuODMsOTA0Ljk3IEw4ODkuNjIsOTA3LjcgTDg4OS4zMyw5MDkuMjcgTDg5MC40OCw5MTAuNjkgTDg5MS4xMSw5MTMuNDUgTDg5Mi44OCw5MTQuODQgTDg5NS42NCw5MTUuMDIgTDg5Ny40Niw5MTMuOTUgTDg5Ny42NCw5MTIuNDcgTDkwMC40MSw5MTEuODMgTDkwMC4wNiw5MTAuMTYgTDkwMS4zOSw5MTAuMzQgTDkwMi44LDkxMy4xNiBMOTAxLjcsOTE0LjI1IEw5MDEuNTUsOTE3LjY1IEw4OTkuMjksOTIwLjMgTDg5Ni45Miw5MTguMDkgTDg5Ni40Miw5MjAuMzQgTDg5NC40OSw5MTguNDcgTDg5My4zNSw5MTkgTDg5Ni4zLDkyMS4yNCBMOTAwLjczLDkyMS4zNCBMOTAyLjI0LDkyMi4zOCBMOTAxLjM0LDkyNC43NSBMOTAzLjYsOTI3LjYyIEw5MDkuODQsOTMyLjMxIEw5MTIuMzksOTM2LjgxIEw5MTIuMDYsOTM4LjM3IEw5MTMuMDksOTQyLjY3IEw5MTguNTEsOTQ4Ljg0IEw5MjIuMDEsOTUwLjU3IEw5MjYuOTEsOTQ2Ljc3IEw5MjkuNjcsOTQyLjgzIEw5MzIuNjIsOTQxLjEyIEw5MzMuOSw5NDEuMjEgTDkzMy45LDk0NS4xNiBMOTM0Ljk1LDk0Ny42OSBMOTM5Ljk3LDk0NS43IEw5NDMuNTcsOTQ3Ljc0IEw5NDcuNjEsOTQ3LjYgTDk1MC41Niw5NTAuNDUgTDk1Mi42NCw5NTEuNTMgTDk1My45Nyw5NTQuMTcgTDk1Ny42Myw5NTYuOTggTDk2MS4wNiw5NTguNzcgTDk2NS42LDk2My40NSBMOTY4Ljk3LDk2My4xNCBMOTY5LjE5LDk2NC42OCBMOTc0Ljg1LDk2NS4yNiBMOTc1LjY5LDk2OC42OSBMOTc3LjEsOTcwLjM0IEw5ODAuODEsOTcxLjA1IEw5ODUuNiw5NzAuMDIgTDk4OC44LDk2OC4zMiBMOTkxLjg4LDk2Ny45MiBMOTkzLjMzLDk2OC45OCBMOTk1LjI5LDk3Mi45MyBMOTk3LjI4LDk3OC4zMSBMMTAwMC4xOSw5NzkuMTggTDk5OS43Myw5ODEuNDIgTDEwMDEuNzQsOTgwLjk3IEwxMDAyLjg3LDk4Mi44OCBMMTAwNC4yNCw5ODMuMDQgTDEwMDcuNjYsOTgwLjI5IEwxMDA4LjcxLDk3OC41NiBMMTAxMC41Nyw5NzcuNzMgTDEwMTMuNTksOTc3LjYxIEwxMDE0LjY5LDk4MC44NCBMMTAxMy45Niw5ODQuMzMgTDEwMTUuNjksOTg2LjA5IEwxMDE3Ljc0LDk4Ni40NCBMMTAxNi44NSw5ODguNjMgTDEwMTcuNDMsOTg5Ljk4IEwxMDE5LjE3LDk5MC4xNyBMMTAyMS45NSw5OTMuMzggTDEwMjQuOTYsOTk0LjczIEwxMDI2LjA2LDk5My43NCBMMTAyNy40LDk5Ni41OSBMMTAzMS4wOCw5OTkuNjUgTDEwMzIuNTEsOTk3Ljc4IEwxMDI5LjksOTk4LjA0IEwxMDMxLjk5LDk5NC42MSBMMTAyOS4xMyw5OTMuNzQgTDEwMjkuODIsOTkxLjgxIEwxMDMyLjU0LDk5MS44OSBMMTAzNC4wMSw5OTMuMTEgTDEwMzMuOTUsOTk0LjgzIEwxMDM1LjIxLDk5Ni4yNCBMMTAzNC4wNyw5OTcuODIgTDEwNDAuMyw5OTYuMDUgTDEwNDQuNjYsOTk3Ljc3IEwxMDQ1LjAyLDk5OS41NyBMMTA0OC45MiwxMDAxLjY4IEwxMDQ5LjYzLDEwMDMuNTggTDEwNTAuODcsMTAwMy43OCBMMTA1NS44MiwxMDA2Ljc5IEwxMDU3LjkzLDEwMDkuMjEgTDEwNjMuMzIsMTAxMi4yMSBMMTA2My42NCwxMDA4LjQ3IEwxMDY1LjMsMTAwNi4xMiBMMTA2Ny42NiwxMDA1LjY5IEwxMDY5LjMzLDEwMDIuMjUgTDEwNzAuODcsMTAwMS43MyBMMTA3NC41OSwxMDAyLjY4IEwxMDc1LjE2LDEwMDAuOTkgTDEwNzkuNTMsMTAwMi44IEwxMDgwLjE1LDEwMDQuMiBMMTA4Ni4zNSwxMDA3LjQxIEwxMDg1LjQzLDEwMDQuNTIgTDEwODguMiwxMDAxLjY1IEwxMDkwLjU2LDEwMDAuODUgTDEwOTEuNCw5OTguODEgTDEwOTQuODcsMTAwMC4xNCBMMTA5Ni45Miw5OTguODIgTDEwOTkuNzYsOTk4LjI5IEwxMTAxLjU2LDk5OS42MyBMMTEwNC4xMSw5OTUuNDcgTDExMDQuMiw5OTMuNTcgTDExMDcuMzEsOTk0LjcgTDExMTAuMzQsOTk3LjE4IEwxMTEwLjIyLDk5OC40MiBMMTExMi40Niw5OTguNjkgTDExMTMuODgsOTk3LjcyIEwxMTE2Ljc3LDk5Ny4zOSBMMTEyMC4yNSw5OTkgTDExMjMuMDksMTAwMS42IEwxMTI4LjA4LDEwMDEuNjggTDExMzAuNjQsMTAwNC4wNCBMMTEzNS45MSwxMDA1LjIgTDExMzYuOTYsMTAwMy4xMiBMMTEzOS42NywxMDAyLjExIEwxMTM5LjkyLDEwMDUuNDEgTDExNDMuNTMsMTAwNy40MSBMMTE0Ni4xMywxMDA3LjExIEwxMTQ3LjczLDEwMDMuODkgTDExNTIuOTQsMTAwMC43NCBMMTE1OC44OCw5OTguNjIgTDExNjMuNjEsOTk1LjQgTDExNjUuNDUsOTk0Ljk0IEwxMTY2Ljk4LDk5Ni4xNCBMMTE2Ni43Miw5OTkuMDkgTDExNjguOTEsOTk5LjcxIEwxMTcxLjQ1LDk5Ny4wMiBMMTE3My4yNCw5OTYuNTUgTDExODAuMDgsOTk3LjEyIEwxMTgyLjM4LDk5Ny43OCBMMTE4NC4xNiwxMDAwLjk5IEwxMTg3LjU5LDEwMDAuNzMgTDExODguMzEsOTk5LjM3IEwxMTg3LjY5LDk5NC41NSBMMTE4OS45NSw5OTAuNjUgTDExOTIuMiw5OTAuNTYgTDExOTQuNiw5ODguODcgTDExOTkuMyw5OTAuMzkgTDEyMDAuOTIsOTkzLjQgTDEyMDQuNjksOTk1LjcyIEwxMjEwLjE3LDk5NC43OSBMMTIxMi4xOSw5OTkuOTMgTDEyMTguMTMsOTk5LjgzIEwxMjE5LjEzLDk5OC44MiBMMTIxOS45LDk5NC4yNyBMMTIxOS44LDk5Mi4wMyBMMTIyMi4zNiw5ODkuNjUgTDEyMjQuOCw5ODkuNDkgTDEyMjkuNzEsOTg3LjIgTDEyMzIuNDksOTg4LjY3IEwxMjM0LjMzLDk5Mi44NyBMMTIzOC43LDk5Ni41OSBMMTI0MS4yOCw5OTcuOTEgTDEyNDUuNDYsMTAwMS44NCBMMTI0Ni4wOCwxMDA0Ljg5IEwxMjUxLjA3LDEwMDYuNTYgTDEyNTIuNiwxMDA4Ljk4IEwxMjQ5LjY2LDEwMTEgTDEyNDkuNzgsMTAxMi44MSBMMTI1Mi4zNiwxMDEzLjQ4IEwxMjU1LjMsMTAxNy40NCBMMTI1OC41OSwxMDE4LjMyIEwxMjYwLjc2LDEwMTcuNSBMMTI2NC4wNCwxMDE5Ljg0IEwxMjY0Ljc3LDEwMjEuODMgTDEyNjcuMDQsMTAyMi4xMiBMMTI2OS4wMSwxMDI0LjA0IEwxMjcwLjU4LDEwMjMuODEgTDEyNzguNTMsMTAxNy4zMyBMMTI4MC4yNywxMDE3LjM2IEwxMjg0LjAzLDEwMTQuMjUgTDEyODYuMTgsMTAxMy4zMiBMMTI4OS4zOSwxMDEwLjI1IEwxMjkxLjg5LDEwMTEuMDUgTDEyOTMuNDEsMTAxMC42MSBMMTI5Mi45NiwxMDEzLjQ5IEwxMjkzLjU1LDEwMTYuNTUgTDEyOTUuNTcsMTAxNS40NiBMMTI5NC42NCwxMDExLjY1IEwxMjkzLjY0LDEwMTAuNSBMMTI5Ni4yNywxMDA4LjAxIEwxMjk5LjYyLDEwMDcuMzcgTDEyOTguOSwxMDA0LjYxIEwxMzAwLjg2LDEwMDUuOTEgTDEzMDMuODcsMTAwNS42NiBMMTMwMS41NSwxMDAzLjg1IEwxMzAxLjYzLDEwMDIuMzMgTDEzMDMuNjEsMTAwMi4zNSBMMTMwNS4wNCwxMDAzLjgxIEwxMzA3LjUyLDEwMDIuNzEgTDEzMDcuNDUsOTk5LjExIEwxMzA5LjcsOTk3LjY0IEwxMzEwLjk3LDk5My44NyBMMTMxMi40Niw5OTEuNDEgTDEzMTQuNjMsOTkyLjE2IEwxMzE1LjA1LDk4OS40MSBMMTMxNi4zNyw5OTAuNDYgTDEzMTguNiw5ODkuODcgTDEzMTkuOTEsOTkwLjg2IEwxMzIyLjA1LDk4OS44NyBMMTMyMy4xMiw5OTIuMTEgTDEzMjUuMTUsOTkwLjU1IEwxMzIzLjYzLDk4OS42NCBMMTMyNi40MSw5ODYuMjggTDEzMjcuNDYsOTgzLjI3IEwxMzI3LjM5LDk4MC43MSBMMTMyOC43NCw5ODIuMzUgTDEzMjkuNDIsOTc5LjYzIEwxMzMxLjcsOTc5LjYxIEwxMzMzLjI5LDk3OC40MyBMMTMzMy43NCw5NzQuMDUgTDEzMzIuODIsOTY5Ljc4IEwxMzM0LjQ5LDk2My45NiBMMTMzNS42Myw5NjMuMyBMMTMzMy41NSw5NjAuOTEgTDEzMzQuNjYsOTU4LjMzIEwxMzM3LjA5LDk1Ni43NiBMMTMzOC41Myw5NTIuMTggTDEzNDEuNDcsOTQ5LjYxIEwxMzQzLjE5LDk0OC45IEwxMzQyLjIyLDk0OC4yMiBMMTM0MC4zLDk0NC4zNiBMMTMzNy42OCw5NDEuOTcgTDEzMzguOTYsOTM5LjU1IEwxMzM2LjkxLDkzNy4xNiBMMTMzNS4xOCw5MzYuNTYgTDEzMzMuMTcsOTM3LjE0IEwxMzI3LjEzLDkzMy4yOSBMMTMyNC45OCw5MzAuMTEgTDEzMjAuOTQsOTI3LjQxIEwxMzE1LjY5LDkyOC4xNCBMMTMxMi4wNiw5MjQuNTQgTDEzMTAuOTEsOTI1LjcxIEwxMzA3LjIxLDkyNS4wMiBMMTMwNS41OCw5MjMuODQgTDEzMDQuNjYsOTI3LjIxIEwxMzA2LDkyOC4zMiBMMTMwNi40NSw5MzMuODIgTDEzMDEuNjksOTM1LjI0IEwxMzAyLjExLDkzNy44MSBMMTMwMC43Miw5MzcuNjYgTDEyOTkuNzEsOTQxLjQ4IEwxMjk3LjQ2LDk0My40NyBMMTI5Ni4zLDk0OC40OCBMMTI5MS45NCw5NTEuNTUgTDEyODguNTgsOTUwLjU3IEwxMjg2LjUzLDk1My43NyBMMTI4Ni4zOSw5NTUuNTUgTDEyODIuNjIsOTU2LjQxIEwxMjc4LjgzLDk1My45NSBMMTI3Ni4yMyw5NTQuNjEgTDEyNzYuMTcsOTUyLjM4IEwxMjc0LjA4LDk1Mi41NiBMMTI3Mi4yOSw5NTEuNTQgTDEyNjkuMzYsOTQ3LjkgTDEyNjUuMjksOTQ2LjA5IEwxMjYxLjgxLDk1MC42IEwxMjU5Ljg5LDk1NC40OCBMMTI1OC40OCw5NTYuMDIgTDEyNTYuMDQsOTU1LjA3IEwxMjU0LjM5LDk1Ni4zNyBMMTI1MS4yOSw5NTQuMTggTDEyNTAuNCw5NTEuOTcgTDEyNDkuMjgsOTUxLjgyIEwxMjQ4LjI4LDk1My43MyBMMTI0Ni45MSw5NTIuMSBMMTI0Mi45OSw5NTAuOTEgTDEyNDIuNjUsOTUwIEwxMjM2Ljg3LDk1MC41NSBMMTIzNS43NSw5NTMuODkgTDEyMzEuNSw5NTUuOCBMMTIyOC41Miw5NTUuOSBMMTIyNy4yMyw5NTMuNzMgTDEyMjcuNjIsOTUyLjQ3IEwxMjI2Ljc2LDk0Ny43IEwxMjI3LjgzLDk0NS44IEwxMjI4LjAyLDk0MS43OCBMMTIyNi4wMyw5NDEuMDYgTDEyMjQuODksOTM4LjU1IEwxMjI1LjIxLDkzNy4yNCBMMTIyNy44Miw5MzUuNDEgTDEyMjkuNDMsOTMxLjE5IEwxMjMxLjM3LDkyOS45NCBMMTIzNC4zMSw5MzEuMTQgTDEyMzUuNjUsOTMzLjI1IEwxMjM3LjQxLDkzMy45MiBMMTIzOC41LDkzNi44NSBMMTI0MC41NSw5MzUuMDIgTDEyMzguNzgsOTMxLjQ1IEwxMjM0LjMyLDkzMC4zNiBMMTIzNS4yMyw5MjguMzYgTDEyMzMuMzcsOTI2LjA4IEwxMjMwLjA4LDkyNS43MiBMMTIyOC45NCw5MjIuNSBMMTIyNS45LDkyMi40IEwxMjI2LjM2LDkxOC44NCBMMTIyNy43NSw5MTcuNjEgTDEyMjcuNDksOTE1LjAyIEwxMjIzLjIxLDkwOS4zMyBMMTIyNC43MSw5MDYuMzkgTDEyMjQuNTQsOTAzLjQyIEwxMjIzLjQyLDkwMi4yMiBMMTIyNS4wNiw4OTkuMjEgTDEyMjIuOTMsODk2LjM4IEwxMjIxLjA1LDg5NS4xIEwxMjIxLjQ3LDg5My4wNiBMMTIyMy4xNyw4OTEuODQgTDEyMjUuMDYsODg4LjY3IEwxMjI2LjY4LDg4Ny40MyBMMTIyOC41NCw4ODQuNDcgTDEyMjcuNzEsODgzLjU5IEwxMjI5LjAzLDg3Ny4zMyBMMTIyNy4zMSw4NzYuNDUgTDEyMjQuMDUsODc2LjM3IEwxMjIwLjMyLDg3NC44MyBMMTIxOS4xOSw4NzIuODYgTDEyMTcuMyw4NzEuOTEgTDEyMTYuMjIsODc0LjExIEwxMjExLjU5LDg3My41NyBMMTIxMC41MSw4NzEuNTIgTDEyMDguMjUsODcwLjUzIEwxMjEwLjMyLDg2NC40MyBMMTIxMS43LDg2MS40NSBMMTIxMi40OSw4NTguMTEgTDEyMTMuODIsODU1Ljk4IEwxMjE2LjU4LDg1NC42IEwxMjIwLjI0LDg0OS41NSBMMTIyMS4wMSw4NDcuMjcgTDEyMjQuODEsODQ1LjQ2IEwxMjI1LjYxLDg0My4xMyBMMTIyOC42NSw4NDIuMzEgTDEyMzEuMTIsODQzLjczIEwxMjM0LjQ4LDg0MC45MSBMMTIzNyw4NDAuNzMgTDEyMzguMjksODM5LjQ2IEwxMjQwLjk0LDg0MC4xMiBMMTI0Ni41OSw4NDAuMiBMMTI0OC44LDg0MS4yMyBMMTI1MS4xMiw4NDAuNDIgTDEyNTIuNyw4MzguODggTDEyNTcuMSw4MzcuNiBMMTI2Mi42Myw4MzIuNjQgTDEyNjMuMDUsODI5LjI2IEwxMjYxLjM3LDgyNy42NSBMMTI2Mi40MSw4MjUuMzUgTDEyNjEuODUsODIyLjk2IEwxMjYyLjQ4LDgxOS45NiBMMTI1OS41Myw4MTYuOSBMMTI2MC45OSw4MTYuNTcgTDEyNjIuMjIsODEzLjc3IEwxMjYyLjE2LDgxMS42MyBMMTI2My41LDgwNy4xNCBMMTI2NS42OSw4MDUuMDMgTDEyNjUuMTgsNzk5LjE3IEwxMjYyLjI4LDc5Mi4xNCBMMTI2Mi45NSw3OTAuNTUgTDEyNjUuODgsNzg5LjcyIEwxMjY1LjMxLDc4NyBMMTI2Ni41NCw3ODUuMTIgTDEyNjUuMjMsNzgyLjIxIEwxMjU4LjM2LDc4MC43IEwxMjUzLDc3OC41NCBMMTI0OC42Miw3ODEuMDEgTDEyNDYuODIsNzc5LjIyIEwxMjQ0LjQzLDc3OC42MSBMMTI0Mi4wMSw3NzguOTQgTDEyNDAuNzksNzc2Ljk5IEwxMjM4LjQxLDc3NS4zMyBMMTIzNS45Nyw3NzUuNTEgTDEyMzUuMjksNzczLjYxIEwxMjMzLjI0LDc3My4zNCBMMTIzMy4zMSw3NzAuMjcgTDEyMzAuNTcsNzY3LjkyIEwxMjI3LjE0LDc2MyBMMTIyNi4xNyw3NjAuOSBMMTIyMi45OCw3NTkuNTYgTDEyMTkuMjMsNzYwLjA0IEwxMjE2LjUzLDc2MS43NiBMMTIxNC4wOCw3NjEuMzkgTDEyMTMuNSw3NTguNjUgTDEyMTAuNjEsNzU3LjE5IEwxMjAzLjkyLDc1Ni42NyBMMTE5OC40NCw3NTguNyBMMTE5Ny42Miw3NTcuMDkgTDExOTYuOTcsNzUzLjA3IEwxMTk3LjU5LDc1MC45NCBMMTE5OS44OCw3NDguMjIgTDExOTkuMSw3NDYuNzcgTDExOTguOTEsNzQzLjA5IEwxMTk4LjA4LDc0MSBMMTE5OC43NSw3MzcuNjcgTDExOTYuNjYsNzM1Ljk0IEwxMTk2Ljc1LDczNC4zMiBMMTE5NS4wNCw3MzQuMzUgTDExOTQuMTQsNzMxLjEgTDExODkuMzIsNzI5LjI0IEwxMTg4LjEsNzI5LjYgTDExODcuMjksNzI3Ljc5IEwxMTg0LjczLDcyNS43OSBMMTE4Mi45OCw3MjYgTDExODAuNDQsNzI0LjM1IEwxMTc5LjA1LDcyMC41NyBMMTE3NC4zMSw3MjEuMDIgTDExNjkuNzgsNzE4LjY0IEwxMTY4LjczLDcyMC40MSBMMTE2NS4yOSw3MTkuNjggTDExNjIuNSw3MjEuNDggTDExNjIuMDgsNzI1LjgzIEwxMTYwLjc3LDcyNy4yNiBMMTE1NS45OCw3MjguMDEgTDExNTQuMzksNzI2Ljc2IEwxMTQ5LjEsNzI5LjYxIEwxMTQ3LjE3LDczMS4xOSBMMTE0NC42Niw3MjguNyBMMTE0Mi44Myw3MjguODQgTDExNDEuNDgsNzI3LjA5IEwxMTM4LjEzLDcyNS4zIEwxMTM0LjQyLDcyNS42NCBMMTEzMS4zMSw3MjUuMjEgTDExMzAuMzEsNzI0LjE4IEwxMTI2LjY0LDcyMi44MyBMMTEyNS44Niw3MjEuMDggTDExMjMuMjIsNzIxLjY1IEwxMTIxLDcyMy40NyBMMTExNy44NSw3MjIuOTIgTDExMTYuNjUsNzIxLjg3IEwxMTE2LjU1LDcxOS43MSBMMTExNC40Nyw3MTguMiBMMTExMi4zMyw3MTguNDcgTDExMTAsNzIxLjc4IEwxMTA2LjM5LDcyNC45OCBMMTEwNC44Miw3MjMuNzMgTDExMDEuMzIsNzI1LjA0IEwxMDk5Ljk3LDcyMy4zMSBMMTEwMC4zNCw3MjEuNDMgTDEwOTYuMzIsNzE3LjI3IEwxMDk0LjQxLDcxMy40NiBMMTA5MS4zOCw3MTMuNzYgTDEwODguNDcsNzEzLjI0IEwxMDg2Ljk4LDcxMi4wMyBMMTA4MC43Niw3MDQuOTcgTDEwNzguMzcsNzA1LjE5IEwxMDc1LjQ0LDcwNy4xIEwxMDcyLjE3LDcwNy4xMyBMMTA2OS41Myw3MDguNDEgTDEwNjguMDYsNzA2LjQ0IEwxMDY0LjIxLDcwNi43OSBMMTA2MC4zNyw3MDMuMDUgTDEwNTkuMjYsNjk5LjY3IEwxMDUzLjkxLDY5Ni44MSBMMTA1MC4yOCw2OTcuMjEgTDEwNDguNDksNjk1LjMxIEwxMDQ2LjcxLDY5Ni4xNCBMMTA0NC44Niw2OTUuNzYgTDEwNDEuOTcsNjk2LjQ1IEwxMDM2LjM3LDY5OS45MSBMMTAzNS4yOCw2OTguODggTDEwMzUuMDEsNjk2LjA4IEwxMDMzLjI5LDY5NC42OCBMMTAzMS4zOCw2OTUuMDYgTDEwMjkuODQsNjk2LjUyIEwxMDI4LjIzLDcwMS41MiBMMTAyNi4xOCw3MDQuODUgTDEwMjQuMjQsNzA2LjY5IEwxMDIxLjI1LDcwOC4zNyBMMTAxNS40Nyw3MTAuMjUgTDEwMTQuOTYsNzExLjM3IEwxMDE1LjkxLDcxNC42NiBMMTAxNy4zOCw3MTUuNzIgTDEwMTguOSw3MjAuNjYgTDEwMTguMDEsNzIxLjYgTDEwMTMuOTEsNzIwLjYgTDEwMTIuNjUsNzIxLjExIEwxMDA4Ljc5LDcxNy4yMiBMMTAwNi4yLDcxNy4yMSBMMTAwNC4zNSw3MTkuMjEgTDEwMDMuODUsNzIxLjcgTDEwMDUuMDUsNzIzLjU3IEwxMDA2LjA5LDcyMi4yOSBMMTAwNi44Nyw3MjMuODggTDEwMDUuMzcsNzI1LjA4IEwxMDAwLjQ0LDcyNS43MiBMOTg4LjM4LDcyOC44NiBMOTg1Ljc5LDcyOC42MyBMOTgyLjU1LDcyNC44NyBMOTc5Ljc5LDcyMy4xOCBMOTc1LjkyLDcyMi40OSBMOTcyLjA2LDcyMy4yNSBMOTcwLjA0LDcyMi41OSBMOTY5LjEsNzIwLjg5IEw5NjkuMDcsNzE0LjU0IEw5NjcuNTMsNzEwLjMgTDk1OS43NSw3MDcuMzEgTDk1MC40NCw3MDIuMzIgTDk0OC42Myw3MDIuMTQgTDk0Mi4yMiw3MDQuNzIgTDkzOC40OCw3MDAuNjIgTDkzNC43Myw2OTQuOTcgTDkyOS44OCw2OTIuOCBMOTI0LjYxLDY5My4zMyBMOTIwLjEzLDY5MS42OCBMOTE1LjE4LDY5Mi4wNCBMOTExLjksNjg5LjkgTDkxMC40MSw2OTAuNDMgTDkwNi41NCw2OTMuOCBMOTA0LjQ3LDY5My42MiBMOTAxLjcsNjkwLjk5IEw4OTUsNjg4Ljc5IEw4ODguMzUsNjg0LjE2IEw4ODYuNjgsNjgzLjQ2IEw4NzguODQsNjg0LjkyIEw4NzYuNTUsNjg0LjEyIEw4NzMuOTYsNjg1LjM0IEw4NzIuNTYsNjg1LjA5IEw4NzAuNTIsNjgyLjYxIEw4NjcuNTcsNjgxLjU0IEw4NjQuMjMsNjgxLjA5IEw4NjIuMzUsNjc3LjY3IEw4NTguNSw2NzcuNjQgTDg1Ny40Niw2NzYuNjUgTDg1NS4xMiw2NzcuNDkgTDg1Mi41LDY4MS4wMyBMODUwLjE2LDY4Ni41MyBMODQ5Ljg1LDY4OS4zIEw4NTAuMzcsNjkyLjMxIEw4NDkuOTksNjk2LjYxIEw4NDguMyw2OTguNjggTDg0Ny4zOCw3MDIuNTkgTDg0NS4zNCw3MDMuNjcgTDg0MS43OCw3MDMuMDcgTDgzOS44Niw3MDQuNDQgTDgzOC4zMSw3MDQuNCBMODM5LjY1LDcwOC40IEw4NDAuODEsNzA5LjAxIEw4NDEuODgsNzExLjk5IEw4NDAuMzQsNzE0Ljc3IEw4MzguNiw3MTYuMDggTDgzOC40Nyw3MTkuNDkgTDgzNi40NCw3MjIuNjEgTDgzNC44MSw3MjcuMTIgTDgzMi42MSw3MjguMjIgTDgzMC4wMiw3MzAuNTIgTDgyNi40Myw3MjkuOTMgTDgyNC4yNCw3MzIuMzggTDgxNy45Nyw3MzMuNTEgTDgxNS4xMiw3MzEuMjUgWiBNODE5LjYyLDgxOCBMODIwLjM1LDgxNi40NiBMODE5LjI4LDgxNS41OCBMODE2LjIyLDgxOC45IEw4MTkuNjIsODE4IFogTTExMzkuNzYsMTAwNC4yNiBMMTEzOS4xNiwxMDAyLjgxIEwxMTM3LjY4LDEwMDMuMzEgTDExMzkuNzYsMTAwNC4yNiBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 赊店古镇新春庙会\n赊店新春庙会把山陕会馆、红黄灯笼街、越调戏台和地方年货连在一起。这里既有固定古建筑，也有随节期增加的演艺与布置。由会馆前的开幕人群走到旱船花饰和一件年货，可以读出古镇庙会的多种尺度。","childrenIds":["scene-ny-sd-01","scene-ny-sd-02","scene-ny-sd-03","scene-ny-sd-04"],"label_anchor_points":[1055.84,848.23],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1055.84,"anchorY":848.23,"labelX":1055.84,"labelY":783.23,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-ny-sd-01":{"id":"scene-ny-sd-01","parentId":"fair-ny-sd","imageSrc":"assets/scenes/ny-sd-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNzA3LjIiIGN5PSIzMTMuNTYiIHJ4PSIzMDcuODQiIHJ5PSIyOTQuODQiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[18.72,399.36,608.4,1015.04],"zoomedBox":[18.72,399.36,608.4,1015.04],"label":"会馆前的开幕舞龙","url":null,"text":"### 会馆前的开幕舞龙\n**为什么从山陕会馆前进入赊店庙会？**\n会馆的多重屋檐建立当地建筑识别，舞龙与鼓手则把原有开敞地转为开幕观看场所。画面把2025建筑外形和2026开幕文字结合，让读者同时看见长期地点与当代活动。观众站位、龙身动作和临时布置属于绘画补全，不是对开幕现场的逐点复原。\n\n2026年2月17日上午，报道记山陕会馆前舞龙开场；建筑外形参考NY07悬鉴楼专题照片。\n\n资料：2026开幕文字；建筑外形参考2025专题\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ny-sd-01-guildhall-eaves"],"label_anchor_points":[815.36,355.68],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":815.36,"anchorY":355.68,"labelX":815.36,"labelY":290.68,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ny-sd-01-guildhall-eaves":{"id":"object-ny-sd-01-guildhall-eaves","parentId":"scene-ny-sd-01","imageSrc":"assets/scenes/ny-sd-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3MzYiIGN5PSIyNjEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[58,376,463,1096],"zoomedBox":[58,376,463,1096],"label":"山陕会馆悬鉴楼屋檐","url":null,"text":"### 山陕会馆悬鉴楼屋檐\n2025古建筑专题提供悬鉴楼正面与屋檐资料，2026报道又确认会馆前举行开幕表演。层叠屋檐使此处区别于通用仿古门头，但建筑照片不能证明节期舞台、灯笼或观众实际设置的位置。\n- **它在庙会中的作用**：把节庆场景定位到赊店建筑\n- **记载与补全**：2026开幕文字；建筑外形参考2025专题。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[736,261],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":876,"labelY":166,"anchorX":736,"anchorY":261,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ny-sd-02":{"id":"scene-ny-sd-02","parentId":"fair-ny-sd","imageSrc":"assets/scenes/ny-sd-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI3Mi45NiIgY3k9IjMzNi45NjAwMDAwMDAwMDAwNCIgcng9IjIwOCIgcnk9IjE1OS4xMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[177.84,1064.96,496.08000000000004,1480.96],"zoomedBox":[177.84,1064.96,496.08000000000004,1480.96],"label":"走入红黄灯笼街","url":null,"text":"### 走入红黄灯笼街\n**红黄灯笼怎样把古街的纵深显现出来？**\n跨街悬挂的灯笼在头顶反复出现，与两侧商铺共同收束行进方向。游客既向远处流动，也在街边停留，使街巷成为通行与经营并存的空间。报道照片确认灯笼和人潮，插画中的每一家铺面、远处招牌及人群数量不能作为真实商户或容量统计。\n\n赊店古镇街道入口上方悬挂成排红黄灯笼与临时主题横幅，两侧商铺夹出密集人流。\n\n资料：2026年2月开幕活动报道；具体拍摄日未逐图披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ny-sd-02-lantern-rows"],"label_anchor_points":[1248,299.52],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1248,"anchorY":299.52,"labelX":1248,"labelY":234.51999999999998,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ny-sd-02-lantern-rows":{"id":"object-ny-sd-02-lantern-rows","parentId":"scene-ny-sd-02","imageSrc":"assets/scenes/ny-sd-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSIzMjQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[122,424,527,1144],"zoomedBox":[122,424,527,1144],"label":"横跨街道的红黄灯笼","url":null,"text":"### 横跨街道的红黄灯笼\n开幕活动照片显示红黄灯笼横穿赊店街道，临时主题横幅与两侧商铺同框。灯笼串为既有街巷增加节期色彩，并帮助远近层次显现；具体灯数、尺寸和悬挂技术没有由资料披露。\n- **它在庙会中的作用**：临时节庆布置与空间节奏\n- **记载与补全**：2026年2月开幕活动报道；具体拍摄日未逐图披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,324],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":229,"anchorX":784,"anchorY":324,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ny-sd-03":{"id":"scene-ny-sd-03","parentId":"fair-ny-sd","imageSrc":"assets/scenes/ny-sd-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMjE2LjMyIiBjeT0iMzQ2LjMyIiByeD0iMjE2LjMyIiByeT0iMjQzLjM1OTk5OTk5OTk5OTk5IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[102.96,0,589.68,432.64],"zoomedBox":[102.96,0,589.68,432.64],"label":"越调戏台与看戏人","url":null,"text":"### 越调戏台与看戏人\n**越调戏台如何使流动人群停下来？**\n台口把演员与观众分成面对面的两个区域，蓝色侧幕和红色边框帮助视线集中到舞台。与街上行进的旱船相比，看戏更依赖持续停留。2026报道确认社旗县越调艺术传承保护中心演出，但当前材料没有逐图标出剧名和角色，不能替演员衣饰添加未经核对的身份。\n\n社旗县越调艺术传承保护中心舞台演出，蓝色侧幕、红色楹联与台下观众同框。\n\n资料：2026年2月开幕活动报道；具体拍摄日未逐图披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ny-sd-03-stage-curtain","object-ny-sd-03-opera-costume"],"label_anchor_points":[199.68,411.84],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":199.68,"anchorY":411.84,"labelX":199.68,"labelY":346.84,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ny-sd-03-stage-curtain":{"id":"object-ny-sd-03-stage-curtain","parentId":"scene-ny-sd-03","imageSrc":"assets/scenes/ny-sd-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIzNTIiIGN5PSIzOTYiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[194,0,599,720],"zoomedBox":[194,0,599,720],"label":"越调戏台的蓝色侧幕","url":null,"text":"### 越调戏台的蓝色侧幕\n2026演出照片可见台口两侧蓝幕，红色楹联与观众共同入画。侧幕把表演区域框出，也遮挡后台一部分；画面可用于观察舞台与人群关系，不能据幕布颜色推断固定舞台尺寸或场次。\n- **它在庙会中的作用**：划定演出可见区域\n- **记载与补全**：2026年2月开幕活动报道；具体拍摄日未逐图披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[352,396],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":492,"labelY":301,"anchorX":352,"anchorY":396,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ny-sd-03-opera-costume":{"id":"object-ny-sd-03-opera-costume","parentId":"scene-ny-sd-03","imageSrc":"assets/scenes/ny-sd-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4NjQiIGN5PSI0OTUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[292,504,697,1224],"zoomedBox":[292,504,697,1224],"label":"越调演员的戏衣","url":null,"text":"### 越调演员的戏衣\n照片确认社旗县越调艺术传承保护中心的舞台演出，演员穿戏衣面对台下观众。戏衣与动作共同承担角色表达，但资料未逐图命名剧目，当前插画的花纹、姿势和角色数量均不可当作唱段档案。\n- **它在庙会中的作用**：角色呈现与观众视线集中\n- **记载与补全**：2026年2月开幕活动报道；具体拍摄日未逐图披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[864,495],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":724,"labelY":400,"anchorX":864,"anchorY":495,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-ny-sd-04":{"id":"scene-ny-sd-04","parentId":"fair-ny-sd","imageSrc":"assets/scenes/ny-sd-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI3Mi45NiIgY3k9IjY2OS4yNCIgcng9IjM5MS4wMzk5OTk5OTk5OTk5NiIgcnk9IjI2Ni43NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[402.48,881.9200000000001,936,1664],"zoomedBox":[402.48,881.9200000000001,936,1664],"label":"香肚、老酒与三粉","url":null,"text":"### 香肚、老酒与三粉\n**赊店年货摊上哪些名称有报道支撑？**\n香肚、老酒和三粉来自2026开幕实况中的品类记录，适合由地方名字进入食品文化；摊主讲解、游客观看与样品陈列则解释近距离交流。由于缺少摊位近照，画中包装、容器及同摊组合是概念设计，既不代表真实品牌，也不能当成完整年货清单。\n\n开幕报道记录赊店香肚、赊店老酒、三粉等食品特产；未给商品包装及摊棚细节。\n\n资料：2026开幕实况文字；摊位外观未有近照\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-ny-sd-04-xiangdu","object-ny-sd-04-local-wine"],"label_anchor_points":[1198.08,683.28],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1198.08,"anchorY":683.28,"labelX":1198.08,"labelY":618.28,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-ny-sd-04-xiangdu":{"id":"object-ny-sd-04-xiangdu","parentId":"scene-ny-sd-04","imageSrc":"assets/scenes/ny-sd-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI1NDQiIGN5PSI2MzAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[428,184,833,904],"zoomedBox":[428,184,833,904],"label":"切开的香肚","url":null,"text":"### 切开的香肚\n赊店香肚是开幕报道明确提到的地方食品。插画以完整外形与切面并置，便于表现摊位介绍商品的动作；真实出品形状、配方及包装尚无近照验证，因此只把品名视为已确认的在会线索。\n- **它在庙会中的作用**：地方年货与样品展示\n- **记载与补全**：2026开幕实况文字；摊位外观未有近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[544,630],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":684,"labelY":535,"anchorX":544,"anchorY":630,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-ny-sd-04-local-wine":{"id":"object-ny-sd-04-local-wine","parentId":"scene-ny-sd-04","imageSrc":"assets/scenes/ny-sd-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4NjQiIGN5PSI2NDgiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[446,504,851,1224],"zoomedBox":[446,504,851,1224],"label":"年货台上的酒瓶","url":null,"text":"### 年货台上的酒瓶\n赊店老酒出现在2026开幕报道的特产品类中，瓶装陈列在图中用于区分液体商品与旁边干货。瓶型、瓶盖和标签没有实拍依据，不指认实际品牌包装，也不据此延伸出产量或酿造历史。\n- **它在庙会中的作用**：呈现地方特产的不同商品形态\n- **记载与补全**：2026开幕实况文字；摊位外观未有近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[864,648],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":724,"labelY":553,"anchorX":864,"anchorY":648,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-sq-hst":{"id":"fair-sq-hst","parentId":"54749336813040","label":"商丘","imageSrc":"assets/worlds/sq-hst.webp","box":[436.72,1534.12,697.57,1877.18],"zoomedBox":[436.72,1534.12,697.57,1877.18],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNjg5LjUsNjE3Ljk1IEwxNjkyLjQzLDYxOC43MiBMMTY5NC44Miw2MTYuNzIgTDE2OTcuOSw2MTYuNTIgTDE2OTkuMzcsNjE4LjAxIEwxNzA0Ljk5LDYxNC4xNSBMMTcxMS4yLDYxNy40OCBMMTcxMy41Nyw2MTcuNDcgTDE3MTMuMzUsNjE1IEwxNzE1Ljg0LDYxNy4xNCBMMTcxOC43OSw2MTcuNDEgTDE3MTkuOTksNjE5LjU5IEwxNzIzLjEzLDYyMi44NCBMMTcyNS41OSw2MjQuNTggTDE3MjUuNjMsNjI4Ljg1IEwxNzI3LDYzMC43MSBMMTczMS41OCw2MzAuODcgTDE3MzEuNTIsNjI1LjA0IEwxNzMzLjUsNjI0LjE1IEwxNzM1LjAyLDYyNS4wNyBMMTczNS43Nyw2MjguMjQgTDE3MzYuNzIsNjI5LjMyIEwxNzM5LjYyLDYyOS4xMyBMMTc0MC45Myw2MjkuOCBMMTc0Ni43NCw2MjkuODMgTDE3NDguNjMsNjMxLjExIEwxNzUxLjcyLDYzNC4zNCBMMTc1My43OCw2MzcuMjMgTDE3NTQuNzksNjM5LjkyIEwxNzUzLjg5LDY0My40NyBMMTc1MS40Nyw2NTAuMzYgTDE3NTIuMjksNjUzLjk5IEwxNzU0LjU3LDY1My44MiBMMTc1Ny4wOSw2NTQuODUgTDE3NTcuMjYsNjU3LjUgTDE3NjEuMjMsNjU4Ljc4IEwxNzY1Ljg4LDY2My4xMiBMMTc2NS40MSw2NjUuMzkgTDE3NjYuOTksNjY2LjE3IEwxNzY2LjY4LDY3MC45OSBMMTc2My4zOCw2NzAuMzYgTDE3NjMuMjgsNjcxLjczIEwxNzY1LjY2LDY3Mi4wOSBMMTc2Ni40Nyw2NzMuNjUgTDE3NjUuMTYsNjc1Ljg1IEwxNzY4LjU0LDY3OC4yOSBMMTc2OC43NCw2ODEuMTIgTDE3NzMuMzksNjgwLjc3IEwxNzczLjM1LDY4Mi42NCBMMTc3NS4zLDY4Ni40MiBMMTc3OS41Miw2ODcuNzcgTDE3ODMuOTksNjk3LjM3IEwxNzg3LjUxLDY5Ny41NyBMMTc5MS44OCw2OTMuODcgTDE3OTMuMzIsNjkzLjU0IEwxNzk3LjQxLDY5NC41MiBMMTc5OC4wNyw2OTEuNzEgTDE4MDEuMDYsNjkzLjExIEwxODA0LjM2LDY5Mi44IEwxODA4LjMzLDY4OC4yNiBMMTgxMi43NSw2ODYuNTYgTDE4MTQuMzksNjgzLjQ1IEwxODE2LjYyLDY4NC41NyBMMTgxNi45OSw2ODIuODcgTDE4MjAuMzksNjgxLjc2IEwxODIyLjcxLDY4Mi4zMSBMMTgyNC44Nyw2ODEuNDIgTDE4MjguODYsNjgwLjc3IEwxODMxLjYsNjc1LjY5IEwxODM0LjE1LDY3Ny44MyBMMTgzNi4xOCw2NzggTDE4MzcuMDEsNjc2LjI0IEwxODM2LjM4LDY3NC4yIEwxODM3LjA4LDY2Ni4zOSBMMTg0MC4wMyw2NjYuMyBMMTg0MS4zOCw2NjMuMzQgTDE4NDMuOTgsNjYzLjA0IEwxODQ2LjAzLDY2MS4xMSBMMTg0OS4yNCw2NjIuMjcgTDE4NDkuODgsNjYwLjU0IEwxODUyLjg3LDY2MC44MiBMMTg1My42Miw2NTguNjggTDE4NTUuODIsNjU4LjI4IEwxODU2LjI3LDY2MC4xMSBMMTg1Ny42Niw2NTguMjIgTDE4NTkuODgsNjU4LjQ2IEwxODU5LjI1LDY1Ni45MiBMMTg1OS44Niw2NTMuODggTDE4NjEuNSw2NTIuNCBMMTg2NC4yNSw2NTIuMzcgTDE4NjcuMTYsNjUzLjMyIEwxODY5LjkzLDY1NS40NyBMMTg3Mi44NSw2NTYuODQgTDE4NzUuNzUsNjU1Ljk3IEwxODc0Ljk2LDY1MC4zNiBMMTg3Ni4zMyw2NDcuNDggTDE4NzUuMjQsNjQzLjE3IEwxODc3LjE4LDY0MC44NiBMMTg3Ni43Niw2MzcuNjIgTDE4NzQuMDIsNjM2Ljc4IEwxODczLjM0LDYzNS4yIEwxODY5LjA3LDYzMS42IEwxODY5LjEsNjI5Ljk3IEwxODY3Ljc5LDYyOC45MiBMMTg2OC40OCw2MjYuMzIgTDE4NjcuMDcsNjIyLjgzIEwxODY1LjM0LDYyMS4yIEwxODYyLjE3LDYxNS40OCBMMTg2MS40Nyw2MTIuNTggTDE4NTkuNzksNjA5LjQgTDE4NTYuMzUsNjA4LjExIEwxODU2LjY5LDYwNi42NSBMMTg1NC4xNSw2MDMuNzIgTDE4NTUuNCw2MDIuODcgTDE4NTUuNjYsNTk3LjMzIEwxODU3LjUyLDU5NS4wNiBMMTg2MS4yMSw1OTMuMTMgTDE4NjAuMSw1ODkuMjkgTDE4NTcuNTksNTg3LjQzIEwxODU2LjkxLDU4MS45NCBMMTg1Ny43Niw1NzkuODMgTDE4NTcuMDksNTc3LjI1IEwxODU5LjAzLDU3Ni43MSBMMTg2MS42Miw1NzQuNiBMMTg2NC4zOCw1NzEuMTQgTDE4NjQuNCw1NjkuMTYgTDE4NjEuMzksNTY3LjA5IEwxODUxLjExLDU2NC4zNCBMMTg0Ny4wMiw1NjUuNiBMMTg0Mi41Myw1NzAuMDggTDE4NDAuNzYsNTcwLjU0IEwxODM5LjIsNTY4IEwxODM5Ljk5LDU2Ni41OSBMMTgzOC42Nyw1NjYuMjMgTDE4MzUuODMsNTY4LjUyIEwxODM2LjMsNTcwLjMyIEwxODMzLjEsNTcwLjc1IEwxODMxLjIsNTY4Ljg3IEwxODI4LjkxLDU2OC45NiBMMTgyNS41Miw1NzAuMDUgTDE4MjQuODIsNTcxLjIzIEwxODIzLjEzLDU2OC45MyBMMTgyNS4wNCw1NjQuOTEgTDE4MjMuNDYsNTYwLjczIEwxODIyLjA3LDU1OS4wNSBMMTgxNi44LDU1Ni44IEwxODExLjUyLDU1My45OSBMMTgwOS4xMSw1NTAuMTggTDE4MDYuODQsNTQ5Ljg0IEwxODA1LjczLDU0Ny41IEwxODAyLjg2LDU0Ni4yIEwxNzk5LjksNTQ2LjYzIEwxNzk0Ljk1LDU0NC44OSBMMTc5NC4yNiw1NDMuMDggTDE3OTUuNiw1NDEuODcgTDE3OTUuMzgsNTQwLjEgTDE3OTMuMzgsNTM3LjMgTDE3ODguNDgsNTMzLjk0IEwxNzg3LjY3LDUzMC43MyBMMTc4NS4yNCw1MjcuMzkgTDE3ODguNDEsNTIxLjkxIEwxNzg4LjM2LDUxOS4wOCBMMTc5MC40MSw1MTguODUgTDE3OTMuMTMsNTE2LjIyIEwxNzkzLjExLDUxMy45MyBMMTc5MC42OSw1MTAuMDkgTDE3OTEuNyw1MDUuNTYgTDE3OTEuODMsNTAwLjk2IEwxNzkwLjUzLDUwMi4xOSBMMTc4NC4yMyw1MDYgTDE3ODIuMzksNTA2LjEyIEwxNzgwLjA3LDUwNC42NCBMMTc3OC4yMyw1MDEuNzggTDE3NzYuOTMsNDk3LjgzIEwxNzczLjgsNDk0LjE5IEwxNzcwLjI5LDQ5My42MSBMMTc2NS4xMSw0OTYuNTQgTDE3NjEuOCw0OTcuMDggTDE3NTkuMjMsNDk1LjA2IEwxNzU2LjY1LDQ5MS45MSBMMTc1NS4wMiw0OTEuMTkgTDE3NTMuMTEsNDkyLjAyIEwxNzUxLjg2LDQ5My44NiBMMTc1MS43Miw0OTcuOTMgTDE3NDkuMDgsNDk5LjQ1IEwxNzQ0LjYsNDk5LjY3IEwxNzI4LjA1LDUwMi4zMiBMMTcyNi40Myw1MDMuMyBMMTcyNC4yNSw1MDIuODEgTDE3MjQuMzgsNTA0LjQ1IEwxNzIyLjIzLDUwNC45NiBMMTcxNi4zMSw1MDAuMzkgTDE3MDkuOTMsNDk4LjI5IEwxNzAyLjg1LDQ5Ny45NSBMMTcwMC40LDQ5NS44IEwxNjk4LjA3LDQ5NS43NyBMMTY5Ny43NCw1MDIuNTMgTDE2OTUuMzEsNTA1LjU3IEwxNjkyLjQ5LDUwNS4yNyBMMTY4Ny42Miw1MDIuODIgTDE2ODYuODUsNTAxLjk2IEwxNjgzLjUzLDUwMS4yMyBMMTY4MS4zNiw1MDEuODMgTDE2NzYuNjMsNTAyLjA4IEwxNjcyLjEsNTAxLjggTDE2NzAuODksNTAyLjUyIEwxNjY3LjIsNTAxLjU1IEwxNjYzLjUyLDQ5OS40NSBMMTY1OSw0OTMuOTIgTDE2NTYuNjMsNDg5LjYzIEwxNjUzLjMxLDQ4Ny4wNiBMMTY1Mi43LDQ4Mi43NiBMMTY1MC4xNyw0NzguNjEgTDE2NTAuNjEsNDczLjE0IEwxNjUwLjIxLDQ3MC40OSBMMTY0OC4xMiw0NjcuMTQgTDE2NDguNzgsNDY1LjA0IEwxNjUxLjA0LDQ2Mi43OCBMMTY0OC42Myw0NTUuNDEgTDE2NDguNTUsNDUzLjU0IEwxNjQ2LjgsNDQ4LjkyIEwxNjQ0LjM2LDQ0OC4zNyBMMTY0NC43OSw0NDcuMTMgTDE2NDMuMzYsNDQ0LjI3IEwxNjQwLjYyLDQ0Mi45MyBMMTYzNy44NCw0NDMuNjIgTDE2MzMuNjUsNDQxLjY4IEwxNjMxLjU5LDQzOS42NyBMMTYyOC40OSw0MzguNDcgTDE2MjYuMTUsNDM2LjcyIEwxNjIzLjM2LDQzNi44MSBMMTYyMC45Niw0MzguNDQgTDE2MTYuNzksNDM4IEwxNjE0LjY1LDQzOS44NyBMMTYxNi43NSw0NDMuMDYgTDE2MTQuNzQsNDQ3LjQ1IEwxNjEyLjEyLDQ0Ny4wOCBMMTYxNC4yNCw0NDkuMDEgTDE2MTMuMTksNDUwLjU3IEwxNjA0LjY0LDQ0OC44NiBMMTYwMy43OCw0NTEuMjEgTDE2MDAuMTMsNDUwLjA4IEwxNTk5LjQ4LDQ1Mi4zMSBMMTU5Ny4yOSw0NTMuOTkgTDE1OTUuNTEsNDU0LjI4IEwxNTkyLjgsNDUxLjY2IEwxNTg4Ljk1LDQ1Mi43MiBMMTU4Ni4wNCw0NTYuNDEgTDE1NzMuNzUsNDU2LjA0IEwxNTcyLjE0LDQ1Ni4zOSBMMTU2Ni42Miw0NTkuMDcgTDE1NjQuMjQsNDU4LjE4IEwxNTYyLjc2LDQ1OS4wMSBMMTU2MC4yLDQ1OC45NyBMMTU1NC41NCw0NjIuMTYgTDE1NTEuOTEsNDYxLjg0IEwxNTQ2LjU0LDQ1OC41NyBMMTU0My4zOCw0NTUuNzYgTDE1NDEuNDYsNDU1LjcgTDE1NDEuMzUsNDU3LjEzIEwxNTM1LjQ4LDQ1Ny41MiBMMTUzNC4yMyw0NTguMjQgTDE1MzQuMTIsNDYwLjI4IEwxNTM1LjQ5LDQ2Mi4xOSBMMTUzOS45NCw0NjMuNjggTDE1MzkuODQsNDY1LjA2IEwxNTM2LjQzLDQ2OS40IEwxNTM5LjIzLDQ3MC4zNSBMMTUzOS42OSw0NzQuNTcgTDE1NDEuNTIsNDc1LjU0IEwxNTQ1Ljk4LDQ3My4yMyBMMTU0OS4wNCw0NzMuMyBMMTU1My41Nyw0NzUuODIgTDE1NTQuNSw0NzYuOTMgTDE1NTQuMzQsNDc5LjEzIEwxNTUyLjYyLDQ3OS45NCBMMTU0OC43LDQ4MC4zMyBMMTU0Ni45Myw0ODEuNTkgTDE1NDYuMzgsNDgzLjYgTDE1NDcuOTIsNDg1LjIzIEwxNTQ3LjI5LDQ4OC4zIEwxNTQ3LjgyLDQ5Mi4zOCBMMTU0Ny4wNCw0OTQuOTEgTDE1NDguNTIsNDk4LjY0IEwxNTQ4Ljk5LDUwMS40MyBMMTU0OC44Myw1MDcuMzggTDE1NTAuNDMsNTA3LjE0IEwxNTUwLjk2LDUwOC42NyBMMTU0OS42OSw1MTAuMjkgTDE1NTEuNDksNTExLjA2IEwxNTUwLjE5LDUxNC4wNyBMMTU1MC45Miw1MTUuNTYgTDE1NDkuNDEsNTE5LjI5IEwxNTUxLjgxLDUxOC41OSBMMTU1MS4xLDUyMS42IEwxNTQ5LjkyLDUyMS45IEwxNTQ4LjM1LDUyNS41MyBMMTU0Ni45Myw1MjcuMDIgTDE1NDUuMDMsNTI2Ljk2IEwxNTQzLjk4LDUyOS40MSBMMTU0Mi40LDUyOC42IEwxNTQxLjEzLDUyNi42IEwxNTM5Ljg2LDUyOS4wOSBMMTUzOS40MSw1MzIuNTYgTDE1NDAuOTcsNTMzLjIxIEwxNTM4LjY0LDUzNC4zMSBMMTUzOS4wNiw1MzguMzggTDE1MzcuOTIsNTM4LjYxIEwxNTM4LjUsNTQwLjk3IEwxNTQyLjc5LDU0MS42OCBMMTU0Mi45LDU0Mi45OSBMMTU0NS40Myw1NDQuNTQgTDE1NDMuNjUsNTQ3LjUxIEwxNTQwLjM5LDU0OC4zNCBMMTUzOS4yMyw1NTUuNjcgTDE1NDAuNTEsNTU2LjkzIEwxNTQyLjEsNTYyLjI3IEwxNTQ0LjM0LDU2My4yNyBMMTU0Ny45OCw1NjcuMDQgTDE1NDkuODksNTY3LjY2IEwxNTUzLjk1LDU2Ny41OSBMMTU1NS4yOCw1NjkuMzggTDE1NTkuMzIsNTcyLjE5IEwxNTYyLjgzLDU3MS45NCBMMTU2My45MSw1NzQuMTEgTDE1NjYuMTYsNTc0Ljg2IEwxNTY4Ljg3LDU3NC4xMSBMMTU3NC4xNyw1NzUuNzEgTDE1NzYuMzEsNTgwLjYzIEwxNTgxLjk5LDU4MS4xMSBMMTU4NC4wNSw1ODEuODUgTDE1ODYuNjIsNTg0LjIyIEwxNTkwLjIxLDU4NC4wOCBMMTU4OC43OSw1ODguNSBMMTU5MS41LDU5Mi44NCBMMTU5MS41Niw1OTYuNiBMMTU5MC41Miw1OTguMjkgTDE1OTAuMjksNjAxLjI3IEwxNTg4Ljk0LDYwNC4yNiBMMTU5MC4xOCw2MDcuNzIgTDE1ODguNjksNjA5LjIxIEwxNTg5LjE0LDYxMy44NSBMMTU4OC40MSw2MTYuNTMgTDE1OTAuNjYsNjE3LjAzIEwxNTkyLjgsNjE4LjkxIEwxNTkyLjczLDYyMC4xIEwxNTg5LjI4LDYyNS43NSBMMTU4Ni43Niw2MjYuNDMgTDE1ODIuMTMsNjI1LjkzIEwxNTgwLjQxLDYyNi40MSBMMTU4MC41Myw2MjguMzEgTDE1ODIuMSw2MzAuODYgTDE1NzkuNjMsNjMzLjcgTDE1NzguMTcsNjM2LjI3IEwxNTc4LjgxLDYzNy41OCBMMTU3Ny4zNSw2NDEuMjggTDE1NzUuODQsNjQyLjkxIEwxNTc1LjkyLDY0NC43NCBMMTU3OS42Miw2NDYuMTkgTDE1ODIuNDgsNjQ2LjY1IEwxNTg2LjYyLDY0Ni4wMiBMMTU4Ni40OCw2NDMuMjcgTDE1ODguMDksNjQwLjQgTDE1ODkuODMsNjM5Ljk1IEwxNTkzLjI0LDY0MS4wNCBMMTU5NC40LDY0Mi44OCBMMTU5OS42Niw2NDIuNzUgTDE2MDIuMTEsNjQxLjA4IEwxNjA0Ljk4LDYzNy4zOCBMMTYwMy4yNCw2MzQuNDQgTDE2MDQuOCw2MzQuMDkgTDE2MDkuODEsNjM3LjQ0IEwxNjExLjgsNjM3LjIyIEwxNjEzLjk0LDYzNS41NiBMMTYxNC4zNiw2MzIuNjkgTDE2MTQuMDcsNjI5LjU3IEwxNjE1LjEsNjI4LjEgTDE2MjAuNzMsNjI3LjE1IEwxNjIyLjA2LDYyNy40NiBMMTYyMC45Niw2MzAuNjggTDE2MjEuNSw2MzIuNDUgTDE2MjUuMzIsNjMyLjU1IEwxNjI2Ljg2LDYzMC40OSBMMTYyOS41OCw2MzAgTDE2MzIuMTUsNjI3LjQ1IEwxNjM0LjU2LDYyNy44OSBMMTYzNy4xMiw2MzAuMDQgTDE2NDIuMjQsNjMzLjA4IEwxNjQ5LjIsNjM0Ljc0IEwxNjUyLjgzLDYzNC41MSBMMTY1My41NCw2MzAuMjEgTDE2NTguNTYsNjI3LjU5IEwxNjYxLjE0LDYyOC4wOCBMMTY2My4xLDYyNy4xOSBMMTY2Ni4yNyw2MjcuMzEgTDE2NjcuMjksNjI2LjY1IEwxNjY5LjU4LDYyMy4wMiBMMTY2OS45OCw2MjAuOCBMMTY2OS41NCw2MTQuNyBMMTY2OC44MSw2MTIuNCBMMTY3NC40Niw2MTEuOTggTDE2ODMuMTMsNjEyLjcyIEwxNjg0LjYsNjExLjc0IEwxNjg3LjMxLDYxMi40OSBMMTY4OS41LDYxNy45NSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 火神台庙会\n火神台围绕阏伯与火文化形成朝台、民间表演和游园活动。辨认这里需要同时看麒麟道具、本土祭祀队伍、受邀英歌及当代舞台。由广场上的围观圈走近戏衣和手作，可以理解同一庙会中不同文化层次的相遇。","childrenIds":["scene-sq-hst-01","scene-sq-hst-03","scene-sq-hst-04"],"label_anchor_points":[1698.66,566.04],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1698.66,"anchorY":566.04,"labelX":1698.66,"labelY":501.03999999999996,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-sq-hst-01":{"id":"scene-sq-hst-01","parentId":"fair-sq-hst","imageSrc":"assets/scenes/sq-hst-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNzQwLjQ4IiBjeT0iMjU3LjQwMDAwMDAwMDAwMDAzIiByeD0iNzIzLjgzOTk5OTk5OTk5OTkiIHJ5PSIyMjkuMzIwMDAwMDAwMDAwMDIiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[28.08,16.64,486.72,1464.32],"zoomedBox":[28.08,16.64,486.72,1464.32],"label":"广场与围观空间","url":null,"text":"### 广场与围观空间\n**围观圈的中心为什么是麒麟与一座小高台？**\n麒麟道具围绕高台形成中心动作区，观众在广场四周把这个中心围合起来，后方灯架显示当代节会设施的存在。这种空间关系来自2026照片，适合从全景识别表演如何组织人群。台上瞬间动作与观众数量经重绘，不能当作完整节目流程或精确场地图。\n\n红、绿、蓝色麒麟道具围绕高台表演；演员身穿红衣，观众在广场四周围看。\n\n资料：2026年2月报道；具体拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-sq-hst-01-performance-platform"],"label_anchor_points":[1048.32,318.24],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1048.32,"anchorY":318.24,"labelX":1048.32,"labelY":253.24,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-sq-hst-01-performance-platform":{"id":"object-sq-hst-01-performance-platform","parentId":"scene-sq-hst-01","imageSrc":"assets/scenes/sq-hst-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSI2MDMiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[400,424,805,1144],"zoomedBox":[400,424,805,1144],"label":"麒麟舞中的小高台","url":null,"text":"### 麒麟舞中的小高台\n2026配图可见麒麟围绕高台表演，红衣演员和四周观众同场。高台把某些动作抬到更显眼的位置，使平地的麒麟轮廓与人物形成高度对照；其实际结构尺寸和用途细分没有公开说明。\n- **它在庙会中的作用**：形成表演中心与高度变化\n- **记载与补全**：2026年2月报道；具体拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,603],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":508,"anchorX":784,"anchorY":603,"labelWidth":192,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-sq-hst-03":{"id":"scene-sq-hst-03","parentId":"fair-sq-hst","imageSrc":"assets/scenes/sq-hst-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNTU3LjQ0IiBjeT0iMzc0LjQiIHJ4PSI0MjQuMzIiIHJ5PSIyODAuNzk5OTk5OTk5OTk5OTUiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[93.60000000000001,133.12,655.1999999999999,981.76],"zoomedBox":[93.60000000000001,133.12,655.1999999999999,981.76],"label":"走近麒麟舞","url":null,"text":"### 走近麒麟舞\n**怎样从头、身、脚的关系读出麒麟道具？**\n近景将麒麟头部、长身披覆与下方演员腿脚一起呈现，让“动物”如何由人表演变得可读。蓝红鳞片般色块与长形身体是图像里的识别线索，不能一概归入舞狮。表演者的具体换步与多人协作方式仍需录像，本图只解释可见结构。\n\n红、绿、蓝色麒麟道具围绕高台表演；演员身穿红衣，观众在广场四周围看。\n\n资料：2026年2月报道；具体拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-sq-hst-03-qilin-head","object-sq-hst-03-qilin-body"],"label_anchor_points":[449.28000000000003,393.12],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":449.28000000000003,"anchorY":393.12,"labelX":449.28000000000003,"labelY":328.12,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-sq-hst-03-qilin-head":{"id":"object-sq-hst-03-qilin-head","parentId":"scene-sq-hst-03","imageSrc":"assets/scenes/sq-hst-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5NjAiIGN5PSIzMDYiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[104,600,509,1320],"zoomedBox":[104,600,509,1320],"label":"麒麟道具的头部","url":null,"text":"### 麒麟道具的头部\n2026实景配图中有红绿蓝色麒麟道具，插画重点保留蓝色头部与角状轮廓。它与普通狮头不宜互换，是本例区别于其他庙会舞狮画面的物件线索；具体纹样寓意没有逐项来源解释。\n- **它在庙会中的作用**：明确麒麟舞的地方识别\n- **记载与补全**：2026年2月报道；具体拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[960,306],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":820,"labelY":211,"anchorX":960,"anchorY":306,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-sq-hst-03-qilin-body":{"id":"object-sq-hst-03-qilin-body","parentId":"scene-sq-hst-03","imageSrc":"assets/scenes/sq-hst-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjY0IiBjeT0iNTEzIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[310,880,715,1600],"zoomedBox":[310,880,715,1600],"label":"麒麟的长身披覆","url":null,"text":"### 麒麟的长身披覆\n麒麟舞照片可见长身披覆与演员的红色衣裤。披覆形成动物身体，露出的腿脚则让集体表演的人的尺度仍可辨认；当前材料没有具体制作者或内部骨架说明，不据插画推断制作材料。\n- **它在庙会中的作用**：把演员身体组织为动物轮廓\n- **记载与补全**：2026年2月报道；具体拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1264,513],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1124,"labelY":418,"anchorX":1264,"anchorY":513,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-sq-hst-04":{"id":"scene-sq-hst-04","parentId":"fair-sq-hst","imageSrc":"assets/scenes/sq-hst-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI4MS4yOCIgY3k9IjY4My4yOCIgcng9IjM4Mi43MTk5OTk5OTk5OTk5NyIgcnk9IjI1Mi43MiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[430.56,898.5600000000001,936,1664],"zoomedBox":[430.56,898.5600000000001,936,1664],"label":"糖画与面塑体验","url":null,"text":"### 糖画与面塑体验\n**糖画与面塑在这里为什么先被称为体验？**\n2025开幕报道把糖画、面塑列为非遗展示体验，重点是艺人与游客在台面前如何相遇，而不只是货物售卖。图中用操作手、成品和观看者构成近景关系。摊棚、作品题材与人物均为创作，没有交易证据，因此不能为这些物件添加价格或真实摊主姓名。\n\n2025文旅厅供稿记录糖画、面塑等非遗展示体验；此图为体验摊而非已核实售卖交易。\n\n资料：2025开幕报道文字；无摊位近照\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-sq-hst-04-sugar-drawing","object-sq-hst-04-dough-figures"],"label_anchor_points":[1297.92,748.8000000000001],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1297.92,"anchorY":748.8000000000001,"labelX":1297.92,"labelY":683.8000000000001,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-sq-hst-04-sugar-drawing":{"id":"object-sq-hst-04-sugar-drawing","parentId":"scene-sq-hst-04","imageSrc":"assets/scenes/sq-hst-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2NDAiIGN5PSI3MjAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,280,900,1000],"zoomedBox":[495,280,900,1000],"label":"台面上的糖画","url":null,"text":"### 台面上的糖画\n糖画是2025文旅供稿明确列出的展示体验项目。本图用台面上的透亮线形与一旁成品说明观看制作的情境；缺少该摊近照，具体图案、工具持法和制作次序是概念表达，不是工艺教学。\n- **它在庙会中的作用**：连接手作过程与游客观看\n- **记载与补全**：2025开幕报道文字；无摊位近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[640,720],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":780,"labelY":625,"anchorX":640,"anchorY":720,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-sq-hst-04-dough-figures":{"id":"object-sq-hst-04-dough-figures","parentId":"scene-sq-hst-04","imageSrc":"assets/scenes/sq-hst-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI5MjgiIGN5PSI1OTQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[392,568,797,1288],"zoomedBox":[392,568,797,1288],"label":"桌上的面塑小件","url":null,"text":"### 桌上的面塑小件\n面塑同样出现在2025非遗展示体验名单里。小件在桌面集中陈列，便于游客近看造型并与艺人交流；图中动物与人物的具体形象未对应真实作品，不能据此指认作者或地方专属样式。\n- **它在庙会中的作用**：让展示成果进入近距离交流\n- **记载与补全**：2025开幕报道文字；无摊位近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[928,594],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":788,"labelY":499,"anchorX":928,"anchorY":594,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-xy-pgs":{"id":"fair-xy-pgs","parentId":"54749336813040","label":"信阳","imageSrc":"assets/worlds/xy-pgs.webp","box":[935.49,1323.63,1225,1743.91],"zoomedBox":[935.49,1323.63,1225,1743.91],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzMwLjg4LDEwMjMuMzMgTDEzMzEuMDIsMTAyNi4xNCBMMTMyOS4wNiwxMDI2Ljc1IEwxMzI5LjI2LDEwMzAuMSBMMTMzMC43NSwxMDMxLjkyIEwxMzMxLjU2LDEwMzYuMTQgTDEzMzMuODIsMTAzOC44NiBMMTMzNi4zMiwxMDM4LjAxIEwxMzM3LjM0LDEwNDIuMTYgTDEzMzMuNjQsMTA0OC41IEwxMzM0LjEsMTA1My43OSBMMTMzMS4xMiwxMDU4Ljc5IEwxMzI5LjE1LDEwNTkuNTMgTDEzMjguNjEsMTA1Ny42IEwxMzI1Ljg3LDEwNTYuOTkgTDEzMjYuOTgsMTA2Mi42MyBMMTMyNy4wMSwxMDY2LjMgTDEzMzAuMSwxMDY3Ljc2IEwxMzMwLjU3LDEwNjkuMzUgTDEzMzMuNjUsMTA3Mi43NSBMMTMzNi45NiwxMDc0LjEgTDEzMzguODMsMTA3NyBMMTMzNi41NywxMDgwLjg4IEwxMzM0LjgsMTA4MS4zMSBMMTMzMi43NCwxMDg0Ljk2IEwxMzMyLjg0LDEwODguMjQgTDEzMzQuNTYsMTA4OS44MyBMMTMzNS45NywxMDg5LjYxIEwxMzM4LjI1LDEwOTEuMDYgTDEzNDAuMTksMTA5MS4wNCBMMTM0My41MywxMDkyLjY4IEwxMzQxLjg1LDEwOTYuNzYgTDEzNDEuNDQsMTEwMC43IEwxMzQzLjU0LDExMDIuNTggTDEzNDYuNTksMTEwMy42MiBMMTM0Ny4yMywxMTA1LjM2IEwxMzQ3LjEyLDExMDkuNDcgTDEzNDYuMzUsMTExMi42MSBMMTM0Ny42NywxMTE0Ljk1IEwxMzQ3Ljc1LDExMTguMTIgTDEzNTEuNTYsMTEyMS4yMSBMMTM1My4xMywxMTIwLjMxIEwxMzU0LjIxLDExMjEuMyBMMTM1OC42MiwxMTE5LjM0IEwxMzYwLjU0LDExMTQuOTkgTDEzNjIuMTIsMTExMy4wNyBMMTM2NS4yMiwxMTEyLjE2IEwxMzY1LjYxLDExMTQuNzkgTDEzNjkuNjQsMTExNy43NSBMMTM2OS45MywxMTIxLjQgTDEzNjguMTUsMTEyNC41MiBMMTM2OS4yOSwxMTI3LjQ2IEwxMzY5LjIsMTEzMS45MiBMMTM3MS42MSwxMTMzLjc4IEwxMzcyLjkyLDExMzYuOTYgTDEzNzIuOTUsMTEzOC44OSBMMTM3NC4xNywxMTQxLjAxIEwxMzc2LjAxLDExNDEuODIgTDEzODEuMTEsMTEzNy4yNyBMMTM4NS4zNSwxMTM3LjU5IEwxMzg3LjE5LDExMzYuNTYgTDEzODkuMjYsMTEzNi44MiBMMTM5MC4xNCwxMTM0LjYzIEwxMzkxLjc1LDExMzMuOTYgTDEzOTQuNDUsMTEzNC41NiBMMTM5NS4wNSwxMTMxLjcgTDEzOTYuODEsMTEyOS43NSBMMTQwMC41OCwxMTI5LjIyIEwxNDAyLjIyLDExMjQuNTYgTDE0MDIuMDgsMTEyMi41MSBMMTQwMy4zOCwxMTIwLjgyIEwxNDA2LjM5LDExMjEuNjMgTDE0MDguNzgsMTEyMS4yMSBMMTQwOS41OCwxMTE4Ljk2IEwxNDEyLjA3LDExMTguMjcgTDE0MTQuODUsMTExOS4xNSBMMTQxNy40NiwxMTIwLjgzIEwxNDE5LjgsMTEyMy4xOCBMMTQyMi42NSwxMTIxLjAzIEwxNDIyLjQ2LDExMjIuOTYgTDE0MjQuOTMsMTEyOC4xNSBMMTQyNy40OCwxMTMxLjM2IEwxNDI3LjkxLDExMzMuMTQgTDE0MzIuMjcsMTEzOS4xMyBMMTQzMy4yNywxMTQxLjM1IEwxNDM3LjI1LDExNDEuNDIgTDE0MzguNjcsMTE0MC43MSBMMTQ0NC4xMSwxMTQwLjY0IEwxNDQ4LjUzLDExNDMuMTcgTDE0NTEuNTcsMTE0My45MSBMMTQ1My40MiwxMTQyLjU2IEwxNDU2LjUyLDExNDMuNjYgTDE0NTcuMDYsMTE0NS42OSBMMTQ1OS4yNywxMTQ1LjI5IEwxNDYyLjIyLDExNDYuODUgTDE0NjMuMDMsMTE0NC42NyBMMTQ2NSwxMTQ1LjY3IEwxNDY3LjAxLDExNDMuOTIgTDE0NzAuMTgsMTE0NS4xMSBMMTQ3My45MSwxMTQzLjk4IEwxNDczLjA5LDExNDAuNDEgTDE0NzQuMSwxMTM4LjA1IEwxNDc2LjI5LDExMzguMDMgTDE0NzguMDYsMTE0My40OCBMMTQ4MC44MSwxMTQyLjc0IEwxNDgxLjc1LDExNDEuMTUgTDE0ODEuNiwxMTM4LjM3IEwxNDgyLjYzLDExMzcuNjYgTDE0ODUuOTgsMTEzOS4wMiBMMTQ4Ny44MiwxMTM4LjUyIEwxNDg4Ljc4LDExNDAuOTUgTDE0ODcuNjQsMTE0My41NiBMMTQ4OC4xMiwxMTQ1Ljk4IEwxNDg3LjMsMTE0Ny42MiBMMTQ4Ny4xOCwxMTUxLjM2IEwxNDg5LjQ5LDExNTMuMTMgTDE0ODguNTEsMTE1NC44OSBMMTQ4Ni4yNiwxMTU1LjY3IEwxNDg1LjYyLDExNjIuMjYgTDE0ODMuNDIsMTE2My4xNyBMMTQ4MS42NCwxMTY2LjI2IEwxNDgyLjI1LDExNjcuOSBMMTQ4MS4zOCwxMTcwLjE5IEwxNDgxLjQ5LDExNzMuNjcgTDE0ODMuNzgsMTE4NC43NCBMMTQ4NS45MiwxMTg2LjMxIEwxNDg2LjQsMTE4NS4wNiBMMTQ4OC43MywxMTg0LjgyIEwxNDkwLjI4LDExODEuMjYgTDE0OTMuMzgsMTE4MC43NyBMMTQ5NC4yNiwxMTc5LjIyIEwxNDk4Ljk3LDExNzkuOTMgTDE0OTkuNDgsMTE4MS42MyBMMTUwMS4xLDExODIuMDggTDE1MDEuODMsMTE4NC4zMSBMMTUwNC4zMSwxMTg3LjkgTDE1MDUuOSwxMTg4LjU4IEwxNTA5LjkxLDExODguMTEgTDE1MDkuMywxMTkyLjcgTDE1MTMuMTgsMTE5Mi4yMyBMMTUxNC4zMywxMTkzLjg5IEwxNTE3LjM4LDExOTIuNCBMMTUxOC44MywxMTkzLjEyIEwxNTIwLjY4LDExOTIuMzkgTDE1MjMuMzEsMTE5My45MSBMMTUyNC43OSwxMTkzLjg3IEwxNTIzLjg4LDExOTUuNzUgTDE1MjQsMTE5OC4zNiBMMTUyNS41OSwxMTk5Ljc0IEwxNTI1LjU3LDEyMDIuMDUgTDE1MjYuNzgsMTIwMi45OCBMMTUzMS4yMiwxMjAzLjM3IEwxNTMzLjMyLDEyMDUuMzggTDE1MzQuMzksMTIwNy44OSBMMTUzNi41OSwxMjA3LjE5IEwxNTM4LjMxLDEyMDMuOTcgTDE1NDIuOTUsMTIwMy41IEwxNTQzLjIyLDEyMDUuMjQgTDE1NDUuMSwxMjA1LjQ5IEwxNTQ2LjkyLDEyMDQuMzggTDE1NTIuMzYsMTIwMyBMMTU1NC40NywxMjA1LjQyIEwxNTU1LjEyLDEyMDMuNzUgTDE1NTkuNjYsMTE5OS42MiBMMTU2MS45MywxMTk5LjUgTDE1NjMuNjcsMTIwMy42MiBMMTU2Ni4xMSwxMjA1LjAxIEwxNTY2LjgxLDEyMDEuOSBMMTU2OC40NywxMjAxLjI0IEwxNTY2Ljc1LDExOTguNTcgTDE1NjguMzIsMTE5Ny40NSBMMTU3MC43OCwxMTkyLjMxIEwxNTcyLjE0LDExOTIuMjkgTDE1NzMuNjcsMTE5NC43IEwxNTc1LjY1LDExOTQuNTkgTDE1NzguOTIsMTE5Ni4xOCBMMTU4NC41NCwxMTk2LjY1IEwxNTgzLjkxLDExOTQuMjQgTDE1ODUuNjYsMTE5My45IEwxNTg3Ljc4LDExOTIgTDE1ODYuMzgsMTE4OS40OSBMMTU4Ny4yMywxMTg3LjA1IEwxNTg1Ljg0LDExODUuOTIgTDE1ODYuNTMsMTE4My4yNyBMMTU5MC40LDExODAuNjMgTDE1OTAuMDQsMTE3Ni4wOSBMMTU5MS44MiwxMTc1LjM0IEwxNTk3LjM5LDExNzQuODUgTDE1OTkuNzMsMTE3Ni4xNSBMMTYwMC4zOSwxMTgwLjkzIEwxNjAyLjc0LDExODIuNzkgTDE2MDIuNzYsMTE4NC4wNCBMMTYwNS40NSwxMTg0IEwxNjA2LjQ2LDExODUuOTcgTDE2MTAuOCwxMTg1LjgyIEwxNjA5Ljg1LDExODkuODkgTDE2MDcuNTMsMTE5NS4xIEwxNjA3Ljc2LDExOTcgTDE2MDYuNDEsMTIwMC44MSBMMTYwNy4yOCwxMjAyLjc0IEwxNjA3LjMsMTIwNi45OCBMMTYwNi4wNywxMjEwLjkzIEwxNjA3Ljk1LDEyMTUuMTkgTDE2MTAuMywxMjE1LjExIEwxNjEzLjk5LDEyMTYuMzMgTDE2MTUuNDQsMTIxOC40OSBMMTYxMy41OSwxMjIzLjEyIEwxNjE1LjQ2LDEyMjQuMSBMMTYxOS40MSwxMjIxLjI4IEwxNjIxLjgsMTIyMi4zNyBMMTYyMy4xMywxMjI0Ljg2IEwxNjI1LjQ3LDEyMjUgTDE2MjguMDQsMTIyMy4yNiBMMTYyOS42OSwxMjIwLjQ4IEwxNjMzLjMzLDEyMjEuMjYgTDE2MzYuNzksMTIxOS45NCBMMTYzOC42MiwxMjE3LjAxIEwxNjM5LjA1LDEyMTEuNDIgTDE2MzkuODMsMTIwOS44NCBMMTYzNy41NCwxMjA1LjI1IEwxNjM2LjQsMTE5OS41MSBMMTYzNy40NSwxMTk3LjkgTDE2MzkuOCwxMTk2Ljg1IEwxNjQxLjQ0LDExOTQuOTIgTDE2NDQuNzUsMTE5Mi42OCBMMTY0Ny4xMywxMTg3Ljg2IEwxNjQ3LjcsMTE4NS4xOCBMMTY0Ny4wNywxMTg0LjE5IEwxNjQ5LjA3LDExODAuNDMgTDE2NDkuMjgsMTE3OC40NSBMMTY1NS45NCwxMTc0LjM2IEwxNjU4LjA1LDExNzMuNiBMMTY1OC44MiwxMTcwLjU0IEwxNjU2LjI3LDExNjUuNTggTDE2NTcuNjEsMTE2NC43NiBMMTY1Ny45NywxMTYyLjAxIEwxNjU5LjcxLDExNTkuMzUgTDE2NjMuNDIsMTE1Ny4xIEwxNjY2LjU4LDExNTMuNTQgTDE2NzAuNjYsMTE1NC4yOCBMMTY3Mi44LDExNTEuMTYgTDE2NzYuMTQsMTE1MC4wNSBMMTY3Ni45NiwxMTQ4LjI5IEwxNjc5LjY4LDExNDYuMDMgTDE2ODMuMDEsMTE0NC41MSBMMTY4Ni40MiwxMTQwLjU5IEwxNjkwLjY0LDExMzkuNTUgTDE2OTMuODMsMTEzNS40MyBMMTY5Ni4zMSwxMTM1Ljg1IEwxNjk3LjcsMTEzNy42NCBMMTcwMC4yOCwxMTM3LjEzIEwxNzAxLjg5LDExMzguMjkgTDE3MDUuMSwxMTM4Ljg2IEwxNzA0LjY5LDExMzUuOTYgTDE3MDYuMTUsMTEzNC41OCBMMTcxMC4wNCwxMTM0LjU0IEwxNzExLjAzLDExMzMuMjkgTDE3MTQuNjYsMTEzNC45NyBMMTcxNS45LDExMzYuNTIgTDE3MTguNjYsMTEzNi43NSBMMTcxOS45NiwxMTM5LjA3IEwxNzIyLjkxLDExMzUuNjEgTDE3MjQuMTMsMTEzNi41MiBMMTcyNi41MywxMTMzLjUzIEwxNzI4LjA1LDExMzYuNDkgTDE3MzMuMTIsMTEzNS45NSBMMTczNi4wNSwxMTMyLjM0IEwxNzM3LjgyLDExMzIuMjcgTDE3MzguNzIsMTEyNy44MyBMMTczOC4zNywxMTI1Ljk3IEwxNzM2LjY2LDExMjMuODYgTDE3MzQuNTgsMTEyMi45OCBMMTczNS4wOSwxMTE1LjIyIEwxNzM1LjU4LDExMTIuMzMgTDE3MzcuODksMTEwOC45OSBMMTczOS43LDExMDMuMjEgTDE3MzguOTQsMTA5OS42OSBMMTczNy42LDEwOTguMDQgTDE3MzguMDQsMTA5NC42OSBMMTc0MC4yNiwxMDg4LjQ2IEwxNzQwLjUyLDEwODYuMTYgTDE3NDEuNzYsMTA4Ni40MiBMMTc0MS4xNCwxMDc5LjgyIEwxNzM5LjU4LDEwNzguODUgTDE3NDEuMTIsMTA3Ni45MyBMMTc0MC4wOSwxMDczLjkxIEwxNzQwLjY4LDEwNzIuMTIgTDE3NDMuMzYsMTA3MC4yNCBMMTc0My45MSwxMDY3LjU2IEwxNzQyLjAyLDEwNjYuMDYgTDE3NDAuOSwxMDYxLjI5IEwxNzQzLjI3LDEwNTMuNjUgTDE3NDMuMDQsMTA1MC43NSBMMTc0My43MiwxMDQ3LjQzIEwxNzQyLjI0LDEwNDQuMjQgTDE3NDAuMywxMDQxLjY5IEwxNzQwLjIsMTAzOC45OSBMMTczOC4zLDEwMzMuNTUgTDE3MzguNjYsMTAyNy4zNyBMMTczOS45NCwxMDI0LjI3IEwxNzM3Ljk4LDEwMjAuNzIgTDE3MzcuNDYsMTAxNy4zIEwxNzM1Ljk1LDEwMTYuODEgTDE3MzcuMjEsMTAxNC41IEwxNzM2Ljc2LDEwMDcuODMgTDE3MzUuNzUsMTAwNi45MyBMMTczNS41LDEwMDAuNDQgTDE3MzUuNzMsOTk2LjU0IEwxNzMzLjg4LDk5MS40IEwxNzMzLjksOTg4Ljk1IEwxNzMyLjAxLDk4Ny4xMiBMMTczMi43Nyw5ODUuNjUgTDE3MzIuNjUsOTgxLjczIEwxNzI5LjE2LDk4MS4wOCBMMTczMC45MSw5NzguNDQgTDE3MzIuMzcsOTc4LjAyIEwxNzMyLjgsOTc0LjIxIEwxNzMxLjA5LDk3Mi4yNyBMMTczMC44NSw5NzAuNzEgTDE3MjcuMDYsOTcwLjc3IEwxNzI1LjY4LDk3MS4zNiBMMTcyNS45OSw5NjkuNiBMMTcyNy44LDk2Ny43IEwxNzMwLjgyLDk2NS45MiBMMTczMS4zNiw5NjIuMTQgTDE3MzUuNzksOTU5LjAzIEwxNzM3LjgyLDk1Ni41OCBMMTc0MS40MSw5NTYuNTIgTDE3MzguMTMsOTU0LjE4IEwxNzM0LjMxLDk1NC40OCBMMTczMy41Niw5NTYuNDMgTDE3MjguNjMsOTYzLjI5IEwxNzI1LjczLDk2NC42IEwxNzI0LjU5LDk2Ni4xNSBMMTcyNC44OCw5NzEuNSBMMTcyMS41Niw5NzEuMjYgTDE3MTcuODUsOTc1LjA3IEwxNzE0Ljk1LDk3OC44MiBMMTcxMy41NSw5NzguOTIgTDE3MTQuNyw5NzYuMjggTDE3MTQuMzcsOTc0LjE4IEwxNzExLjcsOTcwLjU3IEwxNzA5LjU4LDk3NS44NiBMMTcwNi4xNSw5NzcuMTMgTDE3MDEuODgsOTc1LjAzIEwxNjk4LjQ3LDk3Mi44MyBMMTY5Ni43NSw5NzQuNiBMMTY5Ni43OCw5NzYuMTcgTDE2OTguMzksOTc3LjkyIEwxNjk4LjAxLDk3OC45OCBMMTY5My43LDk3OS4zOCBMMTY5NC43OSw5ODMgTDE2OTQuNTgsOTg1LjM4IEwxNjkzLjQyLDk4Ny40NSBMMTY5Mi4wMSw5OTIuMzIgTDE2OTAuMDEsOTkyLjQ3IEwxNjkwLjMsOTg3LjkxIEwxNjg4LDk5MC40OCBMMTY4NC41Miw5OTMuMjIgTDE2ODAuMjYsOTg4LjU3IEwxNjc2Ljc5LDk5MC4wOSBMMTY3Mi42MSw5OTMuNzcgTDE2NzAuNjgsOTkyLjc2IEwxNjczLjU5LDk5MS4xMyBMMTY3My4zMSw5ODkuNTUgTDE2NjkuNDgsOTg4Ljg1IEwxNjY3LjYzLDk4NS42MSBMMTY2NC45NSw5ODQuOTIgTDE2NjUuMTIsOTgzLjYgTDE2NjMuNTEsOTgyLjk3IEwxNjYxLjEyLDk3NS42MSBMMTY2MC4xMSw5NzMuNDcgTDE2NTcuNzUsOTcwLjg4IEwxNjU3Ljc3LDk2OC45OCBMMTY1Ni4zNyw5NjkuMDkgTDE2NTYuMzksOTY3LjI2IEwxNjU0LjEzLDk2Ny4yIEwxNjQ5LjA4LDk2NC4zOSBMMTY0OS45OCw5NjEuOTUgTDE2NDguMjgsOTYxLjUyIEwxNjQ3LjcxLDk1OS45MSBMMTY0NS4xNSw5NTkuNzYgTDE2NDMuNjMsOTYwLjg2IEwxNjQ0LjE1LDk1OC4yMSBMMTY0My45Myw5NTQuODEgTDE2NDIuMzcsOTU0LjM4IEwxNjQwLjIzLDk1Ni43MyBMMTYzOS40Myw5NTUuNyBMMTYyOC40OSw5NTcuODkgTDE2MjYuNzgsOTU3LjU3IEwxNjI3LjQ0LDk1OS4zNCBMMTYyMy43MSw5NTkuNTggTDE2MjIuMjYsOTU3LjU1IEwxNjIyLjk5LDk1Ni4yNiBMMTYyNC45Niw5NTUuNzcgTDE2MjIuNSw5NTQuNDYgTDE2MjMuOTcsOTUyLjkxIEwxNjIyLjgxLDk1MS43OCBMMTYyMS45NCw5NTMuMzkgTDE2MjAuODksOTUxLjM5IEwxNjE2Ljc0LDk1NC4wNyBMMTYxNC40LDk1Mi40OSBMMTYxNS42Myw5NTAuOTggTDE2MTQuNDEsOTUwLjE4IEwxNjEyLjI5LDk1MC41NyBMMTYwOS4yLDk1My45NCBMMTYwOS42NSw5NTEuMjMgTDE2MDYuMzgsOTUxLjcgTDE2MDQuMyw5NTAuOTQgTDE2MDIuNTksOTQ4LjQxIEwxNTk5LjQ1LDk0Ny44OCBMMTU5NS4wOCw5NTEuMzYgTDE1OTMuODYsOTUzLjYgTDE1OTIuMjMsOTUyLjA0IEwxNTkyLjg2LDk0OS4yNyBMMTU4OS45Miw5NDcuMzggTDE1ODcuNDQsOTQ3LjQxIEwxNTg1LjE3LDk0NC41OSBMMTU4NC44OSw5NDEuNDMgTDE1ODMuNDksOTQwLjcgTDE1NzguNyw5NDIuNSBMMTU3NS44NSw5MzkuOTkgTDE1NzIuMDksOTM4LjA3IEwxNTYzLjcsOTM1LjY0IEwxNTU4LjQ4LDkzNS40OSBMMTU1My45Miw5MzcuOTEgTDE1NTEuMjQsOTM4IEwxNTQ5LjY4LDkzNi45OCBMMTU0Ny44NCw5MzcuOTkgTDE1NDcuOTQsOTQxLjIxIEwxNTQ2LjAzLDk0NS4xMyBMMTU0NC43NSw5NDUuNDEgTDE1NDAuNjEsOTQzLjYyIEwxNTM5LjQyLDk0NC43MiBMMTUzMi45OSw5NDMuOTEgTDE1MzEuMzcsOTQ2LjU2IEwxNTI5LjkzLDk0Ni45NCBMMTUyNy42NSw5NDUuOTkgTDE1MjYuNyw5NDcuNDcgTDE1MjcuMTQsOTUyLjY5IEwxNTI5LjI3LDk1Mi44NSBMMTUzMC42OCw5NTYuMTIgTDE1MzAuNDQsOTU4LjQyIEwxNTI2LjEsOTYxLjQzIEwxNTI1LjIyLDk2My43MSBMMTUyNi4zLDk2Ni4zNyBMMTUyNy41NSw5NjYuODQgTDE1MjYuODMsOTY5LjkgTDE1MjMuODgsOTY5LjggTDE1MTkuNzksOTY2LjM0IEwxNTE2Ljc0LDk2Ny45NCBMMTUxNS41LDk2Ny4zOSBMMTUxNC41Niw5NjIuMzcgTDE1MTIuNCw5NjEuODUgTDE1MTAuMzQsOTYzLjggTDE1MTAuMyw5NjcuODQgTDE1MDUuNTUsOTY4LjM4IEwxNTAzLjU1LDk2NS42MSBMMTUwMC41OSw5NjUuNDYgTDE0OTQuMDcsOTY5LjUyIEwxNDkyLjQsOTY4Ljg5IEwxNDg3LjgsOTY4LjY2IEwxNDg1LjcsOTY5Ljk0IEwxNDg1LjM4LDk3Mi44OCBMMTQ4Ni4zNiw5NzQuODcgTDE0ODUuNzUsOTc5LjMgTDE0ODguNDEsOTgxLjk1IEwxNDg3Ljc1LDk4NC4xIEwxNDg1LjQ5LDk4Ni4zNSBMMTQ4Ni42OSw5ODguNjIgTDE0OTEuNzksOTkwLjI5IEwxNDk3LjY0LDk5NC40OSBMMTUwMC4xLDk5Ny4yNiBMMTQ5OS41LDk5OS45MiBMMTQ5NS41OCwxMDAxLjEyIEwxNDk0LjksMTAwMi43NSBMMTQ5NS41MSwxMDA1LjIyIEwxNDkzLjE0LDEwMDUuNzkgTDE0OTIuNjIsMTAwOC43NCBMMTQ4OS43NywxMDEyLjI5IEwxNDg2LjU5LDEwMTMuNDEgTDE0ODcuODIsMTAxNS4yMiBMMTQ4NC4yNywxMDE1LjY4IEwxNDgxLjgzLDEwMTkuNjIgTDE0NzguODksMTAyMC4yOSBMMTQ3Ni40MSwxMDE3LjQzIEwxNDcxLjk3LDEwMTYuNzggTDE0NzAuODEsMTAxNy4xNCBMMTQ3MC41NiwxMDIwLjE2IEwxNDY5LjIsMTAyMC40OSBMMTQ2Ni4zMiwxMDE4LjQ1IEwxNDYzLjMzLDEwMjEuMzYgTDE0NjAuNjcsMTAxOS43NCBMMTQ1OC45NywxMDE5LjU1IEwxNDU3LjUyLDEwMjEuODYgTDE0NTIuOSwxMDE4LjY0IEwxNDQ5LjA1LDEwMTguOTQgTDE0NDcuNzcsMTAxNy40MiBMMTQ0Ny40NiwxMDE0LjA5IEwxNDQzLjkxLDEwMTEuOTEgTDE0NDMuNzQsMTAwNi4zNCBMMTQ0Mi42NywxMDAyLjM4IEwxNDM3LjQ3LDEwMDAuNTIgTDE0MzMuNDcsMTAwMi40MSBMMTQzMi4xNSwxMDAxLjI4IEwxNDMxLjA0LDk5Mi43NyBMMTQzMi40NSw5OTAuMTYgTDE0MzAuNDcsOTkwLjE3IEwxNDI4Ljc5LDk5Mi4zNSBMMTQyNS45OCw5ODguODkgTDE0MjQuNzQsOTg2LjE1IEwxNDI1LjAzLDk4Mi45NyBMMTQyMy45OCw5ODEuMTcgTDE0MjAuODUsOTgyLjE4IEwxNDE5Ljc5LDk4NC4wMyBMMTQxNi42NCw5ODQuMTkgTDE0MTYuMDgsOTgyLjMxIEwxNDE3LjY5LDk4MS4yMSBMMTQxNy41MSw5NzguODcgTDE0MTUuNDcsOTc4Ljg1IEwxNDE1LjMxLDk3NC44NyBMMTQxNC4zNCw5NzMuNDUgTDE0MDkuNzEsOTc0LjcyIEwxNDA4LjksOTc4LjU4IEwxNDA5LjIsOTgwLjQyIEwxNDA3Ljc3LDk4MS4yMyBMMTQwMy44OCw5ODAuNCBMMTM5OS4zMyw5ODMuNjEgTDEzOTYuNTIsOTgyLjc0IEwxMzk0LjIzLDk4Mi45NCBMMTM5My4zMyw5ODIuMDIgTDEzOTIuOTIsOTc2LjQgTDEzOTQuNTgsOTc2LjAzIEwxMzkyLjUyLDk3My4yNCBMMTM5MS41Nyw5NzAuNDMgTDEzOTEuODgsOTY3Ljg3IEwxMzkwLjY4LDk2NS42NCBMMTM5MC43OSw5NjMuODYgTDEzODguNzMsOTYyLjkyIEwxMzg4LjI4LDk2Ni41IEwxMzgwLjkzLDk2OC4xNSBMMTM3OS41Miw5NzAuMDEgTDEzNzQuNzcsOTcwLjk2IEwxMzcxLjAyLDk3MC41NSBMMTM2OS41Myw5NjguNTQgTDEzNjkuNDQsOTY1Ljc1IEwxMzY2LjQ3LDk1OS4wNyBMMTM2Ni45LDk1NC40OSBMMTM2NS40OCw5NTQuMDMgTDEzNjMuNTIsOTUwLjQ2IEwxMzYzLjAyLDk0Ny44OSBMMTM2MS41Myw5NDcuMzMgTDEzNTguMDQsOTQ3Ljk4IEwxMzU2Ljc5LDk0Ny41IEwxMzU0LjE2LDk0My45MyBMMTM1Mi43NCw5NDMuNjkgTDEzNDkuOTYsOTQ1LjE2IEwxMzQ4LjY5LDk0NC4wNSBMMTM0NS41LDk0NC4wMSBMMTM0NC4zLDk0NC43NiBMMTM0NC4yOCw5NDguNjggTDEzNDMuMTksOTQ4LjkgTDEzNDEuNDcsOTQ5LjYxIEwxMzM4LjUzLDk1Mi4xOCBMMTMzNy4wOSw5NTYuNzYgTDEzMzQuNjYsOTU4LjMzIEwxMzMzLjU1LDk2MC45MSBMMTMzNS42Myw5NjMuMyBMMTMzNC40OSw5NjMuOTYgTDEzMzIuODIsOTY5Ljc4IEwxMzMzLjc0LDk3NC4wNSBMMTMzMy4yOSw5NzguNDMgTDEzMzEuNyw5NzkuNjEgTDEzMjkuNDIsOTc5LjYzIEwxMzI4Ljc0LDk4Mi4zNSBMMTMyNy4zOSw5ODAuNzEgTDEzMjcuNDYsOTgzLjI3IEwxMzI2LjQxLDk4Ni4yOCBMMTMyMy42Myw5ODkuNjQgTDEzMjUuMTUsOTkwLjU1IEwxMzI4LjI5LDk5MS45OCBMMTMyOS4zMiw5OTYuMDEgTDEzMzEuMzgsOTk2LjcxIEwxMzMxLjY2LDk5OCBMMTMyOS45LDEwMDEuMzggTDEzMzEuMzMsMTAwMy4zNCBMMTMzMy4wMSwxMDAxLjQ0IEwxMzM0LjYxLDEwMDEuMzcgTDEzMzQuOTYsMTAwMy44MyBMMTMzMi42NiwxMDA1LjI4IEwxMzMxLjc4LDEwMDcuNTkgTDEzMzEuNzgsMTAxMC43MyBMMTMzMy45LDEwMTIuNzIgTDEzMzUuNTYsMTAxNS43NCBMMTMzNC42NSwxMDE2LjgzIEwxMzM0LjQ4LDEwMjAuNzUgTDEzMzQuODEsMTAyMi41OCBMMTMzMi42MiwxMDIyLjQgTDEzMzAuODgsMTAyMy4zMyBaIE0xMzM0LjQ4LDEwMjAuNzUgTDEzMzQuNjUsMTAxNi44MyBMMTMzMC43NywxMDE4Ljk2IEwxMzI5LjkxLDEwMjAuODUgTDEzMzAuODgsMTAyMy4zMyBMMTMzMi42MiwxMDIyLjQgTDEzMzEuODIsMTAxOS43OSBMMTMzMi42NiwxMDE4Ljk2IEwxMzM0LjQ4LDEwMjAuNzUgWiIgZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==","url":null,"text":"### 濮公山三月三庙会\n濮公山三月三从地方庙会延续为文化节与游园会。旱船把游客中心和自然博物馆连接起来，烧饼、烙画与奇石又让地方物产进入赶会体验。这里既能看民俗巡游，也能看机器人互动，但各种材料的证据年代必须分开。","childrenIds":["scene-xy-pgs-01","scene-xy-pgs-03","scene-xy-pgs-04"],"label_anchor_points":[1545.55,1066.93],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1545.55,"anchorY":1066.93,"labelX":1545.55,"labelY":1001.9300000000001,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-xy-pgs-01":{"id":"scene-xy-pgs-01","parentId":"fair-xy-pgs","imageSrc":"assets/scenes/xy-pgs-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iODQ4LjY0IiBjeT0iMjU3LjQiIHJ4PSIzNjYuMDgwMDAwMDAwMDAwMDQiIHJ5PSIxODIuNTE5OTk5OTk5OTk5OTgiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[74.88,482.55999999999995,439.91999999999996,1214.72],"zoomedBox":[74.88,482.55999999999995,439.91999999999996,1214.72],"label":"游客中心南门会场","url":null,"text":"### 游客中心南门会场\n**游客中心南门为什么成为新的庙会到达点？**\n开敞场地把主舞台、围观游客与临时集市聚在一起，远处现代建筑提示这是一场在公园内组织的当代游园会。地点来自2026官方文字，建筑和舞台缺少可用现场图。插画用空间层次帮助阅读场所功能，不把山体轮廓、花木或建筑外观当作实测复原。\n\n官方报道将主舞台定位在濮公山矿山公园游客中心南门，记载人潮和彩旗。\n\n资料：2026年4月17日游园会官方文字；无可用现场图片\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xy-pgs-01-main-stage"],"label_anchor_points":[898.5600000000001,205.92],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":898.5600000000001,"anchorY":205.92,"labelX":898.5600000000001,"labelY":140.92,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xy-pgs-01-main-stage":{"id":"object-xy-pgs-01-main-stage","parentId":"scene-xy-pgs-01","imageSrc":"assets/scenes/xy-pgs-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSI0MDUiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[202,424,607,1144],"zoomedBox":[202,424,607,1144],"label":"游客中心南门主舞台","url":null,"text":"### 游客中心南门主舞台\n2026官方报道明确游客中心南门设置主舞台，可以据此确认活动节点。画中的台口、背景、灯架与尺度没有对应实景近照，是解释“表演面向人群”关系的概念布置，不能当成当届舞美图纸。\n- **它在庙会中的作用**：集中开场与互动观看\n- **记载与补全**：2026年4月17日游园会官方文字；无可用现场图片。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,405],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":310,"anchorX":784,"anchorY":405,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xy-pgs-03":{"id":"scene-xy-pgs-03","parentId":"fair-xy-pgs","imageSrc":"assets/scenes/xy-pgs-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNTY1Ljc2MDAwMDAwMDAwMDEiIGN5PSI1OTkuMDQiIHJ4PSIzNjYuMDgwMDAwMDAwMDAwMDQiIHJ5PSIyODAuNzk5OTk5OTk5OTk5OTUiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[318.24,199.68,879.8399999999999,931.8400000000001],"zoomedBox":[318.24,199.68,879.8399999999999,931.8400000000001],"label":"跟着旱船与鼓乐","url":null,"text":"### 跟着旱船与鼓乐\n**旱船和鼓点怎样把演员与围观者联系起来？**\n船形道具包围演员身体，旁边鼓手通过击鼓形成表演配合，观众则靠近观察并回应。官方报道记载旱船随鼓点摇摆及唱词引来喝彩，足以说明声音和动作相关。具体服饰、鼓具、船体花样没有近照，不能将插画里的红绿配色认定为本地固定传统。\n\n官方记录旱船随鼓点摇摆，演员表情和唱词引起观众喝彩。\n\n资料：2026游园会现场文字；服饰道具缺近照\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xy-pgs-03-dry-boat-skirt","object-xy-pgs-03-hand-drum"],"label_anchor_points":[465.9200000000001,402.48],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":465.9200000000001,"anchorY":402.48,"labelX":465.9200000000001,"labelY":337.48,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xy-pgs-03-dry-boat-skirt":{"id":"object-xy-pgs-03-dry-boat-skirt","parentId":"scene-xy-pgs-03","imageSrc":"assets/scenes/xy-pgs-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3NTIiIGN5PSI1NTgiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[356,392,761,1112],"zoomedBox":[356,392,761,1112],"label":"旱船的围身船体","url":null,"text":"### 旱船的围身船体\n旱船项目及随鼓点摇摆的描述来自2026官方报道。围在身体外的船形道具在图中说明人如何扮演行船，但具体结构、花饰与裙摆颜色为概念设计，没有证据说明当地队伍使用同样样式。\n- **它在庙会中的作用**：把步行动作转为船形视觉\n- **记载与补全**：2026游园会现场文字；服饰道具缺近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[752,558],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":892,"labelY":463,"anchorX":752,"anchorY":558,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xy-pgs-03-hand-drum":{"id":"object-xy-pgs-03-hand-drum","parentId":"scene-xy-pgs-03","imageSrc":"assets/scenes/xy-pgs-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjk2IiBjeT0iNTQ5IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[346,880,751,1600],"zoomedBox":[346,880,751,1600],"label":"伴奏鼓","url":null,"text":"### 伴奏鼓\n报道确认旱船表演有鼓点，插画用鼓手与鼓面相对的动作解释伴奏关系。鼓具外形、鼓槌与手势是补全内容；没有经核听录音，因此不能据画面写出节拍、曲牌或者声称播放的是现场原声。\n- **它在庙会中的作用**：连接行进动作与声响节奏\n- **记载与补全**：2026游园会现场文字；服饰道具缺近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1296,549],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1156,"labelY":454,"anchorX":1296,"anchorY":549,"labelWidth":72,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-xy-pgs-04":{"id":"scene-xy-pgs-04","parentId":"fair-xy-pgs","imageSrc":"assets/scenes/xy-pgs-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI4OS42IiBjeT0iNjEzLjA4IiByeD0iMzc0LjQiIHJ5PSIzMjIuOTE5OTk5OTk5OTk5OTYiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[290.16,915.2,936,1664],"zoomedBox":[290.16,915.2,936,1664],"label":"葫芦烙画与包信烧饼","url":null,"text":"### 葫芦烙画与包信烧饼\n**包信烧饼和葫芦烙画为什么要分成两种摊位功能？**\n一种物件进入口腹消费，另一种供观看、选择与手作交流，二者共同构成报道中的地方集市。图中让纸包食品和绘有纹样的葫芦相邻，方便比较不同陈列方式。实际摊位间距、商品包装以及是否由同一经营者经营没有证据，不能把概念并置当成现场布局。\n\n现场报道列出包信烧饼和葫芦烙画等摊位品类；具体摊位摆放、包装与烙画图案未核实。\n\n资料：2026年4月17—19日现场报道文字；摊位外观待补\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-xy-pgs-04-baked-bread-bag","object-xy-pgs-04-pyrography-gourd"],"label_anchor_points":[1198.08,570.96],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1198.08,"anchorY":570.96,"labelX":1198.08,"labelY":505.96000000000004,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-xy-pgs-04-baked-bread-bag":{"id":"object-xy-pgs-04-baked-bread-bag","parentId":"scene-xy-pgs-04","imageSrc":"assets/scenes/xy-pgs-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMzc2IiBjeT0iNjg0IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[482,880,887,1600],"zoomedBox":[482,880,887,1600],"label":"包信烧饼纸包","url":null,"text":"### 包信烧饼纸包\n包信烧饼被2026现场报道列为濮山集市食品，品类具有地方依据。由于没有可核验的完整外观近照，图中以纸包呈现；包装字样、数量和邻近葫芦摊的关系是设计，不对应具体商户品牌。\n- **它在庙会中的作用**：区分食品经营与工艺展示\n- **记载与补全**：2026年4月17—19日现场报道文字；摊位外观待补。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1376,684],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1236,"labelY":589,"anchorX":1376,"anchorY":684,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-xy-pgs-04-pyrography-gourd":{"id":"object-xy-pgs-04-pyrography-gourd","parentId":"scene-xy-pgs-04","imageSrc":"assets/scenes/xy-pgs-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2MjQiIGN5PSI0NDEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[238,264,643,984],"zoomedBox":[238,264,643,984],"label":"烙画葫芦","url":null,"text":"### 烙画葫芦\n葫芦烙画同样出现在2026集市报道中，可作为地方手作入口。图中用浅色葫芦和深色纹样解释表面装饰关系，但没有记录这一位艺人及其作品，具体图案、工具和操作姿态不作工艺档案。\n- **它在庙会中的作用**：近距离观看与手作交流\n- **记载与补全**：2026年4月17—19日现场报道文字；摊位外观待补。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[624,441],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":764,"labelY":346,"anchorX":624,"anchorY":441,"labelWidth":96,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-zk-th":{"id":"fair-zk-th","parentId":"54749336813040","label":"周口","imageSrc":"assets/worlds/zk-th.webp","box":[555.29,1395.36,846.41,1689.5],"zoomedBox":[555.29,1395.36,846.41,1689.5],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xNTQ3LjA5LDgzOC43NCBMMTU0Ny4wNyw4MzcuMTMgTDE1NDguNzgsODMxLjk0IEwxNTQ4LjE1LDgyOC45OSBMMTU0OS41Myw4MjcuNCBMMTU1Mi42Miw4MjYuOTYgTDE1NTQuMDksODIzLjYxIEwxNTYwLjA1LDgyNS4wMSBMMTU2MC41Nyw4MjguMDYgTDE1NjIuOTQsODI5LjEgTDE1NjQuOTksODMwLjk0IEwxNTY0LjY0LDgzNS4wNCBMMTU2OC42OSw4MzYuMjMgTDE1NzAuODMsODM3Ljc5IEwxNTc0LjIsODM4LjczIEwxNTc2LjEzLDgzNy40IEwxNTc3LjI1LDgzOS4zOCBMMTU3OS4xNyw4MzguODIgTDE1ODcuMzUsODM5LjU2IEwxNTk1LjI5LDgzOS4yMyBMMTU5OC4wNSw4MzguMjUgTDE1OTguOSw4MzMuODcgTDE2MDMuNTUsODMwLjgzIEwxNjA1Ljk0LDgzMi42MyBMMTYwOC42OCw4MjkuNzUgTDE2MTEuMDYsODI5LjYzIEwxNjEyLjgxLDgyNy40NCBMMTYxNi42MSw4MjguMjcgTDE2MTcuMTksODI3LjExIEwxNjIxLjEsODI4LjM0IEwxNjIxLjU4LDgyNS44NiBMMTYyMy4yLDgyNi4yNiBMMTYyMi45NSw4MjEuNDEgTDE2MjEuODYsODE4LjAzIEwxNjIyLjMxLDgxMi43MiBMMTYyNy44OSw4MTAuNDQgTDE2MjUuOTgsODA4Ljg0IEwxNjI1Ljk5LDgwNy42MSBMMTYyOC45LDgwNC45NCBMMTYyOC41Miw4MDEuNTUgTDE2MzAuNDcsNzk5LjE1IEwxNjMwLjYzLDc5Ni44MiBMMTYyOS4yOSw3OTMuOCBMMTYyOS41MSw3OTAuNzggTDE2MzEuNzYsNzkwLjExIEwxNjM0LjI1LDc5MC43NyBMMTYzMy45OSw3ODcuNzQgTDE2MzUuMTYsNzgyLjE3IEwxNjMyLjAyLDc4MS41IEwxNjMxLjc0LDc3Ny4wMyBMMTYzMC4xOCw3NzYuMDUgTDE2MzAuNzYsNzc0LjE5IEwxNjI1Ljk2LDc3NC4yNCBMMTYyNS40MSw3NzIuODUgTDE2MjguNDYsNzY3LjI4IEwxNjI2LjE4LDc2My41MyBMMTYyNS44Niw3NjAuNTIgTDE2MjYuNSw3NTguMjUgTDE2MjYuMDEsNzU2LjU3IEwxNjI3LjQyLDc1Ni41MyBMMTYyNy41NSw3NTQuNTkgTDE2MjkuNjksNzU2LjkzIEwxNjMxLjU0LDc1Ni4zNyBMMTYzMi4xMiw3NDkuNzUgTDE2MzEuMTcsNzQ5LjMyIEwxNjMyLjU3LDc0Ny4xNiBMMTYzMS40Nyw3NDQuMzYgTDE2MzUuNDYsNzM5LjY2IEwxNjQwLjgzLDc0My41MSBMMTY0MS4xNSw3NDQuNTIgTDE2NDIuNzYsNzQxLjE5IEwxNjQyLjA4LDczOS40NiBMMTY0NC41MSw3MzUuNTQgTDE2NDUuODgsNzMyLjEgTDE2NTMuNzUsNzI5Ljc0IEwxNjU1LjI5LDczMS44MiBMMTY1Ny43NCw3MzEuNjggTDE2NjAuNjksNzMwLjI4IEwxNjYyLjcxLDczMi44OCBMMTY2NS45Niw3MzAuNzYgTDE2NzAuNTEsNzMwLjExIEwxNjcxLjc2LDczMC45MyBMMTY3My4wMiw3MjcuNjYgTDE2NzkuNjIsNzI3LjI1IEwxNjg2LjksNzI1LjY3IEwxNjg0LjEyLDcxNi40OCBMMTY4Mi42Nyw3MTQuNzcgTDE2NzkuNzIsNzA5LjIxIEwxNjc5Ljg4LDcwNS44NCBMMTY3OS4zNCw3MDIuMjggTDE2ODAuNzYsNzAyLjExIEwxNjc4LjcxLDY5OS41NCBMMTY3OS43MSw2OTUuNzggTDE2NzguNTIsNjkyLjE0IEwxNjc2LjMxLDY4OC45IEwxNjc0LjY3LDY4Ny43NyBMMTY3My43Niw2ODQuOCBMMTY3Mi40Nyw2ODMuMzcgTDE2NzIuODYsNjgxLjQzIEwxNjc2LjA3LDY3OS40OSBMMTY3Ny42Myw2ODAuNjQgTDE2ODIuMDksNjgyLjQ2IEwxNjgzLjQsNjc3LjY3IEwxNjgzLjgsNjc0LjIzIEwxNjgyLjU0LDY3Mi40IEwxNjg0LjIzLDY3MS41OCBMMTY4NC4zNiw2NjguNzMgTDE2ODYuMjEsNjY3LjYgTDE2ODUuNzIsNjYxLjY3IEwxNjgzLjM0LDY1OS42OCBMMTY4MC40OSw2NjEuNjUgTDE2NzcuODMsNjYxLjQ0IEwxNjc1LjU2LDY1OS40NyBMMTY3Mi42Nyw2NjAuNzYgTDE2NzEuNSw2NTkuNjggTDE2NjkuMjcsNjU5LjgxIEwxNjY5LjM1LDY1Ni44OCBMMTY3MSw2NTYuODUgTDE2NzAuODcsNjU0LjE4IEwxNjczLjQ5LDY1MS45OSBMMTY3MS44NCw2NTAuOTYgTDE2NzIuMzcsNjQ4LjA5IEwxNjczLjc2LDY0Ni44MSBMMTY3My42LDY0My45NCBMMTY3NS4xOCw2NDIuODkgTDE2NzUuNDYsNjM3LjQ5IEwxNjc3LjIyLDYzNi44IEwxNjc3LjczLDYzNC43MSBMMTY3Ni40MSw2MzQuMTYgTDE2NzguMDQsNjI5LjM0IEwxNjgwLjY1LDYyOC41OCBMMTY3OS41OSw2MjYuMTggTDE2ODIuMjQsNjI0LjAyIEwxNjgzLjQ0LDYyNC43NSBMMTY4Ny4zNiw2MjQuMjYgTDE2ODguOCw2MjMuMzcgTDE2ODguNDUsNjIxLjA4IEwxNjg5LjUsNjE3Ljk1IEwxNjg3LjMxLDYxMi40OSBMMTY4NC42LDYxMS43NCBMMTY4My4xMyw2MTIuNzIgTDE2NzQuNDYsNjExLjk4IEwxNjY4LjgxLDYxMi40IEwxNjY5LjU0LDYxNC43IEwxNjY5Ljk4LDYyMC44IEwxNjY5LjU4LDYyMy4wMiBMMTY2Ny4yOSw2MjYuNjUgTDE2NjYuMjcsNjI3LjMxIEwxNjYzLjEsNjI3LjE5IEwxNjYxLjE0LDYyOC4wOCBMMTY1OC41Niw2MjcuNTkgTDE2NTMuNTQsNjMwLjIxIEwxNjUyLjgzLDYzNC41MSBMMTY0OS4yLDYzNC43NCBMMTY0Mi4yNCw2MzMuMDggTDE2MzcuMTIsNjMwLjA0IEwxNjM0LjU2LDYyNy44OSBMMTYzMi4xNSw2MjcuNDUgTDE2MjkuNTgsNjMwIEwxNjI2Ljg2LDYzMC40OSBMMTYyNS4zMiw2MzIuNTUgTDE2MjEuNSw2MzIuNDUgTDE2MjAuOTYsNjMwLjY4IEwxNjIyLjA2LDYyNy40NiBMMTYyMC43Myw2MjcuMTUgTDE2MTUuMSw2MjguMSBMMTYxNC4wNyw2MjkuNTcgTDE2MTQuMzYsNjMyLjY5IEwxNjEzLjk0LDYzNS41NiBMMTYxMS44LDYzNy4yMiBMMTYwOS44MSw2MzcuNDQgTDE2MDQuOCw2MzQuMDkgTDE2MDMuMjQsNjM0LjQ0IEwxNjA0Ljk4LDYzNy4zOCBMMTYwMi4xMSw2NDEuMDggTDE1OTkuNjYsNjQyLjc1IEwxNTk0LjQsNjQyLjg4IEwxNTkzLjI0LDY0MS4wNCBMMTU4OS44Myw2MzkuOTUgTDE1ODguMDksNjQwLjQgTDE1ODYuNDgsNjQzLjI3IEwxNTg2LjYyLDY0Ni4wMiBMMTU4Mi40OCw2NDYuNjUgTDE1NzkuNjIsNjQ2LjE5IEwxNTc1LjkyLDY0NC43NCBMMTU3NS44NCw2NDIuOTEgTDE1NzcuMzUsNjQxLjI4IEwxNTc4LjgxLDYzNy41OCBMMTU3OC4xNyw2MzYuMjcgTDE1NzkuNjMsNjMzLjcgTDE1ODIuMSw2MzAuODYgTDE1ODAuNTMsNjI4LjMxIEwxNTgwLjQxLDYyNi40MSBMMTU4Mi4xMyw2MjUuOTMgTDE1ODYuNzYsNjI2LjQzIEwxNTg5LjI4LDYyNS43NSBMMTU5Mi43Myw2MjAuMSBMMTU5Mi44LDYxOC45MSBMMTU5MC42Niw2MTcuMDMgTDE1ODguNDEsNjE2LjUzIEwxNTg5LjE0LDYxMy44NSBMMTU4OC42OSw2MDkuMjEgTDE1OTAuMTgsNjA3LjcyIEwxNTg4Ljk0LDYwNC4yNiBMMTU5MC4yOSw2MDEuMjcgTDE1OTAuNTIsNTk4LjI5IEwxNTkxLjU2LDU5Ni42IEwxNTkxLjUsNTkyLjg0IEwxNTg4Ljc5LDU4OC41IEwxNTkwLjIxLDU4NC4wOCBMMTU4Ni42Miw1ODQuMjIgTDE1ODQuMDUsNTgxLjg1IEwxNTgxLjk5LDU4MS4xMSBMMTU3Ni4zMSw1ODAuNjMgTDE1NzQuMTcsNTc1LjcxIEwxNTY4Ljg3LDU3NC4xMSBMMTU2Ni4xNiw1NzQuODYgTDE1NjMuOTEsNTc0LjExIEwxNTYyLjgzLDU3MS45NCBMMTU1OS4zMiw1NzIuMTkgTDE1NTUuMjgsNTY5LjM4IEwxNTUzLjk1LDU2Ny41OSBMMTU0OS44OSw1NjcuNjYgTDE1NDcuOTgsNTY3LjA0IEwxNTQ2Ljk0LDU3MS4zIEwxNTQxLjUzLDU3MC4xIEwxNTM3LjM0LDU2Ny45MiBMMTUzNC45Niw1NjcuNjQgTDE1MzQuNjgsNTcwLjc3IEwxNTMxLjE4LDU3Mi44NCBMMTUyNi41Niw1NzIuMzYgTDE1MjUuMjMsNTczLjYxIEwxNTIyLjExLDU3My44OCBMMTUyMSw1NzcuNTEgTDE1MTkuODYsNTc4LjU5IEwxNTE1LjY3LDU4MC41IEwxNTE0LjQ1LDU3OS44NyBMMTUxMi41NSw1NzYuODUgTDE1MTAuMzYsNTc2LjEzIEwxNTA2LjA1LDU3Ni4xNyBMMTUwMy44Miw1NzQuODIgTDE1MDAuMDIsNTc0LjgxIEwxNDk3LjUyLDU3Mi4xOSBMMTQ5My4yNyw1NzIuMzcgTDE0OTEuNSw1NzAuMTIgTDE0ODkuMjEsNTY5LjUgTDE0ODIuOTUsNTcwLjggTDE0ODEuOTIsNTY5Ljg4IEwxNDgyLDU2Ni45NSBMMTQ3Ny42Nyw1NjcuNTcgTDE0NzYuOTMsNTYyLjEyIEwxNDc1LjkzLDU2MC40OSBMMTQ3NC4xNCw1NjEuMzQgTDE0NzEuMTMsNTYwLjg0IEwxNDY5LjY0LDU1Ny44NiBMMTQ2OC4zOSw1NTYuODIgTDE0NjUuMTMsNTU2LjcgTDE0NjUuMDksNTU5LjAyIEwxNDYzLjQsNTU5LjAxIEwxNDYwLjcyLDU1Ny4xOCBMMTQ2MC45Niw1NTUuMjkgTDE0NTguNjcsNTU1Ljg3IEwxNDYwLjI0LDU1Ni42OCBMMTQ1OS45NSw1NjAuMzkgTDE0NTguMDcsNTYxLjQ5IEwxNDU5LjIyLDU2My4wMiBMMTQ2MS40Niw1NjMuMzggTDE0NjMuOTQsNTY0Ljg4IEwxNDYxLjExLDU3MC4xOCBMMTQ2MC4wMyw1NzAuOTkgTDE0NTYuNzgsNTcxLjQxIEwxNDU0LjU0LDU3NS4zMyBMMTQ1MC43Niw1NzYuMjcgTDE0NDUuMjQsNTc1LjUyIEwxNDQyLjk1LDU3NC40NyBMMTQ0MC4wNiw1NzAuOTYgTDE0MzQuODQsNTcwLjg2IEwxNDMyLjM0LDU2OC44NyBMMTQyOS44NCw1NjkuMjQgTDE0MjguNTEsNTczLjMgTDE0MjcuMDcsNTc0LjQ2IEwxNDI5LjQ4LDU3Ni42MSBMMTQyOS41NSw1NzkuOSBMMTQzMS45OSw1ODIuMDkgTDE0MzIuMyw1ODQuNjQgTDE0MzAuMTQsNTg4LjMxIEwxNDI5Ljk2LDU5MS45NyBMMTQzMi4yNiw2MDAuNSBMMTQzMS44Miw2MDQuMTcgTDE0MjkuNjksNjA3LjE5IEwxNDI5LjYyLDYwOC4zMiBMMTQyNy40OSw2MDkuODQgTDE0MjkuMDUsNjE3LjI0IEwxNDI5LjE4LDYxOS4zOCBMMTQzMS4yMyw2MjEuMDEgTDE0MzIuMjcsNjI2LjM5IEwxNDMzLjc0LDYyOS44OSBMMTQzNi44Myw2MzEuMjQgTDE0MzYuOTMsNjM1Ljc1IEwxNDM1Ljk1LDYzNi41MiBMMTQzNi41Nyw2NDAuNjUgTDE0MzQuNjEsNjQyLjIzIEwxNDM1LjY4LDY1Ni42MiBMMTQzNy43MSw2NTguNjkgTDE0MzYuNzUsNjYwLjc0IEwxNDM3LjYsNjYyLjAzIEwxNDM2LjksNjY0Ljg2IEwxNDM0LjgzLDY2NS4wNiBMMTQzNC44Nyw2NjcuMzcgTDE0MzYuNjQsNjY3LjI3IEwxNDM3LjY1LDY2OS40MSBMMTQzOS4wMyw2NjkuNDggTDE0MzkuMzQsNjcyLjc4IEwxNDM3LjA4LDY3Ni45MSBMMTQzNi41LDY4MS4xNyBMMTQzMi44MSw2ODMuMzMgTDE0MjUuMTYsNjgxLjY0IEwxNDIzLjgxLDY3OS4wMyBMMTQxOS4xLDY3OC41IEwxNDE3Ljk2LDY3Ny4zNiBMMTQxNS41OCw2NzcuNTMgTDE0MTQuMDMsNjc2LjUgTDE0MTEuOTMsNjc3LjA5IEwxNDExLjcxLDY3NS40OSBMMTQwOC41Myw2NzYuOTggTDE0MDcuMzIsNjc0LjgzIEwxNDA1LjUxLDY3NC41NSBMMTQwMy41MSw2NzUuNDkgTDE0MDMuMzEsNjc4Ljg3IEwxNDA0LjQ4LDY4MC43NyBMMTQwNC44Nyw2ODQuNjcgTDE0MDMuMjMsNjg0LjE3IEwxMzk2LjU5LDY4NC44NiBMMTM5Ny41Niw2ODYuNzMgTDEzOTguMjUsNjkwLjc2IEwxMzk2LjA3LDY5My4yNSBMMTM5NS4zNiw2OTUuODkgTDEzOTYuNTMsNzAzLjQzIEwxMzk5Ljk0LDcwMy4xMSBMMTQwMC4zOSw3MDYuMDYgTDE0MDAuMDUsNzEwLjY0IEwxNDAxLjc0LDcxMC4zMSBMMTQwNi4zMyw3MTAuODYgTDE0MDYuODcsNzA4LjE4IEwxNDA4LjY5LDcwNi40NCBMMTQxMC4wNiw3MDcuNiBMMTQxMy4yLDcwNS45MyBMMTQxMy4yNiw3MDMuNTggTDE0MTUuMTMsNzAxLjY3IEwxNDE4LjQ3LDcwMS41OCBMMTQyNS4wMyw2OTguNjQgTDE0MjUuMzUsNzAxLjE1IEwxNDI3LjA2LDcwNC4wMiBMMTQyNy4yNSw3MDguMjUgTDE0MjcuODgsNzA5Ljg4IEwxNDI4LjAyLDcxNC4zMSBMMTQzMC4zNSw3MTcuMzcgTDE0MzAuNzksNzIxLjI5IEwxNDI4LjIsNzIyLjc3IEwxNDI4LjEsNzIzLjg0IEwxNDMwLjYsNzI5LjA3IEwxNDMxLjQsNzMxLjY3IEwxNDMzLjc0LDczMi43OCBMMTQzMi42Miw3MzkuOTcgTDE0MzEuMDYsNzQxLjgxIEwxNDMxLjQ5LDc0NC45IEwxNDMwLjgyLDc0Ny40MSBMMTQzMS43Myw3NTEuMiBMMTQzNi4xMSw3NDkuMjEgTDE0NDMuNTEsNzUzLjUxIEwxNDQzLjkzLDc1NS43MyBMMTQ0Ni4zMiw3NTUuNCBMMTQ0Ny42LDc1Ny4wOSBMMTQ1MC4wOSw3NTUuMjkgTDE0NTQuMDEsNzU0LjcyIEwxNDU0Ljk1LDc1My44NSBMMTQ2Mi4yMyw3NTMuMDEgTDE0NjQuNzEsNzU1LjMxIEwxNDY1LjUzLDc1OS4xNiBMMTQ2OC41Myw3NTcuODggTDE0NzAuNDgsNzU5Ljc2IEwxNDcwLjE1LDc2My42NyBMMTQ3Ni42NCw3NjMuMzUgTDE0NzkuMzcsNzYxLjYzIEwxNDgyLjQ4LDc2MS41IEwxNDg0LjE1LDc2Mi4zNyBMMTQ4NS45MSw3NjYuMTEgTDE0ODUuODQsNzY4LjU1IEwxNDg2Ljg2LDc2OS45MiBMMTQ4Ni41LDc3My4wMSBMMTQ4OC40Miw3NzMuMzYgTDE0ODkuMSw3NzYuMDggTDE0OTIuMTEsNzc3LjIzIEwxNDk0LjExLDc4MC4yNyBMMTQ5NS41Nyw3ODAuODcgTDE0OTkuNjksNzc5Ljg1IEwxNTAxLjM3LDc4MC44MyBMMTUwMi44OCw3ODUuMTMgTDE1MDQuMjQsNzg1LjkzIEwxNTAzLjQ2LDc4Ny4yOSBMMTUwNi45NSw3ODcuMDEgTDE1MDcuMTYsNzkwLjc0IEwxNTExLjAzLDc4OS44NCBMMTUxNC4xNSw3OTAuMDggTDE1MTUuMzcsNzkyLjc1IEwxNTE1LjczLDc5OS4wNSBMMTUxMy4yNCw4MDguMDcgTDE1MDkuNzUsODExLjE3IEwxNTA5LjUsODEzLjY4IEwxNTA2LjQzLDgxOS43MSBMMTUxMC43LDgyMS45NyBMMTUxMS4wMyw4MjQuNzYgTDE1MTMuMjUsODI1LjcxIEwxNTEzLjg3LDgyOS44OCBMMTUxNS45LDgzMC45OSBMMTUxNy45OSw4MzQuMTcgTDE1MjEuNTcsODM0LjQ4IEwxNTIyLjM0LDgzNy43NyBMMTUyMy4yNSw4MzguNiBMMTUyMy40Miw4NDIuNjEgTDE1MjcuODUsODQyLjgzIEwxNTI4Ljg2LDg0NS4xOCBMMTUzMi4xNSw4NDQuNjYgTDE1MzUuMTYsODQ0Ljg5IEwxNTM4LjE5LDg0Ni40MSBMMTUzOS4wNCw4NDUuODEgTDE1MzkuNTksODQxLjMgTDE1NDcuMDcsODQwLjEgTDE1NDcuMDksODM4Ljc0IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 太昊陵庙会\n太昊陵的朝祖传统与当代文化旅游节相伴，担经挑、泥泥狗和布老虎让淮阳具有鲜明面貌。从桥、水面和红棚进入，再靠近花篮、泥塑彩点与邮政服务，可以看见信俗、表演、手作及现代赶会生活如何同处一地。","childrenIds":["scene-zk-th-01","scene-zk-th-03","scene-zk-th-04"],"label_anchor_points":[1544.44,694.68],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1544.44,"anchorY":694.68,"labelX":1544.44,"labelY":629.68,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-zk-th-01":{"id":"scene-zk-th-01","parentId":"fair-zk-th","imageSrc":"assets/scenes/zk-th-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iODU2Ljk2IiBjeT0iMzYwLjM2IiByeD0iNTkwLjcyIiByeT0iMTkxLjg4IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[168.48,266.24,552.24,1447.68],"zoomedBox":[168.48,266.24,552.24,1447.68],"label":"桥、水面与赶会通道","url":null,"text":"### 桥、水面与赶会通道\n**桥、水面和红棚怎样同时组织赶会人流？**\n桥连接前后两岸，水面限制横向通行，红棚又在近岸两侧形成停留区域，因而画面同时有穿行与围看两种节奏。全景依据2026年3月20日开幕照片，主要相对位置有据；商户品类、实际人数和每一道通道宽度不能从插画或远景照片逐项辨认。\n\n浅灰平桥位于中轴，桥两侧为矩形水面和白石栏杆；近景横向红棚分居通行口两侧；远岸有橙金龙形节庆装饰、广场、红墙灰瓦小门与树木；群众穿现代日常服装。\n\n资料：2026年3月20日实拍；2026年3月24日刊登\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zk-th-01-central-bridge"],"label_anchor_points":[832,393.12],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":832,"anchorY":393.12,"labelX":832,"labelY":328.12,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zk-th-01-central-bridge":{"id":"object-zk-th-01-central-bridge","parentId":"scene-zk-th-01","imageSrc":"assets/scenes/zk-th-01.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSI1NDAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[338,424,743,1144],"zoomedBox":[338,424,743,1144],"label":"中轴平桥与白石栏杆","url":null,"text":"### 中轴平桥与白石栏杆\n2026开幕全景可见浅灰平桥居中，两侧是矩形水面和白石栏杆。桥把近岸赶会人群与远处广场连在一起，是理解通行关系的关键；原图分辨率不足以给出桥面尺寸或游客数量。\n- **它在庙会中的作用**：连接两岸与集中通行\n- **记载与补全**：2026年3月20日实拍；2026年3月24日刊登。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,540],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":445,"anchorX":784,"anchorY":540,"labelWidth":216,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zk-th-03":{"id":"scene-zk-th-03","parentId":"fair-zk-th","imageSrc":"assets/scenes/zk-th-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iNDQ5LjI4IiBjeT0iNzIwLjcyIiByeD0iMjgyLjg4IiByeT0iMTg3LjIiIGZpbGw9IndoaXRlIi8+PC9zdmc+","box":[533.52,166.4,907.92,732.16],"zoomedBox":[533.52,166.4,907.92,732.16],"label":"走近担经挑","url":null,"text":"### 走近担经挑\n**一副花篮怎样让担经挑从人群中被认出来？**\n肩上的挑担把两只彩绘花篮连成一组，花篮随身体移动，粉色服装与绣花头饰又让参与者在围观人群中容易辨认。2026文字明确这些物件与老年爱好者参与，却没有完整近照和录像，因此图中三人布局、步幅和花纹仅用于导读，不构成仪式或舞步复原。\n\n报道记载老年爱好者穿粉色民俗服装、戴绣花头饰，肩挑绘有吉祥纹样的竹编彩绘花篮；有携儿童观看和举手机记录的游客。\n\n资料：2026年3月20日活动；2026年3月26日报道\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zk-th-03-flower-baskets","object-zk-th-03-shoulder-pole"],"label_anchor_points":[432.64,608.4],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":432.64,"anchorY":608.4,"labelX":432.64,"labelY":543.4,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zk-th-03-flower-baskets":{"id":"object-zk-th-03-flower-baskets","parentId":"scene-zk-th-03","imageSrc":"assets/scenes/zk-th-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI1NzYiIGN5PSI0ODYiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[284,216,689,936],"zoomedBox":[284,216,689,936],"label":"竹编彩绘花篮","url":null,"text":"### 竹编彩绘花篮\n2026担经挑报道提到肩挑的竹编彩绘花篮及吉祥纹样，能确认花篮是表演识别物件。图中篮面花纹、花束和悬挂细节为绘画补全，资料并未给出某一套篮具的尺寸、制作者或完整图样。\n- **它在庙会中的作用**：连接人物身体与表演轮廓\n- **记载与补全**：2026年3月20日活动；2026年3月26日报道。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[576,486],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":716,"labelY":391,"anchorX":576,"anchorY":486,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zk-th-03-shoulder-pole":{"id":"object-zk-th-03-shoulder-pole","parentId":"scene-zk-th-03","imageSrc":"assets/scenes/zk-th-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI3ODQiIGN5PSIyNTIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[50,424,455,1144],"zoomedBox":[50,424,455,1144],"label":"肩上的挑担","url":null,"text":"### 肩上的挑担\n报道描述表演者肩挑成对花篮，说明挑担把器物与身体动作连接起来。插画选取行进中的一瞬，不能据此推断承重、步法或仪式先后；现有材料也不足以还原完整担经挑队形。\n- **它在庙会中的作用**：承接花篮并放大身体运动\n- **记载与补全**：2026年3月20日活动；2026年3月26日报道。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[784,252],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":924,"labelY":157,"anchorX":784,"anchorY":252,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zk-th-04":{"id":"scene-zk-th-04","parentId":"fair-zk-th","imageSrc":"assets/scenes/zk-th-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTQwNi4wOCIgY3k9IjY1OS44OCIgcng9IjI1Ny45MjAwMDAwMDAwMDAxIiByeT0iMjQ4LjA0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[411.84,1148.1599999999999,907.92,1664],"zoomedBox":[411.84,1148.1599999999999,907.92,1664],"label":"红棚里的布老虎","url":null,"text":"### 红棚里的布老虎\n**布老虎展台怎样同时让人远看与近看？**\n较大的红黄布虎先形成远处可见的色块，小件和阶梯台再把视线引向细部，手艺人与游客在台前交流。2026照片确认布偶、提袋和分层陈列，插画另外设计了参与者。这里以展示关系讲手作，不把介绍动作写成已记录的交易，也不复原特定传承人肖像。\n\n伏羲文化广场现代非遗静态展，南侧布老虎展位；实拍可见红黄软质布老虎、白色与浅灰阶梯展台、现代展板、纸袋和红色盘扣上衣。\n\n资料：2026年3月27日报道；照片拍摄日未逐图披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zk-th-04-cloth-tiger","object-zk-th-04-tiered-display"],"label_anchor_points":[1381.12,758.1600000000001],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1381.12,"anchorY":758.1600000000001,"labelX":1381.12,"labelY":693.1600000000001,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zk-th-04-cloth-tiger":{"id":"object-zk-th-04-cloth-tiger","parentId":"scene-zk-th-04","imageSrc":"assets/scenes/zk-th-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI2MjQiIGN5PSI2NTciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[454,264,859,984],"zoomedBox":[454,264,859,984],"label":"黄色布老虎","url":null,"text":"### 黄色布老虎\n2026非遗静态展照片可见红黄软质布老虎，报道明确南侧布老虎展位。插画以较大的黄色作品突出眼、耳和织物色块，让物件易于识别；具体针法与制作步骤仍不能由成品照片倒推。\n- **它在庙会中的作用**：展示地方手作的形态与色彩\n- **记载与补全**：2026年3月27日报道；照片拍摄日未逐图披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[624,657],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":764,"labelY":562,"anchorX":624,"anchorY":657,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zk-th-04-tiered-display":{"id":"object-zk-th-04-tiered-display","parentId":"scene-zk-th-04","imageSrc":"assets/scenes/zk-th-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMDI0IiBjeT0iNTA0IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[302,664,707,1384],"zoomedBox":[302,664,707,1384],"label":"阶梯式布虎展台","url":null,"text":"### 阶梯式布虎展台\n来源照片可见白色与浅灰阶梯展台，大小布虎在不同高度陈列。高低层次让后排作品不被前排完全遮住，也为近距离交流留出视觉中心；展台尺寸、完整数量和真实售卖方式未核实。\n- **它在庙会中的作用**：组织多件作品的观看层次\n- **记载与补全**：2026年3月27日报道；照片拍摄日未逐图披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1024,504],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":884,"labelY":409,"anchorX":1024,"anchorY":504,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-zmd-hj":{"id":"fair-zmd-hj","parentId":"54749336813040","label":"驻马店","imageSrc":"assets/worlds/zmd-hj.webp","box":[738.26,1208.25,1021.86,1607.75],"zoomedBox":[738.26,1208.25,1021.86,1607.75],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMzQzLjE5LDk0OC45IEwxMzQ0LjI4LDk0OC42OCBMMTM0NC4zLDk0NC43NiBMMTM0NS41LDk0NC4wMSBMMTM0OC42OSw5NDQuMDUgTDEzNDkuOTYsOTQ1LjE2IEwxMzUyLjc0LDk0My42OSBMMTM1NC4xNiw5NDMuOTMgTDEzNTYuNzksOTQ3LjUgTDEzNTguMDQsOTQ3Ljk4IEwxMzYxLjUzLDk0Ny4zMyBMMTM2My4wMiw5NDcuODkgTDEzNjMuNTIsOTUwLjQ2IEwxMzY1LjQ4LDk1NC4wMyBMMTM2Ni45LDk1NC40OSBMMTM2Ni40Nyw5NTkuMDcgTDEzNjkuNDQsOTY1Ljc1IEwxMzY5LjUzLDk2OC41NCBMMTM3MS4wMiw5NzAuNTUgTDEzNzQuNzcsOTcwLjk2IEwxMzc5LjUyLDk3MC4wMSBMMTM4MC45Myw5NjguMTUgTDEzODguMjgsOTY2LjUgTDEzODguNzMsOTYyLjkyIEwxMzkwLjc5LDk2My44NiBMMTM5MC42OCw5NjUuNjQgTDEzOTEuODgsOTY3Ljg3IEwxMzkxLjU3LDk3MC40MyBMMTM5Mi41Miw5NzMuMjQgTDEzOTQuNTgsOTc2LjAzIEwxMzkyLjkyLDk3Ni40IEwxMzkzLjMzLDk4Mi4wMiBMMTM5NC4yMyw5ODIuOTQgTDEzOTYuNTIsOTgyLjc0IEwxMzk5LjMzLDk4My42MSBMMTQwMy44OCw5ODAuNCBMMTQwNy43Nyw5ODEuMjMgTDE0MDkuMiw5ODAuNDIgTDE0MDguOSw5NzguNTggTDE0MDkuNzEsOTc0LjcyIEwxNDE0LjM0LDk3My40NSBMMTQxNS4zMSw5NzQuODcgTDE0MTUuNDcsOTc4Ljg1IEwxNDE3LjUxLDk3OC44NyBMMTQxNy42OSw5ODEuMjEgTDE0MTYuMDgsOTgyLjMxIEwxNDE2LjY0LDk4NC4xOSBMMTQxOS43OSw5ODQuMDMgTDE0MjAuODUsOTgyLjE4IEwxNDIzLjk4LDk4MS4xNyBMMTQyNS4wMyw5ODIuOTcgTDE0MjQuNzQsOTg2LjE1IEwxNDI1Ljk4LDk4OC44OSBMMTQyOC43OSw5OTIuMzUgTDE0MzAuNDcsOTkwLjE3IEwxNDMyLjQ1LDk5MC4xNiBMMTQzMS4wNCw5OTIuNzcgTDE0MzIuMTUsMTAwMS4yOCBMMTQzMy40NywxMDAyLjQxIEwxNDM3LjQ3LDEwMDAuNTIgTDE0NDIuNjcsMTAwMi4zOCBMMTQ0My43NCwxMDA2LjM0IEwxNDQzLjkxLDEwMTEuOTEgTDE0NDcuNDYsMTAxNC4wOSBMMTQ0Ny43NywxMDE3LjQyIEwxNDQ5LjA1LDEwMTguOTQgTDE0NTIuOSwxMDE4LjY0IEwxNDU3LjUyLDEwMjEuODYgTDE0NTguOTcsMTAxOS41NSBMMTQ2MC42NywxMDE5Ljc0IEwxNDYzLjMzLDEwMjEuMzYgTDE0NjYuMzIsMTAxOC40NSBMMTQ2OS4yLDEwMjAuNDkgTDE0NzAuNTYsMTAyMC4xNiBMMTQ3MC44MSwxMDE3LjE0IEwxNDcxLjk3LDEwMTYuNzggTDE0NzYuNDEsMTAxNy40MyBMMTQ3OC44OSwxMDIwLjI5IEwxNDgxLjgzLDEwMTkuNjIgTDE0ODQuMjcsMTAxNS42OCBMMTQ4Ny44MiwxMDE1LjIyIEwxNDg2LjU5LDEwMTMuNDEgTDE0ODkuNzcsMTAxMi4yOSBMMTQ5Mi42MiwxMDA4Ljc0IEwxNDkzLjE0LDEwMDUuNzkgTDE0OTUuNTEsMTAwNS4yMiBMMTQ5NC45LDEwMDIuNzUgTDE0OTUuNTgsMTAwMS4xMiBMMTQ5OS41LDk5OS45MiBMMTUwMC4xLDk5Ny4yNiBMMTQ5Ny42NCw5OTQuNDkgTDE0OTEuNzksOTkwLjI5IEwxNDg2LjY5LDk4OC42MiBMMTQ4NS40OSw5ODYuMzUgTDE0ODcuNzUsOTg0LjEgTDE0ODguNDEsOTgxLjk1IEwxNDg1Ljc1LDk3OS4zIEwxNDg2LjM2LDk3NC44NyBMMTQ4NS4zOCw5NzIuODggTDE0ODUuNyw5NjkuOTQgTDE0ODcuOCw5NjguNjYgTDE0OTIuNCw5NjguODkgTDE0OTQuMDcsOTY5LjUyIEwxNTAwLjU5LDk2NS40NiBMMTUwMy41NSw5NjUuNjEgTDE1MDUuNTUsOTY4LjM4IEwxNTEwLjMsOTY3Ljg0IEwxNTEwLjM0LDk2My44IEwxNTEyLjQsOTYxLjg1IEwxNTE0LjU2LDk2Mi4zNyBMMTUxNS41LDk2Ny4zOSBMMTUxNi43NCw5NjcuOTQgTDE1MTkuNzksOTY2LjM0IEwxNTIzLjg4LDk2OS44IEwxNTI2LjgzLDk2OS45IEwxNTI3LjU1LDk2Ni44NCBMMTUyNi4zLDk2Ni4zNyBMMTUyNS4yMiw5NjMuNzEgTDE1MjYuMSw5NjEuNDMgTDE1MzAuNDQsOTU4LjQyIEwxNTMwLjY4LDk1Ni4xMiBMMTUyOS4yNyw5NTIuODUgTDE1MjcuMTQsOTUyLjY5IEwxNTI2LjcsOTQ3LjQ3IEwxNTI3LjY1LDk0NS45OSBMMTUyOS45Myw5NDYuOTQgTDE1MzEuMzcsOTQ2LjU2IEwxNTMyLjk5LDk0My45MSBMMTUzOS40Miw5NDQuNzIgTDE1NDAuNjEsOTQzLjYyIEwxNTQ0Ljc1LDk0NS40MSBMMTU0Ni4wMyw5NDUuMTMgTDE1NDcuOTQsOTQxLjIxIEwxNTQ3Ljg0LDkzNy45OSBMMTU0OS42OCw5MzYuOTggTDE1NTEuMjQsOTM4IEwxNTUzLjkyLDkzNy45MSBMMTU1OC40OCw5MzUuNDkgTDE1NjMuNyw5MzUuNjQgTDE1NzIuMDksOTM4LjA3IEwxNTc1Ljg1LDkzOS45OSBMMTU3OC43LDk0Mi41IEwxNTgzLjQ5LDk0MC43IEwxNTg0Ljg5LDk0MS40MyBMMTU4NS4xNyw5NDQuNTkgTDE1ODcuNDQsOTQ3LjQxIEwxNTg5LjkyLDk0Ny4zOCBMMTU5Mi44Niw5NDkuMjcgTDE1OTIuMjMsOTUyLjA0IEwxNTkzLjg2LDk1My42IEwxNTk1LjA4LDk1MS4zNiBMMTU5OS40NSw5NDcuODggTDE2MDIuNTksOTQ4LjQxIEwxNjA0Ljg1LDk0Ny41OCBMMTYwNS44MSw5NDYuMTYgTDE2MDMuOTgsOTQ0LjYzIEwxNjA0LjQ4LDk0MS43MyBMMTYwMy4wNiw5NDIuMDEgTDE2MDMuMTMsOTM5LjQ4IEwxNjA0LjYsOTM4Ljc3IEwxNjA1Ljg4LDk0MC43NyBMMTYwNS43Niw5MzcuNzggTDE2MDcuNzUsOTM1LjY2IEwxNjA0Ljg0LDkzNi44NyBMMTYwNS4wNiw5MzIuNTUgTDE2MDIuODksOTMwLjI5IEwxNjAyLjEsOTMxLjIyIEwxNjAzLjUxLDkzMi42IEwxNjAwLjg4LDkzMy45NSBMMTYwMS4xOSw5MzEuMzQgTDE2MDAuMDQsOTMwLjI5IEwxNjAwLjgzLDkyNy42NiBMMTYwMC4xNiw5MjUuOTcgTDE2MDEuMTQsOTIxLjc5IEwxNjAwLjIxLDkyMC40NCBMMTYwMi4xNCw5MTAuMzMgTDE2MDEsOTA4Ljk3IEwxNjAwLjcxLDkwNi42MSBMMTYwMi40MSw5MDUuOTkgTDE2MDUuMzksOTA3LjA3IEwxNjA2LjQxLDkwNi42NCBMMTYwNS4yOSw5MDQuMjYgTDE2MDMuNTEsOTAzLjI1IEwxNjAyLjIsOTAwLjg5IEwxNjAzLjI2LDg5Ny4xOCBMMTYwMS45OSw4OTQuNTYgTDE2MDQuNTksODkzLjg2IEwxNjAzLjgzLDg5MS40IEwxNjAyLjQyLDg5MC42OSBMMTU5OS42MSw4OTAuOTcgTDE1OTYuNTIsODg5LjYxIEwxNTk1LjYxLDg4Ni4yMSBMMTU5My4yNiw4ODQuNjEgTDE1OTIuOSw4ODEuNjIgTDE1ODguMyw4ODEgTDE1ODUuNzIsODgyLjM1IEwxNTgyLjY3LDg4MC4zMiBMMTU3OS4xMSw4ODAuMzIgTDE1NzIuMDMsODc5LjUxIEwxNTcxLjYsODc3LjggTDE1NzMuMzUsODc3LjM2IEwxNTczLjEsODczLjcyIEwxNTcwLjk1LDg3My40MSBMMTU2OC4xNyw4NzEuOTUgTDE1NjIuNDQsODcxLjY4IEwxNTU4LjksODcyLjEgTDE1NTUuODEsODczLjExIEwxNTU0LjM4LDg2OS4yMyBMMTU1Mi4xNSw4NjcuNjggTDE1NTAuNjMsODY0Ljg4IEwxNTQ2LjQ0LDg2NC41NyBMMTU0NC45OCw4NjMuMjMgTDE1NDQuMzYsODYwLjU2IEwxNTQ3Ljg5LDg1OC4zIEwxNTQ2LjA4LDg1My43MiBMMTU1MC41LDg1NC43MyBMMTU1Mi4xOCw4NTQuNTkgTDE1NTQuNTYsODUyLjU5IEwxNTUxLjkzLDg1MC4xOSBMMTU1MS44NCw4NDcuNDIgTDE1NTAuNDMsODQ0LjgxIEwxNTUxLjI4LDg0Mi43NyBMMTU1MC4yNCw4MzkuNiBMMTU0Ny4wOSw4MzguNzQgTDE1NDcuMDcsODQwLjEgTDE1MzkuNTksODQxLjMgTDE1MzkuMDQsODQ1LjgxIEwxNTM4LjE5LDg0Ni40MSBMMTUzNS4xNiw4NDQuODkgTDE1MzIuMTUsODQ0LjY2IEwxNTI4Ljg2LDg0NS4xOCBMMTUyNy44NSw4NDIuODMgTDE1MjMuNDIsODQyLjYxIEwxNTIzLjI1LDgzOC42IEwxNTIyLjM0LDgzNy43NyBMMTUyMS41Nyw4MzQuNDggTDE1MTcuOTksODM0LjE3IEwxNTE1LjksODMwLjk5IEwxNTEzLjg3LDgyOS44OCBMMTUxMy4yNSw4MjUuNzEgTDE1MTEuMDMsODI0Ljc2IEwxNTEwLjcsODIxLjk3IEwxNTA2LjQzLDgxOS43MSBMMTUwOS41LDgxMy42OCBMMTUwOS43NSw4MTEuMTcgTDE1MTMuMjQsODA4LjA3IEwxNTE1LjczLDc5OS4wNSBMMTUxNS4zNyw3OTIuNzUgTDE1MTQuMTUsNzkwLjA4IEwxNTExLjAzLDc4OS44NCBMMTUwNy4xNiw3OTAuNzQgTDE1MDYuOTUsNzg3LjAxIEwxNTAzLjQ2LDc4Ny4yOSBMMTUwNC4yNCw3ODUuOTMgTDE1MDIuODgsNzg1LjEzIEwxNTAxLjM3LDc4MC44MyBMMTQ5OS42OSw3NzkuODUgTDE0OTUuNTcsNzgwLjg3IEwxNDk0LjExLDc4MC4yNyBMMTQ5Mi4xMSw3NzcuMjMgTDE0ODkuMSw3NzYuMDggTDE0ODguNDIsNzczLjM2IEwxNDg2LjUsNzczLjAxIEwxNDg2Ljg2LDc2OS45MiBMMTQ4NS44NCw3NjguNTUgTDE0ODUuOTEsNzY2LjExIEwxNDg0LjE1LDc2Mi4zNyBMMTQ4Mi40OCw3NjEuNSBMMTQ3OS4zNyw3NjEuNjMgTDE0NzYuNjQsNzYzLjM1IEwxNDcwLjE1LDc2My42NyBMMTQ3MC40OCw3NTkuNzYgTDE0NjguNTMsNzU3Ljg4IEwxNDY1LjUzLDc1OS4xNiBMMTQ2NC43MSw3NTUuMzEgTDE0NjIuMjMsNzUzLjAxIEwxNDU0Ljk1LDc1My44NSBMMTQ1NC4wMSw3NTQuNzIgTDE0NTAuMDksNzU1LjI5IEwxNDQ3LjYsNzU3LjA5IEwxNDQ2LjMyLDc1NS40IEwxNDQzLjkzLDc1NS43MyBMMTQ0My41MSw3NTMuNTEgTDE0MzYuMTEsNzQ5LjIxIEwxNDMxLjczLDc1MS4yIEwxNDI4LjM0LDc1My42OCBMMTQyNC43NSw3NTQuMTIgTDE0MjEuNTgsNzU1Ljk3IEwxNDE3Ljk0LDc1NS40NyBMMTQxNC45MSw3NTYuODQgTDE0MTQuMDIsNzYxLjY1IEwxNDEwLjM5LDc1OC4zOCBMMTQxMi4xLDc1NS40OSBMMTQxMC40NSw3NTQuMjcgTDE0MDguMjUsNzU0Ljc5IEwxNDA2LjQ0LDc1My45NiBMMTQwNi42Niw3NTIuMiBMMTQwMi44OSw3NTEuMjYgTDE0MDIuNzQsNzQ2LjA5IEwxMzk5Ljk0LDc0Ny41NiBMMTM5Ny42Miw3NDYuODkgTDEzOTcuNzMsNzQ1LjEyIEwxNDAwLjM3LDc0NC40MyBMMTQwMC4wMyw3NDIuNjUgTDEzOTYuNzksNzQ0LjI3IEwxMzkyLjM2LDc0MC45NCBMMTM4OC42Miw3MzkuNTUgTDEzODcuOTYsNzM4LjQgTDEzODUuNCw3MzguMjYgTDEzODQuNDgsNzM5LjU2IEwxMzgwLjk0LDczOS45OCBMMTM4MC42OCw3NDIuNDcgTDEzNzguMzQsNzQyLjU2IEwxMzc3Ljg5LDc0NC43NyBMMTM3NC42Miw3NDkgTDEzNzIuNzEsNzQ4LjkyIEwxMzcyLjA5LDc1MC4xIEwxMzY5LjUzLDc1MC45IEwxMzY3LjgzLDc1Mi43NyBMMTM2NS42Niw3NTIuNzEgTDEzNjEuOTcsNzQ5Ljg1IEwxMzUyLjgxLDc0OS42NiBMMTM1MS4wNCw3NDkuOTggTDEzNDkuNDIsNzUyLjUgTDEzNDUuMzcsNzUzLjg5IEwxMzQxLjU3LDc1Ny4xOCBMMTM0MC4zOCw3NTkuNzYgTDEzMzUuMDQsNzU5LjU2IEwxMzM0LjIzLDc2MC4zNiBMMTMyNS42Myw3NjAuMjQgTDEzMjQuMTMsNzYwLjggTDEzMjMuNjEsNzYzLjggTDEzMjAuMzQsNzYzLjUzIEwxMzE5LjQ1LDc2NS45IEwxMzE3LjI5LDc3Mi41OCBMMTMxMy4xNyw3NzQuMTkgTDEzMTAuMTksNzc3LjgxIEwxMzEwLjc0LDc3OS4yMSBMMTMxMC40LDc4NC42MyBMMTMwNy45OCw3ODcuNTcgTDEzMDYuMzUsNzkyLjI3IEwxMzA1LjI5LDc5OSBMMTMwNC4xMSw4MDQuNDUgTDEzMDUuNDEsODEwLjQxIEwxMzA3Ljk5LDgxNi4wOCBMMTMxMS4yMiw4MTYuMDYgTDEzMTEuOTQsODE3LjAxIEwxMzA5LjQyLDgyMS45IEwxMzA3LjcxLDgyNC4yNiBMMTMwNi4wMiw4MjQuOTggTDEzMDIuODQsODIxLjM3IEwxMzAxLjYxLDgyMi42MSBMMTI5Ny44OSw4MjIuNzkgTDEyOTUuNTEsODIxLjgzIEwxMjkzLjQ1LDgyNi42IEwxMjkxLjc2LDgyNS45MyBMMTI5MC4wNyw4MjMuNzQgTDEyODguMDEsODIzLjI5IEwxMjg2Ljc3LDgyMS41MiBMMTI4My45OCw4MjIuOTUgTDEyNzYuNTEsODIyLjg5IEwxMjc0LjQyLDgyMS45NiBMMTI3MS4yOCw4MjIuODEgTDEyNjcuNjIsODIyLjg1IEwxMjY0Ljc1LDgyNC4zNiBMMTI2My4wNSw4MjkuMjYgTDEyNjIuNjMsODMyLjY0IEwxMjU3LjEsODM3LjYgTDEyNTIuNyw4MzguODggTDEyNTEuMTIsODQwLjQyIEwxMjQ4LjgsODQxLjIzIEwxMjQ2LjU5LDg0MC4yIEwxMjQwLjk0LDg0MC4xMiBMMTIzOC4yOSw4MzkuNDYgTDEyMzcsODQwLjczIEwxMjM0LjQ4LDg0MC45MSBMMTIzMS4xMiw4NDMuNzMgTDEyMjguNjUsODQyLjMxIEwxMjI1LjYxLDg0My4xMyBMMTIyNC44MSw4NDUuNDYgTDEyMjEuMDEsODQ3LjI3IEwxMjIwLjI0LDg0OS41NSBMMTIxNi41OCw4NTQuNiBMMTIxMy44Miw4NTUuOTggTDEyMTIuNDksODU4LjExIEwxMjExLjcsODYxLjQ1IEwxMjEwLjMyLDg2NC40MyBMMTIwOC4yNSw4NzAuNTMgTDEyMTAuNTEsODcxLjUyIEwxMjExLjU5LDg3My41NyBMMTIxNi4yMiw4NzQuMTEgTDEyMTcuMyw4NzEuOTEgTDEyMTkuMTksODcyLjg2IEwxMjIwLjMyLDg3NC44MyBMMTIyNC4wNSw4NzYuMzcgTDEyMjcuMzEsODc2LjQ1IEwxMjI5LjAzLDg3Ny4zMyBMMTIyNy43MSw4ODMuNTkgTDEyMjguNTQsODg0LjQ3IEwxMjI2LjY4LDg4Ny40MyBMMTIyNS4wNiw4ODguNjcgTDEyMjMuMTcsODkxLjg0IEwxMjIxLjQ3LDg5My4wNiBMMTIyMS4wNSw4OTUuMSBMMTIyMi45Myw4OTYuMzggTDEyMjUuMDYsODk5LjIxIEwxMjIzLjQyLDkwMi4yMiBMMTIyNC41NCw5MDMuNDIgTDEyMjQuNzEsOTA2LjM5IEwxMjIzLjIxLDkwOS4zMyBMMTIyNy40OSw5MTUuMDIgTDEyMjcuNzUsOTE3LjYxIEwxMjI2LjM2LDkxOC44NCBMMTIyNS45LDkyMi40IEwxMjI4Ljk0LDkyMi41IEwxMjMwLjA4LDkyNS43MiBMMTIzMy4zNyw5MjYuMDggTDEyMzUuMjMsOTI4LjM2IEwxMjM0LjMyLDkzMC4zNiBMMTIzOC43OCw5MzEuNDUgTDEyNDAuNTUsOTM1LjAyIEwxMjM4LjUsOTM2Ljg1IEwxMjM3LjQxLDkzMy45MiBMMTIzNS42NSw5MzMuMjUgTDEyMzQuMzEsOTMxLjE0IEwxMjMxLjM3LDkyOS45NCBMMTIyOS40Myw5MzEuMTkgTDEyMjcuODIsOTM1LjQxIEwxMjI1LjIxLDkzNy4yNCBMMTIyNC44OSw5MzguNTUgTDEyMjYuMDMsOTQxLjA2IEwxMjI4LjAyLDk0MS43OCBMMTIyNy44Myw5NDUuOCBMMTIyNi43Niw5NDcuNyBMMTIyNy42Miw5NTIuNDcgTDEyMjcuMjMsOTUzLjczIEwxMjI4LjUyLDk1NS45IEwxMjMxLjUsOTU1LjggTDEyMzUuNzUsOTUzLjg5IEwxMjM2Ljg3LDk1MC41NSBMMTI0Mi42NSw5NTAgTDEyNDIuOTksOTUwLjkxIEwxMjQ2LjkxLDk1Mi4xIEwxMjQ4LjI4LDk1My43MyBMMTI0OS4yOCw5NTEuODIgTDEyNTAuNCw5NTEuOTcgTDEyNTEuMjksOTU0LjE4IEwxMjU0LjM5LDk1Ni4zNyBMMTI1Ni4wNCw5NTUuMDcgTDEyNTguNDgsOTU2LjAyIEwxMjU5Ljg5LDk1NC40OCBMMTI2MS44MSw5NTAuNiBMMTI2NS4yOSw5NDYuMDkgTDEyNjkuMzYsOTQ3LjkgTDEyNzIuMjksOTUxLjU0IEwxMjc0LjA4LDk1Mi41NiBMMTI3Ni4xNyw5NTIuMzggTDEyNzYuMjMsOTU0LjYxIEwxMjc4LjgzLDk1My45NSBMMTI4Mi42Miw5NTYuNDEgTDEyODYuMzksOTU1LjU1IEwxMjg2LjUzLDk1My43NyBMMTI4OC41OCw5NTAuNTcgTDEyOTEuOTQsOTUxLjU1IEwxMjk2LjMsOTQ4LjQ4IEwxMjk3LjQ2LDk0My40NyBMMTI5OS43MSw5NDEuNDggTDEzMDAuNzIsOTM3LjY2IEwxMzAyLjExLDkzNy44MSBMMTMwMS42OSw5MzUuMjQgTDEzMDYuNDUsOTMzLjgyIEwxMzA2LDkyOC4zMiBMMTMwNC42Niw5MjcuMjEgTDEzMDUuNTgsOTIzLjg0IEwxMzA3LjIxLDkyNS4wMiBMMTMxMC45MSw5MjUuNzEgTDEzMTIuMDYsOTI0LjU0IEwxMzE1LjY5LDkyOC4xNCBMMTMyMC45NCw5MjcuNDEgTDEzMjQuOTgsOTMwLjExIEwxMzI3LjEzLDkzMy4yOSBMMTMzMy4xNyw5MzcuMTQgTDEzMzUuMTgsOTM2LjU2IEwxMzM2LjkxLDkzNy4xNiBMMTMzOC45Niw5MzkuNTUgTDEzMzcuNjgsOTQxLjk3IEwxMzQwLjMsOTQ0LjM2IEwxMzQyLjIyLDk0OC4yMiBMMTM0My4xOSw5NDguOSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+","url":null,"text":"### 皇家驿站新春庙会\n皇家驿站以复原的驿站主题建筑组织春节游园，牌楼、商街、古戏台与运河提供不同观看空间。彩带龙适合广场，豫剧需要台口，亲子游戏依赖面对面互动。再用独立标年的夏季花船，观察水岸夜游的另一种尺度。","childrenIds":["scene-zmd-hj-02","scene-zmd-hj-03","scene-zmd-hj-04"],"label_anchor_points":[1407.57,875.91],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1407.57,"anchorY":875.91,"labelX":1407.57,"labelY":810.91,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-zmd-hj-02":{"id":"scene-zmd-hj-02","parentId":"fair-zmd-hj","imageSrc":"assets/scenes/zmd-hj-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iOTkwLjA3OTk5OTk5OTk5OTkiIGN5PSIzNzQuNCIgcng9IjQyNC4zMTk5OTk5OTk5OTk5NCIgcnk9IjMwOC44OCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[65.52000000000001,565.76,683.28,1414.3999999999999],"zoomedBox":[65.52000000000001,565.76,683.28,1414.3999999999999],"label":"牌楼下的灯笼商街","url":null,"text":"### 牌楼下的灯笼商街\n**灯笼商街与广场的不同在哪里？**\n主街两侧商铺把人流夹成纵向通道，远端牌楼成为方向标志，头顶灯笼则连续提示节期气氛。这里既有前行，也有靠边观看与停留。来源照片能证明这种整体关系，却不能辨认所有商品；插画中的店面细部和门头装饰不能转写为真实商户名录。\n\n2026春节皇家驿站主街人流，牌楼位于街道轴线远端，两侧商铺与灯笼构成街景。\n\n资料：2026年春节报道；具体拍摄日未披露\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zmd-hj-02-street-lanterns"],"label_anchor_points":[981.76,252.72000000000003],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":981.76,"anchorY":252.72000000000003,"labelX":981.76,"labelY":187.72000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zmd-hj-02-street-lanterns":{"id":"object-zmd-hj-02-street-lanterns","parentId":"scene-zmd-hj-02","imageSrc":"assets/scenes/zmd-hj-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjgwIiBjeT0iMjYxIiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[58,880,463,1600],"zoomedBox":[58,880,463,1600],"label":"商街两侧灯笼串","url":null,"text":"### 商街两侧灯笼串\n2026春节报道照片记录主街两侧商铺与灯笼，牌楼位于街道轴线远端。灯笼把固定建筑暂时连成节庆街景，适合观察上部布置与地面人流的关系；数量、间距和每家店铺名称均未核实。\n- **它在庙会中的作用**：节庆提示与街道纵深\n- **记载与补全**：2026年春节报道；具体拍摄日未披露。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1280,261],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":1140,"labelY":166,"anchorX":1280,"anchorY":261,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zmd-hj-03":{"id":"scene-zmd-hj-03","parentId":"fair-zmd-hj","imageSrc":"assets/scenes/zmd-hj-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMzE2LjE2IiBjeT0iMjgwLjgiIHJ4PSIzMTYuMTYiIHJ5PSIyODAuOCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[0,0,561.6,632.32],"zoomedBox":[0,0,561.6,632.32],"label":"古戏台听豫剧","url":null,"text":"### 古戏台听豫剧\n**古戏台怎样将逛街节奏变成听戏节奏？**\n台口面向停留观众，演员的动作集中在一个较高且明确的区域，与主街分散的行走方式形成不同观看关系。2026预告定位古戏台，实况综述确认豫剧，但缺少戏台近照。因而本图解释演出与观众的功能关系，不将绘出的建筑、戏衣和布景当作真实剧目档案。\n\n节目预告定位古戏台，实况综述确认豫剧演出；具体剧目与戏台外观未核实。\n\n资料：2026节目预告及实况综述；缺古戏台近照\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zmd-hj-03-opera-stage","object-zmd-hj-03-opera-sleeve"],"label_anchor_points":[316.16,355.68],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":316.16,"anchorY":355.68,"labelX":316.16,"labelY":290.68,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zmd-hj-03-opera-stage":{"id":"object-zmd-hj-03-opera-stage","parentId":"scene-zmd-hj-03","imageSrc":"assets/scenes/zmd-hj-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MTYiIGN5PSI0MTQiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[212,456,617,1176],"zoomedBox":[212,456,617,1176],"label":"古戏台台口","url":null,"text":"### 古戏台台口\n节目预告将豫剧等演出安排与古戏台节点关联，实况综述确认豫剧活动。当前没有可核对的台口近照，图中屋檐、柱梁与幕布只是概念布置；可分析面向观众的功能，不进行建筑复原。\n- **它在庙会中的作用**：固定方向的戏曲观看\n- **记载与补全**：2026节目预告及实况综述；缺古戏台近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[816,414],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":676,"labelY":319,"anchorX":816,"anchorY":414,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zmd-hj-03-opera-sleeve":{"id":"object-zmd-hj-03-opera-sleeve","parentId":"scene-zmd-hj-03","imageSrc":"assets/scenes/zmd-hj-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI4MDAiIGN5PSIzNjkiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[166,440,571,1160],"zoomedBox":[166,440,571,1160],"label":"演员的白色长袖","url":null,"text":"### 演员的白色长袖\n2026资料支持皇家驿站有豫剧演出，却未逐项说明剧目与戏服。插画以长袖动作帮助读者辨认戏曲表演的身体表达，袖长、衣纹、角色和动作均属艺术设计，不能据此复述实际唱段内容。\n- **它在庙会中的作用**：让舞台人物动作易于辨认\n- **记载与补全**：2026节目预告及实况综述；缺古戏台近照。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[800,369],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":660,"labelY":274,"anchorX":800,"anchorY":369,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-zmd-hj-04":{"id":"scene-zmd-hj-04","parentId":"fair-zmd-hj","imageSrc":"assets/scenes/zmd-hj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTI3Mi45NiIgY3k9IjY3My45MiIgcng9IjM5MS4wMzk5OTk5OTk5OTk5NiIgcnk9IjI2Mi4wODAwMDAwMDAwMDAwNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[411.84,881.9200000000001,936,1664],"zoomedBox":[411.84,881.9200000000001,936,1664],"label":"亲子游园活动点","url":null,"text":"### 亲子游园活动点\n**亲子游戏点为何可以替代没有证据的售卖摊？**\n报道确认驿马广场游园会面向儿童并安排民俗游戏，却未列具体规则与器具。插画选择围圈交流和拍掌瞬间，强调家长、儿童与引导者的参与关系。桌面纸卡等陈设只是帮助表达互动的概念道具，不应被写成已经举办的某项命名游戏或付费项目。\n\n综述确认驿马广场的马嘟嘟新春游园会面向儿童，有民俗游戏。未记录具体游戏规则和器具。\n\n资料：2026春节实况综述文字；具体游戏项目未列明\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-zmd-hj-04-activity-cards","object-zmd-hj-04-guide-vest"],"label_anchor_points":[1198.08,608.4],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1198.08,"anchorY":608.4,"labelX":1198.08,"labelY":543.4,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-zmd-hj-04-activity-cards":{"id":"object-zmd-hj-04-activity-cards","parentId":"scene-zmd-hj-04","imageSrc":"assets/scenes/zmd-hj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSI3NDciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,0,900,720],"zoomedBox":[495,0,900,720],"label":"游戏点桌面纸卡","url":null,"text":"### 游戏点桌面纸卡\n儿童游园会的存在有2026实况文字，桌面纸卡则没有独立现场照片。它在本图中只作为组织互动的辅助陈设，不能解释为真实任务卡、兑奖券或收费凭证，更不能据它推导游戏规则。\n- **它在庙会中的作用**：概念表达互动组织\n- **记载与补全**：2026春节实况综述文字；具体游戏项目未列明。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[256,747],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":396,"labelY":652,"anchorX":256,"anchorY":747,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-zmd-hj-04-guide-vest":{"id":"object-zmd-hj-04-guide-vest","parentId":"scene-zmd-hj-04","imageSrc":"assets/scenes/zmd-hj-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0MTYiIGN5PSIzNjAiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[158,56,563,776],"zoomedBox":[158,56,563,776],"label":"互动引导者的红色马甲","url":null,"text":"### 互动引导者的红色马甲\n面向儿童的民俗游戏有报道依据，但没有记录某位引导者的制服。插画用红色马甲区分组织者与参与家庭，便于阅读互动角色；这一服装是概念选择，不是皇家驿站工作人员制服档案。\n- **它在庙会中的作用**：区分引导者与参与者\n- **记载与补全**：2026春节实况综述文字；具体游戏项目未列明。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[416,360],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":556,"labelY":265,"anchorX":416,"anchorY":360,"labelWidth":240,"labelHeight":36,"score":0,"isCustomPosition":true}},"fair-jy-sl":{"id":"fair-jy-sl","parentId":"54749336813040","label":"济源","imageSrc":"assets/worlds/jy-sl.webp","box":[341.31,1008.14,429.11,1145.94],"zoomedBox":[341.31,1008.14,429.11,1145.94],"maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjEzNTAiIHZpZXdCb3g9IjAgMCAyNDAwIDEzNTAiPjxwYXRoIGQ9Ik0xMTQ0LjI3LDM1OC40MiBMMTE0MS43NSwzNTguMjYgTDExNDAsMzU3LjA2IEwxMTM3LjE3LDM1Ny45NiBMMTEzNS43MywzNjIuMzcgTDExMzMuOTIsMzU5LjA4IEwxMTM0Ljc0LDM1NS41OCBMMTEzMi40NywzNTUuMTggTDExMzAuMzgsMzUzLjI1IEwxMTMwLjA5LDM1MS43OCBMMTEyOC4yNCwzNTEuNjUgTDExMjQuODcsMzQ5LjQgTDExMjQuMiwzNDUuOTkgTDExMjIuOTksMzQ1LjY5IEwxMTIxLjg5LDM0OC41NyBMMTEyMC43NCwzNDQuNTYgTDExMTcuOTcsMzQ3LjE3IEwxMTE3Ljg0LDM0OS4zMiBMMTEyMC45NSwzNTAuNTEgTDExMjEuNTIsMzUzLjYgTDExMTguMSwzNTQuODggTDExMTQuOTksMzU0LjI1IEwxMTA5LjgxLDM1NC42NCBMMTEwOC40NywzNTYuNzYgTDExMDYuODEsMzU2LjUzIEwxMTAyLjUxLDM1NC4xMSBMMTA5OC4yMywzNTUuMjIgTDEwOTMuNzcsMzUyLjYzIEwxMDkyLjM4LDM1My44NCBMMTA5MC40OCwzNTIuNTYgTDEwODcuNzIsMzUzLjQ1IEwxMDgxLjM3LDM1MC44IEwxMDc3LjEyLDM0OS45MyBMMTA3NS4xMSwzNTAuNjMgTDEwNzIuNDgsMzUzLjk2IEwxMDcwLjcsMzU0Ljg1IEwxMDYxLjkyLDM1NS4wOSBMMTA1OS4yOCwzNTQuNjcgTDEwNTUuODcsMzU1LjQ1IEwxMDU4Ljg3LDM0Ny42NiBMMTA1Ni45OCwzNDcuNDUgTDEwNTQuNzksMzQ5LjkgTDEwNTAuNzQsMzUwLjA5IEwxMDQ3LjI1LDM1MS41MyBMMTA0Mi4zMywzNTAuMzEgTDEwNDMuMTEsMzQ4Ljc2IEwxMDQyLjQ1LDM0Ny4zNSBMMTAzNy41MiwzNDYuNjUgTDEwMzQuMjEsMzQ0Ljk2IEwxMDI2LjgyLDM0My4yNyBMMTAyNC4xMywzNDQuNjIgTDEwMjIuNDMsMzQzLjUyIEwxMDIzLjMyLDM0Mi44NSBMMTAxOS4yMywzNDEuNDYgTDEwMTUuODIsMzQxLjkzIEwxMDEyLjYxLDM0MS4zMSBMMTAxMS45LDM0My4yMiBMMTAxNC4zNCwzNDQuNjIgTDEwMTYuNTMsMzQ5LjgyIEwxMDE2LjgyLDM1NC41MyBMMTAxMi42MywzNTggTDEwMDkuNDYsMzU5LjM3IEwxMDA5LjM1LDM2MS43NCBMMTAxMS4zMiwzNjQuNjMgTDEwMTQuMDIsMzY5Ljk3IEwxMDEyLjg3LDM3Mi44NiBMMTAxNC4xOSwzNzMuODkgTDEwMTIuMTMsMzgyLjQ2IEwxMDEyLjE5LDM4NC41OSBMMTAxMy4zNSwzODYuOTYgTDEwMTMuMjMsMzkyLjE0IEwxMDExLjYyLDM5NC43NiBMMTAwOC44NiwzOTQuNDcgTDEwMDguMTQsMzk3LjExIEwxMDA5LjUzLDM5OC40NyBMMTAxOS4xNSwzOTggTDEwMjEuOTIsMzk4LjE2IEwxMDI1LjI0LDM5OS45OCBMMTAzMC4wNCw0MDEuMjkgTDEwMzMuNTMsNDA0LjI0IEwxMDM2Ljg4LDQxMC45MSBMMTA0MS40Niw0MTIuNzIgTDEwNDQuMjUsNDE0LjYzIEwxMDQ4LjIsNDE4LjIzIEwxMDUwLjE0LDQxNy44OSBMMTA1MS44Nyw0MTUuMzIgTDEwNTQuNjEsNDEzLjggTDEwNTguMjMsNDE3LjE1IEwxMDYyLjAyLDQxOC4wOCBMMTA2NC41Myw0MTguMDcgTDEwNjkuMzcsNDIwLjM0IEwxMDc0LjAzLDQyMS45IEwxMDc1LjE2LDQyMy4yNSBMMTA4My4xMiw0MjIuNzEgTDEwODguNjIsNDIzLjkxIEwxMDkzLjczLDQyNi44MiBMMTA5NS4wMyw0MjguNDQgTDEwOTYuNzUsNDI3LjczIEwxMDk5LjY1LDQyOS4xMSBMMTEwMi4xMyw0MjguODggTDExMDIuNzEsNDIzLjgzIEwxMTAwLjg1LDQyMC44NSBMMTA5OC42OSw0MjAuODQgTDEwOTcuODQsNDIyLjc0IEwxMDk1LjEsNDIyLjU0IEwxMDk2LjY2LDQxNy44NCBMMTA5OS4zNSw0MTguMzIgTDExMDAuOTMsNDIwLjIgTDExMDUuMzMsNDE4LjcyIEwxMTA3LjcxLDQxNi4xOSBMMTEwOC43Miw0MTQuMTcgTDExMTAuNjMsNDExLjE5IEwxMTEzLjc2LDQxMS4zNiBMMTExNy4xOSw0MDkuMzIgTDExMTkuMTgsNDA5LjggTDExMjIuOTMsNDA5LjU3IEwxMTI0LjUxLDQwNy4zNSBMMTEyNy4wMyw0MDcuNjIgTDExMjguODIsNDA2LjI2IEwxMTMwLjQ0LDQwMS45NSBMMTEzMy4xNSwzOTkuNTIgTDExMzguNDUsMzk2Ljg0IEwxMTM5Ljk5LDM5NC45NiBMMTE0MC4xMywzOTEuMTggTDExNDEuNTEsMzkwLjE0IEwxMTQzLjM3LDM4NS40OSBMMTE0My41NywzODIuMzYgTDExNDUuODMsMzgwLjQ3IEwxMTQ1LjAxLDM2OC45NCBMMTE0NS45NCwzNjMuMjkgTDExNDQuMjcsMzU4LjQyIFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=","url":null,"text":"### 思礼清明庙会\n思礼清明庙会以乡镇大集为主体，红蓝棚摊沿交叉道路展开，食品、百货、农具和公共服务共同出现。由航拍进入地面，再看土馍、鸡蛋不翻与葫芦烙画，可以理解庙会不仅供人看热闹，也承接日常采购和乡镇交往。","childrenIds":["scene-jy-sl-02","scene-jy-sl-03","scene-jy-sl-04"],"label_anchor_points":[1076.61,382.3],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1076.61,"anchorY":382.3,"labelX":1076.61,"labelY":317.3,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"scene-jy-sl-02":{"id":"scene-jy-sl-02","parentId":"fair-jy-sl","imageSrc":"assets/scenes/jy-sl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iODk4LjU2IiBjeT0iMjg1LjQ4IiByeD0iMzE2LjE2IiByeT0iMjY2Ljc2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[18.72,582.4,552.24,1214.72],"zoomedBox":[18.72,582.4,552.24,1214.72],"label":"红蓝棚摊与通行街路","url":null,"text":"### 红蓝棚摊与通行街路\n**走到地面后，棚摊与通道的关系发生了什么变化？**\n航拍中近似色块的棚顶，在地面变成遮蔽商品和交流的边界；中央通道让人前行，两侧台面又让人停下来选择。这个视角由航拍结构与经营区文字共同推演，缺乏实景近照。因此商品陈列、通道宽度和每顶棚的位置属于概念表达，不是实测市场平面。\n\n临时棚摊沿道路布置，周边现代楼房树木；有餐饮、百货等经营区。\n\n资料：2026航拍结构与官方经营区文字\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jy-sl-02-market-canopy"],"label_anchor_points":[881.9200000000001,271.44],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":881.9200000000001,"anchorY":271.44,"labelX":881.9200000000001,"labelY":206.44,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jy-sl-02-market-canopy":{"id":"object-jy-sl-02-market-canopy","parentId":"scene-jy-sl-02","imageSrc":"assets/scenes/jy-sl-02.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIzNjgiIGN5PSIyOTciIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[94,8,499,728],"zoomedBox":[94,8,499,728],"label":"地面篷摊的棚架","url":null,"text":"### 地面篷摊的棚架\n官方总结列六经营区，航拍确认临时棚摊沿街分布。本图把这一结构转为地面视角，以棚架划分经营与通行空间；具体支杆样式、货物摆法、桌高与路宽没有近照验证，只能作为示意。\n- **它在庙会中的作用**：组织经营边界与行走空间\n- **记载与补全**：2026航拍结构与官方经营区文字。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[368,297],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":508,"labelY":202,"anchorX":368,"anchorY":297,"labelWidth":168,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-jy-sl-03":{"id":"scene-jy-sl-03","parentId":"fair-jy-sl","imageSrc":"assets/scenes/jy-sl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMjk5LjUyIiBjeT0iMjg1LjQ4IiByeD0iMjk5LjUyIiByeT0iMjY2Ljc2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[18.72,0,552.24,599.04],"zoomedBox":[18.72,0,552.24,599.04],"label":"看戏的人群","url":null,"text":"### 看戏的人群\n**群众看戏在乡镇大集里承担什么样的停留？**\n购买通常围绕单个摊位发生，看戏却让不同年龄的赶会者共同面向舞台停留。插画用台口、戏服和观众关系表达这种集体观看。官方总结确认有戏曲，但没有演出近照和逐场节目单；具体剧种、角色、舞台外形及演员服装都不能据概念图认定。\n\n会期有戏曲，群众赶会。\n\n资料：2026镇政府总结文字；缺演出照片\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jy-sl-03-opera-curtain","object-jy-sl-03-opera-headpiece"],"label_anchor_points":[299.52,252.72000000000003],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":299.52,"anchorY":252.72000000000003,"labelX":299.52,"labelY":187.72000000000003,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jy-sl-03-opera-curtain":{"id":"object-jy-sl-03-opera-curtain","parentId":"scene-jy-sl-03","imageSrc":"assets/scenes/jy-sl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMjgiIGN5PSIzNDIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[140,0,545,720],"zoomedBox":[140,0,545,720],"label":"临时看戏场景的红色幕布","url":null,"text":"### 临时看戏场景的红色幕布\n镇政府总结确认会期有戏曲活动，未提供舞台形制与近照。图中红色幕布用于把表演面从普通街景中框出来，让观众朝同一方向观看；它是概念布置，不是思礼实际戏台颜色或结构的记录。\n- **它在庙会中的作用**：解释共同观看的表演边界\n- **记载与补全**：2026镇政府总结文字；缺演出照片。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[128,342],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":268,"labelY":247,"anchorX":128,"anchorY":342,"labelWidth":264,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-jy-sl-03-opera-headpiece":{"id":"object-jy-sl-03-opera-headpiece","parentId":"scene-jy-sl-03","imageSrc":"assets/scenes/jy-sl-03.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI1NjAiIGN5PSIyNTIiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[50,200,455,920],"zoomedBox":[50,200,455,920],"label":"概念戏曲头饰","url":null,"text":"### 概念戏曲头饰\n官方资料只确认戏曲项目，没有演员造型照片。本图以头饰和戏衣表现台上人物与日常观众的不同身份，便于理解看戏场景；不能给这件头饰附会地方独有含义，也不能指认演员角色。\n- **它在庙会中的作用**：在概念图中辨认表演人物\n- **记载与补全**：2026镇政府总结文字；缺演出照片。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[560,252],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":700,"labelY":157,"anchorX":560,"anchorY":252,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}},"scene-jy-sl-04":{"id":"scene-jy-sl-04","parentId":"fair-jy-sl","imageSrc":"assets/scenes/jy-sl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjY0IiBoZWlnaHQ9IjkzNiIgdmlld0JveD0iMCAwIDE2NjQgOTM2Ij48ZWxsaXBzZSBjeD0iMTE4OS43NiIgY3k9IjY0NS44NCIgcng9IjQ3NC4yNCIgcnk9IjI5MC4xNTk5OTk5OTk5OTk5NyIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[355.68,715.52,936,1664],"zoomedBox":[355.68,715.52,936,1664],"label":"土馍与鸡蛋不翻","url":null,"text":"### 土馍与鸡蛋不翻\n**土馍和鸡蛋不翻为何适合放在同一页比较？**\n两种食品都被2026现场稿点名，却具有不同外形：土馍以细小颗粒出现，鸡蛋不翻以帽状外观作为参考。并排观察能让地方品类从抽象名单变为易辨物件。它们是否实际同摊、纸袋样式和摊主递接动作没有现场近照，只是帮助比较的概念构图。\n\n现场报道土馍、鸡蛋不翻；地方资料描述土馍为小颗粒、鸡蛋不翻呈帽状。\n\n资料：2026集市报道；食物外观另参地方美食资料\nAI概念插画。画中人物与器物可进一步查看。","childrenIds":["object-jy-sl-04-small-tumo","object-jy-sl-04-egg-bufan"],"label_anchor_points":[1314.56,570.96],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"anchorX":1314.56,"anchorY":570.96,"labelX":1314.56,"labelY":505.96000000000004,"isCustomPosition":true,"labelWidth":90,"labelHeight":36,"score":0}},"object-jy-sl-04-small-tumo":{"id":"object-jy-sl-04-small-tumo","parentId":"scene-jy-sl-04","imageSrc":"assets/scenes/jy-sl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSI0NDgiIGN5PSI3MTEiIHI9IjQ2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==","box":[495,88,900,808],"zoomedBox":[495,88,900,808],"label":"颗粒状土馍","url":null,"text":"### 颗粒状土馍\n2026现场稿确认思礼集市上有土馍，另参地方美食资料描述其小颗粒形态。插画用散放与装袋表现方便携带的食品外观；配方、加工步骤和这家概念摊的包装不能作为实况信息。\n- **它在庙会中的作用**：体现地方食品形态与陈列差异\n- **记载与补全**：2026集市报道；食物外观另参地方美食资料。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[448,711],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":588,"labelY":616,"anchorX":448,"anchorY":711,"labelWidth":120,"labelHeight":36,"score":0,"isCustomPosition":true}},"object-jy-sl-04-egg-bufan":{"id":"object-jy-sl-04-egg-bufan","parentId":"scene-jy-sl-04","imageSrc":"assets/scenes/jy-sl-04.webp","maskSrc":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48Y2lyY2xlIGN4PSIxMTM2IiBjeT0iNzU2IiByPSI0NiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=","box":[495,776,900,1496],"zoomedBox":[495,776,900,1496],"label":"帽状鸡蛋不翻","url":null,"text":"### 帽状鸡蛋不翻\n鸡蛋不翻被2026集市报道明确提及，其帽状外观来自另行核对的地方食品资料。图中金黄色成品与土馍小颗粒形成对照，方便辨认品类；实际尺寸、出品火候和摊位制作流程仍未获实拍证据。\n- **它在庙会中的作用**：提供第二种地方食品识别\n- **记载与补全**：2026集市报道；食物外观另参地方美食资料。细节与艺术补全详见探索路径。","childrenIds":[],"label_anchor_points":[1136,756],"label_coordinates":null,"content_cost_map":null,"labelPosition":{"labelX":996,"labelY":661,"anchorX":1136,"anchorY":756,"labelWidth":144,"labelHeight":36,"score":0,"isCustomPosition":true}}};
Object.assign(nodesData, window.FairSupplementalNodes || {});
const rootId = '54749336813040';
const staticAudio = (typeof __TOUR_AUDIO_PLACEHOLDER__ !== 'undefined') ? __TOUR_AUDIO_PLACEHOLDER__ : null;
const staticTimeline = (typeof __TOUR_TIMELINE_PLACEHOLDER__ !== 'undefined') ? __TOUR_TIMELINE_PLACEHOLDER__ : null;

// =========================================
// Production-Safe Logger Wrapper
// =========================================
const enableDebugLogging = 'false' === 'true';
const Logger = {
  log(...args) {
    if (enableDebugLogging) {
      console.log(...args);
    }
  },
  info(...args) {
    if (enableDebugLogging) {
      console.info(...args);
    }
  },
  warn(...args) {
    console.warn(...args);
  },
  error(...args) {
    console.error(...args);
  }
};

// =========================================
// JavaScript interaction logic
// =========================================
function resolveStartingNodeId() {
  try {
    if (typeof window !== 'undefined') {
      if (window.__INITIAL_NODE_ID__) {
        return window.__INITIAL_NODE_ID__;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const paramNodeId = urlParams.get('node_id') || urlParams.get('nodeId');
      if (paramNodeId) {
        return paramNodeId;
      }
      if (window.parent && window.parent !== window) {
        try {
          const parentParams = new URLSearchParams(window.parent.location.search);
          const parentNodeId = parentParams.get('node_id') || parentParams.get('nodeId');
          if (parentNodeId) {
            return parentNodeId;
          }
        } catch (e) {}
      }
    }
  } catch (e) {}
  return typeof rootId !== 'undefined' ? rootId : '0';
}
let currentNodeId = resolveStartingNodeId();
const lateralNavigationMode = parseInt('0' || '0');
const minimapMode = parseInt('3' || '0');
const lightboxMode = parseInt('1' || '0');
const zoomAnimation = parseInt('1' || '0');
const labelPlacementMethod = parseInt('0' || '0');
const physicsParams = JSON.parse('{}' || '{}');

const isImmersiveModeConfig = 'true' === 'true';
const isLabelVisibilityInImmersiveLightboxAlways =
    '1' === '1';
const showMobileLandscapeNudge = 'false' === 'true';
let isImmersiveMode = false;
let isLightboxTransitioning = false;
let activeTempImage = null;
let pendingZoomChildId = null;
let isTextPanelMinimized = false;
let userCollapsedTextPanel = false;

const CHEVRON_DOWN_SVG =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>';
const CHEVRON_UP_SVG =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>';
const CLOSE_ICON_SVG =
    '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
const ARROW_BACK_SVG =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';

/**
 * Measures the layout height of the text panel when maximized.
 */
function measureMaximizedTextPanelHeight() {
  if (!textPanel || textPanel.classList.contains('floating-active')) return;
  const wasMinimized = textPanel.classList.contains('minimized');
  if (wasMinimized) {
    textPanel.classList.remove('minimized');
  }
  void (textPanel.offsetHeight || 0);
  if (wasMinimized) {
    textPanel.classList.add('minimized');
  }
}

let activePreloadedImages = [];
let isMobileApp = false;
let mobileTopSafeArea = 0;
let mobileBottomSafeArea = 0;
let activeMobileNodeId = null;
let hasDismissedOnboardingTooltip = false;
let shouldPanToOnboarding = false;
let nudgeTimeoutId = null;
let nudgeReturnTimeoutId = null;
let hasNudgedOrInteracted = false;
let onboardingTooltipInitialX = null;

/**
 * Computes the total top clearance (safe area + navigation toolbar + buffer)
 * in screen pixels to prevent labels from colliding with top navigation buttons.
 * @return {number} Top clearance in screen pixels.
 */
function getTopNavClearancePx() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const isWeb = !isMobileApp;

  // Ignore top safe area for landscape and web during label computation
  if (isLandscape || isWeb) {
    return 10;
  }

  const toolbar = document.getElementById('lightbox-toolbar');
  if (toolbar && toolbar.offsetParent !== null) {
    const toolbarRect = toolbar.getBoundingClientRect();
    const cRect = mainContainer ? mainContainer.getBoundingClientRect() : {top: 0};
    const toolbarBottomInContainer = toolbarRect.bottom - cRect.top;
    if (toolbarBottomInContainer > 0) {
      return toolbarBottomInContainer + 16; // 16px buffer below bottom edge of toolbar buttons
    }
  }

  let safeArea = mobileTopSafeArea;
  if (!safeArea) {
    const cssSafeArea = parseInt(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--mobile-top-safe-area'),
        10);
    if (!isNaN(cssSafeArea) && cssSafeArea > 0) {
      safeArea = cssSafeArea;
    }
  }
  const effectiveSafeArea = safeArea || (isMobileViewport() ? 50 : 20);
  const navBarHeight = 52;
  const buffer = 16;
  return effectiveSafeArea + navBarHeight + buffer;
}

/**
 * Computes the total bottom clearance (safe area + bottom sheet title/chevron +
 * buffer) in screen pixels to prevent labels from colliding with bottom UI
 * controls.
 * @return {number} Bottom clearance in screen pixels from viewport bottom.
 */
function getBottomClearancePx() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const isMobile = isMobileViewport() || ('false' === 'true') ||
      Boolean(false) || isMobileApp;

  // On landscape, UI is arranged horizontally / at corners with minimal bottom
  // interference
  if (isLandscape) {
    let safeArea = mobileBottomSafeArea;
    if (!safeArea) {
      const cssSafeArea = parseInt(
          getComputedStyle(document.documentElement)
              .getPropertyValue('--mobile-bottom-safe-area'),
          10);
      if (!isNaN(cssSafeArea) && cssSafeArea > 0) {
        safeArea = cssSafeArea;
      }
    }
    return Math.max(16, (safeArea || 0) + 12);
  }

  // On desktop / non-mobile:
  if (!isMobile) {
    const tourOverlay = document.getElementById('tour-overlay');
    if (tourOverlay && tourOverlay.offsetParent !== null &&
        getComputedStyle(tourOverlay).display !== 'none') {
      const cRect = mainContainer ? mainContainer.getBoundingClientRect() :
                                    {bottom: window.innerHeight};
      const tRect = tourOverlay.getBoundingClientRect();
      const clearance = cRect.bottom - tRect.top;
      if (clearance > 0) return clearance + 20;
    }
    return 30;  // Clean margin for desktop canvas bottom
  }

  // On mobile portrait:
  const cRect = mainContainer ? mainContainer.getBoundingClientRect() :
                                {bottom: window.innerHeight};

  // 1. If tour overlay is active / visible
  const tourOverlay = document.getElementById('tour-overlay');
  if (tourOverlay && tourOverlay.offsetParent !== null &&
      getComputedStyle(tourOverlay).display !== 'none') {
    const tRect = tourOverlay.getBoundingClientRect();
    const clearance = cRect.bottom - tRect.top;
    if (clearance > 0) {
      return clearance + 24;
    }
  }

  // Safe area calculation
  let safeArea = mobileBottomSafeArea;
  if (!safeArea) {
    const cssSafeArea = parseInt(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--mobile-bottom-safe-area'),
        10);
    if (!isNaN(cssSafeArea) && cssSafeArea > 0) {
      safeArea = cssSafeArea;
    }
  }
  const effectiveSafeArea = safeArea || 20;

  // 2. Check text-panel state
  const textPanel = document.getElementById('text-panel');
  if (textPanel && textPanel.offsetParent !== null &&
      !textPanel.classList.contains('hidden') &&
      getComputedStyle(textPanel).display !== 'none') {
    // If text panel is minimized / collapsed:
    if (textPanel.classList.contains('minimized') || isTextPanelMinimized) {
      const collapsedHeaderHeight = 54;
      const bottomOffset = 20;
      const buffer = 28;
      return effectiveSafeArea + bottomOffset + collapsedHeaderHeight + buffer;
    } else {
      // Text panel is EXPANDED: clear the whole panel
      const tpRect = textPanel.getBoundingClientRect();
      const clearance = cRect.bottom - tpRect.top;
      if (clearance > 0) {
        return clearance + 20;
      }
    }
  }

  // 3. Fallback calculation for mobile portrait (assumes collapsed state)
  const collapsedHeaderHeight = 54;
  const bottomOffset = 20;
  const buffer = 28;
  return effectiveSafeArea + bottomOffset + collapsedHeaderHeight + buffer;
}

/**
 * Preloads an asset and pins it in memory to prevent garbage collection.
 * @param {string} src
 * @return {!Promise<?HTMLImageElement>}
 */
const preloadAsset = (src) => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      activePreloadedImages.push(img); // Pin in memory
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
};

if (isImmersiveModeConfig) {
  document.body.classList.add('immersive-config-active');
  if (isLabelVisibilityInImmersiveLightboxAlways) {
    document.body.classList.add(
        'label-visibility-in-immersive-lightbox-always');
  }
  const inlineExploreBtn = document.getElementById('inline-explore-button');
  if (inlineExploreBtn) {
    const iconSpan = inlineExploreBtn.querySelector('.explore-icon');
    if (iconSpan) {
      iconSpan.textContent = 'expand_content';
    }
    inlineExploreBtn.classList.add('immersive-style');
  }

  // Display the inline CTA button to encourage lightbox expansion
  const tourBtn = document.getElementById('inline-virtual-tour-button');
  if (tourBtn) {
    tourBtn.style.display = 'flex';
    tourBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof handleFirstClick === 'function') {
        handleFirstClick(e);
      }
    });
  }
}

window.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'isMobileApp' ||
      event.data.type === 'setIsMobileApp') {
    const isMobileVal =
        event.data.value === true || event.data.isMobileApp === true;
    isMobileApp = isMobileVal;
    Logger.log('Set isMobileApp to:', isMobileApp);
    if (isMobileApp) {
      document.body.classList.add('is-mobile-app');
    } else {
      document.body.classList.remove('is-mobile-app');
    }
    updateOrientationNudge();
    Object.values(nodesData).forEach(n => {
      n.hasComputedPhysics = false;
    });
    renderLabels();
  }

  if (event.data.type === 'mobileTopSafeArea' ||
      event.data.type === 'topSafeArea' ||
      event.data.type === 'setTopSafeArea') {
    const rawVal = event.data.height !== undefined ?
        event.data.height :
        (event.data.value !== undefined ? event.data.value :
                                          event.data.topSafeArea);
    const value = parseInt(rawVal, 10);
    if (!isNaN(value)) {
      mobileTopSafeArea = value;
      document.documentElement.style.setProperty(
          '--mobile-top-safe-area', `${value}px`);
      Logger.log('Set --mobile-top-safe-area to:', value);
      Object.values(nodesData).forEach(n => {
        n.hasComputedPhysics = false;
      });
      renderLabels();
    }
  }

  if (event.data.type === 'mobileBottomSafeArea' ||
      event.data.type === 'bottomSafeArea' ||
      event.data.type === 'setBottomSafeArea') {
    const rawVal = event.data.height !== undefined ?
        event.data.height :
        (event.data.value !== undefined ? event.data.value :
                                          event.data.bottomSafeArea);
    const value = parseInt(rawVal, 10);
    if (!isNaN(value)) {
      mobileBottomSafeArea = value;
      document.documentElement.style.setProperty(
          '--mobile-bottom-safe-area', `${value}px`);
      Logger.log('Set --mobile-bottom-safe-area to:', value);
      Object.values(nodesData).forEach(n => {
        n.hasComputedPhysics = false;
      });
      renderLabels();
    }
  }

  if (event.data.type === 'mobileLeftSafeArea' ||
      event.data.type === 'leftSafeArea' ||
      event.data.type === 'setLeftSafeArea') {
    const rawVal = event.data.width !== undefined ?
        event.data.width :
        (event.data.value !== undefined ? event.data.value :
                                          event.data.leftSafeArea);
    const value = parseInt(rawVal, 10);
    if (!isNaN(value)) {
      document.documentElement.style.setProperty(
          '--mobile-left-safe-area', `${value}px`);
      Logger.log('Set --mobile-left-safe-area to:', value);
      Object.values(nodesData).forEach(n => {
        n.hasComputedPhysics = false;
      });
      renderLabels();
    }
  }

  if (event.data.type === 'mobileRightSafeArea' ||
      event.data.type === 'rightSafeArea' ||
      event.data.type === 'setRightSafeArea') {
    const rawVal = event.data.width !== undefined ?
        event.data.width :
        (event.data.value !== undefined ? event.data.value :
                                          event.data.rightSafeArea);
    const value = parseInt(rawVal, 10);
    if (!isNaN(value)) {
      document.documentElement.style.setProperty(
          '--mobile-right-safe-area', `${value}px`);
      Logger.log('Set --mobile-right-safe-area to:', value);
      Object.values(nodesData).forEach(n => {
        n.hasComputedPhysics = false;
      });
      renderLabels();
    }
  }
});

window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'initLightboxMode') {
    const targetNodeId = event.data.node_id || event.data.nodeId;
    if (isImmersiveModeConfig && !isImmersiveMode) {
      if (targetNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[targetNodeId]) {
        currentNodeId = targetNodeId;
      }
      isImmersiveMode = true;
      isLandscapeNudgeDismissed = false;
      userCollapsedTextPanel = false;
      updateOrientationNudge();
      isLightboxTransitioning = true;
      shouldPanToOnboarding = true;

      if (nudgeTimeoutId) clearTimeout(nudgeTimeoutId);
      if (nudgeReturnTimeoutId) clearTimeout(nudgeReturnTimeoutId);
      nudgeTimeoutId = null;
      nudgeReturnTimeoutId = null;
      hasNudgedOrInteracted = false;

      document.body.classList.add('immersive-active');
      if (minimapMode === 3) {
        document.body.classList.add('minimap-lightbox-active');
      }
      const header = document.getElementById('immersive-header');
      if (header) {
        header.style.display = 'flex';
      }

      // Hide labels/dots instantly during the transition to avoid jank
      if (labelsContainer) labelsContainer.classList.add('hidden-instant');
      if (labelsSvg) labelsSvg.classList.add('hidden-instant');

      renderNode(currentNodeId);

      // Disable transition temporarily so the initial pan snaps instantly
      const oldImageTransition = mainImage.style.transition;
      mainImage.style.transition = 'none';
      if (labelsContainer) labelsContainer.style.transition = 'none';

      // Reposition viewport instantly to focus on onboarding dot
      resetImmersiveViewport();

      // Force layout reflow to register the instant position change
      void mainImage.offsetWidth;

      // Restore transition styles for subsequent movements
      mainImage.style.transition = oldImageTransition;
      if (labelsContainer) labelsContainer.style.transition = '';

      // Force viewport reset and show dots after the image transition completes.
      let transitioned = false;
      const onTransitionEnd = (e) => {
        if (e && e.target !== mainImage) return;
        if (transitioned) return;
        transitioned = true;
        mainImage.removeEventListener('transitionend', onTransitionEnd);
        Logger.log('Image transition completed, initializing immersive layout');
        
        isLightboxTransitioning = false;
        resetImmersiveViewport();

        // Fade them back in smoothly
        if (labelsContainer) labelsContainer.classList.remove('hidden-instant');
        if (labelsSvg) labelsSvg.classList.remove('hidden-instant');

        showOnboardingTooltip();
        startNudgeTimer();

        executePendingZoom();
      };

      mainImage.addEventListener('transitionend', onTransitionEnd);
      setTimeout(onTransitionEnd, 600); // Failsafe fallback
    } else if (isImmersiveMode) {
      if (targetNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[targetNodeId]) {
        if (currentNodeId !== targetNodeId) {
          renderNode(targetNodeId);
        }
      } else if (!targetNodeId && typeof rootId !== 'undefined') {
        if (currentNodeId !== rootId) {
          renderNode(rootId);
        }
      }
    }
  }
});

if (false) {
  document.body.classList.add('text-floating');
} else {
  document.body.classList.add('text-below');
}

if (false) {
  document.body.classList.add('mobile-mode');
}

if ('2' === '2') {
  document.body.classList.add('text-visible-in-lightbox');
}

let handleFirstClick = null;
let isInlineModeRestricted =
    (typeof window !== 'undefined' && window.__IS_INLINE_MODE__ === true) ||
    false;
if (isInlineModeRestricted) {
  document.body.classList.add('inline-mode-restricted');
}
let globalLabelDraggingActive = false;
let labelDragTimeoutId = null;

if (lightboxMode === 1 || lightboxMode === 2) {
  /** Handles the first click to activate lightbox. */
  handleFirstClick = (e) => {
    if (globalLabelDraggingActive) {
      return;
    }

    const isInteractiveTarget = e.target.closest('.label') ||
        e.target.closest('.anchor-dot') ||
        e.target.closest('.anchor-dot-group') ||
        e.target.closest('.label-line-hit-target') ||
        e.target.closest('.anchor-dot-hit-target');

    const shouldPassThrough = isMobileApp ||
        (isLabelVisibilityInImmersiveLightboxAlways && isInteractiveTarget);

    if (!shouldPassThrough) {
      e.stopPropagation();
    }

    if (window.parent) {
      window.parent.postMessage({ type: 'lightboxFullscreenRequest' }, '*');
    }

    if (isInlineModeRestricted) {
      return;
    }

    document.body.classList.add('lightbox-active');
    document.removeEventListener('click', handleFirstClick, true);
  };

  // Create toolbar
  if (!document.getElementById('lightbox-toolbar')) {
    const toolbar = document.createElement('div');
    toolbar.id = 'lightbox-toolbar';

    // Left container (Back Arrow + Breadcrumbs)
    const toolbarLeft = document.createElement('div');
    toolbarLeft.className = 'toolbar-left';

    const backArrow = document.createElement('div');
    backArrow.id = 'lightbox-back-arrow';
    backArrow.innerHTML = ARROW_BACK_SVG;
    backArrow.classList.add('lightbox-back-arrow--hidden');
    toolbarLeft.appendChild(backArrow);

    const breadcrumbs = document.createElement('div');
    breadcrumbs.id = 'viewer-header-breadcrumbs';
    toolbarLeft.appendChild(breadcrumbs);

    toolbar.appendChild(toolbarLeft);

    // Right container (Feedback + Share + Collapse)
    const toolbarRight = document.createElement('div');
    toolbarRight.className = 'toolbar-right';

    const feedbackShareGroup =
        document.getElementById('lightbox-feedback-share-group');
    if (feedbackShareGroup) {
      toolbarRight.appendChild(feedbackShareGroup);
    }

    const collapseButton = document.createElement('button');
    collapseButton.id = 'lightbox-collapse-button';
    collapseButton.innerHTML = CLOSE_ICON_SVG;
    collapseButton.setAttribute('aria-label', 'Close');
    collapseButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      collapseLightbox();
    });
    toolbarRight.appendChild(collapseButton);

    toolbar.appendChild(toolbarRight);
    document.body.appendChild(toolbar);
  }

  /**
   * Collapses the lightbox view.
   */
  const collapseLightbox = () => {
    clearActiveTransitions();
    isAnimating = false;
    cancelNudge();
    if (window.parent) {
      window.parent.postMessage({ type: 'lightboxMinimizeRequest' }, '*');
    }
    // Delay the internal UI teardown so the iframe stays in fullscreen
    // dark mode while the parent dialog fades out. Without this delay,
    // the iframe instantly switches to inline mode (white background)
    // before the parent can react, causing a visible white flash.
    //
    // The 250ms value is intentionally coupled to the Angular dialog's
    // exitAnimationDuration (200ms) in deepzoom.ts, with 50ms headroom
    // for slower devices. A postMessage-based handshake (e.g. listening
    // for a 'lightboxClosed' event from afterClosed()) would be more
    // deterministic, but the iframe may already be mid-teardown by that
    // point, so a simple timeout is the pragmatic choice here.
    setTimeout(() => {
      document.body.classList.remove('lightbox-active');
      document.body.classList.remove('immersive-active');
      isImmersiveMode = false;
      updateOrientationNudge();
      renderNode(rootId);
      document.addEventListener('click', handleFirstClick, true);
    }, 250);
  };


  const inlineConversationButton =
      document.getElementById('lightbox-inline-conversation-button');
  const shareButton = document.getElementById('lightbox-share-button');
  const feedbackButton = document.getElementById('lightbox-feedback-button');
  const backArrow = document.getElementById('lightbox-back-arrow');
  const collapseButton = document.getElementById('lightbox-collapse-button');

  if (inlineConversationButton) {
    inlineConversationButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.parent) {
        window.parent.postMessage(
            {type: 'lightboxInlineConversationRequest'}, '*');
      }
    });
  }

  if (shareButton) {
    shareButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.parent) {
        window.parent.postMessage({type: 'lightboxShareRequest'}, '*');
      }
    });
  }

  if (feedbackButton) {
    feedbackButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof window.emitUserInteraction === 'function') {
        window.emitUserInteraction('FEEDBACK_OPEN');
      }
      if (typeof openFeedbackModal === 'function') {
        openFeedbackModal();
      }
    });
  }

  if (backArrow) {
    backArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseLightbox();
    });
  }

  if (collapseButton) {
    collapseButton.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseLightbox();
    });
  }

  // Global delegation fallback for close button
  document.addEventListener('click', (e) => {
    if (e.target && (e.target.id === 'lightbox-collapse-button' || e.target.closest('#lightbox-collapse-button'))) {
      e.stopPropagation();
      collapseLightbox();
    }
  });

  window.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.type === 'navigateToNode' || event.data.type === 'selectNode') {
      const targetNodeId = event.data.node_id || event.data.nodeId;
      if (targetNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[targetNodeId]) {
        if (currentNodeId !== targetNodeId) {
          renderNode(targetNodeId);
        }
      } else if (!targetNodeId && typeof rootId !== 'undefined') {
        if (currentNodeId !== rootId) {
          renderNode(rootId);
        }
      }
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'initInlineMode') {
      isInlineModeRestricted = true;
      document.body.classList.add('inline-mode-restricted');
      document.body.classList.remove('lightbox-active');
      document.body.classList.remove('immersive-active');
      document.body.classList.remove('minimap-lightbox-active');
      isImmersiveMode = false;
      if (miniMapContainer) {
        miniMapContainer.style.display = 'none';
      }
      const targetNodeId = event.data.node_id || event.data.nodeId;
      if (targetNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[targetNodeId]) {
        if (currentNodeId !== targetNodeId) {
          renderNode(targetNodeId);
        }
      } else if (!targetNodeId && typeof rootId !== 'undefined') {
        if (currentNodeId !== rootId) {
          renderNode(rootId);
        }
      }
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'initLightboxMode') {
      isInlineModeRestricted = false;
      document.body.classList.remove('inline-mode-restricted');
      document.body.classList.add('lightbox-active');
      document.removeEventListener('click', handleFirstClick, true);
      if (minimapMode === 3) {
        document.body.classList.add('minimap-lightbox-active');
      }
      if (!isImmersiveModeConfig) {
        const targetNodeId = event.data.node_id || event.data.nodeId;
        if (targetNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[targetNodeId]) {
          if (currentNodeId !== targetNodeId) {
            renderNode(targetNodeId);
          }
        } else if (!targetNodeId && typeof rootId !== 'undefined') {
          if (currentNodeId !== rootId) {
            renderNode(rootId);
          }
        }
      }
      const node = (nodesData && nodesData[currentNodeId]) || (nodesData && nodesData[rootId]);
      if (node) updateTextPanel(node.text, currentNodeId);
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data &&
        event.data.type === 'lightboxInlineConversationVisibilityChange') {
      const inlineConvBtn =
          document.getElementById('lightbox-inline-conversation-button');
      if (inlineConvBtn) {
        if (event.data.action === 'hide') {
          inlineConvBtn.classList.add(
              'lightbox-inline-conversation-button--hidden');
        } else if (event.data.action === 'show') {
          inlineConvBtn.classList.remove(
              'lightbox-inline-conversation-button--hidden');
        }
      }
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'lightboxShareVisibilityChange') {
      const shareBtn = document.getElementById('lightbox-share-button');
      if (shareBtn) {
        if (event.data.action === 'hide') {
          shareBtn.classList.add('lightbox-share-button--hidden');
        } else if (event.data.action === 'show') {
          shareBtn.classList.remove('lightbox-share-button--hidden');
        }
      }
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'lightboxBackButtonVisibilityChange') {
      const backBtn = document.getElementById('lightbox-back-arrow');
      if (backBtn) {
        if (event.data.action === 'hide') {
          backBtn.classList.add('lightbox-back-arrow--hidden');
        } else if (event.data.action === 'show') {
          backBtn.classList.remove('lightbox-back-arrow--hidden');
        }
      }
    }
  });

  if (lightboxMode === 2) {
    if (!isInlineModeRestricted) {
      document.body.classList.add('lightbox-active');
    }
  } else if (lightboxMode === 1) {
    document.addEventListener('click', handleFirstClick, true);
  }
} else {
  const inlineExploreBtn = document.getElementById('inline-explore-button');
  if (inlineExploreBtn) {
    inlineExploreBtn.style.display = 'none';
  }
}

// hoveringChildId : the child id triggerd by the mouse stop
let hoveringChildId = null;
let pinnedChildId = null;
let suppressMouseLeave = false;
let isAnimating = false;
let hasPlayedInitialWash = false;

// Active transition timer tracking to prevent race conditions on abort/teardown
let activeTransitionTimeoutIds = [];

/**
 * Registers and tracks a transition timeout.
 * @param {!Function} callback
 * @param {number} delay
 * @return {number}
 */
function setTrackedTimeout(callback, delay) {
  const id = setTimeout(() => {
    activeTransitionTimeoutIds = activeTransitionTimeoutIds.filter(t => t !== id);
    if (!isAnimating) return;
    callback();
  }, delay);
  activeTransitionTimeoutIds.push(id);
  return id;
}

/**
 * Clears all active transition timeouts and removes active temporary animation elements.
 */
function clearActiveTransitions() {
  activeTransitionTimeoutIds.forEach(id => clearTimeout(id));
  activeTransitionTimeoutIds = [];
  if (activeTempImage) {
    activeTempImage.remove();
    activeTempImage = null;
  }
}

// Durations and curves
const STANDARD_ZOOM_DURATION_MS = 500;
const LATERAL_NAVIGATION_DURATION_MS = 400;
const UI_FADE_MS = 200;
const ASYNC_DELAY_MS = 50;
const MASK_BLUR_RADIUS_PX = 12;
const MAX_MASK_CANVAS_DIM = 1024;
const IMMERSIVE_ZOOM_BUFFER = 1.1;
const BEZIER_SMOOTH = 'cubic-bezier(0.5, 0, 0.5, 1)';
const BEZIER_SNAPPY = 'cubic-bezier(0.31, 0.94, 0.34, 1)';

// Transitions
const UI_ELEMENT_FADE_IN = `opacity ${UI_FADE_MS}ms ${BEZIER_SNAPPY}`;
const TRANSITION_STANDARD_ZOOM = `transform ${STANDARD_ZOOM_DURATION_MS}ms ${BEZIER_SMOOTH}`;
const TRANSITION_IMAGE_DEFAULT = `opacity 150ms ${BEZIER_SMOOTH}, ${TRANSITION_STANDARD_ZOOM}`;

const mainImage = document.getElementById('main-image');
const maskContainer = document.getElementById('mask-canvas-container');
const mainContainer = document.getElementById('main-image-container');
const urlTooltip = document.getElementById('url-tooltip');
const labelsContainer = document.getElementById('labels-container');
const labelsSvg = document.getElementById('labels-svg');
if ('0' === '1' && labelsSvg) {
  labelsSvg.classList.add('extended-targets');
}
const textPanel = document.getElementById('text-panel');
if (textPanel && typeof ResizeObserver !== 'undefined') {
  const textPanelObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const height = entry.target.offsetHeight;
      document.documentElement.style.setProperty(
          '--text-panel-height', `${height}px`);
    }
  });
  textPanelObserver.observe(textPanel);
}
const regionHighlight = document.getElementById('region-highlight');
const lightboxZoomOutBtn = document.getElementById('lightbox-zoom-out-button');

if (lightboxZoomOutBtn) {
  lightboxZoomOutBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissOnboardingTooltip();
    if (isAnimating) return;
    lightboxZoomOutBtn.classList.remove('lightbox-zoom-out-button--visible');
    const currentNode = nodesData[currentNodeId];
    if (currentNode && currentNode.parentId) {
      zoomToParent(currentNode.parentId, currentNodeId);
    } else {
      renderNode(rootId);
    }
  });
}

if ('0' === '1' && false) {
  textPanel.style.cursor = 'grab';
  let isTextPanelDragging = false;
  let tpStartX, tpStartY, tpInitialLeft, tpInitialTop;

  textPanel.addEventListener('mousedown', (e) => {
    isTextPanelDragging = true;
    textPanel.style.cursor = 'grabbing';
    tpStartX = e.clientX;
    tpStartY = e.clientY;
    const rect = textPanel.getBoundingClientRect();

    // Lock width and height so it does not resize/jump during drag
    textPanel.style.width = `${rect.width}px`;
    textPanel.style.height = `${rect.height}px`;

    const parentRect = textPanel.parentElement.getBoundingClientRect();
    tpInitialLeft = rect.left - parentRect.left;
    tpInitialTop = rect.top - parentRect.top;

    textPanel.style.bottom = 'auto';
    textPanel.style.right = 'auto';
    textPanel.style.left = `${tpInitialLeft}px`;
    textPanel.style.top = `${tpInitialTop}px`;
    e.stopPropagation();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isTextPanelDragging) return;
    const dx = e.clientX - tpStartX;
    const dy = e.clientY - tpStartY;
    textPanel.style.left = `${tpInitialLeft + dx}px`;
    textPanel.style.top = `${tpInitialTop + dy}px`;
  });

  window.addEventListener('mouseup', () => {
    if (isTextPanelDragging) {
      isTextPanelDragging = false;
      textPanel.style.cursor = 'grab';
    }
  });
}

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
const miniMapContainer = document.getElementById('mini-map-container');
const miniMapBg = document.getElementById('mini-map-bg');
const miniMapViewport = document.getElementById('mini-map-viewport');
const miniMapViewportBg = document.getElementById('mini-map-viewport-bg');

if (miniMapBg) {
  if (isImmersiveModeConfig) {
    miniMapBg.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
    if (miniMapViewportBg) {
      miniMapViewportBg.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    }
  }

  /** Updates the minimap layout once the image loads. */
  miniMapBg.onload = () => {
    updateMinimapLayout();
  };
}

/**
 * Sets up the minimap container size matching the loaded image aspect ratio.
 */
const updateMinimapLayout = () => {
  if (!miniMapBg || !miniMapContainer) return;
  const naturalWidth = miniMapBg.naturalWidth;
  const naturalHeight = miniMapBg.naturalHeight;
  if (naturalWidth && naturalHeight) {
    const AR = naturalWidth / naturalHeight;
    const computedStyle = window.getComputedStyle(miniMapContainer);
    const maxWidth =
        parseFloat(computedStyle.getPropertyValue('--minimap-max-width')) ||
        160;
    const maxHeight =
        parseFloat(computedStyle.getPropertyValue('--minimap-max-height')) ||
        90;

    let width = maxWidth;
    let height = maxHeight;

    if (AR > (maxWidth / maxHeight)) {
      width = maxWidth;
      height = maxWidth / AR;
    } else {
      height = maxHeight;
      width = maxHeight * AR;
    }

    miniMapContainer.style.width = `${width}px`;
    miniMapContainer.style.height = `${height}px`;
    miniMapContainer.style.setProperty('--minimap-width', `${width}px`);
    miniMapContainer.style.setProperty('--minimap-height', `${height}px`);

    renderMinimapDots(naturalWidth, naturalHeight);
    syncMinimapViewport();
  }
};

let isDragging = false;
let isPinching = false;
let pinchStartDistance = 0;
let pinchStartScale = 1;
let pinchStartMidpoint = {x: 0, y: 0};
let dragUiHidden = false;
let dragStartX = 0;
let dragStartY = 0;
let dX = 0;
let dY = 0;
let currentNeighbors = {left: null, right: null, up: null, down: null};

// Find if the node has no child nodes with labels
/**
 * Checks if node has no child labels.
 * @param {string} nodeId
 * @return {boolean}
 */
function hasNoChildLabels(nodeId) {
  const node = nodesData[nodeId];
  if (!node || !node.childrenIds || node.childrenIds.length === 0) {
    return true;
  }
  for (let i = 0; i < node.childrenIds.length; i++) {
    const child = nodesData[node.childrenIds[i]];
    if (child && (child.label || child.text)) {
      return false;
    }
  }
  return true;
}

// Find adjacent siblings for the given node
/**
 * Finds neighbors.
 * @param {string} nodeId
 * @return {!Object}
 */
function findNeighbors(nodeId) {
  const neighbors = {left: null, right: null, up: null, down: null};
  const currentNode = nodesData[nodeId];
  if (!currentNode || !currentNode.parentId) return neighbors;

  const parentNode = nodesData[currentNode.parentId];
  if (!parentNode || !parentNode.childrenIds) return neighbors;
  const siblings = parentNode.childrenIds.filter(id => id !== nodeId);
  const currentBox = currentNode.box;  // [y_min, x_min, y_max, x_max]

  if (!currentBox || siblings.length === 0) return neighbors;

  const currentCX = (currentBox[1] + currentBox[3]) / 2;
  const currentCY = (currentBox[0] + currentBox[2]) / 2;

  let closestDistances =
      {left: Infinity, right: Infinity, up: Infinity, down: Infinity};

  siblings.forEach(siblingId => {
    const siblingNode = nodesData[siblingId];
    if (!siblingNode || !siblingNode.box) return;

    const sibBox = siblingNode.box;
    const sibCX = (sibBox[1] + sibBox[3]) / 2;
    const sibCY = (sibBox[0] + sibBox[2]) / 2;

    const dx = sibCX - currentCX;
    const dy = sibCY - currentCY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);  // -180 to 180

    if (angle >= -45 && angle <= 45) {  // Right
      if (dist < closestDistances.right) {
        closestDistances.right = dist;
        neighbors.right = siblingId;
      }
    } else if (angle > 45 && angle < 135) {  // Down
      if (dist < closestDistances.down) {
        closestDistances.down = dist;
        neighbors.down = siblingId;
      }
    } else if (angle >= 135 || angle <= -135) {  // Left
      if (dist < closestDistances.left) {
        closestDistances.left = dist;
        neighbors.left = siblingId;
      }
    } else if (angle < -45 && angle > -135) {  // Up
      if (dist < closestDistances.up) {
        closestDistances.up = dist;
        neighbors.up = siblingId;
      }
    }
  });

  return neighbors;
}

/** Hides UI. */
function hideUI() {
  if (labelsContainer) labelsContainer.style.opacity = '0';
  if (labelsSvg) labelsSvg.style.opacity = '0';
  if (textPanel) textPanel.style.opacity = '0';
  if (miniMapContainer && !isDragging) miniMapContainer.style.opacity = '0';
  if (regionHighlight) regionHighlight.style.opacity = '0';
  const buttons = document.querySelectorAll('.edge-arrow');
  buttons.forEach(b => b.style.opacity = '0');
  const tooltip = document.getElementById('onboarding-tooltip');
  if (tooltip) tooltip.classList.remove('visible');
}

/** Shows UI. */
function showUI() {
  if (labelsContainer) labelsContainer.style.opacity = '';
  if (labelsSvg) labelsSvg.style.opacity = '';
  if (textPanel) textPanel.style.opacity = '';
  if (miniMapContainer) miniMapContainer.style.opacity = '';
  if (regionHighlight) regionHighlight.style.opacity = '';
  const buttons = document.querySelectorAll('.edge-arrow');
  buttons.forEach(b => b.style.opacity = '');
  showOnboardingTooltip();
}

// Update Arrow Affordances and Mini Map Updates
/** Updates navigation controls. */
function updateNavigationControls() {
  const currentNode = nodesData[currentNodeId];
  if (!currentNode) return;

  if (currentNodeId === rootId) {
    if (arrowLeft) arrowLeft.classList.remove('visible');
    if (arrowRight) arrowRight.classList.remove('visible');
    if (arrowUp) arrowUp.classList.remove('visible');
    if (arrowDown) arrowDown.classList.remove('visible');
    if (lightboxZoomOutBtn) lightboxZoomOutBtn.classList.remove('lightbox-zoom-out-button--visible');
    
    // Minimap mode 3 allows showing minimap on the Overview root node
    if (minimapMode === 3 && currentNode.imageSrc) {
      // Continue execution to update minimap
    } else {
      if (miniMapContainer) miniMapContainer.style.display = 'none';
      return;
    }
  }

  if (lightboxZoomOutBtn && !isImmersiveMode) {
    lightboxZoomOutBtn.classList.add('lightbox-zoom-out-button--visible');
  } else if (lightboxZoomOutBtn) {
    lightboxZoomOutBtn.classList.remove('lightbox-zoom-out-button--visible');
  }

  currentNeighbors = findNeighbors(currentNodeId);

  if (lateralNavigationMode > 0) {
    if (arrowLeft) {
      if (currentNeighbors.left)
        arrowLeft.classList.add('visible');
      else
        arrowLeft.classList.remove('visible');
    }
    if (arrowRight) {
      if (currentNeighbors.right)
        arrowRight.classList.add('visible');
      else
        arrowRight.classList.remove('visible');
    }
    if (arrowUp) {
      if (currentNeighbors.up)
        arrowUp.classList.add('visible');
      else
        arrowUp.classList.remove('visible');
    }
    if (arrowDown) {
      if (currentNeighbors.down)
        arrowDown.classList.add('visible');
      else
        arrowDown.classList.remove('visible');
    }
  } else {
    if (arrowLeft) arrowLeft.classList.remove('visible');
    if (arrowRight) arrowRight.classList.remove('visible');
    if (arrowUp) arrowUp.classList.remove('visible');
    if (arrowDown) arrowDown.classList.remove('visible');
  }

  const parentNode = nodesData[currentNode.parentId];
  const showMinimap = (minimapMode === 1 || minimapMode === 2 || minimapMode === 3);

  // Minimap mode 3 matches current level node, modes 1 & 2 match parent level node
  const isLightboxOpen = !isInlineModeRestricted &&
      (isImmersiveMode || document.body.classList.contains('lightbox-active'));
  const canShow = showMinimap && isLightboxOpen &&
      ((minimapMode === 3 && currentNode.imageSrc) ||
       (minimapMode !== 3 && parentNode && parentNode.imageSrc));

  if (canShow) {
    miniMapContainer.style.display = 'block';

    const dotsContainer = document.getElementById('mini-map-dots');
    if (dotsContainer) {
      const contextId = (minimapMode === 3) ? currentNodeId : (parentNode ? currentNode.parentId : null);
      const existingContextId = dotsContainer.getAttribute('data-parent-id');

      if (minimapMode === 2 || minimapMode === 3) {
        if (contextId) {
          if (existingContextId === contextId && dotsContainer.children.length > 0) {
            const dots = dotsContainer.querySelectorAll('.mini-map-dot');
            dots.forEach(d => {
              if (d.getAttribute('data-node-id') === currentNodeId) {
                d.classList.add('active');
              } else {
                d.classList.remove('active');
              }
            });
          } else {
            const bgSrc = (minimapMode === 3) ? currentNode.imageSrc : parentNode.imageSrc;
            if (miniMapBg.src !== bgSrc) {
              miniMapBg.src = bgSrc || '';
              if (miniMapViewportBg) {
                miniMapViewportBg.src = bgSrc || '';
              }
            } else if (miniMapBg.complete) {
              miniMapBg.onload();
            }
          }
        }
      } else {
        dotsContainer.innerHTML = '';
        dotsContainer.removeAttribute('data-parent-id');
      }
    }

    const bgSrc = (minimapMode === 3) ? currentNode.imageSrc : parentNode.imageSrc;
    if (miniMapBg.src === bgSrc && miniMapBg.complete) {
      syncMinimapViewport();
    }
  } else {
    if (miniMapContainer) miniMapContainer.style.display = 'none';
  }
}

/**
 * Synchronizes the minimap viewport box with the currently visible area of the main image.
 * Supports dynamic panning and zooming in immersive mode.
 * @param {number=} dragX Current drag horizontal offset (clamped)
 * @param {number=} dragY Current drag vertical offset (clamped)
 */
function syncMinimapViewport(dragX = null, dragY = null) {
  const currentNode = nodesData[currentNodeId];
  if (!currentNode) return;

  const parentNode = nodesData[currentNode.parentId];
  const useParentCoords = (minimapMode !== 3);

  let divX = 10;
  let divY = 10;
  if (useParentCoords) {
    if (miniMapBg && miniMapBg.naturalWidth && miniMapBg.naturalHeight) {
      divX = miniMapBg.naturalWidth / 100;
      divY = miniMapBg.naturalHeight / 100;
    }
  }

  if (!isImmersiveMode) {
    if (useParentCoords && parentNode) {
      const box = currentNode.box;
      if (box) {
        const leftVal = box[1] / divX;
        const topVal = box[0] / divY;
        miniMapViewport.style.top = `${topVal}%`;
        miniMapViewport.style.left = `${leftVal}%`;
        miniMapViewport.style.width = `${(box[3] - box[1]) / divX}%`;
        miniMapViewport.style.height = `${(box[2] - box[0]) / divY}%`;
        miniMapViewport.style.setProperty('--viewport-left', `${leftVal}%`);
        miniMapViewport.style.setProperty('--viewport-top', `${topVal}%`);
      }
    } else {
      miniMapViewport.style.top = '0%';
      miniMapViewport.style.left = '0%';
      miniMapViewport.style.width = '100%';
      miniMapViewport.style.height = '100%';
      miniMapViewport.style.setProperty('--viewport-left', '0%');
      miniMapViewport.style.setProperty('--viewport-top', '0%');
    }
    return;
  }

  const containerRect = mainContainer.getBoundingClientRect();
  const naturalWidth = mainImage.naturalWidth;
  const naturalHeight = mainImage.naturalHeight;
  if (!naturalWidth || !naturalHeight || containerRect.width === 0) return;

  const scale = currentImmersiveScale;
  const tx = dragX !== null ? dragX : currentImmersiveX;
  const ty = dragY !== null ? dragY : currentImmersiveY;

  const renderedWidth = naturalWidth * scale;
  const renderedHeight = naturalHeight * scale;

  const Cw = containerRect.width;
  const Ch = containerRect.height;

  const img_left = Cw / 2 + tx - renderedWidth / 2;
  const img_top = Ch / 2 + ty - renderedHeight / 2;

  const vis_left = Math.max(0, img_left);
  const vis_right = Math.min(Cw, img_left + renderedWidth);
  const vis_top = Math.max(0, img_top);
  const vis_bottom = Math.min(Ch, img_top + renderedHeight);

  const vx0 = (vis_left - img_left) / renderedWidth;
  const vx1 = (vis_right - img_left) / renderedWidth;
  const vy0 = (vis_top - img_top) / renderedHeight;
  const vy1 = (vis_bottom - img_top) / renderedHeight;

  let x0 = 0, y0 = 0, x1 = 1000, y1 = 1000;
  if (useParentCoords && parentNode) {
    const box = currentNode.box;
    if (box) {
      y0 = box[0];
      x0 = box[1];
      y1 = box[2];
      x1 = box[3];
    }
  }

  const parent_x0 = x0 / divX;
  const parent_y0 = y0 / divY;
  const parent_w = (x1 - x0) / divX;
  const parent_h = (y1 - y0) / divY;

  const left = parent_x0 + vx0 * parent_w;
  const top = parent_y0 + vy0 * parent_h;
  const width = (vx1 - vx0) * parent_w;
  const height = (vy1 - vy0) * parent_h;

  miniMapViewport.style.left = `${left}%`;
  miniMapViewport.style.top = `${top}%`;
  miniMapViewport.style.width = `${width}%`;
  miniMapViewport.style.height = `${height}%`;
  miniMapViewport.style.setProperty('--viewport-left', `${left}%`);
  miniMapViewport.style.setProperty('--viewport-top', `${top}%`);
}


/**
 * Renders dots on the minimap scaled to the background image dimensions.
 * @param {number} bgWidth Natural width of the minimap background image
 * @param {number} bgHeight Natural height of the minimap background image
 */
function renderMinimapDots(bgWidth, bgHeight) {
  const dotsContainer = document.getElementById('mini-map-dots');
  if (!dotsContainer) return;

  const currentNode = nodesData[currentNodeId];
  if (!currentNode) return;
  const parentNode = nodesData[currentNode.parentId];
  const contextId = (minimapMode === 3) ? currentNodeId : (parentNode ? currentNode.parentId : null);

  dotsContainer.innerHTML = '';
  dotsContainer.setAttribute('data-parent-id', contextId || '');

  for (const id in nodesData) {
    const sibling = nodesData[id];
    if (sibling.parentId === contextId &&
        (isImmersiveModeConfig || sibling.imageSrc)) {
      const b = sibling.box;
      if (b) {
        let cx, cy;
        if (sibling.labelPosition) {
          cx = sibling.labelPosition.anchorX;
          cy = sibling.labelPosition.anchorY;
        } else {
          cy = (b[0] + b[2]) / 2;
          cx = (b[1] + b[3]) / 2;
        }
        const dot = document.createElement('div');
        dot.className = 'mini-map-dot';
        if (isImmersiveModeConfig && sibling.childrenIds &&
            sibling.childrenIds.length > 0) {
          dot.classList.add('hollow');
        }
        dot.setAttribute('data-node-id', id);
        dot.style.left = `${(cx / bgWidth) * 100}%`;
        dot.style.top = `${(cy / bgHeight) * 100}%`;
        dotsContainer.appendChild(dot);
      }
    }
  }

  const dots = dotsContainer.querySelectorAll('.mini-map-dot');
  dots.forEach(d => {
    if (d.getAttribute('data-node-id') === currentNodeId) {
      d.classList.add('active');
    } else {
      d.classList.remove('active');
    }
  });
}

/**
 * Pans to node.
 * @param {string} targetId
 * @param {string} direction
 * @param {number=} dX_px
 * @param {number=} dY_px
 */
function panToNode(targetId, direction, dX_px = 0, dY_px = 0) {
  if (isAnimating || !targetId) return;
  isAnimating = true;

  const targetNode = nodesData[targetId];
  if (!targetNode || !targetNode.imageSrc) {
    isAnimating = false;
    renderNode(targetId);
    return;
  }

  const bufferImg = new Image();
  bufferImg.style.position = 'absolute';
  bufferImg.style.top = '0';
  bufferImg.style.left = '0';
  bufferImg.style.width = '100%';
  bufferImg.style.height = '100%';
  bufferImg.style.objectFit = 'contain';
  bufferImg.style.zIndex = '1';
  bufferImg.src = targetNode.imageSrc;

  let startX = 0, startY = 0;
  if (direction === 'left') startX = -100;
  if (direction === 'right') startX = 100;
  if (direction === 'up') startY = -100;
  if (direction === 'down') startY = 100;

  let bufferX = startX;
  let bufferY = startY;
  let mainX_pct = 0, mainY_pct = 0;

  if (dX_px !== 0 || dY_px !== 0) {
    const width = mainImage.offsetWidth || 1;
    const height = mainImage.offsetHeight || 1;
    mainX_pct = (dX_px / width) * 100;
    mainY_pct = (dY_px / height) * 100;
    bufferX = mainX_pct + startX;
    bufferY = mainY_pct + startY;
    mainImage.style.transform = `translate(${mainX_pct}%, ${mainY_pct}%)`;
  }

  bufferImg.style.transform = `translate(${bufferX}%, ${bufferY}%)`;
  mainContainer.appendChild(bufferImg);

  labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
  labelsContainer.style.opacity = '0';
  labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
  labelsSvg.style.opacity = '0';

  setTimeout(() => {
    const duration = LATERAL_NAVIGATION_DURATION_MS;
    bufferImg.style.transition = `transform ${duration}ms ${BEZIER_SMOOTH}`;
    mainImage.style.transition = `transform ${duration}ms ${BEZIER_SMOOTH}`;

    bufferImg.style.transform = 'translate(0%, 0%)';
    mainImage.style.transform = `translate(${- startX}%, ${- startY}%)`;

    const tgtBox = targetNode ? targetNode.box : null;
    const view = document.getElementById('mini-map-viewport');
    const viewDots = document.getElementById('mini-map-dots');

    if (tgtBox && view) {
      view.style.transition = `all ${duration}ms ${BEZIER_SMOOTH}`;
      view.style.top = `${tgtBox[0] / 10}%`;
      view.style.left = `${tgtBox[1] / 10}%`;
      view.style.width = `${(tgtBox[3] - tgtBox[1]) / 10}%`;
      view.style.height = `${(tgtBox[2] - tgtBox[0]) / 10}%`;
    }

    if (viewDots) {
      const dots = viewDots.querySelectorAll('.mini-map-dot');
      dots.forEach(d => {
        if (d.getAttribute('data-node-id') === targetId) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      });
    }

    setTimeout(() => {
      activeTempImage = bufferImg;
      mainImage.style.transition = 'none';
      mainImage.style.transform = 'translate(0,0) scale(1)';
      mainImage.style.opacity = '0';
      isAnimating = false;
      renderNode(targetId);

      setTimeout(() => {
        showUI();
      }, ASYNC_DELAY_MS);
    }, duration);
  }, 10);
}

/**
 * Shows hover overlay.
 * @param {string} childId
 * @return {boolean}
 */
function showHoverOverlay(childId) {
  const canvas = document.getElementById(`mask-canvas-${childId}`);
  if (!canvas || canvas.width === 0) return false;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.getImageData(0, 0, w, h);

  let imgCanvas = null;
  try {
    imgCanvas = document.createElement('canvas');
    imgCanvas.width = w;
    imgCanvas.height = h;
    const imgCtx = imgCanvas.getContext('2d');
    imgCtx.drawImage(mainImage, 0, 0, w, h);
    const imgPixelData = imgCtx.getImageData(0, 0, w, h).data;
    const maskPixelData = imageData.data;

    let totalBrightness = 0;
    let count = 0;
    for (let i = 0; i < maskPixelData.length; i += 16) {
      if (maskPixelData[i] > 200) {
        const r = imgPixelData[i];
        const g = imgPixelData[i + 1];
        const b = imgPixelData[i + 2];
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        totalBrightness += brightness;
        count++;
      }
    }
    const avgBrightness = count > 0 ? totalBrightness / count : 0;

    if (avgBrightness > 200) {
      Logger.log('Switching to high-brightness mode');
      regionHighlight.classList.add('high-brightness');
    } else {
      regionHighlight.classList.remove('high-brightness');
    }
  } catch (e) {
    regionHighlight.classList.remove('high-brightness');
  } finally {
    if (imgCanvas) {
      // Immediately release scratch canvas GPU memory (critical on WebKit/iOS).
      imgCanvas.width = 0;
      imgCanvas.height = 0;
    }
  }

  const blurCanvas = document.createElement('canvas');
  blurCanvas.width = w;
  blurCanvas.height = h;
  const blurCtx = blurCanvas.getContext('2d');
  blurCtx.putImageData(imageData, 0, 0);
  const blurRadius = MASK_BLUR_RADIUS_PX * (w / (mainImage.naturalWidth || w));
  blurCtx.filter = `blur(${Math.max(1, blurRadius)}px)`;
  blurCtx.drawImage(blurCanvas, 0, 0);

  const directMaskUrl = blurCanvas.toDataURL();
  // Immediately release scratch canvas GPU memory (critical on WebKit/iOS).
  blurCanvas.width = 0;
  blurCanvas.height = 0;

  const rect = mainImage.getBoundingClientRect();
  const containerRect = mainContainer.getBoundingClientRect();
  const offsetX = rect.left - containerRect.left;
  const offsetY = rect.top - containerRect.top;

  regionHighlight.style.width = `${rect.width}px`;
  regionHighlight.style.height = `${rect.height}px`;
  regionHighlight.style.left = `${offsetX}px`;
  regionHighlight.style.top = `${offsetY}px`;

  regionHighlight.style.backgroundImage = `url(${mainImage.src})`;
  regionHighlight.style.webkitMaskImage = `url(${directMaskUrl})`;
  regionHighlight.style.maskImage = `url(${directMaskUrl})`;
  regionHighlight.style.webkitMaskSize = '100% 100%';

  // Reset the Off-Screen scroll left behind by Wash Animation!
  regionHighlight.style.webkitMaskPosition = '0px 0px';

  regionHighlight.style.opacity = '1';
  regionHighlight.style.transition = '';
  return true;
}

/** Hides hover overlay. */
function hideHoverOverlay() {
  regionHighlight.style.opacity = '0';
}

/** Shows wash animation. */
function showWashAnimation() {
  const node = nodesData[currentNodeId];
  if (!node || node.childrenIds.length === 0) return;

  isAnimating = true;  // Lock interactions during setup sweep!

  // Group elements to show/hide for easier DRY management
  const items = [labelsContainer, labelsSvg, textPanel];
  items.forEach(el => el.style.opacity = '0');

  regionHighlight.style.backgroundImage = 'none';
  regionHighlight.style.backgroundColor = 'white';
  regionHighlight.style.clipPath = '';  // restore standard clip bounds
  regionHighlight.style.opacity = '0';

  const aggCanvas = document.createElement('canvas');
  const naturalW = mainImage.naturalWidth;
  const naturalH = mainImage.naturalHeight;
  const washAnimationScale =
      Math.min(1, MAX_MASK_CANVAS_DIM / Math.max(naturalW, naturalH));
  const maskWidth = Math.round(naturalW * washAnimationScale);
  const maskHeight = Math.round(naturalH * washAnimationScale);
  aggCanvas.width = maskWidth;
  aggCanvas.height = maskHeight;
  const aggCtx = aggCanvas.getContext('2d');
  aggCtx.fillStyle = 'black';
  aggCtx.fillRect(0, 0, maskWidth, maskHeight);

  let hasMask = false;
  node.childrenIds.forEach(childId => {
    const maskCanvas = document.getElementById(`mask-canvas-${childId}`);
    if (maskCanvas && maskCanvas.width > 0) {
      aggCtx.globalCompositeOperation = 'screen';
      aggCtx.drawImage(maskCanvas, 0, 0, maskWidth, maskHeight);
      hasMask = true;
    }
  });

  if (!hasMask) {
    // Immediately release scratch canvas GPU memory (critical on WebKit/iOS).
    aggCanvas.width = 0;
    aggCanvas.height = 0;
    isAnimating = false;  // Unlock interactions!
    return;
  }

  const blurCanvas = document.createElement('canvas');
  blurCanvas.width = maskWidth;
  blurCanvas.height = maskHeight;
  const blurCtx = blurCanvas.getContext('2d');
  const washBlurRadius =
      MASK_BLUR_RADIUS_PX * (maskWidth / (naturalW || maskWidth));
  blurCtx.filter = `blur(${Math.max(1, washBlurRadius)}px)`;
  blurCtx.drawImage(aggCanvas, 0, 0);

  const aggregateMaskUrl = blurCanvas.toDataURL();
  // Immediately release scratch canvas GPU memory (critical on WebKit/iOS).
  aggCanvas.width = 0;
  aggCanvas.height = 0;
  blurCanvas.width = 0;
  blurCanvas.height = 0;
  regionHighlight.style.webkitMaskImage =
      `linear-gradient(to right, transparent 0%, white 45%, white 60%, transparent 68%), url(${
          aggregateMaskUrl})`;
  regionHighlight.style.webkitMaskComposite = 'source-in';
  regionHighlight.style.maskComposite = 'intersect';

  regionHighlight.style.webkitMaskSize = `${maskWidth * 2}px 100%, 100% 100%`;
  regionHighlight.style.webkitMaskPosition =
      `-${maskWidth * 1.38}px 0px, 0px 0px`;

  // Animation sequence: Soft Beam Sweep left to right
  setTimeout(() => {
    regionHighlight.style.transition = `opacity 0.4s ${BEZIER_SMOOTH}`;
    regionHighlight.style.opacity = '0.7';

    setTimeout(() => {
      regionHighlight.style.transition =
          `-webkit-mask-position 1.4s ${BEZIER_SMOOTH}, mask-position 1.4s ${BEZIER_SMOOTH}`;
      regionHighlight.style.webkitMaskPosition = `${maskWidth}px 0px, 0px 0px`;

      setTimeout(() => {
        regionHighlight.style.opacity = '0';
        regionHighlight.style.backgroundColor = '';
        isAnimating = false;  // Unlock interactions setup sweep completes!

        items.forEach(el => {
          el.style.transition = UI_ELEMENT_FADE_IN;
          el.style.opacity = '1';
        });
      }, 1400);
    }, ASYNC_DELAY_MS);
  }, 100);
}

// Simple markdown to HTML parser
/**
 * Parses markdown.
 * @param {string} text
 * @return {string}
 */
function parseMarkdown(text) {
  if (!text) return '';
  // clang-format off
  let html = text
      // Escape HTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Code blocks (must be before inline code)
      .replace(/```([\\s\\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Headers
      .replace(/^###### (.+)$/gm, '<h6 class="text-panel-title">$1</h6>')
      .replace(/^##### (.+)$/gm, '<h5 class="text-panel-title">$1</h5>')
      .replace(/^#### (.+)$/gm, '<h4 class="text-panel-title">$1</h4>')
      .replace(/^### (.+)$/gm, '<h3 class="text-panel-title">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-panel-title">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-panel-title">$1</h1>')
      // Unordered lists
      .replace(/^\s*[*-]\s+(.+)$/gm, '<li>$1</li>')
      // Bold
      .replace(/[*][*]([^*]+)[*][*]/g, '<strong>$1</strong>')
      // Italic
      .replace(/[*]([^*]+)[*]/g, '<em>$1</em>');
  // clang-format on
  // Wrap consecutive <li> elements in a single <ul>, handling newlines between
  // items.
  html = html.replace(
      /(<li>[\s\S]*?<[/]li>([\s\n]*<li>[\s\S]*?<[/]li>)*)/g, match => {
        return '<ul>' + match + '</ul>';
      });
  return html;
}

// utility function: check if the pixel is white (allow some deviation)
/**
 * Checks if white pixel.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {boolean}
 */
function isWhitePixel(r, g, b) {
  return r > 230 && g > 230 && b > 230;
}

/**
 * Strips the rabbit emoji and leading spaces from label.
 * @param {string} text
 * @return {string}
 */
function stripRabbitEmoji(text) {
  if (!text) return '';
  return text.replace(/^(?:🐇\s*)+/u, '').trim();
}



/**
 * Handles dot/label tap interaction for mobile peeking and navigation.
 * Returns true if navigation was triggered, false if just highlighted.
 * @param {string} childId
 * @param {!Object} childNode
 * @return {boolean}
 */
function handleMobileNodeTap(childId, childNode) {
  if (isLabelVisibilityInImmersiveLightboxAlways) {
    if (childNode.url) {
      window.open(childNode.url, '_blank');
    } else {
      zoomToChild(childId);
    }
    return true;
  }

  if (activeMobileNodeId === childId) {
    activeMobileNodeId = null;
    if (childNode.url) {
      window.open(childNode.url, '_blank');
    } else {
      zoomToChild(childId);
    }
    return true;
  } else {
    if (activeMobileNodeId) {
      highlightLabel(activeMobileNodeId, false);
    }
    activeMobileNodeId = childId;
    highlightLabel(childId, true);
    showHoverOverlay(childId);
    hoveringChildId = childId;
    return false;
  }
}


// Highlight a label and its line
/**
 * Highlights label.
 * @param {string} childId
 * @param {boolean} highlight
 */
function highlightLabel(childId, highlight) {
  const label = document.getElementById(`label-${childId}`);
  const line = document.getElementById(`line-${childId}`);
  const dot = document.getElementById(`dot-${childId}`);
  if (label) {
    if (highlight) {
      label.classList.add('highlight');
    } else {
      label.classList.remove('highlight');
    }
  }
  if (line) {
    if (highlight) {
      line.classList.add('highlight');
    } else {
      line.classList.remove('highlight');
    }
  }
  if (dot) {
    if (highlight) {
      dot.classList.add('highlight');
    } else {
      dot.classList.remove('highlight');
    }
  }
}

/**
 * Sets pinned class.
 * @param {string} childId
 * @param {boolean} isPinned
 */
function setPinnedClass(childId, isPinned) {
  const label = document.getElementById(`label-${childId}`);
  const line = document.getElementById(`line-${childId}`);
  const dot = document.getElementById(`dot-${childId}`);
  if (isPinned) {
    if (label) label.classList.add('pinned');
    if (line) line.classList.add('pinned');
    if (dot) dot.classList.add('pinned');
  } else {
    if (label) label.classList.remove('pinned');
    if (line) line.classList.remove('pinned');
    if (dot) dot.classList.remove('pinned');
  }
}

/**
 * Updates text panel in standard or immersive mode.
 * @param {string} text
 * @param {string} [nodeId]
 */
function updateTextPanel(text, nodeId = null) {
  const hasTour = window.__deepZoomTour__ && window.__deepZoomTour__.hasTour;
  let tourButtonHtml = '';
  if (nodeId === rootId && hasTour) {
    tourButtonHtml = `
      <div id="start-tour-btn-container" style="display: flex; justify-content: flex-start; margin-bottom: 16px;">
        <button id="start-tour-btn" class="audio-tour-chip" onclick="__deepZoomTour__.toggle()">
          <span class="google-symbols play-icon">play_arrow</span>
          <span class="chip-label">Audio Tour</span>
        </button>
      </div>
    `;
  }

  let parsedHtml = text ? parseMarkdown(text) : '';


  if (nodeId && nodesData[nodeId]) {
    const node = nodesData[nodeId];
    if (node.childrenIds && node.childrenIds.length > 0) {
      const didYouKnowCards = [];
      const isMobileView = window.innerWidth <= 640 || isMobileApp || (window.innerWidth <= 912 && window.innerHeight < window.innerWidth);
      node.childrenIds.forEach(cid => {
        const childNode = nodesData[cid];
        if (childNode && (childNode.nodeType === 'rabbit_hole' || (childNode.label && childNode.label.startsWith('🐇')))) {
          const cleanLabel = stripRabbitEmoji(childNode.label);
          const initialClass = isMobileView ? 'did-you-know-card is-collapsed' : 'did-you-know-card is-expanded';
          const chevronIcon = isMobileView ? CHEVRON_DOWN_SVG : CHEVRON_UP_SVG;
          didYouKnowCards.push(`
            <div class="${initialClass}" id="did-you-know-${cid}" onclick="handleDidYouKnowClick(event, '${cid}')">
              <div class="did-you-know-header-row" onclick="handleDidYouKnowToggle(event, '${cid}')">
                <span class="did-you-know-title">Did you know?</span>
                <button class="did-you-know-toggle-btn" aria-label="Toggle Did You Know" onclick="handleDidYouKnowToggle(event, '${cid}')">
                  <span class="did-you-know-chevron">${chevronIcon}</span>
                </button>
              </div>
              <div class="did-you-know-body">
                <div class="did-you-know-text">${cleanLabel}</div>
                <button class="did-you-know-action-btn" aria-label="Explore" onclick="handleExploreMoreClick('${cid}')">
                  <span class="google-symbols">prompt_suggestion</span>
                </button>
              </div>
            </div>
          `);
        }
      });
      if (didYouKnowCards.length > 0) {
        parsedHtml += `
          <div class="did-you-know-container">
            ${didYouKnowCards.join('')}
          </div>
        `;
      }
    }
  }

  if (textPanel) {
    textPanel.classList.remove('has-expanded-rabbit-hole');
  }
  document.body.classList.remove('has-expanded-rabbit-hole');
  parsedHtml = tourButtonHtml + parsedHtml;

  let finalHtml = parsedHtml;
  let hasTitle = false;
  if (isImmersiveModeConfig) {
    const headingMatch = parsedHtml.match(/<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>/i);
    hasTitle = !!headingMatch;
    if (headingMatch) {
      const headingHtml = headingMatch[0];
      const headingIndex = parsedHtml.indexOf(headingHtml);
      const beforeHeading = parsedHtml.substring(0, headingIndex);
      const afterHeading =
          parsedHtml.substring(headingIndex + headingHtml.length);
      finalHtml = beforeHeading + headingHtml +
          '<div class="text-panel-description">' + afterHeading + '</div>';
    } else {
      // Fallback when there is no heading tag: extract node label or first line of description
      let fallbackTitle = '';
      if (nodeId && nodesData[nodeId] && nodesData[nodeId].label) {
        fallbackTitle = nodesData[nodeId].label;
      } else {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = parsedHtml;
        const textContent = (tempDiv.textContent || tempDiv.innerText || '').trim();
        const firstLine = textContent.split('\n')[0].trim();
        fallbackTitle = firstLine;
      }

      if (fallbackTitle) {
        hasTitle = true;
        finalHtml = `<h3 class="text-panel-title fallback-title">${fallbackTitle}</h3>` +
            '<div class="text-panel-description">' + parsedHtml + '</div>';
      } else {
        finalHtml =
            '<div class="text-panel-description">' + parsedHtml + '</div>';
      }
    }
  }

  if (textPanel) {
    textPanel.classList.toggle('no-title', isImmersiveModeConfig && !hasTitle);
    if (isImmersiveModeConfig) {
      const toggleButtonHtml = `
        <button id="text-panel-toggle" class="text-panel-toggle-btn" aria-label="Toggle Text Panel">
          <span class="toggle-icon">${CHEVRON_DOWN_SVG}</span>
        </button>
      `;
      textPanel.innerHTML = `
        <div class="text-panel-backdrop blur-active"></div>
        ${toggleButtonHtml}
        <div class="text-panel-content">${finalHtml}</div>
      `;
      const toggleBtn = textPanel.querySelector('#text-panel-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBtn.blur();
          toggleTextPanelMinimization();
        });
      }
      if (userCollapsedTextPanel) {
        textPanel.classList.add('minimized');
        isTextPanelMinimized = true;
      }
      updateTextPanelToggleIcon();
    } else {
      textPanel.innerHTML = parsedHtml;
    }
  }
  const preTextEl = document.getElementById('immersive-pre-text');
  if (preTextEl) {
    preTextEl.innerHTML = finalHtml;
  }
  measureMaximizedTextPanelHeight();
}

let recalculateLabelsTimerId = null;

/**
 * Recalculates and re-renders labels when the text panel state changes.
 */
function recalculateLabelsForPanelState() {
  if (recalculateLabelsTimerId) {
    clearTimeout(recalculateLabelsTimerId);
    recalculateLabelsTimerId = null;
  }

  // Clear computed physics cache so labels recompute for the new layout bounds
  if (typeof currentNodeId !== 'undefined' && nodesData &&
      nodesData[currentNodeId]) {
    nodesData[currentNodeId].hasComputedPhysics = false;
  }
  renderLabels();

  // Run a second pass after CSS transition (300ms) completes to ensure final
  // layout stability
  recalculateLabelsTimerId = setTimeout(() => {
    recalculateLabelsTimerId = null;
    if (typeof currentNodeId !== 'undefined' && nodesData &&
        nodesData[currentNodeId]) {
      nodesData[currentNodeId].hasComputedPhysics = false;
    }
    renderLabels();
  }, 320);
}

/**
 * Sets the minimized/maximized state of the text panel.
 * @param {boolean} minimize
 * @param {boolean=} shouldRecalculateLabels
 */
function minimizeTextPanel(minimize, shouldRecalculateLabels = true) {
  if (!textPanel) return;
  const wasMinimized = isTextPanelMinimized;
  if (minimize) {
    textPanel.classList.add('minimized');
    isTextPanelMinimized = true;
  } else {
    textPanel.classList.remove('minimized');
    isTextPanelMinimized = false;
  }
  updateTextPanelToggleIcon();

  // Recalculate label positions whenever the panel is collapsed or expanded
  if (shouldRecalculateLabels && wasMinimized !== isTextPanelMinimized) {
    recalculateLabelsForPanelState();
  }
}

/**
 * Toggles the text panel minimization state from the button click.
 */
function toggleTextPanelMinimization() {
  if (!textPanel) return;
  if (isTextPanelMinimized) {
    userCollapsedTextPanel = false;
    minimizeTextPanel(false, true);
  } else {
    userCollapsedTextPanel = true;
    minimizeTextPanel(true, true);
  }
}

/**
 * Updates the toggle icon based on the minimized state.
 */
function updateTextPanelToggleIcon() {
  const toggleIcon = document.querySelector('#text-panel-toggle .toggle-icon');
  if (toggleIcon) {
    toggleIcon.innerHTML =
        isTextPanelMinimized ? CHEVRON_UP_SVG : CHEVRON_DOWN_SVG;
  }
}

/**
 * Checks if any visible anchor dots overlap with the text panel,
 * and automatically minimizes or maximizes the panel accordingly.
 */
function checkDotsOverlapWithTextPanel() {
  // Automatic collapse on label/dot collision feature has been disabled.
  return;
}

/**
 * Global click handler for "Explore More" / "Did you know?" buttons inside the text panel.
 * @param {string} childId
 */
function handleExploreMoreClick(childId) {
  if (typeof zoomToChild === 'function') {
    zoomToChild(childId);
  }
}
window.handleExploreMoreClick = handleExploreMoreClick;

/**
 * Toggles the collapsed/expanded state of the "Did you know?" card on mobile.
 * @param {!Event} event
 * @param {string} childId
 */
function handleDidYouKnowToggle(event, childId) {
  if (event) {
    event.stopPropagation();
  }
  const card = document.getElementById(`did-you-know-${childId}`);
  if (!card) return;
  const isExpanded = card.classList.contains('is-expanded');
  if (isExpanded) {
    card.classList.remove('is-expanded');
    card.classList.add('is-collapsed');
    const chevron = card.querySelector('.did-you-know-chevron');
    if (chevron) chevron.innerHTML = CHEVRON_DOWN_SVG;
  } else {
    card.classList.remove('is-collapsed');
    card.classList.add('is-expanded');
    const chevron = card.querySelector('.did-you-know-chevron');
    if (chevron) chevron.innerHTML = CHEVRON_UP_SVG;
  }

  // Auto-expand mobile text panel height to fit the expanded rabbit hole without scrolling
  const anyExpanded = document.querySelector('.did-you-know-card.is-expanded') !== null;
  if (textPanel) {
    textPanel.classList.toggle('has-expanded-rabbit-hole', anyExpanded);
  }
  document.body.classList.toggle('has-expanded-rabbit-hole', anyExpanded);
  measureMaximizedTextPanelHeight();
}
window.handleDidYouKnowToggle = handleDidYouKnowToggle;

/**
 * Handles click on the "Did you know?" card container.
 * Expands on mobile if collapsed; otherwise navigates to the rabbit hole.
 * @param {!Event} event
 * @param {string} childId
 */
function handleDidYouKnowClick(event, childId) {
  if (event.target.closest('.did-you-know-toggle-btn') || event.target.closest('.did-you-know-chevron')) {
    return;
  }
  const card = document.getElementById(`did-you-know-${childId}`);
  const isMobile = window.innerWidth <= 640 || isMobileApp || (window.innerWidth <= 912 && window.innerHeight < window.innerWidth);
  if (isMobile && card && card.classList.contains('is-collapsed')) {
    handleDidYouKnowToggle(event, childId);
    return;
  }
  handleExploreMoreClick(childId);
}
window.handleDidYouKnowClick = handleDidYouKnowClick;


/**
 * Restores text panel to its default stylesheet positioning.
 */
function restoreTextPanel() {
  restoreFloatingNodeElements();
  if (textPanel) {
    textPanel.classList.remove('floating-active');
    textPanel.style.position = '';
    textPanel.style.top = '';
    textPanel.style.left = '';
    textPanel.style.bottom = '';
    textPanel.style.right = '';
    textPanel.style.transform = '';
    textPanel.style.maxHeight = '';
    textPanel.style.overflowY = '';
    textPanel.style.overflow = '';

    const contentEl = textPanel.querySelector('.text-panel-content');
    if (contentEl) {
      contentEl.style.maxHeight = '';
      contentEl.style.overflowY = '';
    }
    measureMaximizedTextPanelHeight();
  }
}

/**
 * Detects if the viewport represents a mobile device (portrait or landscape).
 * @return {boolean}
 */
function isMobileViewport() {
  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  const isMobileLandscape =
      window.innerWidth <= 912 && window.innerHeight < window.innerWidth;
  return isMobilePortrait || isMobileLandscape || isMobileApp;
}

/**
 * Positions text panel beneath the clicked leaf node's dot.
 * @param {string} childId
 */
function repositionFloatingPanel(childId) {
  if (!isImmersiveModeConfig) return;
  if (isMobileViewport()) {
    restoreTextPanel();
  } else {
    repositionFloatingPanelToDot(`dot-${childId}`);
  }
}

/**
 * Calculates the projected viewport coordinate of the terminal node's anchor
 * dot on the zoomed child image.
 * @return {?{x: number, y: number}}
 */
function getTerminalDotPosition() {
  const childNode = nodesData[currentNodeId];
  if (!childNode || !childNode.zoomedBox || !childNode.labelPosition) {
    return null;
  }
  const [yMin, xMin, yMax, xMax] = childNode.zoomedBox;
  const pos = childNode.labelPosition;

  const boxWidth = Math.max(1, xMax - xMin);
  const boxHeight = Math.max(1, yMax - yMin);
  const rx = (pos.anchorX - xMin) / boxWidth;
  const ry = (pos.anchorY - yMin) / boxHeight;

  if (isImmersiveMode) {
    const {width: naturalWidth, height: naturalHeight} =
        getNaturalDimensions(currentNodeId);
    const containerRect = mainContainer.getBoundingClientRect();
    const offsetX =
        (containerRect.width - naturalWidth * currentImmersiveScale) / 2;
    const offsetY =
        (containerRect.height - naturalHeight * currentImmersiveScale) / 2;
    return {
      x: offsetX + rx * (naturalWidth * currentImmersiveScale),
      y: offsetY + ry * (naturalHeight * currentImmersiveScale)
    };
  }

  const rect = mainImage.getBoundingClientRect();
  const containerRect = mainContainer.getBoundingClientRect();

  return {
    x: (rect.left - containerRect.left) - currentImmersiveX + rx * rect.width,
    y: (rect.top - containerRect.top) - currentImmersiveY + ry * rect.height
  };
}

/**
 * Anchors the text panel below a specific dot element.
 * @param {string} dotId
 */
function repositionFloatingPanelToDot(dotId) {
  const dotEl = document.getElementById(dotId);
  if (!dotEl) return;

  const dotRect = dotEl.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  textPanel.classList.add('floating-active');
  if (isTextPanelMinimized) {
    minimizeTextPanel(false);
  }
  textPanel.style.setProperty('position', 'absolute', 'important');

  // Measure title offset dynamically
  const titleEl = textPanel.querySelector('.text-panel-title, h1, h2, h3');
  let titleOffset = 50;  // Fallback
  if (titleEl) {
    const panelRect = textPanel.getBoundingClientRect();
    const titleRect = titleEl.getBoundingClientRect();
    titleOffset = (titleRect.top - panelRect.top) + (titleRect.height / 2);
  }

  const dotOffset = 16;
  const dotCenterY = dotRect.top + dotRect.height / 2;

  // Align vertically: title center aligns with dot center
  let top = dotCenterY - titleOffset;
  const panelHeight = textPanel.offsetHeight || 250;

  if (top + panelHeight > viewportHeight - 16) {
    top = viewportHeight - panelHeight - 16;
  }
  top = Math.max(16, top);

  textPanel.style.setProperty('top', `${top}px`, 'important');
  textPanel.style.setProperty('bottom', 'auto', 'important');

  // Align horizontally: to the right of the dot
  let left = dotRect.right + dotOffset;
  const panelWidth = textPanel.offsetWidth || 400;

  if (left + panelWidth > viewportWidth - 16) {
    left = viewportWidth - panelWidth - 16;
  }
  left = Math.max(16, left);

  textPanel.style.setProperty('left', `${left}px`, 'important');

  textPanel.style.setProperty('overflow', 'visible', 'important');

  const maxH = viewportHeight - top - 16;
  const contentEl = textPanel.querySelector('.text-panel-content');
  if (contentEl) {
    contentEl.style.setProperty('max-height', `${maxH}px`, 'important');
    contentEl.style.setProperty('overflow-y', 'auto', 'important');
  }
}

/**
 * Updates the floating position of the text panel to follow its active dot.
 */
function updateActiveFloatingPanelPosition() {
  if (!isImmersiveModeConfig || !textPanel ||
      !textPanel.classList.contains('floating-active')) {
    return;
  }
  const childNode = nodesData[currentNodeId];
  if (!childNode) return;
  const isTerminal = childNode.childrenIds.length === 0;

  if (isTerminal) {
    repositionFloatingPanelToDot(`dot-${currentNodeId}`);
    if (!isMobileViewport()) {
      const dotEl = document.getElementById(`dot-${currentNodeId}`);
      if (dotEl) dotEl.classList.add('floating-node-hidden');
    }
  } else if (pinnedChildId) {
    repositionFloatingPanelToDot(`dot-${pinnedChildId}`);
    if (!isMobileViewport()) {
      hideFloatingNodeElements(pinnedChildId);
    }
  }
}

/**
 * Renders a single active locator dot for the terminal node on screen and
 * anchors text panel to it.
 */
function renderTerminalDot() {
  const childNode = nodesData[currentNodeId];
  if (!childNode) return;

  const dotPos = getTerminalDotPosition();
  if (!dotPos) return;

  labelsSvg.innerHTML = '';

  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('id', `dot-${currentNodeId}`);
  dot.setAttribute('class', 'anchor-dot terminal-node highlight pinned');
  dot.setAttribute('cx', dotPos.x);
  dot.setAttribute('cy', dotPos.y);

  const strokeWidth = isImmersiveMode ? 6 : 5;
  const dotRadius = isImmersiveMode ? 9 : 7.5;
  dot.setAttribute('r', dotRadius);
  dot.style.strokeWidth = `${strokeWidth}px`;
  dot.setAttribute('stroke-width', strokeWidth);
  dot.setAttribute('fill', '#ffffff');
  dot.setAttribute('stroke', 'rgba(255, 255, 255, 0.6)');

  if (childNode.label) {
    const titleEl =
        document.createElementNS('http://www.w3.org/2000/svg', 'title');
    titleEl.textContent = stripRabbitEmoji(childNode.label);
    dot.appendChild(titleEl);
  }

  labelsSvg.appendChild(dot);

  requestAnimationFrame(() => {
    repositionFloatingPanelToDot(`dot-${currentNodeId}`);
    if (!isMobileViewport()) {
      dot.classList.add('floating-node-hidden');
    }
  });
}



/**
 * Hides the dot, dashed line, and label when an active floating terminal panel is shown.
 * @param {string} childId
 */
function hideFloatingNodeElements(childId) {
  const label = document.getElementById(`label-${childId}`);
  const line = document.getElementById(`line-${childId}`);
  const dot = document.getElementById(`dot-${childId}`);
  const lineHit = document.getElementById(`line-hit-${childId}`);
  const dotHit = document.getElementById(`dot-hit-${childId}`);
  [label, line, dot, lineHit, dotHit].forEach(el => {
    if (el) {
      el.classList.add('floating-node-hidden');
    }
  });
}

/**
 * Restores visibility for any hidden floating terminal node elements.
 * @param {string=} childId
 */
function restoreFloatingNodeElements(childId) {
  if (!childId) {
    document.querySelectorAll('.floating-node-hidden').forEach(el => {
      el.classList.remove('floating-node-hidden');
    });
    return;
  }
  const label = document.getElementById(`label-${childId}`);
  const line = document.getElementById(`line-${childId}`);
  const dot = document.getElementById(`dot-${childId}`);
  const lineHit = document.getElementById(`line-hit-${childId}`);
  const dotHit = document.getElementById(`dot-hit-${childId}`);
  [label, line, dot, lineHit, dotHit].forEach(el => {
    if (el) {
      el.classList.remove('floating-node-hidden');
    }
  });
}

/** Unpins leaf. */
function unpinLeaf() {
  if (pinnedChildId) {
    restoreFloatingNodeElements(pinnedChildId);
    setPinnedClass(pinnedChildId, false);
    highlightLabel(pinnedChildId, false);
    hideHoverOverlay();
    restoreTextPanel();
    const currentText = nodesData[currentNodeId].text;
    updateTextPanel(currentText, currentNodeId);
    pinnedChildId = null;
    hoveringChildId = null;
  }
}

/**
 * Pins leaf.
 * @param {string} childId
 */
function pinLeaf(childId) {
  const childNode = nodesData[childId];
  if (pinnedChildId === childId) {
    unpinLeaf();
    return;
  }
  if (pinnedChildId) {
    restoreFloatingNodeElements(pinnedChildId);
    setPinnedClass(pinnedChildId, false);
    highlightLabel(pinnedChildId, false);
  }
  restoreTextPanel();
  pinnedChildId = childId;
  hoveringChildId = childId;
  highlightLabel(childId, true);
  setPinnedClass(childId, true);
  showHoverOverlay(childId);
  if (childNode.hoverSrc) {
    mainImage.src = childNode.hoverSrc;
    document.body.classList.add('widget-content-loaded');
  }
  updateTextPanel(childNode.text, childId);

  if (typeof emitUserInteraction === 'function') {
    emitUserInteraction('PIN_LEAF', { childId: childId, label: childNode.label });
  }

  // Automatically expand text panel when user taps on a leaf node
  userCollapsedTextPanel = false;
  minimizeTextPanel(false);

  const isTerminal = childNode.childrenIds.length === 0;
  if (isImmersiveModeConfig && isTerminal && !isMobileViewport()) {
    repositionFloatingPanel(childId);
    hideFloatingNodeElements(childId);
  }
}

/**
 * Calculates dynamic transition duration based on distance and scale difference.
 * Zooming out is boosted to be 30% faster.
 * @param {number} translateX
 * @param {number} translateY
 * @param {number} scale
 * @param {boolean=} isZoomOut
 * @return {number} The computed duration in milliseconds.
 */
function getDynamicDuration(translateX, translateY, scale, isZoomOut = false) {
  const distPx = Math.sqrt(translateX * translateX + translateY * translateY);
  const scaleRatio = Math.max(scale, 1 / scale);
  const logScale = Math.log2(scaleRatio);
  const baseDuration = Math.round(400 + distPx * 0.25 + logScale * 60);

  if (isZoomOut) {
    const computedBase = Math.min(780, Math.max(400, baseDuration));
    return Math.min(540, Math.max(280, Math.round(computedBase * 0.70)));
  }

  return Math.min(780, Math.max(400, baseDuration));
}

/**
 * Dynamically compares the child image against the parent's cropped region
 * inside a canvas. Returns true if the child image is visually similar (static
 * zoom-in crop).
 *
 * How it works:
 * 1. Downsamples the parent's crop region and the child's image to two 32x32
 * canvases.
 * 2. Normalizes pixel colors to grayscale luminosity values (0.0 to 1.0).
 * 3. Calculates the Mean Squared Error (MSE) of the pixel arrays.
 *    MSE represents the average squared difference in pixel brightness.
 *    - MSE = 0.0: Pixel-for-pixel identical.
 *    - MSE < 0.02: Visually very similar (usually same image with minor
 * compression noise).
 *    - MSE >= 0.02: Visually different (contains newly generated visual
 * structures).
 *
 * @param {string} childId The child node ID to compare.
 * @return {!Promise<boolean>} A promise resolving to true if visually similar
 *     (stay zoomed out), false if visually different (zoom in).
 */
function isVisuallySimilarImage(childId) {
  const childNode = nodesData[childId];
  if (!childNode.imageSrc || !mainImage.src) return Promise.resolve(false);

  const box = childNode.zoomedBox || childNode.box;
  if (!box) return Promise.resolve(false);

  return new Promise((resolve) => {
    const childImg = new Image();
    childImg.onload = () => {
      try {
        const size = 32;
        const canvasParent = document.createElement('canvas');
        canvasParent.width = size;
        canvasParent.height = size;
        const ctxParent = canvasParent.getContext('2d');

        const [yMin, xMin, yMax, xMax] = box;
        const naturalW = mainImage.naturalWidth;
        const naturalH = mainImage.naturalHeight;

        const sx = (xMin / 1000) * naturalW;
        const sy = (yMin / 1000) * naturalH;
        const sWidth = ((xMax - xMin) / 1000) * naturalW;
        const sHeight = ((yMax - yMin) / 1000) * naturalH;

        ctxParent.drawImage(mainImage, sx, sy, sWidth, sHeight, 0, 0, size, size);

        const canvasChild = document.createElement('canvas');
        canvasChild.width = size;
        canvasChild.height = size;
        const ctxChild = canvasChild.getContext('2d');
        ctxChild.drawImage(childImg, 0, 0, size, size);

        const parentData = ctxParent.getImageData(0, 0, size, size).data;
        const childData = ctxChild.getImageData(0, 0, size, size).data;

        let sqDiff = 0;
        let count = 0;
        for (let i = 0; i < parentData.length; i += 4) {
          const parentGray = (0.299 * parentData[i] + 0.587 * parentData[i+1] + 0.114 * parentData[i+2]) / 255.0;
          const childGray = (0.299 * childData[i] + 0.587 * childData[i+1] + 0.114 * childData[i+2]) / 255.0;
          sqDiff += (parentGray - childGray) ** 2;
          count++;
        }
        const mse = sqDiff / count;
        const isStatic = mse < 0.02;
        Logger.log('🔍 Browser Image Similarity MSE for', childNode.label, ':', mse, ` --> ${isStatic ? 'Static' : 'Zoom in'}`);
        resolve(isStatic);
      } catch (e) {
        Logger.log('Error comparing images in browser:', e);
        resolve(false); // Default to zooming in if comparison fails
      }
    };
    childImg.onerror = () => resolve(false); // Default to zooming in if image fails to load
    childImg.src = childNode.imageSrc;
  });
}

// Zoom transition to child node
/**
 * Zooms to child.
 * @param {string} childId
 */
async function zoomToChild(childId) {
  if (isAnimating) {
    Logger.log('➡️ zoomToChild ignored: isAnimating is true');
    return;
  }

  const childNode = nodesData[childId];
  if (!childNode) return;

  const isRabbitHole = childNode.nodeType === 'rabbit_hole' ||
      (childNode.label && childNode.label.startsWith('🐇'));

  const isTerminal =
      !childNode.childrenIds || childNode.childrenIds.length === 0;
  if (isImmersiveModeConfig && isTerminal && !isRabbitHole) {
    Logger.log('➡️ zoomToChild early exit: childNode is terminal (no children)');
    pinLeaf(childId);
    return;
  }

  Logger.log('➡️ zoomToChild started for childId:', childId);
  if (typeof emitUserInteraction === 'function') {
    emitUserInteraction('ZOOM_IN', { targetNodeId: childId, label: childNode.label });
  }
  isAnimating = true;
  cancelNudge();
  dismissOnboardingTooltip();

  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  const zoomBuffer = isMobilePortrait ? 1 : IMMERSIVE_ZOOM_BUFFER;

  // Evict old preloads on new navigation
  activePreloadedImages = [];

  // Reset cursor and hide tooltip immediately
  mainImage.style.cursor = '';
  if (urlTooltip) urlTooltip.style.display = 'none';

  // Unpin leaf immediately on navigation to prevent lingering descriptions
  if (pinnedChildId) {
    unpinLeaf();
  }
  restoreTextPanel();

  // Fade out UI immediately for visual block
  [labelsContainer, labelsSvg, miniMapContainer].forEach(el => {
    if (el) {
      el.style.transition = UI_ELEMENT_FADE_IN;
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    }
  });
  if (textPanel) {
    textPanel.style.transition = 'none';
    textPanel.style.opacity = '0';
    textPanel.style.pointerEvents = 'none';
    if (!childNode.text || childNode.text.trim().length === 0) {
      textPanel.style.display = 'none';
      textPanel.innerHTML = '';
    }
  }

  // Pin on Parent if node has no child labels AND the inner image is visually a static crop of the parent
  if (hasNoChildLabels(childId) && !isImmersiveModeConfig && !isRabbitHole) {
    const isStaticImage = await isVisuallySimilarImage(childId);
    if (isStaticImage) {
      Logger.log('➡️ zoomToChild early exit: isStaticImage is true');
      isAnimating = false;
      // Restore UI on early return
      labelsContainer.style.opacity = '';
      labelsContainer.style.pointerEvents = '';
      labelsSvg.style.opacity = '';
      labelsSvg.style.pointerEvents = '';
      textPanel.style.opacity = '';
      textPanel.style.pointerEvents = '';
      if (miniMapContainer) {
        miniMapContainer.style.opacity = '';
        miniMapContainer.style.pointerEvents = '';
      }
      pinLeaf(childId);
      return;
    }
  }

  if (!childNode.imageSrc) {
    Logger.log('➡️ zoomToChild early exit: childNode has no imageSrc');
    isAnimating = false;
    // Restore UI on early return
    labelsContainer.style.opacity = '';
    labelsContainer.style.pointerEvents = '';
    labelsSvg.style.opacity = '';
    labelsSvg.style.pointerEvents = '';
    textPanel.style.opacity = '';
    textPanel.style.pointerEvents = '';
    if (miniMapContainer) {
      miniMapContainer.style.opacity = '';
      miniMapContainer.style.pointerEvents = '';
    }
    pinLeaf(childId);
    return;
  }

  // Preload assets before transition
  const loader = document.getElementById('lightbox-loading-indicator');
  if (isImmersiveModeConfig && loader) {
    loader.classList.add('visible');
  }

  const assetsToPreload = [childNode.imageSrc];
  if (childNode.childrenIds) {
    childNode.childrenIds.forEach(id => {
      const cNode = nodesData[id];
      if (cNode && cNode.maskSrc) {
        assetsToPreload.push(cNode.maskSrc);
      }
    });
  }

  const preloadedResults = await Promise.all(assetsToPreload.map(preloadAsset));
  const childImgLoaded = preloadedResults[0];

  if (loader) {
    loader.classList.remove('visible');
  }

  const containerRect = mainContainer.getBoundingClientRect();

  // Rabbit Hole Transition Animation:
  // Fade out current image to the left, turn screen to entire black, and fade in next image from the right.
  if (isRabbitHole) {
    clearActiveTransitions();
    pauseAudioForTransition();
    isAnimating = true;
    hideHoverOverlay();

    // Hide UI
    labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
    labelsContainer.style.opacity = '0';
    labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
    labelsSvg.style.opacity = '0';
    textPanel.style.transition = UI_ELEMENT_FADE_IN;
    textPanel.style.opacity = '0';
    if (miniMapContainer) {
      miniMapContainer.style.transition = UI_ELEMENT_FADE_IN;
      miniMapContainer.style.opacity = '0';
    }

    // Ensure main container background is solid black
    mainContainer.style.backgroundColor = '#000';

    const fadeOutDuration = 380;
    const fadeInDuration = 260;
    const slideOffset = isImmersiveMode ? (containerRect.width * 0.45) : (containerRect.width * 0.35);

    // Apply soft gradient mask and blur during transit to avoid sharp edges
    const softEdgeMask =
        'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)';

    // 1. Current image fades out to the left with blurred/feathered edges and turns screen to black
    mainImage.style.webkitMaskImage = softEdgeMask;
    mainImage.style.maskImage = softEdgeMask;
    mainImage.style.filter = 'blur(0px)';
    mainImage.style.transition = `transform ${fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1), opacity ${fadeOutDuration}ms ease-out, filter ${fadeOutDuration}ms ease-out`;
    if (isImmersiveMode) {
      mainImage.style.transform = `translate(${currentImmersiveX - slideOffset}px, ${currentImmersiveY}px) scale(${currentImmersiveScale})`;
    } else {
      mainImage.style.transform = `translate(${-slideOffset}px, 0px) scale(1)`;
    }
    mainImage.style.opacity = '0';
    mainImage.style.filter = 'blur(20px)';

    // Calculate child cover scale for pixel-identical sizing
    const {width: childNaturalWidth, height: childNaturalHeight} =
        (childImgLoaded && childImgLoaded.naturalWidth) ?
        {
          width: childImgLoaded.naturalWidth,
          height: childImgLoaded.naturalHeight
        } :
        getNaturalDimensions(childId);
    const safeChildWidth = Math.max(1, childNaturalWidth || 1777.78);
    const safeChildHeight = Math.max(1, childNaturalHeight || 1000);
    const childScaleX = containerRect.width / safeChildWidth;
    const childScaleY = containerRect.height / safeChildHeight;
    const childCoverScale =
        (isMobilePortrait ? childScaleY : Math.max(childScaleX, childScaleY)) *
        zoomBuffer;

    if (activeTempImage) activeTempImage.remove();
    const tempImage = document.createElement('img');
    activeTempImage = tempImage;
    tempImage.src = childNode.imageSrc;
    tempImage.style.pointerEvents = 'none';
    tempImage.style.position = 'absolute';
    tempImage.style.display = 'block';
    tempImage.style.webkitMaskImage = softEdgeMask;
    tempImage.style.maskImage = softEdgeMask;
    tempImage.style.filter = 'blur(20px)';

    if (isImmersiveMode) {
      tempImage.style.width = 'auto';
      tempImage.style.height = 'auto';
      tempImage.style.maxWidth = 'none';
      tempImage.style.maxHeight = 'none';
      tempImage.style.transformOrigin = '50% 50%';
      tempImage.style.transform = `translate(${slideOffset}px, 0px) scale(${childCoverScale})`;
    } else {
      tempImage.style.top = '0';
      tempImage.style.left = '0';
      tempImage.style.width = '100%';
      tempImage.style.height = '100%';
      tempImage.style.objectFit = 'contain';
      tempImage.style.transformOrigin = 'center center';
      tempImage.style.transform = `translate(${slideOffset}px, 0px) scale(1)`;
    }
    tempImage.style.opacity = '0';
    mainContainer.appendChild(tempImage);

    // Wait for the current image to fade out to black (turning screen to entire black)
    setTrackedTimeout(() => {
      if (!isAnimating) return;
      // Force reflow
      void tempImage.offsetWidth;

      // 2. Fade in the next image rapidly from the right, clearing blur to crisp center
      tempImage.style.transition = `transform ${fadeInDuration}ms cubic-bezier(0.05, 0.9, 0.2, 1), opacity ${fadeInDuration}ms ease-out, filter ${fadeInDuration}ms ease-out`;
      if (isImmersiveMode) {
        tempImage.style.transform = `translate(0px, 0px) scale(${childCoverScale})`;
      } else {
        tempImage.style.transform = `translate(0px, 0px) scale(1)`;
      }
      tempImage.style.opacity = '1';
      tempImage.style.filter = 'blur(0px)';

      setTrackedTimeout(() => {
        if (!isAnimating) return;
        // Reset mainImage and clear temporary masks/filters
        mainImage.style.transition = 'none';
        mainImage.style.filter = '';
        mainImage.style.webkitMaskImage = '';
        mainImage.style.maskImage = '';
        mainImage.style.opacity = '1';
        if (isImmersiveMode) {
          currentImmersiveX = 0;
          currentImmersiveY = 0;
          currentImmersiveScale = childCoverScale;
          mainImage.style.transform = `translate(0px, 0px) scale(${childCoverScale})`;
          mainImage.style.transformOrigin = '50% 50%';
        } else {
          mainImage.style.transform = 'scale(1)';
          mainImage.style.transformOrigin = 'center center';
        }

        isAnimating = false;
        renderNode(childId);

        setTrackedTimeout(() => {
          mainImage.style.transition = TRANSITION_IMAGE_DEFAULT;
          if (miniMapContainer) {
            miniMapContainer.style.transition = UI_ELEMENT_FADE_IN;
            miniMapContainer.style.opacity = '';
            miniMapContainer.style.pointerEvents = '';
          }
          textPanel.style.transition = 'none';
          textPanel.style.opacity = '';
          textPanel.style.pointerEvents = '';
          resumeAudioAfterTransition();
        }, ASYNC_DELAY_MS);
      }, fadeInDuration);
    }, fadeOutDuration + 30);

    return;
  }

  const zoomedBox = childNode.zoomedBox;

  if (!zoomedBox) {
    Logger.log(
        '➡️ zoomToChild early exit: childNode has no zoomedBox. Rendering instantly.');
    isAnimating = false;
    renderNode(childId);
    return;
  }

  const naturalWidth = mainImage.naturalWidth;
  const naturalHeight = mainImage.naturalHeight;

  if (naturalWidth === 0 || naturalHeight === 0) {
    Logger.log(
        '➡️ zoomToChild early exit: natural dimensions are 0. Rendering instantly.');
    isAnimating = false;
    renderNode(childId);
    return;
  }

  const rect = mainImage.getBoundingClientRect();
  const displayScaleX = rect.width / naturalWidth;
  const displayScaleY = rect.height / naturalHeight;

  const [yMin, xMin, yMax, xMax] = zoomedBox;
  const boxWidth = xMax - xMin;
  const boxHeight = yMax - yMin;

  const boxCenterX = (xMin + xMax) / 2;
  const boxCenterY = (yMin + yMax) / 2;
  const imageCenterX = naturalWidth / 2;
  const imageCenterY = naturalHeight / 2;

  let scale, translateX, translateY;
  if (isImmersiveMode) {
    const scaleX = containerRect.width / boxWidth;
    const scaleY = containerRect.height / boxHeight;
    scale = (isMobilePortrait ? scaleY : Math.max(scaleX, scaleY)) * zoomBuffer;

    translateX = (imageCenterX - boxCenterX) * scale;
    translateY = (imageCenterY - boxCenterY) * scale;
  } else {
    const scaleX = naturalWidth / boxWidth;
    const scaleY = naturalHeight / boxHeight;
    scale = (scaleX + scaleY) / 2;
    
    translateX = (imageCenterX - boxCenterX) * scale * displayScaleX;
    translateY = (imageCenterY - boxCenterY) * scale * displayScaleY;
  }

  if (zoomAnimation === 1) {
    pauseAudioForTransition();
    isAnimating = true;
    hideHoverOverlay();

    // Hide UI
    labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
    labelsContainer.style.opacity = '0';
    labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
    labelsSvg.style.opacity = '0';
    textPanel.style.transition = UI_ELEMENT_FADE_IN;
    textPanel.style.opacity = '0';

    const dynamicDuration = isImmersiveMode ?
        1100 :
        getDynamicDuration(translateX, translateY, scale, false);
    Logger.log(
        `🔍 zoomToChild - Forced Dynamic Duration: ${dynamicDuration}ms`);

    // Calculate child cover scale for pixel-identical sizing
    const {width: childNaturalWidth, height: childNaturalHeight} =
        (childImgLoaded && childImgLoaded.naturalWidth) ?
        {
          width: childImgLoaded.naturalWidth,
          height: childImgLoaded.naturalHeight
        } :
        getNaturalDimensions(childId);
    const safeChildWidth = Math.max(1, childNaturalWidth || 1777.78);
    const safeChildHeight = Math.max(1, childNaturalHeight || 1000);
    const safeBoxWidth = Math.max(1, boxWidth);

    const childScaleX = containerRect.width / safeChildWidth;
    const childScaleY = containerRect.height / safeChildHeight;
    const childCoverScale =
        (isMobilePortrait ? childScaleY : Math.max(childScaleX, childScaleY)) *
        zoomBuffer;

    const startChildScale = isImmersiveMode ?
        ((safeBoxWidth * currentImmersiveScale) / safeChildWidth) :
        (1 / scale);
    const targetMainScale = isImmersiveMode ?
        ((safeChildWidth * childCoverScale) / safeBoxWidth) :
        2.5;

    // Create temp image
    if (activeTempImage) activeTempImage.remove();
    const tempImage = document.createElement('img');
    activeTempImage = tempImage;
    tempImage.src = childNode.imageSrc;
    tempImage.style.pointerEvents = 'none';
    const deltaX = boxCenterX - naturalWidth / 2;
    const deltaY = boxCenterY - naturalHeight / 2;

    // Set origins and start transforms
    if (isImmersiveMode) {
      tempImage.style.position = 'absolute';
      tempImage.style.width = 'auto';
      tempImage.style.height = 'auto';
      tempImage.style.maxWidth = 'none';
      tempImage.style.maxHeight = 'none';
      tempImage.style.display = 'block';
      tempImage.style.transformOrigin = '50% 50%';
      mainImage.style.transformOrigin = '50% 50%';

      const T_startX = currentImmersiveX + deltaX * currentImmersiveScale;
      const T_startY = currentImmersiveY + deltaY * currentImmersiveScale;
      tempImage.style.transform =
          `translate(${T_startX}px, ${T_startY}px) scale(${startChildScale})`;

      mainImage.style.transform = `translate(${currentImmersiveX}px, ${
          currentImmersiveY}px) scale(${currentImmersiveScale})`;
    } else {
      tempImage.style.position = 'absolute';
      tempImage.style.top = '0';
      tempImage.style.left = '0';
      tempImage.style.width = '100%';
      tempImage.style.height = '100%';
      tempImage.style.objectFit = 'contain';
      tempImage.style.transformOrigin = 'center center';
      mainImage.style.transformOrigin = 'center center';

      const displayBoxCenterX = (boxCenterX - imageCenterX) * displayScaleX;
      const displayBoxCenterY = (boxCenterY - imageCenterY) * displayScaleY;
      const invScale = 1 / scale;
      tempImage.style.transform = `translate(${displayBoxCenterX}px, ${
          displayBoxCenterY}px) scale(${invScale})`;
      mainImage.style.transform = 'translate(0px, 0px) scale(1)';
    }

    tempImage.style.opacity = '0';
    if (isImmersiveMode) {
      tempImage.style.filter = 'blur(60px)';
      tempImage.style.setProperty(
          'transition',
          'transform 1.1s cubic-bezier(0.15, 1, 0.2, 1), opacity 1.1s cubic-bezier(0.15, 1, 0.2, 1), filter 1.1s cubic-bezier(0.15, 1, 0.2, 1)',
          'important');
    } else {
      tempImage.style.transition = `transform ${dynamicDuration}ms ${
          BEZIER_SMOOTH}, opacity ${dynamicDuration}ms ${BEZIER_SMOOTH}`;
    }

    mainImage.style.opacity = '1';
    if (isImmersiveMode) {
      mainImage.style.filter = 'blur(0px)';
      mainImage.style.setProperty(
          'transition',
          'transform 1.1s cubic-bezier(0.15, 1, 0.2, 1), opacity 1.1s cubic-bezier(0.15, 1, 0.2, 1), filter 1.1s cubic-bezier(0.15, 1, 0.2, 1)',
          'important');
    } else {
      mainImage.style.transition =
          `transform ${dynamicDuration}ms ${BEZIER_SMOOTH}`;
    }

    mainContainer.appendChild(tempImage);

    // Force reflow
    void tempImage.offsetWidth;
    void mainImage.offsetWidth;

    // Animate targets
    if (isImmersiveMode) {
      const T_parent_endX = -deltaX * targetMainScale;
      const T_parent_endY = -deltaY * targetMainScale;
      mainImage.style.transform = `translate(${T_parent_endX}px, ${
          T_parent_endY}px) scale(${targetMainScale})`;
      tempImage.style.transform =
          `translate(0px, 0px) scale(${childCoverScale})`;
      mainImage.style.filter = 'blur(15px)';
      tempImage.style.filter = 'blur(0px)';
    } else {
      mainImage.style.transform =
          `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      tempImage.style.transform = 'translate(0px, 0px) scale(1)';
    }
    tempImage.style.opacity = '1';

    const uiRevealLeadTime = 250;
    const uiRevealDelay = Math.max(0, dynamicDuration - uiRevealLeadTime);

    // Pre-render text panel 250ms before the transition finishes (early UI preview)
    setTimeout(() => {
      if (childNode.text && childNode.text.trim().length > 0) {
        updateTextPanel(childNode.text, childId);
        if (textPanel) {
          textPanel.style.display = '';
          textPanel.style.transition = UI_ELEMENT_FADE_IN;
          textPanel.style.opacity = '';
          textPanel.style.pointerEvents = '';
        }
      } else if (textPanel) {
        textPanel.style.display = 'none';
        textPanel.style.opacity = '0';
        textPanel.style.pointerEvents = 'none';
        textPanel.innerHTML = '';
      }
    }, uiRevealDelay);

    setTimeout(() => {
      // Reset mainImage transform seamlessly underneath activeTempImage
      mainImage.style.transition = 'none';
      mainImage.style.filter = '';
      mainImage.style.opacity = '0';
      if (isImmersiveMode) {
        currentImmersiveX = 0;
        currentImmersiveY = 0;
        currentImmersiveScale = childCoverScale;
        mainImage.style.transform = `translate(0px, 0px) scale(${childCoverScale})`;
        mainImage.style.transformOrigin = '50% 50%';
      } else {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.transformOrigin = 'center center';
      }

      isAnimating = false;
      renderNode(childId);

      const restoreElements = [labelsContainer, labelsSvg, miniMapContainer];
      restoreElements.forEach(el => {
        if (el) {
          el.style.transition = UI_ELEMENT_FADE_IN;
          el.style.opacity = '';
          el.style.pointerEvents = '';
        }
      });

      startNudgeTimer();
      executePendingZoom();
      resumeAudioAfterTransition();
    }, dynamicDuration);

    return;
  }

  // Fallback to default Translate transition
  pauseAudioForTransition();
  isAnimating = true;
  
  // Apply zoom transform: scale from center, then translate
  mainImage.style.transformOrigin = 'center center';
  mainImage.style.transform =
      `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  mainImage.classList.add('zoom-transition');

  regionHighlight.style.transformOrigin = 'center center';
  regionHighlight.style.transform =
      `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  regionHighlight.style.transition = TRANSITION_STANDARD_ZOOM;
  regionHighlight.style.opacity = '1';

  const debugBoxCanvas = document.getElementById('debug-box-canvas');
  if (debugBoxCanvas) {
    debugBoxCanvas.style.transformOrigin = 'center center';
    debugBoxCanvas.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    debugBoxCanvas.style.transition = TRANSITION_STANDARD_ZOOM;
  }

  // Hide labels and text panel during zoom
  labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
  labelsContainer.style.opacity = '0';

  labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
  labelsSvg.style.opacity = '0';
  textPanel.style.transition = UI_ELEMENT_FADE_IN;
  textPanel.style.opacity = '0';

  // After zoom animation
  setTimeout(() => {
    // Reset transform immediately
    mainImage.style.transition = 'none';
    mainImage.style.transform = 'scale(1)';
    mainImage.style.transformOrigin = 'center center';
    mainImage.classList.remove('zoom-transition');

    regionHighlight.style.transition = 'none';
    regionHighlight.style.transform = '';

    if (debugBoxCanvas) {
      debugBoxCanvas.style.transition = 'none';
      debugBoxCanvas.style.transform = 'scale(1)';
    }

    isAnimating = false;
    // Render the child node (which will show its image)
    renderNode(childId);

      setTimeout(() => {
        mainImage.style.transition = TRANSITION_IMAGE_DEFAULT;

        const childNode = nodesData[childId];
        const hasText =
            childNode && childNode.text && childNode.text.trim().length > 0;
        const restoreElements = [
          labelsContainer, labelsSvg, ...(hasText ? [textPanel] : []),
          miniMapContainer
        ];
        restoreElements.forEach(el => {
          if (el) {
            el.style.transition = UI_ELEMENT_FADE_IN;
            el.style.opacity = '';
            el.style.pointerEvents = '';
          }
        });
        if (!hasText && textPanel) {
          textPanel.style.display = 'none';
          textPanel.style.opacity = '0';
          textPanel.style.pointerEvents = 'none';
          textPanel.innerHTML = '';
        }

        renderLabels();
        resumeAudioAfterTransition();
      }, ASYNC_DELAY_MS);
  }, STANDARD_ZOOM_DURATION_MS);
}

// Zoom transition to parent node (zoom out)
/**
 * Zooms to parent.
 * @param {string} parentId
 * @param {string} childId
 */
async function zoomToParent(parentId, childId) {
  Logger.log(
      '➡️ zoomToParent called for parentId:', parentId, 'childId:', childId);
  if (typeof emitUserInteraction === 'function') {
    emitUserInteraction('ZOOM_OUT', { targetNodeId: parentId, fromNodeId: childId });
  }
  isAnimating = true;
  cancelNudge();

  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  const zoomBuffer = isMobilePortrait ? 1 : IMMERSIVE_ZOOM_BUFFER;

  // Evict old preloads on new navigation
  activePreloadedImages = [];

  // Reset cursor and hide tooltip immediately
  mainImage.style.cursor = '';
  if (urlTooltip) urlTooltip.style.display = 'none';

  // Unpin leaf immediately on navigation to prevent lingering descriptions
  if (pinnedChildId) {
    unpinLeaf();
  }
  restoreTextPanel();

  // Fade out UI immediately for visual block
  [labelsContainer, labelsSvg, miniMapContainer].forEach(el => {
    if (el) {
      el.style.transition = UI_ELEMENT_FADE_IN;
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    }
  });
  const parentNode = nodesData[parentId];
  const childNode = nodesData[childId];

  if (textPanel) {
    textPanel.style.transition = 'none';
    textPanel.style.opacity = '0';
    textPanel.style.pointerEvents = 'none';
    if (!parentNode || !parentNode.text ||
        parentNode.text.trim().length === 0) {
      textPanel.style.display = 'none';
      textPanel.innerHTML = '';
    }
  }

  const isChildRabbitHole = childNode && (childNode.nodeType === 'rabbit_hole' ||
      (childNode.label && childNode.label.startsWith('🐇')));

  if (!parentNode || (!isChildRabbitHole && !childNode.zoomedBox) || !parentNode.imageSrc ||
      !childNode.imageSrc) {
    Logger.log(
        '➡️ zoomToParent early exit: missing parentNode/zoomedBox/imageSrc details');
    isAnimating = false;
    renderNode(parentId);
    return;
  }

  // Show loader
  const loader = document.getElementById('lightbox-loading-indicator');
  if (isImmersiveModeConfig && loader) {
    loader.classList.add('visible');
  }

  // Gather assets: parent image + parent's children masks
  const assetsToPreload = [parentNode.imageSrc];
  if (parentNode.childrenIds) {
    parentNode.childrenIds.forEach(id => {
      const cNode = nodesData[id];
      if (cNode && cNode.maskSrc) {
        assetsToPreload.push(cNode.maskSrc);
      }
    });
  }

  // Wait for all preloads
  const preloadedResults = await Promise.all(assetsToPreload.map(preloadAsset));
  const parentImgLoaded = preloadedResults[0];

  if (loader) {
    loader.classList.remove('visible');
  }

  if (!parentImgLoaded) {
    Logger.log('➡️ zoomToParent early exit: parent image failed to load');
    isAnimating = false;
    renderNode(parentId);
    return;
  }

  const containerRect = mainContainer.getBoundingClientRect();

  // Reverse Rabbit Hole Transition Animation when returning to parent:
  if (isChildRabbitHole) {
    clearActiveTransitions();
    pauseAudioForTransition();
    isAnimating = true;
    hideHoverOverlay();

    // Hide UI
    labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
    labelsContainer.style.opacity = '0';
    labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
    labelsSvg.style.opacity = '0';
    textPanel.style.transition = UI_ELEMENT_FADE_IN;
    textPanel.style.opacity = '0';
    if (miniMapContainer) {
      miniMapContainer.style.transition = UI_ELEMENT_FADE_IN;
      miniMapContainer.style.opacity = '0';
    }

    // Ensure main container background is solid black
    mainContainer.style.backgroundColor = '#000';

    const fadeOutDuration = 380;
    const fadeInDuration = 260;
    const slideOffset = isImmersiveMode ? (containerRect.width * 0.45) : (containerRect.width * 0.35);

    // Apply soft gradient mask and blur during transit to avoid sharp edges
    const softEdgeMask =
        'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)';

    // 1. Current rabbit hole image fades out to the right with blurred/feathered edges into solid black
    mainImage.style.webkitMaskImage = softEdgeMask;
    mainImage.style.maskImage = softEdgeMask;
    mainImage.style.filter = 'blur(0px)';
    mainImage.style.transition = `transform ${fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1), opacity ${fadeOutDuration}ms ease-out, filter ${fadeOutDuration}ms ease-out`;
    if (isImmersiveMode) {
      mainImage.style.transform = `translate(${currentImmersiveX + slideOffset}px, ${currentImmersiveY}px) scale(${currentImmersiveScale})`;
    } else {
      mainImage.style.transform = `translate(${slideOffset}px, 0px) scale(1)`;
    }
    mainImage.style.opacity = '0';
    mainImage.style.filter = 'blur(20px)';

    // Calculate parent cover scale
    const {width: parentNaturalWidth, height: parentNaturalHeight} =
        parentImgLoaded.naturalWidth ?
        {
          width: parentImgLoaded.naturalWidth,
          height: parentImgLoaded.naturalHeight
        } :
        getNaturalDimensions(parentId);
    const safeParentWidth = Math.max(1, parentNaturalWidth || 1777.78);
    const safeParentHeight = Math.max(1, parentNaturalHeight || 1000);
    const parentScaleX = containerRect.width / safeParentWidth;
    const parentScaleY = containerRect.height / safeParentHeight;
    const parentCoverScale =
        (isMobilePortrait ? parentScaleY : Math.max(parentScaleX, parentScaleY)) *
        zoomBuffer;

    if (activeTempImage) activeTempImage.remove();
    const tempImage = document.createElement('img');
    activeTempImage = tempImage;
    tempImage.src = parentNode.imageSrc;
    tempImage.style.pointerEvents = 'none';
    tempImage.style.position = 'absolute';
    tempImage.style.display = 'block';
    tempImage.style.webkitMaskImage = softEdgeMask;
    tempImage.style.maskImage = softEdgeMask;
    tempImage.style.filter = 'blur(20px)';

    if (isImmersiveMode) {
      tempImage.style.width = 'auto';
      tempImage.style.height = 'auto';
      tempImage.style.maxWidth = 'none';
      tempImage.style.maxHeight = 'none';
      tempImage.style.transformOrigin = '50% 50%';
      tempImage.style.transform = `translate(${-slideOffset}px, 0px) scale(${parentCoverScale})`;
    } else {
      tempImage.style.top = '0';
      tempImage.style.left = '0';
      tempImage.style.width = '100%';
      tempImage.style.height = '100%';
      tempImage.style.objectFit = 'contain';
      tempImage.style.transformOrigin = 'center center';
      tempImage.style.transform = `translate(${-slideOffset}px, 0px) scale(1)`;
    }
    tempImage.style.opacity = '0';
    mainContainer.appendChild(tempImage);

    // Wait for current image to fade out to black
    setTrackedTimeout(() => {
      if (!isAnimating) return;
      // Force reflow
      void tempImage.offsetWidth;

      // 2. Fade in parent image rapidly from the left, clearing blur to crisp center
      tempImage.style.transition = `transform ${fadeInDuration}ms cubic-bezier(0.05, 0.9, 0.2, 1), opacity ${fadeInDuration}ms ease-out, filter ${fadeInDuration}ms ease-out`;
      if (isImmersiveMode) {
        tempImage.style.transform = `translate(0px, 0px) scale(${parentCoverScale})`;
      } else {
        tempImage.style.transform = `translate(0px, 0px) scale(1)`;
      }
      tempImage.style.opacity = '1';
      tempImage.style.filter = 'blur(0px)';

      setTrackedTimeout(() => {
        if (!isAnimating) return;
        // Reset mainImage and clear temporary masks/filters
        mainImage.style.transition = 'none';
        mainImage.style.filter = '';
        mainImage.style.webkitMaskImage = '';
        mainImage.style.maskImage = '';
        mainImage.style.opacity = '1';
        if (isImmersiveMode) {
          currentImmersiveX = 0;
          currentImmersiveY = 0;
          currentImmersiveScale = parentCoverScale;
          mainImage.style.transform = `translate(0px, 0px) scale(${parentCoverScale})`;
          mainImage.style.transformOrigin = '50% 50%';
        } else {
          mainImage.style.transform = 'scale(1)';
          mainImage.style.transformOrigin = 'center center';
        }

        isAnimating = false;
        renderNode(parentId);

        setTrackedTimeout(() => {
          mainImage.style.transition = TRANSITION_IMAGE_DEFAULT;
          if (miniMapContainer) {
            miniMapContainer.style.transition = UI_ELEMENT_FADE_IN;
            miniMapContainer.style.opacity = '';
            miniMapContainer.style.pointerEvents = '';
          }
          textPanel.style.transition = 'none';
          textPanel.style.opacity = '';
          textPanel.style.pointerEvents = '';
          resumeAudioAfterTransition();
        }, ASYNC_DELAY_MS);
      }, fadeInDuration);
    }, fadeOutDuration + 30);

    return;
  }

  const naturalWidth = parentImgLoaded.naturalWidth;
  const naturalHeight = parentImgLoaded.naturalHeight;

  if (naturalWidth === 0 || naturalHeight === 0) {
    Logger.log(
        '➡️ zoomToParent early exit: natural dimensions are 0. Rendering instantly.');
    isAnimating = false;
    renderNode(parentId);
    return;
  }

  const rect = mainImage.getBoundingClientRect();
  const displayScaleX = rect.width / naturalWidth;
  const displayScaleY = rect.height / naturalHeight;

  const [yMin, xMin, yMax, xMax] = childNode.zoomedBox;
  const boxWidth = xMax - xMin;
  const boxHeight = yMax - yMin;

  const boxCenterX = (xMin + xMax) / 2;
  const boxCenterY = (yMin + yMax) / 2;
  const imageCenterX = naturalWidth / 2;
  const imageCenterY = naturalHeight / 2;

  let scale, translateX, translateY;
  let parentCoverScale;
  if (isImmersiveMode) {
    const parentScaleX = containerRect.width / naturalWidth;
    const parentScaleY = containerRect.height / naturalHeight;
    parentCoverScale =
        (isMobilePortrait ? parentScaleY :
                            Math.max(parentScaleX, parentScaleY)) *
        zoomBuffer;

    const targetBoxScale =
        (isMobilePortrait ? (containerRect.height / boxHeight) :
                            Math.max(
                                containerRect.width / boxWidth,
                                containerRect.height / boxHeight)) *
        zoomBuffer;
    scale = targetBoxScale / parentCoverScale;

    translateX = (imageCenterX - boxCenterX) * scale * parentCoverScale;
    translateY = (imageCenterY - boxCenterY) * scale * parentCoverScale;
  } else {
    const scaleX = naturalWidth / boxWidth;
    const scaleY = naturalHeight / boxHeight;
    scale = (scaleX + scaleY) / 2;

    translateX = (imageCenterX - boxCenterX) * scale * displayScaleX;
    translateY = (imageCenterY - boxCenterY) * scale * displayScaleY;
  }

  if (zoomAnimation === 1) {
    pauseAudioForTransition();
    isAnimating = true;
    hideHoverOverlay();

    // Hide UI
    textPanel.style.transition = UI_ELEMENT_FADE_IN;
    textPanel.style.opacity = '0';
    textPanel.style.pointerEvents = 'none';
    labelsContainer.style.transition = UI_ELEMENT_FADE_IN;
    labelsContainer.style.opacity = '0';
    labelsContainer.style.pointerEvents = 'none';
    labelsSvg.style.transition = UI_ELEMENT_FADE_IN;
    labelsSvg.style.opacity = '0';
    labelsSvg.style.pointerEvents = 'none';

    const dynamicDuration = isImmersiveMode ?
        1100 :
        getDynamicDuration(translateX, translateY, scale, true);
    Logger.log(
        `🔍 zoomToParent - Forced Dynamic Duration: ${dynamicDuration}ms`);

    // Create temp image for PARENT (Image 2)
    if (activeTempImage) activeTempImage.remove();
    const tempParentImage = document.createElement('img');
    activeTempImage = tempParentImage;
    tempParentImage.src = parentNode.imageSrc;
    tempParentImage.style.opacity = '1';
    tempParentImage.style.pointerEvents = 'none';

    // Natural pixel offsets of child box center from parent center
    const deltaX = boxCenterX - naturalWidth / 2;
    const deltaY = boxCenterY - naturalHeight / 2;

    const {width: childNaturalWidth} =
        (mainImage && mainImage.naturalWidth > 0) ?
        {width: mainImage.naturalWidth} :
        getNaturalDimensions(currentNodeId);
    const safeChildWidth = Math.max(1, childNaturalWidth || 1777.78);
    const safeBoxWidth = Math.max(1, boxWidth);

    const targetChildScale = isImmersiveMode ?
        ((safeBoxWidth * parentCoverScale) / safeChildWidth) :
        (1 / scale);
    const targetTempScale = isImmersiveMode ? zoomBuffer : 1;

    // Set origins and start transforms
    if (isImmersiveMode) {
      tempParentImage.style.position = 'absolute';
      tempParentImage.style.width = 'auto';
      tempParentImage.style.height = 'auto';
      tempParentImage.style.maxWidth = 'none';
      tempParentImage.style.maxHeight = 'none';
      tempParentImage.style.display = 'block';
      tempParentImage.style.transformOrigin = '50% 50%';
      mainImage.style.transformOrigin = '50% 50%';

      const startParentScale =
          (safeChildWidth * currentImmersiveScale) / safeBoxWidth;
      const T_parent_startX = currentImmersiveX - deltaX * startParentScale;
      const T_parent_startY = currentImmersiveY - deltaY * startParentScale;
      tempParentImage.style.transform = `translate(${T_parent_startX}px, ${
          T_parent_startY}px) scale(${startParentScale})`;

      mainImage.style.transform = `translate(${currentImmersiveX}px, ${
          currentImmersiveY}px) scale(${currentImmersiveScale})`;
    } else {
      tempParentImage.style.position = 'absolute';
      tempParentImage.style.top = '0';
      tempParentImage.style.left = '0';
      tempParentImage.style.width = '100%';
      tempParentImage.style.height = '100%';
      tempParentImage.style.objectFit = 'contain';
      tempParentImage.style.transformOrigin = 'center center';
      mainImage.style.transformOrigin = 'center center';

      const initialTempScale = scale;
      tempParentImage.style.transform = `translate(${translateX}px, ${
          translateY}px) scale(${initialTempScale})`;
      mainImage.style.transform = 'translate(0px, 0px) scale(1)';
    }

    if (isImmersiveMode) {
      tempParentImage.style.filter = 'blur(15px)';
      tempParentImage.style.setProperty(
          'transition',
          'transform 1.1s cubic-bezier(0.15, 1, 0.2, 1), opacity 1.1s cubic-bezier(0.15, 1, 0.2, 1), filter 1.1s cubic-bezier(0.15, 1, 0.2, 1)',
          'important');
    } else {
      tempParentImage.style.transition =
          `transform ${dynamicDuration}ms ${BEZIER_SMOOTH}`;
    }

    mainContainer.insertBefore(tempParentImage, mainImage);

    mainImage.style.opacity = '1';
    if (isImmersiveMode) {
      mainImage.style.filter = 'blur(0px)';
      mainImage.style.setProperty(
          'transition',
          'transform 1.1s cubic-bezier(0.15, 1, 0.2, 1), opacity 1.1s cubic-bezier(0.15, 1, 0.2, 1), filter 1.1s cubic-bezier(0.15, 1, 0.2, 1)',
          'important');
    } else {
      mainImage.style.transition = `transform ${dynamicDuration}ms ${
          BEZIER_SMOOTH}, opacity ${dynamicDuration}ms ${BEZIER_SMOOTH}`;
    }

    // Force reflow
    void tempParentImage.offsetWidth;
    void mainImage.offsetWidth;

    // Animate targets
    if (isImmersiveMode) {
      const T_child_endX = deltaX * parentCoverScale;
      const T_child_endY = deltaY * parentCoverScale;
      mainImage.style.transform = `translate(${T_child_endX}px, ${
          T_child_endY}px) scale(${targetChildScale})`;
      tempParentImage.style.transform =
          `translate(0px, 0px) scale(${parentCoverScale})`;
      mainImage.style.filter = 'blur(60px)';
      tempParentImage.style.filter = 'blur(0px)';
    } else {
      const targetChildTranslateX = (boxCenterX - imageCenterX) * displayScaleX;
      const targetChildTranslateY = (boxCenterY - imageCenterY) * displayScaleY;
      mainImage.style.transform = `translate(${targetChildTranslateX}px, ${
          targetChildTranslateY}px) scale(${targetChildScale})`;
      tempParentImage.style.transform =
          `translate(0px, 0px) scale(${targetTempScale})`;
    }
    mainImage.style.opacity = '0';

    const uiRevealLeadTime = 250;
    const uiRevealDelay = Math.max(0, dynamicDuration - uiRevealLeadTime);

    // Pre-render text panel 250ms before the transition finishes (early UI preview)
    setTimeout(() => {
      if (parentNode && parentNode.text && parentNode.text.trim().length > 0) {
        updateTextPanel(parentNode.text, parentId);
        if (textPanel) {
          textPanel.style.display = '';
          textPanel.style.transition = UI_ELEMENT_FADE_IN;
          textPanel.style.opacity = '';
          textPanel.style.pointerEvents = '';
        }
      } else if (textPanel) {
        textPanel.style.display = 'none';
        textPanel.style.opacity = '0';
        textPanel.style.pointerEvents = 'none';
        textPanel.innerHTML = '';
      }
    }, uiRevealDelay);

    setTimeout(() => {
      // Reset mainImage transform seamlessly behind activeTempImage
      mainImage.style.transition = 'none';
      mainImage.style.filter = '';
      if (isImmersiveMode) {
        currentImmersiveX = 0;
        currentImmersiveY = 0;
        currentImmersiveScale = parentCoverScale;
        mainImage.style.transform =
            `translate(0px, 0px) scale(${parentCoverScale})`;
        mainImage.style.transformOrigin = '50% 50%';
      } else {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.transformOrigin = 'center center';
      }

      isAnimating = false;
      renderNode(parentId);

      const restoreElements = [labelsContainer, labelsSvg, miniMapContainer];
      restoreElements.forEach(el => {
        if (el) {
          el.style.transition = UI_ELEMENT_FADE_IN;
          el.style.opacity = '';
          el.style.pointerEvents = '';
        }
      });

      startNudgeTimer();
      executePendingZoom();
      resumeAudioAfterTransition();
    }, dynamicDuration);

    return;
  }

    pauseAudioForTransition();
    regionHighlight.style.transition = 'none';
    regionHighlight.style.transform = '';
    regionHighlight.style.opacity = '0';

    maskContainer.style.transition = 'none';
    maskContainer.style.display = 'none';
    [labelsContainer, labelsSvg, textPanel, miniMapContainer].forEach(el => {
      if (el) {
        el.style.transition = UI_ELEMENT_FADE_IN;
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
      }
    });

    mainImage.style.transition = 'none';
    mainImage.style.transformOrigin = 'center center';
    mainImage.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    mainImage.src = parentNode.imageSrc;

    /** @suppress {lintChecks} */
    mainImage.offsetHeight;  // Force reflow

    mainImage.classList.add('zoom-transition');
    mainImage.style.transition = TRANSITION_STANDARD_ZOOM;
    mainImage.style.transform = 'translate(0px, 0px) scale(1)';

    const debugBoxCanvas = document.getElementById('debug-box-canvas');
    if (debugBoxCanvas) {
      debugBoxCanvas.style.transition = 'none';
      debugBoxCanvas.style.transformOrigin = 'center center';
      debugBoxCanvas.style.transform =
          `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      /** @suppress {lintChecks} */
      debugBoxCanvas.offsetHeight;  // force reflow
      debugBoxCanvas.style.transition = TRANSITION_STANDARD_ZOOM;
      debugBoxCanvas.style.transform = 'translate(0px, 0px) scale(1)';
    }

    setTimeout(() => {
      mainImage.style.transition = 'none';
      mainImage.classList.remove('zoom-transition');
      isAnimating = false;

      if (debugBoxCanvas) {
        debugBoxCanvas.style.transition = 'none';
      }

      maskContainer.innerHTML = '';
      labelsSvg.innerHTML = '';
      maskContainer.style.opacity = '0';

      renderNode(parentId);

      setTimeout(() => {
        mainImage.style.transition = TRANSITION_IMAGE_DEFAULT;
        
        // Ensure they are transparent before unhiding
        labelsContainer.style.opacity = '0';
        labelsSvg.style.opacity = '0';
        textPanel.style.opacity = '0';

        maskContainer.style.display = '';
        /** @suppress {lintChecks} */
        maskContainer.offsetHeight;  // force reflow

        const parentNode = nodesData[parentId];
        const hasText =
            parentNode && parentNode.text && parentNode.text.trim().length > 0;
        const restoreElements = [
          labelsContainer, labelsSvg, ...(hasText ? [textPanel] : []),
          miniMapContainer
        ];
        restoreElements.forEach(el => {
          if (el) {
            el.style.transition = UI_ELEMENT_FADE_IN;
            el.style.opacity = '';
            el.style.pointerEvents = '';
          }
        });
        if (!hasText && textPanel) {
          textPanel.style.display = 'none';
          textPanel.style.opacity = '0';
          textPanel.style.pointerEvents = 'none';
          textPanel.innerHTML = '';
        }

        maskContainer.style.transition = UI_ELEMENT_FADE_IN;
        maskContainer.style.opacity = '1';
        renderLabels();
        resumeAudioAfterTransition();
      }, ASYNC_DELAY_MS);
    }, STANDARD_ZOOM_DURATION_MS);
}

// =========================================
// Immersive Mode Helpers
// =========================================

/**
 * Decodes base64 serialized prompt into text.
 * @param {?Array<?Array<string>>} promptData
 * @return {string}
 */
function decodePrompt(promptData) {
  if (!promptData || !promptData[0] || !promptData[0][1]) {
    return 'Tell me about this image';
  }
  try {
    const base64Str = promptData[0][1];
    const binaryStr = atob(base64Str);
    const newlineIndex = binaryStr.indexOf('\n');
    if (newlineIndex === -1 || newlineIndex + 2 >= binaryStr.length) {
      return 'Tell me about this image';
    }
    const textLen = binaryStr.charCodeAt(newlineIndex + 1);
    const textStart = newlineIndex + 2;
    const textEnd = textStart + textLen;
    if (textEnd <= binaryStr.length) {
      const rawText = binaryStr.substring(textStart, textEnd);
      const decodedText = decodeURIComponent(escape(rawText));
      return decodedText;
    }
  } catch (e) {
    Logger.error('Failed to decode prompt:', e);
  }
  return 'Tell me about this image';
}

/**
 * Zooms out to a specific ancestor.
 * @param {string} ancestorId
 */
async function zoomToAncestor(ancestorId) {
  if (isAnimating) return;
  const currentNode = nodesData[currentNodeId];
  if (currentNode && currentNode.parentId === ancestorId) {
    await zoomToParent(ancestorId, currentNodeId);
    return;
  }
  const isCurrentRabbitHole = currentNode && (currentNode.nodeType === 'rabbit_hole' ||
      (currentNode.label && currentNode.label.startsWith('🐇')));
  if (isCurrentRabbitHole) {
    await zoomToParent(ancestorId, currentNodeId);
    return;
  }

  if (typeof emitUserInteraction === 'function') {
    emitUserInteraction('BREADCRUMB_NAV', { targetNodeId: ancestorId });
  }
  isAnimating = true;

  // Evict old preloads on new navigation
  activePreloadedImages = [];

  // Reset cursor and hide tooltip immediately
  mainImage.style.cursor = '';
  if (urlTooltip) urlTooltip.style.display = 'none';

  const loader = document.getElementById('lightbox-loading-indicator');
  if (isImmersiveModeConfig && loader) {
    loader.classList.add('visible');
  }

  // 1. Create a temporary clone image of the CURRENT state to keep it visible
  if (activeTempImage) activeTempImage.remove();
  const tempImage = document.createElement('img');
  tempImage.src = mainImage.src;
  tempImage.style.position = 'absolute';
  tempImage.style.display = 'block';
  tempImage.style.opacity = '1';
  tempImage.style.pointerEvents = 'none';

  if (isImmersiveMode) {
    tempImage.style.width = 'auto';
    tempImage.style.height = 'auto';
    tempImage.style.maxWidth = 'none';
    tempImage.style.maxHeight = 'none';
    tempImage.style.transformOrigin = mainImage.style.transformOrigin || '50% 50%';
    tempImage.style.transform = mainImage.style.transform;
  } else {
    tempImage.style.top = '50%';
    tempImage.style.left = '50%';
    tempImage.style.width = `${mainImage.clientWidth}px`;
    tempImage.style.height = `${mainImage.clientHeight}px`;
    tempImage.style.maxWidth = 'none';
    tempImage.style.maxHeight = 'none';
    tempImage.style.transformOrigin = 'center center';
    tempImage.style.transform =
        `translate(-50%, -50%) ${mainImage.style.transform || ''}`;
  }
  activeTempImage = tempImage;
  mainContainer.insertBefore(tempImage, mainImage.nextSibling);

  if (pinnedChildId) {
    unpinLeaf();
  }
  restoreTextPanel();

  // 2. Fade out current UI overlays immediately
  [labelsContainer, labelsSvg, miniMapContainer].forEach(el => {
    if (el) {
      el.style.transition = UI_ELEMENT_FADE_IN;
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    }
  });
  if (textPanel) {
    textPanel.style.transition = 'none';
    textPanel.style.opacity = '0';
    textPanel.style.pointerEvents = 'none';
    const ancNode = nodesData[ancestorId];
    if (!ancNode || !ancNode.text || ancNode.text.trim().length === 0) {
      textPanel.style.display = 'none';
      textPanel.innerHTML = '';
    }
  }

  // Preload target node assets
  const ancestorNode = nodesData[ancestorId];
  if (!ancestorNode || !ancestorNode.imageSrc) {
    if (activeTempImage) {
      activeTempImage.remove();
      activeTempImage = null;
    }
    isAnimating = false;
    renderNode(ancestorId);
    return;
  }

  const assetsToPreload = [ancestorNode.imageSrc];
  if (ancestorNode.childrenIds) {
    ancestorNode.childrenIds.forEach(id => {
      const cNode = nodesData[id];
      if (cNode && cNode.maskSrc) {
        assetsToPreload.push(cNode.maskSrc);
      }
    });
  }

  await Promise.all(assetsToPreload.map(preloadAsset));

  if (loader) {
    loader.classList.remove('visible');
  }

  // 3. Position mainImage at the ancestor's overview transform underneath tempImage
  mainImage.style.transition = 'none';
  mainImage.style.opacity = '0';
  if (isImmersiveMode) {
    const containerRect = mainContainer.getBoundingClientRect();
    const {width: natW, height: natH} = getNaturalDimensions(ancestorId);
    const isMobilePortrait =
        window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
    const sX = natW > 0 ? (containerRect.width / natW) : 1;
    const sY = natH > 0 ? (containerRect.height / natH) : 1;
    const targetScale =
        (isMobilePortrait ? sY : Math.max(sX, sY)) *
        (isMobilePortrait ? 1 : IMMERSIVE_ZOOM_BUFFER);
    currentImmersiveScale = targetScale;
    currentImmersiveX = 0;
    currentImmersiveY = 0;
    mainImage.style.transform = `translate(0px, 0px) scale(${targetScale})`;
    mainImage.style.transformOrigin = '50% 50%';
  } else {
    mainImage.style.transform = 'scale(1)';
    mainImage.style.transformOrigin = 'center center';
  }

  // Render ancestorNode (updates mainImage.src and populates DOM elements under opacity: 0)
  renderNode(ancestorId);

  // 4. Reveal mainImage underneath and cross-fade tempImage smoothly
  mainImage.style.opacity = '1';
  void tempImage.offsetWidth;

  const crossFadeDuration = 350;
  tempImage.style.transition = `opacity ${crossFadeDuration}ms ${BEZIER_SMOOTH}`;
  tempImage.style.opacity = '0';

  // 5. Reveal ancestor UI overlays 150ms before the dissolve finishes
  const uiRevealDelay = Math.max(50, crossFadeDuration - 150);
  setTimeout(() => {
    [labelsContainer, labelsSvg, miniMapContainer].forEach(el => {
      if (el) {
        el.style.transition = UI_ELEMENT_FADE_IN;
        el.style.opacity = '';
        el.style.pointerEvents = '';
      }
    });
    if (ancestorNode && ancestorNode.text &&
        ancestorNode.text.trim().length > 0) {
      updateTextPanel(ancestorNode.text, ancestorId);
      if (textPanel) {
        textPanel.style.display = '';
        textPanel.style.transition = UI_ELEMENT_FADE_IN;
        textPanel.style.opacity = '';
        textPanel.style.pointerEvents = '';
      }
    } else if (textPanel) {
      textPanel.style.display = 'none';
      textPanel.style.opacity = '0';
      textPanel.style.pointerEvents = 'none';
      textPanel.innerHTML = '';
    }
  }, uiRevealDelay);

  // 6. Complete transition and unlock interactions
  setTimeout(() => {
    if (activeTempImage) {
      activeTempImage.remove();
      activeTempImage = null;
    }
    mainImage.style.transition = TRANSITION_IMAGE_DEFAULT;
    isAnimating = false;
    if (isImmersiveMode) {
      applyImmersiveTransform();
      if (minimapMode === 3) {
        syncMinimapViewport();
      }
    }
    startNudgeTimer();
    executePendingZoom();
    resumeAudioAfterTransition();
  }, crossFadeDuration);
}

/**
 * Generates and updates immersive header breadcrumbs.
 */
function updateImmersiveHeader() {
  const breadcrumbsEl = document.getElementById('viewer-header-breadcrumbs');
  if (!breadcrumbsEl) return;
  if (isImmersiveMode) {
    const crumbs = [];
    let tempId = currentNodeId;
    while (tempId) {
      const node = nodesData[tempId];
      if (!node) break;
      let title = node.label;
      if (tempId === rootId) {
        title = node.label || 'Overview';
      } else {
        title = stripRabbitEmoji(title);
      }
      crumbs.unshift({
        id: tempId,
        title: title || 'Region'
      });
      tempId = node.parentId;
    }
    breadcrumbsEl.innerHTML = '';

    // 1. Create Desktop Container
    const desktopContainer = document.createElement('div');
    desktopContainer.className = 'desktop-breadcrumbs-wrapper';

    let displayCrumbs = crumbs;
    let showEllipsisDropdown = false;
    if (crumbs.length > 2) {
      displayCrumbs = [{id: 'ellipsis', title: '...'}, ...crumbs.slice(-2)];
      showEllipsisDropdown = true;
    }

    displayCrumbs.forEach((crumb, index) => {
      if (crumbs.length === 1 && crumb.id === rootId) {
        return;  // Don't show Overview when at the outer level
      }
      if (index === displayCrumbs.length - 1) {
        const span = document.createElement('span');
        span.className = 'breadcrumb-item current-crumb';
        span.innerHTML = `<span>${crumb.title}</span>`;
        desktopContainer.appendChild(span);
      } else if (crumb.id === 'ellipsis') {
        const link = document.createElement('a');
        link.className = 'breadcrumb-item ellipsis-crumb clickable';
        link.innerHTML = `<span class="google-symbols">more_horiz</span>`;
        if (showEllipsisDropdown) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dropdown =
                desktopContainer.querySelector('.desktop-breadcrumb-dropdown');
            if (dropdown) {
              const isOpen = dropdown.classList.toggle('open');
              link.classList.toggle('open', isOpen);
            }
          });
        }
        desktopContainer.appendChild(link);
      } else {
        const link = document.createElement('a');
        link.className = 'breadcrumb-item ancestor-crumb';
        link.innerHTML = `<span>${crumb.title}</span><span class="google-symbols">chevron_right</span>`;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          zoomToAncestor(crumb.id);
        });
        desktopContainer.appendChild(link);
      }
    });

    if (showEllipsisDropdown) {
      const desktopDropdownMenu = document.createElement('div');
      desktopDropdownMenu.className = 'desktop-breadcrumb-dropdown';

      crumbs.forEach((crumb, idx) => {
        const isCurrent = idx === crumbs.length - 1;
        const item = document.createElement('div');
        item.className = `desktop-dropdown-item ${isCurrent ? 'active' : ''}`;

        const labelSpan = document.createElement('span');
        labelSpan.className = 'dropdown-item-label';
        labelSpan.innerText = crumb.title;
        item.appendChild(labelSpan);

        if (isCurrent) {
          const checkIcon = document.createElement('span');
          checkIcon.className = 'google-symbols trailing-icon';
          checkIcon.innerText = 'check_small';
          item.appendChild(checkIcon);
        }

        if (!isCurrent) {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            desktopDropdownMenu.classList.remove('open');
            const ellipsisLink =
                desktopContainer.querySelector('.ellipsis-crumb');
            if (ellipsisLink) ellipsisLink.classList.remove('open');
            zoomToAncestor(crumb.id);
          });
        }
        desktopDropdownMenu.appendChild(item);
      });
      desktopContainer.appendChild(desktopDropdownMenu);

      document.addEventListener('click', (e) => {
        if (!desktopContainer.contains(e.target)) {
          desktopDropdownMenu.classList.remove('open');
          const ellipsisLink =
              desktopContainer.querySelector('.ellipsis-crumb');
          if (ellipsisLink) ellipsisLink.classList.remove('open');
        }
      });
    }

    breadcrumbsEl.appendChild(desktopContainer);

    // 2. Create Mobile Container
    const mobileContainer = document.createElement('div');
    mobileContainer.className = 'mobile-breadcrumbs-wrapper';

    const currentCrumb = crumbs[crumbs.length - 1];

    if (currentCrumb) {
      const hasParent = crumbs.length > 1;
      const parentCrumb = hasParent ? crumbs[crumbs.length - 2] : null;

      const chip = document.createElement('div');
      chip.className = 'mobile-breadcrumb-chip';
      if (crumbs.length === 1) {
        chip.classList.add('single-crumb');
      }

      const menuBtn = document.createElement('button');
      menuBtn.className = 'mobile-breadcrumb-menu';
      menuBtn.innerHTML = '<span class="google-symbols">more_horiz</span>';
      menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.toggle('open');
        menuBtn.classList.toggle('open', isOpen);
      });
      chip.appendChild(menuBtn);

      const zoomOutBtn = document.createElement('button');
      zoomOutBtn.className =
          `mobile-breadcrumb-zoom-out ${hasParent ? 'active' : 'disabled'}`;
      zoomOutBtn.innerHTML = '<span class="google-symbols">zoom_out</span>';
      if (hasParent && parentCrumb) {
        zoomOutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const dropdown = mobileContainer.querySelector(
              '.mobile-breadcrumb-dropdown');
          if (dropdown) dropdown.classList.remove('open');
          zoomToAncestor(parentCrumb.id);
        });
      }
      chip.appendChild(zoomOutBtn);

      mobileContainer.appendChild(chip);

      const dropdownMenu = document.createElement('div');
      dropdownMenu.className = 'mobile-breadcrumb-dropdown';

      crumbs.forEach((crumb, idx) => {
        const isCurrent = idx === crumbs.length - 1;
        const item = document.createElement('div');
        item.className = `mobile-dropdown-item ${isCurrent ? 'active' : ''}`;

        const labelSpan = document.createElement('span');
        labelSpan.className = 'dropdown-item-label';
        labelSpan.innerText = crumb.title;
        item.appendChild(labelSpan);

        if (isCurrent) {
          const checkIcon = document.createElement('span');
          checkIcon.className = 'google-symbols trailing-icon';
          checkIcon.innerText = 'check_small';
          item.appendChild(checkIcon);
        }

        if (!isCurrent) {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.classList.remove('open');
            menuBtn.classList.remove('open');
            zoomToAncestor(crumb.id);
          });
        }
        dropdownMenu.appendChild(item);
      });
      mobileContainer.appendChild(dropdownMenu);

      document.addEventListener('click', (e) => {
        if (!mobileContainer.contains(e.target)) {
          dropdownMenu.classList.remove('open');
          menuBtn.classList.remove('open');
        }
      });
    }

    breadcrumbsEl.appendChild(mobileContainer);
  }
}

// ── Immersive Drag/Pan Viewport States & Handlers ──
let currentImmersiveX = 0;
let currentImmersiveY = 0;
let currentImmersiveScale = 1;

/**
 * Resolves natural dimensions of the image canvas from mainImage or metadata fallback.
 * @param {string=} nodeId
 * @return {{width: number, height: number}}
 */
function getNaturalDimensions(nodeId = currentNodeId) {
  if (nodeId === currentNodeId && mainImage && mainImage.naturalWidth > 0 && mainImage.naturalHeight > 0) {
    return {width: mainImage.naturalWidth, height: mainImage.naturalHeight};
  }
  const node = nodesData[nodeId];
  let maxX = 0;
  let maxY = 0;
  if (node) {
    if (node.box && node.box.length === 4) {
      maxY = Math.max(maxY, node.box[2] || 0);
      maxX = Math.max(maxX, node.box[3] || 0);
    }
    if (node.childrenIds) {
      node.childrenIds.forEach(childId => {
        const child = nodesData[childId];
        if (child) {
          if (child.labelPosition) {
            maxX = Math.max(maxX, child.labelPosition.anchorX || 0, child.labelPosition.labelX || 0);
            maxY = Math.max(maxY, child.labelPosition.anchorY || 0, child.labelPosition.labelY || 0);
          }
          if (child.label_anchor_points) {
            maxX = Math.max(maxX, child.label_anchor_points[0] || 0);
            maxY = Math.max(maxY, child.label_anchor_points[1] || 0);
          }
          if (child.box) {
            maxY = Math.max(maxY, child.box[2] || 0);
            maxX = Math.max(maxX, child.box[3] || 0);
          }
          if (child.zoomedBox) {
            maxY = Math.max(maxY, child.zoomedBox[2] || 0);
            maxX = Math.max(maxX, child.zoomedBox[3] || 0);
          }
        }
      });
    }
  }
  const width = maxX > 0 ? maxX : 1000;
  const height = maxY > 0 ? maxY : (width * 9 / 16);
  return {width, height};
}

/**
 * Recalculates and centers the viewport in immersive mode to ensure coverage.
 */
function resetImmersiveViewport() {
  if (!isImmersiveMode) return;
  const containerRect = mainContainer.getBoundingClientRect();
  const {width: naturalWidth, height: naturalHeight} = getNaturalDimensions(currentNodeId);

  const scaleX = naturalWidth > 0 ? (containerRect.width / naturalWidth) : 1;
  const scaleY = naturalHeight > 0 ? (containerRect.height / naturalHeight) : 1;

  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  if (isMobilePortrait) {
    currentImmersiveScale = scaleY;
  } else {
    currentImmersiveScale = Math.max(scaleX, scaleY) * IMMERSIVE_ZOOM_BUFFER;
  }
  currentImmersiveX = 0;
  currentImmersiveY = 0;

  if (isMobilePortrait && shouldPanToOnboarding &&
      !hasDismissedOnboardingTooltip && currentNodeId === rootId) {
    const bestChildId = findBestChildId(rootId);
    if (bestChildId) {
      const childNode = nodesData[bestChildId];
      if (childNode && childNode.labelPosition) {
        const anchorX = childNode.labelPosition.anchorX;
        let targetX = (naturalWidth / 2 - anchorX) * currentImmersiveScale;
        const clamped = clampImmersiveOffsets(targetX, 0);
        currentImmersiveX = clamped.x;
        if (!isLightboxTransitioning) {
          shouldPanToOnboarding = false;
        }
      }
    }
  }

  applyImmersiveTransform();
  renderLabels();
  if (minimapMode === 3) {
    syncMinimapViewport();
  }
}

/**
 * Applies the current translation and scale transform to mainImage and maps.
 */
function applyImmersiveTransform() {
  if (!isAnimating) {
    mainImage.style.transform = `translate(${currentImmersiveX}px, ${
        currentImmersiveY}px) scale(${currentImmersiveScale})`;
  }
  if (labelsContainer) {
    labelsContainer.style.transform = `translate(${currentImmersiveX}px, ${currentImmersiveY}px)`;
  }

  const tooltipEl = document.getElementById('onboarding-tooltip');
  if (tooltipEl && tooltipEl.style.display !== 'none' &&
      onboardingTooltipInitialX !== null) {
    const deltaX = currentImmersiveX - onboardingTooltipInitialX;
    tooltipEl.style.transform = `translate(${deltaX}px, 0px)`;
  }
}

/**
 * Executes a pending zoom transition once both loading and lightbox animations
 * are settled.
 */
function executePendingZoom() {
  if (!pendingZoomChildId) return;
  if (isLightboxTransitioning || isAnimating) {
    setTimeout(executePendingZoom, 50);
    return;
  }
  const targetId = pendingZoomChildId;
  pendingZoomChildId = null;
  zoomToChild(targetId);
}

/**
 * Clamps coordinates to prevent empty edges.
 * @param {number} x
 * @param {number} y
 * @return {{x:number, y:number}}
 */
function clampImmersiveOffsets(x, y) {
  const containerRect = mainContainer.getBoundingClientRect();
  const {width: naturalWidth, height: naturalHeight} = getNaturalDimensions(currentNodeId);
  const renderedWidth = naturalWidth * currentImmersiveScale;
  const renderedHeight = naturalHeight * currentImmersiveScale;

  let maxX = 0;
  if (renderedWidth > containerRect.width) {
    maxX = (renderedWidth - containerRect.width) / 2;
  }
  const minX = -maxX;

  let maxY = 0;
  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  if (!isMobilePortrait && renderedHeight > containerRect.height) {
    maxY = (renderedHeight - containerRect.height) / 2;
  }
  const minY = -maxY;

  return {
    x: Math.max(minX, Math.min(maxX, x)),
    y: Math.max(minY, Math.min(maxY, y))
  };
}

// =========================================
// Client-side label placement algorithms
// =========================================

/**
 * Check if two rectangles overlap. Each rect is {x, y, w, h} where (x,y) is
 * center.
 * @param {{x:number,y:number,w:number,h:number}} a
 * @param {{x:number,y:number,w:number,h:number}} b
 * @param {number=} margin
 * @return {boolean}
 */
function rectsOverlap(a, b, margin = 12) {
  return !(
      a.x + a.w / 2 + margin <= b.x - b.w / 2 - margin ||
      b.x + b.w / 2 + margin <= a.x - a.w / 2 - margin ||
      a.y + a.h / 2 + margin <= b.y - b.h / 2 - margin ||
      b.y + b.h / 2 + margin <= a.y - a.h / 2 - margin);
}

/**
 * Check if two line segments cross using CCW test.
 * @param {!Array<number>} p1
 * @param {!Array<number>} p2
 * @param {!Array<number>} p3
 * @param {!Array<number>} p4
 * @return {boolean}
 */
function linesCross(p1, p2, p3, p4) {
  const ccw = (a, b, c) =>
      (c[1] - a[1]) * (b[0] - a[0]) > (b[1] - a[1]) * (c[0] - a[0]);
  return ccw(p1, p3, p4) !== ccw(p2, p3, p4) &&
      ccw(p1, p2, p3) !== ccw(p1, p2, p4);
}

/**
 * Check if a line segment intersects a rectangle (center-based rect).
 * @param {!Array<number>} p1
 * @param {!Array<number>} p2
 * @param {{x:number,y:number,w:number,h:number}} rect Center-based rect.
 * @param {number=} margin
 * @return {boolean}
 */
function lineIntersectsRect(p1, p2, rect, margin = 5) {
  const x = rect.x - rect.w / 2 - margin;
  const y = rect.y - rect.h / 2 - margin;
  const w = rect.w + 2 * margin;
  const h = rect.h + 2 * margin;
  const corners = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const edges = [
    [corners[0], corners[1]],
    [corners[1], corners[2]],
    [corners[2], corners[3]],
    [corners[3], corners[0]],
  ];
  for (const [es, ee] of edges) {
    if (linesCross(p1, p2, es, ee)) return true;
  }
  return false;
}

/**
 * Compute the visible length of the leader line outside the label box.
 * @param {number} ax Anchor X.
 * @param {number} ay Anchor Y.
 * @param {number} lx Label center X.
 * @param {number} ly Label center Y.
 * @param {number} lw Label width.
 * @param {number} lh Label height.
 * @return {number} Visible line length.
 */
function computeVisibleLineLength(ax, ay, lx, ly, lw, lh) {
  const dx = ax - lx;
  const dy = ay - ly;
  const totalLength = Math.sqrt(dx * dx + dy * dy);
  if (totalLength < 0.001) return 0;

  const halfW = lw / 2;
  const halfH = lh / 2;
  const tValues = [];
  if (Math.abs(dx) > 0.001) {
    tValues.push(halfW / Math.abs(dx));
  }
  if (Math.abs(dy) > 0.001) {
    tValues.push(halfH / Math.abs(dy));
  }

  if (tValues.length === 0) return 0;

  const t = Math.min(...tValues);
  if (t >= 1.0) return 0;
  return (1.0 - t) * totalLength;
}



/**
 * Run a single physics simulation from precomputed initial positions.
 * @param {!Array<!Object>} labels Array of {id, anchorX, anchorY, w, h}.
 * @param {number} natW Natural image width.
 * @param {number} natH Natural image height.
 * @param {?Array<!Array<number>>} costMap Content cost heatmap.
 * @param {!Object=} params Physics parameters.
 * @param {!Array<{x: number, y: number}>} initPositions Precomputed initial
 *     positions, one per label.
 * @return {!Array<!Object>} The final label positions.
 */
function runSinglePhysicsStart(
    labels, natW, natH, costMap, params, initPositions) {
  const overlapRepulsionScale = params.overlap_repulsion_scale !== undefined ?
      params.overlap_repulsion_scale :
      1.0;
  const springForceScale = params.spring_force_scale !== undefined ?
      params.spring_force_scale :
      0.05;
  const idealDistancePx =
      params.ideal_distance_px !== undefined ? params.ideal_distance_px : 150;
  const closeSpringMultiplier = params.close_spring_multiplier !== undefined ?
      params.close_spring_multiplier :
      5.0;
  const anchorRepulsionScale = params.anchor_repulsion_scale !== undefined ?
      params.anchor_repulsion_scale :
      8.0;
  const anchorExclusionPx = params.anchor_exclusion_px !== undefined ?
      params.anchor_exclusion_px :
      50;
  const contentAvoidanceScale = params.content_avoidance_scale !== undefined ?
      params.content_avoidance_scale :
      15.0;
  const labelClearancePx =
      params.label_clearance_px !== undefined ? params.label_clearance_px : 10;

  const minDim = Math.min(natW, natH);
  const maxIter =
      params.max_iterations !== undefined ? params.max_iterations : 150;

  // Initialize from precomputed positions.
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].isCustomPosition) {
      // Keep its initial position (which is the custom position)
    } else {
      labels[i].x = initPositions[i].x;
      labels[i].y = initPositions[i].y;
    }
  }

  const n = labels.length;
  const maxStep = 0.05 * minDim;

  for (let iter = 0; iter < maxIter; iter++) {
    const damping = Math.max(0.1, 1.0 - iter / maxIter * 0.9);
    const forces = labels.map(() => [0, 0]);
    let maxDisp = 0;

    for (let i = 0; i < n; i++) {
      const li = labels[i];

      // Force 1: Label-label overlap repulsion (50px gap buffer = 25px per
      // side).
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const lj = labels[j];
        const dx = li.x - lj.x;
        const dy = li.y - lj.y;
        const overlapX = (li.w + lj.w) / 2 + 25 - Math.abs(dx);
        const overlapY = (li.h + lj.h) / 2 + 25 - Math.abs(dy);
        if (overlapX > 0 && overlapY > 0) {
          const area = overlapX * overlapY;
          const dist = Math.max(Math.hypot(dx, dy), 1e-6);
          forces[i][0] += (dx / dist) * area * overlapRepulsionScale;
          forces[i][1] += (dy / dist) * area * overlapRepulsionScale;
        }
      }

      // Force 2: Visible-length spring (asymmetric: stronger when too close).
      // Direction: (anchor - center), magnitude asymmetric on sign of error.
      const visLen = computeVisibleLineLength(
          li.anchorX, li.anchorY, li.x, li.y, li.w, li.h);
      const adx = li.anchorX - li.x;
      const ady = li.anchorY - li.y;
      const adist = Math.hypot(adx, ady);
      if (adist > 0.01) {
        const error = visLen - idealDistancePx;
        const multiplier = error < 0 ? closeSpringMultiplier : 1.0;
        const springForce = error * springForceScale * multiplier;
        forces[i][0] += (adx / adist) * springForce;
        forces[i][1] += (ady / adist) * springForce;
      }

      // Force 3: Anchor-dot repulsion (linear ramp, no singularity at zero).
      // Fires when another label's anchor is within anchorExclusionPx of this
      // label's edge.
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const lj = labels[j];
        const anchorVisLen = computeVisibleLineLength(
            lj.anchorX, lj.anchorY, li.x, li.y, li.w, li.h);
        if (anchorVisLen < anchorExclusionPx) {
          const ddx = li.x - lj.anchorX;
          const ddy = li.y - lj.anchorY;
          const ddist = Math.max(Math.hypot(ddx, ddy), 1e-6);
          const repulsion =
              (anchorExclusionPx - anchorVisLen) * anchorRepulsionScale;
          forces[i][0] += (ddx / ddist) * repulsion;
          forces[i][1] += (ddy / ddist) * repulsion;
        }
      }

      // Force 4: Content avoidance force.
      if (costMap && contentAvoidanceScale > 0) {
        const [fxCa, fyCa] = computeContentAvoidanceForce(
            li.x, li.y, li.w, li.h, costMap, 16, labelClearancePx);
        forces[i][0] += fxCa * contentAvoidanceScale;
        forces[i][1] += fyCa * contentAvoidanceScale;
      }

      // Force 5: UI Obstacle avoidance force (e.g. Left Pill, Right Pill, Text Panel, Minimap).
      const obstacles = params.obstacles || [];
      for (const obs of obstacles) {
        const dx = li.x - obs.x;
        const dy = li.y - obs.y;
        const overlapX = (li.w + obs.w) / 2 + 10 - Math.abs(dx);
        const overlapY = (li.h + obs.h) / 2 + 10 - Math.abs(dy);
        if (overlapX > 0 && overlapY > 0) {
          const area = overlapX * overlapY;
          const dist = Math.max(Math.hypot(dx, dy), 1e-6);
          forces[i][0] += (dx / dist) * area * (overlapRepulsionScale * 2.0);
          forces[i][1] += (dy / dist) * area * (overlapRepulsionScale * 2.0);
        }
      }
    }

    // Apply forces.
    for (let i = 0; i < n; i++) {
      if (labels[i].isCustomPosition) continue;

      let fx = forces[i][0] * damping;
      let fy = forces[i][1] * damping;
      const mag = Math.hypot(fx, fy);
      if (mag > maxStep) {
        fx = fx / mag * maxStep;
        fy = fy / mag * maxStep;
      }

      labels[i].x += fx;
      labels[i].y += fy;

      // Boundary clamp to natural image dimensions.
      labels[i].x = Math.max(
          labels[i].w / 2, Math.min(natW - labels[i].w / 2, labels[i].x));
      labels[i].y = Math.max(
          labels[i].h / 2, Math.min(natH - labels[i].h / 2, labels[i].y));

      maxDisp = Math.max(maxDisp, mag);
    }

    if (maxDisp < 0.5) break;
  }

  return labels;
}

/**
 * Evaluates the visual cost/score of a given label layout.
 * @param {!Array<!Object>} labels The list of labels with positions.
 * @param {number} natW Width of the widget area.
 * @param {number} natH Height of the widget area.
 * @param {?Object=} costMap Optional cost map.
 * @param {!Object=} params Configuration params.
 * @return {number} The visual layout cost score (lower is better).
 */
function evaluateLayoutScore(labels, natW, natH, costMap = null, params = {}) {
  const idealDistancePx =
      params.ideal_distance_px !== undefined ? params.ideal_distance_px : 150;
  const labelClearancePx =
      params.label_clearance_px !== undefined ? params.label_clearance_px : 10;
  const anchorExclusionPx = params.anchor_exclusion_px !== undefined ?
      params.anchor_exclusion_px :
      50;
  const closeSpringMultiplier = params.close_spring_multiplier !== undefined ?
      params.close_spring_multiplier :
      5.0;
  const overlapScoreWeight = params.overlap_score_weight !== undefined ?
      params.overlap_score_weight :
      10.0;
  const springScoreWeight = params.spring_score_weight !== undefined ?
      params.spring_score_weight :
      0.5;
  const contentScoreWeight = params.content_score_weight !== undefined ?
      params.content_score_weight :
      105.0;
  const anchorScoreWeight = params.anchor_score_weight !== undefined ?
      params.anchor_score_weight :
      800.0;
  const lineCrossScoreWeight = params.line_cross_score_weight !== undefined ?
      params.line_cross_score_weight :
      100.0;

  const n = labels.length;
  let overlapArea = 0;
  let totalSpringDistError = 0;
  let totalContentCost = 0;
  let labelAnchorOverlapPenalty = 0;
  let lineLabelCrossPenalty = 0;

  for (let i = 0; i < n; i++) {
    const li = labels[i];
    const liRect = {x: li.x, y: li.y, w: li.w, h: li.h};

    // 1. Overlap penalty (50px gap buffer = 25px per side)
    for (let j = i + 1; j < n; j++) {
      const lj = labels[j];
      const dx = li.x - lj.x;
      const dy = li.y - lj.y;
      const overlapX = Math.max(0, (li.w + lj.w) / 2 + 25 - Math.abs(dx));
      const overlapY = Math.max(0, (li.h + lj.h) / 2 + 25 - Math.abs(dy));
      if (overlapX > 0 && overlapY > 0) {
        overlapArea += overlapX * overlapY;
      }
    }

    // 2. Visible-length spring error (asymmetric: closeSpringMultiplier ×
    // weight when too close)
    const visLen = computeVisibleLineLength(
        li.anchorX, li.anchorY, li.x, li.y, li.w, li.h);
    const springError = Math.abs(visLen - idealDistancePx);
    const springMult = visLen < idealDistancePx ? closeSpringMultiplier : 1.0;
    totalSpringDistError += springError * springMult;

    // 3. Content cost penalty
    if (costMap) {
      totalContentCost += computeMeanCostUnderLabel(
          li.x, li.y, li.w, li.h, costMap, 16, labelClearancePx);
    }

    // 4. Label-anchor overlap: label bbox overlaps another label's anchor dot.
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const dotRect = {
        x: labels[j].anchorX,
        y: labels[j].anchorY,
        w: anchorExclusionPx * 2,
        h: anchorExclusionPx * 2,
      };
      if (rectsOverlap(liRect, dotRect, 0)) {
        labelAnchorOverlapPenalty += anchorScoreWeight;
      }
    }

    // 5. Line-label crossing: leader line intersects another label's bbox.
    const lineStart = [li.x, li.y];
    const lineEnd = [li.anchorX, li.anchorY];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const lj = labels[j];
      if (lineIntersectsRect(
              lineStart, lineEnd, {x: lj.x, y: lj.y, w: lj.w, h: lj.h}, 0)) {
        lineLabelCrossPenalty += lineCrossScoreWeight;
      }
    }

    // 6. UI Obstacle overlap penalty
    const obstacles = params.obstacles || [];
    for (const obs of obstacles) {
      const dx = li.x - obs.x;
      const dy = li.y - obs.y;
      const overlapX = Math.max(0, (li.w + obs.w) / 2 + 10 - Math.abs(dx));
      const overlapY = Math.max(0, (li.h + obs.h) / 2 + 10 - Math.abs(dy));
      if (overlapX > 0 && overlapY > 0) {
        overlapArea += overlapX * overlapY * 50.0;
      }
    }
  }

  return overlapArea * overlapScoreWeight +
      totalSpringDistError * springScoreWeight +
      totalContentCost * contentScoreWeight + labelAnchorOverlapPenalty +
      lineLabelCrossPenalty;
}

/**
 * Run multi-start client-side physics simulation and select the best layout.
 * @param {!Array<!Object>} labels The array of labels to place.
 * @param {number} natW Width of the widget area.
 * @param {number} natH Height of the widget area.
 * @param {?Array<!Array<number>>=} costMap Content cost heatmap.
 * @param {!Object=} params Configuration parameters.
 * @return {!Array<!Object>} The placed labels with best layout.
 */
function clientPhysicsPlacement(
    labels, natW, natH, costMap = null, params = {}) {
  const idealDistancePx =
      params.ideal_distance_px !== undefined ? params.ideal_distance_px : 150;
  const labelClearancePx =
      params.label_clearance_px !== undefined ? params.label_clearance_px : 10;
  const distMults =
      (params.distance_multipliers && params.distance_multipliers.length > 0) ?
      params.distance_multipliers :
      [1.0, 1.2, 1.4];

  // Precompute anchor statistics for strategies S2, S2a, S2b.
  const anchorXs = labels.map(l => l.anchorX);
  const anchorYs = labels.map(l => l.anchorY);
  const centroidX = anchorXs.reduce((a, b) => a + b, 0) / labels.length;
  const centroidY = anchorYs.reduce((a, b) => a + b, 0) / labels.length;
  const sortedXs = [...anchorXs].sort((a, b) => a - b);
  const sortedYs = [...anchorYs].sort((a, b) => a - b);
  const medianX = sortedXs.length % 2 === 1 ?
      sortedXs[Math.floor(sortedXs.length / 2)] :
      (sortedXs[sortedXs.length / 2 - 1] + sortedXs[sortedXs.length / 2]) / 2;
  const medianY = sortedYs.length % 2 === 1 ?
      sortedYs[Math.floor(sortedYs.length / 2)] :
      (sortedYs[sortedYs.length / 2 - 1] + sortedYs[sortedYs.length / 2]) / 2;

  /**
   * Clamp a label position to within the image bounds.
   * @param {number} x Label center X.
   * @param {number} y Label center Y.
   * @param {number} w Label width.
   * @param {number} h Label height.
   * @return {{x: number, y: number, clamped: boolean}}
   */
  function clampLabel(x, y, w, h) {
    const cx = Math.max(w / 2, Math.min(natW - w / 2, x));
    const cy = Math.max(h / 2, Math.min(natH - h / 2, y));
    const clamped = Math.abs(x - cx) > 1 || Math.abs(y - cy) > 1;
    return {x: cx, y: cy, clamped};
  }

  /**
   * Compute fallback direction (S1: outward from image center) for a label.
   * @param {{anchorX: number, anchorY: number}} label
   * @return {{dx: number, dy: number}}
   */
  function imageCenterDirection(label) {
    const dx = label.anchorX - natW / 2;
    const dy = label.anchorY - natH / 2;
    const norm = Math.max(Math.hypot(dx, dy), 1e-6);
    return {dx: dx / norm, dy: dy / norm};
  }

  /**
   * Generate initial positions for one strategy + distance.
   * @param {string} strategy One of 'center', 'centroid', 'vert', 'horiz',
   *     'heatmap'.
   * @param {number} offsetPx Distance from anchor.
   * @param {boolean=} allowClamped Whether to allow positions even if >50% clamped.
   * @return {?Array<{x: number, y: number}>} Positions, or null to skip.
   */
  function generateInitPositions(strategy, offsetPx, allowClamped = false) {
    const positions = [];
    let clampedCount = 0;

    for (const label of labels) {
      if (label.isCustomPosition) {
        positions.push({x: label.x, y: label.y});
        continue;
      }
      let dx = 0;
      let dy = 0;

      if (strategy === 'center') {
        // S1: Push outward from image center.
        const dir = imageCenterDirection(label);
        dx = dir.dx;
        dy = dir.dy;
      } else if (strategy === 'centroid') {
        // S2: Push outward from anchor centroid.
        dx = label.anchorX - centroidX;
        dy = label.anchorY - centroidY;
        const norm = Math.hypot(dx, dy);
        if (norm < 1e-6) {
          // Degenerate: anchor at centroid, fall back to S1 direction.
          const dir = imageCenterDirection(label);
          dx = dir.dx;
          dy = dir.dy;
        } else {
          dx /= norm;
          dy /= norm;
        }
      } else if (strategy === 'vert') {
        // S2a: Vertical median split (left/right).
        if (label.anchorX < medianX) {
          dx = -1;
          dy = 0;
        } else if (label.anchorX > medianX) {
          dx = 1;
          dy = 0;
        } else {
          // Tiebreak: use S1 direction.
          const dir = imageCenterDirection(label);
          dx = dir.dx < 0 ? -1 : 1;
          dy = 0;
        }
      } else if (strategy === 'horiz') {
        // S2b: Horizontal median split (up/down).
        if (label.anchorY < medianY) {
          dx = 0;
          dy = -1;
        } else if (label.anchorY > medianY) {
          dx = 0;
          dy = 1;
        } else {
          // Tiebreak: use S1 direction.
          const dir = imageCenterDirection(label);
          dx = 0;
          dy = dir.dy < 0 ? -1 : 1;
        }
      } else if (strategy === 'heatmap') {
        // S3b: Heatmap-guided — sample 8 directions, pick lowest cost.
        if (!costMap) {
          // No heatmap: fall back to S1.
          const dir = imageCenterDirection(label);
          dx = dir.dx;
          dy = dir.dy;
        } else {
          let bestCost = Infinity;
          let bestDx = 0;
          let bestDy = 0;
          for (let a = 0; a < 8; a++) {
            const angle = a * Math.PI / 4;
            const cdx = Math.cos(angle);
            const cdy = Math.sin(angle);
            const candidateX = label.anchorX + cdx * offsetPx;
            const candidateY = label.anchorY + cdy * offsetPx;
            const cost = computeMeanCostUnderLabel(
                candidateX, candidateY, label.w, label.h, costMap, 16,
                labelClearancePx);
            if (cost < bestCost) {
              bestCost = cost;
              bestDx = cdx;
              bestDy = cdy;
            }
          }
          dx = bestDx;
          dy = bestDy;
        }
      }

      const rawX = label.anchorX + dx * offsetPx;
      const rawY = label.anchorY + dy * offsetPx;
      const result = clampLabel(rawX, rawY, label.w, label.h);
      if (result.clamped) clampedCount++;
      positions.push({x: result.x, y: result.y});
    }

    // Skip if >50% of labels are clamped (start is too aggressive), unless allowClamped is true.
    if (!allowClamped && clampedCount > labels.length / 2) return null;
    return positions;
  }

  // Build starts: 5 strategies × N distance multipliers.
  const strategies = ['center', 'centroid', 'vert', 'horiz', 'heatmap'];
  let bestLayout = null;
  let bestScore = Infinity;

  for (const dm of distMults) {
    const offsetPx = idealDistancePx * dm;
    for (const strat of strategies) {
      const initPositions = generateInitPositions(strat, offsetPx);
      if (!initPositions) continue;  // Skipped (too many clamped).

      const labelsClone = labels.map(l => ({...l}));
      runSinglePhysicsStart(
          labelsClone, natW, natH, costMap, params, initPositions);

      const score =
          evaluateLayoutScore(labelsClone, natW, natH, costMap, params);
      if (score < bestScore) {
        bestScore = score;
        bestLayout = labelsClone;
      }
    }
  }

  // Fallback: If all aggressive starts were skipped, allow clamped starts at 1x distance
  if (!bestLayout) {
    for (const strat of strategies) {
      const initPositions = generateInitPositions(strat, idealDistancePx, true);
      if (!initPositions) continue;

      const labelsClone = labels.map(l => ({...l}));
      runSinglePhysicsStart(
          labelsClone, natW, natH, costMap, params, initPositions);

      const score =
          evaluateLayoutScore(labelsClone, natW, natH, costMap, params);
      if (score < bestScore) {
        bestScore = score;
        bestLayout = labelsClone;
      }
    }
  }

  // Copy chosen coordinates back to original array if layout found
  if (bestLayout) {
    for (let i = 0; i < labels.length; i++) {
      labels[i].x = bestLayout[i].x;
      labels[i].y = bestLayout[i].y;
    }
  }

  return labels;
}

/**
 * Computes mean content cost under the label's bounding box.
 * @param {number} labelX Center X of the label.
 * @param {number} labelY Center Y of the label.
 * @param {number} labelW Width of the label.
 * @param {number} labelH Height of the label.
 * @param {?Array<!Array<number>>} costMap Content cost heatmap.
 * @param {number=} tileSize Map tile resolution.
 * @param {number=} paddingPx Optional padding.
 * @return {number} The mean content cost (0.0 to 100.0).
 */
function computeMeanCostUnderLabel(
    labelX, labelY, labelW, labelH, costMap, tileSize = 16, paddingPx = 0) {
  if (!costMap || costMap.length === 0) return 0.0;
  const mapH = costMap.length;
  const mapW = costMap[0].length;

  const w = labelW + 2 * paddingPx;
  const h = labelH + 2 * paddingPx;

  const x1 = Math.max(0, Math.floor((labelX - w / 2) / tileSize));
  const y1 = Math.max(0, Math.floor((labelY - h / 2) / tileSize));
  const x2 = Math.min(mapW, Math.floor((labelX + w / 2) / tileSize) + 1);
  const y2 = Math.min(mapH, Math.floor((labelY + h / 2) / tileSize) + 1);

  if (x2 <= x1 || y2 <= y1) return 0.0;

  let sum = 0;
  let count = 0;
  for (let r = y1; r < y2; r++) {
    for (let c = x1; c < x2; c++) {
      sum += costMap[r][c];
      count++;
    }
  }
  return count > 0 ? sum / count : 0.0;
}

/**
 * Computes a repulsion force vector from high cost content regions using
 * numerical gradient.
 * @param {number} labelX Center X of the label.
 * @param {number} labelY Center Y of the label.
 * @param {number} labelW Width of the label.
 * @param {number} labelH Height of the label.
 * @param {?Array<!Array<number>>} costMap Content cost heatmap.
 * @param {number=} tileSize Map tile resolution.
 * @param {number=} paddingPx Optional padding.
 * @return {!Array<number>} Force vector [fx, fy].
 */
function computeContentAvoidanceForce(
    labelX, labelY, labelW, labelH, costMap, tileSize = 16, paddingPx = 0) {
  if (!costMap || costMap.length === 0) {
    return [0, 0];
  }
  // delta step for gradient (1 tile = 16 pixels)
  const delta = 16;
  const costL = computeMeanCostUnderLabel(
      labelX - delta, labelY, labelW, labelH, costMap, tileSize, paddingPx);
  const costR = computeMeanCostUnderLabel(
      labelX + delta, labelY, labelW, labelH, costMap, tileSize, paddingPx);
  const costT = computeMeanCostUnderLabel(
      labelX, labelY - delta, labelW, labelH, costMap, tileSize, paddingPx);
  const costB = computeMeanCostUnderLabel(
      labelX, labelY + delta, labelW, labelH, costMap, tileSize, paddingPx);

  const gradX = costR - costL;
  const gradY = costB - costT;

  const forceScale = 0.08;
  return [-gradX * forceScale * 100, -gradY * forceScale * 100];
}

/**
 * Compute placement quality metrics for the current label layout.
 * @param {!Array<!Object>} labels Array of {x, y, w, h, anchorX, anchorY}.
 * @param {number} natW Natural image width.
 * @param {number} natH Natural image height.
 * @param {string} methodName Name of the placement method.
 * @return {!Object} Metrics dictionary.
 */
function computePlacementMetrics(labels, natW, natH, methodName) {
  const n = labels.length;
  let totalOverlap = 0, overlapPairs = 0, labelAnchorOverlaps = 0;
  let lineLabelCrosses = 0, oob = 0;
  const dists = [];
  const angles = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = labels[i], b = labels[j];
      const ix1 = Math.max(a.x - a.w / 2, b.x - b.w / 2);
      const iy1 = Math.max(a.y - a.h / 2, b.y - b.h / 2);
      const ix2 = Math.min(a.x + a.w / 2, b.x + b.w / 2);
      const iy2 = Math.min(a.y + a.h / 2, b.y + b.h / 2);
      if (ix1 < ix2 && iy1 < iy2) {
        totalOverlap += (ix2 - ix1) * (iy2 - iy1);
        overlapPairs++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const li = labels[i];
    const liRect = {x: li.x, y: li.y, w: li.w, h: li.h};
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const dotRect =
          {x: labels[j].anchorX, y: labels[j].anchorY, w: 40, h: 40};
      if (rectsOverlap(liRect, dotRect, 0)) {
        labelAnchorOverlaps++;
        break;
      }
    }

    const lineStart = [li.x, li.y];
    const lineEnd = [li.anchorX, li.anchorY];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const lj = labels[j];
      if (lineIntersectsRect(
              lineStart, lineEnd, {x: lj.x, y: lj.y, w: lj.w, h: lj.h}, 0))
        lineLabelCrosses++;
    }

    const dx = li.anchorX - li.x;
    const dy = li.anchorY - li.y;
    dists.push(Math.sqrt(dx * dx + dy * dy));
    angles.push(Math.atan2(li.y - li.anchorY, li.x - li.anchorX));

    if (li.x - li.w / 2 < 0 || li.x + li.w / 2 > natW || li.y - li.h / 2 < 0 ||
        li.y + li.h / 2 > natH)
      oob++;
  }

  const meanDist = n > 0 ? dists.reduce((a, b) => a + b, 0) / n : 0;
  const maxDist = n > 0 ? Math.max(...dists) : 0;
  let angularVar = 0;
  if (angles.length > 1) {
    const meanA = angles.reduce((a, b) => a + b, 0) / angles.length;
    angularVar =
        angles.reduce((a, v) => a + (v - meanA) ** 2, 0) / angles.length;
  }

  return {
    placement_method: methodName,
    num_labels: n,
    image_width: natW,
    image_height: natH,
    total_overlap_area: Math.round(totalOverlap),
    overlap_pair_count: overlapPairs,
    label_anchor_overlap_count: labelAnchorOverlaps,
    line_label_cross_count: lineLabelCrosses,
    mean_label_anchor_dist: Math.round(meanDist * 10) / 10,
    max_label_anchor_dist: Math.round(maxDist * 10) / 10,
    labels_out_of_bounds: oob,
    angular_variance: Math.round(angularVar * 1000) / 1000,
  };
}

/**
 * Scans the mask canvas to find the closest non-transparent pixel to [startX, startY].
 * @param {!HTMLCanvasElement} canvas The mask canvas.
 * @param {number} startX The natural X coordinate.
 * @param {number} startY The natural Y coordinate.
 * @return {?{x: number, y: number}} The closest non-transparent pixel coordinates, or null.
 */
function findNearestMaskPixel(canvas, startX, startY) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  const queue = [{x: startX, y: startY}];
  const visited = new Set();
  visited.add(`${startX},${startY}`);

  const directions = [
    {dx: 0, dy: 1}, {dx: 1, dy: 0}, {dx: 0, dy: -1}, {dx: -1, dy: 0},
    {dx: 1, dy: 1}, {dx: 1, dy: -1}, {dx: -1, dy: 1}, {dx: -1, dy: -1}
  ];

  // Cap iterations to prevent main-thread freeze on empty/corrupt canvases.
  // 50k iterations covers a ~250px radius search — more than enough for dot snapping.
  const MAX_ITERATIONS = 50000;
  let head = 0;
  while (head < queue.length && head < MAX_ITERATIONS) {
    const curr = queue[head++];
    
    if (curr.x >= 0 && curr.x < width && curr.y >= 0 && curr.y < height) {
      const idx = (curr.y * width + curr.x) * 4;
      if (isWhitePixel(data[idx], data[idx + 1], data[idx + 2])) {
        return curr; // Found the closest pixel!
      }
      
      for (const dir of directions) {
        const nx = curr.x + dir.dx;
        const ny = curr.y + dir.dy;
        const key = `${nx},${ny}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push({x: nx, y: ny});
        }
      }
    }
  }
  return null;
}

/**
 * Computes bounding boxes of UI elements (toolbar left/right, text panel, minimap)
 * in natural image coordinate space so the physics engine avoids placing labels over them.
 * @param {number} offsetX Image offset X in container.
 * @param {number} offsetY Image offset Y in container.
 * @param {number} scaleX Image scale X.
 * @param {number} scaleY Image scale Y.
 * @return {!Array<{x: number, y: number, w: number, h: number}>} Array of obstacle bounding boxes.
 */
function getUIObstaclesInNaturalCoords(offsetX, offsetY, scaleX, scaleY) {
  const obstacles = [];
  const cRect = mainContainer ? mainContainer.getBoundingClientRect() : {left: 0, top: 0};

  function addElementObstacle(el, padPx = 8) {
    if (!el || el.offsetParent === null) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;

    const screenX1 = r.left - cRect.left - padPx;
    const screenY1 = r.top - cRect.top - padPx;
    const screenX2 = r.right - cRect.left + padPx;
    const screenY2 = r.bottom - cRect.top + padPx;

    const natX1 = (screenX1 - offsetX) / scaleX;
    const natY1 = (screenY1 - offsetY) / scaleY;
    const natX2 = (screenX2 - offsetX) / scaleX;
    const natY2 = (screenY2 - offsetY) / scaleY;

    const minX = Math.min(natX1, natX2);
    const maxX = Math.max(natX1, natX2);
    const minY = Math.min(natY1, natY2);
    const maxY = Math.max(natY1, natY2);

    obstacles.push({
      x: (minX + maxX) / 2,
      y: (minY + maxY) / 2,
      w: maxX - minX,
      h: maxY - minY,
    });
  }

  // 1. Top left toolbar (breadcrumbs / title)
  const tLeft = document.querySelector('#lightbox-toolbar .toolbar-left');
  if (tLeft) {
    addElementObstacle(tLeft, 10);
  }

  // 2. Top right toolbar (actions, feedback, close button)
  const tRight = document.querySelector('#lightbox-toolbar .toolbar-right');
  if (tRight) {
    addElementObstacle(tRight, 10);
  }

  // Fallback for whole toolbar if neither child found
  if (!tLeft && !tRight) {
    const tb = document.getElementById('lightbox-toolbar');
    if (tb) addElementObstacle(tb, 10);
  }

  // 3. Text panel (bottom left)
  const tp = document.getElementById('text-panel');
  if (tp && tp.offsetParent !== null && !tp.classList.contains('hidden')) {
    addElementObstacle(tp, 12);
  }

  // 4. Minimap overlay (bottom right)
  const mm = document.getElementById('minimap-container') || document.getElementById('immersive-minimap-container');
  if (mm && mm.offsetParent !== null) {
    addElementObstacle(mm, 10);
  }

  // 5. Tour overlay (bottom)
  const tourOverlay = document.getElementById('tour-overlay');
  if (tourOverlay && tourOverlay.offsetParent !== null &&
      !tourOverlay.classList.contains('hidden') &&
      getComputedStyle(tourOverlay).display !== 'none') {
    addElementObstacle(tourOverlay, 14);
  }

  return obstacles;
}

// Render labels for the current node's children
/** Renders labels. */
function renderLabels() {
  const savedHoveringChildId = hoveringChildId;
  suppressMouseLeave = true;
  // Clear existing labels and lines
  labelsContainer.querySelectorAll('.label').forEach(el => el.remove());
  labelsSvg.innerHTML = '';
  suppressMouseLeave = false;

  const node = nodesData[currentNodeId];
  if (!node) return;
  if (node.childrenIds.length === 0) {
    if (isImmersiveModeConfig && !isMobileViewport()) {
      renderTerminalDot();
    }
    return;
  }

  const containerRect = mainContainer.getBoundingClientRect();
  const {width: naturalWidth, height: naturalHeight} = getNaturalDimensions(node.id || currentNodeId);

  let scaleX, scaleY, offsetX, offsetY;
  if (isImmersiveMode) {
    scaleX = currentImmersiveScale;
    scaleY = currentImmersiveScale;
    offsetX = (containerRect.width - naturalWidth * currentImmersiveScale) / 2;
    offsetY =
        (containerRect.height - naturalHeight * currentImmersiveScale) / 2;
  } else {
    let rect = mainImage.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      rect = containerRect;
    }
    scaleX = naturalWidth > 0 ? (rect.width / naturalWidth) : 1;
    scaleY = naturalHeight > 0 ? (rect.height / naturalHeight) : 1;
    if (scaleX === 0 || scaleY === 0) {
      scaleX = 1;
      scaleY = 1;
    }
    offsetX = rect.left - containerRect.left;
    offsetY = rect.top - containerRect.top;
  }

  const avgScale = (scaleX + scaleY) / 2;
  const dynamicFontSize = parseInt('1') || 0;
  const baseFontSize = false ? 40 : 24;
  const scaledFontSize = Math.round(baseFontSize * avgScale);
  Logger.log(
      'renderLabels called: scaleX=', scaleX, 'scaleY=', scaleY,
      'avgScale=', avgScale, 'scaledFontSize=', scaledFontSize);

  // Initialize labelPosition if not present (required for client-side
  // placement)
  node.childrenIds.forEach(childId => {
    const childNode = nodesData[childId];
    if (childNode && !childNode.labelPosition) {
      let anchorX = null;
      let anchorY = null;
      if (childNode.label_anchor_points) {
        anchorX = childNode.label_anchor_points[0];
        anchorY = childNode.label_anchor_points[1];
      } else if (childNode.box) {
        anchorY = (childNode.box[0] + childNode.box[2]) / 2;
        anchorX = (childNode.box[1] + childNode.box[3]) / 2;
      }
      if (anchorX !== null && anchorY !== null) {
        childNode.labelPosition = {
          labelX: anchorX,
          labelY: anchorY,
          anchorX: anchorX,
          anchorY: anchorY,
          score: 0,
          isCustomPosition: false,
        };
      }
    }
  });

  // Client-side placement: measure labels and run algorithm in natural coords.
  const useClientPlacement = labelPlacementMethod === 1;
  if (useClientPlacement) {
    const labelInfos = [];
    // Create temporary hidden labels to measure their rendered sizes.
    node.childrenIds.forEach(childId => {
      const childNode = nodesData[childId];
      if (!childNode.labelPosition || !childNode.label) return;

      const tmpLabel = document.createElement('div');
      tmpLabel.className = 'label';
      tmpLabel.textContent = childNode.label;
      tmpLabel.style.position = 'absolute';
      tmpLabel.style.visibility = 'hidden';
      if (dynamicFontSize === 0) {
        tmpLabel.style.fontSize = `${scaledFontSize}px`;
      }
      labelsContainer.appendChild(tmpLabel);
      const tmpRect = tmpLabel.getBoundingClientRect();
      tmpLabel.remove();

      // Convert measured screen-space size to natural image coords.
      const natW = tmpRect.width / scaleX;
      const natH = tmpRect.height / scaleY;
      const pos = childNode.labelPosition;

      labelInfos.push({
        id: childId,
        anchorX: pos.anchorX,
        anchorY: pos.anchorY,
        w: natW,
        h: natH,
        isCustomPosition: pos.isCustomPosition || false,
        x: pos.labelX,
        y: pos.labelY,
      });
    });

    if (labelInfos.length > 0) {
      if (!node.hasComputedPhysics) {
        const t0 = performance.now();
        const obstacles = getUIObstaclesInNaturalCoords(offsetX, offsetY, scaleX, scaleY);
        
        // Target compact leader line distance in screen space (45px on mobile, 55px on desktop)
        const targetScreenDist = isMobileViewport() ? 45 : 55;
        const targetIdealDistNat = targetScreenDist / Math.max(0.1, avgScale);

        const physicsOptions = Object.assign(
            {},
            physicsParams,
            {
              ideal_distance_px: targetIdealDistNat,
              distance_multipliers: [1.0, 1.2, 1.4],
              obstacles: obstacles,
            }
        );

        clientPhysicsPlacement(
            labelInfos, naturalWidth, naturalHeight,
            node.content_cost_map || null, physicsOptions);

        const elapsed = performance.now() - t0;
        Logger.log(
            `Client-side physics_client ` +
            `placement took ${elapsed.toFixed(1)}ms`);

        // Write computed positions back to nodesData.
        for (const info of labelInfos) {
          const pos = nodesData[info.id].labelPosition;
          pos.labelX = info.x;
          pos.labelY = info.y;
          pos.labelWidth = info.w;
          pos.labelHeight = info.h;
          pos.placement_latency_ms = elapsed;
        }
        node.hasComputedPhysics = true;

        // Compute and log metrics.
        const metrics = computePlacementMetrics(
            labelInfos, naturalWidth, naturalHeight, 'physics_client');
        Logger.log('Label placement metrics:', JSON.stringify(metrics));
      }
    }
  }

  // Pre-calculate immersive multi-directional layout for all visible child labels
  let immersiveLayoutMap = null;
  if (isImmersiveMode && labelPlacementMethod !== 1) {
    const visibleChildrenForLayout = [];
    node.childrenIds.forEach(childId => {
      const childNode = nodesData[childId];
      if (!childNode || !childNode.labelPosition || !childNode.label) return;
      const isRabbitHole = childNode.nodeType === 'rabbit_hole' || (childNode.label && childNode.label.startsWith('🐇'));
      if (isRabbitHole) return;

      const pos = childNode.labelPosition;
      const anchorX = offsetX + pos.anchorX * scaleX;
      const anchorY = offsetY + pos.anchorY * scaleY;

      // Measure temporary label dimensions
      const tmpLabel = document.createElement('div');
      tmpLabel.className = 'label';
      tmpLabel.textContent = isImmersiveModeConfig ? stripRabbitEmoji(childNode.label) : childNode.label;
      tmpLabel.style.position = 'absolute';
      tmpLabel.style.visibility = 'hidden';
      if (dynamicFontSize === 0) {
        tmpLabel.style.fontSize = `${scaledFontSize}px`;
      }
      labelsContainer.appendChild(tmpLabel);
      const tmpRect = tmpLabel.getBoundingClientRect();
      tmpLabel.remove();

      visibleChildrenForLayout.push({
        id: childId,
        anchorX,
        anchorY,
        labelW: tmpRect.width || 100,
        labelH: tmpRect.height || 32,
      });
    });

    if (visibleChildrenForLayout.length > 0) {
      const viewportW = mainContainer ? mainContainer.clientWidth : window.innerWidth;
      const viewportH = mainContainer ? mainContainer.clientHeight : window.innerHeight;
      const isLandscape = window.innerWidth > window.innerHeight;
      const isMobile = isMobileViewport() || ('false' === 'true') ||
          Boolean(false);

      const renderedWidth = naturalWidth * scaleX;
      const renderedHeight = naturalHeight * scaleY;
      const PAD_X = isMobile ? 20 : 14;
      const PAD_Y = isMobile ? 18 : 14;

      // Dynamic Island / notch safe clearance in landscape (defaults to 30px on
      // mobile landscape)
      const cssLeftSafe = parseInt(
          getComputedStyle(document.documentElement)
              .getPropertyValue('--mobile-left-safe-area'),
          10);
      const cssRightSafe = parseInt(
          getComputedStyle(document.documentElement)
              .getPropertyValue('--mobile-right-safe-area'),
          10);
      const landscapeLeftSafe = (!isNaN(cssLeftSafe) && cssLeftSafe > 0) ?
          cssLeftSafe :
          (isLandscape && isMobile ? 30 : 0);
      const landscapeRightSafe = (!isNaN(cssRightSafe) && cssRightSafe > 0) ?
          cssRightSafe :
          (isLandscape && isMobile ? 30 : 0);

      // Full canvas bounds in labelsContainer coordinate space
      const canvasMinX = offsetX + PAD_X;
      const canvasMaxX = offsetX + renderedWidth - PAD_X;
      const canvasMinY = offsetY + PAD_Y;
      const canvasMaxY = offsetY + renderedHeight - PAD_Y;
      const canvasCenterX = offsetX + renderedWidth / 2;

      // On mobile portrait, keep labels at natural 16:9 canvas bounds while
      // ensuring they do not bleed off-screen.
      // On landscape, enforce clearance to skip the Dynamic Island and edge
      // notches.
      const minLeftBoundary = (isMobile && !isLandscape) ?
          Math.max(canvasMinX, PAD_X) :
          Math.max(canvasMinX, landscapeLeftSafe);
      const maxRightBoundary = (isMobile && !isLandscape) ?
          Math.min(canvasMaxX, viewportW - PAD_X) :
          Math.min(canvasMaxX, viewportW - landscapeRightSafe);
      const topClearance = getTopNavClearancePx();
      const bottomClearance = getBottomClearancePx();
      const topSafeBoundary = Math.max(canvasMinY, topClearance);
      const bottomSafeBoundary =
          Math.min(canvasMaxY, viewportH - bottomClearance);

      const lineLen = 40;
      const gap = 6;
      const totalDist = lineLen + gap;

      const getBox = (item, dirX, dirY, mult) => {
        const r = item.labelH / 2;
        const effDx = (totalDist + r) * Math.cos(Math.PI / 4) * mult;
        const effDy = (totalDist + r) * Math.sin(Math.PI / 4) * mult;
        let centerX = dirX > 0
          ? (item.anchorX + effDx + item.labelW / 2 - r)
          : (item.anchorX - effDx - item.labelW / 2 + r);
        let centerY = dirY > 0
          ? (item.anchorY + effDy)
          : (item.anchorY - effDy);

        const clampedCenterX = Math.max(
            minLeftBoundary + item.labelW / 2,
            Math.min(maxRightBoundary - item.labelW / 2, centerX));
        const clampedCenterY = Math.max(topSafeBoundary + item.labelH / 2, Math.min(bottomSafeBoundary - item.labelH / 2, centerY));

        const lineStartX = clampedCenterX + (dirX < 0 ? (item.labelW / 2) : (-item.labelW / 2));
        const lineStartY = clampedCenterY + (dirY < 0 ? (item.labelH / 2) : (-item.labelH / 2));

        return {
          left: clampedCenterX - item.labelW / 2,
          right: clampedCenterX + item.labelW / 2,
          top: clampedCenterY - item.labelH / 2,
          bottom: clampedCenterY + item.labelH / 2,
          centerX: clampedCenterX,
          centerY: clampedCenterY,
          lineStartX,
          lineStartY,
          rawCenterX: centerX,
          rawCenterY: centerY,
          anchorX: item.anchorX,
          anchorY: item.anchorY,
          dirX,
          dirY,
          mult,
        };
      };

      const linesCross = (p1, p2, p3, p4) => {
        const ccw = (a, b, c) => (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
        return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);
      };

      // Check if a line segment crosses an axis-aligned box
      const lineIntersectsBox = (p1, p2, box) => {
        const tl = {x: box.left, y: box.top};
        const tr = {x: box.right, y: box.top};
        const bl = {x: box.left, y: box.bottom};
        const br = {x: box.right, y: box.bottom};
        return linesCross(p1, p2, tl, tr) || linesCross(p1, p2, tr, br) ||
            linesCross(p1, p2, br, bl) || linesCross(p1, p2, bl, tl);
      };

      const candidateOptions = [
        {dirX: -1, dirY: -1, mult: 1.0},
        {dirX: 1, dirY: -1, mult: 1.0},
        {dirX: -1, dirY: 1, mult: 1.0},
        {dirX: 1, dirY: 1, mult: 1.0},
        {dirX: -1, dirY: -1, mult: 1.35},
        {dirX: 1, dirY: -1, mult: 1.35},
        {dirX: -1, dirY: 1, mult: 1.35},
        {dirX: 1, dirY: 1, mult: 1.35},
        {dirX: -1, dirY: -1, mult: 1.6},
        {dirX: 1, dirY: -1, mult: 1.6},
        {dirX: -1, dirY: 1, mult: 1.6},
        {dirX: 1, dirY: 1, mult: 1.6},
      ];

      const evalLayout = (boxes) => {
        let score = 0;
        for (let i = 0; i < boxes.length; i++) {
          const b = boxes[i];
          const item = visibleChildrenForLayout[i];

          // Heavy penalty if raw center is clipped outside canvas boundaries
          const rawLeft = b.rawCenterX - item.labelW / 2;
          const rawRight = b.rawCenterX + item.labelW / 2;
          const rawTop = b.rawCenterY - item.labelH / 2;
          const rawBottom = b.rawCenterY + item.labelH / 2;

          if (rawLeft < minLeftBoundary)
            score += (minLeftBoundary - rawLeft) * 1500;
          if (rawRight > maxRightBoundary)
            score += (rawRight - maxRightBoundary) * 1500;
          if (rawTop < topSafeBoundary) score += (topSafeBoundary - rawTop) * 1500;
          if (rawBottom > bottomSafeBoundary) score += (rawBottom - bottomSafeBoundary) * 1500;

          // Soft biases: prefer Up slightly, prefer compact lines
          if (b.dirY > 0) score += 8;
          if (b.mult === 1.35) score += 10;
          if (b.mult === 1.6) score += 20;

          // Natural canvas bias: outer items slightly prefer pointing away from
          // outer image margins
          if (item.anchorX > canvasCenterX + renderedWidth * 0.35 && b.dirX < 0)
            score += 10;
          if (item.anchorX < canvasCenterX - renderedWidth * 0.35 && b.dirX > 0)
            score += 10;

          // On mobile, if an anchor is currently visible in the screen
          // viewport, lightly prefer keeping the label on-screen
          if (isMobile && item.anchorX >= PAD_X &&
              item.anchorX <= viewportW - PAD_X) {
            if (rawLeft < PAD_X || rawRight > viewportW - PAD_X) {
              score += 25;  // Gentle nudge; never overrides collision or line
                            // crossing
            }
          }
        }

        // Pairwise overlap, leader line crossing, line-label intersection, and
        // anchor-dot collisions
        const DOT_RADIUS_BUFFER = 16;
        for (let i = 0; i < boxes.length; i++) {
          const b1 = boxes[i];
          const p1 = {x: b1.lineStartX, y: b1.lineStartY};
          const p2 = {x: b1.anchorX, y: b1.anchorY};

          // Check if label b1 overlaps ANY anchor dot (other than its own
          // anchor point)
          for (let k = 0; k < visibleChildrenForLayout.length; k++) {
            if (k !== i) {
              const dotK = visibleChildrenForLayout[k];
              if (dotK.anchorX >= b1.left - DOT_RADIUS_BUFFER &&
                  dotK.anchorX <= b1.right + DOT_RADIUS_BUFFER &&
                  dotK.anchorY >= b1.top - DOT_RADIUS_BUFFER &&
                  dotK.anchorY <= b1.bottom + DOT_RADIUS_BUFFER) {
                score += 50000;
              }
            }
          }

          for (let j = i + 1; j < boxes.length; j++) {
            const b2 = boxes[j];
            const ox = Math.min(b1.right, b2.right) - Math.max(b1.left, b2.left) + 8;
            const oy = Math.min(b1.bottom, b2.bottom) - Math.max(b1.top, b2.top) + 8;
            if (ox > 0 && oy > 0) {
              score += ox * oy * 8000;
            }

            const p3 = { x: b2.lineStartX, y: b2.lineStartY };
            const p4 = { x: b2.anchorX, y: b2.anchorY };
            if (linesCross(p1, p2, p3, p4)) {
              score += 100000;
            }

            // Check if leader line 1 cuts through label box 2, or line 2 cuts
            // through label box 1
            if (lineIntersectsBox(p1, p2, b2)) {
              score += 50000;
            }
            if (lineIntersectsBox(p3, p4, b1)) {
              score += 50000;
            }
          }
        }
        return score;
      };

      let bestScore = Infinity;
      let bestBoxes = null;

      // Exhaustive search for N <= 5 (optimal in < 1ms), local iterative search
      // with restarts for larger N
      if (visibleChildrenForLayout.length <= 5) {
        // Try compact options first, then full options if collisions exist
        const primaryOpts = candidateOptions.slice(
            0, 4);  // 4 diagonal directions with mult=1.0
        const fullOpts = candidateOptions;

        const search = (idx, currentBoxes, optsToUse) => {
          if (idx === visibleChildrenForLayout.length) {
            const s = evalLayout(currentBoxes);
            if (s < bestScore) {
              bestScore = s;
              bestBoxes = currentBoxes.slice();
            }
            return;
          }
          for (const opt of optsToUse) {
            const b = getBox(visibleChildrenForLayout[idx], opt.dirX, opt.dirY, opt.mult);
            currentBoxes.push(b);
            search(idx + 1, currentBoxes, optsToUse);
            currentBoxes.pop();
          }
        };

        search(0, [], primaryOpts);
        // If compact placement produced collisions (> 1000 score), re-search
        // with extended multipliers
        if (bestScore > 1000) {
          const extendedOpts = visibleChildrenForLayout.length <= 4 ?
              fullOpts :
              candidateOptions.slice(0, 8);
          search(0, [], extendedOpts);
        }
      } else {
        // Coordinate descent with multi-start initial configurations
        for (let restart = 0; restart < 2; restart++) {
          let currentBoxes = visibleChildrenForLayout.map((item, idx) => {
            const parity = (restart === 0) ? (idx % 2 === 0) : (idx % 2 !== 0);
            const dirX = item.anchorX > canvasCenterX ? (parity ? 1 : -1) :
                                                        (parity ? -1 : 1);
            return getBox(item, dirX, -1, 1.0);
          });
          let currentScore = evalLayout(currentBoxes);
          if (currentScore < bestScore) {
            bestScore = currentScore;
            bestBoxes = currentBoxes.slice();
          }

          for (let iter = 0; iter < 5; iter++) {
            for (let i = 0; i < visibleChildrenForLayout.length; i++) {
              for (const opt of candidateOptions) {
                const newBoxes = currentBoxes.slice();
                newBoxes[i] = getBox(
                    visibleChildrenForLayout[i], opt.dirX, opt.dirY, opt.mult);
                const s = evalLayout(newBoxes);
                if (s < currentScore) {
                  currentScore = s;
                  currentBoxes = newBoxes;
                  if (s < bestScore) {
                    bestScore = s;
                    bestBoxes = newBoxes.slice();
                  }
                }
              }
            }
          }
        }
      }

      immersiveLayoutMap = {};
      visibleChildrenForLayout.forEach((item, idx) => {
        const b = bestBoxes[idx];
        immersiveLayoutMap[item.id] = {
          finalLabelX: b.centerX,
          finalLabelY: b.centerY,
          dirX: b.dirX,
          dirY: b.dirY,
        };
      });
    }
  }

  const renderedAnchors = [];

  node.childrenIds.forEach(childId => {
    const childNode = nodesData[childId];
    let lineHit = null;
    let dotHit = null;
    if (!childNode || !childNode.labelPosition || !childNode.label) return;

    const pos = childNode.labelPosition;
    const isRabbitHole = childNode.nodeType === 'rabbit_hole' || (childNode.label && childNode.label.startsWith('🐇'));
    if (isRabbitHole) return;
    const isTerminal = !childNode.childrenIds || childNode.childrenIds.length === 0;

    const scaledStrokeWidth = Math.max(1, 2 * avgScale);

    // Anchor stays at its exact position on the image canvas
    const anchorX = offsetX + pos.anchorX * scaleX;
    const anchorY = offsetY + pos.anchorY * scaleY;

    const isOverlapping =
        renderedAnchors.some(a => a.x === pos.anchorX && a.y === pos.anchorY);

    let finalAnchorX = anchorX;
    let finalAnchorY = anchorY;

    if (isImmersiveModeConfig && isRabbitHole && isOverlapping) {
      finalAnchorX += 40;
    }

    renderedAnchors.push({x: pos.anchorX, y: pos.anchorY});

    // Create label element FIRST so we can measure its actual rendered size
    const label = document.createElement('div');
    label.id = `label-${childId}`;
    label.className = `label${isTerminal ? ' terminal-node' : ''}`;
    label.textContent = isImmersiveModeConfig ?
        stripRabbitEmoji(childNode.label) :
        childNode.label;
    if (dynamicFontSize === 0) {
      label.style.fontSize = `${scaledFontSize}px`;
    }
    label.style.userSelect = 'none';
    label.style.webkitUserSelect = 'none';
    labelsContainer.appendChild(label);

    const labelRect = label.getBoundingClientRect();
    const labelW = labelRect.width || 80;
    const labelH = labelRect.height || 32;

    let finalLabelX;
    let finalLabelY;

    if (isImmersiveMode && labelPlacementMethod !== 1) {
      if (immersiveLayoutMap && immersiveLayoutMap[childId]) {
        finalLabelX = immersiveLayoutMap[childId].finalLabelX;
        finalLabelY = immersiveLayoutMap[childId].finalLabelY;
      } else {
        const lineLen = 40;
        const gap = 6;
        const angleRad = Math.PI / 4;
        const r = labelH / 2;
        const totalDist = lineLen + gap;
        const dx = (totalDist + r) * Math.cos(angleRad);
        const dy = (totalDist + r) * Math.sin(angleRad);
        const topSafeBoundary = getTopNavClearancePx();
        const bottomClearance = getBottomClearancePx();
        const vH =
            mainContainer ? mainContainer.clientHeight : window.innerHeight;
        const bottomSafeBoundary = Math.min(
            offsetY + renderedHeight - (isMobile ? 18 : 14),
            vH - bottomClearance);
        let isDownward = (finalAnchorY - dy - labelH / 2 < topSafeBoundary);
        if (isDownward &&
            (finalAnchorY + dy + labelH / 2 > bottomSafeBoundary)) {
          isDownward = false;
        }
        finalLabelX = finalAnchorX + dx + labelW / 2 - r;
        finalLabelY = isDownward ? (finalAnchorY + dy) : (finalAnchorY - dy);
        finalLabelY = Math.max(
            topSafeBoundary + labelH / 2,
            Math.min(bottomSafeBoundary - labelH / 2, finalLabelY));
      }
    } else {
      // Measure actual rendered label size and convert to natural image coords
      const labelW_natural = labelW / scaleX;
      const labelH_natural = labelH / scaleY;
      const shouldClamp = !pos.isCustomPosition;
      const NAT_PADDING = naturalWidth * 0.02;

      const natMinX = labelW_natural / 2 + NAT_PADDING;
      const natMaxX = naturalWidth - labelW_natural / 2 - NAT_PADDING;
      const natMinY = labelH_natural / 2 + NAT_PADDING;
      const natMaxY = naturalHeight - labelH_natural / 2 - NAT_PADDING;

      const clampedNatX = shouldClamp ?
          Math.max(natMinX, Math.min(natMaxX, pos.labelX)) :
          pos.labelX;
      const clampedNatY = shouldClamp ?
          Math.max(natMinY, Math.min(natMaxY, pos.labelY)) :
          pos.labelY;

      // Convert clamped natural coords back to screen space
      finalLabelX = offsetX + clampedNatX * scaleX;
      finalLabelY = offsetY + clampedNatY * scaleY;
    }

    // Safety resolve against specific UI elements (toolbar left/right, text panel, minimap)
    const cRect = mainContainer ? mainContainer.getBoundingClientRect() : {left: 0, top: 0};
    const tLeft = document.querySelector('#lightbox-toolbar .toolbar-left');
    const tRight = document.querySelector('#lightbox-toolbar .toolbar-right');
    const textPanelEl = document.getElementById('text-panel');
    const minimapEl = document.getElementById('minimap-container') || document.getElementById('immersive-minimap-container');

    const activeObstacles = [tLeft, tRight];
    if (textPanelEl && textPanelEl.offsetParent !== null && !textPanelEl.classList.contains('hidden')) {
      if (textPanelEl.classList.contains('minimized')) {
        const r = textPanelEl.getBoundingClientRect();
        activeObstacles.push({
          offsetParent: textPanelEl.offsetParent,
          getBoundingClientRect: () => ({
            left: r.left,
            right: r.right,
            top: r.top,
            bottom: r.top + 54,
            width: r.width,
            height: 54,
          }),
        });
      } else {
        activeObstacles.push(textPanelEl);
      }
    }
    if (minimapEl && minimapEl.offsetParent !== null) {
      activeObstacles.push(minimapEl);
    }

    for (const uiEl of activeObstacles) {
      if (uiEl && uiEl.offsetParent !== null) {
        const ur = uiEl.getBoundingClientRect();
        const obsX = ur.left - cRect.left + ur.width / 2;
        const obsY = ur.top - cRect.top + ur.height / 2;
        const obsDx = finalLabelX - obsX;
        const obsDy = finalLabelY - obsY;
        const overlapX = (labelW + ur.width) / 2 + 8 - Math.abs(obsDx);
        const overlapY = (labelH + ur.height) / 2 + 8 - Math.abs(obsDy);
        if (overlapX > 0 && overlapY > 0) {
          if (overlapX < overlapY) {
            finalLabelX += obsDx >= 0 ? overlapX : -overlapX;
          } else {
            finalLabelY += obsDy >= 0 ? overlapY : -overlapY;
          }
        }
      }
    }

    label.style.left = `${finalLabelX}px`;
    label.style.top = `${finalLabelY}px`;
    label.style.transform = 'translate(-50%, -50%)';

    const dx = finalAnchorX - finalLabelX;
    const dy = finalAnchorY - finalLabelY;
    label.style.transformOrigin = `calc(50% + ${dx}px) calc(50% + ${dy}px)`;

    // Calculate line start point at exact label perimeter
    let lineStartX = finalLabelX;
    let lineStartY = finalLabelY;
    if (dx !== 0 || dy !== 0) {
      const halfW = labelW / 2;
      const halfH = labelH / 2;
      let tX = Infinity, tY = Infinity;
      if (dx !== 0) tX = Math.abs(halfW / dx);
      if (dy !== 0) tY = Math.abs(halfH / dy);
      const t = Math.min(tX, tY);
      lineStartX = finalLabelX + dx * t;
      lineStartY = finalLabelY + dy * t;
    }

    // Create SVG line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('id', `line-${childId}`);
    line.setAttribute(
        'class', `label-line${isTerminal ? ' terminal-node' : ''}`);
    line.setAttribute('x1', lineStartX);
    line.setAttribute('y1', lineStartY);

    let lineEndX = finalAnchorX;
    let lineEndY = finalAnchorY;
    if (isImmersiveModeConfig) {
      const lineDx = finalAnchorX - lineStartX;
      const lineDy = finalAnchorY - lineStartY;
      const dist = Math.sqrt(lineDx * lineDx + lineDy * lineDy);
      const stopRadius = 16;
      if (dist > stopRadius) {
        lineEndX = finalAnchorX - (lineDx / dist) * stopRadius;
        lineEndY = finalAnchorY - (lineDy / dist) * stopRadius;
      }
    }
    line.setAttribute('x2', lineEndX);
    line.setAttribute('y2', lineEndY);
    line.style.strokeWidth = `${scaledStrokeWidth}px`;
    line.setAttribute('stroke-width', scaledStrokeWidth);
    line.style.transformOrigin = `${finalAnchorX}px ${finalAnchorY}px`;
    if (isImmersiveModeConfig) {
      line.setAttribute('stroke', '#ffffff');
      line.setAttribute('stroke-dasharray', '2,2');
      line.setAttribute('stroke-linecap', 'butt');
    } else {
      line.setAttribute('stroke', '#ffffff');
    }
    labelsSvg.appendChild(line);

    let dot;
    if (isImmersiveModeConfig && !isTerminal) {
      dot = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      dot.setAttribute('id', `dot-${childId}`);
      dot.setAttribute('class', 'anchor-dot-group');
      dot.setAttribute('data-cx', finalAnchorX);
      dot.setAttribute('data-cy', finalAnchorY);
      dot.setAttribute('transform', `translate(${finalAnchorX}, ${finalAnchorY})`);

      const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      outerCircle.setAttribute('class', 'anchor-dot-outer');
      outerCircle.setAttribute('cx', 0);
      outerCircle.setAttribute('cy', 0);
      outerCircle.setAttribute('r', 12);
      outerCircle.setAttribute('fill', 'none');
      outerCircle.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
      outerCircle.setAttribute('stroke-width', 4);
      dot.appendChild(outerCircle);

      const innerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      innerCircle.setAttribute('class', 'anchor-dot-inner');
      innerCircle.setAttribute('cx', 0);
      innerCircle.setAttribute('cy', 0);
      innerCircle.setAttribute('r', 8);
      innerCircle.setAttribute('fill', 'none');
      innerCircle.setAttribute('stroke', '#ffffff');
      innerCircle.setAttribute('stroke-width', 4);
      dot.appendChild(innerCircle);
    } else {
      dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('id', `dot-${childId}`);
      dot.setAttribute(
          'class',
          `anchor-dot${isRabbitHole ? ' rabbit-hole' : ''}${isTerminal ? ' terminal-node' : ''}`);
      dot.setAttribute('cx', finalAnchorX);
      dot.setAttribute('cy', finalAnchorY);
      let dotRadius;
      if (isImmersiveModeConfig) {
        const strokeWidth = isImmersiveMode ? 6 : 5;
        dotRadius = isImmersiveMode ? 9 : 7.5;
        dot.setAttribute('r', dotRadius);
        dot.style.strokeWidth = `${strokeWidth}px`;
        dot.setAttribute('stroke-width', strokeWidth);
        dot.setAttribute('fill', isRabbitHole ? '#8ab4f8' : '#ffffff');
        dot.setAttribute('stroke', isRabbitHole ? 'rgba(138, 180, 248, 0.6)' : 'rgba(255, 255, 255, 0.6)');
      } else {
        dotRadius = Math.max(3, 4 * avgScale);
        dot.setAttribute('r', dotRadius);
        dot.setAttribute('fill', '#ffffff');
      }
    }

    if (childNode.label) {
      const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = isImmersiveModeConfig ?
          stripRabbitEmoji(childNode.label) :
          childNode.label;
      dot.appendChild(titleEl);
    }
    labelsSvg.appendChild(dot);

    if ('0' === '1' || isImmersiveModeConfig) {
      lineHit =
          document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineHit.setAttribute('id', `line-hit-${childId}`);
      lineHit.setAttribute('class', 'label-line-hit-target');
      lineHit.setAttribute('x1', lineStartX);
      lineHit.setAttribute('y1', lineStartY);
      lineHit.setAttribute('x2', finalAnchorX);
      lineHit.setAttribute('y2', finalAnchorY);
      lineHit.style.strokeWidth = `${Math.max(20, 20 * avgScale)}px`;
      lineHit.setAttribute('fill', 'none');
      lineHit.setAttribute('stroke', 'none');
      labelsSvg.appendChild(lineHit);

      dotHit =
          document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dotHit.setAttribute('id', `dot-hit-${childId}`);
      dotHit.setAttribute('class', 'anchor-dot-hit-target');
      dotHit.setAttribute('cx', finalAnchorX);
      dotHit.setAttribute('cy', finalAnchorY);
      let hitRadius;
      if (isImmersiveModeConfig) {
        hitRadius = 22;
      } else {
        hitRadius = Math.max(15, 20 * avgScale);
      }
      dotHit.setAttribute('r', hitRadius);
      dotHit.setAttribute('fill', 'none');
      dotHit.setAttribute('stroke', 'none');
      if (childNode.label) {
        const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.textContent = isImmersiveModeConfig ?
            stripRabbitEmoji(childNode.label) :
            childNode.label;
        dotHit.appendChild(titleEl);
      }
      labelsSvg.appendChild(dotHit);
    }

    if ('1' === '1') {
      label.style.cursor = 'pointer';
      let isDragging = false;
      let startX, startY, initialLeft, initialTop;

      const startDrag = (clientX, clientY) => {
        if (labelDragTimeoutId) {
          clearTimeout(labelDragTimeoutId);
          labelDragTimeoutId = null;
        }
        isDragging = true;
        document.body.classList.add('dragging-active');
        label.dataset.wasDragged = 'false';
        startX = clientX;
        startY = clientY;
        initialLeft = parseFloat(label.style.left);
        initialTop = parseFloat(label.style.top);
      };

      const moveDrag = (clientX, clientY) => {
        if (!isDragging) return;

        const dx = clientX - startX;
        const dy = clientY - startY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
          label.dataset.wasDragged = 'true';
          globalLabelDraggingActive = true;
          label.style.cursor = 'grabbing';
        }

        const newX = initialLeft + dx;
        const newY = initialTop + dy;
        label.style.left = `${newX}px`;
        label.style.top = `${newY}px`;

        const labelRect = label.getBoundingClientRect();
        const labelW = labelRect.width;
        const labelH = labelRect.height;
        const lineDx = finalAnchorX - newX;
        const lineDy = finalAnchorY - newY;

        let lineStartX = newX;
        let lineStartY = newY;
        if (lineDx !== 0 || lineDy !== 0) {
          const halfW = labelW / 2;
          const halfH = labelH / 2;
          let tX = Infinity, tY = Infinity;
          if (lineDx !== 0) tX = Math.abs(halfW / lineDx);
          if (lineDy !== 0) tY = Math.abs(halfH / lineDy);
          const t = Math.min(tX, tY);
          lineStartX = newX + lineDx * t;
          lineStartY = newY + lineDy * t;
        }
        line.setAttribute('x1', lineStartX);
        line.setAttribute('y1', lineStartY);
        line.setAttribute('x2', finalAnchorX);
        line.setAttribute('y2', finalAnchorY);
        if (lineHit) {
          lineHit.setAttribute('x1', lineStartX);
          lineHit.setAttribute('y1', lineStartY);
          lineHit.setAttribute('x2', finalAnchorX);
          lineHit.setAttribute('y2', finalAnchorY);
        }
        dot.setAttribute('cx', finalAnchorX);
        dot.setAttribute('cy', finalAnchorY);
      };

      const endDrag = () => {
        if (isDragging) {
          isDragging = false;
          document.body.classList.remove('dragging-active');
          label.style.cursor = 'pointer';

          if (label.dataset.wasDragged === 'true') {
            // Save new position back to nodesData so it persists after re-rendering
            const currentLeft = parseFloat(label.style.left);
            const currentTop = parseFloat(label.style.top);
            pos.labelX = (currentLeft - offsetX) / scaleX;
            pos.labelY = (currentTop - offsetY) / scaleY;

            // Mark this coordinate as custom user relocated
            pos.isCustomPosition = true;

            // Re-render SVG line connections nicely
            // (skips clamping since isCustomPosition is active)
            renderLabels();
          }

          labelDragTimeoutId = setTimeout(() => {
            globalLabelDraggingActive = false;
            labelDragTimeoutId = null;
          }, ASYNC_DELAY_MS);
        }
      };

      // Mouse Events
      label.addEventListener('mousedown', (e) => {
        startDrag(e.clientX, e.clientY);
        e.stopPropagation();
        e.preventDefault();
      });

      window.addEventListener('mousemove', (e) => {
        moveDrag(e.clientX, e.clientY);
      });

      window.addEventListener('mouseup', () => {
        endDrag();
      });

      // Touch Events
      label.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          startDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
        e.stopPropagation();
      });

      window.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          moveDrag(e.touches[0].clientX, e.touches[0].clientY);
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }, { passive: false });

      window.addEventListener('touchend', () => {
        endDrag();
      });
    }

    // Shared event handlers for label, line and dot
    const handleMouseEnter = () => {
      if (isAnimating || isDragging) return;

      Logger.log('Label mouseenter:', childId);

      // Clear any stuck hover states on other elements
      if (hoveringChildId && hoveringChildId !== childId) {
        if (hoveringChildId !== pinnedChildId) {
          highlightLabel(hoveringChildId, false);
        }
      }

      highlightLabel(childId, true);
      hoveringChildId = childId;
      showHoverOverlay(childId);
    };

    const handleMouseLeave = (e) => {
      if (suppressMouseLeave) return;

      const labelEl = document.getElementById(`label-${childId}`);
      const lineEl = document.getElementById(`line-${childId}`);
      const dotEl = document.getElementById(`dot-${childId}`);
      const lineHitEl = document.getElementById(`line-hit-${childId}`);
      const dotHitEl = document.getElementById(`dot-hit-${childId}`);

      const related = e.relatedTarget;
      if (related && (
          related === labelEl || (labelEl && labelEl.contains(related)) ||
          related === lineEl ||
          related === dotEl ||
          related === lineHitEl ||
          related === dotHitEl
      )) {
        return;
      }

      // Always clear the highlight of the element we left, if not pinned
      if (childId !== pinnedChildId) {
        highlightLabel(childId, false);
      }

      if (hoveringChildId === childId) {
        if (pinnedChildId) {
          showHoverOverlay(pinnedChildId);
        } else {
          hideHoverOverlay();
        }
        hoveringChildId = null;
      }
    };

    // Shared click handler for label and extended targets
    const handleTargetClick = (e) => {
      e.stopPropagation();
      if (label.dataset.wasDragged === 'true') {
        label.dataset.wasDragged = 'false';
        return;
      }

      if (isImmersiveModeConfig && !isImmersiveMode) {
        pendingZoomChildId = childId;
        return;
      }

      if (isMobileApp && isImmersiveMode) {
        handleMobileNodeTap(childId, childNode);
      } else {
        if (childNode.url) {
          window.open(childNode.url, '_blank');
        } else {
          zoomToChild(childId);
        }
      }
    };

    // Label hover and click events
    label.addEventListener('mouseenter', handleMouseEnter);
    label.addEventListener('mouseleave', handleMouseLeave);
    label.addEventListener('click', handleTargetClick);

    if (isImmersiveModeConfig || '0' === '1') {
      dot.addEventListener('mouseenter', handleMouseEnter);
      dot.addEventListener('mouseleave', handleMouseLeave);
      dot.addEventListener('click', handleTargetClick);
    }

    if ('0' === '1' || isImmersiveModeConfig) {
      // Make line hoverable and clickable
      line.style.cursor = 'pointer';
      line.addEventListener('mouseenter', handleMouseEnter);
      line.addEventListener('mouseleave', handleMouseLeave);
      line.addEventListener('click', handleTargetClick);

      if (lineHit) {
        lineHit.addEventListener('mouseenter', handleMouseEnter);
        lineHit.addEventListener('mouseleave', handleMouseLeave);
        lineHit.addEventListener('click', handleTargetClick);
      }

      if (dotHit) {
        dotHit.addEventListener('mouseenter', handleMouseEnter);
        dotHit.addEventListener('mouseleave', handleMouseLeave);
        dotHit.addEventListener('click', handleTargetClick);
      }
    }
  });

  if (savedHoveringChildId) {
    hoveringChildId = savedHoveringChildId;
    highlightLabel(savedHoveringChildId, true);
  }

  // Compute and log metrics for server-side methods too.
  if (!useClientPlacement) {
    const methodNames = {0: 'greedy_server'};
    const serverLabels = [];
    node.childrenIds.forEach(childId => {
      const childNode = nodesData[childId];
      if (!childNode.labelPosition || !childNode.label) return;
      const pos = childNode.labelPosition;
      const labelEl = document.getElementById(`label-${childId}`);
      if (!labelEl) return;
      const lRect = labelEl.getBoundingClientRect();
      serverLabels.push({
        id: childId,
        x: pos.labelX,
        y: pos.labelY,
        w: lRect.width / scaleX,
        h: lRect.height / scaleY,
        anchorX: pos.anchorX,
        anchorY: pos.anchorY,
      });
    });
    if (serverLabels.length > 0) {
      const metrics = computePlacementMetrics(
          serverLabels, naturalWidth, naturalHeight,
          methodNames[labelPlacementMethod] || 'server');
      Logger.log('Label placement metrics:', JSON.stringify(metrics));
    }
  }

  if (pinnedChildId) {
    const pinnedNode = nodesData[pinnedChildId];
    if (pinnedNode && pinnedNode.childrenIds.length === 0) {
      if (isImmersiveModeConfig && !isMobileViewport()) {
        repositionFloatingPanel(pinnedChildId);
        hideFloatingNodeElements(pinnedChildId);
      }
    }
  }
  checkDotsOverlapWithTextPanel();
}

// core function : render the specified node
/**
 * Renders node.
 * @param {string} nodeId
 */
function renderNode(nodeId) {
  const isLeafNode = nodesData[nodeId] && (!nodesData[nodeId].childrenIds || nodesData[nodeId].childrenIds.length === 0);
  if (isLeafNode) {
    userCollapsedTextPanel = false;
    minimizeTextPanel(false, false);
  } else if (userCollapsedTextPanel) {
    minimizeTextPanel(true, false);
  } else {
    minimizeTextPanel(false, false);
  }

  const tourBtn = document.getElementById('start-tour-btn');
  if (tourBtn) {
    const isRoot = String(nodeId) === String(rootId);
    const isPlaying = window.__deepZoomTour__ && window.__deepZoomTour__.isPlaying;
    const hasTour = window.__deepZoomTour__ && window.__deepZoomTour__.hasTour;
    if (hasTour && (isRoot || isPlaying)) {
      tourBtn.style.display = '';
    } else {
      tourBtn.style.display = 'none';
    }
  }

  // Stop the current hover status
  hoveringChildId = null;
  pinnedChildId = null;
  restoreTextPanel();
  currentNodeId = nodeId;
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({type: 'nodeChanged', node_id: nodeId}, '*');
    }
  } catch (e) {}
  if (isImmersiveModeConfig) {
    if (nodeId === rootId) {
      document.body.classList.add('immersive-root-node');
    } else {
      document.body.classList.remove('immersive-root-node');
    }
  }

  // Check adjacency maps and Update Navigation Edge Arrows and overlays
  updateNavigationControls();

  const node = nodesData[nodeId];

  urlTooltip.style.display = 'none';
  hideHoverOverlay();
  // 1. set the current visible image
  const newSrc = node.imageSrc || '';
  const srcChanged = (mainImage.getAttribute('src') !== newSrc);
  if (srcChanged) {
    mainImage.src = newSrc;
  }
  mainImage.style.cursor = '';

  // 2. Clean up old mask canvases (force immediate GPU texture release on
  // WebKit/iOS) and labels
  maskContainer.querySelectorAll('canvas').forEach(canvas => {
    canvas.width = 0;
    canvas.height = 0;
  });
  maskContainer.innerHTML = '';
  labelsContainer.querySelectorAll('.label').forEach(el => el.remove());
  labelsSvg.innerHTML = '';

  // 3. Render the text panel with markdown content
  updateTextPanel(node.text, nodeId);

  const hasNodeText = !!(node.text && node.text.trim().length > 0);
  if (isImmersiveMode) {
    if (hasNodeText) {
      textPanel.style.display = '';
    } else {
      textPanel.style.display = 'none';
      textPanel.style.opacity = '0';
      textPanel.style.pointerEvents = 'none';
      textPanel.innerHTML = '';
    }

    updateImmersiveHeader();

  } else {
    const isVisibleOnZoomOnly = '2' === '1';
    if (hasNodeText) {
      if (isVisibleOnZoomOnly && nodeId === rootId) {
        textPanel.style.display = 'none';
        textPanel.style.opacity = '0';
        textPanel.style.pointerEvents = 'none';
        textPanel.innerHTML = '';
      } else {
        textPanel.style.display = '';
      }
    } else {
      textPanel.style.display = 'none';
      textPanel.style.opacity = '0';
      textPanel.style.pointerEvents = 'none';
      textPanel.innerHTML = '';
    }
  }

  // 3. Pre-load the mask to the Canvas for all the child nodes.
  const handleImageLoad = async function() {
    const currentNaturalWidth = mainImage.naturalWidth;
    const currentNaturalHeight = mainImage.naturalHeight;

    const maskScale = Math.min(
        1,
        MAX_MASK_CANVAS_DIM /
            Math.max(currentNaturalWidth, currentNaturalHeight));
    const targetCanvasWidth = Math.round(currentNaturalWidth * maskScale);
    const targetCanvasHeight = Math.round(currentNaturalHeight * maskScale);

    const maskPromises = node.childrenIds.map(childId => {
      const childNode = nodesData[childId];
      if (childNode.maskSrc && childNode.box) {
        return new Promise(resolve => {
          const canvas = document.createElement('canvas');
          canvas.id = `mask-canvas-${childId}`;
          canvas.width = targetCanvasWidth;
          canvas.height = targetCanvasHeight;
          canvas.dataset.scale = String(maskScale);
          const ctx = canvas.getContext('2d', {willReadFrequently: true});

          // Check if we already have the mask preloaded and pinned in memory
          const cachedImg = activePreloadedImages.find(img => img.src.endsWith(childNode.maskSrc));
          if (cachedImg && cachedImg.complete && cachedImg.naturalWidth !== 0) {
            ctx.drawImage(
                cachedImg, 0, 0, targetCanvasWidth, targetCanvasHeight);
            canvas.dataset.loaded = '1';
            maskContainer.appendChild(canvas);
            resolve();
          } else {
            // Fallback load if not pinned in memory
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, 0, 0, targetCanvasWidth, targetCanvasHeight);
              canvas.dataset.loaded = '1';
              resolve();
            };
            img.onerror = (e) => {
              console.error("[MASK IMAGE LOAD ERROR] Failed to load mask:", childNode.maskSrc, e);
              resolve();
            };
            
            let base = window.location.origin;
            try {
              if (window.parent && window.parent.location) {
                base = window.parent.location.origin;
              }
            } catch (e) {}

            let absoluteSrc = childNode.maskSrc;
            if (childNode.maskSrc.startsWith('.')) {
              absoluteSrc = new URL(childNode.maskSrc.substring(1), base).href;
            } else {
              absoluteSrc = new URL(childNode.maskSrc, base).href;
            }

            img.src = absoluteSrc;
            maskContainer.appendChild(canvas);
          }
        });
      }
      return Promise.resolve();
    });

    await Promise.all(maskPromises);

    // Dynamic Dot Correction (Immersive Mode Only)
    if (isImmersiveModeConfig) {
      node.childrenIds.forEach(childId => {
        const childNode = nodesData[childId];
        if (!childNode || !childNode.labelPosition || !childNode.maskSrc) return;
        
        const pos = childNode.labelPosition;
        if (pos.isAnchorCorrected) return;
        
        const canvas = document.getElementById(`mask-canvas-${childId}`);
        if (!canvas || canvas.dataset.loaded !== '1') return;

        const ctx = canvas.getContext('2d');
        const scaleX = canvas.width / currentNaturalWidth;
        const scaleY = canvas.height / currentNaturalHeight;
        const ax = Math.round(pos.anchorX * scaleX);
        const ay = Math.round(pos.anchorY * scaleY);

        try {
          // Verify if the current anchor lands on a mask pixel (white)
          const pixel = ctx.getImageData(ax, ay, 1, 1).data;
          if (isWhitePixel(pixel[0], pixel[1], pixel[2])) {
            pos.isAnchorCorrected = true;
            return; // Anchor is already inside the mask!
          }

          // Snap to the closest non-transparent pixel in the mask
          const nearest = findNearestMaskPixel(canvas, ax, ay);
          if (nearest) {
            const origX = nearest.x / scaleX;
            const origY = nearest.y / scaleY;
            Logger.log(
                `🎯 Snapped dot for "${childNode.label}" to mask boundary: (${
                    pos.anchorX}, ${pos.anchorY}) -> (${origX}, ${origY})`);
            pos.anchorX = origX;
            pos.anchorY = origY;

            // Align the label placement lines to the new snapped position
            pos.labelX = origX;
            pos.labelY = origY;

            // Also update the dot in the minimap if it exists!
            const miniMapDot = document.querySelector(`.mini-map-dot[data-node-id="${childId}"]`);
            if (miniMapDot) {
              miniMapDot.style.left = `${(origX / currentNaturalWidth) * 100}%`;
              miniMapDot.style.top = `${(origY / currentNaturalHeight) * 100}%`;
            }
          }
          pos.isAnchorCorrected = true;
        } catch (e) {
          Logger.warn('Mask anchor pixel extraction skipped:', e);
          pos.isAnchorCorrected = true;
        }
      });
    }

    // Hide floating loading indicator once initial node assets are ready
    const loader = document.getElementById('lightbox-loading-indicator');
    if (loader) {
      loader.classList.remove('visible');
    }

    // Restore UI elements opacity and pointer events
    if (!isAnimating) {
      labelsContainer.style.opacity = '';
      labelsContainer.style.pointerEvents = '';
      labelsSvg.style.opacity = '';
      labelsSvg.style.pointerEvents = '';
      if (node && node.text && node.text.trim().length > 0) {
        textPanel.style.opacity = '';
        textPanel.style.pointerEvents = '';
      } else {
        textPanel.style.display = 'none';
        textPanel.style.opacity = '0';
        textPanel.style.pointerEvents = 'none';
        textPanel.innerHTML = '';
      }
    }

    showOnboardingTooltip();

    // 1. Show mainImage instantly underneath (no transition) to prevent brightness dip
    mainImage.style.transition = 'none';
    mainImage.style.opacity = '';  // Reverts to CSS (1)

    // 2. Clean up activeTempImage seamlessly without double-exposure cross-fade
    if (activeTempImage) {
      activeTempImage.remove();
      activeTempImage = null;
    }

    try {
      // Render labels after image and masks are buffered
      if (isImmersiveMode) {
        resetImmersiveViewport();
      } else {
        renderLabels();
      }

      if (!hasPlayedInitialWash && '0' === '1') {
        showWashAnimation();
        hasPlayedInitialWash = true;
      }
    } catch (e) {
      Logger.error('[RENDER LABELS ERROR]', e);
    } finally {
      // Fade in the widget content only after everything is positioned correctly!
      document.body.classList.add('widget-content-loaded');

      // Unlock interactions once loading is fully completed
      if (!isAnimating) {
        startNudgeTimer();
        executePendingZoom();
      }
    }
  };

  let isHandled = false;
  const triggerImageLoad = () => {
    if (isHandled) return;
    isHandled = true;
    handleImageLoad();
  };

  const decodeAndTrigger = () => {
    if (typeof mainImage.decode === 'function') {
      mainImage.decode()
        .then(() => {
          requestAnimationFrame(triggerImageLoad);
        })
        .catch(triggerImageLoad);
    } else {
      requestAnimationFrame(triggerImageLoad);
    }
  };

  if (!srcChanged && mainImage.complete && mainImage.naturalWidth !== 0) {
    decodeAndTrigger();
  } else {
    mainImage.addEventListener('load', decodeAndTrigger, {once: true});
    mainImage.addEventListener('error', triggerImageLoad, {once: true});
    // Safety fallback: guaranteed to unlock within 300ms if event was missed
    setTimeout(triggerImageLoad, 300);
  }
}

// Core function: Check if the mouse position triggers any children node
// Ret: the child ID or null if no.
/**
 * Checks interaction.
 * @param {number} clientX
 * @param {number} clientY
 * @return {?string}
 */
function checkInteraction(clientX, clientY) {
  const node = nodesData[currentNodeId];
  if (!node || node.childrenIds.length === 0) return null;

  if (mainImage.naturalWidth === 0 || mainImage.naturalHeight === 0) {
    return null;
  }

  // get the image areas in the screen
  const rect = mainImage.getBoundingClientRect();
  if (clientX < rect.left || clientX > rect.right || clientY < rect.top ||
      clientY > rect.bottom) {
    return null;
  }

  const naturalWidth = mainImage.naturalWidth;
  const naturalHeight = mainImage.naturalHeight;

  // Mouse Position
  const xRel = clientX - rect.left;
  const yRel = clientY - rect.top;

  // get the position in the original image
  const originalX = Math.floor(xRel * (naturalWidth / rect.width));
  const originalY = Math.floor(yRel * (naturalHeight / rect.height));

  for (const childId of node.childrenIds) {
    const childNode = nodesData[childId];

    // If inside the box (definition in the test.py: y_min, x_min, y_max, x_max)
    if (childNode.box) {
      const [yMin, xMin, yMax, xMax] = childNode.box;
      if (originalX >= xMin && originalX <= xMax && originalY >= yMin &&
          originalY <= yMax) {
        // Check if the mask is white.
        if (childNode.maskSrc) {
          const canvas = document.getElementById(`mask-canvas-${childId}`);
          if (canvas && canvas.width > 0) {
            const ctx = canvas.getContext('2d');
            // Clamp sample coordinates to valid 0-indexed canvas bounds.
            const sampleX = Math.min(
                canvas.width - 1,
                Math.floor((originalX / naturalWidth) * canvas.width));
            const sampleY = Math.min(
                canvas.height - 1,
                Math.floor((originalY / naturalHeight) * canvas.height));
            const pixelData = ctx.getImageData(sampleX, sampleY, 1, 1).data;
            // pixelData is [R, G, B, A]
            if (isWhitePixel(pixelData[0], pixelData[1], pixelData[2])) {
              return childId;
            }
          }
        } else {
          if ('0' === '1' || isImmersiveModeConfig || isImmersiveMode) {
            // Skip coarse rectangular bounding boxes when extended click targets is active or in immersive mode
            continue;
          }
          // Assumption: if there's no mask, treat it as the white mask.
          return childId;
        }
      }
    }
  }
  return null;
}

// Mouse Move: show hover/url tooltip
mainContainer.addEventListener('mousemove', (e) => {
  if (!document.body.classList.contains('widget-content-loaded') ||
      isAnimating || isDragging || isLightboxTransitioning) {
    return;
  }

  if (e.target.closest('.label') || e.target.closest('.anchor-dot-group') ||
      e.target.matches('.label-line, .anchor-dot, .label-line-hit-target, .anchor-dot-hit-target')) {
    return;
  }
  const activeChildId = checkInteraction(e.clientX, e.clientY);

  if (activeChildId) {
    if (hoveringChildId !== activeChildId) {
      if (hoveringChildId && hoveringChildId !== pinnedChildId) {
        highlightLabel(hoveringChildId, false);
      }
      hoveringChildId = activeChildId;
      showHoverOverlay(activeChildId);

      highlightLabel(activeChildId, true);
    }

    const childNode = nodesData[activeChildId];
    mainImage.style.cursor = 'pointer';

    if (childNode.url) {
      urlTooltip.style.display = 'block';
      urlTooltip.textContent = childNode.url;

      const tooltipRect = urlTooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const offset = 20;

      let top = e.clientY + offset;
      let left = e.clientX + offset;

      if (top + tooltipRect.height > viewportHeight) {
        top = e.clientY - tooltipRect.height - offset;
      }

      if (left + tooltipRect.width > viewportWidth) {
        left = viewportWidth - tooltipRect.width - 10;
      }

      urlTooltip.style.top = top + 'px';
      urlTooltip.style.left = left + 'px';

    } else {
      urlTooltip.style.display = 'none';
    }
  } else {
    // Mouse does not point to any boxed area
    if (hoveringChildId !== null) {
      if (hoveringChildId !== pinnedChildId) {
        highlightLabel(hoveringChildId, false);
      }
      if (pinnedChildId) {
        showHoverOverlay(pinnedChildId);
      } else {
        hideHoverOverlay();
      }
      hoveringChildId = null;
    }
    // Hide the tooltip
    urlTooltip.style.display = 'none';
    mainImage.style.cursor = '';
  }
});

// Mouse Leave: cancel the hover status if mouse leaves the main container.
mainContainer.addEventListener('mouseleave', () => {
  if (isAnimating) return;
  if (hoveringChildId !== null) {
    if (hoveringChildId !== pinnedChildId) {
      highlightLabel(hoveringChildId, false);
    }
    if (pinnedChildId) {
      showHoverOverlay(pinnedChildId);
    } else {
      hideHoverOverlay();
    }
    hoveringChildId = null;
  }
  urlTooltip.style.display = 'none';
});


// Mouse Click
mainContainer.addEventListener('click', (e) => {
  if (globalLabelDraggingActive) {
    return;
  }
  if (dragMoved) {
    dragMoved = false;
    return;
  }
  if (!document.body.classList.contains('widget-content-loaded') || isAnimating)
    return;
  if (e.target.closest('.label')) return;
  if (e.target.closest('#text-panel')) return;
  const activeChildId = checkInteraction(e.clientX, e.clientY);

  if (activeChildId) {
    const childNode = nodesData[activeChildId];
    if (isMobileApp && isImmersiveMode) {
      handleMobileNodeTap(activeChildId, childNode);
    } else {
      if (childNode.url) {
        window.open(childNode.url, '_blank');
      } else {
        zoomToChild(activeChildId);
      }
    }
  } else {
    if (isMobileApp && isImmersiveMode && activeMobileNodeId) {
      highlightLabel(activeMobileNodeId, false);
      hideHoverOverlay();
      activeMobileNodeId = null;
    } else {
      if (pinnedChildId) {
        unpinLeaf();
      } else {
        const currentNode = nodesData[currentNodeId];
        if (currentNode && currentNode.parentId) {
          if (lightboxZoomOutBtn) {
            lightboxZoomOutBtn.classList.remove(
                'lightbox-zoom-out-button--visible');
          }
          zoomToParent(currentNode.parentId, currentNodeId);
        }
      }
    }
  }
});

/**
 * Finds the child node ID closest to the geometric center of the node's image.
 * @param {string} nodeId
 * @return {?string}
 */
function findBestChildId(nodeId) {
  const node = nodesData[nodeId];
  if (!node || !node.childrenIds || node.childrenIds.length === 0) {
    return null;
  }
  const naturalWidth = mainImage.naturalWidth;
  const naturalHeight = mainImage.naturalHeight;
  if (naturalWidth === 0 || naturalHeight === 0) {
    return null;
  }
  const centerX = naturalWidth / 2;
  const centerY = naturalHeight / 2;

  let bestChildId = null;
  let minDistance = Infinity;

  node.childrenIds.forEach(childId => {
    const childNode = nodesData[childId];
    if (childNode && childNode.labelPosition) {
      const anchorX = childNode.labelPosition.anchorX;
      const anchorY = childNode.labelPosition.anchorY;
      const dx = anchorX - centerX;
      const dy = anchorY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDistance) {
        minDistance = dist;
        bestChildId = childId;
      }
    }
  });
  return bestChildId;
}

/**
 * Finds the child dot of the root node closest to the center of the screen,
 * and displays the onboarding tooltip pointing to it.
 */
function showOnboardingTooltip() {
  return;
}

/**
 * Dismisses onboarding tooltip.
 */
function dismissOnboardingTooltip() {
  const tooltipEl = document.getElementById('onboarding-tooltip');
  if (tooltipEl) {
    tooltipEl.classList.remove('visible');
    tooltipEl.style.display = 'none';
  }
  hasDismissedOnboardingTooltip = true;
}

// Resize handler: reposition and scale labels when container or window resizes
let resizeTimeout;
/**
 * Handles resize from ResizeObserver (entries array) or window resize (Event).
 * @param {!Array<!ResizeObserverEntry>|!Event} entries
 */
let handleResize = (entries) => {
  if (labelsContainer) labelsContainer.classList.add('hidden-instant');
  if (labelsSvg) labelsSvg.classList.add('hidden-instant');

  clearTimeout(resizeTimeout);

  if (isLightboxTransitioning) {
    Logger.log('Resize ignored during active lightbox transition');
    return;
  }

  Logger.log(
      'Resize detected:',
      Array.isArray(entries) ?
          entries.map(e => ({
                        target: e.target.id || e.target.tagName,
                        width: e.contentRect?.width
                      })) :
          'window');
  resizeTimeout = setTimeout(() => {
    Object.values(nodesData).forEach(n => {
      n.hasComputedPhysics = false;
    });
    if (document.body.classList.contains('widget-content-loaded') &&
        !isAnimating) {
      if (isImmersiveMode) {
        resetImmersiveViewport();
        measureMaximizedTextPanelHeight();
      } else {
        Logger.log('Calling renderLabels from resize handler');
        renderLabels();
      }
      if (minimapMode === 1 || minimapMode === 2 || minimapMode === 3) {
        updateMinimapLayout();
      }
      showOnboardingTooltip();
    }
    setTimeout(() => {
      if (document.body.classList.contains('widget-content-loaded') &&
          !isAnimating) {
        if (isImmersiveMode) {
          renderLabels();
        }
      }
      if (!isLightboxTransitioning) {
        if (labelsContainer) labelsContainer.classList.remove('hidden-instant');
        if (labelsSvg) labelsSvg.classList.remove('hidden-instant');
      }
    }, isImmersiveMode ? 500 : 0);
  }, 100);
};

// Use ResizeObserver for container resize (handles widget resize, iframe
// resize, etc.)
if (typeof ResizeObserver !== 'undefined') {
  const resizeObserver = new ResizeObserver(handleResize);
  const contentWrapper = document.getElementById('content-wrapper');
  resizeObserver.observe(contentWrapper);
}

// Also listen to window resize as fallback
window.addEventListener('resize', handleResize);

let dragMoved = false;

// Setup Drag Event Listeners
mainImage.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

mainImage.addEventListener('mousedown', (e) => {
  const isImmersiveDrag = isImmersiveMode;
  const isLateralDrag = (lateralNavigationMode === 2 && currentNodeId !== rootId);

  if (isAnimating || (!isImmersiveDrag && !isLateralDrag))
    return;

  isDragging = true;
  cancelNudge();
  dragMoved = false;
  dragUiHidden = false;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  mainImage.style.transition = 'none';
  if (labelsContainer) labelsContainer.style.transition = 'none';
  const tooltipEl = document.getElementById('onboarding-tooltip');
  if (tooltipEl) tooltipEl.style.transition = 'none';
  mainImage.style.cursor = 'grabbing';
  document.body.classList.add('is-dragging');
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  dX = e.clientX - dragStartX;
  dY = e.clientY - dragStartY;

  if (Math.abs(dX) > 5 || Math.abs(dY) > 5) {
    dragMoved = true;
    if (isImmersiveMode) {
      if (!dragUiHidden) {
        dragUiHidden = true;
        if (regionHighlight) regionHighlight.style.opacity = '0';
        const buttons = document.querySelectorAll('.edge-arrow');
        buttons.forEach(b => b.style.opacity = '0');
        const tooltip = document.getElementById('onboarding-tooltip');
        if (tooltip) tooltip.classList.remove('visible');
      }
    } else {
      if (labelsContainer && labelsContainer.style.opacity !== '0') {
        hideUI();
      }
    }
  }

  if (isImmersiveMode) {
    const targetX = currentImmersiveX + dX;
    const targetY = currentImmersiveY + dY;
    const clamped = clampImmersiveOffsets(targetX, targetY);
    mainImage.style.transform = `translate(${clamped.x}px, ${clamped.y}px) scale(${currentImmersiveScale})`;
    if (labelsContainer) {
      labelsContainer.style.transform = `translate(${clamped.x}px, ${clamped.y}px)`;
    }
    if (minimapMode === 2 || minimapMode === 3) {
      syncMinimapViewport(clamped.x, clamped.y);
    }
    checkDotsOverlapWithTextPanel();
    updateActiveFloatingPanelPosition();
    return;
  }

  // Clamp dragging at edge boundaries where neighbors aren't loaded
  if (dX < 0 && !currentNeighbors.right) dX = 0;
  if (dX > 0 && !currentNeighbors.left) dX = 0;
  if (dY < 0 && !currentNeighbors.down) dY = 0;
  if (dY > 0 && !currentNeighbors.up) dY = 0;

  mainImage.style.transform = `translate(${dX}px, ${dY}px)`;

  const adjRight = document.getElementById('adjacent-right');
  const adjLeft = document.getElementById('adjacent-left');
  const adjUp = document.getElementById('adjacent-up');
  const adjDown = document.getElementById('adjacent-down');

  function updateAdjacent(
      imageElement, neighborId, targetX_offset, targetY_offset) {
    if (!imageElement) return;
    if (neighborId && nodesData[neighborId] && nodesData[neighborId].imageSrc) {
      const newSrc = nodesData[neighborId].imageSrc;
      if (imageElement.getAttribute('src') !== newSrc) {
        imageElement.src = newSrc;
      }
      imageElement.style.display = 'block';
      imageElement.style.width = `${mainImage.offsetWidth}px`;
      imageElement.style.height = `${mainImage.offsetHeight}px`;
      imageElement.style.left = `${mainImage.offsetLeft}px`;
      imageElement.style.top = `${mainImage.offsetTop}px`;
      imageElement.style.transform =
          `translate(${dX + targetX_offset}px, ${dY + targetY_offset}px)`;
    } else {
      imageElement.style.display = 'none';
    }
  }

  if (dX < 0) {
    updateAdjacent(adjRight, currentNeighbors.right, mainImage.offsetWidth, 0);
    if (adjLeft) adjLeft.style.display = 'none';
  } else if (dX > 0) {
    updateAdjacent(adjLeft, currentNeighbors.left, -mainImage.offsetWidth, 0);
    if (adjRight) adjRight.style.display = 'none';
  } else {
    if (adjRight) adjRight.style.display = 'none';
    if (adjLeft) adjLeft.style.display = 'none';
  }

  if (dY < 0) {
    updateAdjacent(adjDown, currentNeighbors.down, 0, mainImage.offsetHeight);
    if (adjUp) adjUp.style.display = 'none';
  } else if (dY > 0) {
    updateAdjacent(adjUp, currentNeighbors.up, 0, -mainImage.offsetHeight);
    if (adjDown) adjDown.style.display = 'none';
  } else {
    if (adjUp) adjUp.style.display = 'none';
    if (adjDown) adjDown.style.display = 'none';
  }
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  mainImage.style.cursor = '';
  document.body.classList.remove('is-dragging');

  if (isImmersiveMode) {
    if (dragMoved) {
      const targetX = currentImmersiveX + dX;
      const targetY = currentImmersiveY + dY;
      const clamped = clampImmersiveOffsets(targetX, targetY);

      currentImmersiveX = clamped.x;
      currentImmersiveY = clamped.y;

      if (labelsContainer) labelsContainer.style.transform = '';

      applyImmersiveTransform();
      renderLabels();
    }
    showUI();
    dX = 0;
    dY = 0;
    return;
  }

  document.querySelectorAll('.adjacent-peek')
      .forEach(el => el.style.display = 'none');

  const threshold = 100;
  let direction = null;

  if (Math.abs(dX) > threshold && Math.abs(dX) > Math.abs(dY)) {
    direction = dX > 0 ? 'left' : 'right';
  } else if (Math.abs(dY) > threshold && Math.abs(dY) > Math.abs(dX)) {
    direction = dY > 0 ? 'up' : 'down';
  }

  if (direction && currentNeighbors[direction]) {
    panToNode(currentNeighbors[direction], direction, dX, dY);
  } else {
    // Snap Back
    mainImage.style.transition = 'transform 0.2s';
    mainImage.style.transform = 'translate(0px, 0px)';
    showUI();
  }
  dX = 0;
  dY = 0;
});


// Setup Touch Drag Event Listeners for Mobile
mainImage.addEventListener('touchstart', (e) => {
  const isImmersiveDrag = isImmersiveMode;
  const isLateralDrag =
      (lateralNavigationMode === 2 && currentNodeId !== rootId);

  if (isAnimating || (!isImmersiveDrag && !isLateralDrag)) return;

  if (isMobileApp && isImmersiveMode && e.touches.length === 2) {
    isPinching = true;
    isDragging = false;

    const t1 = e.touches[0];
    const t2 = e.touches[1];
    pinchStartDistance =
        Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
    pinchStartScale = currentImmersiveScale;

    const containerRect = mainContainer.getBoundingClientRect();
    pinchStartMidpoint = {
      x: (t1.clientX + t2.clientX) / 2 - containerRect.left,
      y: (t1.clientY + t2.clientY) / 2 - containerRect.top
    };

    e.preventDefault();
    return;
  }

  if (e.touches.length === 1) {
    isDragging = true;
    isPinching = false;
    cancelNudge();
    dragMoved = false;
    dragUiHidden = false;

    const touch = e.touches[0];
    dragStartX = touch.clientX;
    dragStartY = touch.clientY;

    mainImage.style.transition = 'none';
    if (labelsContainer) labelsContainer.style.transition = 'none';
    const tooltipEl = document.getElementById('onboarding-tooltip');
    if (tooltipEl) tooltipEl.style.transition = 'none';
    document.body.classList.add('is-dragging');
  }
}, {passive: false});

window.addEventListener('touchmove', (e) => {
  if (isPinching && e.touches.length === 2) {
    const t1 = e.touches[0];
    const t2 = e.touches[1];
    const currentDistance =
        Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
    if (pinchStartDistance === 0) return;

    const scaleFactor = currentDistance / pinchStartDistance;
    let targetScale = pinchStartScale * scaleFactor;

    // Boundary checks
    const containerRect = mainContainer.getBoundingClientRect();
    const naturalWidth = mainImage.naturalWidth;
    const naturalHeight = mainImage.naturalHeight;
    const scaleX = containerRect.width / naturalWidth;
    const scaleY = containerRect.height / naturalHeight;

    const isMobilePortrait =
        window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
    const minScale = isMobilePortrait ? scaleY : Math.max(scaleX, scaleY);
    const maxScale = minScale * 6;

    let isPinchingOutPastLimit = false;

    if (targetScale < minScale) {
      if (currentNodeId !== rootId) {
        isPinchingOutPastLimit = true;
      } else {
        targetScale = minScale;
      }
    } else if (targetScale > maxScale) {
      targetScale = maxScale;
    }

    if (isPinchingOutPastLimit) {
      isPinching = false;
      const currentNode = nodesData[currentNodeId];
      if (currentNode && currentNode.parentId) {
        zoomToParent(currentNode.parentId, currentNodeId);
      }
      return;
    }

    const scaleRatio = targetScale / currentImmersiveScale;
    const newX = pinchStartMidpoint.x -
        (pinchStartMidpoint.x - currentImmersiveX) * scaleRatio;
    const newY = pinchStartMidpoint.y -
        (pinchStartMidpoint.y - currentImmersiveY) * scaleRatio;

    currentImmersiveScale = targetScale;

    const clamped = clampImmersiveOffsets(newX, newY);
    currentImmersiveX = clamped.x;
    currentImmersiveY = clamped.y;

    applyImmersiveTransform();
    if (labelsContainer) {
      labelsContainer.style.transform =
          `translate(${currentImmersiveX}px, ${currentImmersiveY}px)`;
    }
    if (minimapMode === 2 || minimapMode === 3) {
      syncMinimapViewport(currentImmersiveX, currentImmersiveY);
    }
    checkDotsOverlapWithTextPanel();
    updateActiveFloatingPanelPosition();

    e.preventDefault();
    return;
  }

  if (!isDragging) return;

  const touch = e.touches[0];
  dX = touch.clientX - dragStartX;
  dY = touch.clientY - dragStartY;

  if (Math.abs(dX) > 5 || Math.abs(dY) > 5) {
    dragMoved = true;
    if (isImmersiveMode) {
      if (!dragUiHidden) {
        dragUiHidden = true;
        if (regionHighlight) regionHighlight.style.opacity = '0';
        const buttons = document.querySelectorAll('.edge-arrow');
        buttons.forEach(b => b.style.opacity = '0');
        const tooltip = document.getElementById('onboarding-tooltip');
        if (tooltip) tooltip.classList.remove('visible');
      }
    } else {
      if (labelsContainer && labelsContainer.style.opacity !== '0') {
        hideUI();
      }
    }
  }

  if (isImmersiveMode) {
    const targetX = currentImmersiveX + dX;
    const targetY = currentImmersiveY + dY;
    const clamped = clampImmersiveOffsets(targetX, targetY);
    mainImage.style.transform = `translate(${clamped.x}px, ${
        clamped.y}px) scale(${currentImmersiveScale})`;
    if (labelsContainer) {
      labelsContainer.style.transform =
          `translate(${clamped.x}px, ${clamped.y}px)`;
    }
    if (minimapMode === 2 || minimapMode === 3) {
      syncMinimapViewport(clamped.x, clamped.y);
    }
    checkDotsOverlapWithTextPanel();
    updateActiveFloatingPanelPosition();
    return;
  }

  // Clamp dragging at edge boundaries where neighbors aren't loaded
  if (dX < 0 && !currentNeighbors.right) dX = 0;
  if (dX > 0 && !currentNeighbors.left) dX = 0;
  if (dY < 0 && !currentNeighbors.down) dY = 0;
  if (dY > 0 && !currentNeighbors.up) dY = 0;

  mainImage.style.transform = `translate(${dX}px, ${dY}px)`;

  const adjRight = document.getElementById('adjacent-right');
  const adjLeft = document.getElementById('adjacent-left');
  const adjUp = document.getElementById('adjacent-up');
  const adjDown = document.getElementById('adjacent-down');

  function updateAdjacent(
      imageElement, neighborId, targetX_offset, targetY_offset) {
    if (!imageElement) return;
    if (neighborId && nodesData[neighborId] && nodesData[neighborId].imageSrc) {
      const newSrc = nodesData[neighborId].imageSrc;
      if (imageElement.getAttribute('src') !== newSrc) {
        imageElement.src = newSrc;
      }
      imageElement.style.display = 'block';
      imageElement.style.width = `${mainImage.offsetWidth}px`;
      imageElement.style.height = `${mainImage.offsetHeight}px`;
      imageElement.style.left = `${mainImage.offsetLeft}px`;
      imageElement.style.top = `${mainImage.offsetTop}px`;
      imageElement.style.transform =
          `translate(${dX + targetX_offset}px, ${dY + targetY_offset}px)`;
    } else {
      imageElement.style.display = 'none';
    }
  }

  if (dX < 0) {
    updateAdjacent(adjRight, currentNeighbors.right, mainImage.offsetWidth, 0);
    if (adjLeft) adjLeft.style.display = 'none';
  } else if (dX > 0) {
    updateAdjacent(adjLeft, currentNeighbors.left, -mainImage.offsetWidth, 0);
    if (adjRight) adjRight.style.display = 'none';
  } else {
    if (adjRight) adjRight.style.display = 'none';
    if (adjLeft) adjLeft.style.display = 'none';
  }

  if (dY < 0) {
    updateAdjacent(adjDown, currentNeighbors.down, 0, mainImage.offsetHeight);
    if (adjUp) adjUp.style.display = 'none';
  } else if (dY > 0) {
    updateAdjacent(adjUp, currentNeighbors.up, 0, -mainImage.offsetHeight);
    if (adjDown) adjDown.style.display = 'none';
  } else {
    if (adjUp) adjUp.style.display = 'none';
    if (adjDown) adjDown.style.display = 'none';
  }
}, {passive: false});

window.addEventListener('touchend', (e) => {
  if (isPinching) {
    if (e.touches.length < 2) {
      isPinching = false;
      pinchStartDistance = 0;
      renderLabels();
      showUI();
    }
    return;
  }

  if (!isDragging) return;
  isDragging = false;
  document.body.classList.remove('is-dragging');

  if (isImmersiveMode) {
    if (dragMoved) {
      const targetX = currentImmersiveX + dX;
      const targetY = currentImmersiveY + dY;
      const clamped = clampImmersiveOffsets(targetX, targetY);

      currentImmersiveX = clamped.x;
      currentImmersiveY = clamped.y;

      if (labelsContainer) labelsContainer.style.transform = '';

      applyImmersiveTransform();
      renderLabels();
    }
    showUI();
    dX = 0;
    dY = 0;
    return;
  }

  document.querySelectorAll('.adjacent-peek')
      .forEach(el => el.style.display = 'none');

  const threshold = 100;
  let direction = null;

  if (Math.abs(dX) > threshold && Math.abs(dX) > Math.abs(dY)) {
    direction = dX > 0 ? 'left' : 'right';
  } else if (Math.abs(dY) > threshold && Math.abs(dY) > Math.abs(dX)) {
    direction = dY > 0 ? 'up' : 'down';
  }

  if (direction && currentNeighbors[direction]) {
    panToNode(currentNeighbors[direction], direction, dX, dY);
  } else {
    // Snap Back
    mainImage.style.transition = 'transform 0.2s';
    mainImage.style.transform = 'translate(0px, 0px)';
    showUI();
  }
  dX = 0;
  dY = 0;
});


if (arrowLeft)
  arrowLeft.addEventListener(
      'click', () => panToNode(currentNeighbors.left, 'left'));
if (arrowRight)
  arrowRight.addEventListener(
      'click', () => panToNode(currentNeighbors.right, 'right'));
if (arrowUp)
  arrowUp.addEventListener('click', () => panToNode(currentNeighbors.up, 'up'));
if (arrowDown)
  arrowDown.addEventListener(
      'click', () => panToNode(currentNeighbors.down, 'down'));

if (miniMapContainer) {
  if (isImmersiveModeConfig) {
    miniMapContainer.removeAttribute('title');

    // Immersive minimap drag/tap interaction variables
    let isDraggingMinimap = false;

    /**
     * Handles minimap interaction coordinates conversion and updates viewport.
     * @param {number} clientX
     * @param {number} clientY
     */
    const handleMinimapInteraction = (clientX, clientY) => {
      const rect = miniMapContainer.getBoundingClientRect();
      const naturalWidth = mainImage.naturalWidth;
      const naturalHeight = mainImage.naturalHeight;
      if (!naturalWidth || !naturalHeight || rect.width === 0 ||
          rect.height === 0)
        return;

      const map_cx =
          Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const map_cy =
          Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

      const currentNode = nodesData[currentNodeId];
      if (!currentNode) return;
      const parentNode = nodesData[currentNode.parentId];
      const useParentCoords = (minimapMode !== 3);

      let divX = 10;
      let divY = 10;
      if (useParentCoords) {
        if (miniMapBg && miniMapBg.naturalWidth && miniMapBg.naturalHeight) {
          divX = miniMapBg.naturalWidth / 100;
          divY = miniMapBg.naturalHeight / 100;
        }
      }

      let x0 = 0, y0 = 0, x1 = 1000, y1 = 1000;
      if (useParentCoords && parentNode) {
        const box = currentNode.box;
        if (box) {
          y0 = box[0];
          x0 = box[1];
          y1 = box[2];
          x1 = box[3];
        }
      }

      const parent_x0 = x0 / divX / 100;
      const parent_y0 = y0 / divY / 100;
      const parent_w = (x1 - x0) / divX / 100;
      const parent_h = (y1 - y0) / divY / 100;

      let vx_center = map_cx;
      let vy_center = map_cy;
      if (useParentCoords && parentNode && parent_w > 0 && parent_h > 0) {
        vx_center = (map_cx - parent_x0) / parent_w;
        vy_center = (map_cy - parent_y0) / parent_h;
      }

      const tx = naturalWidth * currentImmersiveScale * (0.5 - vx_center);
      const ty = naturalHeight * currentImmersiveScale * (0.5 - vy_center);

      const clamped = clampImmersiveOffsets(tx, ty);
      currentImmersiveX = clamped.x;
      currentImmersiveY = clamped.y;

      applyImmersiveTransform();
      syncMinimapViewport();
      checkDotsOverlapWithTextPanel();
      updateActiveFloatingPanelPosition();
    };

    /**
     * Starts minimap drag/tap interaction.
     * @param {!Event} e
     * @param {number} clientX
     * @param {number} clientY
     */
    const onStart = (e, clientX, clientY) => {
      e.stopPropagation();
      e.preventDefault();
      if (isAnimating) return;
      isDraggingMinimap = true;

      mainImage.style.transition = 'none';
      if (labelsContainer) labelsContainer.style.transition = 'none';
      const tooltipEl = document.getElementById('onboarding-tooltip');
      if (tooltipEl) {
        tooltipEl.style.transition = 'none';
        tooltipEl.style.display = 'none';
        tooltipEl.classList.remove('visible');
      }

      handleMinimapInteraction(clientX, clientY);
    };

    /**
     * Handles movement during minimap interaction.
     * @param {number} clientX
     * @param {number} clientY
     */
    const onMove = (clientX, clientY) => {
      if (!isDraggingMinimap) return;
      handleMinimapInteraction(clientX, clientY);
    };

    /**
     * Ends minimap interaction and restores UI states.
     */
    const onEnd = () => {
      if (!isDraggingMinimap) return;
      isDraggingMinimap = false;

      mainImage.style.transition = '';
      if (labelsContainer) labelsContainer.style.transition = '';
      const tooltipEl = document.getElementById('onboarding-tooltip');
      if (tooltipEl) tooltipEl.style.transition = '';

      applyImmersiveTransform();
      renderLabels();
      showUI();
    };

    miniMapContainer.addEventListener('mousedown', (e) => {
      onStart(e, e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      onMove(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      onEnd();
    });

    miniMapContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        onStart(e, e.touches[0].clientX, e.touches[0].clientY);
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (isDraggingMinimap && e.touches.length > 0) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
        if (e.cancelable) e.preventDefault();
      }
    }, {passive: false});

    window.addEventListener('touchend', () => {
      onEnd();
    });
  }
  miniMapContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isImmersiveModeConfig) return;
    if (isAnimating) return;

    const rect = miniMapContainer.getBoundingClientRect();
    const x_pct = (e.clientX - rect.left) / rect.width;
    const y_pct = (e.clientY - rect.top) / rect.height;
    const targetX = x_pct * 1000;
    const targetY = y_pct * 1000;

    let bestNodeId = null;
    let minArea = Infinity;

    const current = nodesData[currentNodeId];
    const parentId = current ? current.parentId : null;

    for (const id in nodesData) {
      const node = nodesData[id];
      if (!node.box || id === rootId || !node.imageSrc) continue;
      if (parentId !== null && node.parentId !== parentId) continue;
      if (targetY >= node.box[0] && targetY <= node.box[2] &&
          targetX >= node.box[1] && targetX <= node.box[3]) {
        const area = (node.box[2] - node.box[0]) * (node.box[3] - node.box[1]);
        if (area < minArea) {
          minArea = area;
          bestNodeId = id;
        }
      }
    }

    if (!bestNodeId) {
      let minDistance = Infinity;
      for (const id in nodesData) {
        const node = nodesData[id];
        if (!node.box || id === rootId || !node.imageSrc) continue;
        if (parentId !== null && node.parentId !== parentId) continue;
        const centerX = (node.box[1] + node.box[3]) / 2;
        const centerY = (node.box[0] + node.box[2]) / 2;
        const dist = Math.sqrt(
            Math.pow(targetX - centerX, 2) + Math.pow(targetY - centerY, 2));
        if (dist < minDistance) {
          minDistance = dist;
          bestNodeId = id;
        }
      }
    }

    if (bestNodeId && bestNodeId !== currentNodeId) {
      const current = nodesData[currentNodeId];
      let direction = 'right';
      if (current && current.box) {
        const currCenterX = (current.box[1] + current.box[3]) / 2;
        const currCenterY = (current.box[0] + current.box[2]) / 2;
        const tNode = nodesData[bestNodeId];
        const tCenterX = (tNode.box[1] + tNode.box[3]) / 2;
        const tCenterY = (tNode.box[0] + tNode.box[2]) / 2;

        if (Math.abs(tCenterX - currCenterX) >
            Math.abs(tCenterY - currCenterY)) {
          direction = tCenterX > currCenterX ? 'right' : 'left';
        } else {
          direction = tCenterY > currCenterY ? 'down' : 'up';
        }
      }
      panToNode(bestNodeId, direction);
    }
  });
}

// main entry:
if (currentNodeId && typeof nodesData !== 'undefined' && nodesData && nodesData[currentNodeId]) {
  renderNode(currentNodeId);
} else {
  renderNode(rootId);
}

// =========================================
// Audio Narration Tour Implementation
// =========================================
let tourPayload = null;
let isTransitionPaused = false;

const audioBlobCache = new Map();

/**
 * Pre-fetches an audio file (e.g. from FIFE/LH3) into a Blob URL in memory.
 * This resolves b/536647307 (Range request 302-redirect seeking snapping bug).
 * @param {string} url
 * @return {!Promise<string>}
 */
async function getOrFetchAudioBlob(url) {
  if (!url) return null;
  if (audioBlobCache.has(url)) {
    return audioBlobCache.get(url);
  }
  if (url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    audioBlobCache.set(url, blobUrl);
    return blobUrl;
  } catch (err) {
    Logger.warn('Failed to pre-fetch audio blob, falling back to direct URL:', err);
    return url;
  }
}

/**
 * Pauses the narration audio during a transition (Disabled).
 */
function pauseAudioForTransition() {
  // Disabled: do not pause audio during transitions
  Logger.log("⏸️ [Disabled] pauseAudioForTransition called");
}

/**
 * Resumes the narration audio after a transition is complete.
 */
function resumeAudioAfterTransition() {
  // Disabled: do not resume audio during transitions
  Logger.log("▶️ [Disabled] resumeAudioAfterTransition called");
}

window.__deepZoomTour__ = {
  currentEventIdx: 0,
  currentStepIdx: 0,
  isPlaying: false,
  hasTour: false,
  activeHighlights: [],

  toggle: function() {
    if (this.isPlaying)
      this.stop();
    else
      this.start();
  },

  getUniqueStepEvents: function() {
    if (!tourPayload) return [];
    const stepEvents = [];
    const seen = new Set();
    tourPayload.timeline.forEach((evt, idx) => {
      if (evt.step_idx !== undefined && evt.step_idx !== null && !seen.has(evt.step_idx)) {
        seen.add(evt.step_idx);
        stepEvents.push({event: evt, originalIndex: idx});
      }
    });
    return stepEvents;
  },

  getCurrentStepIndex: function() {
    if (!tourPayload) return -1;
    if (this.currentStepIdx !== undefined && this.currentStepIdx !== null && this.currentStepIdx >= 0) {
      return this.currentStepIdx;
    }
    const stepEvents = this.getUniqueStepEvents();
    const player = document.getElementById('tour-player');
    const currentTime = player ? player.currentTime : 0;

    let currentIdx = 0;
    const epsilon = 0.1;
    for (let i = 0; i < stepEvents.length; i++) {
      if ((currentTime + epsilon) >= stepEvents[i].event.time) {
        currentIdx = i;
      } else {
        break;
      }
    }
    return currentIdx;
  },

  prevStep: function() {
    const currentIdx = this.getCurrentStepIndex();
    if (currentIdx > 0) {
      this.jumpToStep(currentIdx - 1);
    }
  },

  nextStep: function() {
    const currentIdx = this.getCurrentStepIndex();
    const stepEvents = this.getUniqueStepEvents();
    if (currentIdx < stepEvents.length - 1) {
      this.jumpToStep(currentIdx + 1);
    }
  },

  jumpToStep: function(targetStepIdx) {
    if (!tourPayload || !this.isPlaying) return;

    const stepEvents = this.getUniqueStepEvents();
    if (targetStepIdx < 0 || targetStepIdx >= stepEvents.length) return;

    this.currentStepIdx = targetStepIdx;

    const targetStep = stepEvents[targetStepIdx];
    const targetTime = targetStep.event.time;

    const player = document.getElementById('tour-player');
    if (player) {
      player.currentTime = targetTime;
    }

    this.clearHighlights();
    this.currentEventIdx = 0;

    let lastStructuralZoomEvent = null;
    const sequentialEvents = [];

    while (this.currentEventIdx < tourPayload.timeline.length) {
      const evt = tourPayload.timeline[this.currentEventIdx];
      if (evt.time > targetTime) {
        break;
      }

      const type = (evt.type || '').toUpperCase();
      if (type === 'ZOOM_IN' || type === 'ZOOM_OUT') {
        const targetNode = nodesData[evt.target_id];
        if (targetNode && targetNode.imageSrc) {
          lastStructuralZoomEvent = evt;
        }
      } else {
        sequentialEvents.push(evt);
      }
      this.currentEventIdx++;
    }

    if (lastStructuralZoomEvent) {
      this.executeEvent(lastStructuralZoomEvent, true);
    }
    sequentialEvents.forEach(evt => this.executeEvent(evt));
    this.currentStepIdx = targetStepIdx;
  },

  togglePause: function() {
    if (!this.isPlaying) return;
    const player = document.getElementById('tour-player');
    const btn = document.getElementById('tour-pause-resume-btn');
    if (isTransitionPaused) {
      isTransitionPaused = false;
      if (btn) {
        const iconEl = btn.querySelector('.tour-play-pause-icon');
        if (iconEl) iconEl.textContent = 'play_arrow';
      }
      console.log("⏸️ User forced paused tour during transition.");
      return;
    }
    if (player.paused) {
      player.play();
      if (typeof emitUserInteraction === 'function') {
        emitUserInteraction('TOUR_RESUME');
      }
      if (btn) {
        const iconEl = btn.querySelector('.tour-play-pause-icon');
        if (iconEl) iconEl.textContent = 'pause';
      }
    } else {
      player.pause();
      if (typeof emitUserInteraction === 'function') {
        emitUserInteraction('TOUR_PAUSE');
      }
      if (btn) {
        const iconEl = btn.querySelector('.tour-play-pause-icon');
        if (iconEl) iconEl.textContent = 'play_arrow';
      }
    }
  },

  start: async function() {
    dismissOnboardingTooltip();
    if (!tourPayload) return;
    this.isPlaying = true;
    this.currentEventIdx = 0;
    this.currentStepIdx = 0;
    this.activeHighlights = [];

    document.body.classList.add('tour-active');
    if (typeof emitUserInteraction === 'function') {
      emitUserInteraction('TOUR_START');
    }
    const startBtn = document.getElementById('start-tour-btn');
    if (startBtn) startBtn.style.display = 'none';
    const pBtn = document.getElementById('tour-pause-resume-btn');
    if (pBtn) {
      const iconEl = pBtn.querySelector('.tour-play-pause-icon');
      if (iconEl) iconEl.textContent = 'pause';
    }
    const badge = document.getElementById('tour-badge');
    if (badge) {
      const totalSteps = this.getUniqueStepEvents().length;
      badge.textContent = `1/${totalSteps}`;
    }

    if (currentNodeId !== rootId) {
      renderNode(rootId);
      await new Promise(r => setTimeout(r, 500));
    }

    const overlay = document.getElementById('tour-overlay');
    if (overlay) overlay.style.display = 'flex';

    const player = document.getElementById('tour-player');
    const audioUrl = await getOrFetchAudioBlob(tourPayload.audio);
    player.src = audioUrl;
    player.currentTime = 0;

    const self = this;
    player.onplay = () => {
      const tick = () => {
        if (!self.isPlaying) return;
        const t = player.currentTime;

        while (self.currentEventIdx < tourPayload.timeline.length && t >= tourPayload.timeline[self.currentEventIdx].time) {
          const evt = tourPayload.timeline[self.currentEventIdx];
          self.executeEvent(evt);
          self.currentEventIdx++;
        }

        requestAnimationFrame(tick);
      };
      tick();
    };

    try {
      await player.play();
    } catch (e) {
      console.error("Autoplay failed:", e);
    }
  },

  stop: function() {
    this.isPlaying = false;
    this.currentStepIdx = 0;
    document.body.classList.remove('tour-active');
    if (typeof emitUserInteraction === 'function') {
      emitUserInteraction('TOUR_STOP');
    }
    const startBtn = document.getElementById('start-tour-btn');
    if (startBtn) {
      const labelEl = startBtn.querySelector('.chip-label');
      if (labelEl) {
        labelEl.textContent = 'Audio Tour';
      } else {
        startBtn.textContent = 'Audio Tour';
      }
    }
    const overlay = document.getElementById('tour-overlay');
    if (overlay) overlay.style.display = 'none';
    const player = document.getElementById('tour-player');
    player.pause();
    player.src = "";

    const pBtn = document.getElementById('tour-pause-resume-btn');
    if (pBtn) {
      const iconEl = pBtn.querySelector('.tour-play-pause-icon');
      if (iconEl) iconEl.textContent = 'pause';
    }

    this.clearHighlights();

    const naturalEnd = this.currentEventIdx >= tourPayload.timeline.length;
    if (naturalEnd && typeof renderNode === 'function') {
      try {
        renderNode(rootId);
      } catch (e) {
      }
    } else {
      if (currentNodeId === rootId) {
        const node = nodesData[rootId];
        if (node) updateTextPanel(node.text, rootId);
      }
    }
  },

  clearHighlights: function() {
    const activeLabels = document.querySelectorAll('.tour-pulsing-label, .tour-static-label, .highlight');
    activeLabels.forEach(el => el.classList.remove('tour-pulsing-label', 'tour-static-label', 'highlight'));

    const activeBtns = document.querySelectorAll('.tour-pulsing-btn, .tour-static-btn, .highlight');
    activeBtns.forEach(el => el.classList.remove('tour-pulsing-btn', 'tour-static-btn', 'highlight'));

    const lineElements = document.querySelectorAll('[id^="line-"].highlight');
    lineElements.forEach(el => el.classList.remove('highlight'));

    const h = document.getElementById('region-highlight');
    if (h) {
      h.style.opacity = '0';
      h.classList.remove('tour-highlight');
    }
  },

  executeEvent: function(evt, snapImmediately = false) {
    console.log("🎬 executeEvent called:", JSON.stringify(evt));
    const type = (evt.type || "").toUpperCase();
    const action = (evt.action || "").toLowerCase();

    const findPillByLabel = (labelText) => {
      if (!labelText) return null;
      const labels = Array.from(document.querySelectorAll('[id^="label-"]'));
      const match = labels.find(el => el.textContent.trim().toLowerCase() === labelText.trim().toLowerCase());
      if (match) return match;
      return Array.from(document.querySelectorAll('.node-label, div')).find(el => el.textContent.trim().toLowerCase() === labelText.trim().toLowerCase());
    };

    const findDotByLabel = (labelText) => {
      const lbl = findPillByLabel(labelText);
      if (!lbl) return null;
      const id = lbl.id.replace('label-', '');
      return document.getElementById(`dot-${id}`);
    };

    // Update step badge if event is a numbered step
    if (evt.step_idx !== undefined && evt.step_idx !== null) {
      this.currentStepIdx = evt.step_idx - 1;
      const badge = document.getElementById('tour-badge');
      if (badge) {
        const totalSteps = evt.total_steps || this.getUniqueStepEvents().length;
        badge.textContent = `${evt.step_idx}/${totalSteps}`;
      }
    }

    if (type === "CAPTION") {
      const caption = document.getElementById('tour-caption');
      if (caption) caption.textContent = evt.text;
    }

    else if (type === 'FLASH_HIGHLIGHT' || type === 'HIGHLIGHT') {
      this.clearHighlights();
      const highlights = evt.highlights || (evt.target_label ? [evt.target_label] : []);
      
      highlights.forEach(hl => {
        if (hl.toLowerCase() === 'zoom_out' || hl.toLowerCase() === 'zoom out' || action === 'zoom_out') {
          const zb = document.getElementById('lightbox-zoom-out-button');
          if (zb) zb.classList.add('tour-pulsing-btn');
        } else {
          const labelEl = findPillByLabel(hl);
          let targetNodeId = null;
          if (labelEl) {
            labelEl.classList.add('tour-pulsing-label', 'highlight');
            const id = labelEl.id.replace('label-', '');
            targetNodeId = id;
            const lineEl = document.getElementById(`line-${id}`);
            if (lineEl) {
              lineEl.classList.add('highlight');
            }
          }
          const dotEl = findDotByLabel(hl);
          if (dotEl) {
            dotEl.classList.add('tour-pulsing-btn', 'highlight');
          }

          if (targetNodeId && (document.getElementById('mask-canvas-' + targetNodeId) || hl === evt.target_label)) {
            const applied = showHoverOverlay(targetNodeId);
            if (applied) {
              const h = document.getElementById('region-highlight');
              if (h) {
                h.style.opacity = '1';
                h.classList.add('tour-highlight');
              }
            }
          }
        }
      });
    }

    else if (type === 'ZOOM_IN' || type === 'ZOOM_OUT') {
      this.clearHighlights();
      try {
        const isZoomIn = (type === "ZOOM_IN");
        if (snapImmediately) {
          isAnimating = false;
          if (isZoomIn) {
            const childNode = nodesData[evt.target_id];
            if (!childNode || !childNode.imageSrc) {
              pinLeaf(evt.target_id);
            } else {
              renderNode(evt.target_id);
            }
          } else {
            renderNode(evt.target_id);
          }
        } else {
          if (isZoomIn) {
            zoomToChild(evt.target_id);
          } else {
            zoomToParent(evt.target_id, currentNodeId);
          }
        }
      } catch (e) {
        console.error("Action execution failed:", e);
      }
    }

    else if (type === 'STOP_TOUR') {
      this.stop();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (isImmersiveModeConfig && typeof staticAudio !== 'undefined' && staticAudio && typeof staticTimeline !== 'undefined' && staticTimeline) {
    tourPayload = {
      audio: staticAudio,
      timeline: staticTimeline
    };
    window.__deepZoomTour__.hasTour = true;
    getOrFetchAudioBlob(staticAudio);
    if (currentNodeId === rootId) {
      const node = nodesData[rootId];
      if (node) updateTextPanel(node.text, rootId);
    }
  }
});

// Interactive Interrupts:
document.addEventListener('click', function(e) {
  if (!window.__deepZoomTour__ || !window.__deepZoomTour__.isPlaying) return;

  let t = e.target;
  while (t && t !== document.body) {
    if (t.classList && (t.classList.contains('label') || t.classList.contains('node-label') || t.classList.contains('anchor-dot-hit-target') || t.id.startsWith('label-') || t.id.startsWith('dot-') || t.classList.contains('adjacent-peek'))) {
      window.__deepZoomTour__.stop();
      return;
    }
    t = t.parentNode;
  }
}, true);

/**
 * Cancels any active nudge timers and marks the user as having interacted.
 */
function cancelNudge() {
  if (nudgeTimeoutId) {
    clearTimeout(nudgeTimeoutId);
    nudgeTimeoutId = null;
  }
  if (nudgeReturnTimeoutId) {
    clearTimeout(nudgeReturnTimeoutId);
    nudgeReturnTimeoutId = null;
  }
  hasNudgedOrInteracted = true;
}

let landscapeNudgeDismissTimeout = null;
let isLandscapeNudgeDismissed = false;

/**
 * Dismisses the orientation nudge overlay with an optional fade-out animation.
 * @param {boolean=} animated
 */
function dismissOrientationNudge(animated = true) {
  const overlay = document.getElementById('landscape-nudge-overlay');
  if (landscapeNudgeDismissTimeout) {
    clearTimeout(landscapeNudgeDismissTimeout);
    landscapeNudgeDismissTimeout = null;
  }
  isLandscapeNudgeDismissed = true;

  if (!overlay) return;

  if (animated) {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.classList.remove('fade-out');
      document.body.classList.remove('landscape-nudge-active');
      startNudgeTimer();
    }, 300);
  } else {
    overlay.style.display = 'none';
    overlay.classList.remove('fade-out');
    document.body.classList.remove('landscape-nudge-active');
    startNudgeTimer();
  }
}

/**
 * Returns true if the landscape rotation nudge is currently active/should show.
 * @return {boolean}
 */
function isOrientationNudgeActive() {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  return isImmersiveMode && isMobileApp && showMobileLandscapeNudge &&
      isPortrait && !isLandscapeNudgeDismissed;
}

/**
 * Starts the nudge timer if on mobile portrait and the user hasn't interacted.
 */
function startNudgeTimer() {
  const isMobilePortrait =
      window.innerWidth <= 640 && window.innerHeight > window.innerWidth;
  if (!isMobilePortrait || hasNudgedOrInteracted || !isImmersiveMode ||
      currentNodeId !== rootId || isOrientationNudgeActive()) {
    return;
  }

  // Gate: wait for both transition to end and image to load
  if (isLightboxTransitioning) {
    Logger.log('Nudge deferred: lightbox is still transitioning');
    return;
  }
  if (!mainImage.complete || mainImage.naturalWidth === 0) {
    Logger.log('Nudge deferred: image is not fully loaded');
    return;
  }

  if (nudgeTimeoutId) clearTimeout(nudgeTimeoutId);

  nudgeTimeoutId = setTimeout(() => {
    performNudge();
  }, 2000);
  Logger.log('Nudge timer started (2s)');
}

/**
 * Performs the nudge animation: pans slightly horizontally then back.
 */
function performNudge() {
  if (hasNudgedOrInteracted || !isImmersiveMode || currentNodeId !== rootId ||
      isOrientationNudgeActive()) {
    return;
  }

  const containerRect = mainContainer.getBoundingClientRect();
  const naturalWidth = mainImage.naturalWidth;
  if (naturalWidth === 0) return;

  const originalX = currentImmersiveX;
  const scaleY = containerRect.height / mainImage.naturalHeight;
  const renderedWidth = naturalWidth * scaleY;
  const maxX = renderedWidth > containerRect.width ?
      (renderedWidth - containerRect.width) / 2 :
      0;

  const minX = -maxX;
  let nudgeAmount = 40;
  let direction = -1;  // Default to pan left (reveals right content)
  // If panning left would exceed minX, pan right instead.
  if (originalX - nudgeAmount < minX) {
    direction = 1;
  }

  const nudgeX = originalX + (nudgeAmount * direction);

  // Set explicit transition for the nudge movement
  const nudgeTransition =
      'transform 500ms cubic-bezier(0.31, 0.94, 0.34, 1.00)';
  mainImage.style.transition = nudgeTransition;
  if (labelsContainer) {
    labelsContainer.style.transition = nudgeTransition;
  }
  const tooltipEl = document.getElementById('onboarding-tooltip');
  if (tooltipEl) {
    tooltipEl.style.transition = nudgeTransition;
  }

  // 1. Move to nudge position
  currentImmersiveX = nudgeX;
  applyImmersiveTransform();

  // 2. After 600ms, move back to original (if not interrupted)
  nudgeReturnTimeoutId = setTimeout(() => {
    currentImmersiveX = originalX;
    applyImmersiveTransform();
    nudgeReturnTimeoutId = null;
    hasNudgedOrInteracted = true;

    // Clear transitions after return animation completes (500ms later)
    setTimeout(() => {
      mainImage.style.transition = '';
      if (labelsContainer) {
        labelsContainer.style.transition = '';
      }
      const tEl = document.getElementById('onboarding-tooltip');
      if (tEl) {
        tEl.style.transition = '';
      }
    }, 500);
  }, 600);
}

/**
 * Evaluates orientation status and displays landscape rotation nudge
 * overlay if running in immersive mobile app mode in portrait orientation.
 */
function updateOrientationNudge() {
  const overlay = document.getElementById('landscape-nudge-overlay');
  if (!overlay) return;

  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const shouldShow =
      isImmersiveMode && isMobileApp && showMobileLandscapeNudge && isPortrait;

  if (!isPortrait) {
    // Reset dismissed flag on rotation to landscape
    isLandscapeNudgeDismissed = false;
    if (landscapeNudgeDismissTimeout) {
      clearTimeout(landscapeNudgeDismissTimeout);
      landscapeNudgeDismissTimeout = null;
    }
    overlay.style.display = 'none';
    overlay.classList.remove('fade-out');
    document.body.classList.remove('landscape-nudge-active');
    return;
  }

  if (shouldShow && !isLandscapeNudgeDismissed) {
    overlay.style.display = 'flex';
    overlay.classList.remove('fade-out');
    document.body.classList.add('landscape-nudge-active');
    cancelNudge();

    if (!landscapeNudgeDismissTimeout) {
      landscapeNudgeDismissTimeout = setTimeout(() => {
        dismissOrientationNudge(true);
      }, 2500);
    }
  } else if (!shouldShow) {
    if (landscapeNudgeDismissTimeout) {
      clearTimeout(landscapeNudgeDismissTimeout);
      landscapeNudgeDismissTimeout = null;
    }
    overlay.style.display = 'none';
    overlay.classList.remove('fade-out');
    document.body.classList.remove('landscape-nudge-active');
  }
}

window.addEventListener('resize', updateOrientationNudge);
window.addEventListener('orientationchange', updateOrientationNudge);

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('landscape-nudge-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => dismissOrientationNudge(true));
  }
});

/** @suppress {lintChecks} */
;  // NOLINT

})();


/**
 * @fileoverview Progressive DeepZoom Feedback Questionnaire Modal & Telemetry Logging.
 * User Flow:
 *  - Screen 1: Minimalist Thumbs Up / Thumbs Down icons (no text).
 *    - Thumbs Up: Immediately submits positive feedback and closes.
 *    - Thumbs Down: Transitions to Screen 2.
 *  - Screen 2: Thumbs down feedback questionnaire with exact message strings and integrated free-text input.
 *    - Submitting via "Connect" immediately dispatches payload and closes modal (no step 3 / no confirmation screen).
 */

(function() {
  'use strict';

  // ---------------------------------------------------------------------------
  // Telemetry Dispatcher
  // ---------------------------------------------------------------------------
  /**
   * Emits user interaction telemetry events to parent frames and custom event listeners.
   * @param {string} action
   * @param {!Object=} details
   */
  window.emitUserInteraction = function(action, details = {}) {
    const payload = {
      type: 'DEEP_ZOOM_INTERACTION',
      action: action,
      nodeId: typeof currentNodeId !== 'undefined' ? currentNodeId : null,
      timestamp: Date.now(),
      ...details
    };

    try {
      if (window.webkit && window.webkit.messageHandlers &&
          window.webkit.messageHandlers.deepZoomInteraction) {
        window.webkit.messageHandlers.deepZoomInteraction.postMessage(payload);
      } else if (window.parent && window.parent !== window) {
        window.parent.postMessage(payload, '*');
      }
    } catch (e) {
      console.warn('Failed to emit telemetry:', e);
    }

    try {
      window.dispatchEvent(new CustomEvent('deepzoom:interaction', { detail: payload }));
    } catch (e) {}
  };

  // ---------------------------------------------------------------------------
  // Feedback Questionnaire Modal (2-Step Flow)
  // ---------------------------------------------------------------------------
  let feedbackModalEl = null;
  let currentSentiment = null; // 'like' | 'dislike'
  const selectedOptions = new Set();

  const THUMBS_DOWN_OPTIONS = [
    { id: 'difficult_to_navigate', label: 'Difficult to navigate / Glitched' },
    { id: 'poor_resolution', label: 'Poor image resolution' },
    { id: 'didnt_load', label: "Didn't load" },
    { id: 'inaccurate_labels', label: 'Inaccurate labels or details' }
  ];

  const CHECKBOX_UNCHECKED_SVG = `
    <svg class="feedback-checkbox-icon checkbox-unchecked" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="3.5" stroke="currentColor" stroke-width="1.6"/>
    </svg>
  `;

  const CHECKBOX_CHECKED_SVG = `
    <svg class="feedback-checkbox-icon checkbox-checked" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="3.5" stroke="currentColor" stroke-width="1.6"/>
      <path d="M6 10L9 13L14 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  function ensureFeedbackModalDom() {
    if (document.getElementById('deepzoom-feedback-modal')) {
      feedbackModalEl = document.getElementById('deepzoom-feedback-modal');
      return;
    }

    const modal = document.createElement('div');
    modal.id = 'deepzoom-feedback-modal';
    modal.innerHTML =
        `
      <div class="feedback-modal-card" role="dialog" aria-labelledby="feedback-main-title" aria-modal="true">
        <!-- Close Button -->
        <button type="button" class="feedback-modal-close-btn" id="feedback-close-btn" aria-label="Close">
          <span class="google-symbols" style="font-size: 20px;">close</span>
        </button>

        <!-- Header -->
        <div class="feedback-modal-header">
          <h2 id="feedback-main-title" class="feedback-modal-title">Send feedback to Gemini</h2>
        </div>

        <!-- Screen 1: Minimalist Thumbs Up / Down (Icon-only) -->
        <div id="feedback-screen-1" class="feedback-screen active">
          <div class="feedback-question-prompt">Was this immersive view helpful?</div>
          <div class="feedback-minimal-sentiment-row">
            <button type="button" class="feedback-icon-btn feedback-thumb-up-btn" data-sentiment="like" aria-label="Helpful (Thumbs Up)">
              <span class="google-symbols feedback-thumb-icon">thumb_up</span>
            </button>
            <button type="button" class="feedback-icon-btn feedback-thumb-down-btn" data-sentiment="dislike" aria-label="Not helpful (Thumbs Down)">
              <span class="google-symbols feedback-thumb-icon">thumb_down</span>
            </button>
          </div>
        </div>

        <!-- Screen 2: Thumbs Down Details & Integrated Text Input -->
        <div id="feedback-screen-2" class="feedback-screen">
          <div class="feedback-question-group">
            <div class="feedback-prompt-main">Please describe what happened.</div>
          </div>

          <!-- Selectable Issue Pills List & Integrated Input as Last Child -->
          <div class="feedback-options-list" id="feedback-options-list">
            ${
            THUMBS_DOWN_OPTIONS
                .map(
                    opt => `
              <button type="button" class="feedback-option-pill" data-opt-id="${
                        opt.id}">
                <span class="feedback-pill-label">${opt.label}</span>
                <span class="feedback-pill-indicator">
                  ${CHECKBOX_UNCHECKED_SVG}
                  ${CHECKBOX_CHECKED_SVG}
                </span>
              </button>
            `).join('')}
            <div class="feedback-input-wrapper">
              <input
                type="text"
                class="feedback-pill-input"
                id="feedback-text-input"
                placeholder="Other"
                maxlength="500"
                autocomplete="off"
              />
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="feedback-footer-actions">
            <button type="button" class="feedback-action-cancel" id="feedback-cancel-btn">Cancel</button>
            <button type="button" class="feedback-action-connect" id="feedback-connect-btn">Send</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    feedbackModalEl = modal;

    // Attach event listeners
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeFeedbackModal();
    });

    const closeBtn = modal.querySelector('#feedback-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', window.closeFeedbackModal);

    const cancelBtn = modal.querySelector('#feedback-cancel-btn');
    if (cancelBtn) cancelBtn.addEventListener('click', window.closeFeedbackModal);

    // Screen 1: Thumbs Up (Immediately submits and ends)
    const thumbUpBtn = modal.querySelector('.feedback-thumb-up-btn');
    if (thumbUpBtn) {
      thumbUpBtn.addEventListener('click', () => {
        currentSentiment = 'like';
        selectedOptions.clear();
        submitFeedback({ sentiment: 'like', categories: [], comment: '' });
      });
    }

    // Screen 1: Thumbs Down (Advances to Screen 2)
    const thumbDownBtn = modal.querySelector('.feedback-thumb-down-btn');
    if (thumbDownBtn) {
      thumbDownBtn.addEventListener('click', () => {
        currentSentiment = 'dislike';
        selectedOptions.clear();
        if (typeof window.emitUserInteraction === 'function') {
          window.emitUserInteraction('FEEDBACK_THUMB_DOWN');
        }
        showScreen(2);
      });
    }

    // Screen 2: Issue pill toggle selection
    const optionPills = modal.querySelectorAll('.feedback-option-pill');
    optionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const optId = pill.dataset.optId;
        if (selectedOptions.has(optId)) {
          selectedOptions.delete(optId);
          pill.classList.remove('selected');
        } else {
          selectedOptions.add(optId);
          pill.classList.add('selected');
          if (optId === 'inaccurate_labels') {
            const textInput = modal.querySelector('#feedback-text-input');
            if (textInput) {
              textInput.focus();
            }
          }
        }
      });
    });

    // Screen 2: Connect Button (Direct submit and close)
    const connectBtn = modal.querySelector('#feedback-connect-btn');
    if (connectBtn) {
      connectBtn.addEventListener('click', () => {
        const textInput = modal.querySelector('#feedback-text-input');
        const comment = textInput ? textInput.value.trim() : '';
        submitFeedback({
          sentiment: 'dislike',
          categories: Array.from(selectedOptions),
          comment: comment
        });
      });
    }
  }

  /**
   * Switches active screen (1 or 2).
   * @param {number} screenNum
   */
  function showScreen(screenNum) {
    if (!feedbackModalEl) return;
    const screen1 = feedbackModalEl.querySelector('#feedback-screen-1');
    const screen2 = feedbackModalEl.querySelector('#feedback-screen-2');

    if (screenNum === 1) {
      if (screen1) screen1.classList.add('active');
      if (screen2) screen2.classList.remove('active');
    } else if (screenNum === 2) {
      if (screen1) screen1.classList.remove('active');
      if (screen2) screen2.classList.add('active');

      // Reset selection state
      feedbackModalEl.querySelectorAll('.feedback-option-pill').forEach(pill => {
        pill.classList.remove('selected');
      });
      const textInput = feedbackModalEl.querySelector('#feedback-text-input');
      if (textInput) textInput.value = '';
    }
  }

  window.openFeedbackModal = function() {
    console.log('[DeepZoom JS] 💬 openFeedbackModal() called');
    ensureFeedbackModalDom();
    currentSentiment = null;
    selectedOptions.clear();

    const textInput = feedbackModalEl.querySelector('#feedback-text-input');
    if (textInput) textInput.value = '';

    showScreen(1);
    feedbackModalEl.classList.add('visible');
  };

  window.closeFeedbackModal = function() {
    console.log('[DeepZoom JS] ❌ closeFeedbackModal() called');
    if (document.activeElement &&
        typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    if (feedbackModalEl) {
      feedbackModalEl.classList.remove('visible');
    }
    window.scrollTo(0, 0);
  };

  function submitFeedback(data) {
    console.log(
        '[DeepZoom JS] 🚀 submitFeedback() called with:', JSON.stringify(data));
    if (!feedbackModalEl) return;

    const activeNodeId = typeof currentNodeId !== 'undefined' ?
        currentNodeId :
        (window.deepZoomNodeId || null);
    const activeTemplateId = typeof currentTemplateId !== 'undefined' ?
        currentTemplateId :
        (window.deepZoomTemplateId || null);

    const payload = {
      sentiment: data.sentiment || currentSentiment || 'like',
      categories: data.categories || Array.from(selectedOptions),
      comment: data.comment || '',
      nodeId: activeNodeId,
      templateId: activeTemplateId,
      timestamp: Date.now()
    };

    const message = {type: 'lightboxFeedbackRequest', payload: payload};
    console.log(
        '[DeepZoom JS] 📦 posting message to native & parent:',
        JSON.stringify(message));

    // 1. Direct WebKit message handler (iOS native WKWebView)
    if (window.webkit && window.webkit.messageHandlers &&
        window.webkit.messageHandlers.lightboxFeedbackRequest) {
      console.log(
          '[DeepZoom JS] ✅ window.webkit.messageHandlers.lightboxFeedbackRequest exists, invoking postMessage');
      try {
        window.webkit.messageHandlers.lightboxFeedbackRequest.postMessage(message);
      } catch (e) {
        console.warn('Failed to post feedback to lightboxFeedbackRequest message handler:', e);
      }
    } else if (window.webkit && window.webkit.messageHandlers &&
        window.webkit.messageHandlers.deepZoomFeedback) {
      console.log(
          '[DeepZoom JS] ✅ window.webkit.messageHandlers.deepZoomFeedback exists, invoking postMessage');
      try {
        window.webkit.messageHandlers.deepZoomFeedback.postMessage(message);
      } catch (e) {
        console.warn('Failed to post feedback to deepZoomFeedback message handler:', e);
      }
    } else if (window.parent && window.parent !== window) {
      // 2. Web / Iframe — post to parent frame
      try {
        window.parent.postMessage(message, '*');
      } catch (e) {
        console.warn('Failed to post feedback submission message:', e);
      }
    } else {
      // 3. Android WebView (top-level) — post to self so the injected
      // lightboxScript bridge can forward to the native channel.
      try {
        window.postMessage(message, '*');
      } catch (e) {
        console.warn('Failed to post feedback submission message:', e);
      }
    }

    // Immediately close modal
    window.closeFeedbackModal();
  }

  // ---------------------------------------------------------------------------
  // Host postMessage Listeners
  // ---------------------------------------------------------------------------
  window.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'requestFeedback') {
      const feedbackBtn = document.getElementById('lightbox-feedback-button');
      const shouldShow = event.data.action === 'show' || event.data.visible === true || event.data.enabled === true;
      if (feedbackBtn) {
        if (shouldShow) {
          feedbackBtn.classList.remove('lightbox-feedback-button--hidden');
          feedbackBtn.style.display = '';
        } else {
          feedbackBtn.classList.add('lightbox-feedback-button--hidden');
          feedbackBtn.style.display = 'none';
        }
      }
    }
  });

  // Wire feedback button click to modal open
  document.addEventListener('DOMContentLoaded', () => {
    const feedbackBtn = document.getElementById('lightbox-feedback-button');
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof window.emitUserInteraction === 'function') {
          window.emitUserInteraction('FEEDBACK_OPEN');
        }
        window.openFeedbackModal();
      });
    }
  });

  const existingFeedbackBtn = document.getElementById('lightbox-feedback-button');
  if (existingFeedbackBtn) {
    existingFeedbackBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof window.emitUserInteraction === 'function') {
        window.emitUserInteraction('FEEDBACK_OPEN');
      }
      window.openFeedbackModal();
    });
  }
})();
