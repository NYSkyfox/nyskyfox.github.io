@ECHO OFF
title OsEasyToolBox-All
sc stop MMPC
sc stop OeNetLimit
taskkill /f /t /im MultiClient.exe
taskkill /f /t /im MultiClient.exe
taskkill /f /t /im BlackSlient.exe
timeout /t 2
cd /D "C:\Program Files (x86)\Os-Easy\os-easy multicast teaching system\"
del /F /S LockKeyboard.dll
del /F /S LoadDriver.exe
del /F /S LoadDriver.exe
del /F /S oenetlimitx64.cat
del /F /S BlackSlient.exe
cd x86
del /F /S LISSNetInfoSniffer.exe
cd ..
del /F /S MultiClient.exe
sc config MMPC start=disabled
REG ADD "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /v OsEasyStudent /t REG_SZ /d "C:\Program Files (x86)\Os-Easy\os-easy multicast teaching system\Student.exe"
schtasks /create /tn "OsEasyToolBox_RefreshNet" /sc onlogon /delay 0000:10 /tr "ipconfig /release & timeout /t 1 /nobreak & ipconfig /renew & timeout /t 5 /nobreak & taskkill /f /im explorer.exe & start explorer.exe" /ru SYSTEM /f
schtasks /create /tn "OsEasyToolBox_SuspendStudent" /sc onlogon /delay 0001:00 /tr "powershell -Command ^"$p=Get-Process Student -ErrorAction SilentlyContinue; if($p){$p.Suspend()}^"" /ru SYSTEM /f
timeout /t 5
taskkill /f /t /im Student.exe
shutdown /l
exit