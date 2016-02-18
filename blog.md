---
layout: default
title: Blog
---

============
  TEH BLOG
============

{% for post in site.posts %}
  [{{ post.title }}]({{ post.url}}) - {{ post.date | date: "%d %B %Y" }}
{% endfor %}
