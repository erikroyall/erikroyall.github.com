---
layout: page
title: Erik Royall
tagline: Supporting tagline
---
{% include JB/setup %}


<h1 class="title">Erik Royall</h1>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
