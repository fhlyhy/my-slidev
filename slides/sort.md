---

title: 排序
author: 冯浩麟
course: 信息学奥赛
email: fhl@gmail.com
date: 2026 年 1 月 9 日
layout: default
slideNumber: true

---

---
src: ./_partials/cover.md
layout: cover

---

# 第一节：排序的基本概念

- 什么是排序
- 排序的作用
- 常见排序算法

---

# 冒泡排序

```cpp
for (int i = 1; i < n; i++) {
    for (int j = 1; j <= n - i; j++) {
        if (a[j] > a[j + 1]) swap(a[j], a[j + 1]);
    }
}
小结

排序是基础算法

后面会继续讲选择排序、插入排序、快速排序

---
