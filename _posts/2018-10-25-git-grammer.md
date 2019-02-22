---
layout: post
title: "2018-10-25-git常用命令"
excerpt: "git常用命令及设置"
categories: code&nbsp;share
comments: true
---
  > git 常用命令

  1. 初始化Git仓库：`git init`
  2. 将文件（新添加的或者修改的）添加进暂存区：`git add file`
  3. 查看被修改的文件状态：`git status`
  4. 将暂存区的文件提交到最终的分支仓库中：`git commit -m "修改内容"`
  5. 查看文件的不同之处：`git diff`
  6. 查看提交的历史纪录：`git log`
  7. 查看所有的历史纪录：`git reflog`
  8. 返回历史版本（回退）：`git reset`
  9. 返回文件修改之前的状态：`git checkout - -file`
  10. 建立与Github的远程仓库连接：`git remote add origin git@github.com:Selvin11/..`
  11. 关联本地和远程的仓库内容：`git push -u origin master`
  12. clone远程仓库内容到本地：`git clone git@github.com:Selvin11/..`
  13. 创建新的分支并切换到该分支：`git checkout -b gh-pages`这其实是两个步骤，首先创建分支：`git branch gh-pages`,然后是进入该分支：`git checkout gh-pages`
  14. 合并新分支到master分支上：`git merge gh-pages`,默认Fast forward模式,但此模式会将分支信息丢掉，一般使用`git merge --no-ff -m "merge with no-ff" gh-pages`,表示禁用Fast forward模式
  15. 删除分支：`git branch -d gh-pages`
  16. 解决冲突，当不同分支提交相同文件时，但是内容不同，就会造成commit提交失败，此时需要手动解决，将两处内容重新整合成一样的，然后add,commit,用`git log --graph`命令可以看到分支合并图。
  17. Bug分支，面对突如其来的Bug，不要慌，我们可以暂时隐藏工作区，创建Bug分支，解决之后，合并后并删除，接下来将隐藏的现实出来就行了：`git stash`隐藏，`git stash list`可以查看隐藏内容列表，然后采用`git stash pop`来恢复隐藏的工作区，恢复的同时也将stash删除了。
  18. 对于已经commit的分支，但未push，我们需要删除它，怎么办：`git branch -D filename`,采用强制删除分支命令
  19. 查看远程库内容：`git remote`,详细内容`git remote -v`,推送分支内容：`git push origin <name>`,origin是当初建立连接时为远程库起的名字，抓取分支,从Github上clone下来的项目只有master分支，其他分支需要抓取：`git checkout -b gh-pages origin/gh-pages`
  20. 多人协作：

  - 查看远程库信息，使用`git remote -v`；本地新建的分支如果不推送到远程，对其他人就是不可见的；
  - 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
  - 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
  - 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
  - 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

  > linux

  - mkdir filename 创建目录
  - touch index.js 创建文件
  - rm index.js 删除文件
  - rm -r filename 删除目录
