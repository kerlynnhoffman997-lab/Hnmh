# 网站背景音乐

`fair-background.wav` 是为本网站编写的原创程序合成背景音乐，48 秒，80 BPM，D 大调五声调式，24 kHz 双声道 16-bit PCM WAV。

音乐由轻柔拨弦、少量合成笛音、低音和木质节拍组成。旋律、伴奏与音色均由确定性的 Python 程序生成，未使用第三方音乐、现成旋律、录音采样或声音字体。它是营造浏览氛围的当代配乐，不是庙会现场录音，也不代表任何地方仪式或传统曲牌。

首尾采用环形混音保留余音，可连续循环。合成脚本位于项目工作目录的 `github-pages/qa/compose-music.py`，校验记录位于同目录 `music-validation.json`。浏览器端应使用较低音量，遵循用户的声音开关；互动音效与此文件独立。

2026-10-22 更新：浏览器优先请求 `fair-background.mp3`（673,008 字节），比 WAV 母版（4,608,044 字节）减少 85.39%。MP3 解码失败时再请求 WAV；正常播放不下载两份文件。编码保持 48 秒、24 kHz 双声道，母版未改动。编码脚本与数值检查为工作目录中的 `github-pages/qa/encode-music.py`、`music-encoding-validation.json`。

离线编码工具使用 [SoundFile 0.13.1](https://github.com/bastibe/python-soundfile)（BSD-3-Clause）及其附带的 [libsndfile 1.2.2](https://github.com/libsndfile/libsndfile)（LGPL-2.1）；工具仅用于制作此原创音频，不随网站分发，也没有新增浏览器端音频依赖。

播放控制保留单一 Web Audio 音频上下文：音乐开关平滑淡入淡出，重新开启从原进度继续；展开故事时将配乐降至当前音量的 48%，收起后恢复。进入庙会、查看小场景与退回上一级采用轻柔且不同的合成提示音。初访保持静音，音效与配乐可以分别关闭或调节音量，切换到后台自动暂停。
