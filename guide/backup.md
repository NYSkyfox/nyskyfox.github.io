# 📁 文件管理

> 管理 OsEasy 学生端关键文件的备份与恢复（分组操作），以及脚本文件清理。数据保存在 `C:\Users\<用户名>\OsEasy-ToolKit\backups`。

## 备份
| 分组 | 包含文件 |
|------|----------|
| **锁定相关** | `LockKeyboard.dll`、`LoadDriver.exe`、`KbDriver.exe` |
| **黑屏/控屏** | `BlackSlient.exe`、`MultiClient.exe` |
| **网络/USB** | `OeNetLimit.sys`、`OeNetLimitSetup.exe`、`oenetlimitx64.cat`、`easyusbflt.sys`、`ProcFireWall.sys` |
| **目录保护** | `FbdATS.sys` |
| **嗅探** | `x86\LISSNetInfoSniffer.exe` |

- **备份所有关键文件**：一键备份全部文件（已存在的备份自动跳过）
- **单个备份**：每个文件有独立按钮，可单独备份

## 恢复
- **恢复所有关键文件**：从备份目录恢复全部文件到学生端目录
- **单个恢复**：每个文件有独立按钮，可单独恢复

## 清理
**删除脚本文件**：清理工具箱生成的临时脚本（cmd/bat 等）。

::: warning 注意
- 解锁管理页执行解锁前会自动调用备份逻辑，这是"先备份再操作"的安全机制。
- 恢复文件需要管理员权限；无备份时恢复会提示先执行备份。
:::