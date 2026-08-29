# 🖥️ DLL 工具

> 直接调用学生端自带的原生 DLL 接口控制 USB / 网络管控，并查询实时管控状态。

## USB 管控
| 操作 | 说明 |
|------|------|
| **关闭 USB 管控** | 调用 `easyusbctrl.dll` 的 `EasyUsb_StopWorking` 停止 USB 管控，允许使用 USB 设备 |
| **启动 USB 管控** | 调用 `EasyUsb_StartWorking` 启动 USB 管控，限制 USB 设备使用 |

## 网络管控
| 操作 | 说明 |
|------|------|
| **开启网络管控** | 调用 `OeNetlimit.dll` 的 `DisableInternet` 开启网络管控，限制网络访问 |
| **关闭网络管控** | 调用 `EnableNet` 关闭网络管控，恢复网络访问 |

## 查询管控状态
点击「查询管控状态」可获取：
- **USB 管控**：调用 `EasyUsb_IsWorking` 查询，返回错误码及输出参数
- **网络管控**：通过 `sc query OeNetLimit` 查询服务运行状态

::: tip 提示
- DLL 路径为学生端目录下的 `\x64\easyusbctrl.dll` 与 `\x64\OeNetlimit.dll`。
- 与解锁管理页的区别：本页直接调用官方 DLL 接口（官方通道），解锁管理页则通过停止服务/驱动实现，两者可互补使用。
:::