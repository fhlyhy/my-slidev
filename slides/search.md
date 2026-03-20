---
title: 搜索
author: 冯浩麟
course: 信息学奥赛
email: fhl@gmail.com
date: 2026 年 1 月 10 日
layout: default
slideNumber: true
---

---
src: ./_partials/cover.md
layout: cover
---

# 第一节：搜索

- 顺序查找
- 二分查找

---

# 二分查找

```cpp
int l = 1, r = n;
while (l <= r) {
    int mid = (l + r) / 2;
    if (a[mid] == x) return mid;
    if (a[mid] < x) l = mid + 1;
    else r = mid - 1;
}
```

nis 
---
