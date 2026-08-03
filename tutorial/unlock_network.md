# 🌐 教程篇-解锁网络限制

> 本工具网络解锁的本质原理即自动执行四条命令，因此即使不使用工具，你也可以手动输入几条命令来解锁噢易学生端的网络限制。本教程手把手教你操作。

## 适用场景

- 在信息课上，学生端电脑被牢逝限制了网络
- 仅需恢复上网功能，不需要解锁其他限制
- 想了解解锁网络的底层原理

## 操作步骤

### 一：打开 CMD（命令提示符）

::: info 打开 CMD（命令提示符）

**操作示例：**
1. 点击任务栏搜索按钮（或按 `Win` 键）
2. 输入 `cmd`，在搜索结果中找到"命令提示符"
   <img loading="lazy" src="/images/unlock_network/1.png" alt="搜索 cmd">
3. 右键点击"命令提示符" → 选择"以管理员身份运行"，若弹出UAC用户账户控制，请点击"是"确认
   <img loading="lazy" src="/images/unlock_network/2.png" alt="以管理员身份运行">
4. 出现 CMD 黑色窗口即成功
   <img loading="lazy" src="/images/unlock_network/3.png" alt="CMD 成功打开">

> 机房电脑通常默认登录管理员账户，直接 Win+R 运行 cmd 就是管理员权限，无需额外操作。
:::

### 二：停止 MMPC 服务（学生端根服务）

::: info 停止 MMPC 服务（学生端根服务）

```batch
sc stop mmpc
```

停止学生端根服务（MMPC），这是管控学生端的中心服务（该服务没什么实质性的管控，最大的作用为实时监控学生端是否被偷偷关闭，若检测到学生端被关闭，就会自动重启相关进程。所以这是解锁的第一步）

**操作示例：**
1. 在 CMD 中输入命令 `sc stop mmpc` 并回车
   <img loading="lazy" src="/images/unlock_network/4.png" alt="输入 sc stop mmpc">
2. 显示 `STATE: 1 STOPPED` 即表示执行成功。命令不区分大小写
   <img loading="lazy" src="/images/unlock_network/5.png" alt="执行成功">
:::

### 三：停止 OeNetlimit 服务（网络限制服务）

::: info 停止 OeNetlimit 服务（网络限制服务）

```batch
sc stop oenetlimit
```

停止网络过滤和限制服务，解除驱动级服务对网络的限制。

**操作示例：**
1. 在 CMD 窗口中输入 `sc stop oenetlimit` 并回车
   <img loading="lazy" src="/images/unlock_network/6.png" alt="输入 sc stop oenetlimit">
2. 显示 `STATE: 1 STOPPED`（或 `STOP_PENDING`）即表示执行成功
:::

四：结束 DeviceControl_x64.exe（设备控制进程）

::: info 结束 DeviceControl_x64.exe（设备控制进程）

```batch
taskkill /f /im DeviceControl_x64.exe
```

结束设备控制进程，解除网络和程序限制

**操作示例：**
1. 右键任务栏空白处 → 选择"任务管理器"
   <img loading="lazy" src="/images/unlock_network/7.png" alt="打开任务管理器">
2. 点击左下角的"详细信息"展开完整列表
   <img loading="lazy" src="/images/unlock_network/8.png" alt="右键任务栏打开任务管理器">
3. 在进程列表中找到 `DeviceControl_x64.exe` → 右键 → 选择"结束任务"
   <img loading="lazy" src="/images/unlock_network/9.png" alt="点击详细信息">
:::


总共就 **4 个步骤**，逐步进行即可，十几秒就能搞定。

## 验证解锁成果

解锁后，尝试以下操作验证网络是否恢复：

1. 打开浏览器，访问任意网站（如 `baidu.com`）
2. 如果能正常加载，说明网络已解锁 ✅
3. 如果仍然受限，尝试 **重启浏览器** 或检查是否还有其他限制

## 常见问题
::: tip 关闭服务时报错
### Q：执行 `sc stop` 提示服务名无效？

```
[SC] OpenService FAILED 1060: 指定的服务未安装。
```

这说明你输错了，请重新输。

### Q：执行 `sc stop` 提示服务未启动？

```
[SC] OpenService FAILED 1062: 指定的服务未启动。
```

这说明该服务未启动/已被关闭，可能是你重复输入了同一条命令，且已经执行成功过了，请去执行下一步吧。

### Q：执行 `sc stop` 拒绝访问？

```
[SC] OpenService 失败 5: 拒绝访问。
```

这说明你未以管理员身份运行 `CMD`，请重新以管理员身份运行 `CMD`
:::

### Q：重启电脑后网络又被限制了？

这是正常的——学校机房将计算机设为了每次重启时还原，也就是说每次重启都不会保留你的任何内容，我也没办法，只能每次上课时进行解锁。

### Q：解锁后任务栏的网络图标仍然显示"无Internet"或黄色感叹号？

这是正常现象。学生端网络限制解除后，系统网络状态指示可能需要一段时间才能刷新。**请直接打开浏览器访问任意网站**，你会发现网络实际上已经恢复正常了，不需要理会网络图标的显示状态。

### Q：终止后又自动恢复了怎么办？

这说明你没有成功的关闭学生端根服务，请尝试重新关闭。